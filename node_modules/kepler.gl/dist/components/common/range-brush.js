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

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _d3Selection = require("d3-selection");

var _d3Brush = require("d3-brush");

var _dataUtils = require("../../utils/data-utils");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .selection {\n    stroke: none;\n    fill: ", ";\n    fill-opacity: ", ";\n  }\n  .handle {\n    fill: ", ";\n    fill-opacity: 0.3;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledG = _styledComponents["default"].g(_templateObject(), function (props) {
  return props.isRanged ? props.theme.rangeBrushBgd : props.theme.BLUE2;
}, function (props) {
  return props.isRanged ? 0.3 : 1;
}, function (props) {
  return props.theme.BLUE2;
});

function moveRight(startSel, selection) {
  var _startSel = (0, _slicedToArray2["default"])(startSel, 1),
      startSel0 = _startSel[0];

  var _selection = (0, _slicedToArray2["default"])(selection, 1),
      sel0 = _selection[0];

  return Boolean(startSel0 === sel0);
}

function RangeBrushFactory() {
  var RangeBrush =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(RangeBrush, _Component);

    function RangeBrush() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, RangeBrush);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(RangeBrush)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rootContainer", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_brushed", function (evt) {
        if (evt.sourceEvent.type === 'brush') return;

        var _evt$selection = (0, _slicedToArray2["default"])(evt.selection, 2),
            sel0 = _evt$selection[0],
            sel1 = _evt$selection[1];

        var right = moveRight(_this._startSel, evt.selection);

        var _this$props = _this.props,
            _this$props$range = (0, _slicedToArray2["default"])(_this$props.range, 2),
            min = _this$props$range[0],
            max = _this$props$range[1],
            step = _this$props.step,
            width = _this$props.width,
            marks = _this$props.marks,
            isRanged = _this$props.isRanged;

        var invert = function invert(x) {
          return x * (max - min) / width + min;
        };

        var d0 = invert(sel0);
        var d1 = invert(sel1);
        d0 = (0, _dataUtils.normalizeSliderValue)(d0, min, step, marks);
        d1 = (0, _dataUtils.normalizeSliderValue)(d1, min, step, marks);
        if (isRanged) _this._move(d0, d1);else _this._move(right ? d1 : d0);
        if (isRanged) _this._onBrush(d0, d1);else _this._onBrush(right ? d1 : d0);
      });
      return _this;
    }

    (0, _createClass2["default"])(RangeBrush, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // We want the React app to respond to brush state and vice-versa
        // but d3-brush fires the same events for both user-initiated brushing
        // and programmatic brushing (brush.move). We need these flags to
        // distinguish between the uses.
        //
        // We don't use state because that would trigger another `componentDidUpdate`
        this.brushing = false;
        this.moving = false;
        this.root = (0, _d3Selection.select)(this.rootContainer.current);
        this.brush = (0, _d3Brush.brushX)().handleSize(3).on('start', function () {
          if (typeof _this2.props.onBrushStart === 'function') _this2.props.onBrushStart();
          _this2._startSel = _d3Selection.event.selection;
        }).on('brush', function () {
          if (_this2.moving) {
            return;
          }

          if (_d3Selection.event.selection) {
            _this2.brushing = true;

            _this2._brushed(_d3Selection.event);
          }
        }).on('end', function () {
          if (!_this2.brushing && _this2._startSel && !_d3Selection.event.selection) {
            // handle click
            _this2._click(_this2._startSel);
          }

          if (typeof _this2.props.onBrushEnd === 'function') _this2.props.onBrushEnd();
          _this2.brushing = false;
          _this2.moving = false;
        });
        this.root.call(this.brush);

        var _this$props$value = (0, _slicedToArray2["default"])(this.props.value, 2),
            val0 = _this$props$value[0],
            val1 = _this$props$value[1];

        this.moving = true;

        this._move(val0, val1);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props2 = this.props,
            _this$props2$value = (0, _slicedToArray2["default"])(_this$props2.value, 2),
            val0 = _this$props2$value[0],
            val1 = _this$props2$value[1],
            width = _this$props2.width;

        var _prevProps$value = (0, _slicedToArray2["default"])(prevProps.value, 2),
            prevVal0 = _prevProps$value[0],
            prevVal1 = _prevProps$value[1];

        if (prevProps.width !== width) {
          // width change should not trigger this._brushed
          this.moving = true;
          this.root.call(this.brush);

          this._move(val0, val1);
        }

        if (!this.brushing && !this.moving) {
          if (prevVal0 !== val0 || prevVal1 !== val1) {
            this.moving = true;

            this._move(val0, val1);
          }
        }
      }
    }, {
      key: "_click",
      value: function _click(selection) {
        // fake brush
        this.brushing = true;

        this._brushed({
          sourceEvent: {},
          selection: selection
        });
      }
    }, {
      key: "_move",
      value: function _move(val0, val1) {
        var _this$props3 = this.props,
            _this$props3$range = (0, _slicedToArray2["default"])(_this$props3.range, 2),
            min = _this$props3$range[0],
            max = _this$props3$range[1],
            width = _this$props3.width,
            isRanged = _this$props3.isRanged;

        if (width && max - min) {
          var scale = function scale(x) {
            return (x - min) * width / (max - min);
          };

          if (!isRanged) {
            // only draw a 1 pixel line
            this.brush.move(this.root, [scale(val0), scale(val0) + 1]);
          } else {
            this.brush.move(this.root, [scale(val0), scale(val1)]);
          }
        }
      }
    }, {
      key: "_onBrush",
      value: function _onBrush(val0, val1) {
        var _this$props4 = this.props,
            isRanged = _this$props4.isRanged,
            _this$props4$value = (0, _slicedToArray2["default"])(_this$props4.value, 2),
            currentVal0 = _this$props4$value[0],
            currentVal1 = _this$props4$value[1];

        if (currentVal0 === val0 && currentVal1 === val1) {
          return;
        }

        if (isRanged) {
          this.props.onBrush(val0, val1);
        } else {
          this.props.onBrush(val0, val0);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var isRanged = this.props.isRanged;
        return _react["default"].createElement(StyledG, {
          className: "kg-range-slider__brush",
          isRanged: isRanged,
          ref: this.rootContainer
        });
      }
    }]);
    return RangeBrush;
  }(_react.Component);

  (0, _defineProperty2["default"])(RangeBrush, "propTypes", {
    onBrush: _propTypes["default"].func.isRequired,
    range: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    width: _propTypes["default"].number.isRequired,
    isRanged: _propTypes["default"].bool
  });
  (0, _defineProperty2["default"])(RangeBrush, "defaultProps", {
    isRanged: true
  });
  return RangeBrush;
}

