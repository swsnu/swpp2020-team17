"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FieldListItemFactory = void 0;

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _itemSelector = _interopRequireDefault(require("./item-selector/item-selector"));

var _fieldToken = _interopRequireDefault(require("../common/field-token"));

var _dropdownList = require("./item-selector/dropdown-list");

var _utils = require("../../utils/utils");

var _dataUtils = require("../../utils/data-utils");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  margin: 0 4px 0 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var defaultDisplayOption = function defaultDisplayOption(d) {
  return d.name;
};

var StyledToken = _styledComponents["default"].div(_templateObject()); // custom list Item


var FieldListItemFactory = function FieldListItemFactory() {
  var showToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var FieldListItem = function FieldListItem(_ref) {
    var value = _ref.value,
        _ref$displayOption = _ref.displayOption,
        displayOption = _ref$displayOption === void 0 ? defaultDisplayOption : _ref$displayOption;
    return _react["default"].createElement("div", {
      className: "field-selector_list-item"
    }, showToken ? _react["default"].createElement(StyledToken, null, _react["default"].createElement(_fieldToken["default"], {
      type: value.type
    })) : null, _react["default"].createElement("span", {
      className: _dropdownList.classList.listItemAnchor
    }, displayOption(value)));
  };

  return FieldListItem;
};

exports.FieldListItemFactory = FieldListItemFactory;

var SuggestedFieldHeader = function SuggestedFieldHeader() {
  return _react["default"].createElement("div", null, "Suggested Field");
};

var FieldType = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].arrayOf(_propTypes["default"].shape({
  name: _propTypes["default"].string,
  format: _propTypes["default"].string
})), _propTypes["default"].shape({
  format: _propTypes["default"].string,
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  tableFieldIndex: _propTypes["default"].number,
  type: _propTypes["default"].number
})]);

