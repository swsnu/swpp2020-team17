"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledConfigGroupHeader = exports.StyledLayerConfigGroup = exports.ConfigGroupCollapsibleHeader = exports.ConfigGroupCollapsibleContent = exports.StyledLayerConfigGroupAction = exports.StyledLayerConfigGroupLabel = void 0;

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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactIntl = require("react-intl");

var _switch = _interopRequireDefault(require("../../common/switch"));

var _infoHelper = _interopRequireDefault(require("../../common/info-helper"));

var _icons = require("../../common/icons");

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.disabled {\n    opacity: 0.3;\n    pointer-events: none;\n    * {\n      pointer-events: none;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n\n  :hover {\n    cursor: pointer;\n    .layer-config-group__label {\n      color: ", ";\n      border-left: 2px solid ", ";\n    }\n\n    .layer-config-group__action {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-left: 18px;\n  margin-bottom: 12px;\n\n  &.disabled {\n    opacity: 0.3;\n    pointer-events: none;\n  }\n  &.collapsed {\n    .layer-config-group__header__collapsible {\n      overflow: visible;\n      max-height: 600px;\n    }\n    .layer-config-group__content {\n      .layer-config-group__content__collapsible {\n        overflow: hidden;\n        max-height: 0;\n      }\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  overflow: visible;\n  overflow: hidden;\n  max-height: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  overflow: visible;\n  transition: max-height 0.3s ease-out;\n  height: max-content;\n  max-height: 600px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-left: 2px solid ", ";\n  line-height: 12px;\n  margin-left: -12px;\n  padding-left: 10px;\n  display: flex;\n  align-items: center;\n\n  span {\n    color: ", ";\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 0.2px;\n    text-transform: capitalize;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLayerConfigGroupLabel = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.textColor;
});

exports.StyledLayerConfigGroupLabel = StyledLayerConfigGroupLabel;

var StyledLayerConfigGroupAction = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.textColor;
});

exports.StyledLayerConfigGroupAction = StyledLayerConfigGroupAction;

var ConfigGroupCollapsibleContent = _styledComponents["default"].div.attrs({
  className: 'layer-config-group__content__collapsible'
})(_templateObject3());

exports.ConfigGroupCollapsibleContent = ConfigGroupCollapsibleContent;

var ConfigGroupCollapsibleHeader = _styledComponents["default"].div.attrs({
  className: 'layer-config-group__header__collapsible'
})(_templateObject4());

exports.ConfigGroupCollapsibleHeader = ConfigGroupCollapsibleHeader;

var StyledLayerConfigGroup = _styledComponents["default"].div(_templateObject5());

exports.StyledLayerConfigGroup = StyledLayerConfigGroup;

var StyledConfigGroupHeader = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});

exports.StyledConfigGroupHeader = StyledConfigGroupHeader;

var ConfigGroupContent = _styledComponents["default"].div(_templateObject7());

var LayerConfigGroup =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(LayerConfigGroup, _Component);

  function LayerConfigGroup() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, LayerConfigGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(LayerConfigGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      collapsed: true
    });
    return _this;
  }

  (0, _createClass2["default"])(LayerConfigGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          label = _this$props.label,
          children = _this$props.children,
          property = _this$props.property,
          layer = _this$props.layer,
          _onChange2 = _this$props.onChange,
          collapsible = _this$props.collapsible,
          description = _this$props.description,
          disabled = _this$props.disabled;
      var collapsed = this.state.collapsed;
      return _react["default"].createElement(StyledLayerConfigGroup, {
        className: (0, _classnames["default"])('layer-config-group', {
          collapsed: collapsed,
          disabled: disabled
        })
      }, _react["default"].createElement(StyledConfigGroupHeader, {
        className: "layer-config-group__header",
        onClick: function onClick() {
          return _this2.setState({
            collapsed: !_this2.state.collapsed
          });
        }
      }, _react["default"].createElement(StyledLayerConfigGroupLabel, {
        className: "layer-config-group__label"
      }, _react["default"].createElement("span", null, _react["default"].createElement(_reactIntl.FormattedMessage, {
        id: label || 'misc.empty',
        defaultMessage: label
      })), description && _react["default"].createElement(_infoHelper["default"], {
        description: description,
        id: label
      })), _react["default"].createElement(StyledLayerConfigGroupAction, {
        className: "layer-config-group__action"
      }, property ? _react["default"].createElement(_switch["default"], {
        checked: layer.config.visConfig[property],
        id: "".concat(layer.id, "-").concat(property),
        onChange: function onChange() {
          return _onChange2((0, _defineProperty2["default"])({}, property, !layer.config.visConfig[property]));
        }
      }) : null, collapsible ? _react["default"].createElement(_icons.VertThreeDots, {
        height: "18px"
      }) : null)), _react["default"].createElement(ConfigGroupContent, {
        className: (0, _classnames["default"])('layer-config-group__content', {
          disabled: property && !layer.config.visConfig[property]
        })
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      //  invoked after a component is instantiated as well as before it is re-rendered
      if (props.expanded && state.collapsed) {
        return {
          collapsed: false
        };
      }

      return null;
    }
  }]);
  return LayerConfigGroup;
}(_react.Component);

