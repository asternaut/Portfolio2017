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

var _jsxFileName = 'C:\\Users\\sienn\\code\\hello-next\\components\\MyLayout.js';


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
  }), _react2.default.createElement('div', { style: layoutStyle, 'data-jsx': 1381055048,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, props.children, _react2.default.createElement(_style2.default, {
    styleId: 1381055048,
    css: '@import url(\'https://rsms.me/inter/inter-ui.css\');body{margin:0;font-family:\'Inter UI\',sans-serif;color:#0A100D;background:#F9FCFF;padding:0;height:100%}ul{padding:0}li{list-style:none;margin:5px 0}a{text-decoration:none;color:#FF6978;opacity:1;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;cursor:pointer}a:hover{opacity:0.9}p{font-size:12pt}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE15TGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCdUIsQUFHOEQsQUFDMUMsQUFVQyxBQUlNLEFBS0ssQUFRVCxBQUdHLFNBN0JvQixDQVVyQyxFQWlCQSxHQUdBLENBaEJlLEtBS0MsUUFKaEIsTUFLWSxRQW5CSSxFQW9CVyxZQW5CTixtQkFDVCxVQUNFLFlBRXRCLEtBZ0J5QixlQUNqQiIsImZpbGUiOiJjb21wb25lbnRzXFxNeUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zaWVubi9jb2RlL2hlbGxvLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXHJcblxyXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcclxuICBtYXJnaW46ICcwJyxcclxuICBiYWNrZ3JvdW5kOiAnI0Y5RkNGRicsXHJcbiAgY29sb3I6ICcjMDExNjI3JyxcclxuICBtaW5IZWlnaHQ6ICcxMDB2aCcsXHJcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgPGxpbmsgcmVsPVwiaWNvblwiXHJcbiAgICAgIHR5cGU9XCJpbWFnZS94LWljb25cIlxyXG4gICAgIHNyYz17Jy9zdGF0aWMvZmF2aWNvbi5pY28nfS8+XHJcbiAgPG1ldGEgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIG5hbWU9J3ZpZXdwb3J0Jy8+XHJcbiAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIHNyYz17Jy9zdGF0aWMvZmF2aWNvbi5pbyd9IHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxyXG4gIDxsaW5rIHJlbD1cImljb25cIiBzcmM9eycvc3RhdGljL2Zhdmljb24uaW8nfSB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cclxuICAgIDxIZWFkZXIgLz5cclxuICAgIDxkaXYgc3R5bGU9e2xheW91dFN0eWxlfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL3JzbXMubWUvaW50ZXIvaW50ZXItdWkuY3NzJyk7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyIFVJJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGNvbG9yOiAjMEExMDBEO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0Y5RkNGRjtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG59XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICNGRjY5Nzg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl19 */\n/*@ sourceURL=components\\MyLayout.js */'
  })), _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE15TGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIkZvb3RlciIsIk1hcmtkb3duIiwibGF5b3V0U3R5bGUiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJtaW5IZWlnaHQiLCJwb3NpdGlvbiIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNO1VBQWMsQUFDVixBQUNSO2NBRmtCLEFBRU4sQUFDWjtTQUhrQixBQUdYLEFBQ1A7YUFKa0IsQUFJUCxBQUNYO1lBTEYsQUFBb0IsQUFLUjtBQUxRLEFBQ2xCOztBQU9GLElBQU0sU0FBUyxTQUFULEFBQVMsT0FBQSxBQUFDLE9BQUQ7eUJBQ2IsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDQTtBQURBO0FBQUEsR0FBQSwwQ0FDTSxLQUFOLEFBQVUsQUFDTjtVQURKLEFBQ1MsQUFDTjtTQUZILEFBRVE7Z0JBRlI7a0JBREEsQUFDQSxBQUdBO0FBSEE7OENBR00sU0FBTixBQUFjLHVDQUFzQyxNQUFwRCxBQUF5RDtnQkFBekQ7a0JBSkEsQUFJQSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGlCQUFnQixLQUExQixBQUErQixzQkFBc0IsTUFBckQsQUFBMEQ7Z0JBQTFEO2tCQUxBLEFBS0EsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxRQUFPLEtBQWpCLEFBQXNCLHNCQUFzQixNQUE1QyxBQUFpRDtnQkFBakQ7a0JBTkEsQUFNQSxBQUNFO0FBREY7c0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBUEYsQUFPRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxjQUFBLFNBQUssT0FBTCxBQUFZLHlCQUFaOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7V0FBQSxBQUNTO2FBRFQ7U0FSRixBQVFFLEFBd0NFO0FBeENGLHVCQXdDRSxBQUFDOztnQkFBRDtrQkFqRFMsQUFDYixBQWdESTtBQUFBO0FBQUE7QUFqRE4sQUFxREE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTXlMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvc2llbm4vY29kZS9oZWxsby1uZXh0In0=