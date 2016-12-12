'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Search = require('./Search.jsx');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(props) {
  return _react2.default.createElement(
    'nav',
    { className: 'navbar navbar-default' },
    _react2.default.createElement(
      'div',
      { className: 'navbar-header' },
      _react2.default.createElement(
        'a',
        { href: '/home', className: 'navbar-brand' },
        'Home'
      ),
      _react2.default.createElement(
        'a',
        { href: 'myproposals', className: 'navbar-brand' },
        'My Proposals'
      ),
      _react2.default.createElement(
        'a',
        { href: '#', className: 'navbar-brand' },
        'About'
      ),
      _react2.default.createElement(
        'a',
        { href: '/newproposal', className: 'navbar-brand' },
        'Add New Proposal'
      ),
      _react2.default.createElement(_Search2.default, null)
    )
  );
};

module.exports = Navbar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdkJhci5qc3giXSwibmFtZXMiOlsiTmF2YmFyIiwicHJvcHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUlBLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFDdEIsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLHVCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUcsTUFBSyxPQUFSLEVBQWdCLFdBQVUsY0FBMUI7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBRyxNQUFLLGFBQVIsRUFBc0IsV0FBVSxjQUFoQztBQUFBO0FBQUEsT0FGRjtBQUdFO0FBQUE7QUFBQSxVQUFHLE1BQUssR0FBUixFQUFZLFdBQVUsY0FBdEI7QUFBQTtBQUFBLE9BSEY7QUFJRTtBQUFBO0FBQUEsVUFBRyxNQUFLLGNBQVIsRUFBdUIsV0FBVSxjQUFqQztBQUFBO0FBQUEsT0FKRjtBQUtFO0FBTEY7QUFERixHQURGO0FBV0QsQ0FaRDs7QUFnQkFDLE9BQU9DLE9BQVAsR0FBaUJILE1BQWpCIiwiZmlsZSI6Ik5hdkJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoLmpzeCc7XG5cbnZhciBOYXZiYXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgIDxhIGhyZWY9XCIvaG9tZVwiIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPkhvbWU8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJteXByb3Bvc2Fsc1wiIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPk15IFByb3Bvc2FsczwvYT5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5BYm91dDwvYT5cbiAgICAgICAgPGEgaHJlZj1cIi9uZXdwcm9wb3NhbFwiIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPkFkZCBOZXcgUHJvcG9zYWw8L2E+XG4gICAgICAgIDxTZWFyY2ggLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gTmF2YmFyOyJdfQ==