(0, _defineProperty2["default"])(LayerConfigGroup, "defaultProps", {
  collapsible: false,
  expanded: false,
  onChange: function onChange() {},
  description: null,
  disabled: false
});
(0, _reactLifecyclesCompat.polyfill)(LayerConfigGroup);
var _default = LayerConfigGroup;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlnLWdyb3VwLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwidGV4dENvbG9yIiwiU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbiIsIkNvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJDb25maWdHcm91cENvbGxhcHNpYmxlSGVhZGVyIiwiU3R5bGVkTGF5ZXJDb25maWdHcm91cCIsIlN0eWxlZENvbmZpZ0dyb3VwSGVhZGVyIiwidGV4dENvbG9ySGwiLCJDb25maWdHcm91cENvbnRlbnQiLCJMYXllckNvbmZpZ0dyb3VwIiwiY29sbGFwc2VkIiwibGFiZWwiLCJjaGlsZHJlbiIsInByb3BlcnR5IiwibGF5ZXIiLCJvbkNoYW5nZSIsImNvbGxhcHNpYmxlIiwiZGVzY3JpcHRpb24iLCJkaXNhYmxlZCIsInN0YXRlIiwic2V0U3RhdGUiLCJjb25maWciLCJ2aXNDb25maWciLCJpZCIsImV4cGFuZGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLDJCQUEyQixHQUFHQyw2QkFBT0MsR0FBVixvQkFDYixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQWhCO0FBQUEsQ0FEUSxFQVMzQixVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFNBQWhCO0FB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LHNDQUFHRixRQUFILEVBQWMsQ0FBQ0MsS0FBSyxDQUFDTyxNQUFOLENBQWFDLFNBQWIsQ0FBdUJULFFBQXZCLENBQWYsRUFBZDtBQUFBO0FBSFosUUFETyxHQU1MLElBUE4sRUFRR0csV0FBVyxHQUFHLGdDQUFDLG9CQUFEO0FBQWUsUUFBQSxNQUFNLEVBQUM7QUFBdEIsUUFBSCxHQUFxQyxJQVJuRCxDQVZGLENBREYsRUFzQkUsZ0NBQUMsa0JBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBRSw0QkFBVyw2QkFBWCxFQUEwQztBQUNuREUsVUFBQUEsUUFBUSxFQUFFTCxRQUFRLElBQUksQ0FBQ0MsS0FBSyxDQUFDTyxNQUFOLENBQWFDLFNBQWIsQ0FBdUJULFFBQXZCO0FBRDRCLFNBQTFDO0FBRGIsU0FLR0QsUUFMSCxDQXRCRixDQURGO0FBZ0NEOzs7NkNBM0QrQmhCLEssRUFBT3VCLEssRUFBTztBQUM1QztBQUNBLFVBQUl2QixLQUFLLENBQUM0QixRQUFOLElBQWtCTCxLQUFLLENBQUNULFNBQTVCLEVBQXVDO0FBQ3JDLGVBQU87QUFBQ0EsVUFBQUEsU0FBUyxFQUFFO0FBQVosU0FBUDtBQUNEOztBQUVELGFBQU8sSUFBUDtBQUNEOzs7RUFoQjRCZSxnQjs7aUNBQXpCaEIsZ0Isa0JBQ2tCO0FBQ3BCTyxFQUFBQSxXQUFXLEVBQUUsS0FETztBQUVwQlEsRUFBQUEsUUFBUSxFQUFFLEtBRlU7QUFHcEJULEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBSEU7QUFJcEJFLEVBQUFBLFdBQVcsRUFBRSxJQUpPO0FBS3BCQyxFQUFBQSxRQUFRLEVBQUU7QUFMVSxDO0FBc0V4QixxQ0FBU1QsZ0JBQVQ7ZUFFZUEsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cG9seWZpbGx9IGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zd2l0Y2gnO1xuaW1wb3J0IEluZm9IZWxwZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaW5mby1oZWxwZXInO1xuaW1wb3J0IHtWZXJ0VGhyZWVEb3RzfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMYXllckNvbmZpZ0dyb3VwTGFiZWwgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW4tbGVmdDogLTEycHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBzcGFuIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExheWVyQ29uZmlnR3JvdXBBY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50ID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2xheWVyLWNvbmZpZy1ncm91cF9fY29udGVudF9fY29sbGFwc2libGUnXG59KWBcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLW91dDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUhlYWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdsYXllci1jb25maWctZ3JvdXBfX2hlYWRlcl9fY29sbGFwc2libGUnXG59KWBcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGF5ZXJDb25maWdHcm91cCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICAmLmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgJi5jb2xsYXBzZWQge1xuICAgIC5sYXllci1jb25maWctZ3JvdXBfX2hlYWRlcl9fY29sbGFwc2libGUge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICB9XG4gICAgLmxheWVyLWNvbmZpZy1ncm91cF9fY29udGVudCB7XG4gICAgICAubGF5ZXItY29uZmlnLWdyb3VwX19jb250ZW50X19jb2xsYXBzaWJsZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkQ29uZmlnR3JvdXBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLmxheWVyLWNvbmZpZy1ncm91cF9fbGFiZWwge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICB9XG5cbiAgICAubGF5ZXItY29uZmlnLWdyb3VwX19hY3Rpb24ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgQ29uZmlnR3JvdXBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgJi5kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICoge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5jbGFzcyBMYXllckNvbmZpZ0dyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xsYXBzaWJsZTogZmFsc2UsXG4gICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2VcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIC8vICBpbnZva2VkIGFmdGVyIGEgY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZCBhcyB3ZWxsIGFzIGJlZm9yZSBpdCBpcyByZS1yZW5kZXJlZFxuICAgIGlmIChwcm9wcy5leHBhbmRlZCAmJiBzdGF0ZS5jb2xsYXBzZWQpIHtcbiAgICAgIHJldHVybiB7Y29sbGFwc2VkOiBmYWxzZX07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBjb2xsYXBzZWQ6IHRydWVcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGFiZWwsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIHByb3BlcnR5LFxuICAgICAgbGF5ZXIsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGNvbGxhcHNpYmxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkaXNhYmxlZFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge2NvbGxhcHNlZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllckNvbmZpZ0dyb3VwIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5ZXItY29uZmlnLWdyb3VwJywge2NvbGxhcHNlZCwgZGlzYWJsZWR9KX0+XG4gICAgICAgIDxTdHlsZWRDb25maWdHcm91cEhlYWRlclxuICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZy1ncm91cF9faGVhZGVyXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtjb2xsYXBzZWQ6ICF0aGlzLnN0YXRlLmNvbGxhcHNlZH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPFN0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbCBjbGFzc05hbWU9XCJsYXllci1jb25maWctZ3JvdXBfX2xhYmVsXCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2xhYmVsIHx8ICdtaXNjLmVtcHR5J30gZGVmYXVsdE1lc3NhZ2U9e2xhYmVsfSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxJbmZvSGVscGVyIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gaWQ9e2xhYmVsfSAvPn1cbiAgICAgICAgICA8L1N0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbD5cbiAgICAgICAgICA8U3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbiBjbGFzc05hbWU9XCJsYXllci1jb25maWctZ3JvdXBfX2FjdGlvblwiPlxuICAgICAgICAgICAge3Byb3BlcnR5ID8gKFxuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17bGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV19XG4gICAgICAgICAgICAgICAgaWQ9e2Ake2xheWVyLmlkfS0ke3Byb3BlcnR5fWB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKHtbcHJvcGVydHldOiAhbGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV19KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge2NvbGxhcHNpYmxlID8gPFZlcnRUaHJlZURvdHMgaGVpZ2h0PVwiMThweFwiIC8+IDogbnVsbH1cbiAgICAgICAgICA8L1N0eWxlZExheWVyQ29uZmlnR3JvdXBBY3Rpb24+XG4gICAgICAgIDwvU3R5bGVkQ29uZmlnR3JvdXBIZWFkZXI+XG4gICAgICAgIDxDb25maWdHcm91cENvbnRlbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2xheWVyLWNvbmZpZy1ncm91cF9fY29udGVudCcsIHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBwcm9wZXJ0eSAmJiAhbGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Db25maWdHcm91cENvbnRlbnQ+XG4gICAgICA8L1N0eWxlZExheWVyQ29uZmlnR3JvdXA+XG4gICAgKTtcbiAgfVxufVxuXG5wb2x5ZmlsbChMYXllckNvbmZpZ0dyb3VwKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJDb25maWdHcm91cDtcbiJdfQ==