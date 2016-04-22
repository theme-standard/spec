import React from 'react'

export default function Button({theme}) {
  return (
    <button style={theme.button}>
      <span style={theme.icon}></span>
    </button>
  )
}
