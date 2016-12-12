'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactBootstrap = require('react-bootstrap');

var _reactBootstrap2 = _interopRequireDefault(_reactBootstrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProposalListEntry = function ProposalListEntry(props) {

  var timeType = function timeType(stage, date) {
    var expirationDate = (0, _moment2.default)(date).add(2, 'weeks');

    if (stage === 0) {
      return 'Expires ' + (0, _moment2.default)(date).to(expirationDate);
    } else {
      return 'Created ' + (0, _moment2.default)(date).fromNow();
    }
  };

  var stageConversion = function stageConversion(stage) {
    if (stage === 0) {
      return 'Viability';
    } else if (stage === 1) {
      return 'Exploratory';
    } else if (stage === 2) {
      return 'Company Engagement';
    } else if (stage === 3) {
      return 'Post Company Engagement';
    }
  };

  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      props.title
    ),
    _react2.default.createElement(
      'td',
      null,
      stageConversion(props.stage)
    ),
    _react2.default.createElement(
      'td',
      null,
      timeType(props.stage, props.date)
    ),
    _react2.default.createElement(
      'td',
      null,
      props.supporters + '/' + props.watchers
    )
  );
};

module.exports = ProposalListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb3Bvc2FsTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJQcm9wb3NhbExpc3RFbnRyeSIsInByb3BzIiwidGltZVR5cGUiLCJzdGFnZSIsImRhdGUiLCJleHBpcmF0aW9uRGF0ZSIsImFkZCIsInRvIiwiZnJvbU5vdyIsInN0YWdlQ29udmVyc2lvbiIsInRpdGxlIiwic3VwcG9ydGVycyIsIndhdGNoZXJzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUlBLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBVzs7QUFFakMsTUFBSUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBUUMsSUFBUixFQUFpQjtBQUM5QixRQUFJQyxpQkFBaUIsc0JBQU9ELElBQVAsRUFBYUUsR0FBYixDQUFpQixDQUFqQixFQUFvQixPQUFwQixDQUFyQjs7QUFHQSxRQUFJSCxVQUFVLENBQWQsRUFBaUI7QUFDZixhQUFPLGFBQWEsc0JBQU9DLElBQVAsRUFBYUcsRUFBYixDQUFnQkYsY0FBaEIsQ0FBcEI7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPLGFBQWEsc0JBQU9ELElBQVAsRUFBYUksT0FBYixFQUFwQjtBQUNEO0FBQ0YsR0FURDs7QUFXQSxNQUFJQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNOLEtBQUQsRUFBVztBQUMvQixRQUFJQSxVQUFVLENBQWQsRUFBaUI7QUFDZixhQUFPLFdBQVA7QUFDRCxLQUZELE1BRU8sSUFBSUEsVUFBVSxDQUFkLEVBQWlCO0FBQ3RCLGFBQU8sYUFBUDtBQUNELEtBRk0sTUFFQSxJQUFJQSxVQUFVLENBQWQsRUFBaUI7QUFDdEIsYUFBTyxvQkFBUDtBQUNELEtBRk0sTUFFQSxJQUFJQSxVQUFVLENBQWQsRUFBaUI7QUFDdEIsYUFBTyx5QkFBUDtBQUNEO0FBQ0YsR0FWRDs7QUFZQSxTQUNJO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFLRixZQUFNUztBQUFYLEtBREQ7QUFFQztBQUFBO0FBQUE7QUFBS0Qsc0JBQWdCUixNQUFNRSxLQUF0QjtBQUFMLEtBRkQ7QUFHQztBQUFBO0FBQUE7QUFBS0QsZUFBU0QsTUFBTUUsS0FBZixFQUFzQkYsTUFBTUcsSUFBNUI7QUFBTCxLQUhEO0FBSUM7QUFBQTtBQUFBO0FBQUtILFlBQU1VLFVBQU4sR0FBbUIsR0FBbkIsR0FBeUJWLE1BQU1XO0FBQXBDO0FBSkQsR0FESjtBQVFELENBakNEOztBQW1DQUMsT0FBT0MsT0FBUCxHQUFpQmQsaUJBQWpCIiwiZmlsZSI6IlByb3Bvc2FsTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG52YXIgUHJvcG9zYWxMaXN0RW50cnkgPSAocHJvcHMpID0+IHtcblxuICB2YXIgdGltZVR5cGUgPSAoc3RhZ2UsIGRhdGUpID0+IHtcbiAgICB2YXIgZXhwaXJhdGlvbkRhdGUgPSBtb21lbnQoZGF0ZSkuYWRkKDIsICd3ZWVrcycpO1xuXG5cbiAgICBpZiAoc3RhZ2UgPT09IDApIHtcbiAgICAgIHJldHVybiAnRXhwaXJlcyAnICsgbW9tZW50KGRhdGUpLnRvKGV4cGlyYXRpb25EYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdDcmVhdGVkICcgKyBtb21lbnQoZGF0ZSkuZnJvbU5vdygpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgc3RhZ2VDb252ZXJzaW9uID0gKHN0YWdlKSA9PiB7XG4gICAgaWYgKHN0YWdlID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1ZpYWJpbGl0eSc7XG4gICAgfSBlbHNlIGlmIChzdGFnZSA9PT0gMSkge1xuICAgICAgcmV0dXJuICdFeHBsb3JhdG9yeSc7XG4gICAgfSBlbHNlIGlmIChzdGFnZSA9PT0gMikge1xuICAgICAgcmV0dXJuICdDb21wYW55IEVuZ2FnZW1lbnQnO1xuICAgIH0gZWxzZSBpZiAoc3RhZ2UgPT09IDMpIHtcbiAgICAgIHJldHVybiAnUG9zdCBDb21wYW55IEVuZ2FnZW1lbnQnO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgICAgPHRyPlxuICAgICAgIDx0ZD57cHJvcHMudGl0bGV9PC90ZD5cbiAgICAgICA8dGQ+e3N0YWdlQ29udmVyc2lvbihwcm9wcy5zdGFnZSl9PC90ZD5cbiAgICAgICA8dGQ+e3RpbWVUeXBlKHByb3BzLnN0YWdlLCBwcm9wcy5kYXRlKX08L3RkPlxuICAgICAgIDx0ZD57cHJvcHMuc3VwcG9ydGVycyArICcvJyArIHByb3BzLndhdGNoZXJzfTwvdGQ+XG4gICAgIDwvdHI+XG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3Bvc2FsTGlzdEVudHJ5OyJdfQ==