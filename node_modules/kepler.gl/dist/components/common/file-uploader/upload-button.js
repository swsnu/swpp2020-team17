"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UploadButton = void 0;

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

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  color: ", ";\n  font-size: 12px;\n  text-decoration: underline;\n\n  :hover {\n    cursor: pointer;\n    font-weight: 500;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/**
@typedef {{
  onUpload: (files: FileList, event: any) => void;
}} UploadButtonProps
*/
var Wrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.textColorLT;
});
/*
Inspired by https://github.com/okonet/react-dropzone/blob/master/src/index.js
*/

/** @augments React.Component<UploadButtonProps> */


var UploadButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(UploadButton, _Component);

  function UploadButton() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, UploadButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(UploadButton)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_fileInput", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClick", function () {
      _this._fileInput.current.value = null;

      _this._fileInput.current.click();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChange", function (event) {
      var files = event.target.files;

      if (!files) {
        return;
      }

      _this.props.onUpload(files, event);
    });
    return _this;
  }

  (0, _createClass2["default"])(UploadButton, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(Wrapper, {
        className: "upload-button"
      }, _react["default"].createElement("input", {
        type: "file",
        ref: this._fileInput,
        style: {
          display: 'none'
        },
        onChange: this._onChange,
        className: "upload-button-input"
      }), _react["default"].createElement("span", {
        className: "file-upload__upload-button-span",
        onClick: this._onClick
      }, this.props.children));
    }
  }]);
  return UploadButton;
}(_react.Component);

exports.UploadButton = UploadButton;
var _default = UploadButton;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWxlLXVwbG9hZGVyL3VwbG9hZC1idXR0b24uanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3JMVCIsIlVwbG9hZEJ1dHRvbiIsIl9maWxlSW5wdXQiLCJjdXJyZW50IiwidmFsdWUiLCJjbGljayIsImV2ZW50IiwiZmlsZXMiLCJ0YXJnZXQiLCJvblVwbG9hZCIsImRpc3BsYXkiLCJfb25DaGFuZ2UiLCJfb25DbGljayIsImNoaWxkcmVuIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7OztBQU1BLElBQU1BLE9BQU8sR0FBR0MsNkJBQU9DLEdBQVYsb0JBRUYsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBRkgsQ0FBYjtBQVdBOzs7O0FBR0E7OztJQUNhQyxZOzs7Ozs7Ozs7Ozs7Ozs7OzttR0FDRSx1QjtpR0FFRixZQUFNO0FBQ2YsWUFBS0MsVUFBTCxDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQXhCLEdBQWdDLElBQWhDOztBQUNBLFlBQUtGLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXdCRSxLQUF4QjtBQUNELEs7a0dBRVcsVUFBQUMsS0FBSyxFQUFJO0FBQUEsVUFFUkMsS0FGUSxHQUdmRCxLQUhlLENBRWpCRSxNQUZpQixDQUVSRCxLQUZROztBQUtuQixVQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWO0FBQ0Q7O0FBRUQsWUFBS1QsS0FBTCxDQUFXVyxRQUFYLENBQW9CRixLQUFwQixFQUEyQkQsS0FBM0I7QUFDRCxLOzs7Ozs7NkJBRVE7QUFDUCxhQUNFLGdDQUFDLE9BQUQ7QUFBUyxRQUFBLFNBQVMsRUFBQztBQUFuQixTQUNFO0FBQ0UsUUFBQSxJQUFJLEVBQUMsTUFEUDtBQUVFLFFBQUEsR0FBRyxFQUFFLEtBQUtKLFVBRlo7QUFHRSxRQUFBLEtBQUssRUFBRTtBQUFDUSxVQUFBQSxPQUFPLEVBQUU7QUFBVixTQUhUO0FBSUUsUUFBQSxRQUFRLEVBQUUsS0FBS0MsU0FKakI7QUFLRSxRQUFBLFNBQVMsRUFBQztBQUxaLFFBREYsRUFRRTtBQUFNLFFBQUEsU0FBUyxFQUFDLGlDQUFoQjtBQUFrRCxRQUFBLE9BQU8sRUFBRSxLQUFLQztBQUFoRSxTQUNHLEtBQUtkLEtBQUwsQ0FBV2UsUUFEZCxDQVJGLENBREY7QUFjRDs7O0VBbkMrQkMsZ0I7OztlQXNDbkJiLFkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8qKlxuQHR5cGVkZWYge3tcbiAgb25VcGxvYWQ6IChmaWxlczogRmlsZUxpc3QsIGV2ZW50OiBhbnkpID0+IHZvaWQ7XG59fSBVcGxvYWRCdXR0b25Qcm9wc1xuKi9cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbmA7XG4vKlxuSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL29rb25ldC9yZWFjdC1kcm9wem9uZS9ibG9iL21hc3Rlci9zcmMvaW5kZXguanNcbiovXG4vKiogQGF1Z21lbnRzIFJlYWN0LkNvbXBvbmVudDxVcGxvYWRCdXR0b25Qcm9wcz4gKi9cbmV4cG9ydCBjbGFzcyBVcGxvYWRCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBfZmlsZUlucHV0ID0gY3JlYXRlUmVmKCk7XG5cbiAgX29uQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5fZmlsZUlucHV0LmN1cnJlbnQudmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX2ZpbGVJbnB1dC5jdXJyZW50LmNsaWNrKCk7XG4gIH07XG5cbiAgX29uQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhcmdldDoge2ZpbGVzfVxuICAgIH0gPSBldmVudDtcblxuICAgIGlmICghZmlsZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uVXBsb2FkKGZpbGVzLCBldmVudCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBjbGFzc05hbWU9XCJ1cGxvYWQtYnV0dG9uXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICByZWY9e3RoaXMuX2ZpbGVJbnB1dH1cbiAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInVwbG9hZC1idXR0b24taW5wdXRcIlxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZF9fdXBsb2FkLWJ1dHRvbi1zcGFuXCIgb25DbGljaz17dGhpcy5fb25DbGlja30+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEJ1dHRvbjtcbiJdfQ==