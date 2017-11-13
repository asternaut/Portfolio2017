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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Montserrat:400,700', rel: 'stylesheet', 'data-jsx': 3420518325
  }), _react2.default.createElement('div', { className: 'firstImipression', 'data-jsx': 3420518325
  }, _react2.default.createElement('img', { src: '/static/Snapchat-487113128-01.jpeg', width: '300px', alt: 'profile picture of sienna', 'data-jsx': 3420518325
  }), _react2.default.createElement('div', { className: 'greeting', 'data-jsx': 3420518325
  }, _react2.default.createElement('h1', {
    'data-jsx': 3420518325
  }, ' hi! '), _react2.default.createElement('div', {
    'data-jsx': 3420518325
  }, _react2.default.createElement('p', {
    'data-jsx': 3420518325
  }, ' ', _react2.default.createElement('strong', {
    'data-jsx': 3420518325
  }, 'If you are looking for the next design horizon, you came to the right place.'), ' '), _react2.default.createElement('p', {
    'data-jsx': 3420518325
  }, ' Sienna is a trained web and graphic designer with experience in Full Stack Javascript, HTML/CSS, CMS platforms, and Adobe Creative Cloud apps!')))), _react2.default.createElement(_style2.default, {
    styleId: 3420518325,
    css: 'body[data-jsx="3420518325"]{font-family:\'Droid Sans Mono\',sans-serif}.firstImipression[data-jsx="3420518325"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:4%}.greeting[data-jsx="3420518325"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:3px solid #0A100D;padding:1em 2em;height:fit-content}.greeting[data-jsx="3420518325"] h1[data-jsx="3420518325"]{margin:0 12px 0 0;font-size:32pt}.greeting[data-jsx="3420518325"] p[data-jsx="3420518325"]{margin:0}p[data-jsx="3420518325"] strong[data-jsx="3420518325"]{font-size:13pt}@media (max-width:890px){.firstImipression[data-jsx="3420518325"]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.greeting[data-jsx="3420518325"]{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:2em 0}}'
  }), _react2.default.createElement(_ProjectLayout2.default, null));
};