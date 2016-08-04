### Definition

Theme is an object that defines the look and feel of a component. A component is allowed to implement a __subset__ of this standard.

### Reserved Properties

Reserved properties are `styles`, `classes` and `themes`. It is allowed to use all of them in one Theme.

### Options

Any property name other than reserved one, can be used as an option.
Option values can be of any type.

Example

```javascript
const theme = {
  option1: value1,
  option2: value2
}
```

### Styles

A `styles` object is a map of names and `style` objects, where `name` is any valid property name and `value` is a `style` object.
Style object may have any property names and values which can be rendered inline, defined by the [css-style-attr](https://www.w3.org/TR/css-style-attr/) specification.

```javascript
const theme = {
  styles: {
    button: {
      padding: 10,
      boxSizing: 'border-box'
    }
  }
}
```

### Classes

A `classes` object is a map of names and class names. Name is any valid property name. Value is a set of space-separated tokens representing the various classes. [html class attribute spec](https://www.w3.org/TR/2011/WD-html5-20110525/elements.html#classes).

```javascript
const theme = {
  classes: {
    button: 'button-df3d4',
    icon: 'icon-j4h4g'
  }
}
```

### Subthemes

Subthemes are useful when you have a higher order component exposed to the user, but you need to make it's child components themeable as well.

A `themes` object is a map of theme names and themes. Theme name can be any valid property name. Value is `theme` object defined on top of this document.

```javscript
const theme = {
  classes: {
    button: 'button-df3d4',
  },
  themes: {
    childComponentName: {
      classes: {
        button: 'button-fwer23'
      }
    }
  }
}
```
