"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _dropdownList = require("../../common/item-selector/dropdown-list");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _defaultSettings = require("../../../constants/default-settings");

var _styledComponents2 = require("../../common/styled-components");

var _reactIntl = require("react-intl");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  // override item-selector dropdown padding\n  .item-selector .item-selector__dropdown {\n    padding: 4px 10px 4px 2px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  background-color: ", ";\n  border-top: 1px solid ", ";\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  padding: ", "px 0 0 ", "px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.list {\n    display: flex;\n    align-items: center;\n\n    .layer-type-selector__item__icon {\n      color: ", ";\n      background-size: ", "px\n        ", "px;\n      margin-right: 12px;\n    }\n  }\n\n  .layer-type-selector__item__icon {\n    color: ", ";\n    display: flex;\n    background-image: url(", ");\n    background-size: ", "px\n      ", "px;\n  }\n\n  .layer-type-selector__item__label {\n    text-transform: capitalize;\n    font-size: 12px;\n    text-align: center;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: ", "px;\n  padding-right: ", "px;\n\n  &.selected {\n    .layer-type-selector__item__icon {\n      border: 1px solid #caf2f4;\n    }\n  }\n\n  :hover,\n  &.selected {\n    cursor: pointer;\n    .layer-type-selector__item__icon {\n      color: ", ";\n    }\n\n    .layer-type-selector__item__label {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ITEM_SIZE = {
  large: 50,
  small: 28
};

var StyledDropdownListItem = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.layerTypeIconPdL;
}, function (props) {
  return props.theme.layerTypeIconPdL;
}, function (props) {
  return props.theme.activeColor;
}, function (props) {
  return props.theme.textColor;
});

var StyledListItem = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.activeColor;
}, function (props) {
  return props.theme.layerTypeIconSizeSM;
}, function (props) {
  return props.theme.layerTypeIconSizeSM;
}, function (props) {
  return props.theme.labelColor;
}, "".concat(_defaultSettings.CLOUDFRONT, "/kepler.gl-layer-icon-bg.png"), function (props) {
  return props.theme.layerTypeIconSizeL;
}, function (props) {
  return props.theme.layerTypeIconSizeL;
}, function (props) {
  return props.theme.labelColor;
});

var DropdownListWrapper = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.dropdownList;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListBorderTop;
}, function (props) {
  return props.theme.layerTypeIconPdL;
}, function (props) {
  return props.theme.layerTypeIconPdL;
});

var LayerTypeListItem = function LayerTypeListItem(_ref) {
  var value = _ref.value,
      isTile = _ref.isTile;
  return _react["default"].createElement(StyledListItem, {
    className: (0, _classnames["default"])('layer-type-selector__item__inner', {
      list: !isTile
    })
  }, _react["default"].createElement("div", {
    className: "layer-type-selector__item__icon"
  }, _react["default"].createElement(value.icon, {
    height: "".concat(isTile ? ITEM_SIZE.large : ITEM_SIZE.small, "px")
  })), _react["default"].createElement("div", {
    className: "layer-type-selector__item__label"
  }, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "layer.type.".concat(value.label.toLowerCase()),
    defaultMessage: value.label
  })));
};

var LayerTypeDropdownList = function LayerTypeDropdownList(props) {
  return _react["default"].createElement(DropdownListWrapper, {
    className: _dropdownList.classList.list
  }, props.options.map(function (value, i) {
    return _react["default"].createElement(StyledDropdownListItem, {
      className: (0, _classnames["default"])('layer-type-selector__item', {
        selected: props.selectedItems.find(function (it) {
          return it.id === value.id;
        }),
        hover: props.selectionIndex === i
      }),
      key: "".concat(value.id, "_").concat(i),
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        props.onOptionSelected(value, e);
      },
      onClick: function onClick(e) {
        e.preventDefault();
        props.onOptionSelected(value, e);
      }
    }, _react["default"].createElement(props.customListItemComponent, {
      value: value,
      isTile: true
    }));
  }));
};

var propTypes = {
  layer: _propTypes["default"].object.isRequired,
  onSelect: _propTypes["default"].func.isRequired
};

var StyledLayerTypeSelector = _styledComponents["default"].div(_templateObject4());

var LayerTypeSelector = function LayerTypeSelector(_ref2) {
  var layer = _ref2.layer,
      layerTypeOptions = _ref2.layerTypeOptions,
      onSelect = _ref2.onSelect,
      theme = _ref2.theme;
  return _react["default"].createElement(_styledComponents2.SidePanelSection, null, _react["default"].createElement(StyledLayerTypeSelector, {
    className: "layer-config__type"
  }, _react["default"].createElement(_itemSelector["default"], {
    selectedItems: layerTypeOptions.find(function (op) {
      return op.id === layer.type;
    }),
    options: layerTypeOptions,
    multiSelect: false,
    placeholder: "placeholder.selectType",
    onChange: onSelect,
    getOptionValue: function getOptionValue(op) {
      return op.id;
    },
    filterOption: "label",
    displayOption: function displayOption(op) {
      return op.label;
    },
    DropDownLineItemRenderComponent: LayerTypeListItem,
    DropDownRenderComponent: LayerTypeDropdownList
  })));
};