var FieldSelector =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(FieldSelector, _Component);

  function FieldSelector() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, FieldSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(FieldSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldsSelector", function (props) {
      return props.fields;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filteredFieldsSelector", function (props) {
      return props.fields.filter(function (field) {
        return !(0, _utils.toArray)(props.value).find(function (d) {
          return d.name ? d.name === field.name : d === field.name;
        });
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "valueSelector", function (props) {
      return props.value;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterFieldTypesSelector", function (props) {
      return props.filterFieldTypes;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showTokenSelector", function (props) {
      return props.showToken;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedItemsSelector", (0, _reselect.createSelector)(_this.fieldsSelector, _this.valueSelector, function (fields, value) {
      return (0, _utils.toArray)(value).map(function (d) {
        return fields.find(function (f) {
          return (0, _dataUtils.notNullorUndefined)(d) && d.name ? d.name === defaultDisplayOption(f) : d === defaultDisplayOption(f);
        });
      }).filter(function (d) {
        return d;
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldOptionsSelector", (0, _reselect.createSelector)(_this.filteredFieldsSelector, _this.filterFieldTypesSelector, function (fields, filterFieldTypes) {
      if (!filterFieldTypes) {
        return fields;
      }

      var filters = Array.isArray(filterFieldTypes) ? filterFieldTypes : [filterFieldTypes];
      return fields.filter(function (f) {
        return filters.includes(f.type);
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldListItemSelector", (0, _reselect.createSelector)(_this.showTokenSelector, FieldListItemFactory));
    return _this;
  }

  (0, _createClass2["default"])(FieldSelector, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "field-selector"
      }, _react["default"].createElement(_itemSelector["default"], {
        getOptionValue: function getOptionValue(d) {
          return d;
        },
        closeOnSelect: this.props.closeOnSelect,
        displayOption: defaultDisplayOption,
        filterOption: "name",
        fixedOptions: this.props.suggested,
        inputTheme: this.props.inputTheme,
        isError: this.props.error,
        selectedItems: this.selectedItemsSelector(this.props),
        erasable: this.props.erasable,
        options: this.fieldOptionsSelector(this.props),
        multiSelect: this.props.multiSelect,
        placeholder: this.props.placeholder,
        placement: this.props.placement,
        onChange: this.props.onSelect,
        DropDownLineItemRenderComponent: this.fieldListItemSelector(this.props),
        DropdownHeaderComponent: this.props.suggested ? SuggestedFieldHeader : null,
        CustomChickletComponent: this.props.CustomChickletComponent
      }));
    }
  }]);
  return FieldSelector;
}(_react.Component);

(0, _defineProperty2["default"])(FieldSelector, "propTypes", {
  fields: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].arrayOf(FieldType)]),
  onSelect: _propTypes["default"].func.isRequired,
  placement: _propTypes["default"].string,
  value: FieldType,
  filterFieldTypes: _propTypes["default"].oneOfType([FieldType, _propTypes["default"].arrayOf(FieldType)]),
  inputTheme: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  erasable: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  multiSelect: _propTypes["default"].bool,
  closeOnSelect: _propTypes["default"].bool,
  showToken: _propTypes["default"].bool,
  suggested: _propTypes["default"].arrayOf(_propTypes["default"].any),
  CustomChickletComponent: _propTypes["default"].func
});
(0, _defineProperty2["default"])(FieldSelector, "defaultProps", {
  erasable: true,
  error: false,
  fields: [],
  onSelect: function onSelect() {},
  placement: 'bottom',
  value: null,
  multiSelect: false,
  closeOnSelect: true,
  showToken: true,
  placeholder: 'placeholder.selectField'
});
var _default = FieldSelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlzcGxheU9wdGlvbiIsImQiLCJuYW1lIiwiU3R5bGVkVG9rZW4iLCJzdHlsZWQiLCJkaXYiLCJGaWVsZExpc3RJdGVtRmFjdG9yeSIsInNob3dUb2tlbiIsIkZpZWxkTGlzdEl0ZW0iLCJ2YWx1ZSIsImRpc3BsYXlPcHRpb24iLCJ0eXBlIiwiY2xhc3NMaXN0IiwibGlzdEl0ZW1BbmNob3IiLCJTdWdnZXN0ZWRGaWVsZEhlYWRlciIsIkZpZWxkVHlwZSIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsImFycmF5T2YiLCJzaGFwZSIsImZvcm1hdCIsImlkIiwidGFibGVGaWVsZEluZGV4IiwibnVtYmVyIiwiRmllbGRTZWxlY3RvciIsInByb3BzIiwiZmllbGRzIiwiZmlsdGVyIiwiZmllbGQiLCJmaW5kIiwiZmlsdGVyRmllbGRUeXBlcyIsImZpZWxkc1NlbGVjdG9yIiwidmFsdWVTZWxlY3RvciIsIm1hcCIsImYiLCJmaWx0ZXJlZEZpZWxkc1NlbGVjdG9yIiwiZmlsdGVyRmllbGRUeXBlc1NlbGVjdG9yIiwiZmlsdGVycyIsIkFycmF5IiwiaXNBcnJheSIsImluY2x1ZGVzIiwic2hvd1Rva2VuU2VsZWN0b3IiLCJjbG9zZU9uU2VsZWN0Iiwic3VnZ2VzdGVkIiwiaW5wdXRUaGVtZSIsImVycm9yIiwic2VsZWN0ZWRJdGVtc1NlbGVjdG9yIiwiZXJhc2FibGUiLCJmaWVsZE9wdGlvbnNTZWxlY3RvciIsIm11bHRpU2VsZWN0IiwicGxhY2Vob2xkZXIiLCJwbGFjZW1lbnQiLCJvblNlbGVjdCIsImZpZWxkTGlzdEl0ZW1TZWxlY3RvciIsIkN1c3RvbUNoaWNrbGV0Q29tcG9uZW50IiwiQ29tcG9uZW50IiwiYXJyYXkiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcblxuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICcuL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5pbXBvcnQgRmllbGRUb2tlbiBmcm9tICcuLi9jb21tb24vZmllbGQtdG9rZW4nO1xuaW1wb3J0IHtjbGFzc0xpc3R9IGZyb20gJy4vaXRlbS1zZWxlY3Rvci9kcm9wZG93bi1saXN0JztcbmltcG9ydCB7dG9BcnJheX0gZnJvbSAndXRpbHMvdXRpbHMnO1xuaW1wb3J0IHtub3ROdWxsb3JVbmRlZmluZWR9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5jb25zdCBkZWZhdWx0RGlzcGxheU9wdGlvbiA9IGQgPT4gZC5uYW1lO1xuXG5jb25zdCBTdHlsZWRUb2tlbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDRweCAwIDA7XG5gO1xuXG4vLyBjdXN0b20gbGlzdCBJdGVtXG5leHBvcnQgY29uc3QgRmllbGRMaXN0SXRlbUZhY3RvcnkgPSAoc2hvd1Rva2VuID0gdHJ1ZSkgPT4ge1xuICBjb25zdCBGaWVsZExpc3RJdGVtID0gKHt2YWx1ZSwgZGlzcGxheU9wdGlvbiA9IGRlZmF1bHREaXNwbGF5T3B0aW9ufSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtc2VsZWN0b3JfbGlzdC1pdGVtXCI+XG4gICAgICB7c2hvd1Rva2VuID8gKFxuICAgICAgICA8U3R5bGVkVG9rZW4+XG4gICAgICAgICAgPEZpZWxkVG9rZW4gdHlwZT17dmFsdWUudHlwZX0gLz5cbiAgICAgICAgPC9TdHlsZWRUb2tlbj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc0xpc3QubGlzdEl0ZW1BbmNob3J9PntkaXNwbGF5T3B0aW9uKHZhbHVlKX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIEZpZWxkTGlzdEl0ZW07XG59O1xuXG5jb25zdCBTdWdnZXN0ZWRGaWVsZEhlYWRlciA9ICgpID0+IDxkaXY+U3VnZ2VzdGVkIEZpZWxkPC9kaXY+O1xuXG5jb25zdCBGaWVsZFR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfSlcbiAgKSxcbiAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YWJsZUZpZWxkSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdHlwZTogUHJvcFR5cGVzLm51bWJlclxuICB9KVxuXSk7XG5cbmNsYXNzIEZpZWxkU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZpZWxkczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5LCBQcm9wVHlwZXMuYXJyYXlPZihGaWVsZFR5cGUpXSksXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcGxhY2VtZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBGaWVsZFR5cGUsXG4gICAgZmlsdGVyRmllbGRUeXBlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbRmllbGRUeXBlLCBQcm9wVHlwZXMuYXJyYXlPZihGaWVsZFR5cGUpXSksXG4gICAgaW5wdXRUaGVtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlcmFzYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICAgIG11bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93VG9rZW46IFByb3BUeXBlcy5ib29sLFxuICAgIHN1Z2dlc3RlZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gICAgQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBlcmFzYWJsZTogdHJ1ZSxcbiAgICBlcnJvcjogZmFsc2UsXG4gICAgZmllbGRzOiBbXSxcbiAgICBvblNlbGVjdDogKCkgPT4ge30sXG4gICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICB2YWx1ZTogbnVsbCxcbiAgICBtdWx0aVNlbGVjdDogZmFsc2UsXG4gICAgY2xvc2VPblNlbGVjdDogdHJ1ZSxcbiAgICBzaG93VG9rZW46IHRydWUsXG4gICAgcGxhY2Vob2xkZXI6ICdwbGFjZWhvbGRlci5zZWxlY3RGaWVsZCdcbiAgfTtcblxuICBmaWVsZHNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmZpZWxkcztcbiAgZmlsdGVyZWRGaWVsZHNTZWxlY3RvciA9IHByb3BzID0+XG4gICAgcHJvcHMuZmllbGRzLmZpbHRlcihcbiAgICAgIGZpZWxkID0+ICF0b0FycmF5KHByb3BzLnZhbHVlKS5maW5kKGQgPT4gKGQubmFtZSA/IGQubmFtZSA9PT0gZmllbGQubmFtZSA6IGQgPT09IGZpZWxkLm5hbWUpKVxuICAgICk7XG4gIHZhbHVlU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy52YWx1ZTtcbiAgZmlsdGVyRmllbGRUeXBlc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmlsdGVyRmllbGRUeXBlcztcbiAgc2hvd1Rva2VuU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5zaG93VG9rZW47XG5cbiAgc2VsZWN0ZWRJdGVtc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy5maWVsZHNTZWxlY3RvciwgdGhpcy52YWx1ZVNlbGVjdG9yLCAoZmllbGRzLCB2YWx1ZSkgPT5cbiAgICB0b0FycmF5KHZhbHVlKVxuICAgICAgLm1hcChkID0+XG4gICAgICAgIGZpZWxkcy5maW5kKGYgPT5cbiAgICAgICAgICBub3ROdWxsb3JVbmRlZmluZWQoZCkgJiYgZC5uYW1lXG4gICAgICAgICAgICA/IGQubmFtZSA9PT0gZGVmYXVsdERpc3BsYXlPcHRpb24oZilcbiAgICAgICAgICAgIDogZCA9PT0gZGVmYXVsdERpc3BsYXlPcHRpb24oZilcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLmZpbHRlcihkID0+IGQpXG4gICk7XG5cbiAgZmllbGRPcHRpb25zU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICB0aGlzLmZpbHRlcmVkRmllbGRzU2VsZWN0b3IsXG4gICAgdGhpcy5maWx0ZXJGaWVsZFR5cGVzU2VsZWN0b3IsXG4gICAgKGZpZWxkcywgZmlsdGVyRmllbGRUeXBlcykgPT4ge1xuICAgICAgaWYgKCFmaWx0ZXJGaWVsZFR5cGVzKSB7XG4gICAgICAgIHJldHVybiBmaWVsZHM7XG4gICAgICB9XG4gICAgICBjb25zdCBmaWx0ZXJzID0gQXJyYXkuaXNBcnJheShmaWx0ZXJGaWVsZFR5cGVzKSA/IGZpbHRlckZpZWxkVHlwZXMgOiBbZmlsdGVyRmllbGRUeXBlc107XG4gICAgICByZXR1cm4gZmllbGRzLmZpbHRlcihmID0+IGZpbHRlcnMuaW5jbHVkZXMoZi50eXBlKSk7XG4gICAgfVxuICApO1xuXG4gIGZpZWxkTGlzdEl0ZW1TZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuc2hvd1Rva2VuU2VsZWN0b3IsIEZpZWxkTGlzdEl0ZW1GYWN0b3J5KTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtc2VsZWN0b3JcIj5cbiAgICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICAgIGdldE9wdGlvblZhbHVlPXtkID0+IGR9XG4gICAgICAgICAgY2xvc2VPblNlbGVjdD17dGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0fVxuICAgICAgICAgIGRpc3BsYXlPcHRpb249e2RlZmF1bHREaXNwbGF5T3B0aW9ufVxuICAgICAgICAgIGZpbHRlck9wdGlvbj1cIm5hbWVcIlxuICAgICAgICAgIGZpeGVkT3B0aW9ucz17dGhpcy5wcm9wcy5zdWdnZXN0ZWR9XG4gICAgICAgICAgaW5wdXRUaGVtZT17dGhpcy5wcm9wcy5pbnB1dFRoZW1lfVxuICAgICAgICAgIGlzRXJyb3I9e3RoaXMucHJvcHMuZXJyb3J9XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtcz17dGhpcy5zZWxlY3RlZEl0ZW1zU2VsZWN0b3IodGhpcy5wcm9wcyl9XG4gICAgICAgICAgZXJhc2FibGU9e3RoaXMucHJvcHMuZXJhc2FibGV9XG4gICAgICAgICAgb3B0aW9ucz17dGhpcy5maWVsZE9wdGlvbnNTZWxlY3Rvcih0aGlzLnByb3BzKX1cbiAgICAgICAgICBtdWx0aVNlbGVjdD17dGhpcy5wcm9wcy5tdWx0aVNlbGVjdH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICBwbGFjZW1lbnQ9e3RoaXMucHJvcHMucGxhY2VtZW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uU2VsZWN0fVxuICAgICAgICAgIERyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnQ9e3RoaXMuZmllbGRMaXN0SXRlbVNlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgIERyb3Bkb3duSGVhZGVyQ29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3RlZCA/IFN1Z2dlc3RlZEZpZWxkSGVhZGVyIDogbnVsbH1cbiAgICAgICAgICBDdXN0b21DaGlja2xldENvbXBvbmVudD17dGhpcy5wcm9wcy5DdXN0b21DaGlja2xldENvbXBvbmVudH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmllbGRTZWxlY3RvcjtcbiJdfQ==