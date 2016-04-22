import React from 'react'

export default function Button({theme, children}) {
  return <button style={theme.style}>{children}</button>
}
