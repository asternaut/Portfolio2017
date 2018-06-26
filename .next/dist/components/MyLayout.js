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

var _jsxFileName = 'C:\\Users\\Sienna\\Documents\\Portfolio2017\\components\\MyLayout.js';


var layoutStyle = {
  margin: '0',
  background: '#F9FCFF',
  color: '#011627',
  minHeight: '100vh',
  position: 'relative'
};

var Layout = function Layout(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('link', { rel: 'icon',
    type: 'image/x-icon',
    src: '/static/favicon.ico', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('meta', { content: 'width=device-width, initial-scale=1', name: 'viewport', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement('link', { rel: 'shortcut icon', src: '/static/favicon.io', type: 'image/x-icon', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement('link', { rel: 'icon', src: '/static/favicon.io', type: 'image/x-icon', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement('div', { style: layoutStyle, 'data-jsx': 654839452,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, props.children, _react2.default.createElement(_style2.default, {
    styleId: 654839452,
    css: '@import url(\'https://rsms.me/inter/inter-ui.css\');body{margin:0;font-family:\'Inter UI\',sans-serif;color:#0A100D;background:#F9FCFF;padding:0;height:100%}.margin-wrap{margin:1% 5%}ul{padding:0}li{list-style:none;margin:5px 0}a{text-decoration:none;color:#FF6978;opacity:1;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;cursor:pointer}a:hover{opacity:0.9}p{font-size:12pt}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE15TGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCdUIsQUFHOEQsQUFDMUMsQUFRSSxBQUlILEFBSU0sQUFLSyxBQVFULEFBR0csU0EvQm9CLENBWXJDLEVBaUJBLENBckJBLEVBd0JBLENBaEJlLEtBS0MsUUFKaEIsTUFLWSxRQXJCSSxFQXNCVyxZQXJCTixtQkFDVCxVQUNFLFlBQ3RCLEtBbUJ5QixlQUNqQiIsImZpbGUiOiJjb21wb25lbnRzXFxNeUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9TaWVubmEvRG9jdW1lbnRzL1BvcnRmb2xpbzIwMTciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXHJcblxyXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcclxuICBtYXJnaW46ICcwJyxcclxuICBiYWNrZ3JvdW5kOiAnI0Y5RkNGRicsXHJcbiAgY29sb3I6ICcjMDExNjI3JyxcclxuICBtaW5IZWlnaHQ6ICcxMDB2aCcsXHJcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgPGxpbmsgcmVsPVwiaWNvblwiXHJcbiAgICAgIHR5cGU9XCJpbWFnZS94LWljb25cIlxyXG4gICAgIHNyYz17Jy9zdGF0aWMvZmF2aWNvbi5pY28nfS8+XHJcbiAgPG1ldGEgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIG5hbWU9J3ZpZXdwb3J0Jy8+XHJcbiAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIHNyYz17Jy9zdGF0aWMvZmF2aWNvbi5pbyd9IHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxyXG4gIDxsaW5rIHJlbD1cImljb25cIiBzcmM9eycvc3RhdGljL2Zhdmljb24uaW8nfSB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cclxuICAgIDxIZWFkZXIgLz5cclxuICAgIDxkaXYgc3R5bGU9e2xheW91dFN0eWxlfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL3JzbXMubWUvaW50ZXIvaW50ZXItdWkuY3NzJyk7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyIFVJJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGNvbG9yOiAjMEExMDBEO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0Y5RkNGRjtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuICAgICAgICAubWFyZ2luLXdyYXB7XHJcbiAgICAgICAgICBtYXJnaW46IDElIDUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGNjk3ODtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iXX0= */\n/*@ sourceURL=components\\MyLayout.js */'
  })), _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE15TGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIkZvb3RlciIsIk1hcmtkb3duIiwibGF5b3V0U3R5bGUiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJtaW5IZWlnaHQiLCJwb3NpdGlvbiIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNO1VBQWMsQUFDVixBQUNSO2NBRmtCLEFBRU4sQUFDWjtTQUhrQixBQUdYLEFBQ1A7YUFKa0IsQUFJUCxBQUNYO1lBTEYsQUFBb0IsQUFLUjtBQUxRLEFBQ2xCOztBQU9GLElBQU0sU0FBUyxTQUFULEFBQVMsT0FBQSxBQUFDLE9BQUQ7eUJBQ2IsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDQTtBQURBO0FBQUEsR0FBQSwwQ0FDTSxLQUFOLEFBQVUsQUFDTjtVQURKLEFBQ1MsQUFDTjtTQUZILEFBRVE7Z0JBRlI7a0JBREEsQUFDQSxBQUdBO0FBSEE7OENBR00sU0FBTixBQUFjLHVDQUFzQyxNQUFwRCxBQUF5RDtnQkFBekQ7a0JBSkEsQUFJQSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGlCQUFnQixLQUExQixBQUErQixzQkFBc0IsTUFBckQsQUFBMEQ7Z0JBQTFEO2tCQUxBLEFBS0EsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxRQUFPLEtBQWpCLEFBQXNCLHNCQUFzQixNQUE1QyxBQUFpRDtnQkFBakQ7a0JBTkEsQUFNQSxBQUNFO0FBREY7c0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBUEYsQUFPRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxjQUFBLFNBQUssT0FBTCxBQUFZLHlCQUFaOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7V0FBQSxBQUNTO2FBRFQ7U0FSRixBQVFFLEFBMENFO0FBMUNGLHVCQTBDRSxBQUFDOztnQkFBRDtrQkFuRFMsQUFDYixBQWtESTtBQUFBO0FBQUE7QUFuRE4sQUF1REE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTXlMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvU2llbm5hL0RvY3VtZW50cy9Qb3J0Zm9saW8yMDE3In0=