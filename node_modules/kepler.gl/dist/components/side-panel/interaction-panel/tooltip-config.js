"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactIntl = require("react-intl");

var _styledComponents2 = require("../../common/styled-components");

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _datasetTag = _interopRequireDefault(require("../common/dataset-tag"));

var _tooltipChicklet = _interopRequireDefault(require("./tooltip-config/tooltip-chicklet"));

var _switch = _interopRequireDefault(require("../../common/switch"));

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _tooltip = require("../../../constants/tooltip");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: flex;\n  font-size: ", ";\n  justify-content: space-between;\n  line-height: 11px;\n  margin-bottom: 8px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inherit;\n  padding: 0;\n\n  .button.clear-all {\n    background: transparent;\n    color: ", ";\n    margin: 0 0 0 8px;\n    padding: 0;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .item-selector > div > div {\n    overflow: visible;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

TooltipConfigFactory.deps = [_datasetTag["default"]];

var TooltipConfigWrapper = _styledComponents["default"].div(_templateObject());

var ButtonWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.subtextColor;
}, function (props) {
  return props.theme.textColor;
});

var CompareSwitchWrapper = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.inputFontSize;
});

function TooltipConfigFactory(DatasetTag) {
  var TooltipConfig =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(TooltipConfig, _Component);

    function TooltipConfig() {
      (0, _classCallCheck2["default"])(this, TooltipConfig);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TooltipConfig).apply(this, arguments));
    }

    (0, _createClass2["default"])(TooltipConfig, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            config = _this$props.config,
            datasets = _this$props.datasets,
            _onChange = _this$props.onChange,
            intl = _this$props.intl;
        return _react["default"].createElement(TooltipConfigWrapper, null, Object.keys(config.fieldsToShow).map(function (dataId) {
          return _react["default"].createElement(_styledComponents2.SidePanelSection, {
            key: dataId
          }, _react["default"].createElement(_styledComponents2.SBFlexboxNoMargin, null, _react["default"].createElement(DatasetTag, {
            dataset: datasets[dataId]
          }), Boolean(config.fieldsToShow[dataId].length) && _react["default"].createElement(ButtonWrapper, null, _react["default"].createElement(_styledComponents2.Button, {
            className: "clear-all",
            onClick: function onClick() {
              var newConfig = _objectSpread({}, config, {
                fieldsToShow: _objectSpread({}, config.fieldsToShow, (0, _defineProperty2["default"])({}, dataId, []))
              });

              _onChange(newConfig);
            },
            width: "48px",
            secondary: true
          }, _react["default"].createElement(_reactIntl.FormattedMessage, {
            id: "fieldSelector.clearAll"
          })))), _react["default"].createElement(_fieldSelector["default"], {
            fields: datasets[dataId].fields,
            value: config.fieldsToShow[dataId],
            onSelect: function onSelect(selected) {
              var newConfig = _objectSpread({}, config, {
                fieldsToShow: _objectSpread({}, config.fieldsToShow, (0, _defineProperty2["default"])({}, dataId, selected.map(function (f) {
                  return config.fieldsToShow[dataId].find(function (tooltipField) {
                    return tooltipField.name === f.name;
                  }) || {
                    name: f.name,
                    // default initial tooltip is null
                    format: null
                  };
                })))
              });

              _onChange(newConfig);
            },
            closeOnSelect: false,
            multiSelect: true,
            inputTheme: "secondary",
            CustomChickletComponent: (0, _tooltipChicklet["default"])(dataId, config, _onChange, datasets[dataId].fields)
          }));
        }), _react["default"].createElement(CompareSwitchWrapper, null, _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "compare.modeLabel"
        }), _react["default"].createElement(_switch["default"], {
          checked: config.compareMode,
          id: "compare-mode-toggle",
          onChange: function onChange() {
            var newConfig = _objectSpread({}, config, {
              compareMode: !config.compareMode
            });

            _onChange(newConfig);
          },
          secondary: true
        })), _react["default"].createElement(_styledComponents2.SidePanelSection, null, _react["default"].createElement(_styledComponents2.PanelLabel, null, _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "compare.typeLabel"
        })), _react["default"].createElement(_itemSelector["default"], {
          disabled: !config.compareMode,
          displayOption: function displayOption(d) {
            return intl.formatMessage({
              id: "compare.types.".concat(d)
            });
          },
          selectedItems: config.compareType,
          options: Object.values(_tooltip.COMPARE_TYPES),
          multiSelect: false,
          searchable: false,
          inputTheme: 'secondary',
          getOptionValue: function getOptionValue(d) {
            return d;
          },
          onChange: function onChange(option) {
            var newConfig = _objectSpread({}, config, {
              compareType: option
            });

            _onChange(newConfig);
          }
        })));
      }
    }]);
    return TooltipConfig;
  }(_react.Component);

  return (0, _reactIntl.injectIntl)(TooltipConfig);
}

