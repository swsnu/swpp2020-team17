"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mouseEvent = _interopRequireDefault(require("./mouse-event"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  border-radius: 3px;\n  display: inline-block;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  z-index: 999;\n  margin-left: ", "px;\n  font-size: 9.5px;\n  font-weight: 500;\n  padding: 7px 10px;\n  background-color: ", ";\n  color: ", ";\n  margin-bottom: -6px;\n  width: 50px;\n\n  :before,\n  :after {\n    content: '';\n    width: 0;\n    height: 0;\n    position: absolute;\n  }\n\n  :before {\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    left: -8px;\n    top: 50%;\n  }\n\n  :after {\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    left: -6px;\n    top: 50%;\n    margin-top: -4px;\n    border-right-color: ", ";\n    border-right-style: solid;\n    border-right-width: 6px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  z-index: 10;\n  ", ": -", "px;\n\n  height: ", "px;\n  width: ", "px;\n  box-shadow: ", ";\n  background-color: ", ";\n  border-width: 1px;\n  border-style: solid;\n  border-color: ", ";\n\n  :hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSliderHandle = _styledComponents["default"].span(_templateObject(), function (props) {
  return props.vertical ? 'margin-left' : 'margin-top';
}, function (props) {
  return (props.sliderHandleWidth - props.theme.sliderBarHeight) / 2;
}, function (props) {
  return Number.isFinite(props.sliderHandleWidth) ? props.sliderHandleWidth : props.theme.sliderHandleHeight;
}, function (props) {
  return Number.isFinite(props.sliderHandleWidth) ? props.sliderHandleWidth : props.theme.sliderHandleHeight;
}, function (props) {
  return props.theme.sliderHandleShadow;
}, function (props) {
  return props.theme.sliderHandleColor;
}, function (props) {
  return props.active ? props.theme.selectBorderColor : props.theme.sliderHandleColor;
}, function (props) {
  return props.theme.sliderHandleHoverColor;
});

var StyledSliderTooltip = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.sliderHandleWidth + 12;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipColor;
}, function (props) {
  return props.theme.tooltipBg;
});

var SliderTooltip = function SliderTooltip(_ref) {
  var value = _ref.value,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? function (val) {
    return val;
  } : _ref$format,
      style = _ref.style,
      sliderHandleWidth = _ref.sliderHandleWidth;
  return _react["default"].createElement(StyledSliderTooltip, {
    sliderHandleWidth: sliderHandleWidth,
    style: style
  }, format(value));
};

var SliderHandle =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(SliderHandle, _Component);

  function SliderHandle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SliderHandle);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SliderHandle).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      mouseOver: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ref", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMouseOver", function () {
      _this.setState({
        mouseOver: !_this.state.mouseOver
      });
    });
    _this.mouseEvent = new _mouseEvent["default"]({
      vertical: props.vertical,
      valueListener: props.valueListener,
      toggleMouseOver: _this.toggleMouseOver,
      track: props.track
    });
    return _this;
  }

  (0, _createClass2["default"])(SliderHandle, [{
    key: "render",
    value: function render() {
      var style = (0, _defineProperty2["default"])({}, this.props.vertical ? 'bottom' : 'left', this.props.left);
      return _react["default"].createElement("div", {
        style: {
          display: this.props.display ? 'block' : 'none'
        }
      }, this.props.showTooltip && this.state.mouseOver ? _react["default"].createElement(SliderTooltip, {
        style: style,
        sliderHandleWidth: this.props.sliderHandleWidth,
        value: Number.isFinite(this.props.value) ? this.props.value : null
      }) : null, _react["default"].createElement(StyledSliderHandle, {
        className: (0, _classnames["default"])('kg-range-slider__handle', {
          'kg-range-slider__handle--active': this.state.mouseOver
        }),
        ref: this.ref,
        sliderHandleWidth: this.props.sliderHandleWidth,
        active: this.state.mouseOver,
        vertical: this.props.vertical,
        style: style,
        onMouseDown: this.mouseEvent.handleMouseDown,
        onTouchStart: this.mouseEvent.handleTouchStart
      }));
    }
  }]);
  return SliderHandle;
}(_react.Component);

