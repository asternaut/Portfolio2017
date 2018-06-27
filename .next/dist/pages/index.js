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

var _ProjectLayout = require('../components/ProjectLayout.js');

var _ProjectLayout2 = _interopRequireDefault(_ProjectLayout);

var _Jumbotron = require('../components/Jumbotron.js');

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', {
    'data-jsx': 654839452
  }, _react2.default.createElement(_Jumbotron2.default, null), _react2.default.createElement(_ProjectLayout2.default, null), _react2.default.createElement(_style2.default, {
    styleId: 654839452,
    css: '@import url(\'https://rsms.me/inter/inter-ui.css\');body{margin:0;font-family:\'Inter UI\',sans-serif;color:#0A100D;background:#F9FCFF;padding:0;height:100%}.margin-wrap{margin:1% 5%}ul{padding:0}li{list-style:none;margin:5px 0}a{text-decoration:none;color:#FF6978;opacity:1;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;cursor:pointer}a:hover{opacity:0.9}p{font-size:12pt}'
  }));
};