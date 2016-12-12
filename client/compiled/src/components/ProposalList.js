'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProposalListEntry = require('./ProposalListEntry.jsx');

var _ProposalListEntry2 = _interopRequireDefault(_ProposalListEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProposalList = function ProposalList(props) {

  return _react2.default.createElement(
    'table',
    { className: 'table' },
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Title'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Stage'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Time'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Supporters/Watchers'
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      props.proposals.map(function (proposal) {
        return _react2.default.createElement(_ProposalListEntry2.default, {
          title: proposal.title,
          date: proposal.date,
          stage: proposal.stage,
          supporters: proposal.support,
          watchers: proposal.watch });
      })
    )
  );
};

module.exports = ProposalList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb3Bvc2FsTGlzdC5qc3giXSwibmFtZXMiOlsiUHJvcG9zYWxMaXN0IiwicHJvcHMiLCJwcm9wb3NhbHMiLCJtYXAiLCJwcm9wb3NhbCIsInRpdGxlIiwiZGF0ZSIsInN0YWdlIiwic3VwcG9ydCIsIndhdGNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXOztBQUU1QixTQUNFO0FBQUE7QUFBQSxNQUFPLFdBQVUsT0FBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFERixLQURGO0FBVUU7QUFBQTtBQUFBO0FBQ0dBLFlBQU1DLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLG9CQUFZO0FBQy9CLGVBQVE7QUFDTixpQkFBT0MsU0FBU0MsS0FEVjtBQUVOLGdCQUFNRCxTQUFTRSxJQUZUO0FBR04saUJBQU9GLFNBQVNHLEtBSFY7QUFJTixzQkFBWUgsU0FBU0ksT0FKZjtBQUtOLG9CQUFVSixTQUFTSyxLQUxiLEdBQVI7QUFPRCxPQVJBO0FBREg7QUFWRixHQURGO0FBNEJELENBOUJEOztBQWlDQUMsT0FBT0MsT0FBUCxHQUFpQlgsWUFBakIiLCJmaWxlIjoiUHJvcG9zYWxMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wb3NhbExpc3RFbnRyeSBmcm9tICcuL1Byb3Bvc2FsTGlzdEVudHJ5LmpzeCc7XG5cbnZhciBQcm9wb3NhbExpc3QgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPlRpdGxlPC90aD5cbiAgICAgICAgICA8dGg+U3RhZ2U8L3RoPlxuICAgICAgICAgIDx0aD5UaW1lPC90aD5cbiAgICAgICAgICA8dGg+U3VwcG9ydGVycy9XYXRjaGVyczwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuXG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtwcm9wcy5wcm9wb3NhbHMubWFwKHByb3Bvc2FsID0+IHtcbiAgICAgICAgICByZXR1cm4gKDxQcm9wb3NhbExpc3RFbnRyeVxuICAgICAgICAgICAgdGl0bGU9e3Byb3Bvc2FsLnRpdGxlfVxuICAgICAgICAgICAgZGF0ZT17cHJvcG9zYWwuZGF0ZX1cbiAgICAgICAgICAgIHN0YWdlPXtwcm9wb3NhbC5zdGFnZX1cbiAgICAgICAgICAgIHN1cHBvcnRlcnM9e3Byb3Bvc2FsLnN1cHBvcnR9XG4gICAgICAgICAgICB3YXRjaGVycz17cHJvcG9zYWwud2F0Y2h9IC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIDwvdGJvZHk+XG5cbiAgICA8L3RhYmxlPlxuICApO1xuXG5cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9wb3NhbExpc3Q7Il19