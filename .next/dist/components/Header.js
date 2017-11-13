'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement('div', { style: { background: ' #F9FCFF' }, 'data-jsx': 2686518777
  }, _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Montserrat:400,700', rel: 'stylesheet', 'data-jsx': 2686518777
  }), _react2.default.createElement('div', { className: 'navWrapperDesktop', 'data-jsx': 2686518777
  }, _react2.default.createElement('div', { className: 'linkStyle', 'data-jsx': 2686518777
  }, _react2.default.createElement(_link2.default, { href: '/about' }, _react2.default.createElement('a', {
    'data-jsx': 2686518777
  }, 'Profile')), _react2.default.createElement(_link2.default, { href: '/index' }, _react2.default.createElement('a', {
    'data-jsx': 2686518777
  }, _react2.default.createElement('h1', {
    'data-jsx': 2686518777
  }, 'Sienna Scheid '))), _react2.default.createElement(_link2.default, { href: '/contact' }, _react2.default.createElement('a', {
    'data-jsx': 2686518777
  }, 'Contact')))), _react2.default.createElement('div', { className: 'navWrapperMobile', 'data-jsx': 2686518777
  }, _react2.default.createElement(_link2.default, { href: '/index' }, _react2.default.createElement('a', {
    'data-jsx': 2686518777
  }, _react2.default.createElement('h1', {
    'data-jsx': 2686518777
  }, 'Sienna Scheid '))), _react2.default.createElement('div', { className: 'linkStyle', 'data-jsx': 2686518777
  }, _react2.default.createElement(_link2.default, { href: '/about' }, _react2.default.createElement('a', {
    'data-jsx': 2686518777
  }, 'Profile')), _react2.default.createElement(_link2.default, { href: '/contact' }, _react2.default.createElement('a', {
    'data-jsx': 2686518777
  }, 'Contact')))), _react2.default.createElement('p', { className: 'navSpan', 'data-jsx': 2686518777
  }, 'Graphic + Web Design'), _react2.default.createElement(_style2.default, {
    styleId: 2686518777,
    css: 'h1{font-weight:700;font-size:227%}.navWrapperDesktop{background:#F9FCFF;text-transform:uppercase;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;text-align:center;font-family:\'Montserrat\',sans-serif}.navWrapperMobile{display:none}.navSpan{color:#5D6A75;font-family:\'Montserrat\',sans-serif;margin:0;text-align:center}.linkStyle{text-decoration:none;color:#FE5F55;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;padding:3% 5% 0% 5%;text-transform:uppercase;-webkit-letter-spacing:1;-moz-letter-spacing:1;-ms-letter-spacing:1;letter-spacing:1;font-weight:bold}@media (max-width:890px){.navWrapperDesktop{display:none}.navWrapperMobile{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-transform:uppercase;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;font-family:\'Montserrat\',sans-serif}h1{margin:30px 0 15px 0}.linkStyle{padding-bottom:20px}.navSpan{font-size:10pt;text-align:center;padding-bottom:30px}}'
  }));
};

exports.default = Header;