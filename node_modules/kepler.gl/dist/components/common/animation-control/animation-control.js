"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _slider = _interopRequireDefault(require("../slider/slider"));

var _styledComponents2 = require("../styled-components");

var _speedControl = _interopRequireDefault(require("./speed-control"));

var _playbackControls = _interopRequireDefault(require("./playback-controls"));

var _floatingTimeDisplay = _interopRequireDefault(require("./floating-time-display"));

var _animationController = _interopRequireDefault(require("./animation-controller"));

var _dataUtils = require("../../../utils/data-utils");

var _constants = require("../../../constants");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 32px;\n\n  .animation-control__speed-control {\n    margin-right: -10px;\n\n    .animation-control__speed-slider {\n      right: calc(0% - 10px);\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: relative;\n  flex-grow: 1;\n  margin-right: 24px;\n  margin-left: 24px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SliderWrapper = _styledComponents["default"].div(_templateObject());

var AnimationWidgetInner = _styledComponents["default"].div(_templateObject2());

var StyledDomain = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.titleTextColor;
});

var BUTTON_HEIGHT = '18px';
AnimationControlFactory.deps = [_speedControl["default"], _playbackControls["default"], _floatingTimeDisplay["default"], _animationController["default"]];

function AnimationControlFactory(SpeedControl, AnimationPlaybacks, FloatingTimeDisplay, AnimationController) {
  var AnimationControl =
  /*#__PURE__*/
  function (_React$PureComponent) {
    (0, _inherits2["default"])(AnimationControl, _React$PureComponent);

    function AnimationControl() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, AnimationControl);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(AnimationControl)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        showSpeedControl: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSlider1Change", function (val) {
        var domain = _this.props.animationConfig.domain;

        if (Array.isArray(_this.props.timeSteps)) {
          _this.props.updateAnimationTime((0, _dataUtils.snapToMarks)(val, _this.props.timeSteps)); // TODO: merge slider in to avoid this step

        } else if (val >= domain[0] && val <= domain[1]) {
          _this.props.updateAnimationTime(val);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleSpeedControl", function () {
        _this.setState({
          showSpeedControl: !_this.state.showSpeedControl
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function () {
        _this.toggleSpeedControl();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateAnimation", function (value) {
        _this.props.updateAnimationTime(Array.isArray(value) ? value[0] : value);
      });
      return _this;
    }

    (0, _createClass2["default"])(AnimationControl, [{
      key: "render",
      value: function render() {
        var _this$props$animation = this.props.animationConfig,
            currentTime = _this$props$animation.currentTime,
            domain = _this$props$animation.domain,
            speed = _this$props$animation.speed,
            step = _this$props$animation.step,
            timeSteps = _this$props$animation.timeSteps;
        var showSpeedControl = this.state.showSpeedControl;
        var animationType = Array.isArray(timeSteps) ? _constants.ANIMATION_TYPE.interval : _constants.ANIMATION_TYPE.continuous;
        return _react["default"].createElement(_styledComponents2.BottomWidgetInner, {
          className: "bottom-widget--inner"
        }, _react["default"].createElement(AnimationWidgetInner, {
          className: "animation-widget--inner"
        }, _react["default"].createElement("div", {
          style: {
            marginLeft: '-10px'
          }
        }, _react["default"].createElement(AnimationController, {
          value: currentTime,
          domain: domain,
          speed: speed,
          updateAnimation: this._updateAnimation,
          steps: timeSteps,
          animationType: animationType
        }, function (isAnimating, start, pause, reset) {
          return _react["default"].createElement(AnimationPlaybacks, {
            className: "animation-control-playpause",
            startAnimation: start,
            isAnimating: isAnimating,
            pauseAnimation: pause,
            resetAnimation: reset,
            buttonHeight: BUTTON_HEIGHT,
            buttonStyle: "link"
          });
        })), _react["default"].createElement(StyledDomain, {
          className: "animation-control__time-domain"
        }, _react["default"].createElement("span", null, _moment["default"].utc(domain[0]).format(_constants.DEFAULT_TIME_FORMAT))), _react["default"].createElement(SliderWrapper, {
          className: "animation-control__slider"
        }, _react["default"].createElement(_slider["default"], {
          showValues: false,
          isRanged: false,
          step: step,
          minValue: domain ? domain[0] : 0,
          maxValue: domain ? domain[1] : 1,
          value1: currentTime,
          onSlider1Change: this.onSlider1Change,
          enableBarDrag: true
        })), _react["default"].createElement(StyledDomain, {
          className: "animation-control__time-domain"
        }, _react["default"].createElement("span", null, _moment["default"].utc(domain[1]).format(_constants.DEFAULT_TIME_FORMAT))), _react["default"].createElement("div", {
          className: "animation-control__speed-control"
        }, _react["default"].createElement(SpeedControl, {
          onClick: this.toggleSpeedControl,
          showSpeedControl: showSpeedControl,
          updateAnimationSpeed: this.props.updateAnimationSpeed,
          speed: speed,
          buttonHeight: BUTTON_HEIGHT
        }))), _react["default"].createElement(FloatingTimeDisplay, {
          currentTime: currentTime
        }));
      }
    }]);
    return AnimationControl;
  }(_react["default"].PureComponent);

  AnimationControl.defaultProps = {
    sliderHandleWidth: 12,
    onChange: function onChange() {}
  };
  return AnimationControl;
}

var _default = AnimationControlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9hbmltYXRpb24tY29udHJvbC5qcyJdLCJuYW1lcyI6WyJTbGlkZXJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiQW5pbWF0aW9uV2lkZ2V0SW5uZXIiLCJTdHlsZWREb21haW4iLCJwcm9wcyIsInRoZW1lIiwidGl0bGVUZXh0Q29sb3IiLCJCVVRUT05fSEVJR0hUIiwiQW5pbWF0aW9uQ29udHJvbEZhY3RvcnkiLCJkZXBzIiwiU3BlZWRDb250cm9sRmFjdG9yeSIsIkFuaW1hdGlvblBsYXliYWNrc0ZhY3RvcnkiLCJGbG9hdGluZ1RpbWVEaXNwbGF5RmFjdG9yeSIsIkFuaW1hdGlvbkNvbnRyb2xsZXJGYWN0b3J5IiwiU3BlZWRDb250cm9sIiwiQW5pbWF0aW9uUGxheWJhY2tzIiwiRmxvYXRpbmdUaW1lRGlzcGxheSIsIkFuaW1hdGlvbkNvbnRyb2xsZXIiLCJBbmltYXRpb25Db250cm9sIiwic2hvd1NwZWVkQ29udHJvbCIsInZhbCIsImRvbWFpbiIsImFuaW1hdGlvbkNvbmZpZyIsIkFycmF5IiwiaXNBcnJheSIsInRpbWVTdGVwcyIsInVwZGF0ZUFuaW1hdGlvblRpbWUiLCJzZXRTdGF0ZSIsInN0YXRlIiwidG9nZ2xlU3BlZWRDb250cm9sIiwidmFsdWUiLCJjdXJyZW50VGltZSIsInNwZWVkIiwic3RlcCIsImFuaW1hdGlvblR5cGUiLCJBTklNQVRJT05fVFlQRSIsImludGVydmFsIiwiY29udGludW91cyIsIm1hcmdpbkxlZnQiLCJfdXBkYXRlQW5pbWF0aW9uIiwiaXNBbmltYXRpbmciLCJzdGFydCIsInBhdXNlIiwicmVzZXQiLCJtb21lbnQiLCJ1dGMiLCJmb3JtYXQiLCJERUZBVUxUX1RJTUVfRk9STUFUIiwib25TbGlkZXIxQ2hhbmdlIiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMi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QUtFLFVBQUEsUUFBUSxFQUFFQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQyxDQUFELENBQVQsR0FBZSxDQUxqQztBQU1FLFVBQUEsTUFBTSxFQUFFVSxXQU5WO0FBT0UsVUFBQSxlQUFlLEVBQUUsS0FBS2lCLGVBUHhCO0FBUUUsVUFBQSxhQUFhLEVBQUU7QUFSakIsVUFERixDQTFCRixFQXNDRSxnQ0FBQyxZQUFEO0FBQWMsVUFBQSxTQUFTLEVBQUM7QUFBeEIsV0FDRSw4Q0FBT0osbUJBQU9DLEdBQVAsQ0FBV3hCLE1BQU0sQ0FBQyxDQUFELENBQWpCLEVBQXNCeUIsTUFBdEIsQ0FBNkJDLDhCQUE3QixDQUFQLENBREYsQ0F0Q0YsRUF5Q0U7QUFBSyxVQUFBLFNBQVMsRUFBQztBQUFmLFdBQ0UsZ0NBQUMsWUFBRDtBQUNFLFVBQUEsT0FBTyxFQUFFLEtBQUtsQixrQkFEaEI7QUFFRSxVQUFBLGdCQUFnQixFQUFFVixnQkFGcEI7QUFHRSxVQUFBLG9CQUFvQixFQUFFLEtBQUtmLEtBQUwsQ0FBVzZDLG9CQUhuQztBQUlFLFVBQUEsS0FBSyxFQUFFakIsS0FKVDtBQUtFLFVBQUEsWUFBWSxFQUFFekI7QUFMaEIsVUFERixDQXpDRixDQURGLEVBb0RFLGdDQUFDLG1CQUFEO0FBQXFCLFVBQUEsV0FBVyxFQUFFd0I7QUFBbEMsVUFwREYsQ0FERjtBQXdERDtBQTFGSDtBQUFBO0FBQUEsSUFDK0JtQixrQkFBTUMsYUFEckM7O0FBNkZBakMsRUFBQUEsZ0JBQWdCLENBQUNrQyxZQUFqQixHQUFnQztBQUM5QkMsSUFBQUEsaUJBQWlCLEVBQUUsRUFEVztBQUU5QkMsSUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUU7QUFGWSxHQUFoQztBQUtBLFNBQU9wQyxnQkFBUDtBQUNEOztlQUVjVix1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IFNsaWRlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyJztcbmltcG9ydCB7Qm90dG9tV2lkZ2V0SW5uZXJ9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTcGVlZENvbnRyb2xGYWN0b3J5IGZyb20gJy4vc3BlZWQtY29udHJvbCc7XG5pbXBvcnQgQW5pbWF0aW9uUGxheWJhY2tzRmFjdG9yeSBmcm9tICcuL3BsYXliYWNrLWNvbnRyb2xzJztcbmltcG9ydCBGbG9hdGluZ1RpbWVEaXNwbGF5RmFjdG9yeSBmcm9tICcuL2Zsb2F0aW5nLXRpbWUtZGlzcGxheSc7XG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckZhY3RvcnkgZnJvbSAnLi9hbmltYXRpb24tY29udHJvbGxlcic7XG5pbXBvcnQge3NuYXBUb01hcmtzfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcbmltcG9ydCB7REVGQVVMVF9USU1FX0ZPUk1BVCwgQU5JTUFUSU9OX1RZUEV9IGZyb20gJ2NvbnN0YW50cyc7XG5cbmNvbnN0IFNsaWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMjRweDtcbmA7XG5cbmNvbnN0IEFuaW1hdGlvbldpZGdldElubmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDMycHg7XG5cbiAgLmFuaW1hdGlvbi1jb250cm9sX19zcGVlZC1jb250cm9sIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuXG4gICAgLmFuaW1hdGlvbi1jb250cm9sX19zcGVlZC1zbGlkZXIge1xuICAgICAgcmlnaHQ6IGNhbGMoMCUgLSAxMHB4KTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZERvbWFpbiA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlVGV4dENvbG9yfTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuYDtcblxuY29uc3QgQlVUVE9OX0hFSUdIVCA9ICcxOHB4JztcblxuQW5pbWF0aW9uQ29udHJvbEZhY3RvcnkuZGVwcyA9IFtcbiAgU3BlZWRDb250cm9sRmFjdG9yeSxcbiAgQW5pbWF0aW9uUGxheWJhY2tzRmFjdG9yeSxcbiAgRmxvYXRpbmdUaW1lRGlzcGxheUZhY3RvcnksXG4gIEFuaW1hdGlvbkNvbnRyb2xsZXJGYWN0b3J5XG5dO1xuXG5mdW5jdGlvbiBBbmltYXRpb25Db250cm9sRmFjdG9yeShcbiAgU3BlZWRDb250cm9sLFxuICBBbmltYXRpb25QbGF5YmFja3MsXG4gIEZsb2F0aW5nVGltZURpc3BsYXksXG4gIEFuaW1hdGlvbkNvbnRyb2xsZXJcbikge1xuICBjbGFzcyBBbmltYXRpb25Db250cm9sIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICBzaG93U3BlZWRDb250cm9sOiBmYWxzZVxuICAgIH07XG4gICAgb25TbGlkZXIxQ2hhbmdlID0gdmFsID0+IHtcbiAgICAgIGNvbnN0IHtkb21haW59ID0gdGhpcy5wcm9wcy5hbmltYXRpb25Db25maWc7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLnRpbWVTdGVwcykpIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVBbmltYXRpb25UaW1lKHNuYXBUb01hcmtzKHZhbCwgdGhpcy5wcm9wcy50aW1lU3RlcHMpKTtcbiAgICAgICAgLy8gVE9ETzogbWVyZ2Ugc2xpZGVyIGluIHRvIGF2b2lkIHRoaXMgc3RlcFxuICAgICAgfSBlbHNlIGlmICh2YWwgPj0gZG9tYWluWzBdICYmIHZhbCA8PSBkb21haW5bMV0pIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVBbmltYXRpb25UaW1lKHZhbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRvZ2dsZVNwZWVkQ29udHJvbCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dTcGVlZENvbnRyb2w6ICF0aGlzLnN0YXRlLnNob3dTcGVlZENvbnRyb2x9KTtcbiAgICB9O1xuXG4gICAgb25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZVNwZWVkQ29udHJvbCgpO1xuICAgIH07XG5cbiAgICBfdXBkYXRlQW5pbWF0aW9uID0gdmFsdWUgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVBbmltYXRpb25UaW1lKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWVbMF0gOiB2YWx1ZSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtjdXJyZW50VGltZSwgZG9tYWluLCBzcGVlZCwgc3RlcCwgdGltZVN0ZXBzfSA9IHRoaXMucHJvcHMuYW5pbWF0aW9uQ29uZmlnO1xuICAgICAgY29uc3Qge3Nob3dTcGVlZENvbnRyb2x9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IGFuaW1hdGlvblR5cGUgPSBBcnJheS5pc0FycmF5KHRpbWVTdGVwcylcbiAgICAgICAgPyBBTklNQVRJT05fVFlQRS5pbnRlcnZhbFxuICAgICAgICA6IEFOSU1BVElPTl9UWVBFLmNvbnRpbnVvdXM7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCb3R0b21XaWRnZXRJbm5lciBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0LS1pbm5lclwiPlxuICAgICAgICAgIDxBbmltYXRpb25XaWRnZXRJbm5lciBjbGFzc05hbWU9XCJhbmltYXRpb24td2lkZ2V0LS1pbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6ICctMTBweCd9fT5cbiAgICAgICAgICAgICAgPEFuaW1hdGlvbkNvbnRyb2xsZXJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudFRpbWV9XG4gICAgICAgICAgICAgICAgZG9tYWluPXtkb21haW59XG4gICAgICAgICAgICAgICAgc3BlZWQ9e3NwZWVkfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUFuaW1hdGlvbj17dGhpcy5fdXBkYXRlQW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgIHN0ZXBzPXt0aW1lU3RlcHN9XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uVHlwZT17YW5pbWF0aW9uVHlwZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsoaXNBbmltYXRpbmcsIHN0YXJ0LCBwYXVzZSwgcmVzZXQpID0+IChcbiAgICAgICAgICAgICAgICAgIDxBbmltYXRpb25QbGF5YmFja3NcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW5pbWF0aW9uLWNvbnRyb2wtcGxheXBhdXNlXCJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb249e3N0YXJ0fVxuICAgICAgICAgICAgICAgICAgICBpc0FuaW1hdGluZz17aXNBbmltYXRpbmd9XG4gICAgICAgICAgICAgICAgICAgIHBhdXNlQW5pbWF0aW9uPXtwYXVzZX1cbiAgICAgICAgICAgICAgICAgICAgcmVzZXRBbmltYXRpb249e3Jlc2V0fVxuICAgICAgICAgICAgICAgICAgICBidXR0b25IZWlnaHQ9e0JVVFRPTl9IRUlHSFR9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQW5pbWF0aW9uQ29udHJvbGxlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFN0eWxlZERvbWFpbiBjbGFzc05hbWU9XCJhbmltYXRpb24tY29udHJvbF9fdGltZS1kb21haW5cIj5cbiAgICAgICAgICAgICAgPHNwYW4+e21vbWVudC51dGMoZG9tYWluWzBdKS5mb3JtYXQoREVGQVVMVF9USU1FX0ZPUk1BVCl9PC9zcGFuPlxuICAgICAgICAgICAgPC9TdHlsZWREb21haW4+XG4gICAgICAgICAgICA8U2xpZGVyV3JhcHBlciBjbGFzc05hbWU9XCJhbmltYXRpb24tY29udHJvbF9fc2xpZGVyXCI+XG4gICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICBzaG93VmFsdWVzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBpc1JhbmdlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICAgICAgICBtaW5WYWx1ZT17ZG9tYWluID8gZG9tYWluWzBdIDogMH1cbiAgICAgICAgICAgICAgICBtYXhWYWx1ZT17ZG9tYWluID8gZG9tYWluWzFdIDogMX1cbiAgICAgICAgICAgICAgICB2YWx1ZTE9e2N1cnJlbnRUaW1lfVxuICAgICAgICAgICAgICAgIG9uU2xpZGVyMUNoYW5nZT17dGhpcy5vblNsaWRlcjFDaGFuZ2V9XG4gICAgICAgICAgICAgICAgZW5hYmxlQmFyRHJhZz17dHJ1ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2xpZGVyV3JhcHBlcj5cbiAgICAgICAgICAgIDxTdHlsZWREb21haW4gY2xhc3NOYW1lPVwiYW5pbWF0aW9uLWNvbnRyb2xfX3RpbWUtZG9tYWluXCI+XG4gICAgICAgICAgICAgIDxzcGFuPnttb21lbnQudXRjKGRvbWFpblsxXSkuZm9ybWF0KERFRkFVTFRfVElNRV9GT1JNQVQpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvU3R5bGVkRG9tYWluPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRpb24tY29udHJvbF9fc3BlZWQtY29udHJvbFwiPlxuICAgICAgICAgICAgICA8U3BlZWRDb250cm9sXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVTcGVlZENvbnRyb2x9XG4gICAgICAgICAgICAgICAgc2hvd1NwZWVkQ29udHJvbD17c2hvd1NwZWVkQ29udHJvbH1cbiAgICAgICAgICAgICAgICB1cGRhdGVBbmltYXRpb25TcGVlZD17dGhpcy5wcm9wcy51cGRhdGVBbmltYXRpb25TcGVlZH1cbiAgICAgICAgICAgICAgICBzcGVlZD17c3BlZWR9XG4gICAgICAgICAgICAgICAgYnV0dG9uSGVpZ2h0PXtCVVRUT05fSEVJR0hUfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9BbmltYXRpb25XaWRnZXRJbm5lcj5cbiAgICAgICAgICA8RmxvYXRpbmdUaW1lRGlzcGxheSBjdXJyZW50VGltZT17Y3VycmVudFRpbWV9IC8+XG4gICAgICAgIDwvQm90dG9tV2lkZ2V0SW5uZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEFuaW1hdGlvbkNvbnRyb2wuZGVmYXVsdFByb3BzID0ge1xuICAgIHNsaWRlckhhbmRsZVdpZHRoOiAxMixcbiAgICBvbkNoYW5nZTogKCkgPT4ge31cbiAgfTtcblxuICByZXR1cm4gQW5pbWF0aW9uQ29udHJvbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uQ29udHJvbEZhY3Rvcnk7XG4iXX0=