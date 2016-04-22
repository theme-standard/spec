import React, {PropTypes} from 'react'

/**
 * Wrapps the passed component with a Theme component, which will always pass
 * the theme as a prop.
 */
export default function useTheme(Component, theme) {
  function Theme(props) {
    return <Component {...props} theme={theme} />
  }

  Theme.propTypes = {
    theme: PropTypes.object.isRequired
  }

  return Theme
}
