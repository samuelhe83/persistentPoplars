'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _ProposalList = require('./ProposalList.jsx');

var _ProposalList2 = _interopRequireDefault(_ProposalList);

var _NavBar = require('./NavBar.jsx');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _NotFound = require('./NotFound.jsx');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Login = require('./Login.jsx');

var _Login2 = _interopRequireDefault(_Login);

var _Signup = require('./Signup.jsx');

var _Signup2 = _interopRequireDefault(_Signup);

var _NewProposal = require('./NewProposal.jsx');

var _NewProposal2 = _interopRequireDefault(_NewProposal);

var _Dashboard = require('./Dashboard.jsx');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    // Binding 'this' here is necessary to have 'this' in requireAuth method bound
    // to the react class instance with ES6.
    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.requireAuth = _this.requireAuth.bind(_this);
    _this.loginAjax = _this.loginAjax.bind(_this);
    _this.getProposalsAjax = _this.getProposalsAjax.bind(_this);
    _this.state = {
      email: null,
      authenticated: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'requireAuth',
    value: function requireAuth(nextState, replace) {
      if (!this.state.authenticated) {
        replace({ pathname: '/login' });
      }
    }
  }, {
    key: 'loginAjax',
    value: function loginAjax(email, password) {
      _jquery2.default.ajax({
        url: '/login',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ email: email, password: password }),
        success: function success(data) {
          console.log(data);
        }
      });
    }
  }, {
    key: 'getProposalsAjax',
    value: function getProposalsAjax(cb) {
      _jquery2.default.ajax({
        url: '/proposals',
        method: 'GET',
        contentType: 'application/json',
        success: function success(data) {
          cb(data);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouter.Router,
        { history: _reactRouter.browserHistory },
        _react2.default.createElement(_reactRouter.Route, { path: '/', loginAjax: this.loginAjax, component: _Login2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _Signup2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/login', loginAjax: this.loginAjax, component: _Login2.default }),
        _react2.default.createElement(
          _reactRouter.Route,
          { path: '/home', getProposalsAjax: this.getProposalsAjax, component: _Dashboard2.default },
          _react2.default.createElement(_reactRouter.Route, { path: '/newproposal', component: _NewProposal2.default })
        ),
        _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

;

module.exports = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJyZXF1aXJlQXV0aCIsImJpbmQiLCJsb2dpbkFqYXgiLCJnZXRQcm9wb3NhbHNBamF4Iiwic3RhdGUiLCJlbWFpbCIsImF1dGhlbnRpY2F0ZWQiLCJuZXh0U3RhdGUiLCJyZXBsYWNlIiwicGF0aG5hbWUiLCJwYXNzd29yZCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJjb250ZW50VHlwZSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJjYiIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBRWpCO0FBQ0E7QUFIaUIsMEdBQ1hBLEtBRFc7O0FBSWpCLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUQsSUFBZixPQUFqQjtBQUNBLFVBQUtFLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCRixJQUF0QixPQUF4QjtBQUNBLFVBQUtHLEtBQUwsR0FBYTtBQUNYQyxhQUFPLElBREk7QUFFWEMscUJBQWU7QUFGSixLQUFiO0FBUGlCO0FBV2xCOzs7O2dDQUdXQyxTLEVBQVdDLE8sRUFBUztBQUM5QixVQUFJLENBQUMsS0FBS0osS0FBTCxDQUFXRSxhQUFoQixFQUErQjtBQUM3QkUsZ0JBQVEsRUFBQ0MsVUFBVSxRQUFYLEVBQVI7QUFDRDtBQUNGOzs7OEJBRVNKLEssRUFBT0ssUSxFQUFVO0FBQ3pCLHVCQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxRQURBO0FBRUxDLGdCQUFRLE1BRkg7QUFHTEMscUJBQWEsa0JBSFI7QUFJTEMsY0FBTUMsS0FBS0MsU0FBTCxDQUFlLEVBQUNaLE9BQU9BLEtBQVIsRUFBZUssVUFBVUEsUUFBekIsRUFBZixDQUpEO0FBS0xRLGlCQUFTLGlCQUFDSCxJQUFELEVBQVU7QUFBRUksa0JBQVFDLEdBQVIsQ0FBWUwsSUFBWjtBQUFvQjtBQUxwQyxPQUFQO0FBT0Q7OztxQ0FFZ0JNLEUsRUFBSTtBQUNuQix1QkFBRVYsSUFBRixDQUFPO0FBQ0xDLGFBQUksWUFEQztBQUVMQyxnQkFBUSxLQUZIO0FBR0xDLHFCQUFhLGtCQUhSO0FBSUxJLGlCQUFTLGlCQUFDSCxJQUFELEVBQVU7QUFBQ00sYUFBR04sSUFBSDtBQUFVO0FBSnpCLE9BQVA7QUFNRDs7OzZCQUdRO0FBQ1AsYUFFSTtBQUFBO0FBQUEsVUFBUSxvQ0FBUjtBQUNFLDREQUFPLE1BQUssR0FBWixFQUFnQixXQUFXLEtBQUtiLFNBQWhDLEVBQTJDLDBCQUEzQyxHQURGO0FBRUUsNERBQU8sTUFBSyxTQUFaLEVBQXNCLDJCQUF0QixHQUZGO0FBR0UsNERBQU8sTUFBSyxRQUFaLEVBQXFCLFdBQVcsS0FBS0EsU0FBckMsRUFBZ0QsMEJBQWhELEdBSEY7QUFJRTtBQUFBO0FBQUEsWUFBTyxNQUFLLE9BQVosRUFBb0Isa0JBQWtCLEtBQUtDLGdCQUEzQyxFQUE2RCw4QkFBN0Q7QUFDRSw4REFBTyxNQUFLLGNBQVosRUFBMkIsZ0NBQTNCO0FBREYsU0FKRjtBQU9FLDREQUFPLE1BQUssR0FBWixFQUFnQiw2QkFBaEI7QUFQRixPQUZKO0FBWUQ7Ozs7RUF0RGUsZ0JBQU1tQixTOztBQXVEdkI7O0FBT0RDLE9BQU9DLE9BQVAsR0FBaUIxQixHQUFqQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0IFByb3Bvc2FsTGlzdCBmcm9tICcuL1Byb3Bvc2FsTGlzdC5qc3gnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdkJhci5qc3gnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vTm90Rm91bmQuanN4JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luLmpzeCc7XG5pbXBvcnQgU2lnbnVwIGZyb20gJy4vU2lnbnVwLmpzeCc7XG5pbXBvcnQgTmV3UHJvcG9zYWwgZnJvbSAnLi9OZXdQcm9wb3NhbC5qc3gnO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL0Rhc2hib2FyZC5qc3gnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyBCaW5kaW5nICd0aGlzJyBoZXJlIGlzIG5lY2Vzc2FyeSB0byBoYXZlICd0aGlzJyBpbiByZXF1aXJlQXV0aCBtZXRob2QgYm91bmRcbiAgICAvLyB0byB0aGUgcmVhY3QgY2xhc3MgaW5zdGFuY2Ugd2l0aCBFUzYuXG4gICAgdGhpcy5yZXF1aXJlQXV0aCA9IHRoaXMucmVxdWlyZUF1dGguYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ2luQWpheCA9IHRoaXMubG9naW5BamF4LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRQcm9wb3NhbHNBamF4ID0gdGhpcy5nZXRQcm9wb3NhbHNBamF4LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgYXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG5cbiAgcmVxdWlyZUF1dGgobmV4dFN0YXRlLCByZXBsYWNlKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIHJlcGxhY2Uoe3BhdGhuYW1lOiAnL2xvZ2luJ30pO1xuICAgIH1cbiAgfVxuXG4gIGxvZ2luQWpheChlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL2xvZ2luJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZH0pLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHsgY29uc29sZS5sb2coZGF0YSk7IH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldFByb3Bvc2Fsc0FqYXgoY2IpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOicvcHJvcG9zYWxzJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtjYihkYXRhKTt9XG4gICAgfSk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvJyBsb2dpbkFqYXg9e3RoaXMubG9naW5BamF4fSBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvc2lnbnVwJyBjb21wb25lbnQ9e1NpZ251cH0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD0nL2xvZ2luJyBsb2dpbkFqYXg9e3RoaXMubG9naW5BamF4fSBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvaG9tZScgZ2V0UHJvcG9zYWxzQWpheD17dGhpcy5nZXRQcm9wb3NhbHNBamF4fSBjb21wb25lbnQ9e0Rhc2hib2FyZH0+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL25ld3Byb3Bvc2FsJyBjb21wb25lbnQ9e05ld1Byb3Bvc2FsfSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgKTtcbiAgfVxufTtcblxuXG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gQXBwOyJdfQ==