import React from 'react'

export default function Button(props) {
  const {styles} = props.theme
  return (
    <button style={styles.button}>
      <span style={styles.icon}></span>
    </button>
  )
}
