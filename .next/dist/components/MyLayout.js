'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layoutStyle = {
  padding: '4% 14%',
  margin: '0',
  background: '#F9FCFF',
  color: '#011627',
  fontFamily: 'Droid Sans Mono, sans-serif',
  minHeight: '100vh',
  position: 'relative'
};

var Layout = function Layout(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement('link', { rel: 'icon',
    type: 'image/x-icon',
    src: '/static/favicon.ico' }), _react2.default.createElement('meta', { content: 'width=device-width, initial-scale=1', name: 'viewport' }), _react2.default.createElement('link', { rel: 'shortcut icon', src: '/static/favicon.io', type: 'image/x-icon' }), _react2.default.createElement('link', { rel: 'icon', src: '/static/favicon.io', type: 'image/x-icon' }), _react2.default.createElement(_Header2.default, null), _react2.default.createElement('div', { style: layoutStyle, 'data-jsx': 3829645498
  }, props.children, _react2.default.createElement(_style2.default, {
    styleId: 3829645498,
    css: 'body{margin:0;font-family:\'Droid Sans Mono\',sans-serif;color:#0A100D;background:#F9FCFF;padding:0;height:100%}ul{padding:0}li{list-style:none;margin:5px 0}a{text-decoration:none;color:#FF6978;opacity:1;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;cursor:pointer}a:hover{opacity:0.9}p{font-size:12pt}'
  })), _react2.default.createElement(_Footer2.default, null));
};

exports.default = Layout;