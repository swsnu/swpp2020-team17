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

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _chickletedInput = require("../../../common/item-selector/chickleted-input");

var _icons = require("../../../common/icons");

var _dropdownList = _interopRequireDefault(require("../../../common/item-selector/dropdown-list"));

var _styledComponents2 = require("../../../common/styled-components");

var _reactIntl = require("react-intl");

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _defaultSettings = require("../../../../constants/default-settings");

var _tooltip = require("../../../../constants/tooltip");

var _dataUtils = require("../../../../utils/data-utils");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: -64px;\n  position: absolute;\n  top: 20px;\n  width: 140px;\n  z-index: 101;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 4px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TIME_DISPLAY = '2020-05-11 14:00';

var getValue = function getValue(fmt) {
  return fmt[_tooltip.TOOLTIP_KEY];
};

var addDTimeLabel = function addDTimeLabel(formats) {
  return formats.map(function (f) {
    return _objectSpread({}, f, {
      label: f.type === _tooltip.TOOLTIP_FORMAT_TYPES.DATE_TIME || f.type === _tooltip.TOOLTIP_FORMAT_TYPES.DATE ? (0, _dataUtils.getFormatter)(getValue(f))(TIME_DISPLAY) : f.label
    });
  });
};

function getFormatLabels(fields, fieldName) {
  var fieldType = fields.find(function (f) {
    return f.name === fieldName;
  }).type;
  var tooltipTypes = fieldType && _defaultSettings.FIELD_OPTS[fieldType].format.tooltip || [];
  var formatLabels = Object.values(_tooltip.TOOLTIP_FORMATS).filter(function (t) {
    return tooltipTypes.includes(t.type);
  });
  return addDTimeLabel(formatLabels);
}

var ChickletAddonWrapper = _styledComponents["default"].div(_templateObject());

var ChickletAddon = _styledComponents["default"].div(_templateObject2());

var StyledPopover = _styledComponents["default"].div(_templateObject3());

var hashStyles = {
  SHOW: 'SHOW',
  ACTIVE: 'ACTIVE'
};

var IconDiv = _styledComponents["default"].div.attrs({
  className: 'tooltip-chicklet__icon'
})(_templateObject4(), function (props) {
  return props.status === hashStyles.SHOW ? props.theme.subtextColorActive : props.status === hashStyles.ACTIVE ? props.theme.activeColor : props.theme.textColor;
});

function getFormatTooltip(formatLabels, format) {
  if (!format) {
    return null;
  }

  var formatLabel = formatLabels.find(function (fl) {
    return getValue(fl) === format;
  });

  if (formatLabel) {
    return formatLabel.label;
  }

  return (0, _typeof2["default"])(format) === 'object' ? JSON.stringify(format, null, 2) : String(format);
}

function TooltipChickletFactory(dataId, config, onChange, fields) {
  var TooltipChicklet =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(TooltipChicklet, _Component);

    function TooltipChicklet() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, TooltipChicklet);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(TooltipChicklet)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        show: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
        if (_this.node.contains(e.target)) {
          return;
        }

        _this.setState({
          show: false
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(TooltipChicklet, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside, false);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            disabled = _this$props.disabled,
            name = _this$props.name,
            remove = _this$props.remove;
        var show = this.state.show;
        var tooltipField = config.fieldsToShow[dataId].find(function (fieldToShow) {
          return fieldToShow.name === name;
        });
        var formatLabels = getFormatLabels(fields, tooltipField.name);
        var hasFormat = Boolean(tooltipField.format);
        var selectionIndex = formatLabels.findIndex(function (fl) {
          return getValue(fl) === tooltipField.format;
        });
        var hashStyle = show ? hashStyles.SHOW : hasFormat ? hashStyles.ACTIVE : null;
        return _react["default"].createElement(_chickletedInput.ChickletButton, {
          ref: function ref(node) {
            return _this2.node = node;
          }
        }, _react["default"].createElement(_chickletedInput.ChickletTag, null, name), formatLabels.length > 1 && _react["default"].createElement(ChickletAddonWrapper, null, _react["default"].createElement(ChickletAddon, {
          "data-tip": true,
          "data-for": "addon-".concat(name)
        }, _react["default"].createElement(IconDiv, {
          status: hashStyle
        }, _react["default"].createElement(_icons.Hash, {
          height: "8px",
          onClick: function onClick(e) {
            e.stopPropagation();

            _this2.setState({
              show: Boolean(!show)
            });
          }
        })), _react["default"].createElement(_styledComponents2.Tooltip, {
          id: "addon-".concat(name),
          effect: "solid"
        }, _react["default"].createElement("span", null, hasFormat ? getFormatTooltip(formatLabels, tooltipField.format) : _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'fieldSelector.formatting'
        })))), show && _react["default"].createElement(StyledPopover, null, _react["default"].createElement(_dropdownList["default"], {
          options: formatLabels,
          selectionIndex: selectionIndex,
          displayOption: function displayOption(item) {
            return item.label;
          },
          onOptionSelected: function onOptionSelected(result, e) {
            e.stopPropagation();

            _this2.setState({
              show: false
            });

            var oldFieldsToShow = config.fieldsToShow[dataId];
            var fieldsToShow = oldFieldsToShow.map(function (fieldToShow) {
              return fieldToShow.name === name ? {
                name: name,
                format: getValue(result)
              } : fieldToShow;
            });

            var newConfig = _objectSpread({}, config, {
              fieldsToShow: _objectSpread({}, config.fieldsToShow, (0, _defineProperty2["default"])({}, dataId, fieldsToShow))
            });

            onChange(newConfig);
          }
        }))), _react["default"].createElement(_icons.Delete, {
          onClick: disabled ? null : remove
        }));
      }
    }]);
    return TooltipChicklet;
  }(_react.Component);

  return (0, _reactOnclickoutside["default"])(TooltipChicklet);
}