var _default = TooltipConfigFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvaW50ZXJhY3Rpb24tcGFuZWwvdG9vbHRpcC1jb25maWcuanMiXSwibmFtZXMiOlsiVG9vbHRpcENvbmZpZ0ZhY3RvcnkiLCJkZXBzIiwiRGF0YXNldFRhZ0ZhY3RvcnkiLCJUb29sdGlwQ29uZmlnV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkJ1dHRvbldyYXBwZXIiLCJwcm9wcyIsInRoZW1lIiwic3VidGV4dENvbG9yIiwidGV4dENvbG9yIiwiQ29tcGFyZVN3aXRjaFdyYXBwZXIiLCJsYWJlbENvbG9yIiwiaW5wdXRGb250U2l6ZSIsIkRhdGFzZXRUYWciLCJUb29sdGlwQ29uZmlnIiwiY29uZmlnIiwiZGF0YXNldHMiLCJvbkNoYW5nZSIsImludGwiLCJPYmplY3QiLCJrZXlzIiwiZmllbGRzVG9TaG93IiwibWFwIiwiZGF0YUlkIiwiQm9vbGVhbiIsImxlbmd0aCIsIm5ld0NvbmZpZyIsImZpZWxkcyIsInNlbGVjdGVkIiwiZiIsImZpbmQiLCJ0b29sdGlwRmllbGQiLCJuYW1lIiwiZm9ybWF0IiwiY29tcGFyZU1vZGUiLCJkIiwiZm9ybWF0TWVzc2FnZSIsImlkIiwiY29tcGFyZVR5cGUiLCJ2YWx1ZXMiLCJDT01QQVJFX1RZUEVTIiwib3B0aW9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsb0JBQW9CLENBQUNDLElBQXJCLEdBQTRCLENBQUNDLHNCQUFELENBQTVCOztBQUVBLElBQU1DLG9CQUFvQixHQUFHQyw2QkFBT0MsR0FBVixtQkFBMUI7O0FBTUEsSUFBTUMsYUFBYSxHQUFHRiw2QkFBT0MsR0FBVixxQkFNTixVQUFBRSxLQUFLO0FBQUEsU0FB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RSxVQUFBLFVBQVUsRUFBRSxLQVZkO0FBV0UsVUFBQSxVQUFVLEVBQUUsV0FYZDtBQVlFLFVBQUEsY0FBYyxFQUFFLHdCQUFBTCxDQUFDO0FBQUEsbUJBQUlBLENBQUo7QUFBQSxXQVpuQjtBQWFFLFVBQUEsUUFBUSxFQUFFLGtCQUFBTSxNQUFNLEVBQUk7QUFDbEIsZ0JBQU1mLFNBQVMscUJBQ1ZYLE1BRFU7QUFFYnVCLGNBQUFBLFdBQVcsRUFBRUc7QUFGQSxjQUFmOztBQUlBeEIsWUFBQUEsU0FBUSxDQUFDUyxTQUFELENBQVI7QUFDRDtBQW5CSCxVQUpGLENBNUVGLENBREY7QUF5R0Q7QUE3R3FDO0FBQUE7QUFBQSxJQUNaZ0IsZ0JBRFk7O0FBZ0h4QyxTQUFPLDJCQUFXNUIsYUFBWCxDQUFQO0FBQ0Q7O2VBRWNmLG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZSwgaW5qZWN0SW50bH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQge1xuICBTaWRlUGFuZWxTZWN0aW9uLFxuICBTQkZsZXhib3hOb01hcmdpbixcbiAgQnV0dG9uLFxuICBQYW5lbExhYmVsXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGaWVsZFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcbmltcG9ydCBEYXRhc2V0VGFnRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvY29tbW9uL2RhdGFzZXQtdGFnJztcbmltcG9ydCBUb29sdGlwQ2hpY2tsZXRGYWN0b3J5IGZyb20gJy4vdG9vbHRpcC1jb25maWcvdG9vbHRpcC1jaGlja2xldCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N3aXRjaCc7XG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5pbXBvcnQge0NPTVBBUkVfVFlQRVN9IGZyb20gJ2NvbnN0YW50cy90b29sdGlwJztcblRvb2x0aXBDb25maWdGYWN0b3J5LmRlcHMgPSBbRGF0YXNldFRhZ0ZhY3RvcnldO1xuXG5jb25zdCBUb29sdGlwQ29uZmlnV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIC5pdGVtLXNlbGVjdG9yID4gZGl2ID4gZGl2IHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuYDtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDA7XG5cbiAgLmJ1dHRvbi5jbGVhci1hbGwge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvcn07XG4gICAgbWFyZ2luOiAwIDAgMCA4cHg7XG4gICAgcGFkZGluZzogMDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IENvbXBhcmVTd2l0Y2hXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dEZvbnRTaXplfTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuYDtcblxuZnVuY3Rpb24gVG9vbHRpcENvbmZpZ0ZhY3RvcnkoRGF0YXNldFRhZykge1xuICBjbGFzcyBUb29sdGlwQ29uZmlnIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7Y29uZmlnLCBkYXRhc2V0cywgb25DaGFuZ2UsIGludGx9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUb29sdGlwQ29uZmlnV3JhcHBlcj5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoY29uZmlnLmZpZWxkc1RvU2hvdykubWFwKGRhdGFJZCA9PiAoXG4gICAgICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbiBrZXk9e2RhdGFJZH0+XG4gICAgICAgICAgICAgIDxTQkZsZXhib3hOb01hcmdpbj5cbiAgICAgICAgICAgICAgICA8RGF0YXNldFRhZyBkYXRhc2V0PXtkYXRhc2V0c1tkYXRhSWRdfSAvPlxuICAgICAgICAgICAgICAgIHtCb29sZWFuKGNvbmZpZy5maWVsZHNUb1Nob3dbZGF0YUlkXS5sZW5ndGgpICYmIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xlYXItYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzVG9TaG93OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnLmZpZWxkc1RvU2hvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YUlkXTogW11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKG5ld0NvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQ4cHhcIlxuICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJmaWVsZFNlbGVjdG9yLmNsZWFyQWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9TQkZsZXhib3hOb01hcmdpbj5cbiAgICAgICAgICAgICAgPEZpZWxkU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBmaWVsZHM9e2RhdGFzZXRzW2RhdGFJZF0uZmllbGRzfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb25maWcuZmllbGRzVG9TaG93W2RhdGFJZF19XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9e3NlbGVjdGVkID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZHNUb1Nob3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5jb25maWcuZmllbGRzVG9TaG93LFxuICAgICAgICAgICAgICAgICAgICAgIFtkYXRhSWRdOiBzZWxlY3RlZC5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICBmID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5maWVsZHNUb1Nob3dbZGF0YUlkXS5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBGaWVsZCA9PiB0b29sdGlwRmllbGQubmFtZSA9PT0gZi5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgfHwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGYubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IGluaXRpYWwgdG9vbHRpcCBpcyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZShuZXdDb25maWcpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xvc2VPblNlbGVjdD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgbXVsdGlTZWxlY3RcbiAgICAgICAgICAgICAgICBpbnB1dFRoZW1lPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBDdXN0b21DaGlja2xldENvbXBvbmVudD17VG9vbHRpcENoaWNrbGV0RmFjdG9yeShcbiAgICAgICAgICAgICAgICAgIGRhdGFJZCxcbiAgICAgICAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgZGF0YXNldHNbZGF0YUlkXS5maWVsZHNcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxDb21wYXJlU3dpdGNoV3JhcHBlcj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiY29tcGFyZS5tb2RlTGFiZWxcIiAvPlxuICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcuY29tcGFyZU1vZGV9XG4gICAgICAgICAgICAgIGlkPVwiY29tcGFyZS1tb2RlLXRvZ2dsZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgICAgICAgICAgY29tcGFyZU1vZGU6ICFjb25maWcuY29tcGFyZU1vZGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKG5ld0NvbmZpZyk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHNlY29uZGFyeVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbXBhcmVTd2l0Y2hXcmFwcGVyPlxuICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgPFBhbmVsTGFiZWw+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiY29tcGFyZS50eXBlTGFiZWxcIiAvPlxuICAgICAgICAgICAgPC9QYW5lbExhYmVsPlxuICAgICAgICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWNvbmZpZy5jb21wYXJlTW9kZX1cbiAgICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17ZCA9PlxuICAgICAgICAgICAgICAgIGludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICBpZDogYGNvbXBhcmUudHlwZXMuJHtkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e2NvbmZpZy5jb21wYXJlVHlwZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17T2JqZWN0LnZhbHVlcyhDT01QQVJFX1RZUEVTKX1cbiAgICAgICAgICAgICAgbXVsdGlTZWxlY3Q9e2ZhbHNlfVxuICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgaW5wdXRUaGVtZT17J3NlY29uZGFyeSd9XG4gICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXtkID0+IGR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgICAgICAgIGNvbXBhcmVUeXBlOiBvcHRpb25cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKG5ld0NvbmZpZyk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgPC9Ub29sdGlwQ29uZmlnV3JhcHBlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluamVjdEludGwoVG9vbHRpcENvbmZpZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBDb25maWdGYWN0b3J5O1xuIl19