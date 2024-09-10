// app/login/page.jsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/libs/firebase/firebase' // Import auth after firebase is initialized
import { signInWithEmailAndPassword } from 'firebase/auth'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/admin') // Redirect to admin page upon successful login
    } catch (err) {
      setError('Failed to log in. Please check your credentials.')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
