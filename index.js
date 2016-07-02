const postcss = require('postcss');
const colors = require('./colors');

const supportedProps = [
  'color',
  'background',
  'background-color',
  'border',
  'border-color',
  'outline',
  'outline-color',
  'text-shadow',
  'box-shadow'
];

const supportedDeclarations =
  new RegExp('\\b(' + supportedProps.join('|') + ')\\b');

const supportedColors = new RegExp('\\b(' +
  Object.getOwnPropertyNames(colors).join('|') +
')\\b', 'gi');

module.exports = postcss.plugin('postcss-color-extended-keywords', opts => {
  opts = opts || {};

  return css => {
    return new Promise(resolve => {
      css.walkDecls(supportedDeclarations, decl => {
        decl.value = decl.value.replace(
          supportedColors,
          match => colors[match.toLowerCase()][0]
        );
      });
      resolve();
    });
  };
});
