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
  return _react2.default.createElement('div', { style: { background: ' #F9FCFF' }, 'data-jsx': 2789584709
  }, _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Montserrat:400,700', rel: 'stylesheet', 'data-jsx': 2789584709
  }), _react2.default.createElement('div', { className: 'navWrapperDesktop', 'data-jsx': 2789584709
  }, _react2.default.createElement(_link2.default, { href: '/index' }, _react2.default.createElement('a', {
    'data-jsx': 2789584709
  }, _react2.default.createElement('h1', {
    'data-jsx': 2789584709
  }, 'Sienna Scheid '))), _react2.default.createElement('div', { className: 'linkStyle', 'data-jsx': 2789584709
  }, _react2.default.createElement(_link2.default, { href: '/work' }, _react2.default.createElement('a', {
    'data-jsx': 2789584709
  }, 'Work')), _react2.default.createElement(_link2.default, { href: '/about' }, _react2.default.createElement('a', {
    'data-jsx': 2789584709
  }, 'About')), _react2.default.createElement(_link2.default, { href: '/contact' }, _react2.default.createElement('a', {
    'data-jsx': 2789584709
  }, 'Contact')))), _react2.default.createElement('div', { className: 'navWrapperMobile', 'data-jsx': 2789584709
  }, _react2.default.createElement(_link2.default, { href: '/index' }, _react2.default.createElement('a', {
    'data-jsx': 2789584709
  }, _react2.default.createElement('h1', {
    'data-jsx': 2789584709
  }, 'Sienna Scheid '))), _react2.default.createElement('div', { className: 'linkStyle', 'data-jsx': 2789584709
  }, _react2.default.createElement(_link2.default, { href: '/work' }, _react2.default.createElement('a', {
    'data-jsx': 2789584709
  }, 'Work')), _react2.default.createElement(_link2.default, { href: '/about' }, _react2.default.createElement('a', {
    'data-jsx': 2789584709
  }, 'About')), _react2.default.createElement(_link2.default, { href: '/contact' }, _react2.default.createElement('a', {
    'data-jsx': 2789584709
  }, 'Contact')))), _react2.default.createElement(_style2.default, {
    styleId: 2789584709,
    css: 'h1{font-weight:100;font-size:227%;color:rgb(1,22,39)}.navWrapperDesktop{text-transform:lowercase;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:\'Montserrat\',sans-serif;padding:3% 6%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:88%}.navWrapperMobile{display:none}.linkStyle{text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;text-transform:lowercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:bold;width:40%}.linkStyle a{font-weight:100;color:rgb(1,22,39);-webkit-transform:0.2s ease font-weight;-ms-transform:0.2s ease font-weight;transform:0.2s ease font-weight}.linkStyle a:hover{font-weight:bold}@media (max-width:1100px){.navWrapperDesktop{display:none}.navWrapperMobile{text-transform:lowercase;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:\'Montserrat\',sans-serif;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;font-family:\'Montserrat\',sans-serif}h1{margin:30px 0 15px 0}.linkStyle{padding-bottom:20px}.navSpan{font-size:10pt;text-align:center;padding-bottom:30px}}@media (max-width:950px){.linkStyle{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.linkStyle a{padding-bottom:12px}}'
  }));
};

exports.default = Header;