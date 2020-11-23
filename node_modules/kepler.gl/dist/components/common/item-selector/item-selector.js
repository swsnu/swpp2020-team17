"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.uniqby"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _accessor = _interopRequireDefault(require("./accessor"));

var _chickletedInput = _interopRequireDefault(require("./chickleted-input"));

var _typeahead = _interopRequireDefault(require("./typeahead"));

var _icons = require("../icons");

var _dropdownList = _interopRequireWildcard(require("./dropdown-list"));

var _utils = require("../../../utils/utils");

var _reactIntl = require("react-intl");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border: 0;\n  width: 100%;\n  left: 0;\n  z-index: ", ";\n  position: absolute;\n  bottom: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 6px;\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  overflow: hidden;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n\n  .list__item__anchor {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDropdownSelect = _styledComponents["default"].div.attrs({
  className: 'item-selector__dropdown'
})(_templateObject(), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryInput : props.theme.input;
}, function (props) {
  return props.theme.dropdownListAnchor;
});

var DropdownSelectValue = _styledComponents["default"].span(_templateObject2(), function (props) {
  return props.hasPlaceholder ? props.theme.selectColorPlaceHolder : props.theme.selectColor;
});

var DropdownSelectErase = _styledComponents["default"].div(_templateObject3());

var DropdownWrapper = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.dropdownWrapperZ;
}, function (props) {
  return props.placement === 'top' ? props.theme.inputBoxHeight : 'auto';
}, function (props) {
  return props.placement === 'bottom' ? "".concat(props.theme.dropdownWapperMargin, "px") : 'auto';
}, function (props) {
  return props.placement === 'top' ? "".concat(props.theme.dropdownWapperMargin, "px") : 'auto';
});

