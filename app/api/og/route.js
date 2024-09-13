import React from 'react'
import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'The Disgruntled Philosopher'

  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          fontSize: '64px',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      React.createElement('h1', null, title)
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
