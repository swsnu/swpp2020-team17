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

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  background-color: ", ";\n  ", ";\n  border-radius: ", ";\n\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSlider = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.active ? props.theme.sliderBarHoverColor : props.theme.sliderBarColor;
}, function (props) {
  return "".concat(props.vertical ? 'width' : 'height', ": ").concat(props.theme.sliderBarHeight, "px");
}, function (props) {
  return props.theme.sliderBarRadius;
});

function nope() {}

var SliderBarHandle =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(SliderBarHandle, _Component);

  function SliderBarHandle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SliderBarHandle);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SliderBarHandle).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      mouseOver: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMouseOver", function () {
      _this.setState({
        mouseOver: !_this.state.mouseOver
      });
    });
    _this.mouseEvent = new _mouseEvent["default"]({
      vertical: props.vertical,
      valueListener: props.sliderBarListener,
      toggleMouseOver: _this.toggleMouseOver,
      track: props.track,
      setAnchor: props.setAnchor
    });
    return _this;
  }

  (0, _createClass2["default"])(SliderBarHandle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          v0Left = _this$props.v0Left;
      var style = this.props.vertical ? {
        height: "".concat(width, "%"),
        bottom: "".concat(-100 + width + v0Left, "%")
      } : {
        width: "".concat(width, "%"),
        left: "".concat(v0Left, "%")
      };
      return _react["default"].createElement(StyledSlider, {
        active: this.state.mouseOver,
        className: (0, _classnames["default"])('kg-range-slider__bar', {
          'kg-range-slider__bar--active': this.state.mouseOver
        }),
        style: style,
        onMouseDown: this.props.enableBarDrag ? this.mouseEvent.handleMouseDown : nope,
        onTouchStart: this.props.enableBarDrag ? this.mouseEvent.handleTouchStart : nope
      });
    }
  }]);
  return SliderBarHandle;
}(_react.Component);