exports["default"] = SliderHandle;
(0, _defineProperty2["default"])(SliderHandle, "propTypes", {
  sliderHandleWidth: _propTypes["default"].number,
  left: _propTypes["default"].string,
  display: _propTypes["default"].bool,
  valueListener: _propTypes["default"].func,
  vertical: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(SliderHandle, "defaultProps", {
  sliderHandleWidth: 12,
  left: '50%',
  display: true,
  vertical: false,
  valueListener: function valueListenerFn() {},
  showTooltip: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyLWhhbmRsZS5qcyJdLCJuYW1lcyI6WyJTdHlsZWRTbGlkZXJIYW5kbGUiLCJzdHlsZWQiLCJzcGFuIiwicHJvcHMiLCJ2ZXJ0aWNhbCIsInNsaWRlckhhbmRsZVdpZHRoIiwidGhlbWUiLCJzbGlkZXJCYXJIZWlnaHQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInNsaWRlckhhbmRsZUhlaWdodCIsInNsaWRlckhhbmRsZVNoYWRvdyIsInNsaWRlckhhbmRsZUNvbG9yIiwiYWN0aXZlIiwic2VsZWN0Qm9yZGVyQ29sb3IiLCJzbGlkZXJIYW5kbGVIb3ZlckNvbG9yIiwiU3R5bGVkU2xpZGVyVG9vbHRpcCIsImRpdiIsInRvb2x0aXBCZyIsInRvb2x0aXBDb2xvciIsIlNsaWRlclRvb2x0aXAiLCJ2YWx1ZSIsImZvcm1hdCIsInZhbCIsInN0eWxlIiwiU2xpZGVySGFuZGxlIiwibW91c2VPdmVyIiwic2V0U3RhdGUiLCJzdGF0ZSIsIm1vdXNlRXZlbnQiLCJNb3VzZUV2ZW50SGFuZGxlciIsInZhbHVlTGlzdGVuZXIiLCJ0b2dnbGVNb3VzZU92ZXIiLCJ0cmFjayIsImxlZnQiLCJkaXNwbGF5Iiwic2hvd1Rvb2x0aXAiLCJyZWYiLCJoYW5kbGVNb3VzZURvd24iLCJoYW5kbGVUb3VjaFN0YXJ0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwibnVtYmVyIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJ2YWx1ZUxpc3RlbmVyRm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixHQUFHQyw2QkFBT0MsSUFBVixvQkFHcEIsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsUUFBTixHQUFpQixhQUFqQixHQUFpQyxZQUF0QztBQUFBLENBSGUsRUFHMEMsVUFBQUQsS0FBSztBQUFBLFNBQUksQ0FBQ0EsS0FBSyxDQUFDRSxpQkFBTixHQUEwQkYsS0FBSyxDQUFDRyxLQUFOLENBQVlDLGVBQXZDLElBQTBELENBQTlEO0FBQUEsQ0FIL0MsRUFLWixVQUFBSixLQUFLO0FBQUEsU0FDYkssTUFBTSxDQUFDQyxRQUFQLENBQWdCTixLQUFLLENBQUNFLGlCQUF0QixJQUNJRixLQUFLLENBQUNFLGlCQURWLEdBRUlGLEtBQUssQ0FBQ0csS0FBTixDQUFZSSxrQkFISDtBQUFBLENBTE8sRUFTYixVQUFBUCxLQUFLO0FBQUEsU0FDWkssTUFBTSxDQUFDQyxRQUFQLENBQWdCTixLQUFLLENBQUNFLGlCQUF0QixJQUNJRixLQUFLLENBQUNFLGlCQURWLEdBRUlGLEtBQUssQ0FBQ0csS0FBTixDQUFZSSxrQkFISjtBQUFBLENBVFEsRUFhUixVQUFBUCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxLQUFOLENBQVlLLGtCQUFoQjtBQUFBLENBYkcsRUFjRixVQUFBUixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxLQUFOLENBQVlNLGlCQUFoQjtBQUFBLENBZEgsRUFpQk4sVUFBQVQsS0FBSztBQUFBLFNBQ25CQSxLQUFLLENBQUNVLE1BQU4sR0FBZVYsS0FBSyxDQUFDRyxLQUFOLENBQVlRLGlCQUEzQixHQUErQ1gsS0FBSyxDQUFDRyxLQUFOLENBQVlNLGlCQUR4QztBQUFBLENBakJDLEVBcUJBLFVBQUFULEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNHLEtBQU4sQ0FBWVMsc0JBQWhCO0FBQUEsQ0FyQkwsQ0FBeEI7O0FBMEJBLElBQU1DLG1CQUFtQixHQUFHZiw2QkFBT2dCLEdBQVYscUJBT1IsVUFBQWQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsaUJBQU4sR0FBMEIsRUFBOUI7QUFBQSxDQVBHLEVBV0gsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0csS0FBTixDQUFZWSxTQUFoQjtBQUFBLENBWEYsRUFZZCxVQUFBZixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxLQUFOLENBQVlhLFlBQWhCO0FBQUEsQ0FaUyxFQXFDQyxVQUFBaEIsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0csS0FBTixDQUFZWSxTQUFoQjtBQUFBLENBckNOLENBQXpCOztBQTJDQSxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQTREO0FBQUEsTUFBMURDLEtBQTBELFFBQTFEQSxLQUEwRDtBQUFBLHlCQUFuREMsTUFBbUQ7QUFBQSxNQUFuREEsTUFBbUQsNEJBQTFDLFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFKO0FBQUEsR0FBdUM7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQUEsTUFBdkJuQixpQkFBdUIsUUFBdkJBLGlCQUF1QjtBQUNoRixTQUNFLGdDQUFDLG1CQUFEO0FBQXFCLElBQUEsaUJBQWlCLEVBQUVBLGlCQUF4QztBQUEyRCxJQUFBLEtBQUssRUFBRW1CO0FBQWxFLEtBQ0dGLE1BQU0sQ0FBQ0QsS0FBRCxDQURULENBREY7QUFLRCxDQU5EOztJQVFxQkksWTs7Ozs7QUFrQm5CLHdCQUFZdEIsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLHdIQUFNQSxLQUFOO0FBRGlCLDhGQVdYO0FBQUN1QixNQUFBQSxTQUFTLEVBQUU7QUFBWixLQVhXO0FBQUEsNEZBWWIsdUJBWmE7QUFBQSx3R0FjRCxZQUFNO0FBQ3RCLFlBQUtDLFFBQUwsQ0FBYztBQUFDRCxRQUFBQSxTQUFTLEVBQUUsQ0FBQyxNQUFLRSxLQUFMLENBQVdGO0FBQXhCLE9BQWQ7QUFDRCxLQWhCa0I7QUFHakIsVUFBS0csVUFBTCxHQUFrQixJQUFJQyxzQkFBSixDQUFzQjtBQUN0QzFCLE1BQUFBLFFBQVEsRUFBRUQsS0FBSyxDQUFDQyxRQURzQjtBQUV0QzJCLE1BQUFBLGFBQWEsRUFBRTVCLEtBQUssQ0FBQzRCLGFBRmlCO0FBR3RDQyxNQUFBQSxlQUFlLEVBQUUsTUFBS0EsZUFIZ0I7QUFJdENDLE1BQUFBLEtBQUssRUFBRTlCLEtBQUssQ0FBQzhCO0FBSnlCLEtBQXRCLENBQWxCO0FBSGlCO0FBU2xCOzs7OzZCQVNRO0FBQ1AsVUFBTVQsS0FBSyx3Q0FBSyxLQUFLckIsS0FBTCxDQUFXQyxRQUFYLEdBQXNCLFFBQXRCLEdBQWlDLE1BQXRDLEVBQStDLEtBQUtELEtBQUwsQ0FBVytCLElBQTFELENBQVg7QUFFQSxhQUNFO0FBQUssUUFBQSxLQUFLLEVBQUU7QUFBQ0MsVUFBQUEsT0FBTyxFQUFFLEtBQUtoQyxLQUFMLENBQVdnQyxPQUFYLEdBQXFCLE9BQXJCLEdBQStCO0FBQXpDO0FBQVosU0FDRyxLQUFLaEMsS0FBTCxDQUFXaUMsV0FBWCxJQUEwQixLQUFLUixLQUFMLENBQVdGLFNBQXJDLEdBQ0MsZ0NBQUMsYUFBRDtBQUNFLFFBQUEsS0FBSyxFQUFFRixLQURUO0FBRUUsUUFBQSxpQkFBaUIsRUFBRSxLQUFLckIsS0FBTCxDQUFXRSxpQkFGaEM7QUFHRSxRQUFBLEtBQUssRUFBRUcsTUFBTSxDQUFDQyxRQUFQLENBQWdCLEtBQUtOLEtBQUwsQ0FBV2tCLEtBQTNCLElBQW9DLEtBQUtsQixLQUFMLENBQVdrQixLQUEvQyxHQUF1RDtBQUhoRSxRQURELEdBTUcsSUFQTixFQVFFLGdDQUFDLGtCQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUUsNEJBQVcseUJBQVgsRUFBc0M7QUFDL0MsNkNBQW1DLEtBQUtPLEtBQUwsQ0FBV0Y7QUFEQyxTQUF0QyxDQURiO0FBSUUsUUFBQSxHQUFHLEVBQUUsS0FBS1csR0FKWjtBQUtFLFFBQUEsaUJBQWlCLEVBQUUsS0FBS2xDLEtBQUwsQ0FBV0UsaUJBTGhDO0FBTUUsUUFBQSxNQUFNLEVBQUUsS0FBS3VCLEtBQUwsQ0FBV0YsU0FOckI7QUFPRSxRQUFBLFFBQVEsRUFBRSxLQUFLdkIsS0FBTCxDQUFXQyxRQVB2QjtBQVFFLFFBQUEsS0FBSyxFQUFFb0IsS0FSVDtBQVNFLFFBQUEsV0FBVyxFQUFFLEtBQUtLLFVBQUwsQ0FBZ0JTLGVBVC9CO0FBVUUsUUFBQSxZQUFZLEVBQUUsS0FBS1QsVUFBTCxDQUFnQlU7QUFWaEMsUUFSRixDQURGO0FBdUJEOzs7RUE5RHVDQyxnQjs7O2lDQUFyQmYsWSxlQUNBO0FBQ2pCcEIsRUFBQUEsaUJBQWlCLEVBQUVvQyxzQkFBVUMsTUFEWjtBQUVqQlIsRUFBQUEsSUFBSSxFQUFFTyxzQkFBVUUsTUFGQztBQUdqQlIsRUFBQUEsT0FBTyxFQUFFTSxzQkFBVUcsSUFIRjtBQUlqQmIsRUFBQUEsYUFBYSxFQUFFVSxzQkFBVUksSUFKUjtBQUtqQnpDLEVBQUFBLFFBQVEsRUFBRXFDLHNCQUFVRztBQUxILEM7aUNBREFuQixZLGtCQVNHO0FBQ3BCcEIsRUFBQUEsaUJBQWlCLEVBQUUsRUFEQztBQUVwQjZCLEVBQUFBLElBQUksRUFBRSxLQUZjO0FBR3BCQyxFQUFBQSxPQUFPLEVBQUUsSUFIVztBQUlwQi9CLEVBQUFBLFFBQVEsRUFBRSxLQUpVO0FBS3BCMkIsRUFBQUEsYUFBYSxFQUFFLFNBQVNlLGVBQVQsR0FBMkIsQ0FBRSxDQUx4QjtBQU1wQlYsRUFBQUEsV0FBVyxFQUFFO0FBTk8sQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgY3JlYXRlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBNb3VzZUV2ZW50SGFuZGxlciBmcm9tICcuL21vdXNlLWV2ZW50JztcblxuY29uc3QgU3R5bGVkU2xpZGVySGFuZGxlID0gc3R5bGVkLnNwYW5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gICR7cHJvcHMgPT4gKHByb3BzLnZlcnRpY2FsID8gJ21hcmdpbi1sZWZ0JyA6ICdtYXJnaW4tdG9wJyl9OiAtJHtwcm9wcyA9PiAocHJvcHMuc2xpZGVySGFuZGxlV2lkdGggLSBwcm9wcy50aGVtZS5zbGlkZXJCYXJIZWlnaHQpIC8gMn1weDtcblxuICBoZWlnaHQ6ICR7cHJvcHMgPT5cbiAgICBOdW1iZXIuaXNGaW5pdGUocHJvcHMuc2xpZGVySGFuZGxlV2lkdGgpXG4gICAgICA/IHByb3BzLnNsaWRlckhhbmRsZVdpZHRoXG4gICAgICA6IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZUhlaWdodH1weDtcbiAgd2lkdGg6ICR7cHJvcHMgPT5cbiAgICBOdW1iZXIuaXNGaW5pdGUocHJvcHMuc2xpZGVySGFuZGxlV2lkdGgpXG4gICAgICA/IHByb3BzLnNsaWRlckhhbmRsZVdpZHRoXG4gICAgICA6IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZUhlaWdodH1weDtcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJIYW5kbGVTaGFkb3d9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZUNvbG9yfTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yIDogcHJvcHMudGhlbWUuc2xpZGVySGFuZGxlQ29sb3J9O1xuXG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJIYW5kbGVIb3ZlckNvbG9yfTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZFNsaWRlclRvb2x0aXAgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xuICB6LWluZGV4OiA5OTk7XG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnNsaWRlckhhbmRsZVdpZHRoICsgMTJ9cHg7XG4gIGZvbnQtc2l6ZTogOS41cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBDb2xvcn07XG4gIG1hcmdpbi1ib3R0b206IC02cHg7XG4gIHdpZHRoOiA1MHB4O1xuXG4gIDpiZWZvcmUsXG4gIDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIDpiZWZvcmUge1xuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgbGVmdDogLThweDtcbiAgICB0b3A6IDUwJTtcbiAgfVxuXG4gIDphZnRlciB7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBsZWZ0OiAtNnB4O1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDZweDtcbiAgfVxuYDtcblxuY29uc3QgU2xpZGVyVG9vbHRpcCA9ICh7dmFsdWUsIGZvcm1hdCA9IHZhbCA9PiB2YWwsIHN0eWxlLCBzbGlkZXJIYW5kbGVXaWR0aH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU2xpZGVyVG9vbHRpcCBzbGlkZXJIYW5kbGVXaWR0aD17c2xpZGVySGFuZGxlV2lkdGh9IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Zm9ybWF0KHZhbHVlKX1cbiAgICA8L1N0eWxlZFNsaWRlclRvb2x0aXA+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJIYW5kbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNsaWRlckhhbmRsZVdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxlZnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzcGxheTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdmFsdWVMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzbGlkZXJIYW5kbGVXaWR0aDogMTIsXG4gICAgbGVmdDogJzUwJScsXG4gICAgZGlzcGxheTogdHJ1ZSxcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgdmFsdWVMaXN0ZW5lcjogZnVuY3Rpb24gdmFsdWVMaXN0ZW5lckZuKCkge30sXG4gICAgc2hvd1Rvb2x0aXA6IGZhbHNlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnQgPSBuZXcgTW91c2VFdmVudEhhbmRsZXIoe1xuICAgICAgdmVydGljYWw6IHByb3BzLnZlcnRpY2FsLFxuICAgICAgdmFsdWVMaXN0ZW5lcjogcHJvcHMudmFsdWVMaXN0ZW5lcixcbiAgICAgIHRvZ2dsZU1vdXNlT3ZlcjogdGhpcy50b2dnbGVNb3VzZU92ZXIsXG4gICAgICB0cmFjazogcHJvcHMudHJhY2tcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlID0ge21vdXNlT3ZlcjogZmFsc2V9O1xuICByZWYgPSBjcmVhdGVSZWYoKTtcblxuICB0b2dnbGVNb3VzZU92ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VPdmVyOiAhdGhpcy5zdGF0ZS5tb3VzZU92ZXJ9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSB7W3RoaXMucHJvcHMudmVydGljYWwgPyAnYm90dG9tJyA6ICdsZWZ0J106IHRoaXMucHJvcHMubGVmdH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IHRoaXMucHJvcHMuZGlzcGxheSA/ICdibG9jaycgOiAnbm9uZSd9fT5cbiAgICAgICAge3RoaXMucHJvcHMuc2hvd1Rvb2x0aXAgJiYgdGhpcy5zdGF0ZS5tb3VzZU92ZXIgPyAoXG4gICAgICAgICAgPFNsaWRlclRvb2x0aXBcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXt0aGlzLnByb3BzLnNsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgICAgdmFsdWU9e051bWJlci5pc0Zpbml0ZSh0aGlzLnByb3BzLnZhbHVlKSA/IHRoaXMucHJvcHMudmFsdWUgOiBudWxsfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8U3R5bGVkU2xpZGVySGFuZGxlXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdrZy1yYW5nZS1zbGlkZXJfX2hhbmRsZScsIHtcbiAgICAgICAgICAgICdrZy1yYW5nZS1zbGlkZXJfX2hhbmRsZS0tYWN0aXZlJzogdGhpcy5zdGF0ZS5tb3VzZU92ZXJcbiAgICAgICAgICB9KX1cbiAgICAgICAgICByZWY9e3RoaXMucmVmfVxuICAgICAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXt0aGlzLnByb3BzLnNsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5tb3VzZU92ZXJ9XG4gICAgICAgICAgdmVydGljYWw9e3RoaXMucHJvcHMudmVydGljYWx9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLm1vdXNlRXZlbnQuaGFuZGxlTW91c2VEb3dufVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5tb3VzZUV2ZW50LmhhbmRsZVRvdWNoU3RhcnR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=