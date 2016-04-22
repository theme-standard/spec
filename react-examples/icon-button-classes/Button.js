import React from 'react'

export default function Button({theme}) {
  return (
    <button className={theme.button}>
      <span className={theme.icon}></span>
    </button>
  )
}
