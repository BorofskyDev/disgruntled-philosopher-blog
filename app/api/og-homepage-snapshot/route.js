import { ImageResponse } from '@vercel/og'

export const runtime = 'edge' 

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: '#f4f4f4',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <h1 style={{ color: '#333' }}>The Disgruntled Philosopher</h1>
        <p style={{ color: '#666' }}>
          Politics, life, and philosophy reflections.
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
