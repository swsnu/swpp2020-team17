"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RangePlotFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Scale = require("d3-scale");

var _moment = _interopRequireDefault(require("moment"));

var _d3Array = require("d3-array");

var _reselect = require("reselect");

var _reactVis = require("react-vis");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rangeBrush = _interopRequireDefault(require("./range-brush"));

var _filterUtils = require("../../utils/filter-utils");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: #d3d8e0;\n  border-radius: 2px;\n  color: ", ";\n  font-size: 9px;\n  margin: 4px;\n  padding: 3px 6px;\n  pointer-events: none;\n  user-select: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .histogram-bars {\n    rect {\n      fill: ", ";\n    }\n    rect.in-range {\n      fill: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .rv-xy-plot__inner path {\n    fill: none;\n    stroke-width: 1.5;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var chartMargin = {
  top: 8,
  bottom: 0,
  left: 0,
  right: 0
};
var chartH = 52;
var containerH = 68;
var histogramStyle = {
  highlightW: 0.7,
  unHighlightedW: 0.4
};
RangePlotFactory.deps = [_rangeBrush["default"]];

function RangePlotFactory(RangeBrush) {
  var RangePlot =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(RangePlot, _Component);

    function RangePlot() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, RangePlot);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(RangePlot)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        hoveredDP: null
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "domainSelector", function (props) {
        return props.lineChart && props.lineChart.xDomain;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hintFormatter", (0, _reselect.createSelector)(_this.domainSelector, function (domain) {
        return (0, _filterUtils.getTimeWidgetHintFormatter)(domain);
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onMouseMove", function (hoveredDP) {
        _this.setState({
          hoveredDP: hoveredDP
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(RangePlot, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            onBrush = _this$props.onBrush,
            range = _this$props.range,
            value = _this$props.value,
            width = _this$props.width,
            plotType = _this$props.plotType,
            lineChart = _this$props.lineChart,
            histogram = _this$props.histogram;
        var domain = [histogram[0].x0, histogram[histogram.length - 1].x1];

        var brushComponent = _react["default"].createElement(RangeBrush, {
          domain: domain,
          onBrush: onBrush,
          range: range,
          value: value,
          width: width
        });

        return _react["default"].createElement("div", {
          style: {
            height: "".concat(containerH, "px"),
            position: 'relative'
          }
        }, plotType === 'lineChart' ? _react["default"].createElement(LineChart, {
          hoveredDP: this.state.hoveredDP,
          width: width,
          height: containerH,
          margin: chartMargin,
          children: brushComponent,
          onMouseMove: this.onMouseMove,
          yDomain: lineChart.yDomain,
          hintFormat: this.hintFormatter(this.props),
          data: lineChart.series
        }) : _react["default"].createElement(Histogram, {
          width: width,
          height: chartH,
          value: value,
          margin: chartMargin,
          histogram: histogram,
          brushComponent: brushComponent
        }));
      }
    }]);
    return RangePlot;
  }(_react.Component);

  (0, _defineProperty2["default"])(RangePlot, "propTypes", {
    value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    histogram: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      x0: _propTypes["default"].number,
      x1: _propTypes["default"].number
    })),
    lineChart: _propTypes["default"].object,
    plotType: _propTypes["default"].string,
    isEnlarged: _propTypes["default"].bool,
    onBlur: _propTypes["default"].func,
    width: _propTypes["default"].number.isRequired
  });
  return RangePlot;
}

var Histogram = function Histogram(_ref) {
  var width = _ref.width,
      height = _ref.height,
      margin = _ref.margin,
      histogram = _ref.histogram,
      value = _ref.value,
      brushComponent = _ref.brushComponent;
  var domain = [histogram[0].x0, histogram[histogram.length - 1].x1];
  var barWidth = width / histogram.length;
  var x = (0, _d3Scale.scaleLinear)().domain(domain).range([0, width]);
  var y = (0, _d3Scale.scaleLinear)().domain([0, (0, _d3Array.max)(histogram, function (d) {
    return d.count;
  })]).range([0, height]);
  return _react["default"].createElement(HistogramWrapper, {
    width: width,
    height: height,
    style: {
      marginTop: "".concat(margin.top, "px")
    }
  }, _react["default"].createElement("g", {
    className: "histogram-bars"
  }, histogram.map(function (bar) {
    var inRange = bar.x0 >= value[0] && bar.x1 <= value[1];
    var wRatio = inRange ? histogramStyle.highlightW : histogramStyle.unHighlightedW;
    return _react["default"].createElement("rect", {
      className: (0, _classnames["default"])({
        'in-range': inRange
      }),
      key: bar.x0,
      height: y(bar.count),
      width: barWidth * wRatio,
      x: x(bar.x0) + barWidth * (1 - wRatio) / 2,
      rx: 1,
      ry: 1,
      y: height - y(bar.count)
    });
  })), brushComponent);
};

var LineChartWrapper = _styledComponents["default"].div(_templateObject());

var HistogramWrapper = _styledComponents["default"].svg(_templateObject2(), function (props) {
  return props.theme.histogramFillOutRange;
}, function (props) {
  return props.theme.histogramFillInRange;
});

var LineChart = function LineChart(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      yDomain = _ref2.yDomain,
      hintFormat = _ref2.hintFormat,
      hoveredDP = _ref2.hoveredDP,
      margin = _ref2.margin,
      color = _ref2.color,
      data = _ref2.data,
      onMouseMove = _ref2.onMouseMove,
      children = _ref2.children;
  var brushData = [{
    x: data[0].x,
    y: yDomain[1],
    customComponent: function customComponent() {
      return children;
    }
  }];
  return _react["default"].createElement(LineChartWrapper, null, _react["default"].createElement(_reactVis.XYPlot, {
    width: width,
    height: height,
    margin: _objectSpread({}, margin, {
      bottom: 12
    })
  }, _react["default"].createElement(_reactVis.LineSeries, {
    strokeWidth: 2,
    color: color,
    data: data,
    onNearestX: onMouseMove
  }), _react["default"].createElement(_reactVis.MarkSeries, {
    data: hoveredDP ? [hoveredDP] : [],
    color: color,
    size: 3
  }), _react["default"].createElement(_reactVis.CustomSVGSeries, {
    data: brushData
  }), hoveredDP ? _react["default"].createElement(_reactVis.Hint, {
    value: hoveredDP
  }, _react["default"].createElement(HintContent, (0, _extends2["default"])({}, hoveredDP, {
    format: function format(val) {
      return _moment["default"].utc(val).format(hintFormat);
    }
  }))) : null));
};

var StyledHint = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.textColorLT;
});

