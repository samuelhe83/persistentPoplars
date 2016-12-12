'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.changeEmail = _this.changeEmail.bind(_this);
    _this.changePassword = _this.changePassword.bind(_this);
    _this.state = {
      email: null,
      password: null
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'changeEmail',
    value: function changeEmail(e) {
      this.setState({ email: e.target.value });
    }
  }, {
    key: 'changePassword',
    value: function changePassword(e) {
      this.setState({ password: e.target.value });
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
          'Login'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.props.route.loginAjax.bind(null, this.state.email, this.state.password) },
          _react2.default.createElement('input', { onChange: this.changeEmail, type: 'text', placeholder: 'Email' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('input', { onChange: this.changePassword, type: 'password', placeholder: 'Password' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'button',
            null,
            'Login'
          )
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/signup' },
          'Create an account'
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

module.exports = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2xvZ2luLmpzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwiY2hhbmdlRW1haWwiLCJiaW5kIiwiY2hhbmdlUGFzc3dvcmQiLCJzdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJvdXRlIiwibG9naW5BamF4IiwiQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkQsSUFBcEIsT0FBdEI7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDWEMsYUFBTyxJQURJO0FBRVhDLGdCQUFVO0FBRkMsS0FBYjtBQUppQjtBQVFsQjs7OztnQ0FFV0MsQyxFQUFHO0FBQ2IsV0FBS0MsUUFBTCxDQUFjLEVBQUNILE9BQU9FLEVBQUVFLE1BQUYsQ0FBU0MsS0FBakIsRUFBZDtBQUNEOzs7bUNBQ2NILEMsRUFBRztBQUNoQixXQUFLQyxRQUFMLENBQWMsRUFBQ0YsVUFBVUMsRUFBRUUsTUFBRixDQUFTQyxLQUFwQixFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQU0sVUFBVSxLQUFLVixLQUFMLENBQVdXLEtBQVgsQ0FBaUJDLFNBQWpCLENBQTJCVixJQUEzQixDQUFnQyxJQUFoQyxFQUFzQyxLQUFLRSxLQUFMLENBQVdDLEtBQWpELEVBQXdELEtBQUtELEtBQUwsQ0FBV0UsUUFBbkUsQ0FBaEI7QUFDRSxtREFBTyxVQUFVLEtBQUtMLFdBQXRCLEVBQW1DLE1BQUssTUFBeEMsRUFBK0MsYUFBWSxPQUEzRCxHQURGO0FBQ3VFLG1EQUR2RTtBQUVFLG1EQUFPLFVBQVUsS0FBS0UsY0FBdEIsRUFBc0MsTUFBSyxVQUEzQyxFQUFzRCxhQUFZLFVBQWxFLEdBRkY7QUFFaUYsbURBRmpGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGLFNBRkY7QUFPRTtBQUFBO0FBQUEsWUFBTSxJQUFHLFNBQVQ7QUFBQTtBQUFBO0FBUEYsT0FERjtBQVdEOzs7O0VBOUJpQixnQkFBTVUsUzs7QUFrQzFCQyxPQUFPQyxPQUFQLEdBQWlCaEIsS0FBakIiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jaGFuZ2VFbWFpbCA9IHRoaXMuY2hhbmdlRW1haWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkID0gdGhpcy5jaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogbnVsbCxcbiAgICAgIHBhc3N3b3JkOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIGNoYW5nZUVtYWlsKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDogZS50YXJnZXQudmFsdWV9KTtcbiAgfVxuICBjaGFuZ2VQYXNzd29yZChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnByb3BzLnJvdXRlLmxvZ2luQWpheC5iaW5kKG51bGwsIHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpfT5cbiAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuY2hhbmdlRW1haWx9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+PGJyLz5cbiAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuY2hhbmdlUGFzc3dvcmR9IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPjxici8+XG4gICAgICAgICAgPGJ1dHRvbj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxMaW5rIHRvPScvc2lnbnVwJz5DcmVhdGUgYW4gYWNjb3VudDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2luOyJdfQ==