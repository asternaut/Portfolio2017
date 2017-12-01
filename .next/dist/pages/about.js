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

exports.default = function () {
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('img', { src: 'https://media-exp1.licdn.com/media/AAEAAQAAAAAAAAtUAAAAJDU4ODlmYTlhLTA2NmQtNDBjMS1iNDViLTNlOTg1NjQzNDQyYw.jpg', 'data-jsx': 3188880908
  }), _react2.default.createElement('h1', {
    'data-jsx': 3188880908
  }, ' Sienna Scheid :: Profile '), _react2.default.createElement('div', { className: 'aboutWrapper', 'data-jsx': 3188880908
  }, _react2.default.createElement('div', { className: 'markdown', 'data-jsx': 3188880908
  }, _react2.default.createElement('h3', {
    'data-jsx': 3188880908
  }, ' At a glance: '), _react2.default.createElement(_reactMarkdown2.default, { source: '\n- Early 20\'s\n- Salt Lake City native (silicon slopes)\n- Gemini\n- Serial sunbather\n- Hip and earthy\n- Former college radio DJ\n- Bike // Ski // Run // Climb // Be Kind\n- Second home is Montana <3\n      ' })), _react2.default.createElement('div', { className: 'essay', 'data-jsx': 3188880908
  }, _react2.default.createElement('h3', {
    'data-jsx': 3188880908
  }, ' Essay Style: '), _react2.default.createElement(_reactMarkdown2.default, { source: '\n  I\'m a 20 something graphic designer / web designer / web developer based in SLC, Utah. Design is definitely my passion, and I love to use it as a tool for positive impact in my community and around the world. When I\'m not doing creative things on my computer I\'m probably doing creative things in my life. Hobbies include: photography, cooking, gardening, DIY/crafting, and getting outdoors!\n\n  I\'m spunky, independent, and the extroverts version of an introvert. I enjoy good beer and great chocolate after a long haul up a hill, cliff, or down steep slopes.\n\n  But there\'s too many \'I\'s in this chunk of text now! We should probably just get to know each other:\n  ' }), _react2.default.createElement('div', { className: 'links', 'data-jsx': 3188880908
  }, _react2.default.createElement('a', { href: 'https://twitter.com/sugarcodingit', target: '_blank', 'data-jsx': 3188880908
  }, ' twitter '), _react2.default.createElement('a', { href: 'https://www.linkedin.com/in/sienna-scheid-1486a1119/', target: '_blank', 'data-jsx': 3188880908
  }, ' linkedin '), _react2.default.createElement('a', { href: 'https://github.com/asternaut', target: '_blank', 'data-jsx': 3188880908
  }, ' github '), _react2.default.createElement('a', { href: 'https://www.pinterest.com/siennascheid/', target: '_blank', 'data-jsx': 3188880908
  }, ' pinterest '), _react2.default.createElement('a', { href: 'https://www.instagram.com/siennaleelu/', target: '_blank', 'data-jsx': 3188880908
  }, ' instagram '), _react2.default.createElement('a', { href: 'http://astrthought.tumblr.com/', target: '_blank', 'data-jsx': 3188880908
  }, ' tumblr '), _react2.default.createElement('a', { href: 'https://soundcloud.com/sienna-scheid', target: '_blank', 'data-jsx': 3188880908
  }, ' soundcloud ')), _react2.default.createElement('img', { className: 'signature', src: '/static/signature.png', 'data-jsx': 3188880908
  }))), _react2.default.createElement(_style2.default, {
    styleId: 3188880908,
    css: 'img{width:100%}h1{text-transform:uppercase}.aboutWrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%}.aboutWrapper div{padding-right:25px}.markdown{font-family:\'Montserrat\';line-height:1.5em;width:33%}.essay{width:66%;font-family:\'Montserrat\'}.links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.links a{padding:0 3px}.signature{width:151px;padding-top:25px}@media (max-width:890px){.aboutWrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.aboutWrapper div{padding:0}.markdown{width:100%}.essay{width:100%}.links{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.links a{padding:3px 0}}'
  }));
};