var HintContent = function HintContent(_ref3) {
  var x = _ref3.x,
      y = _ref3.y,
      format = _ref3.format;
  return _react["default"].createElement(StyledHint, null, _react["default"].createElement("div", {
    className: "hint--x"
  }, format(x)), _react["default"].createElement("div", {
    className: "row"
  }, y));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1wbG90LmpzIl0sIm5hbWVzIjpbImNoYXJ0TWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiY2hhcnRIIiwiY29udGFpbmVySCIsImhpc3RvZ3JhbVN0eWxlIiwiaGlnaGxpZ2h0VyIsInVuSGlnaGxpZ2h0ZWRXIiwiUmFuZ2VQbG90RmFjdG9yeSIsImRlcHMiLCJSYW5nZUJydXNoRmFjdG9yeSIsIlJhbmdlQnJ1c2giLCJSYW5nZVBsb3QiLCJob3ZlcmVkRFAiLCJwcm9wcyIsImxpbmVDaGFydCIsInhEb21haW4iLCJkb21haW5TZWxlY3RvciIsImRvbWFpbiIsInNldFN0YXRlIiwib25CcnVzaCIsInJhbmdlIiwidmFsdWUiLCJ3aWR0aCIsInBsb3RUeXBlIiwiaGlzdG9ncmFtIiwieDAiLCJsZW5ndGgiLCJ4MSIsImJydXNoQ29tcG9uZW50IiwiaGVpZ2h0IiwicG9zaXRpb24iLCJzdGF0ZSIsIm9uTW91c2VNb3ZlIiwieURvbWFpbiIsImhpbnRGb3JtYXR0ZXIiLCJzZXJpZXMiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwib2JqZWN0Iiwic3RyaW5nIiwiaXNFbmxhcmdlZCIsImJvb2wiLCJvbkJsdXIiLCJmdW5jIiwiSGlzdG9ncmFtIiwibWFyZ2luIiwiYmFyV2lkdGgiLCJ4IiwieSIsImQiLCJjb3VudCIsIm1hcmdpblRvcCIsIm1hcCIsImJhciIsImluUmFuZ2UiLCJ3UmF0aW8iLCJMaW5lQ2hhcnRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiSGlzdG9ncmFtV3JhcHBlciIsInN2ZyIsInRoZW1lIiwiaGlzdG9ncmFtRmlsbE91dFJhbmdlIiwiaGlzdG9ncmFtRmlsbEluUmFuZ2UiLCJMaW5lQ2hhcnQiLCJoaW50Rm9ybWF0IiwiY29sb3IiLCJkYXRhIiwiY2hpbGRyZW4iLCJicnVzaERhdGEiLCJjdXN0b21Db21wb25lbnQiLCJ2YWwiLCJtb21lbnQiLCJ1dGMiLCJmb3JtYXQiLCJTdHlsZWRIaW50IiwidGV4dENvbG9yTFQiLCJIaW50Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBRztBQUFDQyxFQUFBQSxHQUFHLEVBQUUsQ0FBTjtBQUFTQyxFQUFBQSxNQUFNLEVBQUUsQ0FBakI7QUFBb0JDLEVBQUFBLElBQUksRUFBRSxDQUExQjtBQUE2QkMsRUFBQUEsS0FBSyxFQUFFO0FBQXBDLENBQXBCO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFDQSxJQUFNQyxVQUFVLEdBQUcsRUFBbkI7QUFDQSxJQUFNQyxjQUFjLEdBQUc7QUFDckJDLEVBQUFBLFVBQVUsRUFBRSxHQURTO0FBRXJCQyxFQUFBQSxjQUFjLEVBQUU7QUFGSyxDQUF2QjtBQUtBQyxnQkFBZ0IsQ0FBQ0MsSUFBakIsR0FBd0IsQ0FBQ0Msc0JBQUQsQ0FBeEI7O0FBRWUsU0FBU0YsZ0JBQVQsQ0FBMEJHLFVBQTFCLEVBQXNDO0FBQUEsTUFDN0NDLFNBRDZDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ0dBaUJ6QztBQUNOQyxRQUFBQSxTQUFTLEVBQUU7QUFETCxPQWpCeUM7QUFBQSx5R0FxQmhDLFVBQUFDLEtBQUs7QUFBQSxlQUFJQSxLQUFLLENBQUNDLFNBQU4sSUFBbUJELEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsT0FBdkM7QUFBQSxPQXJCMkI7QUFBQSx3R0FzQmpDLDhCQUFlLE1BQUtDLGNBQXBCLEVBQW9DLFVBQUFDLE1BQU07QUFBQSxlQUN4RCw2Q0FBMkJBLE1BQTNCLENBRHdE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LEVBQTVDO0FBQWdELElBQUEsS0FBSyxFQUFFMEQsS0FBdkQ7QUFBOEQsSUFBQSxJQUFJLEVBQUU7QUFBcEUsSUFGRixFQUdFLGdDQUFDLHlCQUFEO0FBQWlCLElBQUEsSUFBSSxFQUFFRztBQUF2QixJQUhGLEVBSUc3RCxTQUFTLEdBQ1IsZ0NBQUMsY0FBRDtBQUFNLElBQUEsS0FBSyxFQUFFQTtBQUFiLEtBQ0UsZ0NBQUMsV0FBRCxnQ0FBaUJBLFNBQWpCO0FBQTRCLElBQUEsTUFBTSxFQUFFLGdCQUFBK0QsR0FBRztBQUFBLGFBQUlDLG1CQUFPQyxHQUFQLENBQVdGLEdBQVgsRUFBZ0JHLE1BQWhCLENBQXVCVCxVQUF2QixDQUFKO0FBQUE7QUFBdkMsS0FERixDQURRLEdBSU4sSUFSTixDQURGLENBREY7QUFjRCxDQTVCRDs7QUE4QkEsSUFBTVUsVUFBVSxHQUFHbEIsNkJBQU9DLEdBQVYscUJBR0wsVUFBQWpELEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNvRCxLQUFOLENBQVllLFdBQWhCO0FBQUEsQ0FIQSxDQUFoQjs7QUFVQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUU5QixDQUFGLFNBQUVBLENBQUY7QUFBQSxNQUFLQyxDQUFMLFNBQUtBLENBQUw7QUFBQSxNQUFRMEIsTUFBUixTQUFRQSxNQUFSO0FBQUEsU0FDbEIsZ0NBQUMsVUFBRCxRQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUEwQkEsTUFBTSxDQUFDM0IsQ0FBRCxDQUFoQyxDQURGLEVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQXNCQyxDQUF0QixDQUZGLENBRGtCO0FBQUEsQ0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge3NjYWxlTGluZWFyfSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge21heH0gZnJvbSAnZDMtYXJyYXknO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHtMaW5lU2VyaWVzLCBYWVBsb3QsIEN1c3RvbVNWR1NlcmllcywgSGludCwgTWFya1Nlcmllc30gZnJvbSAncmVhY3QtdmlzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBSYW5nZUJydXNoRmFjdG9yeSBmcm9tICcuL3JhbmdlLWJydXNoJztcbmltcG9ydCB7Z2V0VGltZVdpZGdldEhpbnRGb3JtYXR0ZXJ9IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XG5cbmNvbnN0IGNoYXJ0TWFyZ2luID0ge3RvcDogOCwgYm90dG9tOiAwLCBsZWZ0OiAwLCByaWdodDogMH07XG5jb25zdCBjaGFydEggPSA1MjtcbmNvbnN0IGNvbnRhaW5lckggPSA2ODtcbmNvbnN0IGhpc3RvZ3JhbVN0eWxlID0ge1xuICBoaWdobGlnaHRXOiAwLjcsXG4gIHVuSGlnaGxpZ2h0ZWRXOiAwLjRcbn07XG5cblJhbmdlUGxvdEZhY3RvcnkuZGVwcyA9IFtSYW5nZUJydXNoRmFjdG9yeV07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmdlUGxvdEZhY3RvcnkoUmFuZ2VCcnVzaCkge1xuICBjbGFzcyBSYW5nZVBsb3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgICAgIGhpc3RvZ3JhbTogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgeDA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgeDE6IFByb3BUeXBlcy5udW1iZXJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBsaW5lQ2hhcnQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBwbG90VHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGlzRW5sYXJnZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICBob3ZlcmVkRFA6IG51bGxcbiAgICB9O1xuXG4gICAgZG9tYWluU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5saW5lQ2hhcnQgJiYgcHJvcHMubGluZUNoYXJ0LnhEb21haW47XG4gICAgaGludEZvcm1hdHRlciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZG9tYWluU2VsZWN0b3IsIGRvbWFpbiA9PlxuICAgICAgZ2V0VGltZVdpZGdldEhpbnRGb3JtYXR0ZXIoZG9tYWluKVxuICAgICk7XG5cbiAgICBvbk1vdXNlTW92ZSA9IGhvdmVyZWREUCA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtob3ZlcmVkRFB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge29uQnJ1c2gsIHJhbmdlLCB2YWx1ZSwgd2lkdGgsIHBsb3RUeXBlLCBsaW5lQ2hhcnQsIGhpc3RvZ3JhbX0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgZG9tYWluID0gW2hpc3RvZ3JhbVswXS54MCwgaGlzdG9ncmFtW2hpc3RvZ3JhbS5sZW5ndGggLSAxXS54MV07XG5cbiAgICAgIGNvbnN0IGJydXNoQ29tcG9uZW50ID0gKFxuICAgICAgICA8UmFuZ2VCcnVzaCBkb21haW49e2RvbWFpbn0gb25CcnVzaD17b25CcnVzaH0gcmFuZ2U9e3JhbmdlfSB2YWx1ZT17dmFsdWV9IHdpZHRoPXt3aWR0aH0gLz5cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgaGVpZ2h0OiBgJHtjb250YWluZXJIfXB4YCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwbG90VHlwZSA9PT0gJ2xpbmVDaGFydCcgPyAoXG4gICAgICAgICAgICA8TGluZUNoYXJ0XG4gICAgICAgICAgICAgIGhvdmVyZWREUD17dGhpcy5zdGF0ZS5ob3ZlcmVkRFB9XG4gICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXtjb250YWluZXJIfVxuICAgICAgICAgICAgICBtYXJnaW49e2NoYXJ0TWFyZ2lufVxuICAgICAgICAgICAgICBjaGlsZHJlbj17YnJ1c2hDb21wb25lbnR9XG4gICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLm9uTW91c2VNb3ZlfVxuICAgICAgICAgICAgICB5RG9tYWluPXtsaW5lQ2hhcnQueURvbWFpbn1cbiAgICAgICAgICAgICAgaGludEZvcm1hdD17dGhpcy5oaW50Rm9ybWF0dGVyKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgICBkYXRhPXtsaW5lQ2hhcnQuc2VyaWVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEhpc3RvZ3JhbVxuICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgIGhlaWdodD17Y2hhcnRIfVxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIG1hcmdpbj17Y2hhcnRNYXJnaW59XG4gICAgICAgICAgICAgIGhpc3RvZ3JhbT17aGlzdG9ncmFtfVxuICAgICAgICAgICAgICBicnVzaENvbXBvbmVudD17YnJ1c2hDb21wb25lbnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFJhbmdlUGxvdDtcbn1cblxuY29uc3QgSGlzdG9ncmFtID0gKHt3aWR0aCwgaGVpZ2h0LCBtYXJnaW4sIGhpc3RvZ3JhbSwgdmFsdWUsIGJydXNoQ29tcG9uZW50fSkgPT4ge1xuICBjb25zdCBkb21haW4gPSBbaGlzdG9ncmFtWzBdLngwLCBoaXN0b2dyYW1baGlzdG9ncmFtLmxlbmd0aCAtIDFdLngxXTtcbiAgY29uc3QgYmFyV2lkdGggPSB3aWR0aCAvIGhpc3RvZ3JhbS5sZW5ndGg7XG5cbiAgY29uc3QgeCA9IHNjYWxlTGluZWFyKClcbiAgICAuZG9tYWluKGRvbWFpbilcbiAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgY29uc3QgeSA9IHNjYWxlTGluZWFyKClcbiAgICAuZG9tYWluKFswLCBtYXgoaGlzdG9ncmFtLCBkID0+IGQuY291bnQpXSlcbiAgICAucmFuZ2UoWzAsIGhlaWdodF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEhpc3RvZ3JhbVdyYXBwZXIgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gc3R5bGU9e3ttYXJnaW5Ub3A6IGAke21hcmdpbi50b3B9cHhgfX0+XG4gICAgICA8ZyBjbGFzc05hbWU9XCJoaXN0b2dyYW0tYmFyc1wiPlxuICAgICAgICB7aGlzdG9ncmFtLm1hcChiYXIgPT4ge1xuICAgICAgICAgIGNvbnN0IGluUmFuZ2UgPSBiYXIueDAgPj0gdmFsdWVbMF0gJiYgYmFyLngxIDw9IHZhbHVlWzFdO1xuICAgICAgICAgIGNvbnN0IHdSYXRpbyA9IGluUmFuZ2UgPyBoaXN0b2dyYW1TdHlsZS5oaWdobGlnaHRXIDogaGlzdG9ncmFtU3R5bGUudW5IaWdobGlnaHRlZFc7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsnaW4tcmFuZ2UnOiBpblJhbmdlfSl9XG4gICAgICAgICAgICAgIGtleT17YmFyLngwfVxuICAgICAgICAgICAgICBoZWlnaHQ9e3koYmFyLmNvdW50KX1cbiAgICAgICAgICAgICAgd2lkdGg9e2JhcldpZHRoICogd1JhdGlvfVxuICAgICAgICAgICAgICB4PXt4KGJhci54MCkgKyAoYmFyV2lkdGggKiAoMSAtIHdSYXRpbykpIC8gMn1cbiAgICAgICAgICAgICAgcng9ezF9XG4gICAgICAgICAgICAgIHJ5PXsxfVxuICAgICAgICAgICAgICB5PXtoZWlnaHQgLSB5KGJhci5jb3VudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9nPlxuICAgICAge2JydXNoQ29tcG9uZW50fVxuICAgIDwvSGlzdG9ncmFtV3JhcHBlcj5cbiAgKTtcbn07XG5cbmNvbnN0IExpbmVDaGFydFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAucnYteHktcGxvdF9faW5uZXIgcGF0aCB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2Utd2lkdGg6IDEuNTtcbiAgfVxuYDtcblxuY29uc3QgSGlzdG9ncmFtV3JhcHBlciA9IHN0eWxlZC5zdmdgXG4gIC5oaXN0b2dyYW0tYmFycyB7XG4gICAgcmVjdCB7XG4gICAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhpc3RvZ3JhbUZpbGxPdXRSYW5nZX07XG4gICAgfVxuICAgIHJlY3QuaW4tcmFuZ2Uge1xuICAgICAgZmlsbDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oaXN0b2dyYW1GaWxsSW5SYW5nZX07XG4gICAgfVxuICB9XG5gO1xuY29uc3QgTGluZUNoYXJ0ID0gKHtcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgeURvbWFpbixcbiAgaGludEZvcm1hdCxcbiAgaG92ZXJlZERQLFxuICBtYXJnaW4sXG4gIGNvbG9yLFxuICBkYXRhLFxuICBvbk1vdXNlTW92ZSxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3QgYnJ1c2hEYXRhID0gW3t4OiBkYXRhWzBdLngsIHk6IHlEb21haW5bMV0sIGN1c3RvbUNvbXBvbmVudDogKCkgPT4gY2hpbGRyZW59XTtcblxuICByZXR1cm4gKFxuICAgIDxMaW5lQ2hhcnRXcmFwcGVyPlxuICAgICAgPFhZUGxvdCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBtYXJnaW49e3suLi5tYXJnaW4sIGJvdHRvbTogMTJ9fT5cbiAgICAgICAgPExpbmVTZXJpZXMgc3Ryb2tlV2lkdGg9ezJ9IGNvbG9yPXtjb2xvcn0gZGF0YT17ZGF0YX0gb25OZWFyZXN0WD17b25Nb3VzZU1vdmV9IC8+XG4gICAgICAgIDxNYXJrU2VyaWVzIGRhdGE9e2hvdmVyZWREUCA/IFtob3ZlcmVkRFBdIDogW119IGNvbG9yPXtjb2xvcn0gc2l6ZT17M30gLz5cbiAgICAgICAgPEN1c3RvbVNWR1NlcmllcyBkYXRhPXticnVzaERhdGF9IC8+XG4gICAgICAgIHtob3ZlcmVkRFAgPyAoXG4gICAgICAgICAgPEhpbnQgdmFsdWU9e2hvdmVyZWREUH0+XG4gICAgICAgICAgICA8SGludENvbnRlbnQgey4uLmhvdmVyZWREUH0gZm9ybWF0PXt2YWwgPT4gbW9tZW50LnV0Yyh2YWwpLmZvcm1hdChoaW50Rm9ybWF0KX0gLz5cbiAgICAgICAgICA8L0hpbnQ+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9YWVBsb3Q+XG4gICAgPC9MaW5lQ2hhcnRXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgU3R5bGVkSGludCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2Q4ZTA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xuICBmb250LXNpemU6IDlweDtcbiAgbWFyZ2luOiA0cHg7XG4gIHBhZGRpbmc6IDNweCA2cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbmA7XG5jb25zdCBIaW50Q29udGVudCA9ICh7eCwgeSwgZm9ybWF0fSkgPT4gKFxuICA8U3R5bGVkSGludD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhpbnQtLXhcIj57Zm9ybWF0KHgpfTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+e3l9PC9kaXY+XG4gIDwvU3R5bGVkSGludD5cbik7XG4iXX0=