"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapPopoverFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layerHoverInfo = _interopRequireDefault(require("./layer-hover-info"));

var _coordinateInfo = _interopRequireDefault(require("./coordinate-info"));

var _icons = require("../common/icons");

var _errorBoundary = _interopRequireDefault(require("../common/error-boundary"));

var _reactIntl = require("react-intl");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  left: 50%;\n  transform: rotate(30deg);\n  top: 10px;\n  color: ", ";\n\n  &.popover-arrow-left {\n    left: 40%;\n    transform: rotate(0deg);\n  }\n\n  &.popover-arrow-right {\n    left: 60%;\n    transform: rotate(0deg);\n  }\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  font-size: 11px;\n  font-weight: 500;\n  background-color: ", ";\n  color: ", ";\n  z-index: 1000;\n  position: absolute;\n  overflow-x: auto;\n  box-shadow: ", ";\n\n  :hover {\n    background-color: ", ";\n  }\n\n  .gutter {\n    height: 6px;\n    margin-bottom: 20px;\n  }\n\n  .primary-label {\n    color: ", ";\n    position: absolute;\n    right: 18px;\n    top: 10px;\n    font-size: 10px;\n  }\n\n  table {\n    margin: 2px 12px 12px 12px;\n    width: auto;\n\n    tbody {\n      border-top: transparent;\n      border-bottom: transparent;\n    }\n\n    td {\n      border-color: transparent;\n      padding: 4px;\n      color: ", ";\n    }\n\n    td.row__value {\n      text-align: right;\n      font-weight: 500;\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var MAX_WIDTH = 500;
var MAX_HEIGHT = 600;

var StyledMapPopover = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.scrollBar;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.panelBoxShadow;
}, function (props) {
  return "".concat(props.theme.panelBackground, "dd");
}, function (props) {
  return props.theme.notificationColors.success;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

var StyledIcon = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.linkBtnColor;
});

MapPopoverFactory.deps = [_layerHoverInfo["default"], _coordinateInfo["default"]];

