import React from 'react'

export default function Button(props) {
  const {classes} = props.theme
  return (
    <button className={classes.button}>
      <span className={classes.icon}></span>
    </button>
  )
}
