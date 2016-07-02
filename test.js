import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
  return postcss([ plugin(opts) ]).process(input)
  .then(result => {
    t.deepEqual(result.css, output);
    t.deepEqual(result.warnings().length, 0);
  });
}

test('replaces color property', t => {
  return run(t,
    '.yolo{ color: red; }',
    '.yolo{ color: #FF0000; }');
});

test('replaces border property', t => {
  return run(t,
    '.yolo{ border: black 1px solid; }',
    '.yolo{ border: #000000 1px solid; }');
});

test('should be case insensitive', t => {
  return run(t,
    '.yolo{ border: BlAcK 1px solid; }',
    '.yolo{ border: #000000 1px solid; }');
});

test('replaces color even if it\'s not the first value', t => {
  return run(t,
    '.yolo{ border: 1px solid red; }',
    '.yolo{ border: 1px solid #FF0000; }');
});

test('replaces multiple properties', t => {
  return run(t,
    `p {
      border-left: 6px solid red;
      background-color: lightgrey;
    }`,
    `p {
      border-left: 6px solid #FF0000;
      background-color: #D3D3D3;
    }`);
});

test('replaces multiple colors inside a property', t => {
  return run(t,
    'background: linear-gradient(red, yellow);',
    'background: linear-gradient(#FF0000, #FFFF00);');
});