function MapPopoverFactory(LayerHoverInfo, CoordinateInfo) {
  var MapPopover =
  /*#__PURE__*/
  function (_PureComponent) {
    (0, _inherits2["default"])(MapPopover, _PureComponent);

    function MapPopover(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, MapPopover);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MapPopover).call(this, props));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "popover", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "moveLeft", function () {
        _this.setState({
          isLeft: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "moveRight", function () {
        _this.setState({
          isLeft: false
        });
      });
      _this.state = {
        width: 380,
        height: 160,
        isLeft: false
      };
      return _this;
    }

    (0, _createClass2["default"])(MapPopover, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._setContainerSize();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this._setContainerSize();
      }
    }, {
      key: "_setContainerSize",
      value: function _setContainerSize() {
        var node = this.popover.current;

        if (!node) {
          return;
        }

        var width = Math.min(Math.round(node.scrollWidth), MAX_WIDTH);
        var height = Math.min(Math.round(node.scrollHeight), MAX_HEIGHT);

        if (width !== this.state.width || height !== this.state.height) {
          this.setState({
            width: width,
            height: height
          });
        }
      }
    }, {
      key: "_getPosition",
      value: function _getPosition(x, y, isLeft) {
        var topOffset = 20;
        var leftOffset = 20;
        var _this$props = this.props,
            mapW = _this$props.mapW,
            mapH = _this$props.mapH;
        var _this$state = this.state,
            width = _this$state.width,
            height = _this$state.height;
        var pos = {};

        if (x + leftOffset + width > mapW || isLeft) {
          pos.right = mapW - x + leftOffset;
        } else {
          pos.left = x + leftOffset;
        }

        if (y + topOffset + height > mapH) {
          pos.bottom = 10;
        } else {
          pos.top = y + topOffset;
        }

        return pos;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            x = _this$props2.x,
            y = _this$props2.y,
            frozen = _this$props2.frozen,
            coordinate = _this$props2.coordinate,
            layerHoverProp = _this$props2.layerHoverProp,
            isBase = _this$props2.isBase,
            zoom = _this$props2.zoom;
        var isLeft = this.state.isLeft;
        var style = Number.isFinite(x) && Number.isFinite(y) ? this._getPosition(x, y, isLeft) : {};
        return _react["default"].createElement(_errorBoundary["default"], null, _react["default"].createElement(StyledMapPopover, {
          ref: this.popover,
          className: "map-popover",
          style: _objectSpread({}, style, {
            maxWidth: MAX_WIDTH
          })
        }, frozen ? _react["default"].createElement("div", {
          className: "map-popover__top"
        }, _react["default"].createElement("div", {
          className: "gutter"
        }), !isLeft && _react["default"].createElement(StyledIcon, {
          className: "popover-arrow-left",
          onClick: this.moveLeft
        }, _react["default"].createElement(_icons.ArrowLeft, null)), _react["default"].createElement(StyledIcon, {
          className: "popover-pin",
          onClick: this.props.onClose
        }, _react["default"].createElement(_icons.Pin, {
          height: "16px"
        })), isLeft && _react["default"].createElement(StyledIcon, {
          className: "popover-arrow-right",
          onClick: this.moveRight
        }, _react["default"].createElement(_icons.ArrowRight, null)), isBase && _react["default"].createElement("div", {
          className: "primary-label"
        }, _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "mapPopover.primary"
        }))) : null, Array.isArray(coordinate) && _react["default"].createElement(CoordinateInfo, {
          coordinate: coordinate,
          zoom: zoom
        }), layerHoverProp && _react["default"].createElement(LayerHoverInfo, layerHoverProp)));
      }
    }]);
    return MapPopover;
  }(_react.PureComponent);

  (0, _defineProperty2["default"])(MapPopover, "propTypes", {
    layerHoverProp: _propTypes["default"].object,
    coordinate: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].bool]),
    frozen: _propTypes["default"].bool,
    x: _propTypes["default"].number,
    y: _propTypes["default"].number,
    z: _propTypes["default"].number,
    mapW: _propTypes["default"].number.isRequired,
    mapH: _propTypes["default"].number.isRequired,
    onClose: _propTypes["default"].func.isRequired,
    isBase: _propTypes["default"].bool
  });
  return (0, _reactIntl.injectIntl)(MapPopover);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9tYXAtcG9wb3Zlci5qcyJdLCJuYW1lcyI6WyJNQVhfV0lEVEgiLCJNQVhfSEVJR0hUIiwiU3R5bGVkTWFwUG9wb3ZlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzY3JvbGxCYXIiLCJwYW5lbEJhY2tncm91bmQiLCJ0ZXh0Q29sb3IiLCJwYW5lbEJveFNoYWRvdyIsIm5vdGlmaWNhdGlvbkNvbG9ycyIsInN1Y2Nlc3MiLCJ0ZXh0Q29sb3JIbCIsIlN0eWxlZEljb24iLCJwcmltYXJ5QnRuQmdkIiwibGlua0J0bkNvbG9yIiwiTWFwUG9wb3ZlckZhY3RvcnkiLCJkZXBzIiwiTGF5ZXJIb3ZlckluZm9GYWN0b3J5IiwiQ29vcmRpbmF0ZUluZm9GYWN0b3J5IiwiTGF5ZXJIb3ZlckluZm8iLCJDb29yZGluYXRlSW5mbyIsIk1hcFBvcG92ZXIiLCJzZXRTdGF0ZSIsImlzTGVmdCIsInN0YXRlIiwid2lkdGgiLCJoZWlnaHQiLCJfc2V0Q29udGFpbmVyU2l6ZSIsIm5vZGUiLCJwb3BvdmVyIiwiY3VycmVudCIsIk1hdGgiLCJtaW4iLCJyb3VuZCIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0IiwieCIsInkiLCJ0b3BPZmZzZXQiLCJsZWZ0T2Zmc2V0IiwibWFwVyIsIm1hcEgiLCJwb3MiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJ0b3AiLCJmcm96ZW4iLCJjb29yZGluYXRlIiwibGF5ZXJIb3ZlclByb3AiLCJpc0Jhc2UiLCJ6b29tIiwic3R5bGUiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsIl9nZXRQb3NpdGlvbiIsIm1heFdpZHRoIiwibW92ZUxlZnQiLCJvbkNsb3NlIiwibW92ZVJpZ2h0IiwiQXJyYXkiLCJpc0FycmF5IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9iamVjdCIsIm9uZU9mVHlwZSIsImFycmF5IiwiYm9vbCIsIm51bWJlciIsInoiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxHQUFsQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxHQUFuQjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQ2xCLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsU0FBaEI7QUFBQSxDQURhLEVBSUEsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxlQUFoQjtBQUFBLENBSkwsRUFLWCxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlHLFNBQWhCO0FBQUEsQ0FMTSxFQVNOLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksY0FBaEI7QUFBQSxDQVRDLEVBWUUsVUFBQUwsS0FBSztBQUFBLG1CQUFPQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsZUFBbkI7QUFBQSxDQVpQLEVBcUJULFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssa0JBQVosQ0FBK0JDLE9BQW5DO0FBQUEsQ0FyQkksRUF3Q1AsVUFBQVAsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxTQUFoQjtBQUFBLENBeENFLEVBOENQLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU8sV0FBaEI7QUFBQSxDQTlDRSxDQUF0Qjs7QUFtREEsSUFBTUMsVUFBVSxHQUFHWCw2QkFBT0MsR0FBVixxQkFLTCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlTLGFBQWhCO0FBQUEsQ0FMQSxFQW1CSCxVQUFBVixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlVLFlBQWhCO0FBQUEsQ0FuQkYsQ0FBaEI7O0FBdUJBQyxpQkFBaUIsQ0FBQ0MsSUFBbEIsR0FBeUIsQ0FBQ0MsMEJBQUQsRUFBd0JDLDBCQUF4QixDQUF6Qjs7QUFFZSxTQUFTSCxpQkFBVCxDQUEyQkksY0FBM0IsRUFBMkNDLGNBQTNDLEVBQTJEO0FBQUEsTUFDbEVDLFVBRGtFO0FBQUE7QUFBQTtBQUFBOztBQWV0RSx3QkFBWWxCLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQix3SEFBTUEsS0FBTjtBQURpQixrR0FpQlQsdUJBakJTO0FBQUEsbUdBc0RSLFlBQU07QUFDZixjQUFLbUIsUUFBTCxDQUFjO0FBQUNDLFVBQUFBLE1BQU0sRUFBRTtBQUFULFNBQWQ7QUFDRCxPQXhEa0I7QUFBQSxvR0EwRFAsWUFBTTtBQUNoQixjQUFLRCxRQUFMLENBQWM7QUFBQ0MsVUFBQUEsTUFBTSxFQUFFO0FBQVQsU0FBZDtBQUNELE9BNURrQjtBQUVqQixZQUFLQyxLQUFMLEdBQWE7QUFDWEMsUUFBQUEsS0FBSyxFQUFFLEdBREk7QUFFWEMsUUFBQUEsTUFBTSxFQUFFLEdBRkc7QUFHWEgsUUFBQUEsTUFBTSxFQUFFO0FBSEcsT0FBYjtBQUZpQjtBQU9sQjs7QUF0QnFFO0FBQUE7QUFBQSwwQ0F3QmxEO0FBQ2xCLGFBQUtJLGlCQUFMO0FBQ0Q7QUExQnFFO0FBQUE7QUFBQSwyQ0E0QmpEO0FBQ25CLGFBQUtBLGlCQUFMO0FBQ0Q7QUE5QnFFO0FBQUE7QUFBQSwwQ0FrQ2xEO0FBQ2xCLFlBQU1DLElBQUksR0FBRyxLQUFLQyxPQUFMLENBQWFDLE9BQTFCOztBQUNBLFlBQUksQ0FBQ0YsSUFBTCxFQUFXO0FBQ1Q7QUFDRDs7QUFFRCxZQUFNSCxLQUFLLEdBQUdNLElBQUksQ0FBQ0MsR0FBTCxDQUFTRCxJQUFJLENBQUNFLEtBQUwsQ0FBV0wsSUFBSSxDQUFDTSxXQUFoQixDQUFULEVBQXVDcEMsU0FBdkMsQ0FBZDtBQUNBLFlBQU00QixNQUFNLEdBQUdLLElBQUksQ0FBQ0MsR0FBTCxDQUFTRCxJQUFJLENBQUNFLEtBQUwsQ0FBV0wsSUFBSSxDQUFDTyxZQUFoQixDQUFULEVBQXdDcEMsVUFBeEMsQ0FBZjs7QUFFQSxZQUFJMEIsS0FBSyxLQUFLLEtBQUtELEtBQUwsQ0FBV0MsS0FBckIsSUFBOEJDLE1BQU0sS0FBSyxLQUFLRixLQUFMLENBQVdFLE1BQXhELEVBQWdFO0FBQzlELGVBQUtKLFFBQUwsQ0FBYztBQUFDRyxZQUFBQSxLQUFLLEVBQUxBLEtBQUQ7QUFBUUMsWUFBQUEsTUFBTSxFQUFOQTtBQUFSLFdBQWQ7QUFDRDtBQUNGO0FBOUNxRTtBQUFBO0FBQUEsbUNBZ0R6RFUsQ0FoRHlELEVBZ0R0REMsQ0FoRHNELEVBZ0RuRGQsTUFoRG1ELEVBZ0QzQztBQUN6QixZQUFNZSxTQUFTLEdBQUcsRUFBbEI7QUFDQSxZQUFNQyxVQUFVLEdBQUcsRUFBbkI7QUFGeUIsMEJBR0osS0FBS3BDLEtBSEQ7QUFBQSxZQUdsQnFDLElBSGtCLGVBR2xCQSxJQUhrQjtBQUFBLFlBR1pDLElBSFksZUFHWkEsSUFIWTtBQUFBLDBCQUlELEtBQUtqQixLQUpKO0FBQUEsWUFJbEJDLEtBSmtCLGVBSWxCQSxLQUprQjtBQUFBLFlBSVhDLE1BSlcsZUFJWEEsTUFKVztBQUt6QixZQUFNZ0IsR0FBRyxHQUFHLEVBQVo7O0FBQ0EsWUFBSU4sQ0FBQyxHQUFHRyxVQUFKLEdBQWlCZCxLQUFqQixHQUF5QmUsSUFBekIsSUFBaUNqQixNQUFyQyxFQUE2QztBQUMzQ21CLFVBQUFBLEdBQUcsQ0FBQ0MsS0FBSixHQUFZSCxJQUFJLEdBQUdKLENBQVAsR0FBV0csVUFBdkI7QUFDRCxTQUZELE1BRU87QUFDTEcsVUFBQUEsR0FBRyxDQUFDRSxJQUFKLEdBQVdSLENBQUMsR0FBR0csVUFBZjtBQUNEOztBQUVELFlBQUlGLENBQUMsR0FBR0MsU0FBSixHQUFnQlosTUFBaEIsR0FBeUJlLElBQTdCLEVBQW1DO0FBQ2pDQyxVQUFBQSxHQUFHLENBQUNHLE1BQUosR0FBYSxFQUFiO0FBQ0QsU0FGRCxNQUVPO0FBQ0xILFVBQUFBLEdBQUcsQ0FBQ0ksR0FBSixHQUFVVCxDQUFDLEdBQUdDLFNBQWQ7QUFDRDs7QUFFRCxlQUFPSSxHQUFQO0FBQ0Q7QUFuRXFFO0FBQUE7QUFBQSwrQkE2RTdEO0FBQUEsMkJBQzBELEtBQUt2QyxLQUQvRDtBQUFBLFlBQ0FpQyxDQURBLGdCQUNBQSxDQURBO0FBQUEsWUFDR0MsQ0FESCxnQkFDR0EsQ0FESDtBQUFBLFlBQ01VLE1BRE4sZ0JBQ01BLE1BRE47QUFBQSxZQUNjQyxVQURkLGdCQUNjQSxVQURkO0FBQUEsWUFDMEJDLGNBRDFCLGdCQUMwQkEsY0FEMUI7QUFBQSxZQUMwQ0MsTUFEMUMsZ0JBQzBDQSxNQUQxQztBQUFBLFlBQ2tEQyxJQURsRCxnQkFDa0RBLElBRGxEO0FBQUEsWUFFQTVCLE1BRkEsR0FFVSxLQUFLQyxLQUZmLENBRUFELE1BRkE7QUFJUCxZQUFNNkIsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JsQixDQUFoQixLQUFzQmlCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQmpCLENBQWhCLENBQXRCLEdBQTJDLEtBQUtrQixZQUFMLENBQWtCbkIsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCZCxNQUF4QixDQUEzQyxHQUE2RSxFQUEzRjtBQUVBLGVBQ0UsZ0NBQUMseUJBQUQsUUFDRSxnQ0FBQyxnQkFBRDtBQUNFLFVBQUEsR0FBRyxFQUFFLEtBQUtNLE9BRFo7QUFFRSxVQUFBLFNBQVMsRUFBQyxhQUZaO0FBR0UsVUFBQSxLQUFLLG9CQUNBdUIsS0FEQTtBQUVISSxZQUFBQSxRQUFRLEVBQUUxRDtBQUZQO0FBSFAsV0FRR2lELE1BQU0sR0FDTDtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FDRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsVUFERixFQUVHLENBQUN4QixNQUFELElBQ0MsZ0NBQUMsVUFBRDtBQUFZLFVBQUEsU0FBUyxFQUFDLG9CQUF0QjtBQUEyQyxVQUFBLE9BQU8sRUFBRSxLQUFLa0M7QUFBekQsV0FDRSxnQ0FBQyxnQkFBRCxPQURGLENBSEosRUFPRSxnQ0FBQyxVQUFEO0FBQVksVUFBQSxTQUFTLEVBQUMsYUFBdEI7QUFBb0MsVUFBQSxPQUFPLEVBQUUsS0FBS3RELEtBQUwsQ0FBV3VEO0FBQXhELFdBQ0UsZ0NBQUMsVUFBRDtBQUFLLFVBQUEsTUFBTSxFQUFDO0FBQVosVUFERixDQVBGLEVBVUduQyxNQUFNLElBQ0wsZ0NBQUMsVUFBRDtBQUFZLFVBQUEsU0FBUyxFQUFDLHFCQUF0QjtBQUE0QyxVQUFBLE9BQU8sRUFBRSxLQUFLb0M7QUFBMUQsV0FDRSxnQ0FBQyxpQkFBRCxPQURGLENBWEosRUFlR1QsTUFBTSxJQUNMO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixXQUNFLGdDQUFDLDJCQUFEO0FBQWtCLFVBQUEsRUFBRSxFQUFDO0FBQXJCLFVBREYsQ0FoQkosQ0FESyxHQXNCSCxJQTlCTixFQStCR1UsS0FBSyxDQUFDQyxPQUFOLENBQWNiLFVBQWQsS0FBNkIsZ0NBQUMsY0FBRDtBQUFnQixVQUFBLFVBQVUsRUFBRUEsVUFBNUI7QUFBd0MsVUFBQSxJQUFJLEVBQUVHO0FBQTlDLFVBL0JoQyxFQWdDR0YsY0FBYyxJQUFJLGdDQUFDLGNBQUQsRUFBb0JBLGNBQXBCLENBaENyQixDQURGLENBREY7QUFzQ0Q7QUF6SHFFO0FBQUE7QUFBQSxJQUMvQ2Esb0JBRCtDOztBQUFBLG1DQUNsRXpDLFVBRGtFLGVBRW5EO0FBQ2pCNEIsSUFBQUEsY0FBYyxFQUFFYyxzQkFBVUMsTUFEVDtBQUVqQmhCLElBQUFBLFVBQVUsRUFBRWUsc0JBQVVFLFNBQVYsQ0FBb0IsQ0FBQ0Ysc0JBQVVHLEtBQVgsRUFBa0JILHNCQUFVSSxJQUE1QixDQUFwQixDQUZLO0FBR2pCcEIsSUFBQUEsTUFBTSxFQUFFZ0Isc0JBQVVJLElBSEQ7QUFJakIvQixJQUFBQSxDQUFDLEVBQUUyQixzQkFBVUssTUFKSTtBQUtqQi9CLElBQUFBLENBQUMsRUFBRTBCLHNCQUFVSyxNQUxJO0FBTWpCQyxJQUFBQSxDQUFDLEVBQUVOLHNCQUFVSyxNQU5JO0FBT2pCNUIsSUFBQUEsSUFBSSxFQUFFdUIsc0JBQVVLLE1BQVYsQ0FBaUJFLFVBUE47QUFRakI3QixJQUFBQSxJQUFJLEVBQUVzQixzQkFBVUssTUFBVixDQUFpQkUsVUFSTjtBQVNqQlosSUFBQUEsT0FBTyxFQUFFSyxzQkFBVVEsSUFBVixDQUFlRCxVQVRQO0FBVWpCcEIsSUFBQUEsTUFBTSxFQUFFYSxzQkFBVUk7QUFWRCxHQUZtRDtBQTRIeEUsU0FBTywyQkFBVzlDLFVBQVgsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudCwgY3JlYXRlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGF5ZXJIb3ZlckluZm9GYWN0b3J5IGZyb20gJy4vbGF5ZXItaG92ZXItaW5mbyc7XG5pbXBvcnQgQ29vcmRpbmF0ZUluZm9GYWN0b3J5IGZyb20gJy4vY29vcmRpbmF0ZS1pbmZvJztcbmltcG9ydCB7UGluLCBBcnJvd0xlZnQsIEFycm93UmlnaHR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2Vycm9yLWJvdW5kYXJ5JztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZSwgaW5qZWN0SW50bH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmNvbnN0IE1BWF9XSURUSCA9IDUwMDtcbmNvbnN0IE1BWF9IRUlHSFQgPSA2MDA7XG5cbmNvbnN0IFN0eWxlZE1hcFBvcG92ZXIgPSBzdHlsZWQuZGl2YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNjcm9sbEJhcn07XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICB6LWluZGV4OiAxMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3hTaGFkb3d9O1xuXG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBgJHtwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9ZGRgfTtcbiAgfVxuXG4gIC5ndXR0ZXIge1xuICAgIGhlaWdodDogNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAucHJpbWFyeS1sYWJlbCB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubm90aWZpY2F0aW9uQ29sb3JzLnN1Y2Nlc3N9O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMThweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgdGFibGUge1xuICAgIG1hcmdpbjogMnB4IDEycHggMTJweCAxMnB4O1xuICAgIHdpZHRoOiBhdXRvO1xuXG4gICAgdGJvZHkge1xuICAgICAgYm9yZGVyLXRvcDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItYm90dG9tOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICB0ZCB7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgICB9XG5cbiAgICB0ZC5yb3dfX3ZhbHVlIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICB0b3A6IDEwcHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xuXG4gICYucG9wb3Zlci1hcnJvdy1sZWZ0IHtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAmLnBvcG92ZXItYXJyb3ctcmlnaHQge1xuICAgIGxlZnQ6IDYwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmtCdG5Db2xvcn07XG4gIH1cbmA7XG5cbk1hcFBvcG92ZXJGYWN0b3J5LmRlcHMgPSBbTGF5ZXJIb3ZlckluZm9GYWN0b3J5LCBDb29yZGluYXRlSW5mb0ZhY3RvcnldO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXBQb3BvdmVyRmFjdG9yeShMYXllckhvdmVySW5mbywgQ29vcmRpbmF0ZUluZm8pIHtcbiAgY2xhc3MgTWFwUG9wb3ZlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBsYXllckhvdmVyUHJvcDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIGNvb3JkaW5hdGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheSwgUHJvcFR5cGVzLmJvb2xdKSxcbiAgICAgIGZyb3plbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICB4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgeTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHo6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXBXOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBtYXBIOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgaXNCYXNlOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgd2lkdGg6IDM4MCxcbiAgICAgICAgaGVpZ2h0OiAxNjAsXG4gICAgICAgIGlzTGVmdDogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLl9zZXRDb250YWluZXJTaXplKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5fc2V0Q29udGFpbmVyU2l6ZSgpO1xuICAgIH1cblxuICAgIHBvcG92ZXIgPSBjcmVhdGVSZWYoKTtcblxuICAgIF9zZXRDb250YWluZXJTaXplKCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMucG9wb3Zlci5jdXJyZW50O1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgd2lkdGggPSBNYXRoLm1pbihNYXRoLnJvdW5kKG5vZGUuc2Nyb2xsV2lkdGgpLCBNQVhfV0lEVEgpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5yb3VuZChub2RlLnNjcm9sbEhlaWdodCksIE1BWF9IRUlHSFQpO1xuXG4gICAgICBpZiAod2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGggfHwgaGVpZ2h0ICE9PSB0aGlzLnN0YXRlLmhlaWdodCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWR0aCwgaGVpZ2h0fSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2dldFBvc2l0aW9uKHgsIHksIGlzTGVmdCkge1xuICAgICAgY29uc3QgdG9wT2Zmc2V0ID0gMjA7XG4gICAgICBjb25zdCBsZWZ0T2Zmc2V0ID0gMjA7XG4gICAgICBjb25zdCB7bWFwVywgbWFwSH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge3dpZHRoLCBoZWlnaHR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IHBvcyA9IHt9O1xuICAgICAgaWYgKHggKyBsZWZ0T2Zmc2V0ICsgd2lkdGggPiBtYXBXIHx8IGlzTGVmdCkge1xuICAgICAgICBwb3MucmlnaHQgPSBtYXBXIC0geCArIGxlZnRPZmZzZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3MubGVmdCA9IHggKyBsZWZ0T2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICBpZiAoeSArIHRvcE9mZnNldCArIGhlaWdodCA+IG1hcEgpIHtcbiAgICAgICAgcG9zLmJvdHRvbSA9IDEwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zLnRvcCA9IHkgKyB0b3BPZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwb3M7XG4gICAgfVxuXG4gICAgbW92ZUxlZnQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpc0xlZnQ6IHRydWV9KTtcbiAgICB9O1xuXG4gICAgbW92ZVJpZ2h0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMZWZ0OiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7eCwgeSwgZnJvemVuLCBjb29yZGluYXRlLCBsYXllckhvdmVyUHJvcCwgaXNCYXNlLCB6b29tfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7aXNMZWZ0fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGNvbnN0IHN0eWxlID0gTnVtYmVyLmlzRmluaXRlKHgpICYmIE51bWJlci5pc0Zpbml0ZSh5KSA/IHRoaXMuX2dldFBvc2l0aW9uKHgsIHksIGlzTGVmdCkgOiB7fTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgPFN0eWxlZE1hcFBvcG92ZXJcbiAgICAgICAgICAgIHJlZj17dGhpcy5wb3BvdmVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFwLXBvcG92ZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICAgIG1heFdpZHRoOiBNQVhfV0lEVEhcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Zyb3plbiA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtcG9wb3Zlcl9fdG9wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndXR0ZXJcIiAvPlxuICAgICAgICAgICAgICAgIHshaXNMZWZ0ICYmIChcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRJY29uIGNsYXNzTmFtZT1cInBvcG92ZXItYXJyb3ctbGVmdFwiIG9uQ2xpY2s9e3RoaXMubW92ZUxlZnR9PlxuICAgICAgICAgICAgICAgICAgICA8QXJyb3dMZWZ0IC8+XG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZEljb24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8U3R5bGVkSWNvbiBjbGFzc05hbWU9XCJwb3BvdmVyLXBpblwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0+XG4gICAgICAgICAgICAgICAgICA8UGluIGhlaWdodD1cIjE2cHhcIiAvPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkSWNvbj5cbiAgICAgICAgICAgICAgICB7aXNMZWZ0ICYmIChcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRJY29uIGNsYXNzTmFtZT1cInBvcG92ZXItYXJyb3ctcmlnaHRcIiBvbkNsaWNrPXt0aGlzLm1vdmVSaWdodH0+XG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IC8+XG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZEljb24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7aXNCYXNlICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpbWFyeS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cIm1hcFBvcG92ZXIucHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoY29vcmRpbmF0ZSkgJiYgPENvb3JkaW5hdGVJbmZvIGNvb3JkaW5hdGU9e2Nvb3JkaW5hdGV9IHpvb209e3pvb219IC8+fVxuICAgICAgICAgICAge2xheWVySG92ZXJQcm9wICYmIDxMYXllckhvdmVySW5mbyB7Li4ubGF5ZXJIb3ZlclByb3B9IC8+fVxuICAgICAgICAgIDwvU3R5bGVkTWFwUG9wb3Zlcj5cbiAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5qZWN0SW50bChNYXBQb3BvdmVyKTtcbn1cbiJdfQ==