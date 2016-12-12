'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProposalList = require('./ProposalList.jsx');

var _ProposalList2 = _interopRequireDefault(_ProposalList);

var _NavBar = require('./NavBar.jsx');

var _NavBar2 = _interopRequireDefault(_NavBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

    _this.state = {
      proposals: []
    };
    return _this;
  }

  _createClass(Dashboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var callback = function callback(data) {
        return _this2.setState({ proposals: data });
      };
      this.props.route.getProposalsAjax(callback);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_NavBar2.default, null),
        _react2.default.createElement(_ProposalList2.default, { proposals: this.state.proposals })
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

module.exports = Dashboard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC5qc3giXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwicHJvcHMiLCJzdGF0ZSIsInByb3Bvc2FscyIsImNhbGxiYWNrIiwiZGF0YSIsInNldFN0YXRlIiwicm91dGUiLCJnZXRQcm9wb3NhbHNBamF4IiwiQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVztBQURBLEtBQWI7QUFGaUI7QUFLbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2xCLFVBQUlDLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUEsZUFBVSxPQUFLQyxRQUFMLENBQWMsRUFBQ0gsV0FBV0UsSUFBWixFQUFkLENBQVY7QUFBQSxPQUFmO0FBQ0EsV0FBS0osS0FBTCxDQUFXTSxLQUFYLENBQWlCQyxnQkFBakIsQ0FBa0NKLFFBQWxDO0FBRUQ7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNkRBREY7QUFFRSxnRUFBYyxXQUFXLEtBQUtGLEtBQUwsQ0FBV0MsU0FBcEM7QUFGRixPQURGO0FBTUQ7Ozs7RUFyQnFCLGdCQUFNTSxTOztBQXlCOUJDLE9BQU9DLE9BQVAsR0FBaUJYLFNBQWpCIiwiZmlsZSI6IkRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcG9zYWxMaXN0IGZyb20gJy4vUHJvcG9zYWxMaXN0LmpzeCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2QmFyLmpzeCc7XG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwcm9wb3NhbHM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBjYWxsYmFjayA9IChkYXRhKSA9PiB0aGlzLnNldFN0YXRlKHtwcm9wb3NhbHM6IGRhdGF9KTtcbiAgICB0aGlzLnByb3BzLnJvdXRlLmdldFByb3Bvc2Fsc0FqYXgoY2FsbGJhY2spO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPFByb3Bvc2FsTGlzdCBwcm9wb3NhbHM9e3RoaXMuc3RhdGUucHJvcG9zYWxzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGFzaGJvYXJkOyJdfQ==