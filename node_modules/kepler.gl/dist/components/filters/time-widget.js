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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _fieldSelector = _interopRequireDefault(require("../common/field-selector"));

var _styledComponents2 = require("../common/styled-components");

var _icons = require("../common/icons");

var _speedControl = _interopRequireDefault(require("../common/animation-control/speed-control"));

var _timeRangeFilter = _interopRequireDefault(require("./time-range-filter"));

var _floatingTimeDisplay = _interopRequireDefault(require("../common/animation-control/floating-time-display"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 0;\n  color: ", ";\n  margin-right: 10px;\n\n  .bottom-widget__icon {\n    margin-right: 6px;\n  }\n  .bottom-widget__icon.speed {\n    margin-right: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  color: ", ";\n  height: ", ";\n\n  .bottom-widget__y-axis {\n    flex-grow: 1;\n    margin-left: 20px;\n  }\n\n  .bottom-widget__field-select {\n    width: 160px;\n    display: inline-block;\n\n    .item-selector__dropdown {\n      background: transparent;\n      padding: 4px 10px 4px 4px;\n      border-color: transparent;\n\n      :active,\n      :focus,\n      &.focus,\n      &.active {\n        background: transparent;\n        border-color: transparent;\n      }\n    }\n\n    .item-selector__dropdown:hover {\n      background: transparent;\n      border-color: transparent;\n\n      .item-selector__dropdown__value {\n        color: ", ";\n      }\n    }\n  }\n\n  .animation-control__speed-control {\n    margin-right: -12px;\n\n    .animation-control__speed-slider {\n      right: calc(0% - 48px);\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 6px 32px 16px 32px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TOP_SECTION_HEIGHT = '36px';
var TimeBottomWidgetInner = (0, _styledComponents["default"])(_styledComponents2.BottomWidgetInner)(_templateObject());

var TopSectionWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.labelColor;
}, TOP_SECTION_HEIGHT, function (props) {
  return props.hoverColor ? props.theme[props.hoverColor] : props.theme.textColorHl;
});

var StyledTitle = (0, _styledComponents["default"])(_styledComponents2.CenterFlexbox)(_templateObject3(), function (props) {
  return props.theme.textColor;
});
TimeWidgetFactory.deps = [_speedControl["default"], _timeRangeFilter["default"], _floatingTimeDisplay["default"]];

function TimeWidgetFactory(SpeedControl, TimeRangeFilter, FloatingTimeDisplay) {
  var TimeWidget =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(TimeWidget, _Component);

    function TimeWidget() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, TimeWidget);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(TimeWidget)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        showSpeedControl: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldSelector", function (props) {
        return props.fields;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "yAxisFieldsSelector", (0, _reselect.createSelector)(_this.fieldSelector, function (fields) {
        return fields.filter(function (f) {
          return f.type === 'integer' || f.type === 'real';
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateAnimationSpeed", function (speed) {
        return _this.props.updateAnimationSpeed(_this.props.index, speed);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleSpeedControl", function () {
        return _this.setState({
          showSpeedControl: !_this.state.showSpeedControl
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setFilterPlotYAxis", function (value) {
        return _this.props.setFilterPlot(_this.props.index, {
          yAxis: value
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateAnimationSpeed", function (speed) {
        return _this.props.updateAnimationSpeed(_this.props.index, speed);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleAnimation", function () {
        return _this.props.toggleAnimation(_this.props.index);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClose", function () {
        return _this.props.enlargeFilter(_this.props.index);
      });
      return _this;
    }

    (0, _createClass2["default"])(TimeWidget, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            datasets = _this$props.datasets,
            filter = _this$props.filter,
            index = _this$props.index,
            readOnly = _this$props.readOnly,
            _setFilter = _this$props.setFilter,
            showTimeDisplay = _this$props.showTimeDisplay;
        var showSpeedControl = this.state.showSpeedControl;
        return _react["default"].createElement(TimeBottomWidgetInner, {
          className: "bottom-widget--inner"
        }, _react["default"].createElement(TopSectionWrapper, null, _react["default"].createElement(StyledTitle, {
          className: "bottom-widget__field"
        }, _react["default"].createElement(_styledComponents2.CenterFlexbox, {
          className: "bottom-widget__icon"
        }, _react["default"].createElement(_icons.Clock, {
          height: "15px"
        })), _react["default"].createElement(_styledComponents2.SelectTextBold, null, filter.name)), _react["default"].createElement(StyledTitle, {
          className: "bottom-widget__y-axis"
        }, _react["default"].createElement(_styledComponents2.CenterFlexbox, {
          className: "bottom-widget__icon"
        }, _react["default"].createElement(_icons.LineChart, {
          height: "15px"
        })), _react["default"].createElement("div", {
          className: "bottom-widget__field-select"
        }, _react["default"].createElement(_fieldSelector["default"], {
          fields: this.yAxisFieldsSelector(datasets[filter.dataId[0]]),
          placement: "top",
          id: "selected-time-widget-field",
          value: filter.yAxis ? filter.yAxis.name : null,
          onSelect: this._setFilterPlotYAxis,
          placeholder: "placeholder.yAxis",
          erasable: true,
          showToken: false
        }))), _react["default"].createElement(StyledTitle, {
          className: "bottom-widget__speed"
        }, _react["default"].createElement(SpeedControl, {
          onClick: this._toggleSpeedControl,
          showSpeedControl: showSpeedControl,
          updateAnimationSpeed: this._updateAnimationSpeed,
          speed: filter.speed
        })), !readOnly ? _react["default"].createElement(_styledComponents2.CenterFlexbox, null, _react["default"].createElement(_styledComponents2.IconRoundSmall, null, _react["default"].createElement(_icons.Close, {
          height: "12px",
          onClick: this._onClose
        }))) : null), _react["default"].createElement(TimeRangeFilter, {
          filter: filter,
          setFilter: function setFilter(value) {
            return _setFilter(index, 'value', value);
          },
          toggleAnimation: this._toggleAnimation,
          hideTimeTitle: showTimeDisplay,
          isAnimatable: true
        }), showTimeDisplay ? _react["default"].createElement(FloatingTimeDisplay, {
          currentTime: filter.value
        }) : null);
      }
    }]);
    return TimeWidget;
  }(_react.Component);

  return TimeWidget;
}

var _default = TimeWidgetFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvdGltZS13aWRnZXQuanMiXSwibmFtZXMiOlsiVE9QX1NFQ1RJT05fSEVJR0hUIiwiVGltZUJvdHRvbVdpZGdldElubmVyIiwiQm90dG9tV2lkZ2V0SW5uZXIiLCJUb3BTZWN0aW9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwiaG92ZXJDb2xvciIsInRleHRDb2xvckhsIiwiU3R5bGVkVGl0bGUiLCJDZW50ZXJGbGV4Ym94IiwidGV4dENvbG9yIiwiVGltZVdpZGdldEZhY3RvcnkiLCJkZXBzIiwiU3BlZWRDb250cm9sRmFjdG9yeSIsIlRpbWVSYW5nZUZpbHRlckZhY3RvcnkiLCJGbG9hdGluZ1RpbWVEaXNwbGF5RmFjdG9yeSIsIlNwZWVkQ29udHJvbCIsIlRpbWVSYW5nZUZpbHRlciIsIkZsb2F0aW5nVGltZURpc3BsYXkiLCJUaW1lV2lkZ2V0Iiwic2hvd1NwZWVkQ29udHJvbCIsImZpZWxkcyIsImZpZWxkU2VsZWN0b3IiLCJmaWx0ZXIiLCJmIiwidHlwZSIsInNwZWVkIiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJpbmRleCIsInNldFN0YXRlIiwic3RhdGUiLCJ2YWx1ZSIsInNldEZpbHRlclBsb3QiLCJ5QXhpcyIsInRvZ2dsZUFuaW1hdGlvbiIsImVubGFyZ2VGaWx0ZXIiLCJkYXRhc2V0cyIsInJlYWRPbmx5Iiwic2V0RmlsdGVyIiwic2hvd1RpbWVEaXNwbGF5IiwibmFtZSIsInlBeGlzRmllbGRzU2VsZWN0b3IiLCJkYXRhSWQiLCJfc2V0RmlsdGVyUGxvdFlBeGlzIiwiX3RvZ2dsZVNwZWVkQ29udHJvbCIsIl91cGRhdGVBbmltYXRpb25TcGVlZCIsIl9vbkNsb3NlIiwiX3RvZ2dsZUFuaW1hdGlvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztB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VWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuXG5pbXBvcnQgRmllbGRTZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvcic7XG5cbmltcG9ydCB7XG4gIFNlbGVjdFRleHRCb2xkLFxuICBJY29uUm91bmRTbWFsbCxcbiAgQ2VudGVyRmxleGJveCxcbiAgQm90dG9tV2lkZ2V0SW5uZXJcbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtDbG9zZSwgQ2xvY2ssIExpbmVDaGFydH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IFNwZWVkQ29udHJvbEZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vYW5pbWF0aW9uLWNvbnRyb2wvc3BlZWQtY29udHJvbCc7XG5pbXBvcnQgVGltZVJhbmdlRmlsdGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2ZpbHRlcnMvdGltZS1yYW5nZS1maWx0ZXInO1xuaW1wb3J0IEZsb2F0aW5nVGltZURpc3BsYXlGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2FuaW1hdGlvbi1jb250cm9sL2Zsb2F0aW5nLXRpbWUtZGlzcGxheSc7XG5cbmNvbnN0IFRPUF9TRUNUSU9OX0hFSUdIVCA9ICczNnB4JztcblxuY29uc3QgVGltZUJvdHRvbVdpZGdldElubmVyID0gc3R5bGVkKEJvdHRvbVdpZGdldElubmVyKWBcbiAgcGFkZGluZzogNnB4IDMycHggMTZweCAzMnB4O1xuYDtcbmNvbnN0IFRvcFNlY3Rpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gIGhlaWdodDogJHtUT1BfU0VDVElPTl9IRUlHSFR9O1xuXG4gIC5ib3R0b20td2lkZ2V0X195LWF4aXMge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuXG4gIC5ib3R0b20td2lkZ2V0X19maWVsZC1zZWxlY3Qge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAuaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd24ge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBwYWRkaW5nOiA0cHggMTBweCA0cHggNHB4O1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgOmFjdGl2ZSxcbiAgICAgIDpmb2N1cyxcbiAgICAgICYuZm9jdXMsXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLXNlbGVjdG9yX19kcm9wZG93bjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgIC5pdGVtLXNlbGVjdG9yX19kcm9wZG93bl9fdmFsdWUge1xuICAgICAgICBjb2xvcjogJHtwcm9wcyA9PlxuICAgICAgICAgIHByb3BzLmhvdmVyQ29sb3IgPyBwcm9wcy50aGVtZVtwcm9wcy5ob3ZlckNvbG9yXSA6IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYW5pbWF0aW9uLWNvbnRyb2xfX3NwZWVkLWNvbnRyb2wge1xuICAgIG1hcmdpbi1yaWdodDogLTEycHg7XG5cbiAgICAuYW5pbWF0aW9uLWNvbnRyb2xfX3NwZWVkLXNsaWRlciB7XG4gICAgICByaWdodDogY2FsYygwJSAtIDQ4cHgpO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQoQ2VudGVyRmxleGJveClgXG4gIGZsZXgtZ3JvdzogMDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gIC5ib3R0b20td2lkZ2V0X19pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgfVxuICAuYm90dG9tLXdpZGdldF9faWNvbi5zcGVlZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5gO1xuXG5UaW1lV2lkZ2V0RmFjdG9yeS5kZXBzID0gW1NwZWVkQ29udHJvbEZhY3RvcnksIFRpbWVSYW5nZUZpbHRlckZhY3RvcnksIEZsb2F0aW5nVGltZURpc3BsYXlGYWN0b3J5XTtcblxuZnVuY3Rpb24gVGltZVdpZGdldEZhY3RvcnkoU3BlZWRDb250cm9sLCBUaW1lUmFuZ2VGaWx0ZXIsIEZsb2F0aW5nVGltZURpc3BsYXkpIHtcbiAgY2xhc3MgVGltZVdpZGdldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICBzaG93U3BlZWRDb250cm9sOiBmYWxzZVxuICAgIH07XG5cbiAgICBmaWVsZFNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmllbGRzO1xuICAgIHlBeGlzRmllbGRzU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmZpZWxkU2VsZWN0b3IsIGZpZWxkcyA9PlxuICAgICAgZmllbGRzLmZpbHRlcihmID0+IGYudHlwZSA9PT0gJ2ludGVnZXInIHx8IGYudHlwZSA9PT0gJ3JlYWwnKVxuICAgICk7XG5cbiAgICBfdXBkYXRlQW5pbWF0aW9uU3BlZWQgPSBzcGVlZCA9PiB0aGlzLnByb3BzLnVwZGF0ZUFuaW1hdGlvblNwZWVkKHRoaXMucHJvcHMuaW5kZXgsIHNwZWVkKTtcblxuICAgIF90b2dnbGVTcGVlZENvbnRyb2wgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93U3BlZWRDb250cm9sOiAhdGhpcy5zdGF0ZS5zaG93U3BlZWRDb250cm9sfSk7XG5cbiAgICBfc2V0RmlsdGVyUGxvdFlBeGlzID0gdmFsdWUgPT4gdGhpcy5wcm9wcy5zZXRGaWx0ZXJQbG90KHRoaXMucHJvcHMuaW5kZXgsIHt5QXhpczogdmFsdWV9KTtcblxuICAgIF91cGRhdGVBbmltYXRpb25TcGVlZCA9IHNwZWVkID0+IHRoaXMucHJvcHMudXBkYXRlQW5pbWF0aW9uU3BlZWQodGhpcy5wcm9wcy5pbmRleCwgc3BlZWQpO1xuXG4gICAgX3RvZ2dsZUFuaW1hdGlvbiA9ICgpID0+IHRoaXMucHJvcHMudG9nZ2xlQW5pbWF0aW9uKHRoaXMucHJvcHMuaW5kZXgpO1xuXG4gICAgX29uQ2xvc2UgPSAoKSA9PiB0aGlzLnByb3BzLmVubGFyZ2VGaWx0ZXIodGhpcy5wcm9wcy5pbmRleCk7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7ZGF0YXNldHMsIGZpbHRlciwgaW5kZXgsIHJlYWRPbmx5LCBzZXRGaWx0ZXIsIHNob3dUaW1lRGlzcGxheX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBjb25zdCB7c2hvd1NwZWVkQ29udHJvbH0gPSB0aGlzLnN0YXRlO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRpbWVCb3R0b21XaWRnZXRJbm5lciBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0LS1pbm5lclwiPlxuICAgICAgICAgIDxUb3BTZWN0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgIDxTdHlsZWRUaXRsZSBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0X19maWVsZFwiPlxuICAgICAgICAgICAgICA8Q2VudGVyRmxleGJveCBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0X19pY29uXCI+XG4gICAgICAgICAgICAgICAgPENsb2NrIGhlaWdodD1cIjE1cHhcIiAvPlxuICAgICAgICAgICAgICA8L0NlbnRlckZsZXhib3g+XG4gICAgICAgICAgICAgIDxTZWxlY3RUZXh0Qm9sZD57ZmlsdGVyLm5hbWV9PC9TZWxlY3RUZXh0Qm9sZD5cbiAgICAgICAgICAgIDwvU3R5bGVkVGl0bGU+XG4gICAgICAgICAgICA8U3R5bGVkVGl0bGUgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9feS1heGlzXCI+XG4gICAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ljb25cIj5cbiAgICAgICAgICAgICAgICA8TGluZUNoYXJ0IGhlaWdodD1cIjE1cHhcIiAvPlxuICAgICAgICAgICAgICA8L0NlbnRlckZsZXhib3g+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9fZmllbGQtc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgPEZpZWxkU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIGZpZWxkcz17dGhpcy55QXhpc0ZpZWxkc1NlbGVjdG9yKGRhdGFzZXRzW2ZpbHRlci5kYXRhSWRbMF1dKX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICBpZD1cInNlbGVjdGVkLXRpbWUtd2lkZ2V0LWZpZWxkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaWx0ZXIueUF4aXMgPyBmaWx0ZXIueUF4aXMubmFtZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5fc2V0RmlsdGVyUGxvdFlBeGlzfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlci55QXhpc1wiXG4gICAgICAgICAgICAgICAgICBlcmFzYWJsZVxuICAgICAgICAgICAgICAgICAgc2hvd1Rva2VuPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU3R5bGVkVGl0bGU+XG4gICAgICAgICAgICA8U3R5bGVkVGl0bGUgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9fc3BlZWRcIj5cbiAgICAgICAgICAgICAgPFNwZWVkQ29udHJvbFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZVNwZWVkQ29udHJvbH1cbiAgICAgICAgICAgICAgICBzaG93U3BlZWRDb250cm9sPXtzaG93U3BlZWRDb250cm9sfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUFuaW1hdGlvblNwZWVkPXt0aGlzLl91cGRhdGVBbmltYXRpb25TcGVlZH1cbiAgICAgICAgICAgICAgICBzcGVlZD17ZmlsdGVyLnNwZWVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TdHlsZWRUaXRsZT5cbiAgICAgICAgICAgIHshcmVhZE9ubHkgPyAoXG4gICAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94PlxuICAgICAgICAgICAgICAgIDxJY29uUm91bmRTbWFsbD5cbiAgICAgICAgICAgICAgICAgIDxDbG9zZSBoZWlnaHQ9XCIxMnB4XCIgb25DbGljaz17dGhpcy5fb25DbG9zZX0gLz5cbiAgICAgICAgICAgICAgICA8L0ljb25Sb3VuZFNtYWxsPlxuICAgICAgICAgICAgICA8L0NlbnRlckZsZXhib3g+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L1RvcFNlY3Rpb25XcmFwcGVyPlxuICAgICAgICAgIDxUaW1lUmFuZ2VGaWx0ZXJcbiAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgc2V0RmlsdGVyPXt2YWx1ZSA9PiBzZXRGaWx0ZXIoaW5kZXgsICd2YWx1ZScsIHZhbHVlKX1cbiAgICAgICAgICAgIHRvZ2dsZUFuaW1hdGlvbj17dGhpcy5fdG9nZ2xlQW5pbWF0aW9ufVxuICAgICAgICAgICAgaGlkZVRpbWVUaXRsZT17c2hvd1RpbWVEaXNwbGF5fVxuICAgICAgICAgICAgaXNBbmltYXRhYmxlXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c2hvd1RpbWVEaXNwbGF5ID8gPEZsb2F0aW5nVGltZURpc3BsYXkgY3VycmVudFRpbWU9e2ZpbHRlci52YWx1ZX0gLz4gOiBudWxsfVxuICAgICAgICA8L1RpbWVCb3R0b21XaWRnZXRJbm5lcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBUaW1lV2lkZ2V0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lV2lkZ2V0RmFjdG9yeTtcbiJdfQ==