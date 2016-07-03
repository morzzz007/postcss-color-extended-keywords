# PostCSS Color Extended Keywords [![Build Status][ci-img]][ci] [![Coverage Status](https://coveralls.io/repos/github/morzzz007/postcss-color-extended-keywords/badge.svg?branch=master)](https://coveralls.io/github/morzzz007/postcss-color-extended-keywords?branch=master)

[PostCSS] plugin to transform basic and extended css color keywords to HEX RGB.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/morzzz007/postcss-color-extended-keywords.svg
[ci]:      https://travis-ci.org/morzzz007/postcss-color-extended-keywords


Input:
```css
.foo {
  color: red;
}
```

Output:
```css
.foo {
  color: #FF0000;
}
```

## Usage

```js
postcss([ require('postcss-color-extended-keywords') ])
```


## Supported CSS properties
* `color`
* `background`
* `background-color`
* `border`
* `border-color`
* `outline`
* `outline-color`
* `text-shadow`
* `box-shadow`

## Supported keywords
* [Basic color keywords](https://www.w3.org/TR/css3-color/#html4)
* [Extended color keywords](https://www.w3.org/TR/css3-color/#svg-color)

See [PostCSS] docs for examples for your environment.
