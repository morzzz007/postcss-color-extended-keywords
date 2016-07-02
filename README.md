# PostCSS Color Extended Keywords [![Build Status][ci-img]][ci]

[PostCSS] plugin to transform basic and extended css color keywords to HEX RGB.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/morzzz007/postcss-color-extended-keywords.svg
[ci]:      https://travis-ci.org/morzzz007/postcss-color-extended-keywords

```css
.foo {
  color: red;
}
```

```css
.foo {
  color: #FF0000;
}
```

## Usage

```js
postcss([ require('postcss-color-extended-keywords') ])
```

See [PostCSS] docs for examples for your environment.