var _default = RangeBrushFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1icnVzaC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRHIiwic3R5bGVkIiwiZyIsInByb3BzIiwiaXNSYW5nZWQiLCJ0aGVtZSIsInJhbmdlQnJ1c2hCZ2QiLCJCTFVFMiIsIm1vdmVSaWdodCIsInN0YXJ0U2VsIiwic2VsZWN0aW9uIiwic3RhcnRTZWwwIiwic2VsMCIsIkJvb2xlYW4iLCJSYW5nZUJydXNoRmFjdG9yeSIsIlJhbmdlQnJ1c2giLCJldnQiLCJzb3VyY2VFdmVudCIsInR5cGUiLCJzZWwxIiwicmlnaHQiLCJfc3RhcnRTZWwiLCJyYW5nZSIsIm1pbiIsIm1heCIsInN0ZXAiLCJ3aWR0aCIsIm1hcmtzIiwiaW52ZXJ0IiwieCIsImQwIiwiZDEiLCJfbW92ZSIsIl9vbkJydXNoIiwiYnJ1c2hpbmciLCJtb3ZpbmciLCJyb290Iiwicm9vdENvbnRhaW5lciIsImN1cnJlbnQiLCJicnVzaCIsImhhbmRsZVNpemUiLCJvbiIsIm9uQnJ1c2hTdGFydCIsImV2ZW50IiwiX2JydXNoZWQiLCJfY2xpY2siLCJvbkJydXNoRW5kIiwiY2FsbCIsInZhbHVlIiwidmFsMCIsInZhbDEiLCJwcmV2UHJvcHMiLCJwcmV2VmFsMCIsInByZXZWYWwxIiwic2NhbGUiLCJtb3ZlIiwiY3VycmVudFZhbDAiLCJjdXJyZW50VmFsMSIsIm9uQnJ1c2giLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJudW1iZXIiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyw2QkFBT0MsQ0FBVixvQkFHRCxVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxRQUFOLEdBQWlCRCxLQUFLLENBQUNFLEtB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d0I7QUFBQTtBQUFBLCtCQXlKaEI7QUFBQSxZQUNBN0MsUUFEQSxHQUNZLEtBQUtELEtBRGpCLENBQ0FDLFFBREE7QUFHUCxlQUNFLGdDQUFDLE9BQUQ7QUFBUyxVQUFBLFNBQVMsRUFBQyx3QkFBbkI7QUFBNEMsVUFBQSxRQUFRLEVBQUVBLFFBQXREO0FBQWdFLFVBQUEsR0FBRyxFQUFFLEtBQUtpQztBQUExRSxVQURGO0FBR0Q7QUEvSndCO0FBQUE7QUFBQSxJQUNGc0IsZ0JBREU7O0FBQUEsbUNBQ3JCNUMsVUFEcUIsZUFFTjtBQUNqQjJDLElBQUFBLE9BQU8sRUFBRUUsc0JBQVVDLElBQVYsQ0FBZUMsVUFEUDtBQUVqQnhDLElBQUFBLEtBQUssRUFBRXNDLHNCQUFVRyxPQUFWLENBQWtCSCxzQkFBVUksTUFBNUIsRUFBb0NGLFVBRjFCO0FBR2pCZCxJQUFBQSxLQUFLLEVBQUVZLHNCQUFVRyxPQUFWLENBQWtCSCxzQkFBVUksTUFBNUIsRUFBb0NGLFVBSDFCO0FBSWpCcEMsSUFBQUEsS0FBSyxFQUFFa0Msc0JBQVVJLE1BQVYsQ0FBaUJGLFVBSlA7QUFLakIxRCxJQUFBQSxRQUFRLEVBQUV3RCxzQkFBVUs7QUFMSCxHQUZNO0FBQUEsbUNBQ3JCbEQsVUFEcUIsa0JBVUg7QUFDcEJYLElBQUFBLFFBQVEsRUFBRTtBQURVLEdBVkc7QUFpSzNCLFNBQU9XLFVBQVA7QUFDRDs7ZUFFY0QsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtldmVudCwgc2VsZWN0fSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IHticnVzaFh9IGZyb20gJ2QzLWJydXNoJztcbmltcG9ydCB7bm9ybWFsaXplU2xpZGVyVmFsdWV9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5jb25zdCBTdHlsZWRHID0gc3R5bGVkLmdgXG4gIC5zZWxlY3Rpb24ge1xuICAgIHN0cm9rZTogbm9uZTtcbiAgICBmaWxsOiAke3Byb3BzID0+IChwcm9wcy5pc1JhbmdlZCA/IHByb3BzLnRoZW1lLnJhbmdlQnJ1c2hCZ2QgOiBwcm9wcy50aGVtZS5CTFVFMil9O1xuICAgIGZpbGwtb3BhY2l0eTogJHtwcm9wcyA9PiAocHJvcHMuaXNSYW5nZWQgPyAwLjMgOiAxKX07XG4gIH1cbiAgLmhhbmRsZSB7XG4gICAgZmlsbDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5CTFVFMn07XG4gICAgZmlsbC1vcGFjaXR5OiAwLjM7XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIG1vdmVSaWdodChzdGFydFNlbCwgc2VsZWN0aW9uKSB7XG4gIGNvbnN0IFtzdGFydFNlbDBdID0gc3RhcnRTZWw7XG4gIGNvbnN0IFtzZWwwXSA9IHNlbGVjdGlvbjtcblxuICByZXR1cm4gQm9vbGVhbihzdGFydFNlbDAgPT09IHNlbDApO1xufVxuXG5mdW5jdGlvbiBSYW5nZUJydXNoRmFjdG9yeSgpIHtcbiAgY2xhc3MgUmFuZ2VCcnVzaCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIG9uQnJ1c2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByYW5nZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxuICAgICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGlzUmFuZ2VkOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgaXNSYW5nZWQ6IHRydWVcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAvLyBXZSB3YW50IHRoZSBSZWFjdCBhcHAgdG8gcmVzcG9uZCB0byBicnVzaCBzdGF0ZSBhbmQgdmljZS12ZXJzYVxuICAgICAgLy8gYnV0IGQzLWJydXNoIGZpcmVzIHRoZSBzYW1lIGV2ZW50cyBmb3IgYm90aCB1c2VyLWluaXRpYXRlZCBicnVzaGluZ1xuICAgICAgLy8gYW5kIHByb2dyYW1tYXRpYyBicnVzaGluZyAoYnJ1c2gubW92ZSkuIFdlIG5lZWQgdGhlc2UgZmxhZ3MgdG9cbiAgICAgIC8vIGRpc3Rpbmd1aXNoIGJldHdlZW4gdGhlIHVzZXMuXG4gICAgICAvL1xuICAgICAgLy8gV2UgZG9uJ3QgdXNlIHN0YXRlIGJlY2F1c2UgdGhhdCB3b3VsZCB0cmlnZ2VyIGFub3RoZXIgYGNvbXBvbmVudERpZFVwZGF0ZWBcblxuICAgICAgdGhpcy5icnVzaGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcblxuICAgICAgdGhpcy5yb290ID0gc2VsZWN0KHRoaXMucm9vdENvbnRhaW5lci5jdXJyZW50KTtcbiAgICAgIHRoaXMuYnJ1c2ggPSBicnVzaFgoKVxuICAgICAgICAuaGFuZGxlU2l6ZSgzKVxuICAgICAgICAub24oJ3N0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkJydXNoU3RhcnQgPT09ICdmdW5jdGlvbicpIHRoaXMucHJvcHMub25CcnVzaFN0YXJ0KCk7XG4gICAgICAgICAgdGhpcy5fc3RhcnRTZWwgPSBldmVudC5zZWxlY3Rpb247XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignYnJ1c2gnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMubW92aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChldmVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYnJ1c2hpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fYnJ1c2hlZChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAub24oJ2VuZCcsICgpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuYnJ1c2hpbmcgJiYgdGhpcy5fc3RhcnRTZWwgJiYgIWV2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgICAgLy8gaGFuZGxlIGNsaWNrXG5cbiAgICAgICAgICAgIHRoaXMuX2NsaWNrKHRoaXMuX3N0YXJ0U2VsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQnJ1c2hFbmQgPT09ICdmdW5jdGlvbicpIHRoaXMucHJvcHMub25CcnVzaEVuZCgpO1xuXG4gICAgICAgICAgdGhpcy5icnVzaGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJvb3QuY2FsbCh0aGlzLmJydXNoKTtcblxuICAgICAgY29uc3Qge1xuICAgICAgICB2YWx1ZTogW3ZhbDAsIHZhbDFdXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX21vdmUodmFsMCwgdmFsMSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgY29uc3Qge1xuICAgICAgICB2YWx1ZTogW3ZhbDAsIHZhbDFdLFxuICAgICAgICB3aWR0aFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBbcHJldlZhbDAsIHByZXZWYWwxXSA9IHByZXZQcm9wcy52YWx1ZTtcblxuICAgICAgaWYgKHByZXZQcm9wcy53aWR0aCAhPT0gd2lkdGgpIHtcbiAgICAgICAgLy8gd2lkdGggY2hhbmdlIHNob3VsZCBub3QgdHJpZ2dlciB0aGlzLl9icnVzaGVkXG4gICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yb290LmNhbGwodGhpcy5icnVzaCk7XG4gICAgICAgIHRoaXMuX21vdmUodmFsMCwgdmFsMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5icnVzaGluZyAmJiAhdGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgaWYgKHByZXZWYWwwICE9PSB2YWwwIHx8IHByZXZWYWwxICE9PSB2YWwxKSB7XG4gICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX21vdmUodmFsMCwgdmFsMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByb290Q29udGFpbmVyID0gY3JlYXRlUmVmKCk7XG5cbiAgICBfY2xpY2soc2VsZWN0aW9uKSB7XG4gICAgICAvLyBmYWtlIGJydXNoXG4gICAgICB0aGlzLmJydXNoaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2JydXNoZWQoe3NvdXJjZUV2ZW50OiB7fSwgc2VsZWN0aW9ufSk7XG4gICAgfVxuXG4gICAgX21vdmUodmFsMCwgdmFsMSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICByYW5nZTogW21pbiwgbWF4XSxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGlzUmFuZ2VkXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgaWYgKHdpZHRoICYmIG1heCAtIG1pbikge1xuICAgICAgICBjb25zdCBzY2FsZSA9IHggPT4gKCh4IC0gbWluKSAqIHdpZHRoKSAvIChtYXggLSBtaW4pO1xuICAgICAgICBpZiAoIWlzUmFuZ2VkKSB7XG4gICAgICAgICAgLy8gb25seSBkcmF3IGEgMSBwaXhlbCBsaW5lXG4gICAgICAgICAgdGhpcy5icnVzaC5tb3ZlKHRoaXMucm9vdCwgW3NjYWxlKHZhbDApLCBzY2FsZSh2YWwwKSArIDFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJydXNoLm1vdmUodGhpcy5yb290LCBbc2NhbGUodmFsMCksIHNjYWxlKHZhbDEpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBfYnJ1c2hlZCA9IGV2dCA9PiB7XG4gICAgICBpZiAoZXZ0LnNvdXJjZUV2ZW50LnR5cGUgPT09ICdicnVzaCcpIHJldHVybjtcbiAgICAgIGNvbnN0IFtzZWwwLCBzZWwxXSA9IGV2dC5zZWxlY3Rpb247XG4gICAgICBjb25zdCByaWdodCA9IG1vdmVSaWdodCh0aGlzLl9zdGFydFNlbCwgZXZ0LnNlbGVjdGlvbik7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcmFuZ2U6IFttaW4sIG1heF0sXG4gICAgICAgIHN0ZXAsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBtYXJrcyxcbiAgICAgICAgaXNSYW5nZWRcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgaW52ZXJ0ID0geCA9PiAoeCAqIChtYXggLSBtaW4pKSAvIHdpZHRoICsgbWluO1xuICAgICAgbGV0IGQwID0gaW52ZXJ0KHNlbDApO1xuICAgICAgbGV0IGQxID0gaW52ZXJ0KHNlbDEpO1xuXG4gICAgICBkMCA9IG5vcm1hbGl6ZVNsaWRlclZhbHVlKGQwLCBtaW4sIHN0ZXAsIG1hcmtzKTtcbiAgICAgIGQxID0gbm9ybWFsaXplU2xpZGVyVmFsdWUoZDEsIG1pbiwgc3RlcCwgbWFya3MpO1xuXG4gICAgICBpZiAoaXNSYW5nZWQpIHRoaXMuX21vdmUoZDAsIGQxKTtcbiAgICAgIGVsc2UgdGhpcy5fbW92ZShyaWdodCA/IGQxIDogZDApO1xuXG4gICAgICBpZiAoaXNSYW5nZWQpIHRoaXMuX29uQnJ1c2goZDAsIGQxKTtcbiAgICAgIGVsc2UgdGhpcy5fb25CcnVzaChyaWdodCA/IGQxIDogZDApO1xuICAgIH07XG5cbiAgICBfb25CcnVzaCh2YWwwLCB2YWwxKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlzUmFuZ2VkLFxuICAgICAgICB2YWx1ZTogW2N1cnJlbnRWYWwwLCBjdXJyZW50VmFsMV1cbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBpZiAoY3VycmVudFZhbDAgPT09IHZhbDAgJiYgY3VycmVudFZhbDEgPT09IHZhbDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNSYW5nZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkJydXNoKHZhbDAsIHZhbDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkJydXNoKHZhbDAsIHZhbDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtpc1JhbmdlZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkRyBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJfX2JydXNoXCIgaXNSYW5nZWQ9e2lzUmFuZ2VkfSByZWY9e3RoaXMucm9vdENvbnRhaW5lcn0gLz5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBSYW5nZUJydXNoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSYW5nZUJydXNoRmFjdG9yeTtcbiJdfQ==