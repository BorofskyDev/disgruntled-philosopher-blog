import { useState } from 'react'

export const useContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [captchaValid, setCaptchaValid] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // Any validation, normalization, or other logic could also be here
  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
    setPhone('')
    setWebsite('')
  }

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    phone,
    setPhone,
    website,
    setWebsite,
    captchaValid,
    setCaptchaValid,
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
    resetForm,
  }
}
