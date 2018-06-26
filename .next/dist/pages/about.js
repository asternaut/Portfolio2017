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
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('img', { src: 'https://media.licdn.com/dms/image/C5616AQHMXlBqkZk0og/profile-displaybackgroundimage-shrink_350_1400/0?e=1535587200&v=beta&t=7B3wFUdGBE9CFGA4NCQTG2VQP7OEYKy1YA5YtSwrsnE', 'data-jsx': 2403167417
  }), _react2.default.createElement('div', { className: 'margin-wrap', 'data-jsx': 2403167417
  }, _react2.default.createElement('div', { className: 'aboutWrapper', 'data-jsx': 2403167417
  }, _react2.default.createElement('div', { className: 'markdown', 'data-jsx': 2403167417
  }, _react2.default.createElement('h3', {
    'data-jsx': 2403167417
  }, ' Skills: '), _react2.default.createElement(_reactMarkdown2.default, { source: '\n- Graphic + Web Design\n- HTML 5 / CSS 3 / SASS / LESS\n- Adobe AI / PS / ID / Lightroom\n- CMS (Wordpress, Shopify, etc)\n- Git + FTP\n- Experience with Angular/React\n- Photography\n- Web development\n      ' })), _react2.default.createElement('div', { className: 'essay', 'data-jsx': 2403167417
  }, _react2.default.createElement('h3', {
    'data-jsx': 2403167417
  }, ' Essay Style: '), _react2.default.createElement(_reactMarkdown2.default, { source: '\n  I\'m a 20 something graphic designer / web designer / web developer based in SLC, Utah. Design is definitely my passion, and I love to use it as a tool for positive impact in my community and around the world. When I\'m not doing creative things on my computer I\'m probably doing creative things in my life. Hobbies include: photography, cooking, gardening, DIY/crafting, and getting outdoors!\n\n  I\'m spunky, independent, and sunny. I enjoy good beer and great chocolate after a long haul up a hill or cliff, or down steep slopes.\n\n  But there\'s too many \'I\'s in this chunk of text now! We should probably just get to know each other:\n  ' }), _react2.default.createElement('div', { className: 'links', 'data-jsx': 2403167417
  }, _react2.default.createElement('a', { href: 'https://www.linkedin.com/in/sienna-scheid-1486a1119/', target: '_blank', 'data-jsx': 2403167417
  }, ' linkedin '), _react2.default.createElement('a', { href: 'https://github.com/asternaut', target: '_blank', 'data-jsx': 2403167417
  }, ' github '), _react2.default.createElement('a', { href: 'https://www.pinterest.com/siennascheid/', target: '_blank', 'data-jsx': 2403167417
  }, ' pinterest '), _react2.default.createElement('a', { href: 'https://www.instagram.com/siennaleelu/', target: '_blank', 'data-jsx': 2403167417
  }, ' instagram '), _react2.default.createElement('a', { href: 'http://astrthought.tumblr.com/', target: '_blank', 'data-jsx': 2403167417
  }, ' tumblr '), _react2.default.createElement('a', { href: 'https://twitter.com/sugarcodingit', target: '_blank', 'data-jsx': 2403167417
  }, ' twitter '), _react2.default.createElement('a', { href: 'https://soundcloud.com/sienna-scheid', target: '_blank', 'data-jsx': 2403167417
  }, ' soundcloud ')), _react2.default.createElement('img', { className: 'signature', src: '/static/signature.png', 'data-jsx': 2403167417
  })))), _react2.default.createElement(_style2.default, {
    styleId: 2403167417,
    css: '.margin-wrap{margin:1% 5%}img{width:100%}.aboutWrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%}.aboutWrapper div{padding-right:25px}.markdown{font-family:\'Montserrat\';line-height:1.5em;width:33%}.essay{width:66%;font-family:\'Montserrat\';line-height:1.5em}.links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.links a{padding:0 3px}.signature{width:151px;padding-top:25px}@media (max-width:890px){.aboutWrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.aboutWrapper div{padding:0}.markdown{width:100%}.essay{width:100%}.links{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.links a{padding:3px 0}}'
  }));
};