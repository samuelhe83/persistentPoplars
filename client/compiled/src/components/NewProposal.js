'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewProposal = function (_React$Component) {
  _inherits(NewProposal, _React$Component);

  function NewProposal(props) {
    _classCallCheck(this, NewProposal);

    var _this = _possibleConstructorReturn(this, (NewProposal.__proto__ || Object.getPrototypeOf(NewProposal)).call(this, props));

    _this.changeForm = _this.changeForm.bind(_this);
    _this.newProposalAjax = _this.newProposalAjax.bind(_this);
    _this.state = {
      title: null,
      description: null
    };

    return _this;
  }

  _createClass(NewProposal, [{
    key: 'changeForm',
    value: function changeForm(e) {
      var state = {};
      state[e.target.name] = e.target.value;
      this.setState(state);
    }
  }, {
    key: 'newProposalAjax',
    value: function newProposalAjax() {
      _jquery2.default.ajax({
        url: '/proposals',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          title: this.state.title,
          description: this.state.description,
          stage: 0,
          watch: 0,
          support: 0
        }),
        success: function success(data) {
          console.log(data);
        }
      });
    }

    //HOW TO LINK COMPANY.

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: this.newProposalAjax },
          _react2.default.createElement('input', { onChange: this.changeForm, name: 'title', type: 'text', placeholder: 'Title' }),
          ' ',
          _react2.default.createElement('br', null),
          _react2.default.createElement('textarea', { onChange: this.changeForm, name: 'description', type: 'text', placeholder: 'Description', id: 'description' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'button',
            null,
            'Create New Proposal'
          )
        )
      );
    }
  }]);

  return NewProposal;
}(_react2.default.Component);

module.exports = NewProposal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05ld1Byb3Bvc2FsLmpzeCJdLCJuYW1lcyI6WyJOZXdQcm9wb3NhbCIsInByb3BzIiwiY2hhbmdlRm9ybSIsImJpbmQiLCJuZXdQcm9wb3NhbEFqYXgiLCJzdGF0ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiY29udGVudFR5cGUiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YWdlIiwid2F0Y2giLCJzdXBwb3J0Iiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFc7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJELElBQXJCLE9BQXZCO0FBQ0EsVUFBS0UsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sSUFESTtBQUVYQyxtQkFBYTtBQUZGLEtBQWI7O0FBSmlCO0FBU2xCOzs7OytCQUVVQyxDLEVBQUc7QUFDWixVQUFJSCxRQUFRLEVBQVo7QUFDQUEsWUFBTUcsRUFBRUMsTUFBRixDQUFTQyxJQUFmLElBQXVCRixFQUFFQyxNQUFGLENBQVNFLEtBQWhDO0FBQ0EsV0FBS0MsUUFBTCxDQUFjUCxLQUFkO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsdUJBQUVRLElBQUYsQ0FBTztBQUNMQyxhQUFLLFlBREE7QUFFTEMsZ0JBQVEsTUFGSDtBQUdMQyxxQkFBYSxrQkFIUjtBQUlMQyxjQUFNQyxLQUFLQyxTQUFMLENBQWU7QUFDbkJiLGlCQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FEQztBQUVuQkMsdUJBQWEsS0FBS0YsS0FBTCxDQUFXRSxXQUZMO0FBR25CYSxpQkFBTyxDQUhZO0FBSW5CQyxpQkFBTyxDQUpZO0FBS25CQyxtQkFBUztBQUxVLFNBQWYsQ0FKRDtBQVdMQyxpQkFBUyxpQkFBQ04sSUFBRCxFQUFVO0FBQUNPLGtCQUFRQyxHQUFSLENBQVlSLElBQVo7QUFBbUI7QUFYbEMsT0FBUDtBQWFEOztBQUVEOzs7OzZCQUVTO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTSxVQUFVLEtBQUtiLGVBQXJCO0FBQ0UsbURBQU8sVUFBVSxLQUFLRixVQUF0QixFQUFrQyxNQUFLLE9BQXZDLEVBQStDLE1BQUssTUFBcEQsRUFBMkQsYUFBWSxPQUF2RSxHQURGO0FBQUE7QUFDb0YsbURBRHBGO0FBRUUsc0RBQVUsVUFBVSxLQUFLQSxVQUF6QixFQUFxQyxNQUFLLGFBQTFDLEVBQXdELE1BQUssTUFBN0QsRUFBb0UsYUFBWSxhQUFoRixFQUE4RixJQUFHLGFBQWpHLEdBRkY7QUFFNEgsbURBRjVIO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBREYsT0FERjtBQVNEOzs7O0VBOUN1QixnQkFBTXdCLFM7O0FBaURoQ0MsT0FBT0MsT0FBUCxHQUFpQjVCLFdBQWpCIiwiZmlsZSI6Ik5ld1Byb3Bvc2FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIE5ld1Byb3Bvc2FsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jaGFuZ2VGb3JtID0gdGhpcy5jaGFuZ2VGb3JtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5uZXdQcm9wb3NhbEFqYXggPSB0aGlzLm5ld1Byb3Bvc2FsQWpheC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBudWxsXG4gICAgfVxuXG4gIH1cblxuICBjaGFuZ2VGb3JtKGUpIHtcbiAgICB2YXIgc3RhdGUgPSB7fTtcbiAgICBzdGF0ZVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgbmV3UHJvcG9zYWxBamF4KCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvcHJvcG9zYWxzJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6IHRoaXMuc3RhdGUudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uLFxuICAgICAgICBzdGFnZTogMCxcbiAgICAgICAgd2F0Y2g6IDAsXG4gICAgICAgIHN1cHBvcnQ6IDBcbiAgICAgIH0pLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtjb25zb2xlLmxvZyhkYXRhKTt9XG4gICAgfSk7XG4gIH1cblxuICAvL0hPVyBUTyBMSU5LIENPTVBBTlkuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5uZXdQcm9wb3NhbEFqYXh9PlxuICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5jaGFuZ2VGb3JtfSBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiAvPiA8YnIvPlxuICAgICAgICAgIDx0ZXh0YXJlYSBvbkNoYW5nZT17dGhpcy5jaGFuZ2VGb3JtfSBuYW1lPVwiZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT48YnIvPlxuICAgICAgICAgIDxidXR0b24+Q3JlYXRlIE5ldyBQcm9wb3NhbDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTmV3UHJvcG9zYWw7XG4iXX0=