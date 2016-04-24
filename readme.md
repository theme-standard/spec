## Standard for Theming

This is a __standard__ for theming of components. Developers and especially publishers of components should use it to unify their theming API across all components.

Currently a number of UI libraries are using different approaches. Some of them are very opinionated and bad by design, others just don't have the desired flexibility.

__We can differentiate 3 approaches:__

1. Traditional CSS class names.
1. Generated CSS class names.
1. Inline Styles.

In order to allow component authors to use __any__ of this approaches, we need to define a Theme Interface.

- [Spec](./spec.md)
- [React Examples.](./react-examples)

### Theme Styles vs. System Styles

A Component author needs to differentiate System Styles from Theme Styles. More styles in a Theme means more flexibility for the user. System styles should be used for parts of components which can not or should not be customizable.

A Theme should define:

1. Font
1. Colors
1. Images
1. Text direction
1. Shadows
1. Rounded Corners
1. Animations
1. Margins
1. Paddings

When components logic uses some Theme property to modify it's behaviour, it should be a Theme Option.

### Development

This is an early stage proposal. Feel free to create issues and discribe use cases. Also feel free to make the wording better.