var ItemSelector =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ItemSelector, _Component);

  function ItemSelector() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, ItemSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ItemSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      showTypeahead: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function () {
      _this._hideTypeahead();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBlur", function () {
      // note: chickleted input is not a real form element so we call onBlur()
      // when we feel the events are appropriate
      if (_this.props.onBlur) {
        _this.props.onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeItem", function (item, e) {
      // only used when multiSelect = true
      e.preventDefault();
      e.stopPropagation();
      var selectedItems = _this.props.selectedItems;
      var index = selectedItems.findIndex(function (t) {
        return t === item;
      });

      if (index < 0) {
        return;
      }

      var items = [].concat((0, _toConsumableArray2["default"])(selectedItems.slice(0, index)), (0, _toConsumableArray2["default"])(selectedItems.slice(index + 1, selectedItems.length)));

      _this.props.onChange(items);

      if (_this.props.closeOnSelect) {
        _this.setState({
          showTypeahead: false
        });

        _this._onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_selectItem", function (item) {
      var getValue = _accessor["default"].generateOptionToStringFor(_this.props.getOptionValue || _this.props.displayOption);

      var previousSelected = (0, _utils.toArray)(_this.props.selectedItems);

      if (_this.props.multiSelect) {
        var items = (0, _lodash["default"])(previousSelected.concat((0, _utils.toArray)(item)), getValue);

        _this.props.onChange(items);
      } else {
        _this.props.onChange(getValue(item));
      }

      if (_this.props.closeOnSelect) {
        _this.setState({
          showTypeahead: false
        });

        _this._onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onErase", function (e) {
      e.stopPropagation();

      _this.props.onChange(null);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showTypeahead", function (e) {
      e.stopPropagation();

      if (!_this.props.disabled) {
        _this.setState({
          showTypeahead: true
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(ItemSelector, [{
    key: "_hideTypeahead",
    value: function _hideTypeahead() {
      this.setState({
        showTypeahead: false
      });

      this._onBlur();
    }
  }, {
    key: "_renderDropdown",
    value: function _renderDropdown(intl) {
      return _react["default"].createElement(DropdownWrapper, {
        placement: this.props.placement
      }, _react["default"].createElement(_typeahead["default"], {
        customClasses: {
          results: 'list-selector',
          input: 'typeahead__input',
          listItem: 'list__item',
          listAnchor: 'list__item__anchor'
        },
        options: this.props.options,
        filterOption: this.props.filterOption,
        fixedOptions: this.props.fixedOptions,
        placeholder: intl.formatMessage({
          id: 'placeholder.search'
        }),
        onOptionSelected: this._selectItem,
        customListComponent: this.props.DropDownRenderComponent,
        customListHeaderComponent: this.props.DropdownHeaderComponent,
        customListItemComponent: this.props.DropDownLineItemRenderComponent,
        displayOption: _accessor["default"].generateOptionToStringFor(this.props.displayOption),
        searchable: this.props.searchable,
        showOptionsWhenEmpty: true,
        selectedItems: (0, _utils.toArray)(this.props.selectedItems)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var selected = (0, _utils.toArray)(this.props.selectedItems);
      var hasValue = selected.length;

      var displayOption = _accessor["default"].generateOptionToStringFor(this.props.displayOption);

      var dropdownSelectProps = {
        className: (0, _classnames["default"])({
          active: this.state.showTypeahead
        }),
        disabled: this.props.disabled,
        onClick: this._showTypeahead,
        onFocus: this._showPopover,
        error: this.props.isError,
        inputTheme: this.props.inputTheme
      };
      var intl = this.props.intl;
      return _react["default"].createElement("div", {
        className: "item-selector"
      }, _react["default"].createElement("div", {
        style: {
          position: 'relative'
        }
      }, this.props.multiSelect ? _react["default"].createElement(_chickletedInput["default"], (0, _extends2["default"])({}, dropdownSelectProps, {
        selectedItems: (0, _utils.toArray)(this.props.selectedItems),
        placeholder: this.props.placeholder,
        displayOption: displayOption,
        removeItem: this._removeItem,
        CustomChickletComponent: this.props.CustomChickletComponent
      })) : _react["default"].createElement(StyledDropdownSelect, dropdownSelectProps, _react["default"].createElement(DropdownSelectValue, {
        hasPlaceholder: !hasValue,
        className: "item-selector__dropdown__value"
      }, hasValue ? _react["default"].createElement(this.props.DropDownLineItemRenderComponent, {
        displayOption: displayOption,
        value: selected[0]
      }) : _react["default"].createElement(_reactIntl.FormattedMessage, {
        id: this.props.placeholder
      })), this.props.erasable && hasValue ? _react["default"].createElement(DropdownSelectErase, null, _react["default"].createElement(_icons.Delete, {
        height: "12px",
        onClick: this._onErase
      })) : null), this.state.showTypeahead && this._renderDropdown(intl)));
    }
  }]);
  return ItemSelector;
}(_react.Component);

(0, _defineProperty2["default"])(ItemSelector, "propTypes", {
  // required properties
  selectedItems: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].bool, _propTypes["default"].object]),
  onChange: _propTypes["default"].func.isRequired,
  options: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  // optional properties
  fixedOptions: _propTypes["default"].arrayOf(_propTypes["default"].any),
  erasable: _propTypes["default"].bool,
  displayOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  getOptionValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  filterOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  placement: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  isError: _propTypes["default"].bool,
  multiSelect: _propTypes["default"].bool,
  inputTheme: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  closeOnSelect: _propTypes["default"].bool,
  DropdownHeaderComponent: _propTypes["default"].func,
  DropDownRenderComponent: _propTypes["default"].func,
  DropDownLineItemRenderComponent: _propTypes["default"].func,
  CustomChickletComponent: _propTypes["default"].func
});
(0, _defineProperty2["default"])(ItemSelector, "defaultProps", {
  erasable: false,
  placement: 'bottom',
  selectedItems: [],
  displayOption: null,
  getOptionValue: null,
  filterOption: null,
  fixedOptions: null,
  inputTheme: 'primary',
  multiSelect: true,
  placeholder: 'placeholder.enterValue',
  closeOnSelect: true,
  searchable: true,
  dropdownHeader: null,
  DropdownHeaderComponent: null,
  DropDownRenderComponent: _dropdownList["default"],
  DropDownLineItemRenderComponent: _dropdownList.ListItem
});

var _default = (0, _reactIntl.injectIntl)((0, _reactOnclickoutside["default"])(ItemSelector));

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3IuanMiXSwibmFtZXMiOlsiU3R5bGVkRHJvcGRvd25TZWxlY3QiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsInByb3BzIiwiaW5wdXRUaGVtZSIsInRoZW1lIiwic2Vjb25kYXJ5SW5wdXQiLCJpbnB1dCIsImRyb3Bkb3duTGlzdEFuY2hvciIsIkRyb3Bkb3duU2VsZWN0VmFsdWUiLCJzcGFuIiwiaGFzUGxhY2Vob2xkZXIiLCJzZWxlY3RDb2xvclBsYWNlSG9sZGVyIiwic2VsZWN0Q29sb3IiLCJEcm9wZG93blNlbGVjdEVyYXNlIiwiRHJvcGRvd25XcmFwcGVyIiwiZHJvcGRvd25XcmFwcGVyWiIsInBsYWNlbWVudCIsImlucHV0Qm94SGVpZ2h0IiwiZHJvcGRvd25XYXBwZXJNYXJnaW4iLCJJdGVtU2VsZWN0b3IiLCJzaG93VHlwZWFoZWFkIiwiX2hpZGVUeXBlYWhlYWQiLCJvbkJsdXIiLCJpdGVtIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic2VsZWN0ZWRJdGVtcyIsImluZGV4IiwiZmluZEluZGV4IiwidCIsIml0ZW1zIiwic2xpY2UiLCJsZW5ndGgiLCJvbkNoYW5nZSIsImNsb3NlT25TZWxlY3QiLCJzZXRTdGF0ZSIsIl9vbkJsdXIiLCJnZXRWYWx1ZSIsIkFjY2Vzc29yIiwiZ2VuZXJhdGVPcHRpb25Ub1N0cmluZ0ZvciIsImdldE9wdGlvblZhbHVlIiwiZGlzcGxheU9wdGlvbiIsInByZXZpb3VzU2VsZWN0ZWQiLCJtdWx0aVNlbGVjdCIsImNvbmNhdCIsImRpc2FibGVkIiwiaW50bCIsInJlc3VsdHMiLCJsaXN0SXRlbSIsImxpc3RBbmNob3IiLCJvcHRpb25zIiwiZmlsdGVyT3B0aW9uIiwiZml4ZWRPcHRpb25zIiwiZm9ybWF0TWVzc2FnZSIsImlkIiwiX3NlbGVjdEl0ZW0iLCJEcm9wRG93blJlbmRlckNvbXBvbmVudCIsIkRyb3Bkb3duSGVhZGVyQ29tcG9uZW50IiwiRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudCIsInNlYXJjaGFibGUiLCJzZWxlY3RlZCIsImhhc1ZhbHVlIiwiZHJvcGRvd25TZWxlY3RQcm9wcyIsImFjdGl2ZSIsInN0YXRlIiwib25DbGljayIsIl9zaG93VHlwZWFoZWFkIiwib25Gb2N1cyIsIl9zaG93UG9wb3ZlciIsImVycm9yIiwiaXNFcnJvciIsInBvc2l0aW9uIiwicGxhY2Vob2xkZXIiLCJfcmVtb3ZlSXRlbSIsIkN1c3RvbUNoaWNrbGV0Q29tcG9uZW50IiwiZXJhc2FibGUiLCJfb25FcmFzZSIsIl9yZW5kZXJEcm9wZG93biIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImFycmF5Iiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsIm9iamVjdCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsImFueSIsImRyb3Bkb3duSGVhZGVyIiwiRHJvcGRvd25MaXN0IiwiTGlzdEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLG9CQUFvQixHQUFHQyw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQzVDQyxFQUFBQSxTQUFTLEVBQUU7QUFEaUMsQ0FBakIsQ0FBSCxvQkFHdEIsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsVUFBTixLQUFxQixXQUFyQixHQUFtQ0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLGNBQS9DLEdBQWdFSCxLQUFLLENBQUNFLEtBQU4sQ0FBWUUsS0FBakY7QUFBQSxDQUhpQixFQU1wQixVQUFBSixLQUFL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QUFFLElBWlE7QUFhcEIrQixFQUFBQSxjQUFjLEVBQUUsSUFiSTtBQWNwQmpDLEVBQUFBLHVCQUF1QixFQUFFLElBZEw7QUFlcEJELEVBQUFBLHVCQUF1QixFQUFFbUMsd0JBZkw7QUFnQnBCakMsRUFBQUEsK0JBQStCLEVBQUVrQztBQWhCYixDOztlQXlMVCwyQkFBVyxxQ0FBc0IxRSxZQUF0QixDQUFYLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB1bmlxQnkgZnJvbSAnbG9kYXNoLnVuaXFieSc7XG5pbXBvcnQgbGlzdGVuc1RvQ2xpY2tPdXRzaWRlIGZyb20gJ3JlYWN0LW9uY2xpY2tvdXRzaWRlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnLi9hY2Nlc3Nvcic7XG5pbXBvcnQgQ2hpY2tsZXRlZElucHV0IGZyb20gJy4vY2hpY2tsZXRlZC1pbnB1dCc7XG5pbXBvcnQgVHlwZWFoZWFkIGZyb20gJy4vdHlwZWFoZWFkJztcbmltcG9ydCB7RGVsZXRlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgRHJvcGRvd25MaXN0LCB7TGlzdEl0ZW19IGZyb20gJy4vZHJvcGRvd24tbGlzdCc7XG5cbmltcG9ydCB7dG9BcnJheX0gZnJvbSAndXRpbHMvdXRpbHMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcblxuY29uc3QgU3R5bGVkRHJvcGRvd25TZWxlY3QgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd24nXG59KWBcbiAgJHtwcm9wcyA9PiAocHJvcHMuaW5wdXRUaGVtZSA9PT0gJ3NlY29uZGFyeScgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dCA6IHByb3BzLnRoZW1lLmlucHV0KX07XG5cbiAgLmxpc3RfX2l0ZW1fX2FuY2hvciB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RBbmNob3J9O1xuICB9XG5gO1xuXG5jb25zdCBEcm9wZG93blNlbGVjdFZhbHVlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuaGFzUGxhY2Vob2xkZXIgPyBwcm9wcy50aGVtZS5zZWxlY3RDb2xvclBsYWNlSG9sZGVyIDogcHJvcHMudGhlbWUuc2VsZWN0Q29sb3J9O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuY29uc3QgRHJvcGRvd25TZWxlY3RFcmFzZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBEcm9wZG93bldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duV3JhcHBlclp9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMucGxhY2VtZW50ID09PSAndG9wJyA/IHByb3BzLnRoZW1lLmlucHV0Qm94SGVpZ2h0IDogJ2F1dG8nKX07XG4gIG1hcmdpbi10b3A6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5wbGFjZW1lbnQgPT09ICdib3R0b20nID8gYCR7cHJvcHMudGhlbWUuZHJvcGRvd25XYXBwZXJNYXJnaW59cHhgIDogJ2F1dG8nfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PlxuICAgIHByb3BzLnBsYWNlbWVudCA9PT0gJ3RvcCcgPyBgJHtwcm9wcy50aGVtZS5kcm9wZG93bldhcHBlck1hcmdpbn1weGAgOiAnYXV0byd9O1xuYDtcblxuY2xhc3MgSXRlbVNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyByZXF1aXJlZCBwcm9wZXJ0aWVzXG4gICAgc2VsZWN0ZWRJdGVtczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG5cbiAgICAvLyBvcHRpb25hbCBwcm9wZXJ0aWVzXG4gICAgZml4ZWRPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICBlcmFzYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzcGxheU9wdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBnZXRPcHRpb25WYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBmaWx0ZXJPcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgcGxhY2VtZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaW5wdXRUaGVtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIERyb3Bkb3duSGVhZGVyQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBEcm9wRG93blJlbmRlckNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBlcmFzYWJsZTogZmFsc2UsXG4gICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcbiAgICBkaXNwbGF5T3B0aW9uOiBudWxsLFxuICAgIGdldE9wdGlvblZhbHVlOiBudWxsLFxuICAgIGZpbHRlck9wdGlvbjogbnVsbCxcbiAgICBmaXhlZE9wdGlvbnM6IG51bGwsXG4gICAgaW5wdXRUaGVtZTogJ3ByaW1hcnknLFxuICAgIG11bHRpU2VsZWN0OiB0cnVlLFxuICAgIHBsYWNlaG9sZGVyOiAncGxhY2Vob2xkZXIuZW50ZXJWYWx1ZScsXG4gICAgY2xvc2VPblNlbGVjdDogdHJ1ZSxcbiAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgIGRyb3Bkb3duSGVhZGVyOiBudWxsLFxuICAgIERyb3Bkb3duSGVhZGVyQ29tcG9uZW50OiBudWxsLFxuICAgIERyb3BEb3duUmVuZGVyQ29tcG9uZW50OiBEcm9wZG93bkxpc3QsXG4gICAgRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudDogTGlzdEl0ZW1cbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBzaG93VHlwZWFoZWFkOiBmYWxzZVxuICB9O1xuXG4gIGhhbmRsZUNsaWNrT3V0c2lkZSA9ICgpID0+IHtcbiAgICB0aGlzLl9oaWRlVHlwZWFoZWFkKCk7XG4gIH07XG5cbiAgX2hpZGVUeXBlYWhlYWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1R5cGVhaGVhZDogZmFsc2V9KTtcbiAgICB0aGlzLl9vbkJsdXIoKTtcbiAgfVxuXG4gIF9vbkJsdXIgPSAoKSA9PiB7XG4gICAgLy8gbm90ZTogY2hpY2tsZXRlZCBpbnB1dCBpcyBub3QgYSByZWFsIGZvcm0gZWxlbWVudCBzbyB3ZSBjYWxsIG9uQmx1cigpXG4gICAgLy8gd2hlbiB3ZSBmZWVsIHRoZSBldmVudHMgYXJlIGFwcHJvcHJpYXRlXG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgIH1cbiAgfTtcblxuICBfcmVtb3ZlSXRlbSA9IChpdGVtLCBlKSA9PiB7XG4gICAgLy8gb25seSB1c2VkIHdoZW4gbXVsdGlTZWxlY3QgPSB0cnVlXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3Qge3NlbGVjdGVkSXRlbXN9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkSXRlbXMuZmluZEluZGV4KHQgPT4gdCA9PT0gaXRlbSk7XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAuLi5zZWxlY3RlZEl0ZW1zLnNsaWNlKDAsIGluZGV4KSxcbiAgICAgIC4uLnNlbGVjdGVkSXRlbXMuc2xpY2UoaW5kZXggKyAxLCBzZWxlY3RlZEl0ZW1zLmxlbmd0aClcbiAgICBdO1xuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpdGVtcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93VHlwZWFoZWFkOiBmYWxzZX0pO1xuICAgICAgdGhpcy5fb25CbHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIF9zZWxlY3RJdGVtID0gaXRlbSA9PiB7XG4gICAgY29uc3QgZ2V0VmFsdWUgPSBBY2Nlc3Nvci5nZW5lcmF0ZU9wdGlvblRvU3RyaW5nRm9yKFxuICAgICAgdGhpcy5wcm9wcy5nZXRPcHRpb25WYWx1ZSB8fCB0aGlzLnByb3BzLmRpc3BsYXlPcHRpb25cbiAgICApO1xuXG4gICAgY29uc3QgcHJldmlvdXNTZWxlY3RlZCA9IHRvQXJyYXkodGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm11bHRpU2VsZWN0KSB7XG4gICAgICBjb25zdCBpdGVtcyA9IHVuaXFCeShwcmV2aW91c1NlbGVjdGVkLmNvbmNhdCh0b0FycmF5KGl0ZW0pKSwgZ2V0VmFsdWUpO1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpdGVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZ2V0VmFsdWUoaXRlbSkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dUeXBlYWhlYWQ6IGZhbHNlfSk7XG4gICAgICB0aGlzLl9vbkJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgX29uRXJhc2UgPSBlID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobnVsbCk7XG4gIH07XG5cbiAgX3Nob3dUeXBlYWhlYWQgPSBlID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dUeXBlYWhlYWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcmVuZGVyRHJvcGRvd24oaW50bCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25XcmFwcGVyIHBsYWNlbWVudD17dGhpcy5wcm9wcy5wbGFjZW1lbnR9PlxuICAgICAgICA8VHlwZWFoZWFkXG4gICAgICAgICAgY3VzdG9tQ2xhc3Nlcz17e1xuICAgICAgICAgICAgcmVzdWx0czogJ2xpc3Qtc2VsZWN0b3InLFxuICAgICAgICAgICAgaW5wdXQ6ICd0eXBlYWhlYWRfX2lucHV0JyxcbiAgICAgICAgICAgIGxpc3RJdGVtOiAnbGlzdF9faXRlbScsXG4gICAgICAgICAgICBsaXN0QW5jaG9yOiAnbGlzdF9faXRlbV9fYW5jaG9yJ1xuICAgICAgICAgIH19XG4gICAgICAgICAgb3B0aW9ucz17dGhpcy5wcm9wcy5vcHRpb25zfVxuICAgICAgICAgIGZpbHRlck9wdGlvbj17dGhpcy5wcm9wcy5maWx0ZXJPcHRpb259XG4gICAgICAgICAgZml4ZWRPcHRpb25zPXt0aGlzLnByb3BzLmZpeGVkT3B0aW9uc31cbiAgICAgICAgICBwbGFjZWhvbGRlcj17aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ3BsYWNlaG9sZGVyLnNlYXJjaCd9KX1cbiAgICAgICAgICBvbk9wdGlvblNlbGVjdGVkPXt0aGlzLl9zZWxlY3RJdGVtfVxuICAgICAgICAgIGN1c3RvbUxpc3RDb21wb25lbnQ9e3RoaXMucHJvcHMuRHJvcERvd25SZW5kZXJDb21wb25lbnR9XG4gICAgICAgICAgY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudD17dGhpcy5wcm9wcy5Ecm9wZG93bkhlYWRlckNvbXBvbmVudH1cbiAgICAgICAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudD17dGhpcy5wcm9wcy5Ecm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50fVxuICAgICAgICAgIGRpc3BsYXlPcHRpb249e0FjY2Vzc29yLmdlbmVyYXRlT3B0aW9uVG9TdHJpbmdGb3IodGhpcy5wcm9wcy5kaXNwbGF5T3B0aW9uKX1cbiAgICAgICAgICBzZWFyY2hhYmxlPXt0aGlzLnByb3BzLnNlYXJjaGFibGV9XG4gICAgICAgICAgc2hvd09wdGlvbnNXaGVuRW1wdHlcbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXt0b0FycmF5KHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtcyl9XG4gICAgICAgIC8+XG4gICAgICA8L0Ryb3Bkb3duV3JhcHBlcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMpO1xuICAgIGNvbnN0IGhhc1ZhbHVlID0gc2VsZWN0ZWQubGVuZ3RoO1xuICAgIGNvbnN0IGRpc3BsYXlPcHRpb24gPSBBY2Nlc3Nvci5nZW5lcmF0ZU9wdGlvblRvU3RyaW5nRm9yKHRoaXMucHJvcHMuZGlzcGxheU9wdGlvbik7XG5cbiAgICBjb25zdCBkcm9wZG93blNlbGVjdFByb3BzID0ge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc25hbWVzKHtcbiAgICAgICAgYWN0aXZlOiB0aGlzLnN0YXRlLnNob3dUeXBlYWhlYWRcbiAgICAgIH0pLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICBvbkNsaWNrOiB0aGlzLl9zaG93VHlwZWFoZWFkLFxuICAgICAgb25Gb2N1czogdGhpcy5fc2hvd1BvcG92ZXIsXG4gICAgICBlcnJvcjogdGhpcy5wcm9wcy5pc0Vycm9yLFxuICAgICAgaW5wdXRUaGVtZTogdGhpcy5wcm9wcy5pbnB1dFRoZW1lXG4gICAgfTtcbiAgICBjb25zdCBpbnRsID0gdGhpcy5wcm9wcy5pbnRsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1zZWxlY3RvclwiPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cbiAgICAgICAgICB7LyogdGhpcyBwYXJ0IGlzIHVzZWQgdG8gZGlzcGxheSB0aGUgbGFiZWwgKi99XG4gICAgICAgICAge3RoaXMucHJvcHMubXVsdGlTZWxlY3QgPyAoXG4gICAgICAgICAgICA8Q2hpY2tsZXRlZElucHV0XG4gICAgICAgICAgICAgIHsuLi5kcm9wZG93blNlbGVjdFByb3BzfVxuICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXt0b0FycmF5KHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtcyl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtkaXNwbGF5T3B0aW9ufVxuICAgICAgICAgICAgICByZW1vdmVJdGVtPXt0aGlzLl9yZW1vdmVJdGVtfVxuICAgICAgICAgICAgICBDdXN0b21DaGlja2xldENvbXBvbmVudD17dGhpcy5wcm9wcy5DdXN0b21DaGlja2xldENvbXBvbmVudH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxTdHlsZWREcm9wZG93blNlbGVjdCB7Li4uZHJvcGRvd25TZWxlY3RQcm9wc30+XG4gICAgICAgICAgICAgIDxEcm9wZG93blNlbGVjdFZhbHVlXG4gICAgICAgICAgICAgICAgaGFzUGxhY2Vob2xkZXI9eyFoYXNWYWx1ZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtLXNlbGVjdG9yX19kcm9wZG93bl9fdmFsdWVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hhc1ZhbHVlID8gKFxuICAgICAgICAgICAgICAgICAgPHRoaXMucHJvcHMuRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtkaXNwbGF5T3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRbMF19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duU2VsZWN0VmFsdWU+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmVyYXNhYmxlICYmIGhhc1ZhbHVlID8gKFxuICAgICAgICAgICAgICAgIDxEcm9wZG93blNlbGVjdEVyYXNlPlxuICAgICAgICAgICAgICAgICAgPERlbGV0ZSBoZWlnaHQ9XCIxMnB4XCIgb25DbGljaz17dGhpcy5fb25FcmFzZX0gLz5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duU2VsZWN0RXJhc2U+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9TdHlsZWREcm9wZG93blNlbGVjdD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsvKiB0aGlzIHBhcnQgaXMgdXNlZCB0byBidWlsdCB0aGUgbGlzdCAqL31cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93VHlwZWFoZWFkICYmIHRoaXMuX3JlbmRlckRyb3Bkb3duKGludGwpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bChsaXN0ZW5zVG9DbGlja091dHNpZGUoSXRlbVNlbGVjdG9yKSk7XG4iXX0=