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

var _d3Scale = require("d3-scale");

var _d3Selection = require("d3-selection");

var _d3Axis = require("d3-axis");

var _reselect = require("reselect");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  pointer-events: none;\n  position: absolute;\n\n  .axis text {\n    font-size: 9px;\n    fill: ", ";\n  }\n\n  .axis line,\n  .axis path {\n    fill: none;\n    stroke: ", ";\n    shape-rendering: crispEdges;\n    stroke-width: 2;\n  }\n\n  .axis .domain {\n    display: none;\n  }\n\n  .value {\n    fill: ", ";\n    font-size: 10px;\n\n    &.start {\n      text-anchor: start;\n    }\n\n    &.end {\n      text-anchor: end;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var MIN_TICK_WIDTH = 50;

var TimeSliderContainer = _styledComponents["default"].svg(_templateObject(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.sliderBarBgd;
}, function (props) {
  return props.theme.textColor;
});

var height = 30;

function TimeSliderMarkerFactory() {
  var TimeSliderMarker =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(TimeSliderMarker, _Component);

    function TimeSliderMarker() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, TimeSliderMarker);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(TimeSliderMarker)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "xAxis", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "domainSelector", function (props) {
        return props.domain;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "widthSelector", function (props) {
        return props.width;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaleSelector", (0, _reselect.createSelector)(_this.domainSelector, _this.widthSelector, function (domain, width) {
        return Array.isArray(domain) ? (0, _d3Scale.scaleUtc)().domain(domain).range([0, width]) : null;
      }));
      return _this;
    }

    (0, _createClass2["default"])(TimeSliderMarker, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._updateAxis(this.scaleSelector(this.props));
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.scaleSelector(this.props) !== this.scaleSelector(prevProps)) {
          this._updateAxis(this.scaleSelector(this.props));
        }
      }
    }, {
      key: "_updateAxis",
      value: function _updateAxis(scale) {
        if (!scale) {
          return;
        } // TODO: pass in ticks if interval is defined


        var ticks = Math.floor(this.props.width / MIN_TICK_WIDTH);
        var xAxis = (0, _d3Axis.axisBottom)(scale).ticks(ticks).tickSize(8).tickPadding(6);
        (0, _d3Selection.select)(this.xAxis.current).call(xAxis);
      }
    }, {
      key: "render",
      value: function render() {
        return _react["default"].createElement(TimeSliderContainer, {
          className: "time-slider-marker",
          width: this.props.width,
          height: height
        }, _react["default"].createElement("g", {
          className: "x axis",
          ref: this.xAxis,
          transform: "translate(0, 0)"
        }));
      }
    }]);
    return TimeSliderMarker;
  }(_react.Component);

  (0, _defineProperty2["default"])(TimeSliderMarker, "propTypes", {
    domain: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    width: _propTypes["default"].number.isRequired
  });
  return TimeSliderMarker;
}

var _default = TimeSliderMarkerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90aW1lLXNsaWRlci1tYXJrZXIuanMiXSwibmFtZXMiOlsiTUlOX1RJQ0tfV0lEVEgiLCJUaW1lU2xpZGVyQ29udGFpbmVyIiwic3R5bGVkIiwic3ZnIiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvciIsInNsaWRlckJhckJnZCIsImhlaWdodCIsIlRpbWVTbGlkZXJNYXJrZXJGYWN0b3J5IiwiVGltZVNsaWRlck1hcmtlciIsImRvbWFpbiIsIndpZHRoIiwiZG9tYWluU2VsZWN0b3IiLCJ3aWR0aFNlbGVjdG9yIiwiQXJyYXkiLCJpc0FycmF5IiwicmFuZ2UiLCJfdXBkYXRlQXhpcyIsInNjYWxlU2VsZWN0b3IiLCJwcmV2UHJvcHMiLCJzY2FsZSIsInRpY2tzIiwiTWF0aCIsImZsb29yIiwieEF4aXMiLCJ0aWNrU2l6ZSIsInRpY2tQYWRkaW5nIiwiY3VycmVudCIsImNhbGwiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiYW55IiwiaXNSZXF1aXJlZCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsRUFBdkI7O0FBRUEsSUFBTUMsbUJBQW1CLEdBQUdDLDZCQUFPQyxHQUFWLG9CQU1iLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsU0FBaEI7QUFBQSxDQU5RLEVBWVgsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxZQUFoQjtBQUFBLENBWk0sRUFzQmIsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxTQUFoQjtBQUFBLENBdEJRLENBQXpCOztBQW1DQSxJQUFNRSxNQUFNLEdBQUcsRUFBZjs7QUFFQSxTQUFTQyx1QkFBVCxHQUFtQztBQUFBLE1BQzNCQyxnQkFEMkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxnR0FpQnZCLHVCQWpCdUI7QUFBQSx5R0FtQmQsVUFBQU4sS0FBSztBQUFBLGVBQUlBLEtBQUssQ0FBQ08sTUFBVjtBQUFBLE9BbkJTO0FBQUEsd0dBb0JmLFVBQUFQLEtBQUs7QUFBQSxlQUFJQSxLQUFLLENBQUNRLEtBQVY7QUFBQSxPQXBCVTtBQUFBLHdHQXFCZiw4QkFBZSxNQUFLQyxjQUFwQixFQUFvQyxNQUFLQyxhQUF6QyxFQUF3RCxVQUFDSCxNQUFELEVBQVNDLEtBQVQ7QUFBQSxlQUN0RUcsS0FBSyxDQUFDQyxPQUFOLENBQWNMLE1BQWQsSUFDSSx5QkFDR0EsTUFESCxDQUNVQSxNQURWLEVBRUdNLEtBRkgsQ0FFUyxDQUFDLENBQUQsRUFBSUwsS0FBSixDQUZULENBREosR0FJSSxJQUxrRTtBQUFBLE9BQXhELENBckJlO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMENBT1g7QUFDbEIsYUFBS00sV0FBTCxDQUFpQixLQUFLQyxhQUFMLENBQW1CLEtBQUtmLEtBQXhCLENBQWpCO0FBQ0Q7QUFUOEI7QUFBQTtBQUFBLHlDQVdaZ0IsU0FYWSxFQVdEO0FBQzVCLFlBQUksS0FBS0QsYUFBTCxDQUFtQixLQUFLZixLQUF4QixNQUFtQyxLQUFLZSxhQUFMLENBQW1CQyxTQUFuQixDQUF2QyxFQUFzRTtBQUNwRSxlQUFLRixXQUFMLENBQWlCLEtBQUtDLGFBQUwsQ0FBbUIsS0FBS2YsS0FBeEIsQ0FBakI7QUFDRDtBQUNGO0FBZjhCO0FBQUE7QUFBQSxrQ0E2Qm5CaUIsS0E3Qm1CLEVBNkJaO0FBQ2pCLFlBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1Y7QUFDRCxTQUhnQixDQUtqQjs7O0FBQ0EsWUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLcEIsS0FBTCxDQUFXUSxLQUFYLEdBQW1CWixjQUE5QixDQUFkO0FBRUEsWUFBTXlCLEtBQUssR0FBRyx3QkFBV0osS0FBWCxFQUNYQyxLQURXLENBQ0xBLEtBREssRUFFWEksUUFGVyxDQUVGLENBRkUsRUFHWEMsV0FIVyxDQUdDLENBSEQsQ0FBZDtBQUtBLGlDQUFPLEtBQUtGLEtBQUwsQ0FBV0csT0FBbEIsRUFBMkJDLElBQTNCLENBQWdDSixLQUFoQztBQUNEO0FBM0M4QjtBQUFBO0FBQUEsK0JBNkN0QjtBQUNQLGVBQ0UsZ0NBQUMsbUJBQUQ7QUFDRSxVQUFBLFNBQVMsRUFBQyxvQkFEWjtBQUVFLFVBQUEsS0FBSyxFQUFFLEtBQUtyQixLQUFMLENBQVdRLEtBRnBCO0FBR0UsVUFBQSxNQUFNLEVBQUVKO0FBSFYsV0FLRTtBQUFHLFVBQUEsU0FBUyxFQUFDLFFBQWI7QUFBc0IsVUFBQSxHQUFHLEVBQUUsS0FBS2lCLEtBQWhDO0FBQXVDLFVBQUEsU0FBUyxFQUFDO0FBQWpELFVBTEYsQ0FERjtBQVNEO0FBdkQ4QjtBQUFBO0FBQUEsSUFDRkssZ0JBREU7O0FBQUEsbUNBQzNCcEIsZ0JBRDJCLGVBRVo7QUFDakJDLElBQUFBLE1BQU0sRUFBRW9CLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsR0FBNUIsRUFBaUNDLFVBRHhCO0FBRWpCdEIsSUFBQUEsS0FBSyxFQUFFbUIsc0JBQVVJLE1BQVYsQ0FBaUJEO0FBRlAsR0FGWTtBQTBEakMsU0FBT3hCLGdCQUFQO0FBQ0Q7O2VBRWNELHVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge3NjYWxlVXRjfSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCB7YXhpc0JvdHRvbX0gZnJvbSAnZDMtYXhpcyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgTUlOX1RJQ0tfV0lEVEggPSA1MDtcblxuY29uc3QgVGltZVNsaWRlckNvbnRhaW5lciA9IHN0eWxlZC5zdmdgXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgLmF4aXMgdGV4dCB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZmlsbDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICB9XG5cbiAgLmF4aXMgbGluZSxcbiAgLmF4aXMgcGF0aCB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVyQmFyQmdkfTtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xuICB9XG5cbiAgLmF4aXMgLmRvbWFpbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC52YWx1ZSB7XG4gICAgZmlsbDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgICYuc3RhcnQge1xuICAgICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xuICAgIH1cblxuICAgICYuZW5kIHtcbiAgICAgIHRleHQtYW5jaG9yOiBlbmQ7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBoZWlnaHQgPSAzMDtcblxuZnVuY3Rpb24gVGltZVNsaWRlck1hcmtlckZhY3RvcnkoKSB7XG4gIGNsYXNzIFRpbWVTbGlkZXJNYXJrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBkb21haW46IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5fdXBkYXRlQXhpcyh0aGlzLnNjYWxlU2VsZWN0b3IodGhpcy5wcm9wcykpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnNjYWxlU2VsZWN0b3IodGhpcy5wcm9wcykgIT09IHRoaXMuc2NhbGVTZWxlY3RvcihwcmV2UHJvcHMpKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUF4aXModGhpcy5zY2FsZVNlbGVjdG9yKHRoaXMucHJvcHMpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB4QXhpcyA9IGNyZWF0ZVJlZigpO1xuXG4gICAgZG9tYWluU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5kb21haW47XG4gICAgd2lkdGhTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLndpZHRoO1xuICAgIHNjYWxlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmRvbWFpblNlbGVjdG9yLCB0aGlzLndpZHRoU2VsZWN0b3IsIChkb21haW4sIHdpZHRoKSA9PlxuICAgICAgQXJyYXkuaXNBcnJheShkb21haW4pXG4gICAgICAgID8gc2NhbGVVdGMoKVxuICAgICAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgICAgOiBudWxsXG4gICAgKTtcblxuICAgIF91cGRhdGVBeGlzKHNjYWxlKSB7XG4gICAgICBpZiAoIXNjYWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogcGFzcyBpbiB0aWNrcyBpZiBpbnRlcnZhbCBpcyBkZWZpbmVkXG4gICAgICBjb25zdCB0aWNrcyA9IE1hdGguZmxvb3IodGhpcy5wcm9wcy53aWR0aCAvIE1JTl9USUNLX1dJRFRIKTtcblxuICAgICAgY29uc3QgeEF4aXMgPSBheGlzQm90dG9tKHNjYWxlKVxuICAgICAgICAudGlja3ModGlja3MpXG4gICAgICAgIC50aWNrU2l6ZSg4KVxuICAgICAgICAudGlja1BhZGRpbmcoNik7XG5cbiAgICAgIHNlbGVjdCh0aGlzLnhBeGlzLmN1cnJlbnQpLmNhbGwoeEF4aXMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaW1lU2xpZGVyQ29udGFpbmVyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGltZS1zbGlkZXItbWFya2VyXCJcbiAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgPlxuICAgICAgICAgIDxnIGNsYXNzTmFtZT1cInggYXhpc1wiIHJlZj17dGhpcy54QXhpc30gdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAsIDApXCIgLz5cbiAgICAgICAgPC9UaW1lU2xpZGVyQ29udGFpbmVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gVGltZVNsaWRlck1hcmtlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZVNsaWRlck1hcmtlckZhY3Rvcnk7XG4iXX0=