var _default = TooltipChickletFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvaW50ZXJhY3Rpb24tcGFuZWwvdG9vbHRpcC1jb25maWcvdG9vbHRpcC1jaGlja2xldC5qcyJdLCJuYW1lcyI6WyJUSU1FX0RJU1BMQVkiLCJnZXRWYWx1ZSIsImZtdCIsIlRPT0xUSVBfS0VZIiwiYWRkRFRpbWVMYWJlbCIsImZvcm1hdHMiLCJtYXAiLCJmIiwibGFiZWwiLCJ0eXBlIiwiVE9PTFRJUF9GT1JNQVRfVFlQRVMiLCJEQVRFX1RJTUUiLCJEQVRFIiwiZ2V0Rm9ybWF0TGFiZWxzIiwiZmllbGRzIiwiZmllbGROYW1lIiwiZmllbGRUeXBlIiwiZmluZCIsIm5hbWUiLCJ0b29sdGlwVHlwZXMiLCJGSUVMRF9PUFRTIiwiZm9ybWF0IiwidG9vbHRpcCIsImZvcm1hdExhYmVscyIsIk9iamVjdCIsInZhbHVlcyIsIlRPT0xUSVBfRk9STUFUUyIsImZpbHRlciIsInQiLCJpbmNsdWRlcyIsIkNoaWNrbGV0QWRkb25XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiQ2hpY2tsZXRBZGRvbiIsIlN0eWxlZFBvcG92ZXIiLCJoYXNoU3R5bGVzIiwiU0hPVyIsIkFDVElWRSIsIkljb25EaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsInByb3BzIiwic3RhdHVzIiwidGhlbWUiLCJzdWJ0ZXh0Q29sb3JBY3RpdmUiLCJhY3RpdmVDb2xvciIsInRleHRDb2xvciIsImdldEZvcm1hdFRvb2x0aXAiLCJmb3JtYXRMYWJlbCIsImZsIiwiSlNPTiIsInN0cmluZ2lmeSIsIlN0cmluZyIsIlRvb2x0aXBDaGlja2xldEZhY3RvcnkiLCJkYXRhSWQiLCJjb25maWciLCJvbkNoYW5nZSIsIlRvb2x0aXBDaGlja2xldCIsInNob3ciLCJlIiwibm9kZSIsImNvbnRhaW5zIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGlja091dHNpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGlzYWJsZWQiLCJyZW1vdmUiLCJzdGF0ZSIsInRvb2x0aXBGaWVsZCIsImZpZWxkc1RvU2hvdyIsImZpZWxkVG9TaG93IiwiaGFzRm9ybWF0IiwiQm9vbGVhbiIsInNlbGVjdGlvbkluZGV4IiwiZmluZEluZGV4IiwiaGFzaFN0eWxlIiwibGVuZ3RoIiwic3RvcFByb3BhZ2F0aW9uIiwiaXRlbSIsInJlc3VsdCIsIm9sZEZpZWxkc1RvU2hvdyIsIm5ld0NvbmZpZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsa0JBQXJCOztBQUNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEdBQUc7QUFBQSxTQUFJQSxHQUFHLENBQUNDLG9CQUFELENBQVA7QUFBQSxDQUFwQjs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLE9BQU87QUFBQSxTQUMzQkEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQUMsQ0FBQztBQUFBLDZCQUNSQSxDQURRO0FBRVhDLE1BQUFBLEtBQUssRUFDSEQsQ0FBQyxDQUFDRSxJQUFGLEtBQVdDLDhCQUFxQkMsU0FBaEMsSUFBNkNKLENBQUMsQ0FBQ0UsSUFBRixLQUFXQyw4QkFBcUJFLElBQTdFLEdBQ0ksNkJBQWFYLFFBQVEsQ0FBQ00sQ0FBRCxDQUFyQixFQUEwQlAsWUFBMUIsQ0FESixHQUVJTyxDQUFDLENBQUNDO0FBTEc7QUFBQSxHQUFiLENBRDJCO0FBQUEsQ0FBN0I7O0FBU0EsU0FBU0ssZUFBVCxDQUF5QkMsTUFBekIsRUFBaUNDLFNBQWpDLEVBQTRDO0FBQzFDLE1BQU1DLFNBQVMsR0FBR0YsTUFBTSxDQUFDRyxJ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WkwsY0FBQUEsSUFBSSxFQUFFO0FBRE0sYUFBZDs7QUFJQSxnQkFBTXlCLGVBQWUsR0FBRzVCLE1BQU0sQ0FBQ2lCLFlBQVAsQ0FBb0JsQixNQUFwQixDQUF4QjtBQUNBLGdCQUFNa0IsWUFBWSxHQUFHVyxlQUFlLENBQUM3RSxHQUFoQixDQUFvQixVQUFBbUUsV0FBVyxFQUFJO0FBQ3RELHFCQUFPQSxXQUFXLENBQUN2RCxJQUFaLEtBQXFCQSxJQUFyQixHQUNIO0FBQ0VBLGdCQUFBQSxJQUFJLEVBQUpBLElBREY7QUFFRUcsZ0JBQUFBLE1BQU0sRUFBRXBCLFFBQVEsQ0FBQ2lGLE1BQUQ7QUFGbEIsZUFERyxHQUtIVCxXQUxKO0FBTUQsYUFQb0IsQ0FBckI7O0FBUUEsZ0JBQU1XLFNBQVMscUJBQ1Y3QixNQURVO0FBRWJpQixjQUFBQSxZQUFZLG9CQUNQakIsTUFBTSxDQUFDaUIsWUFEQSx1Q0FFVGxCLE1BRlMsRUFFQWtCLFlBRkE7QUFGQyxjQUFmOztBQU9BaEIsWUFBQUEsUUFBUSxDQUFDNEIsU0FBRCxDQUFSO0FBQ0Q7QUEzQkgsVUFERixDQXRCSixDQUhKLEVBMkRFLGdDQUFDLGFBQUQ7QUFBUSxVQUFBLE9BQU8sRUFBRWhCLFFBQVEsR0FBRyxJQUFILEdBQVVDO0FBQW5DLFVBM0RGLENBREY7QUErREQ7QUEvRjZEO0FBQUE7QUFBQSxJQUNsQ2dCLGdCQURrQzs7QUFpR2hFLFNBQU8scUNBQWU1QixlQUFmLENBQVA7QUFDRDs7ZUFFY0osc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtDaGlja2xldEJ1dHRvbiwgQ2hpY2tsZXRUYWd9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvY2hpY2tsZXRlZC1pbnB1dCc7XG5pbXBvcnQge0hhc2gsIERlbGV0ZX0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IERyb3Bkb3duTGlzdCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2Ryb3Bkb3duLWxpc3QnO1xuaW1wb3J0IHtUb29sdGlwfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IG9uQ2xpY2tPdXRzaWRlIGZyb20gJ3JlYWN0LW9uY2xpY2tvdXRzaWRlJztcbmltcG9ydCB7RklFTERfT1BUU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtUT09MVElQX0ZPUk1BVFMsIFRPT0xUSVBfRk9STUFUX1RZUEVTLCBUT09MVElQX0tFWX0gZnJvbSAnY29uc3RhbnRzL3Rvb2x0aXAnO1xuaW1wb3J0IHtnZXRGb3JtYXR0ZXJ9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5jb25zdCBUSU1FX0RJU1BMQVkgPSAnMjAyMC0wNS0xMSAxNDowMCc7XG5jb25zdCBnZXRWYWx1ZSA9IGZtdCA9PiBmbXRbVE9PTFRJUF9LRVldO1xuXG5jb25zdCBhZGREVGltZUxhYmVsID0gZm9ybWF0cyA9PlxuICBmb3JtYXRzLm1hcChmID0+ICh7XG4gICAgLi4uZixcbiAgICBsYWJlbDpcbiAgICAgIGYudHlwZSA9PT0gVE9PTFRJUF9GT1JNQVRfVFlQRVMuREFURV9USU1FIHx8IGYudHlwZSA9PT0gVE9PTFRJUF9GT1JNQVRfVFlQRVMuREFURVxuICAgICAgICA/IGdldEZvcm1hdHRlcihnZXRWYWx1ZShmKSkoVElNRV9ESVNQTEFZKVxuICAgICAgICA6IGYubGFiZWxcbiAgfSkpO1xuXG5mdW5jdGlvbiBnZXRGb3JtYXRMYWJlbHMoZmllbGRzLCBmaWVsZE5hbWUpIHtcbiAgY29uc3QgZmllbGRUeXBlID0gZmllbGRzLmZpbmQoZiA9PiBmLm5hbWUgPT09IGZpZWxkTmFtZSkudHlwZTtcbiAgY29uc3QgdG9vbHRpcFR5cGVzID0gKGZpZWxkVHlwZSAmJiBGSUVMRF9PUFRTW2ZpZWxkVHlwZV0uZm9ybWF0LnRvb2x0aXApIHx8IFtdO1xuICBjb25zdCBmb3JtYXRMYWJlbHMgPSBPYmplY3QudmFsdWVzKFRPT0xUSVBfRk9STUFUUykuZmlsdGVyKHQgPT4gdG9vbHRpcFR5cGVzLmluY2x1ZGVzKHQudHlwZSkpO1xuXG4gIHJldHVybiBhZGREVGltZUxhYmVsKGZvcm1hdExhYmVscyk7XG59XG5cbmNvbnN0IENoaWNrbGV0QWRkb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgQ2hpY2tsZXRBZGRvbiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1yaWdodDogNHB4O1xuYDtcblxuY29uc3QgU3R5bGVkUG9wb3ZlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAtNjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgei1pbmRleDogMTAxO1xuYDtcblxuY29uc3QgaGFzaFN0eWxlcyA9IHtcbiAgU0hPVzogJ1NIT1cnLFxuICBBQ1RJVkU6ICdBQ1RJVkUnXG59O1xuXG5jb25zdCBJY29uRGl2ID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3Rvb2x0aXAtY2hpY2tsZXRfX2ljb24nXG59KWBcbiAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5zdGF0dXMgPT09IGhhc2hTdHlsZXMuU0hPV1xuICAgICAgPyBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JBY3RpdmVcbiAgICAgIDogcHJvcHMuc3RhdHVzID09PSBoYXNoU3R5bGVzLkFDVElWRVxuICAgICAgPyBwcm9wcy50aGVtZS5hY3RpdmVDb2xvclxuICAgICAgOiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuYDtcblxuZnVuY3Rpb24gZ2V0Rm9ybWF0VG9vbHRpcChmb3JtYXRMYWJlbHMsIGZvcm1hdCkge1xuICBpZiAoIWZvcm1hdCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGZvcm1hdExhYmVsID0gZm9ybWF0TGFiZWxzLmZpbmQoZmwgPT4gZ2V0VmFsdWUoZmwpID09PSBmb3JtYXQpO1xuICBpZiAoZm9ybWF0TGFiZWwpIHtcbiAgICByZXR1cm4gZm9ybWF0TGFiZWwubGFiZWw7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBmb3JtYXQgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoZm9ybWF0LCBudWxsLCAyKSA6IFN0cmluZyhmb3JtYXQpO1xufVxuXG5mdW5jdGlvbiBUb29sdGlwQ2hpY2tsZXRGYWN0b3J5KGRhdGFJZCwgY29uZmlnLCBvbkNoYW5nZSwgZmllbGRzKSB7XG4gIGNsYXNzIFRvb2x0aXBDaGlja2xldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICBzaG93OiBmYWxzZVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrT3V0c2lkZSA9IGUgPT4ge1xuICAgICAgaWYgKHRoaXMubm9kZS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvdzogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2Rpc2FibGVkLCBuYW1lLCByZW1vdmV9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtzaG93fSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCB0b29sdGlwRmllbGQgPSBjb25maWcuZmllbGRzVG9TaG93W2RhdGFJZF0uZmluZChcbiAgICAgICAgZmllbGRUb1Nob3cgPT4gZmllbGRUb1Nob3cubmFtZSA9PT0gbmFtZVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGZvcm1hdExhYmVscyA9IGdldEZvcm1hdExhYmVscyhmaWVsZHMsIHRvb2x0aXBGaWVsZC5uYW1lKTtcbiAgICAgIGNvbnN0IGhhc0Zvcm1hdCA9IEJvb2xlYW4odG9vbHRpcEZpZWxkLmZvcm1hdCk7XG4gICAgICBjb25zdCBzZWxlY3Rpb25JbmRleCA9IGZvcm1hdExhYmVscy5maW5kSW5kZXgoZmwgPT4gZ2V0VmFsdWUoZmwpID09PSB0b29sdGlwRmllbGQuZm9ybWF0KTtcbiAgICAgIGNvbnN0IGhhc2hTdHlsZSA9IHNob3cgPyBoYXNoU3R5bGVzLlNIT1cgOiBoYXNGb3JtYXQgPyBoYXNoU3R5bGVzLkFDVElWRSA6IG51bGw7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDaGlja2xldEJ1dHRvbiByZWY9e25vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpfT5cbiAgICAgICAgICA8Q2hpY2tsZXRUYWc+e25hbWV9PC9DaGlja2xldFRhZz5cbiAgICAgICAgICB7Zm9ybWF0TGFiZWxzLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgICAgPENoaWNrbGV0QWRkb25XcmFwcGVyPlxuICAgICAgICAgICAgICA8Q2hpY2tsZXRBZGRvbiBkYXRhLXRpcCBkYXRhLWZvcj17YGFkZG9uLSR7bmFtZX1gfT5cbiAgICAgICAgICAgICAgICA8SWNvbkRpdiBzdGF0dXM9e2hhc2hTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8SGFzaFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4cHhcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6IEJvb2xlYW4oIXNob3cpfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkRpdj5cbiAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD17YGFkZG9uLSR7bmFtZX1gfSBlZmZlY3Q9XCJzb2xpZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtoYXNGb3JtYXQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0Rm9ybWF0VG9vbHRpcChmb3JtYXRMYWJlbHMsIHRvb2x0aXBGaWVsZC5mb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydmaWVsZFNlbGVjdG9yLmZvcm1hdHRpbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgPC9DaGlja2xldEFkZG9uPlxuICAgICAgICAgICAgICB7c2hvdyAmJiAoXG4gICAgICAgICAgICAgICAgPFN0eWxlZFBvcG92ZXI+XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2Zvcm1hdExhYmVsc31cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uSW5kZXg9e3NlbGVjdGlvbkluZGV4fVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtpdGVtID0+IGl0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIG9uT3B0aW9uU2VsZWN0ZWQ9eyhyZXN1bHQsIGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZEZpZWxkc1RvU2hvdyA9IGNvbmZpZy5maWVsZHNUb1Nob3dbZGF0YUlkXTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHNUb1Nob3cgPSBvbGRGaWVsZHNUb1Nob3cubWFwKGZpZWxkVG9TaG93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZFRvU2hvdy5uYW1lID09PSBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZ2V0VmFsdWUocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZFRvU2hvdztcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNUb1Nob3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnLmZpZWxkc1RvU2hvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFJZF06IGZpZWxkc1RvU2hvd1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UobmV3Q29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRQb3BvdmVyPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9DaGlja2xldEFkZG9uV3JhcHBlcj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxEZWxldGUgb25DbGljaz17ZGlzYWJsZWQgPyBudWxsIDogcmVtb3ZlfSAvPlxuICAgICAgICA8L0NoaWNrbGV0QnV0dG9uPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9uQ2xpY2tPdXRzaWRlKFRvb2x0aXBDaGlja2xldCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBDaGlja2xldEZhY3Rvcnk7XG4iXX0=