'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup(props) {
    _classCallCheck(this, Signup);

    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));

    _this.changeEmail = _this.changeEmail.bind(_this);
    _this.changePassword = _this.changePassword.bind(_this);
    _this.signupAjax = _this.signupAjax.bind(_this);
    _this.state = {
      email: null,
      password: null
    };
    return _this;
  }

  _createClass(Signup, [{
    key: 'changeEmail',
    value: function changeEmail(e) {
      console.log(e.target);
      this.setState({ email: e.target.value });
    }
  }, {
    key: 'changePassword',
    value: function changePassword(e) {
      this.setState({ password: e.target.value });
    }
  }, {
    key: 'signupAjax',
    value: function signupAjax() {
      console.log('SEND');
      _jquery2.default.ajax({
        url: '/signup',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ email: this.state.email, password: this.state.password }),
        success: function success(data) {
          console.log(data);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Signup'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.signupAjax },
          _react2.default.createElement('input', { onChange: this.changeEmail, name: 'email', type: 'text', placeholder: 'Email' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('input', { onChange: this.changePassword, type: 'password', placeholder: 'Password' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'button',
            null,
            'Create Account'
          )
        ),
        'Already have an account? ',
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/login' },
          'Sign in'
        )
      );
    }
  }]);

  return Signup;
}(_react2.default.Component);

module.exports = Signup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NpZ251cC5qc3giXSwibmFtZXMiOlsiU2lnbnVwIiwicHJvcHMiLCJjaGFuZ2VFbWFpbCIsImJpbmQiLCJjaGFuZ2VQYXNzd29yZCIsInNpZ251cEFqYXgiLCJzdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInNldFN0YXRlIiwidmFsdWUiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiY29udGVudFR5cGUiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJDb21wb25lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLE9BQXRCO0FBQ0EsVUFBS0UsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRixJQUFoQixPQUFsQjtBQUNBLFVBQUtHLEtBQUwsR0FBYTtBQUNYQyxhQUFPLElBREk7QUFFWEMsZ0JBQVU7QUFGQyxLQUFiO0FBTGlCO0FBU2xCOzs7O2dDQUVXQyxDLEVBQUc7QUFDYkMsY0FBUUMsR0FBUixDQUFZRixFQUFFRyxNQUFkO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEVBQUNOLE9BQU9FLEVBQUVHLE1BQUYsQ0FBU0UsS0FBakIsRUFBZDtBQUNEOzs7bUNBQ2NMLEMsRUFBRztBQUNoQixXQUFLSSxRQUFMLENBQWMsRUFBQ0wsVUFBVUMsRUFBRUcsTUFBRixDQUFTRSxLQUFwQixFQUFkO0FBQ0Q7OztpQ0FFWTtBQUNYSixjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLHVCQUFFSSxJQUFGLENBQU87QUFDTEMsYUFBSyxTQURBO0FBRUxDLGdCQUFRLE1BRkg7QUFHTEMscUJBQWEsa0JBSFI7QUFJTEMsY0FBTUMsS0FBS0MsU0FBTCxDQUFlLEVBQUNkLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxLQUFuQixFQUEwQkMsVUFBVSxLQUFLRixLQUFMLENBQVdFLFFBQS9DLEVBQWYsQ0FKRDtBQUtMYyxpQkFBUyxpQkFBQ0gsSUFBRCxFQUFVO0FBQUVULGtCQUFRQyxHQUFSLENBQVlRLElBQVo7QUFBb0I7QUFMcEMsT0FBUDtBQU9EOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFNLFVBQVUsS0FBS2QsVUFBckI7QUFDRSxtREFBTyxVQUFVLEtBQUtILFdBQXRCLEVBQW1DLE1BQUssT0FBeEMsRUFBZ0QsTUFBSyxNQUFyRCxFQUE0RCxhQUFZLE9BQXhFLEdBREY7QUFDb0YsbURBRHBGO0FBRUUsbURBQU8sVUFBVSxLQUFLRSxjQUF0QixFQUFzQyxNQUFLLFVBQTNDLEVBQXNELGFBQVksVUFBbEUsR0FGRjtBQUVpRixtREFGakY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEYsU0FGRjtBQUFBO0FBTzJCO0FBQUE7QUFBQSxZQUFNLElBQUcsUUFBVDtBQUFBO0FBQUE7QUFQM0IsT0FERjtBQVdEOzs7O0VBM0NrQixnQkFBTW1CLFM7O0FBOEMzQkMsT0FBT0MsT0FBUCxHQUFpQnpCLE1BQWpCIiwiZmlsZSI6IlNpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIFNpZ251cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuY2hhbmdlRW1haWwgPSB0aGlzLmNoYW5nZUVtYWlsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IHRoaXMuY2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNpZ251cEFqYXggPSB0aGlzLnNpZ251cEFqYXguYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6IG51bGwsXG4gICAgICBwYXNzd29yZDogbnVsbFxuICAgIH07XG4gIH1cblxuICBjaGFuZ2VFbWFpbChlKSB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2VtYWlsOiBlLnRhcmdldC52YWx1ZX0pO1xuICB9XG4gIGNoYW5nZVBhc3N3b3JkKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZDogZS50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIHNpZ251cEFqYXgoKSB7XG4gICAgY29uc29sZS5sb2coJ1NFTkQnKTtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL3NpZ251cCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7ZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkfSksXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4geyBjb25zb2xlLmxvZyhkYXRhKTsgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+U2lnbnVwPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2lnbnVwQWpheH0+XG4gICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUVtYWlsfSBuYW1lPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPjxici8+XG4gICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVBhc3N3b3JkfSB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz48YnIvPlxuICAgICAgICAgIDxidXR0b24+Q3JlYXRlIEFjY291bnQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gPExpbmsgdG89Jy9sb2dpbic+U2lnbiBpbjwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWdudXA7Il19