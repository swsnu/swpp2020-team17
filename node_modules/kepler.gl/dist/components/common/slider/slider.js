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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sliderHandle = _interopRequireDefault(require("./slider-handle"));

var _sliderBarHandle = _interopRequireDefault(require("./slider-bar-handle"));

var _dataUtils = require("../../../utils/data-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n  margin-top: ", "px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  margin-bottom: 12px;\n  background-color: ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function noop() {}

var StyledRangeSlider = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.sliderBarBgd;
}, function (props) {
  return "".concat(props.vertical ? 'width' : 'height', ": ").concat(props.theme.sliderBarHeight, "px");
}, function (props) {
  return "".concat(props.vertical ? 'height' : 'width', ": 100%");
});

var SliderWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.sliderMarginTop;
});

var Slider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Slider, _Component);

  function Slider() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ref", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "track", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setAnchor", function (x) {
      // used to calculate delta
      _this._anchor = x;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal0InRange", function (val) {
      var _this$props = _this.props,
          value1 = _this$props.value1,
          minValue = _this$props.minValue;
      return Boolean(val >= minValue && val <= value1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal1InRange", function (val) {
      var _this$props2 = _this.props,
          maxValue = _this$props2.maxValue,
          value0 = _this$props2.value0;
      return Boolean(val <= maxValue && val >= value0);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slide0Listener", function (x) {
      var val = _this._getValue(_this.props.minValue, x);

      if (_this._isVal0InRange(val)) {
        _this.props.onSlider0Change(val);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slide1Listener", function (x) {
      var val = _this._getValue(_this.props.minValue, x);

      if (_this._isVal1InRange(val)) {
        _this.props.onSlider1Change(val);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sliderBarListener", function (x) {
      var _this$props3 = _this.props,
          minValue = _this$props3.minValue,
          maxValue = _this$props3.maxValue; // for slider bar, we use distance delta

      var anchor = _this._anchor;

      var val0 = _this._getValue(_this.props.value0, x - anchor);

      var val1 = _this._getValue(_this.props.value1, x - anchor);

      if (val0 >= minValue && val1 <= maxValue && val1 >= val0) {
        var deltaX = _this._getDeltaX(val0 - _this.props.value0);

        _this.props.onSliderBarChange(val0, val1); // update anchor


        _this._anchor = _this._anchor + deltaX;
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "calcHandleLeft0", function (w, l, num) {
      return w === 0 ? "calc(".concat(l, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)") : "calc(".concat(l, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)");
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "calcHandleLeft1", function (w, l) {
      return _this.props.isRanged && w === 0 ? "".concat(l, "%") : "calc(".concat(l + w, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)");
    });
    return _this;
  }

  (0, _createClass2["default"])(Slider, [{
    key: "_getBaseDistance",
    value: function _getBaseDistance() {
      return this.props.vertical ? this.ref.current.offsetHeight : this.ref.current.offsetWidth;
    }
  }, {
    key: "_getDeltaVal",
    value: function _getDeltaVal(x) {
      var percent = x / this._getBaseDistance();

      var maxDelta = this.props.maxValue - this.props.minValue;
      return percent * maxDelta;
    }
  }, {
    key: "_getDeltaX",
    value: function _getDeltaX(v) {
      var percent = v / (this.props.maxValue - this.props.minValue);

      var maxDelta = this._getBaseDistance();

      return percent * maxDelta;
    }
  }, {
    key: "_getValue",
    value: function _getValue(baseV, offset) {
      // offset is the distance between slider handle and track left
      var rawValue = baseV + this._getDeltaVal(offset);

      return this._normalizeValue(rawValue);
    }
  }, {
    key: "_normalizeValue",
    value: function _normalizeValue(val) {
      var _this$props4 = this.props,
          minValue = _this$props4.minValue,
          step = _this$props4.step,
          marks = _this$props4.marks;
      return (0, _dataUtils.normalizeSliderValue)(val, minValue, step, marks);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          classSet = _this$props5.classSet,
          disabled = _this$props5.disabled,
          isRanged = _this$props5.isRanged,
          maxValue = _this$props5.maxValue,
          minValue = _this$props5.minValue,
          value1 = _this$props5.value1,
          vertical = _this$props5.vertical,
          sliderHandleWidth = _this$props5.sliderHandleWidth,
          showTooltip = _this$props5.showTooltip;
      var value0 = !isRanged && minValue > 0 ? minValue : this.props.value0;
      var currValDelta = value1 - value0;
      var maxDelta = maxValue - minValue;
      var width = currValDelta / maxDelta * 100;
      var v0Left = (value0 - minValue) / maxDelta * 100;
      return _react["default"].createElement(SliderWrapper, {
        className: (0, _classnames["default"])('kg-slider', _objectSpread({}, classSet, {
          disabled: disabled
        })),
        ref: this.ref,
        isRanged: isRanged,
        vertical: vertical
      }, _react["default"].createElement(StyledRangeSlider, {
        className: "kg-range-slider",
        vertical: vertical,
        ref: this.track
      }, _react["default"].createElement(_sliderHandle["default"], {
        className: "kg-range-slider__handle",
        left: this.calcHandleLeft0(width, v0Left),
        valueListener: this.slide0Listener,
        sliderHandleWidth: sliderHandleWidth,
        display: isRanged,
        vertical: vertical,
        showTooltip: showTooltip,
        track: this.track
      }), _react["default"].createElement(_sliderHandle["default"], {
        className: "kg-range-slider__handle",
        left: this.calcHandleLeft1(width, v0Left),
        valueListener: this.slide1Listener,
        sliderHandleWidth: sliderHandleWidth,
        vertical: vertical,
        value: value1,
        showTooltip: showTooltip,
        track: this.track
      }), _react["default"].createElement(_sliderBarHandle["default"], {
        width: width,
        v0Left: v0Left,
        enableBarDrag: this.props.enableBarDrag,
        sliderBarListener: this.sliderBarListener,
        vertical: vertical,
        track: this.track,
        setAnchor: this._setAnchor
      })));
    }
  }]);
  return Slider;
}(_react.Component);

exports["default"] = Slider;
(0, _defineProperty2["default"])(Slider, "propTypes", {
  title: _propTypes["default"].string,
  isRanged: _propTypes["default"].bool,
  value0: _propTypes["default"].number,
  value1: _propTypes["default"].number,
  minValue: _propTypes["default"].number,
  maxValue: _propTypes["default"].number,
  sliderHandleWidth: _propTypes["default"].number,
  onSlider0Change: _propTypes["default"].func,
  onInput0Change: _propTypes["default"].func,
  onSlider1Change: _propTypes["default"].func,
  onInput1Change: _propTypes["default"].func,
  onSliderBarChange: _propTypes["default"].func,
  step: _propTypes["default"].number,
  enableBarDrag: _propTypes["default"].bool,
  showTooltip: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Slider, "defaultProps", {
  title: '',
  isRanged: true,
  value0: 0,
  value1: 100,
  minValue: 0,
  maxValue: 100,
  step: 1,
  sliderHandleWidth: 12,
  enableBarDrag: false,
  onSlider0Change: noop,
  onInput0Change: noop,
  onSlider1Change: noop,
  onInput1Change: noop,
  onSliderBarChange: noop,
  disabled: false,
  vertical: false,
  showTooltip: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJTdHlsZWRSYW5nZVNsaWRlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzbGlkZXJCYXJCZ2QiLCJ2ZXJ0aWNhbCIsInNsaWRlckJhckhlaWdodCIsIlNsaWRlcldyYXBwZXIiLCJzbGlkZXJNYXJnaW5Ub3AiLCJTbGlkZXIiLCJ4IiwiX2FuY2hvciIsInZhbCIsInZhbHVlMSIsIm1pblZhbHVlIiwiQm9vbGVhbiIsIm1heFZhbHVlIiwidmFsdWUwIiwiX2dldFZhbHVlIiwiX2lzVmFsMEluUmFuZ2UiLCJvblNsaWRlcjBDaGFuZ2UiLCJfaXNWYWwxSW5SYW5nZSIsIm9uU2xpZGVyMUNoYW5nZSIsImFuY2hvciIsInZhbDAiLCJ2YWwxIiwiZGVsdGFYIiwiX2dldERlbHRhWCIsIm9uU2xpZGVyQmFyQ2hhbmdlIiwidyIsImwiLCJudW0iLCJzbGlkZXJIYW5kbGVXaWR0aCIsImlzUmFuZ2VkIiwicmVmIiwiY3VycmVudCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwicGVyY2VudCIsIl9nZXRCYXNlRGlzdGFuY2UiLCJtYXhEZWx0YSIsInYiLCJiYXNlViIsIm9mZnNldCIsInJhd1ZhbHVlIiwiX2dldERlbHRhVmFsIiwiX25vcm1hbGl6ZVZhbHVlIiwic3RlcCIsIm1hcmtzIiwiY2xhc3NTZXQiLCJkaXNhYmxlZCIsInNob3dUb29sdGlwIiwiY3VyclZhbERlbHRhIiwid2lkdGgiLCJ2MExlZnQiLCJ0cmFjayIsImNhbGNIYW5kbGVMZWZ0MCIsInNsaWRlMExpc3RlbmVyIiwiY2FsY0hhbmRsZUxlZnQxIiwic2xpZGUxTGlzdGVuZXIiLCJlbmFibGVCYXJEcmFnIiwic2xpZGVyQmFyTGlzdGVuZXIiLCJfc2V0QW5jaG9yIiwiQ29tcG9uZW50IiwidGl0bGUiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29s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QVVJLElBVlY7QUFXakJFLEVBQUFBLGNBQWMsRUFBRU4sc0JBQVVJLElBWFQ7QUFZakJ6QyxFQUFBQSxpQkFBaUIsRUFBRXFDLHNCQUFVSSxJQVpaO0FBYWpCdEIsRUFBQUEsSUFBSSxFQUFFa0Isc0JBQVVHLE1BYkM7QUFjakJSLEVBQUFBLGFBQWEsRUFBRUssc0JBQVVFLElBZFI7QUFlakJoQixFQUFBQSxXQUFXLEVBQUVjLHNCQUFVRTtBQWZOLEM7aUNBREExRCxNLGtCQW1CRztBQUNwQnVELEVBQUFBLEtBQUssRUFBRSxFQURhO0FBRXBCL0IsRUFBQUEsUUFBUSxFQUFFLElBRlU7QUFHcEJoQixFQUFBQSxNQUFNLEVBQUUsQ0FIWTtBQUlwQkosRUFBQUEsTUFBTSxFQUFFLEdBSlk7QUFLcEJDLEVBQUFBLFFBQVEsRUFBRSxDQUxVO0FBTXBCRSxFQUFBQSxRQUFRLEVBQUUsR0FOVTtBQU9wQitCLEVBQUFBLElBQUksRUFBRSxDQVBjO0FBUXBCZixFQUFBQSxpQkFBaUIsRUFBRSxFQVJDO0FBU3BCNEIsRUFBQUEsYUFBYSxFQUFFLEtBVEs7QUFVcEJ4QyxFQUFBQSxlQUFlLEVBQUV0QixJQVZHO0FBV3BCd0UsRUFBQUEsY0FBYyxFQUFFeEUsSUFYSTtBQVlwQndCLEVBQUFBLGVBQWUsRUFBRXhCLElBWkc7QUFhcEJ5RSxFQUFBQSxjQUFjLEVBQUV6RSxJQWJJO0FBY3BCOEIsRUFBQUEsaUJBQWlCLEVBQUU5QixJQWRDO0FBZXBCb0QsRUFBQUEsUUFBUSxFQUFFLEtBZlU7QUFnQnBCN0MsRUFBQUEsUUFBUSxFQUFFLEtBaEJVO0FBaUJwQjhDLEVBQUFBLFdBQVcsRUFBRTtBQWpCTyxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgU2xpZGVySGFuZGxlIGZyb20gJy4vc2xpZGVyLWhhbmRsZSc7XG5pbXBvcnQgU2xpZGVyQmFySGFuZGxlIGZyb20gJy4vc2xpZGVyLWJhci1oYW5kbGUnO1xuaW1wb3J0IHtub3JtYWxpemVTbGlkZXJWYWx1ZX0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5jb25zdCBTdHlsZWRSYW5nZVNsaWRlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJCYXJCZ2R9O1xuICAke3Byb3BzID0+IGAke3Byb3BzLnZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnfTogJHtwcm9wcy50aGVtZS5zbGlkZXJCYXJIZWlnaHR9cHhgfTtcbiAgJHtwcm9wcyA9PiBgJHtwcm9wcy52ZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJ306IDEwMCVgfTtcbmA7XG5cbmNvbnN0IFNsaWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi10b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVyTWFyZ2luVG9wfXB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc1JhbmdlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdmFsdWUwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHZhbHVlMTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtaW5WYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXhWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzbGlkZXJIYW5kbGVXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvblNsaWRlcjBDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uSW5wdXQwQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNsaWRlcjFDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uSW5wdXQxQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNsaWRlckJhckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBlbmFibGVCYXJEcmFnOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93VG9vbHRpcDogUHJvcFR5cGVzLmJvb2xcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICBpc1JhbmdlZDogdHJ1ZSxcbiAgICB2YWx1ZTA6IDAsXG4gICAgdmFsdWUxOiAxMDAsXG4gICAgbWluVmFsdWU6IDAsXG4gICAgbWF4VmFsdWU6IDEwMCxcbiAgICBzdGVwOiAxLFxuICAgIHNsaWRlckhhbmRsZVdpZHRoOiAxMixcbiAgICBlbmFibGVCYXJEcmFnOiBmYWxzZSxcbiAgICBvblNsaWRlcjBDaGFuZ2U6IG5vb3AsXG4gICAgb25JbnB1dDBDaGFuZ2U6IG5vb3AsXG4gICAgb25TbGlkZXIxQ2hhbmdlOiBub29wLFxuICAgIG9uSW5wdXQxQ2hhbmdlOiBub29wLFxuICAgIG9uU2xpZGVyQmFyQ2hhbmdlOiBub29wLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgc2hvd1Rvb2x0aXA6IGZhbHNlXG4gIH07XG5cbiAgcmVmID0gY3JlYXRlUmVmKCk7XG4gIHRyYWNrID0gY3JlYXRlUmVmKCk7XG5cbiAgX3NldEFuY2hvciA9IHggPT4ge1xuICAgIC8vIHVzZWQgdG8gY2FsY3VsYXRlIGRlbHRhXG4gICAgdGhpcy5fYW5jaG9yID0geDtcbiAgfTtcblxuICBfZ2V0QmFzZURpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnZlcnRpY2FsID8gdGhpcy5yZWYuY3VycmVudC5vZmZzZXRIZWlnaHQgOiB0aGlzLnJlZi5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICB9XG5cbiAgX2dldERlbHRhVmFsKHgpIHtcbiAgICBjb25zdCBwZXJjZW50ID0geCAvIHRoaXMuX2dldEJhc2VEaXN0YW5jZSgpO1xuICAgIGNvbnN0IG1heERlbHRhID0gdGhpcy5wcm9wcy5tYXhWYWx1ZSAtIHRoaXMucHJvcHMubWluVmFsdWU7XG4gICAgcmV0dXJuIHBlcmNlbnQgKiBtYXhEZWx0YTtcbiAgfVxuICBfZ2V0RGVsdGFYKHYpIHtcbiAgICBjb25zdCBwZXJjZW50ID0gdiAvICh0aGlzLnByb3BzLm1heFZhbHVlIC0gdGhpcy5wcm9wcy5taW5WYWx1ZSk7XG4gICAgY29uc3QgbWF4RGVsdGEgPSB0aGlzLl9nZXRCYXNlRGlzdGFuY2UoKTtcbiAgICByZXR1cm4gcGVyY2VudCAqIG1heERlbHRhO1xuICB9XG5cbiAgX2dldFZhbHVlKGJhc2VWLCBvZmZzZXQpIHtcbiAgICAvLyBvZmZzZXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gc2xpZGVyIGhhbmRsZSBhbmQgdHJhY2sgbGVmdFxuICAgIGNvbnN0IHJhd1ZhbHVlID0gYmFzZVYgKyB0aGlzLl9nZXREZWx0YVZhbChvZmZzZXQpO1xuXG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZVZhbHVlKHJhd1ZhbHVlKTtcbiAgfVxuXG4gIF9pc1ZhbDBJblJhbmdlID0gdmFsID0+IHtcbiAgICBjb25zdCB7dmFsdWUxLCBtaW5WYWx1ZX0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBCb29sZWFuKHZhbCA+PSBtaW5WYWx1ZSAmJiB2YWwgPD0gdmFsdWUxKTtcbiAgfTtcblxuICBfaXNWYWwxSW5SYW5nZSA9IHZhbCA9PiB7XG4gICAgY29uc3Qge21heFZhbHVlLCB2YWx1ZTB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gQm9vbGVhbih2YWwgPD0gbWF4VmFsdWUgJiYgdmFsID49IHZhbHVlMCk7XG4gIH07XG5cbiAgX25vcm1hbGl6ZVZhbHVlKHZhbCkge1xuICAgIGNvbnN0IHttaW5WYWx1ZSwgc3RlcCwgbWFya3N9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gbm9ybWFsaXplU2xpZGVyVmFsdWUodmFsLCBtaW5WYWx1ZSwgc3RlcCwgbWFya3MpO1xuICB9XG5cbiAgc2xpZGUwTGlzdGVuZXIgPSB4ID0+IHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLnByb3BzLm1pblZhbHVlLCB4KTtcblxuICAgIGlmICh0aGlzLl9pc1ZhbDBJblJhbmdlKHZhbCkpIHtcbiAgICAgIHRoaXMucHJvcHMub25TbGlkZXIwQ2hhbmdlKHZhbCk7XG4gICAgfVxuICB9O1xuXG4gIHNsaWRlMUxpc3RlbmVyID0geCA9PiB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5wcm9wcy5taW5WYWx1ZSwgeCk7XG4gICAgaWYgKHRoaXMuX2lzVmFsMUluUmFuZ2UodmFsKSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNsaWRlcjFDaGFuZ2UodmFsKTtcbiAgICB9XG4gIH07XG5cbiAgc2xpZGVyQmFyTGlzdGVuZXIgPSB4ID0+IHtcbiAgICBjb25zdCB7bWluVmFsdWUsIG1heFZhbHVlfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gZm9yIHNsaWRlciBiYXIsIHdlIHVzZSBkaXN0YW5jZSBkZWx0YVxuICAgIGNvbnN0IGFuY2hvciA9IHRoaXMuX2FuY2hvcjtcbiAgICBjb25zdCB2YWwwID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZTAsIHggLSBhbmNob3IpO1xuICAgIGNvbnN0IHZhbDEgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLnByb3BzLnZhbHVlMSwgeCAtIGFuY2hvcik7XG5cbiAgICBpZiAodmFsMCA+PSBtaW5WYWx1ZSAmJiB2YWwxIDw9IG1heFZhbHVlICYmIHZhbDEgPj0gdmFsMCkge1xuICAgICAgY29uc3QgZGVsdGFYID0gdGhpcy5fZ2V0RGVsdGFYKHZhbDAgLSB0aGlzLnByb3BzLnZhbHVlMCk7XG4gICAgICB0aGlzLnByb3BzLm9uU2xpZGVyQmFyQ2hhbmdlKHZhbDAsIHZhbDEpO1xuICAgICAgLy8gdXBkYXRlIGFuY2hvclxuICAgICAgdGhpcy5fYW5jaG9yID0gdGhpcy5fYW5jaG9yICsgZGVsdGFYO1xuICAgIH1cbiAgfTtcblxuICBjYWxjSGFuZGxlTGVmdDAgPSAodywgbCwgbnVtKSA9PiB7XG4gICAgcmV0dXJuIHcgPT09IDBcbiAgICAgID8gYGNhbGMoJHtsfSUgLSAke3RoaXMucHJvcHMuc2xpZGVySGFuZGxlV2lkdGggLyAyfXB4KWBcbiAgICAgIDogYGNhbGMoJHtsfSUgLSAke3RoaXMucHJvcHMuc2xpZGVySGFuZGxlV2lkdGggLyAyfXB4KWA7XG4gIH07XG5cbiAgY2FsY0hhbmRsZUxlZnQxID0gKHcsIGwpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pc1JhbmdlZCAmJiB3ID09PSAwXG4gICAgICA/IGAke2x9JWBcbiAgICAgIDogYGNhbGMoJHtsICsgd30lIC0gJHt0aGlzLnByb3BzLnNsaWRlckhhbmRsZVdpZHRoIC8gMn1weClgO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc1NldCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaXNSYW5nZWQsXG4gICAgICBtYXhWYWx1ZSxcbiAgICAgIG1pblZhbHVlLFxuICAgICAgdmFsdWUxLFxuICAgICAgdmVydGljYWwsXG4gICAgICBzbGlkZXJIYW5kbGVXaWR0aCxcbiAgICAgIHNob3dUb29sdGlwXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsdWUwID0gIWlzUmFuZ2VkICYmIG1pblZhbHVlID4gMCA/IG1pblZhbHVlIDogdGhpcy5wcm9wcy52YWx1ZTA7XG4gICAgY29uc3QgY3VyclZhbERlbHRhID0gdmFsdWUxIC0gdmFsdWUwO1xuICAgIGNvbnN0IG1heERlbHRhID0gbWF4VmFsdWUgLSBtaW5WYWx1ZTtcbiAgICBjb25zdCB3aWR0aCA9IChjdXJyVmFsRGVsdGEgLyBtYXhEZWx0YSkgKiAxMDA7XG5cbiAgICBjb25zdCB2MExlZnQgPSAoKHZhbHVlMCAtIG1pblZhbHVlKSAvIG1heERlbHRhKSAqIDEwMDtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2xpZGVyV3JhcHBlclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2tnLXNsaWRlcicsIHsuLi5jbGFzc1NldCwgZGlzYWJsZWR9KX1cbiAgICAgICAgcmVmPXt0aGlzLnJlZn1cbiAgICAgICAgaXNSYW5nZWQ9e2lzUmFuZ2VkfVxuICAgICAgICB2ZXJ0aWNhbD17dmVydGljYWx9XG4gICAgICA+XG4gICAgICAgIDxTdHlsZWRSYW5nZVNsaWRlciBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJcIiB2ZXJ0aWNhbD17dmVydGljYWx9IHJlZj17dGhpcy50cmFja30+XG4gICAgICAgICAgPFNsaWRlckhhbmRsZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwia2ctcmFuZ2Utc2xpZGVyX19oYW5kbGVcIlxuICAgICAgICAgICAgbGVmdD17dGhpcy5jYWxjSGFuZGxlTGVmdDAod2lkdGgsIHYwTGVmdCl9XG4gICAgICAgICAgICB2YWx1ZUxpc3RlbmVyPXt0aGlzLnNsaWRlMExpc3RlbmVyfVxuICAgICAgICAgICAgc2xpZGVySGFuZGxlV2lkdGg9e3NsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgICAgZGlzcGxheT17aXNSYW5nZWR9XG4gICAgICAgICAgICB2ZXJ0aWNhbD17dmVydGljYWx9XG4gICAgICAgICAgICBzaG93VG9vbHRpcD17c2hvd1Rvb2x0aXB9XG4gICAgICAgICAgICB0cmFjaz17dGhpcy50cmFja31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTbGlkZXJIYW5kbGVcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImtnLXJhbmdlLXNsaWRlcl9faGFuZGxlXCJcbiAgICAgICAgICAgIGxlZnQ9e3RoaXMuY2FsY0hhbmRsZUxlZnQxKHdpZHRoLCB2MExlZnQpfVxuICAgICAgICAgICAgdmFsdWVMaXN0ZW5lcj17dGhpcy5zbGlkZTFMaXN0ZW5lcn1cbiAgICAgICAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXtzbGlkZXJIYW5kbGVXaWR0aH1cbiAgICAgICAgICAgIHZlcnRpY2FsPXt2ZXJ0aWNhbH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZTF9XG4gICAgICAgICAgICBzaG93VG9vbHRpcD17c2hvd1Rvb2x0aXB9XG4gICAgICAgICAgICB0cmFjaz17dGhpcy50cmFja31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTbGlkZXJCYXJIYW5kbGVcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIHYwTGVmdD17djBMZWZ0fVxuICAgICAgICAgICAgZW5hYmxlQmFyRHJhZz17dGhpcy5wcm9wcy5lbmFibGVCYXJEcmFnfVxuICAgICAgICAgICAgc2xpZGVyQmFyTGlzdGVuZXI9e3RoaXMuc2xpZGVyQmFyTGlzdGVuZXJ9XG4gICAgICAgICAgICB2ZXJ0aWNhbD17dmVydGljYWx9XG4gICAgICAgICAgICB0cmFjaz17dGhpcy50cmFja31cbiAgICAgICAgICAgIHNldEFuY2hvcj17dGhpcy5fc2V0QW5jaG9yfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU3R5bGVkUmFuZ2VTbGlkZXI+XG4gICAgICA8L1NsaWRlcldyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIl19