'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
  return _react2.default.createElement('div', null, _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement(_Jumbotron2.default, null), _react2.default.createElement(_ProjectLayout2.default, null)));
};