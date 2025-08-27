import React from 'react'
import { ImageResponse } from 'next/og'

export function GET() {
  return new ImageResponse(
    React.createElement('div', {
      style: {
        fontSize: 24,
        background: '#B8860B',
        width: '100%',
        height: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'serif',
        fontWeight: 'bold',
        borderRadius: '4px',
      }
    }, 'JL'),
    {
      width: 32,
      height: 32,
    },
  )
}
