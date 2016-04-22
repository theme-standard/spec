## Standard for Theming

This is a __standard__ for theming of components. Developers and especially publishers of components should use it to unify their theming API across all components.

Currently a number of UI libraries are using different approaches. Some of them are very opinionated and bad by design.

We can differentiate 3 approaches:

1. Traditional CSS class names.
1. Generated CSS class names.
1. Inline Styles.

In order to allow component authors to use any of this approaches, we need to define a JSON DSL which acts as an interface for the theme.

[See React Examples.](./react-examples)

### Definition of Theme

Theme is a [JSON](http://www.json.org/) that defines the look and related functionality of a component. A component is allowed to implement a __subset__ of this standard.

### Reserved Properties

Reserved properties are `style`, `styles` and `classes`.

### Options

Any property name other than reserved one, can be used as an option.
Option values are any legal JSON values.

### Style

A `style` property is reserved for style objects. Style object may have any property names and values which can be rendered inline, defined by the [css-style-attr](https://www.w3.org/TR/css-style-attr/) specification.

### Styles

A `styles` object is a map of named `style` objects, where `name` is any valid JSON property name and `value` is a `style` object.

### Classes

A `classes` object is a map of names and class names. Name is any valid property name. Value is a set of space-separated tokens representing the various classes. [html class attribute spec](https://www.w3.org/TR/2011/WD-html5-20110525/elements.html#classes).

### Theme Styles vs. System Styles

A Component author needs to differentiate System Styles from Theme Styles. More styles in a Theme means more flexibility for the user. System styles should be used for parts of components which can not or should not be customizable.

Example properties a Theme can define:

1. Colors
1. Images
1. Text direction
1. Shadows
1. Rounded Corners
1. Animations

### Development

This is an early stage proposal. Feel free to create issues and discribe use cases. Also feel free to make the wording better.


