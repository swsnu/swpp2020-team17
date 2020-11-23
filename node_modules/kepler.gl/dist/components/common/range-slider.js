"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RangeSliderFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _reselect = require("reselect");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rangePlot = _interopRequireDefault(require("./range-plot"));

var _slider = _interopRequireDefault(require("./slider/slider"));

var _styledComponents2 = require("./styled-components");

var _dataUtils = require("../../utils/data-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 6px;\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: relative;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", "px;\n  margin-left: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SliderInput = (0, _styledComponents["default"])(_styledComponents2.Input)(_templateObject(), function (props) {
  return props.theme.sliderInputWidth;
}, function (props) {
  return props.flush ? 0 : props.size === 'tiny' ? 12 : 18;
});

var SliderWrapper = _styledComponents["default"].div(_templateObject2());

var RangeInputWrapper = _styledComponents["default"].div(_templateObject3());

RangeSliderFactory.deps = [_rangePlot["default"]];

function RangeSliderFactory(RangePlot) {
  var RangeSlider =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(RangeSlider, _Component);

    function RangeSlider() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, RangeSlider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(RangeSlider)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        value0: 0,
        value1: 1,
        prevValue0: 0,
        prevValue1: 1,
        width: 288
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sliderContainer", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputValue0", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputValue1", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value0Selector", function (props) {
        return props.value0;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value1Selector", function (props) {
        return props.value1;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterValueSelector", (0, _reselect.createSelector)(_this.value0Selector, _this.value1Selector, function (value0, value1) {
        return [value0, value1];
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal0InRange", function (val) {
        var _this$props = _this.props,
            value1 = _this$props.value1,
            range = _this$props.range;
        return Boolean(val >= range[0] && val <= value1);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal1InRange", function (val) {
        var _this$props2 = _this.props,
            range = _this$props2.range,
            value0 = _this$props2.value0;
        return Boolean(val <= range[1] && val >= value0);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_roundValToStep", function (val) {
        var _this$props3 = _this.props,
            range = _this$props3.range,
            step = _this$props3.step;
        return (0, _dataUtils.roundValToStep)(range[0], step, val);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setRangeVal1", function (val) {
        var _this$props4 = _this.props,
            value0 = _this$props4.value0,
            onChange = _this$props4.onChange;
        var val1 = Number(val);

        if (_this._isVal1InRange(val1)) {
          onChange([value0, _this._roundValToStep(val1)]);
          return true;
        }

        return false;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setRangeVal0", function (val) {
        var _this$props5 = _this.props,
            value1 = _this$props5.value1,
            onChange = _this$props5.onChange;
        var val0 = Number(val);

        if (_this._isVal0InRange(val0)) {
          onChange([_this._roundValToStep(val0), value1]);
          return true;
        }

        return false;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChangeInput", function (key, e) {
        _this.setState((0, _defineProperty2["default"])({}, key, e.target.value));
      });
      return _this;
    }

    (0, _createClass2["default"])(RangeSlider, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._resize();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        this._resize();
      }
    }, {
      key: "_resize",
      value: function _resize() {
        var width = this.sliderContainer.current.offsetWidth;

        if (width !== this.state.width) {
          this.setState({
            width: width
          });
        }
      }
    }, {
      key: "_renderInput",
      value: function _renderInput(key) {
        var _this2 = this;

        var setRange = key === 'value0' ? this._setRangeVal0 : this._setRangeVal1;
        var ref = key === 'value0' ? this.inputValue0 : this.inputValue1;

        var update = function update(e) {
          if (!setRange(e.target.value)) {
            _this2.setState((0, _defineProperty2["default"])({}, key, _this2.state[key]));
          }
        };

        var onChange = this._onChangeInput.bind(this, key);

        return _react["default"].createElement(SliderInput, {
          className: "kg-range-slider__input",
          type: "number",
          ref: ref,
          id: "slider-input-".concat(key),
          key: key,
          value: this.state[key],
          onChange: onChange,
          onKeyPress: function onKeyPress(e) {
            if (e.key === 'Enter') {
              update(e);
              ref.current.blur();
            }
          },
          onBlur: update,
          flush: key === 'value0',
          size: this.props.inputSize,
          secondary: this.props.inputTheme === 'secondary'
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props6 = this.props,
            isRanged = _this$props6.isRanged,
            showInput = _this$props6.showInput,
            histogram = _this$props6.histogram,
            range = _this$props6.range,
            onChange = _this$props6.onChange,
            sliderHandleWidth = _this$props6.sliderHandleWidth,
            step = _this$props6.step;
        var height = isRanged && showInput ? '16px' : '24px';
        var width = this.state.width;
        var plotWidth = Math.max(width - sliderHandleWidth, 0);
        return _react["default"].createElement("div", {
          className: "kg-range-slider",
          style: {
            width: '100%',
            padding: "0 ".concat(sliderHandleWidth / 2, "px")
          },
          ref: this.sliderContainer
        }, histogram && histogram.length ? _react["default"].createElement(RangePlot, {
          histogram: histogram,
          lineChart: this.props.lineChart,
          plotType: this.props.plotType,
          isEnlarged: this.props.isEnlarged,
          onBrush: function onBrush(val0, val1) {
            return onChange([val0, val1]);
          },
          marks: this.props.marks,
          range: range,
          value: this.filterValueSelector(this.props),
          width: plotWidth,
          isRanged: isRanged,
          step: step
        }) : null, _react["default"].createElement(SliderWrapper, {
          style: {
            height: height
          },
          className: "kg-range-slider__slider"
        }, this.props.xAxis ? _react["default"].createElement(this.props.xAxis, {
          width: plotWidth,
          domain: range
        }) : null, _react["default"].createElement(_slider["default"], {
          marks: this.props.marks,
          showValues: false,
          isRanged: isRanged,
          minValue: range[0],
          maxValue: range[1],
          value0: this.props.value0,
          value1: this.props.value1,
          step: step,
          handleWidth: sliderHandleWidth,
          onSlider0Change: this._setRangeVal0,
          onSlider1Change: this._setRangeVal1,
          onSliderBarChange: function onSliderBarChange(val0, val1) {
            onChange([val0, val1]);
          },
          enableBarDrag: true
        }), !isRanged && showInput ? this._renderInput('value1') : null), isRanged && showInput ? _react["default"].createElement(RangeInputWrapper, {
          className: "range-slider__input-group"
        }, this._renderInput('value0'), this._renderInput('value1')) : null);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var update = null;
        var value0 = props.value0,
            value1 = props.value1;

        if (props.value0 !== state.prevValue0 && !isNaN(value0)) {
          update = _objectSpread({}, update || {}, {
            value0: value0,
            prevValue0: value0
          });
        }

        if (props.value1 !== state.prevValue1 && !isNaN(value1)) {
          update = _objectSpread({}, update || {}, {
            value1: value1,
            prevValue1: value1
          });
        }

        return update;
      }
    }]);
    return RangeSlider;
  }(_react.Component);

  (0, _defineProperty2["default"])(RangeSlider, "propTypes", {
    range: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    value0: _propTypes["default"].number.isRequired,
    value1: _propTypes["default"].number.isRequired,
    onChange: _propTypes["default"].func.isRequired,
    histogram: _propTypes["default"].arrayOf(_propTypes["default"].any),
    isRanged: _propTypes["default"].bool,
    isEnlarged: _propTypes["default"].bool,
    showInput: _propTypes["default"].bool,
    inputTheme: _propTypes["default"].string,
    inputSize: _propTypes["default"].string,
    step: _propTypes["default"].number,
    sliderHandleWidth: _propTypes["default"].number,
    xAxis: _propTypes["default"].func
  });
  (0, _defineProperty2["default"])(RangeSlider, "defaultProps", {
    isEnlarged: false,
    isRanged: true,
    showInput: true,
    sliderHandleWidth: 12,
    inputTheme: '',
    inputSize: 'small',
    onChange: function onChange() {}
  });
  (0, _reactLifecyclesCompat.polyfill)(RangeSlider);
  return RangeSlider;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1zbGlkZXIuanMiXSwibmFtZXMiOlsiU2xpZGVySW5wdXQiLCJJbnB1dCIsInByb3BzIiwidGhlbWUiLCJzbGlkZXJJbnB1dFdpZHRoIiwiZmx1c2giLCJzaXplIiwiU2xpZGVyV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlJhbmdlSW5wdXRXcmFwcGVyIiwiUmFuZ2VTbGlkZXJGYWN0b3J5IiwiZGVwcyIsIlJhbmdlUGxvdEZhY3RvcnkiLCJSYW5nZVBsb3QiLCJSYW5nZVNsaWRlciIsInZhbHVlMCIsInZhbHVlMSIsInByZXZWYWx1ZTAiLCJwcmV2VmFsdWUxIiwid2lkdGgiLCJ2YWx1ZTBTZWxlY3RvciIsInZhbHVlMVNlbGVjdG9yIiwidmFsIiwicmFuZ2UiLCJCb29sZWFuIiwic3RlcCIsIm9uQ2hhbmdlIiwidmFsMSIsIk51bWJlciIsIl9pc1ZhbDFJblJhbmdlIiwiX3JvdW5kVmFsVG9TdGVwIiwidmFsMCIsIl9pc1ZhbDBJblJhbmdlIiwia2V5IiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJfcmVzaXplIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic2xpZGVyQ29udGFpbmVyIiwiY3VycmVudCIsIm9mZnNldFdpZHRoIiwic3RhdGUiLCJzZXRSYW5nZSIsIl9zZXRSYW5nZVZhbDAiLCJfc2V0UmFuZ2VWYWwxIiwicmVmIiwiaW5wdXRWYWx1ZTAiLCJpbnB1dFZhbHVlMSIsInVwZGF0ZSIsIl9vbkNoYW5nZUlucHV0IiwiYmluZCIsImJsdXIiLCJpbnB1dFNpemUiLCJpbnB1dFRoZW1lIiwiaXNSYW5nZWQiLCJzaG93SW5wdXQiLCJoaXN0b2dyYW0iLCJzbGlkZXJIYW5kbGVXaWR0aCIsImhlaWdodCIsInBsb3RXaWR0aCIsIk1hdGgiLCJtYXgiLCJwYWRkaW5nIiwibGVuZ3RoIiwibGluZUNoYXJ0IiwicGxvdFR5cGUiLCJpc0VubGFyZ2VkIiwibWFya3MiLCJmaWx0ZXJWYWx1ZVNlbGVjdG9yIiwieEF4aXMiLCJfcmVuZGVySW5wdXQiLCJpc05hTiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImFueSIsImJvb2wiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLGtDQUFPQyx3QkFBUCxDQUFILG9CQUNOLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsZ0JBQWhCO0FBQUEsQ0FEQyxFQUVBLFVBQUFGLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNHLEtBQU4sR0FBYyxDQUFkLEdBQWtCSCxLQUFLLENBQUNJLElBQU4sS0FBZSxNQUFmLEdBQXdCLEVBQXhCLEdBQTZCLEVBQXBEO0FBQUEsQ0FGTCxDQUFqQjs7QUFLQSxJQUFNQyxhQUFhLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUFuQjs7QUFNQSxJQUFNQyxpQkFBaUIsR0FBR0YsNkJBQU9DLEdBQVYsb0JBQXZCOztBQU1BRSxrQkFBa0IsQ0FBQ0MsSUFBbkIsR0FBMEIsQ0FBQ0MscUJBQUQsQ0FBMUI7O0FBRWUsU0FBU0Ysa0JBQVQsQ0FBNEJHLFNBQTVCLEVBQXVDO0FBQUEsTUFDOUNDLFdBRDhDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ0dBd0MxQztBQUNOQyxRQUFBQSxNQUFNLEVBQUUsQ0FERjtBQUVOQyxRQUFBQSxNQUFNLEVBQUUsQ0FGRjtBQUdOQyxRQUFBQSxVQUFVLEVBQUUsQ0FITjtBQUlOQyxRQUFBQSxVQUFVLEVBQUUsQ0FKTjtBQUtOQyxRQUFBQSxLQUFLLEVBQUU7QUFMRCxPQXhD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QmIsSUFBQUEsVUFBVSxFQUFFTyxzQkFBVU0sSUFQTDtBQVFqQnhCLElBQUFBLFNBQVMsRUFBRWtCLHNCQUFVTSxJQVJKO0FBU2pCMUIsSUFBQUEsVUFBVSxFQUFFb0Isc0JBQVVPLE1BVEw7QUFVakI1QixJQUFBQSxTQUFTLEVBQUVxQixzQkFBVU8sTUFWSjtBQVdqQjFELElBQUFBLElBQUksRUFBRW1ELHNCQUFVRSxNQVhDO0FBWWpCbEIsSUFBQUEsaUJBQWlCLEVBQUVnQixzQkFBVUUsTUFaWjtBQWFqQk4sSUFBQUEsS0FBSyxFQUFFSSxzQkFBVUk7QUFiQSxHQUYrQjtBQUFBLG1DQUM5Q2xFLFdBRDhDLGtCQWtCNUI7QUFDcEJ1RCxJQUFBQSxVQUFVLEVBQUUsS0FEUTtBQUVwQlosSUFBQUEsUUFBUSxFQUFFLElBRlU7QUFHcEJDLElBQUFBLFNBQVMsRUFBRSxJQUhTO0FBSXBCRSxJQUFBQSxpQkFBaUIsRUFBRSxFQUpDO0FBS3BCSixJQUFBQSxVQUFVLEVBQUUsRUFMUTtBQU1wQkQsSUFBQUEsU0FBUyxFQUFFLE9BTlM7QUFPcEI3QixJQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQVBFLEdBbEI0QjtBQW1OcEQsdUNBQVNaLFdBQVQ7QUFFQSxTQUFPQSxXQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtwb2x5ZmlsbH0gZnJvbSAncmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJhbmdlUGxvdEZhY3RvcnkgZnJvbSAnLi9yYW5nZS1wbG90JztcbmltcG9ydCBTbGlkZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vc2xpZGVyL3NsaWRlcic7XG5pbXBvcnQge0lucHV0fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7cm91bmRWYWxUb1N0ZXB9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5jb25zdCBTbGlkZXJJbnB1dCA9IHN0eWxlZChJbnB1dClgXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlcklucHV0V2lkdGh9cHg7XG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IChwcm9wcy5mbHVzaCA/IDAgOiBwcm9wcy5zaXplID09PSAndGlueScgPyAxMiA6IDE4KX1weDtcbmA7XG5cbmNvbnN0IFNsaWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBSYW5nZUlucHV0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuUmFuZ2VTbGlkZXJGYWN0b3J5LmRlcHMgPSBbUmFuZ2VQbG90RmFjdG9yeV07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmdlU2xpZGVyRmFjdG9yeShSYW5nZVBsb3QpIHtcbiAgY2xhc3MgUmFuZ2VTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICByYW5nZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgICAgIHZhbHVlMDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgdmFsdWUxOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGhpc3RvZ3JhbTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gICAgICBpc1JhbmdlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBpc0VubGFyZ2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHNob3dJbnB1dDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBpbnB1dFRoZW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaW5wdXRTaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHNsaWRlckhhbmRsZVdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgeEF4aXM6IFByb3BUeXBlcy5mdW5jXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBpc0VubGFyZ2VkOiBmYWxzZSxcbiAgICAgIGlzUmFuZ2VkOiB0cnVlLFxuICAgICAgc2hvd0lucHV0OiB0cnVlLFxuICAgICAgc2xpZGVySGFuZGxlV2lkdGg6IDEyLFxuICAgICAgaW5wdXRUaGVtZTogJycsXG4gICAgICBpbnB1dFNpemU6ICdzbWFsbCcsXG4gICAgICBvbkNoYW5nZTogKCkgPT4ge31cbiAgICB9O1xuXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAgIGxldCB1cGRhdGUgPSBudWxsO1xuICAgICAgY29uc3Qge3ZhbHVlMCwgdmFsdWUxfSA9IHByb3BzO1xuICAgICAgaWYgKHByb3BzLnZhbHVlMCAhPT0gc3RhdGUucHJldlZhbHVlMCAmJiAhaXNOYU4odmFsdWUwKSkge1xuICAgICAgICB1cGRhdGUgPSB7Li4uKHVwZGF0ZSB8fCB7fSksIHZhbHVlMCwgcHJldlZhbHVlMDogdmFsdWUwfTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9wcy52YWx1ZTEgIT09IHN0YXRlLnByZXZWYWx1ZTEgJiYgIWlzTmFOKHZhbHVlMSkpIHtcbiAgICAgICAgdXBkYXRlID0gey4uLih1cGRhdGUgfHwge30pLCB2YWx1ZTEsIHByZXZWYWx1ZTE6IHZhbHVlMX07XG4gICAgICB9XG4gICAgICByZXR1cm4gdXBkYXRlO1xuICAgIH1cblxuICAgIHN0YXRlID0ge1xuICAgICAgdmFsdWUwOiAwLFxuICAgICAgdmFsdWUxOiAxLFxuICAgICAgcHJldlZhbHVlMDogMCxcbiAgICAgIHByZXZWYWx1ZTE6IDEsXG4gICAgICB3aWR0aDogMjg4XG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5fcmVzaXplKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICB0aGlzLl9yZXNpemUoKTtcbiAgICB9XG5cbiAgICBzbGlkZXJDb250YWluZXIgPSBjcmVhdGVSZWYoKTtcbiAgICBpbnB1dFZhbHVlMCA9IGNyZWF0ZVJlZigpO1xuICAgIGlucHV0VmFsdWUxID0gY3JlYXRlUmVmKCk7XG4gICAgdmFsdWUwU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy52YWx1ZTA7XG4gICAgdmFsdWUxU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy52YWx1ZTE7XG4gICAgZmlsdGVyVmFsdWVTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy52YWx1ZTBTZWxlY3RvcixcbiAgICAgIHRoaXMudmFsdWUxU2VsZWN0b3IsXG4gICAgICAodmFsdWUwLCB2YWx1ZTEpID0+IFt2YWx1ZTAsIHZhbHVlMV1cbiAgICApO1xuXG4gICAgX2lzVmFsMEluUmFuZ2UgPSB2YWwgPT4ge1xuICAgICAgY29uc3Qge3ZhbHVlMSwgcmFuZ2V9ID0gdGhpcy5wcm9wcztcblxuICAgICAgcmV0dXJuIEJvb2xlYW4odmFsID49IHJhbmdlWzBdICYmIHZhbCA8PSB2YWx1ZTEpO1xuICAgIH07XG5cbiAgICBfaXNWYWwxSW5SYW5nZSA9IHZhbCA9PiB7XG4gICAgICBjb25zdCB7cmFuZ2UsIHZhbHVlMH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gQm9vbGVhbih2YWwgPD0gcmFuZ2VbMV0gJiYgdmFsID49IHZhbHVlMCk7XG4gICAgfTtcblxuICAgIF9yb3VuZFZhbFRvU3RlcCA9IHZhbCA9PiB7XG4gICAgICBjb25zdCB7cmFuZ2UsIHN0ZXB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgcmV0dXJuIHJvdW5kVmFsVG9TdGVwKHJhbmdlWzBdLCBzdGVwLCB2YWwpO1xuICAgIH07XG5cbiAgICBfc2V0UmFuZ2VWYWwxID0gdmFsID0+IHtcbiAgICAgIGNvbnN0IHt2YWx1ZTAsIG9uQ2hhbmdlfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB2YWwxID0gTnVtYmVyKHZhbCk7XG4gICAgICBpZiAodGhpcy5faXNWYWwxSW5SYW5nZSh2YWwxKSkge1xuICAgICAgICBvbkNoYW5nZShbdmFsdWUwLCB0aGlzLl9yb3VuZFZhbFRvU3RlcCh2YWwxKV0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3NldFJhbmdlVmFsMCA9IHZhbCA9PiB7XG4gICAgICBjb25zdCB7dmFsdWUxLCBvbkNoYW5nZX0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgdmFsMCA9IE51bWJlcih2YWwpO1xuXG4gICAgICBpZiAodGhpcy5faXNWYWwwSW5SYW5nZSh2YWwwKSkge1xuICAgICAgICBvbkNoYW5nZShbdGhpcy5fcm91bmRWYWxUb1N0ZXAodmFsMCksIHZhbHVlMV0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3Jlc2l6ZSgpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zbGlkZXJDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGlmICh3aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWR0aH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBfb25DaGFuZ2VJbnB1dCA9IChrZXksIGUpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1trZXldOiBlLnRhcmdldC52YWx1ZX0pO1xuICAgIH07XG5cbiAgICBfcmVuZGVySW5wdXQoa2V5KSB7XG4gICAgICBjb25zdCBzZXRSYW5nZSA9IGtleSA9PT0gJ3ZhbHVlMCcgPyB0aGlzLl9zZXRSYW5nZVZhbDAgOiB0aGlzLl9zZXRSYW5nZVZhbDE7XG4gICAgICBjb25zdCByZWYgPSBrZXkgPT09ICd2YWx1ZTAnID8gdGhpcy5pbnB1dFZhbHVlMCA6IHRoaXMuaW5wdXRWYWx1ZTE7XG4gICAgICBjb25zdCB1cGRhdGUgPSBlID0+IHtcbiAgICAgICAgaWYgKCFzZXRSYW5nZShlLnRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtba2V5XTogdGhpcy5zdGF0ZVtrZXldfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG9uQ2hhbmdlID0gdGhpcy5fb25DaGFuZ2VJbnB1dC5iaW5kKHRoaXMsIGtleSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTbGlkZXJJbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImtnLXJhbmdlLXNsaWRlcl9faW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIGlkPXtgc2xpZGVyLWlucHV0LSR7a2V5fWB9XG4gICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGVba2V5XX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgb25LZXlQcmVzcz17ZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgdXBkYXRlKGUpO1xuICAgICAgICAgICAgICByZWYuY3VycmVudC5ibHVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkJsdXI9e3VwZGF0ZX1cbiAgICAgICAgICBmbHVzaD17a2V5ID09PSAndmFsdWUwJ31cbiAgICAgICAgICBzaXplPXt0aGlzLnByb3BzLmlucHV0U2l6ZX1cbiAgICAgICAgICBzZWNvbmRhcnk9e3RoaXMucHJvcHMuaW5wdXRUaGVtZSA9PT0gJ3NlY29uZGFyeSd9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtpc1JhbmdlZCwgc2hvd0lucHV0LCBoaXN0b2dyYW0sIHJhbmdlLCBvbkNoYW5nZSwgc2xpZGVySGFuZGxlV2lkdGgsIHN0ZXB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgaGVpZ2h0ID0gaXNSYW5nZWQgJiYgc2hvd0lucHV0ID8gJzE2cHgnIDogJzI0cHgnO1xuICAgICAgY29uc3Qge3dpZHRofSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBwbG90V2lkdGggPSBNYXRoLm1heCh3aWR0aCAtIHNsaWRlckhhbmRsZVdpZHRoLCAwKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImtnLXJhbmdlLXNsaWRlclwiXG4gICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiBgMCAke3NsaWRlckhhbmRsZVdpZHRoIC8gMn1weGB9fVxuICAgICAgICAgIHJlZj17dGhpcy5zbGlkZXJDb250YWluZXJ9XG4gICAgICAgID5cbiAgICAgICAgICB7aGlzdG9ncmFtICYmIGhpc3RvZ3JhbS5sZW5ndGggPyAoXG4gICAgICAgICAgICA8UmFuZ2VQbG90XG4gICAgICAgICAgICAgIGhpc3RvZ3JhbT17aGlzdG9ncmFtfVxuICAgICAgICAgICAgICBsaW5lQ2hhcnQ9e3RoaXMucHJvcHMubGluZUNoYXJ0fVxuICAgICAgICAgICAgICBwbG90VHlwZT17dGhpcy5wcm9wcy5wbG90VHlwZX1cbiAgICAgICAgICAgICAgaXNFbmxhcmdlZD17dGhpcy5wcm9wcy5pc0VubGFyZ2VkfVxuICAgICAgICAgICAgICBvbkJydXNoPXsodmFsMCwgdmFsMSkgPT4gb25DaGFuZ2UoW3ZhbDAsIHZhbDFdKX1cbiAgICAgICAgICAgICAgbWFya3M9e3RoaXMucHJvcHMubWFya3N9XG4gICAgICAgICAgICAgIHJhbmdlPXtyYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZmlsdGVyVmFsdWVTZWxlY3Rvcih0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgd2lkdGg9e3Bsb3RXaWR0aH1cbiAgICAgICAgICAgICAgaXNSYW5nZWQ9e2lzUmFuZ2VkfVxuICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8U2xpZGVyV3JhcHBlciBzdHlsZT17e2hlaWdodH19IGNsYXNzTmFtZT1cImtnLXJhbmdlLXNsaWRlcl9fc2xpZGVyXCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy54QXhpcyA/IDx0aGlzLnByb3BzLnhBeGlzIHdpZHRoPXtwbG90V2lkdGh9IGRvbWFpbj17cmFuZ2V9IC8+IDogbnVsbH1cbiAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgbWFya3M9e3RoaXMucHJvcHMubWFya3N9XG4gICAgICAgICAgICAgIHNob3dWYWx1ZXM9e2ZhbHNlfVxuICAgICAgICAgICAgICBpc1JhbmdlZD17aXNSYW5nZWR9XG4gICAgICAgICAgICAgIG1pblZhbHVlPXtyYW5nZVswXX1cbiAgICAgICAgICAgICAgbWF4VmFsdWU9e3JhbmdlWzFdfVxuICAgICAgICAgICAgICB2YWx1ZTA9e3RoaXMucHJvcHMudmFsdWUwfVxuICAgICAgICAgICAgICB2YWx1ZTE9e3RoaXMucHJvcHMudmFsdWUxfVxuICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgICAgICBoYW5kbGVXaWR0aD17c2xpZGVySGFuZGxlV2lkdGh9XG4gICAgICAgICAgICAgIG9uU2xpZGVyMENoYW5nZT17dGhpcy5fc2V0UmFuZ2VWYWwwfVxuICAgICAgICAgICAgICBvblNsaWRlcjFDaGFuZ2U9e3RoaXMuX3NldFJhbmdlVmFsMX1cbiAgICAgICAgICAgICAgb25TbGlkZXJCYXJDaGFuZ2U9eyh2YWwwLCB2YWwxKSA9PiB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoW3ZhbDAsIHZhbDFdKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZW5hYmxlQmFyRHJhZ1xuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgeyFpc1JhbmdlZCAmJiBzaG93SW5wdXQgPyB0aGlzLl9yZW5kZXJJbnB1dCgndmFsdWUxJykgOiBudWxsfVxuICAgICAgICAgIDwvU2xpZGVyV3JhcHBlcj5cbiAgICAgICAgICB7aXNSYW5nZWQgJiYgc2hvd0lucHV0ID8gKFxuICAgICAgICAgICAgPFJhbmdlSW5wdXRXcmFwcGVyIGNsYXNzTmFtZT1cInJhbmdlLXNsaWRlcl9faW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAge3RoaXMuX3JlbmRlcklucHV0KCd2YWx1ZTAnKX1cbiAgICAgICAgICAgICAge3RoaXMuX3JlbmRlcklucHV0KCd2YWx1ZTEnKX1cbiAgICAgICAgICAgIDwvUmFuZ2VJbnB1dFdyYXBwZXI+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwb2x5ZmlsbChSYW5nZVNsaWRlcik7XG5cbiAgcmV0dXJuIFJhbmdlU2xpZGVyO1xufVxuIl19