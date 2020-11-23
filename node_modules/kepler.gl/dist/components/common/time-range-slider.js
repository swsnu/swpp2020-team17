"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TimeRangeSliderFactory;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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

var _moment = _interopRequireDefault(require("moment"));

var _lodash = _interopRequireDefault(require("lodash.throttle"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _icons = require("./icons");

var _styledComponents2 = require("./styled-components");

var _rangeSlider = _interopRequireDefault(require("./range-slider"));

var _timeSliderMarker = _interopRequireDefault(require("./time-slider-marker"));

var _playbackControls = _interopRequireDefault(require("./animation-control/playback-controls"));

var _animationController = _interopRequireDefault(require("./animation-control/animation-controller"));

var _defaultSettings = require("../../constants/default-settings");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  font-size: 11px;\n  justify-content: ", ";\n\n  .horizontal-bar {\n    padding: 0 12px;\n    color: ", ";\n  }\n\n  .time-value {\n    display: flex;\n    flex-direction: ", ";\n    align-items: flex-start;\n\n    span {\n      color: ", ";\n    }\n  }\n\n  .time-value:last-child {\n    align-items: flex-end;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: flex-end;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  .time-range-slider__control {\n    margin-bottom: 12px;\n    margin-right: 30px;\n  }\n\n  .playback-control-button {\n    padding: 9px 12px;\n  }\n\n  .kg-range-slider__slider .kg-slider {\n    margin-top: ", "px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var animationControlWidth = 140;

var StyledSliderContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.sliderMarginTopIsTime;
});

TimeRangeSliderFactory.deps = [_playbackControls["default"], _rangeSlider["default"], _timeSliderMarker["default"], _animationController["default"]];

function TimeRangeSliderFactory(PlaybackControls, RangeSlider, TimeSliderMarker, AnimationController) {
  var TimeRangeSlider =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(TimeRangeSlider, _Component);

    function TimeRangeSlider(_props) {
      var _this;

      (0, _classCallCheck2["default"])(this, TimeRangeSlider);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TimeRangeSlider).call(this, _props));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "timeSelector", function (props) {
        return props.currentTime;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "formatSelector", function (props) {
        return props.format;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "displayTimeSelector", (0, _reselect.createSelector)(_this.timeSelector, _this.formatSelector, function (currentTime, format) {
        var groupTime = Array.isArray(currentTime) ? currentTime : [currentTime];
        return groupTime.reduce(function (accu, curr) {
          var displayDateTime = _moment["default"].utc(curr).format(format);

          var _displayDateTime$spli = displayDateTime.split(' '),
              _displayDateTime$spli2 = (0, _slicedToArray2["default"])(_displayDateTime$spli, 2),
              displayDate = _displayDateTime$spli2[0],
              displayTime = _displayDateTime$spli2[1];

          if (!accu.displayDate.includes(displayDate)) {
            accu.displayDate.push(displayDate);
          }

          accu.displayTime.push(displayTime);
          return accu;
        }, {
          displayDate: [],
          displayTime: []
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_sliderUpdate", function (args) {
        _this._sliderThrottle.cancel();

        _this._sliderThrottle(args);
      });
      _this._sliderThrottle = (0, _lodash["default"])(function () {
        var _this$props;

        return (_this$props = _this.props).onChange.apply(_this$props, arguments);
      }, 20);
      return _this;
    }

    (0, _createClass2["default"])(TimeRangeSlider, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            domain = _this$props2.domain,
            value = _this$props2.value,
            isEnlarged = _this$props2.isEnlarged,
            hideTimeTitle = _this$props2.hideTimeTitle;
        return _react["default"].createElement("div", {
          className: "time-range-slider"
        }, !hideTimeTitle ? _react["default"].createElement(TimeTitle, {
          timeFormat: this.props.timeFormat,
          value: value,
          isEnlarged: isEnlarged
        }) : null, _react["default"].createElement(StyledSliderContainer, {
          className: "time-range-slider__container",
          isEnlarged: isEnlarged
        }, isEnlarged ? _react["default"].createElement(AnimationController, {
          value: this.props.value,
          domain: this.props.domain,
          speed: this.props.speed,
          startAnimation: this.props.toggleAnimation,
          pauseAnimation: this.props.toggleAnimation,
          updateAnimation: this.props.onChange
        }, function (isAnimating, start, pause, reset) {
          return _react["default"].createElement(PlaybackControls, {
            isAnimatable: _this2.props.isAnimatable,
            isAnimating: isAnimating,
            width: animationControlWidth,
            pauseAnimation: pause,
            resetAnimation: reset,
            startAnimation: start,
            buttonHeight: "12px",
            buttonStyle: "secondary"
          });
        }) : null, _react["default"].createElement("div", {
          style: {
            width: isEnlarged ? "calc(100% - ".concat(animationControlWidth, "px)") : '100%'
          }
        }, _react["default"].createElement(RangeSlider, {
          range: domain,
          value0: value[0],
          value1: value[1],
          histogram: this.props.histogram,
          lineChart: this.props.lineChart,
          plotType: this.props.plotType,
          isEnlarged: isEnlarged,
          showInput: false,
          step: this.props.step,
          onChange: this._sliderUpdate,
          xAxis: TimeSliderMarker
        }))));
      }
    }]);
    return TimeRangeSlider;
  }(_react.Component);

  (0, _defineProperty2["default"])(TimeRangeSlider, "propTypes", {
    onChange: _propTypes["default"].func.isRequired,
    domain: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    step: _propTypes["default"].number.isRequired,
    plotType: _propTypes["default"].string,
    histogram: _propTypes["default"].arrayOf(_propTypes["default"].any),
    lineChart: _propTypes["default"].object,
    toggleAnimation: _propTypes["default"].func.isRequired,
    isAnimatable: _propTypes["default"].bool,
    isEnlarged: _propTypes["default"].bool,
    speed: _propTypes["default"].number,
    timeFormat: _propTypes["default"].string,
    hideTimeTitle: _propTypes["default"].bool
  });
  TimeRangeSlider.defaultProps = {
    timeFormat: _defaultSettings.DEFAULT_TIME_FORMAT
  };
  return TimeRangeSlider;
}

var TimeValueWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.isEnlarged ? 'center' : 'space-between';
}, function (props) {
  return props.theme.titleTextColor;
}, function (props) {
  return props.isEnlarged ? 'row' : 'column';
}, function (props) {
  return props.theme.titleTextColor;
});

var TimeTitle = function TimeTitle(_ref) {
  var value = _ref.value,
      isEnlarged = _ref.isEnlarged,
      _ref$timeFormat = _ref.timeFormat,
      timeFormat = _ref$timeFormat === void 0 ? _defaultSettings.DEFAULT_TIME_FORMAT : _ref$timeFormat;
  return _react["default"].createElement(TimeValueWrapper, {
    isEnlarged: isEnlarged,
    className: "time-range-slider__time-title"
  }, _react["default"].createElement(TimeValue, {
    key: 0,
    value: _moment["default"].utc(value[0]).format(timeFormat),
    split: !isEnlarged
  }), isEnlarged ? _react["default"].createElement("div", {
    className: "horizontal-bar"
  }, _react["default"].createElement(_icons.Minus, {
    height: "12px"
  })) : null, _react["default"].createElement(TimeValue, {
    key: 1,
    value: _moment["default"].utc(value[1]).format(timeFormat),
    split: !isEnlarged
  }));
};

var TimeValue = function TimeValue(_ref2) {
  var value = _ref2.value,
      split = _ref2.split;
  return (// render two lines if not enlarged
    _react["default"].createElement("div", {
      className: "time-value"
    }, split ? value.split(' ').map(function (v, i) {
      return _react["default"].createElement("div", {
        key: i
      }, i === 0 ? _react["default"].createElement(_styledComponents2.SelectText, null, v) : _react["default"].createElement(_styledComponents2.SelectTextBold, null, v));
    }) : _react["default"].createElement(_styledComponents2.SelectTextBold, null, value))
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90aW1lLXJhbmdlLXNsaWRlci5qcyJdLCJuYW1lcyI6WyJhbmltYXRpb25Db250cm9sV2lkdGgiLCJTdHlsZWRTbGlkZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwic2xpZGVyTWFyZ2luVG9wSXNUaW1lIiwiVGltZVJhbmdlU2xpZGVyRmFjdG9yeSIsImRlcHMiLCJQbGF5YmFja0NvbnRyb2xzRmFjdG9yeSIsIlJhbmdlU2xpZGVyRmFjdG9yeSIsIlRpbWVTbGlkZXJNYXJrZXJGYWN0b3J5IiwiQW5pbWF0aW9uQ29udHJvbGxlckZhY3RvcnkiLCJQbGF5YmFja0NvbnRyb2xzIiwiUmFuZ2VTbGlkZXIiLCJUaW1lU2xpZGVyTWFya2VyIiwiQW5pbWF0aW9uQ29udHJvbGxlciIsIlRpbWVSYW5nZVNsaWRlciIsImN1cnJlbnRUaW1lIiwiZm9ybWF0IiwidGltZVNlbGVjdG9yIiwiZm9ybWF0U2VsZWN0b3IiLCJncm91cFRpbWUiLCJBcnJheSIsImlzQXJyYXkiLCJyZWR1Y2UiLCJhY2N1IiwiY3VyciIsImRpc3BsYXlEYXRlVGltZSIsIm1vbWVudCIsInV0YyIsInNwbGl0IiwiZGlzcGxheURhdGUiLCJkaXNwbGF5VGltZSIsImluY2x1ZGVzIiwicHVzaCIsImFyZ3MiLCJfc2xpZGVyVGhyb3R0bGUiLCJjYW5jZWwiLCJvbkNoYW5nZSIsImRvbWFpbiIsInZhbHVlIiwiaXNFbmxhcmdlZCIsImhpZGVUaW1lVGl0bGUiLCJ0aW1lRm9ybWF0Iiwic3BlZWQiLCJ0b2dnbGVBbmltYXRpb24iLCJpc0FuaW1hdGluZyIsInN0YXJ0IiwicGF1c2UiLCJyZXNldCIsImlzQW5pbWF0YWJsZSIsIndpZHRoIiwiaGlzdG9ncmFtIiwibGluZUNoYXJ0IiwicGxvdFR5cGUiLCJzdGVwIiwiX3NsaWRlclVwZGF0ZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm51bWJlciIsInN0cmluZyIsImFueSIsIm9iamVjdCIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJERUZBVUxUX1RJTUVfRk9STUFUIiwiVGltZVZhbHVlV3JhcHBlciIsInRpdGxlVGV4dENvbG9yIiwiVGltZVRpdGxlIiwiVGltZVZhbHVlIiwibWFwIiwidiIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsR0FBOUI7O0FBRUEsSUFBTUMscUJBQXFCLEdBQUdDLDZCQUFPQyxHQUFWLG9CQWdCVCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLHFCQUFoQjtBQUFBLENBaEJJLENBQTNCOztBQW9CQUMsc0JBQXNCLENBQUNDLElBQXZCLEdBQThCLENBQzVCQyw0QkFENEIsRUFFNUJDLHVCQUY0QixFQUc1QkMsNEJBSDRCLEVBSTVCQywrQkFKNEIsQ0FBOUI7O0FBT2UsU0FBU0wsc0JBQVQsQ0FDYk0sZ0JBRGEsRUFFYkMsV0FGYSxFQUdiQyxnQkFIYSxFQUliQyxtQkFKYSxFQUtiO0FBQUEsTUFDTUMsZUFETjtBQUFBO0FBQUE7QUFBQTs7QUFrQkUsNkJBQVliLE1BQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw2SEFBTUEsTUFBTjtBQURpQix1R0FLSixVQUFBQSxLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDYyxXQUFWO0FBQUEsT0FMRDtBQUFBLHlHQU1GLFVBQUFkLEtBQUs7QUFBQSxlQUFJQSxLQUFLLENBQUNlLE1BQVY7QUFBQSxPQU5IO0FBQUEsOEdBT0csOEJBQ3BCLE1BQUtDLFlBRGUsRUFFcEIsTUFBS0MsY0FGZSxFQUdwQixVQUFDSCxXQUFELEVBQWNDLE1BQWQsRUFBeUI7QUFD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RCxRQUFhRCxDQUFiLENBQVYsR0FBeUMsZ0NBQUMsaUNBQUQsUUFBaUJBLENBQWpCLENBRDVDLENBREc7QUFBQSxLQUZQLENBREksR0FTSixnQ0FBQyxpQ0FBRCxRQUFpQmxDLEtBQWpCLENBVko7QUFGZ0I7QUFBQSxDQUFsQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gudGhyb3R0bGUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5cbmltcG9ydCB7TWludXN9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCB7U2VsZWN0VGV4dEJvbGQsIFNlbGVjdFRleHR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSYW5nZVNsaWRlckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vcmFuZ2Utc2xpZGVyJztcbmltcG9ydCBUaW1lU2xpZGVyTWFya2VyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi90aW1lLXNsaWRlci1tYXJrZXInO1xuaW1wb3J0IFBsYXliYWNrQ29udHJvbHNGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2FuaW1hdGlvbi1jb250cm9sL3BsYXliYWNrLWNvbnRyb2xzJztcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9hbmltYXRpb24tY29udHJvbGxlcic7XG5cbmltcG9ydCB7REVGQVVMVF9USU1FX0ZPUk1BVH0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBhbmltYXRpb25Db250cm9sV2lkdGggPSAxNDA7XG5cbmNvbnN0IFN0eWxlZFNsaWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIC50aW1lLXJhbmdlLXNsaWRlcl9fY29udHJvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIH1cblxuICAucGxheWJhY2stY29udHJvbC1idXR0b24ge1xuICAgIHBhZGRpbmc6IDlweCAxMnB4O1xuICB9XG5cbiAgLmtnLXJhbmdlLXNsaWRlcl9fc2xpZGVyIC5rZy1zbGlkZXIge1xuICAgIG1hcmdpbi10b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVyTWFyZ2luVG9wSXNUaW1lfXB4O1xuICB9XG5gO1xuXG5UaW1lUmFuZ2VTbGlkZXJGYWN0b3J5LmRlcHMgPSBbXG4gIFBsYXliYWNrQ29udHJvbHNGYWN0b3J5LFxuICBSYW5nZVNsaWRlckZhY3RvcnksXG4gIFRpbWVTbGlkZXJNYXJrZXJGYWN0b3J5LFxuICBBbmltYXRpb25Db250cm9sbGVyRmFjdG9yeVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZVJhbmdlU2xpZGVyRmFjdG9yeShcbiAgUGxheWJhY2tDb250cm9scyxcbiAgUmFuZ2VTbGlkZXIsXG4gIFRpbWVTbGlkZXJNYXJrZXIsXG4gIEFuaW1hdGlvbkNvbnRyb2xsZXJcbikge1xuICBjbGFzcyBUaW1lUmFuZ2VTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGRvbWFpbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxuICAgICAgc3RlcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgcGxvdFR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBoaXN0b2dyYW06IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgICAgbGluZUNoYXJ0OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgdG9nZ2xlQW5pbWF0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgaXNBbmltYXRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGlzRW5sYXJnZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgc3BlZWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICB0aW1lRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaGlkZVRpbWVUaXRsZTogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuX3NsaWRlclRocm90dGxlID0gdGhyb3R0bGUoKC4uLnZhbHVlKSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKC4uLnZhbHVlKSwgMjApO1xuICAgIH1cblxuICAgIHRpbWVTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmN1cnJlbnRUaW1lO1xuICAgIGZvcm1hdFNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZm9ybWF0O1xuICAgIGRpc3BsYXlUaW1lU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMudGltZVNlbGVjdG9yLFxuICAgICAgdGhpcy5mb3JtYXRTZWxlY3RvcixcbiAgICAgIChjdXJyZW50VGltZSwgZm9ybWF0KSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwVGltZSA9IEFycmF5LmlzQXJyYXkoY3VycmVudFRpbWUpID8gY3VycmVudFRpbWUgOiBbY3VycmVudFRpbWVdO1xuICAgICAgICByZXR1cm4gZ3JvdXBUaW1lLnJlZHVjZShcbiAgICAgICAgICAoYWNjdSwgY3VycikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheURhdGVUaW1lID0gbW9tZW50LnV0YyhjdXJyKS5mb3JtYXQoZm9ybWF0KTtcbiAgICAgICAgICAgIGNvbnN0IFtkaXNwbGF5RGF0ZSwgZGlzcGxheVRpbWVdID0gZGlzcGxheURhdGVUaW1lLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgIGlmICghYWNjdS5kaXNwbGF5RGF0ZS5pbmNsdWRlcyhkaXNwbGF5RGF0ZSkpIHtcbiAgICAgICAgICAgICAgYWNjdS5kaXNwbGF5RGF0ZS5wdXNoKGRpc3BsYXlEYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjY3UuZGlzcGxheVRpbWUucHVzaChkaXNwbGF5VGltZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBhY2N1O1xuICAgICAgICAgIH0sXG4gICAgICAgICAge2Rpc3BsYXlEYXRlOiBbXSwgZGlzcGxheVRpbWU6IFtdfVxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG5cbiAgICBfc2xpZGVyVXBkYXRlID0gYXJncyA9PiB7XG4gICAgICB0aGlzLl9zbGlkZXJUaHJvdHRsZS5jYW5jZWwoKTtcbiAgICAgIHRoaXMuX3NsaWRlclRocm90dGxlKGFyZ3MpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7ZG9tYWluLCB2YWx1ZSwgaXNFbmxhcmdlZCwgaGlkZVRpbWVUaXRsZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtcmFuZ2Utc2xpZGVyXCI+XG4gICAgICAgICAgeyFoaWRlVGltZVRpdGxlID8gKFxuICAgICAgICAgICAgPFRpbWVUaXRsZSB0aW1lRm9ybWF0PXt0aGlzLnByb3BzLnRpbWVGb3JtYXR9IHZhbHVlPXt2YWx1ZX0gaXNFbmxhcmdlZD17aXNFbmxhcmdlZH0gLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8U3R5bGVkU2xpZGVyQ29udGFpbmVyIGNsYXNzTmFtZT1cInRpbWUtcmFuZ2Utc2xpZGVyX19jb250YWluZXJcIiBpc0VubGFyZ2VkPXtpc0VubGFyZ2VkfT5cbiAgICAgICAgICAgIHtpc0VubGFyZ2VkID8gKFxuICAgICAgICAgICAgICA8QW5pbWF0aW9uQ29udHJvbGxlclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgICAgICAgIGRvbWFpbj17dGhpcy5wcm9wcy5kb21haW59XG4gICAgICAgICAgICAgICAgc3BlZWQ9e3RoaXMucHJvcHMuc3BlZWR9XG4gICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb249e3RoaXMucHJvcHMudG9nZ2xlQW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgIHBhdXNlQW5pbWF0aW9uPXt0aGlzLnByb3BzLnRvZ2dsZUFuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICB1cGRhdGVBbmltYXRpb249e3RoaXMucHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7KGlzQW5pbWF0aW5nLCBzdGFydCwgcGF1c2UsIHJlc2V0KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8UGxheWJhY2tDb250cm9sc1xuICAgICAgICAgICAgICAgICAgICBpc0FuaW1hdGFibGU9e3RoaXMucHJvcHMuaXNBbmltYXRhYmxlfVxuICAgICAgICAgICAgICAgICAgICBpc0FuaW1hdGluZz17aXNBbmltYXRpbmd9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXthbmltYXRpb25Db250cm9sV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIHBhdXNlQW5pbWF0aW9uPXtwYXVzZX1cbiAgICAgICAgICAgICAgICAgICAgcmVzZXRBbmltYXRpb249e3Jlc2V0fVxuICAgICAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbj17c3RhcnR9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkhlaWdodD1cIjEycHhcIlxuICAgICAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQW5pbWF0aW9uQ29udHJvbGxlcj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBpc0VubGFyZ2VkID8gYGNhbGMoMTAwJSAtICR7YW5pbWF0aW9uQ29udHJvbFdpZHRofXB4KWAgOiAnMTAwJSdcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFJhbmdlU2xpZGVyXG4gICAgICAgICAgICAgICAgcmFuZ2U9e2RvbWFpbn1cbiAgICAgICAgICAgICAgICB2YWx1ZTA9e3ZhbHVlWzBdfVxuICAgICAgICAgICAgICAgIHZhbHVlMT17dmFsdWVbMV19XG4gICAgICAgICAgICAgICAgaGlzdG9ncmFtPXt0aGlzLnByb3BzLmhpc3RvZ3JhbX1cbiAgICAgICAgICAgICAgICBsaW5lQ2hhcnQ9e3RoaXMucHJvcHMubGluZUNoYXJ0fVxuICAgICAgICAgICAgICAgIHBsb3RUeXBlPXt0aGlzLnByb3BzLnBsb3RUeXBlfVxuICAgICAgICAgICAgICAgIGlzRW5sYXJnZWQ9e2lzRW5sYXJnZWR9XG4gICAgICAgICAgICAgICAgc2hvd0lucHV0PXtmYWxzZX1cbiAgICAgICAgICAgICAgICBzdGVwPXt0aGlzLnByb3BzLnN0ZXB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX3NsaWRlclVwZGF0ZX1cbiAgICAgICAgICAgICAgICB4QXhpcz17VGltZVNsaWRlck1hcmtlcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU3R5bGVkU2xpZGVyQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgVGltZVJhbmdlU2xpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aW1lRm9ybWF0OiBERUZBVUxUX1RJTUVfRk9STUFUXG4gIH07XG5cbiAgcmV0dXJuIFRpbWVSYW5nZVNsaWRlcjtcbn1cblxuY29uc3QgVGltZVZhbHVlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAganVzdGlmeS1jb250ZW50OiAke3Byb3BzID0+IChwcm9wcy5pc0VubGFyZ2VkID8gJ2NlbnRlcicgOiAnc3BhY2UtYmV0d2VlbicpfTtcblxuICAuaG9yaXpvbnRhbC1iYXIge1xuICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZVRleHRDb2xvcn07XG4gIH1cblxuICAudGltZS12YWx1ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcyA9PiAocHJvcHMuaXNFbmxhcmdlZCA/ICdyb3cnIDogJ2NvbHVtbicpfTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVUZXh0Q29sb3J9O1xuICAgIH1cbiAgfVxuXG4gIC50aW1lLXZhbHVlOmxhc3QtY2hpbGQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxuYDtcblxuY29uc3QgVGltZVRpdGxlID0gKHt2YWx1ZSwgaXNFbmxhcmdlZCwgdGltZUZvcm1hdCA9IERFRkFVTFRfVElNRV9GT1JNQVR9KSA9PiAoXG4gIDxUaW1lVmFsdWVXcmFwcGVyIGlzRW5sYXJnZWQ9e2lzRW5sYXJnZWR9IGNsYXNzTmFtZT1cInRpbWUtcmFuZ2Utc2xpZGVyX190aW1lLXRpdGxlXCI+XG4gICAgPFRpbWVWYWx1ZSBrZXk9ezB9IHZhbHVlPXttb21lbnQudXRjKHZhbHVlWzBdKS5mb3JtYXQodGltZUZvcm1hdCl9IHNwbGl0PXshaXNFbmxhcmdlZH0gLz5cbiAgICB7aXNFbmxhcmdlZCA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbC1iYXJcIj5cbiAgICAgICAgPE1pbnVzIGhlaWdodD1cIjEycHhcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKSA6IG51bGx9XG4gICAgPFRpbWVWYWx1ZSBrZXk9ezF9IHZhbHVlPXttb21lbnQudXRjKHZhbHVlWzFdKS5mb3JtYXQodGltZUZvcm1hdCl9IHNwbGl0PXshaXNFbmxhcmdlZH0gLz5cbiAgPC9UaW1lVmFsdWVXcmFwcGVyPlxuKTtcblxuY29uc3QgVGltZVZhbHVlID0gKHt2YWx1ZSwgc3BsaXR9KSA9PiAoXG4gIC8vIHJlbmRlciB0d28gbGluZXMgaWYgbm90IGVubGFyZ2VkXG4gIDxkaXYgY2xhc3NOYW1lPVwidGltZS12YWx1ZVwiPlxuICAgIHtzcGxpdCA/IChcbiAgICAgIHZhbHVlXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5tYXAoKHYsIGkpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICB7aSA9PT0gMCA/IDxTZWxlY3RUZXh0Pnt2fTwvU2VsZWN0VGV4dD4gOiA8U2VsZWN0VGV4dEJvbGQ+e3Z9PC9TZWxlY3RUZXh0Qm9sZD59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgKSA6IChcbiAgICAgIDxTZWxlY3RUZXh0Qm9sZD57dmFsdWV9PC9TZWxlY3RUZXh0Qm9sZD5cbiAgICApfVxuICA8L2Rpdj5cbik7XG4iXX0=