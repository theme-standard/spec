import React, {PropTypes} from 'react'

/**
 * Wrapps the passed component with a Theme component, which will always pass
 * the theme as a prop.
 * NOTE: useTheme has challenge predicting what the original component expects
 * @param {Object} Component - React component being wrapped
 * @param {Object} themeMapping - mapping of theme to components props
 */
export default function useTheme(Component, themeMapping) {
  function Theme(props) {
    let theme, rest;
    // take theme related props out and map, then pass rest of them down
    Object.keys(props).forEach((key, value) => {
      if(themeMapping.hasOwnProperty(key)) {
        theme.key = themMapping[key]
      } else {
        rest.key = value
      }
    })
    // TODO: test this utility function and also add test/UI for all react-examples
    return <Component {...theme} {...rest} />
  }

  Theme.propTypes = {
    theme: PropTypes.object.isRequired
  }

  return Theme
}
