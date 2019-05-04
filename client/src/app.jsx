const React = require('react');
const ReactDOM = require('react-dom');

console.log('basic test');

const A = () => (
  <div>asdf</div>
);

ReactDOM.render(
  <A />,
  document.getElementById('app'),
);
