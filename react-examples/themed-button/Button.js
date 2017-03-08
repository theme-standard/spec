/**
 * This is demonstrating a plain React button using standard coding practises, which:
 *   1. Accept standard classes for styling (also consider usage of popular libraries like https://github.com/JedWatson/classnames)
 *   2. Or accept arbitrary props for styling or non styling reasons. eg. icon='star'
 * Forcing anything like props.theme would hinder migration of existing components
 */

import React from 'react'

export default function Button(props) {
  const {classes} = props.classes  // eg. { button: 'class-to-use-on-button', icon: 'class-to-use-on-icon' }

  return (
    <button className={classes.button}>
      <span className={classes.icon} icon={props.icon}></span>
    </button>
  )
}
