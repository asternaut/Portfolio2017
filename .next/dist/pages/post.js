'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('h1', {
    'data-jsx': 4213069368
  }, props.url.query.title), _react2.default.createElement('div', { className: 'markdown', 'data-jsx': 4213069368
  }, _react2.default.createElement(_reactMarkdown2.default, { source: '\n\n1. Favorite font? Montserrat (this typography is Montserrat!)\n2. If I was a Pantone swatch I think I\'d be [2225 U](http://68.media.tumblr.com/b0541a2368fed8ec0f33e5d410496bf0/tumblr_ob96x38k851uf7do3o1_400.jpg)\n3. Yes I use a Wacom\n4. CSS over JSS purely because syntax\n5. I think minimalism is overrated\n6. I code in atom but I also like brackets\n\n     ' })), _react2.default.createElement(_style2.default, {
    styleId: 4213069368,
    css: '.markdown{font-family:\'Montserrat\'}.markdown a{text-decoration:none;color:grey}.markdown a:hover{opacity:0.6}'
  }));
};