LayerTypeSelector.propTypes = propTypes;

var _default = (0, _styledComponents.withTheme)(LayerTypeSelector);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItdHlwZS1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJJVEVNX1NJWkUiLCJsYXJnZSIsInNtYWxsIiwiU3R5bGVkRHJvcGRvd25MaXN0SXRlbSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJsYXllclR5cGVJY29uUGRMIiwiYWN0aXZlQ29sb3IiLCJ0ZXh0Q29sb3IiLCJTdHlsZWRMaXN0SXRlbSIsImxheWVyVHlwZUljb25TaXplU00iLCJsYWJlbENvbG9yIiwiQ0xPVURGUk9OVCIsImxheWVyVHlwZUljb25TaXplTCIsIkRyb3Bkb3duTGlzdFdyYXBwZXIiLCJkcm9wZG93bkxpc3QiLCJkcm9wZG93bkxpc3RCZ2QiLCJkcm9wZG93bkxpc3RCb3JkZXJUb3AiLCJMYXllclR5cGVMaXN0SXRlbSIsInZhbHVlIiwiaXNUaWxlIiwibGlzdCIsImxhYmVsIiwidG9Mb3dlckNhc2UiLCJMYXllclR5cGVEcm9wZG93bkxpc3QiLCJjbGFzc0xpc3QiLCJvcHRpb25zIiwibWFwIiwiaSIsInNlbGVjdGVkIiwic2VsZWN0ZWRJdGVtcyIsImZpbmQiLCJpdCIsImlkIiwiaG92ZXIiLCJzZWxlY3Rpb25JbmRleCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uT3B0aW9uU2VsZWN0ZWQiLCJwcm9wVHlwZXMiLCJsYXllciIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJvblNlbGVjdCIsImZ1bmMiLCJTdHlsZWRMYXllclR5cGVTZWxlY3RvciIsIkxheWVyVHlwZVNlbGVjdG9yIiwibGF5ZXJUeXBlT3B0aW9ucyIsIm9wIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QXVCLGlCQUFpQixDQUFDUixTQUFsQixHQUE4QkEsU0FBOUI7O2VBRWUsaUNBQVVRLGlCQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlZCwge3dpdGhUaGVtZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQge2NsYXNzTGlzdH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9kcm9wZG93bi1saXN0JztcbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcbmltcG9ydCB7Q0xPVURGUk9OVH0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5pbXBvcnQge1NpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmNvbnN0IElURU1fU0laRSA9IHtcbiAgbGFyZ2U6IDUwLFxuICBzbWFsbDogMjhcbn07XG5cbmNvbnN0IFN0eWxlZERyb3Bkb3duTGlzdEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllclR5cGVJY29uUGRMfXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyVHlwZUljb25QZEx9cHg7XG5cbiAgJi5zZWxlY3RlZCB7XG4gICAgLmxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2ljb24ge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NhZjJmNDtcbiAgICB9XG4gIH1cblxuICA6aG92ZXIsXG4gICYuc2VsZWN0ZWQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAubGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9faWNvbiB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY3RpdmVDb2xvcn07XG4gICAgfVxuXG4gICAgLmxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2xhYmVsIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRMaXN0SXRlbSA9IHN0eWxlZC5kaXZgXG4gICYubGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2ljb24ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWN0aXZlQ29sb3J9O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyVHlwZUljb25TaXplU019cHhcbiAgICAgICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllclR5cGVJY29uU2l6ZVNNfXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pY29uIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2Ake0NMT1VERlJPTlR9L2tlcGxlci5nbC1sYXllci1pY29uLWJnLnBuZ2B9KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGF5ZXJUeXBlSWNvblNpemVMfXB4XG4gICAgICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyVHlwZUljb25TaXplTH1weDtcbiAgfVxuXG4gIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19sYWJlbCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgfVxuYDtcblxuY29uc3QgRHJvcGRvd25MaXN0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0fTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2R9O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCb3JkZXJUb3B9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyVHlwZUljb25QZEx9cHggMCAwICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGF5ZXJUeXBlSWNvblBkTH1weDtcbmA7XG5cbmNvbnN0IExheWVyVHlwZUxpc3RJdGVtID0gKHt2YWx1ZSwgaXNUaWxlfSkgPT4gKFxuICA8U3R5bGVkTGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdsYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pbm5lcicsIHtsaXN0OiAhaXNUaWxlfSl9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9faWNvblwiPlxuICAgICAgPHZhbHVlLmljb24gaGVpZ2h0PXtgJHtpc1RpbGUgPyBJVEVNX1NJWkUubGFyZ2UgOiBJVEVNX1NJWkUuc21hbGx9cHhgfSAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9fbGFiZWxcIj5cbiAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgIGlkPXtgbGF5ZXIudHlwZS4ke3ZhbHVlLmxhYmVsLnRvTG93ZXJDYXNlKCl9YH1cbiAgICAgICAgZGVmYXVsdE1lc3NhZ2U9e3ZhbHVlLmxhYmVsfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9TdHlsZWRMaXN0SXRlbT5cbik7XG5cbmNvbnN0IExheWVyVHlwZURyb3Bkb3duTGlzdCA9IHByb3BzID0+IChcbiAgPERyb3Bkb3duTGlzdFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc0xpc3QubGlzdH0+XG4gICAge3Byb3BzLm9wdGlvbnMubWFwKCh2YWx1ZSwgaSkgPT4gKFxuICAgICAgPFN0eWxlZERyb3Bkb3duTGlzdEl0ZW1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdsYXllci10eXBlLXNlbGVjdG9yX19pdGVtJywge1xuICAgICAgICAgIHNlbGVjdGVkOiBwcm9wcy5zZWxlY3RlZEl0ZW1zLmZpbmQoaXQgPT4gaXQuaWQgPT09IHZhbHVlLmlkKSxcbiAgICAgICAgICBob3ZlcjogcHJvcHMuc2VsZWN0aW9uSW5kZXggPT09IGlcbiAgICAgICAgfSl9XG4gICAgICAgIGtleT17YCR7dmFsdWUuaWR9XyR7aX1gfVxuICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHByb3BzLm9uT3B0aW9uU2VsZWN0ZWQodmFsdWUsIGUpO1xuICAgICAgICB9fVxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcHJvcHMub25PcHRpb25TZWxlY3RlZCh2YWx1ZSwgZSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxwcm9wcy5jdXN0b21MaXN0SXRlbUNvbXBvbmVudCB2YWx1ZT17dmFsdWV9IGlzVGlsZSAvPlxuICAgICAgPC9TdHlsZWREcm9wZG93bkxpc3RJdGVtPlxuICAgICkpfVxuICA8L0Ryb3Bkb3duTGlzdFdyYXBwZXI+XG4pO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGxheWVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5jb25zdCBTdHlsZWRMYXllclR5cGVTZWxlY3RvciA9IHN0eWxlZC5kaXZgXG4gIC8vIG92ZXJyaWRlIGl0ZW0tc2VsZWN0b3IgZHJvcGRvd24gcGFkZGluZ1xuICAuaXRlbS1zZWxlY3RvciAuaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd24ge1xuICAgIHBhZGRpbmc6IDRweCAxMHB4IDRweCAycHg7XG4gIH1cbmA7XG5jb25zdCBMYXllclR5cGVTZWxlY3RvciA9ICh7bGF5ZXIsIGxheWVyVHlwZU9wdGlvbnMsIG9uU2VsZWN0LCB0aGVtZX0pID0+IChcbiAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgPFN0eWxlZExheWVyVHlwZVNlbGVjdG9yIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZ19fdHlwZVwiPlxuICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICBzZWxlY3RlZEl0ZW1zPXtsYXllclR5cGVPcHRpb25zLmZpbmQob3AgPT4gb3AuaWQgPT09IGxheWVyLnR5cGUpfVxuICAgICAgICBvcHRpb25zPXtsYXllclR5cGVPcHRpb25zfVxuICAgICAgICBtdWx0aVNlbGVjdD17ZmFsc2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXIuc2VsZWN0VHlwZVwiXG4gICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdH1cbiAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e29wID0+IG9wLmlkfVxuICAgICAgICBmaWx0ZXJPcHRpb249XCJsYWJlbFwiXG4gICAgICAgIGRpc3BsYXlPcHRpb249e29wID0+IG9wLmxhYmVsfVxuICAgICAgICBEcm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50PXtMYXllclR5cGVMaXN0SXRlbX1cbiAgICAgICAgRHJvcERvd25SZW5kZXJDb21wb25lbnQ9e0xheWVyVHlwZURyb3Bkb3duTGlzdH1cbiAgICAgIC8+XG4gICAgPC9TdHlsZWRMYXllclR5cGVTZWxlY3Rvcj5cbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuKTtcblxuTGF5ZXJUeXBlU2VsZWN0b3IucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoTGF5ZXJUeXBlU2VsZWN0b3IpO1xuIl19