exports["default"] = SliderBarHandle;
(0, _defineProperty2["default"])(SliderBarHandle, "propTypes", {
  width: _propTypes["default"].number,
  left: _propTypes["default"].string,
  sliderBarListener: _propTypes["default"].func,
  enableBarDrag: _propTypes["default"].bool,
  vertical: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(SliderBarHandle, "defaultProps", {
  sliderBarListener: nope,
  enableBarDrag: false,
  vertical: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyLWJhci1oYW5kbGUuanMiXSwibmFtZXMiOlsiU3R5bGVkU2xpZGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJhY3RpdmUiLCJ0aGVtZSIsInNsaWRlckJhckhvdmVyQ29sb3IiLCJzbGlkZXJCYXJDb2xvciIsInZlcnRpY2FsIiwic2xpZGVyQmFySGVpZ2h0Iiwic2xpZGVyQmFyUmFkaXVzIiwibm9wZSIsIlNsaWRlckJhckhhbmRsZSIsIm1vdXNlT3ZlciIsInNldFN0YXRlIiwic3RhdGUiLCJtb3VzZUV2ZW50IiwiTW91c2VFdmVudEhhbmRsZXIiLCJ2YWx1ZUxpc3RlbmVyIiwic2xpZGVyQmFyTGlzdGVuZXIiLCJ0b2dnbGVNb3VzZU92ZXIiLCJ0cmFjayIsInNldEFuY2hvciIsIndpZHRoIiwidjBMZWZ0Iiwic3R5bGUiLCJoZWlnaHQiLCJib3R0b20iLCJsZWZ0IiwiZW5hYmxlQmFyRHJhZyIsImhhbmRsZU1vdXNlRG93biIsImhhbmRsZVRvdWNoU3RhcnQiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUVJLFVBQUFDLEtBQUs7QUFBQSxTQUN2QkEsS0FBSyxDQUFDQyxNQUFOLEdBQWVELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxtQkFBM0IsR0FBaURILEtBQUssQ0FBQ0UsS0FBTixDQUFZRSxjQUR0QztBQUFBLENBRlQsRUFJZCxVQUFBSixLQUFLO0FBQUEsbUJBQU9BLEtBQUssQ0FBQ0ssUUFBTixHQUFpQixPQUFqQixHQUEyQixRQUFsQyxlQUErQ0wsS0FBSyxDQUFDRSxLQUFOLENBQVlJLGVBQTNEO0FBQUEsQ0FKUyxFQUtDLFVBQUFOLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUssZUFBaEI7QUFBQSxDQUxOLENBQWxCOztBQVlBLFNBQVNDLElBQVQsR0FBZ0IsQ0FBRTs7SUFFR0MsZTs7Ozs7QUFlbkIsMkJBQVlULEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiwySEFBTUEsS0FBTjtBQURpQiw4RkFXWDtBQUFDVSxNQUFBQSxTQUFTLEVBQUU7QUFBWixLQVhXO0FBQUEsd0dBYUQsWUFBTTtBQUN0QixZQUFLQyxRQUFMLENBQWM7QUFBQ0QsUUFBQUEsU0FBUyxFQUFFLENBQUMsTUFBS0UsS0FBTCxDQUFXRjtBQUF4QixPQUFkO0FBQ0QsS0Fma0I7QUFFakIsVUFBS0csVUFBTCxHQUFrQixJQUFJQyxzQkFBSixDQUFzQjtBQUN0Q1QsTUFBQUEsUUFBUSxFQUFFTCxLQUFLLENBQUNLLFFBRHNCO0FBRXRDVSxNQUFBQSxhQUFhLEVBQUVmLEtBQUssQ0FBQ2dCLGlCQUZpQjtBQUd0Q0MsTUFBQUEsZUFBZSxFQUFFLE1BQUtBLGVBSGdCO0FBSXRDQyxNQUFBQSxLQUFLLEVBQUVsQixLQUFLLENBQUNrQixLQUp5QjtBQUt0Q0MsTUFBQUEsU0FBUyxFQUFFbkIsS0FBSyxDQUFDbUI7QUFMcUIsS0FBdEIsQ0FBbEI7QUFGaUI7QUFTbEI7Ozs7NkJBUVE7QUFBQSx3QkFDaUIsS0FBS25CLEtBRHRCO0FBQUEsVUFDQW9CLEtBREEsZUFDQUEsS0FEQTtBQUFBLFVBQ09DLE1BRFAsZUFDT0EsTUFEUDtBQUdQLFVBQU1DLEtBQUssR0FBRyxLQUFLdEIsS0FBTCxDQUFXSyxRQUFYLEdBQ1Y7QUFDRWtCLFFBQUFBLE1BQU0sWUFBS0gsS0FBTCxNQURSO0FBRUVJLFFBQUFBLE1BQU0sWUFBSyxDQUFDLEdBQUQsR0FBT0osS0FBUCxHQUFlQyxNQUFwQjtBQUZSLE9BRFUsR0FLVjtBQUNFRCxRQUFBQSxLQUFLLFlBQUtBLEtBQUwsTUFEUDtBQUVFSyxRQUFBQSxJQUFJLFlBQUtKLE1BQUw7QUFGTixPQUxKO0FBVUEsYUFDRSxnQ0FBQyxZQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUUsS0FBS1QsS0FBTCxDQUFXRixTQURyQjtBQUVFLFFBQUEsU0FBUyxFQUFFLDRCQUFXLHNCQUFYLEVBQW1DO0FBQzVDLDBDQUFnQyxLQUFLRSxLQUFMLENBQVdGO0FBREMsU0FBbkMsQ0FGYjtBQUtFLFFBQUEsS0FBSyxFQUFFWSxLQUxUO0FBTUUsUUFBQSxXQUFXLEVBQUUsS0FBS3RCLEtBQUwsQ0FBVzBCLGFBQVgsR0FBMkIsS0FBS2IsVUFBTCxDQUFnQmMsZUFBM0MsR0FBNkRuQixJQU41RTtBQU9FLFFBQUEsWUFBWSxFQUFFLEtBQUtSLEtBQUwsQ0FBVzBCLGFBQVgsR0FBMkIsS0FBS2IsVUFBTCxDQUFnQmUsZ0JBQTNDLEdBQThEcEI7QUFQOUUsUUFERjtBQVdEOzs7RUF4RDBDcUIsZ0I7OztpQ0FBeEJwQixlLGVBQ0E7QUFDakJXLEVBQUFBLEtBQUssRUFBRVUsc0JBQVVDLE1BREE7QUFFakJOLEVBQUFBLElBQUksRUFBRUssc0JBQVVFLE1BRkM7QUFHakJoQixFQUFBQSxpQkFBaUIsRUFBRWMsc0JBQVVHLElBSFo7QUFJakJQLEVBQUFBLGFBQWEsRUFBRUksc0JBQVVJLElBSlI7QUFLakI3QixFQUFBQSxRQUFRLEVBQUV5QixzQkFBVUk7QUFMSCxDO2lDQURBekIsZSxrQkFTRztBQUNwQk8sRUFBQUEsaUJBQWlCLEVBQUVSLElBREM7QUFFcEJrQixFQUFBQSxhQUFhLEVBQUUsS0FGSztBQUdwQnJCLEVBQUFBLFFBQVEsRUFBRTtBQUhVLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IE1vdXNlRXZlbnRIYW5kbGVyIGZyb20gJy4vbW91c2UtZXZlbnQnO1xuXG5jb25zdCBTdHlsZWRTbGlkZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS5zbGlkZXJCYXJIb3ZlckNvbG9yIDogcHJvcHMudGhlbWUuc2xpZGVyQmFyQ29sb3J9O1xuICAke3Byb3BzID0+IGAke3Byb3BzLnZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnfTogJHtwcm9wcy50aGVtZS5zbGlkZXJCYXJIZWlnaHR9cHhgfTtcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJCYXJSYWRpdXN9O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5mdW5jdGlvbiBub3BlKCkge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyQmFySGFuZGxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZWZ0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNsaWRlckJhckxpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBlbmFibGVCYXJEcmFnOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2xcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNsaWRlckJhckxpc3RlbmVyOiBub3BlLFxuICAgIGVuYWJsZUJhckRyYWc6IGZhbHNlLFxuICAgIHZlcnRpY2FsOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMubW91c2VFdmVudCA9IG5ldyBNb3VzZUV2ZW50SGFuZGxlcih7XG4gICAgICB2ZXJ0aWNhbDogcHJvcHMudmVydGljYWwsXG4gICAgICB2YWx1ZUxpc3RlbmVyOiBwcm9wcy5zbGlkZXJCYXJMaXN0ZW5lcixcbiAgICAgIHRvZ2dsZU1vdXNlT3ZlcjogdGhpcy50b2dnbGVNb3VzZU92ZXIsXG4gICAgICB0cmFjazogcHJvcHMudHJhY2ssXG4gICAgICBzZXRBbmNob3I6IHByb3BzLnNldEFuY2hvclxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGUgPSB7bW91c2VPdmVyOiBmYWxzZX07XG5cbiAgdG9nZ2xlTW91c2VPdmVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe21vdXNlT3ZlcjogIXRoaXMuc3RhdGUubW91c2VPdmVyfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt3aWR0aCwgdjBMZWZ0fSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMucHJvcHMudmVydGljYWxcbiAgICAgID8ge1xuICAgICAgICAgIGhlaWdodDogYCR7d2lkdGh9JWAsXG4gICAgICAgICAgYm90dG9tOiBgJHstMTAwICsgd2lkdGggKyB2MExlZnR9JWBcbiAgICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgICAgd2lkdGg6IGAke3dpZHRofSVgLFxuICAgICAgICAgIGxlZnQ6IGAke3YwTGVmdH0lYFxuICAgICAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRTbGlkZXJcbiAgICAgICAgYWN0aXZlPXt0aGlzLnN0YXRlLm1vdXNlT3Zlcn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdrZy1yYW5nZS1zbGlkZXJfX2JhcicsIHtcbiAgICAgICAgICAna2ctcmFuZ2Utc2xpZGVyX19iYXItLWFjdGl2ZSc6IHRoaXMuc3RhdGUubW91c2VPdmVyXG4gICAgICAgIH0pfVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLnByb3BzLmVuYWJsZUJhckRyYWcgPyB0aGlzLm1vdXNlRXZlbnQuaGFuZGxlTW91c2VEb3duIDogbm9wZX1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLnByb3BzLmVuYWJsZUJhckRyYWcgPyB0aGlzLm1vdXNlRXZlbnQuaGFuZGxlVG91Y2hTdGFydCA6IG5vcGV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==