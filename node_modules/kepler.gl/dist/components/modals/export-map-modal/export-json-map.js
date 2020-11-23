"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJsonPretty = _interopRequireDefault(require("react-json-pretty"));

var _userGuides = require("../../../constants/user-guides");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../../common/styled-components");

var _components = require("./components");

var _reactIntl = require("react-intl");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .note {\n    color: ", ";\n    font-size: 11px;\n  }\n\n  .viewer {\n    border: 1px solid ", ";\n    background-color: white;\n    border-radius: 2px;\n    display: inline-block;\n    font: inherit;\n    line-height: 1.5em;\n    padding: 0.5em 3.5em 0.5em 1em;\n    margin: 0;\n    box-sizing: border-box;\n    height: 180px;\n    width: 100%;\n    overflow-y: scroll;\n    overflow-x: auto;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    max-width: 600px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledJsonExportSection = (0, _styledComponents["default"])(_styledComponents2.StyledExportSection)(_templateObject(), function (props) {
  return props.theme.errorColor;
}, function (props) {
  return props.theme.selectBorderColorLT;
});
var exportJsonPropTypes = {
  options: _propTypes["default"].object
};

var ExportJsonMapUnmemoized = function ExportJsonMapUnmemoized(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  return _react["default"].createElement("div", null, _react["default"].createElement(_components.StyledExportMapSection, null, _react["default"].createElement("div", {
    className: "description"
  }), _react["default"].createElement("div", {
    className: "selection"
  }, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.json.selection'
  }))), _react["default"].createElement(StyledJsonExportSection, {
    className: "export-map-modal__json-options"
  }, _react["default"].createElement("div", {
    className: "description"
  }, _react["default"].createElement("div", {
    className: "title"
  }, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.json.configTitle'
  })), _react["default"].createElement("div", {
    className: "subtitle"
  }, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.json.configDisclaimer'
  }), _react["default"].createElement(_components.ExportMapLink, {
    href: _userGuides.ADD_DATA_TO_MAP_DOC
  }, "addDataToMap"), ".")), _react["default"].createElement("div", {
    className: "selection"
  }, _react["default"].createElement("div", {
    className: "viewer"
  }, _react["default"].createElement(_reactJsonPretty["default"], {
    id: "json-pretty",
    json: config
  })), _react["default"].createElement("div", {
    className: "disclaimer"
  }, _react["default"].createElement(_components.StyledWarning, null, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.json.disclaimer'
  }))))));
};

ExportJsonMapUnmemoized.propTypes = exportJsonPropTypes;
ExportJsonMapUnmemoized.displayName = 'ExportJsonMap';

var ExportJsonMap = _react["default"].memo(ExportJsonMapUnmemoized);

var ExportJsonMapFactory = function ExportJsonMapFactory() {
  return ExportJsonMap;
};

var _default = ExportJsonMapFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtbWFwLW1vZGFsL2V4cG9ydC1qc29uLW1hcC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRKc29uRXhwb3J0U2VjdGlvbiIsIlN0eWxlZEV4cG9ydFNlY3Rpb24iLCJwcm9wcyIsInRoZW1lIiwiZXJyb3JDb2xvciIsInNlbGVjdEJvcmRlckNvbG9yTFQiLCJleHBvcnRKc29uUHJvcFR5cGVzIiwib3B0aW9ucyIsIlByb3BUeXBlcyIsIm9iamVjdCIsIkV4cG9ydEpzb25NYXBVbm1lbW9pemVkIiwiY29uZmlnIiwiQUREX0RBVEFfVE9fTUFQX0RPQyIsInByb3BUeXBlcyIsImRpc3BsYXlOYW1lIiwiRXhwb3J0SnNvbk1hcCIsIlJlYWN0IiwibWVtbyIsIkV4cG9ydEpzb25NYXBGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsdUJBQXVCLEdBQUcsa0NBQU9DLHNDQUFQLENBQUgsb0JBRWhCLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBaEI7QUFBQSxDQUZXLEVBT0wsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxtQkFBaEI7QUFBQSxDQVBBLENBQTdCO0FBMEJBLElBQU1DLG1CQUFtQixHQUFHO0FBQzFCQyxFQUFBQSxPQUFPLEVBQUVDLHNCQUFVQztBQURPLENBQTVCOztBQUlBLElBQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEI7QUFBQSx5QkFBRUMsTUFBRjtBQUFBLE1BQUVBLE1BQUYsNEJBQVcsRUFBWDtBQUFBLFNBQzlCLDZDQUNFLGdDQUFDLGtDQUFELFFBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBREYsRUFFRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRSxnQ0FBQywyQkFBRDtBQUFrQixJQUFBLEVBQUUsRUFBRTtBQUF0QixJQURGLENBRkYsQ0FERixFQU9FLGdDQUFDLHVCQUFEO0FBQXlCLElBQUEsU0FBUyxFQUFDO0FBQW5DLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0UsZ0NBQUMsMkJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUU7QUFBdEIsSUFERixDQURGLEVBSUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0UsZ0NBQUMsMkJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUU7QUFBdEIsSUFERixFQUVFLGdDQUFDLHlCQUFEO0FBQWUsSUFBQSxJQUFJLEVBQUVDO0FBQXJCLG9CQUZGLE1BSkYsQ0FERixFQVVFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFLGdDQUFDLDJCQUFEO0FBQVksSUFBQSxFQUFFLEVBQUMsYUFBZjtBQUE2QixJQUFBLElBQUksRUFBRUQ7QUFBbkMsSUFERixDQURGLEVBSUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0UsZ0NBQUMseUJBQUQsUUFDRSxnQ0FBQywyQkFBRDtBQUFrQixJQUFBLEVBQUUsRUFBRTtBQUF0QixJQURGLENBREYsQ0FKRixDQVZGLENBUEYsQ0FEOEI7QUFBQSxDQUFoQzs7QUFnQ0FELHVCQUF1QixDQUFDRyxTQUF4QixHQUFvQ1AsbUJBQXBDO0FBRUFJLHVCQUF1QixDQUFDSSxXQUF4QixHQUFzQyxlQUF0Qzs7QUFFQSxJQUFNQyxhQUFhLEdBQUdDLGtCQUFNQyxJQUFOLENBQVdQLHVCQUFYLENBQXRCOztBQUVBLElBQU1RLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUI7QUFBQSxTQUFNSCxhQUFOO0FBQUEsQ0FBN0I7O2VBRWVHLG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSlNPTlByZXR0eSBmcm9tICdyZWFjdC1qc29uLXByZXR0eSc7XG5pbXBvcnQge0FERF9EQVRBX1RPX01BUF9ET0N9IGZyb20gJ2NvbnN0YW50cy91c2VyLWd1aWRlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7U3R5bGVkRXhwb3J0U2VjdGlvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtTdHlsZWRFeHBvcnRNYXBTZWN0aW9uLCBTdHlsZWRXYXJuaW5nLCBFeHBvcnRNYXBMaW5rfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJztcblxuY29uc3QgU3R5bGVkSnNvbkV4cG9ydFNlY3Rpb24gPSBzdHlsZWQoU3R5bGVkRXhwb3J0U2VjdGlvbilgXG4gIC5ub3RlIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5lcnJvckNvbG9yfTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cblxuICAudmlld2VyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yTFR9O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgcGFkZGluZzogMC41ZW0gMy41ZW0gMC41ZW0gMWVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICB9XG5gO1xuXG5jb25zdCBleHBvcnRKc29uUHJvcFR5cGVzID0ge1xuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5jb25zdCBFeHBvcnRKc29uTWFwVW5tZW1vaXplZCA9ICh7Y29uZmlnID0ge319KSA9PiAoXG4gIDxkaXY+XG4gICAgPFN0eWxlZEV4cG9ydE1hcFNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmpzb24uc2VsZWN0aW9uJ30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cbiAgICA8U3R5bGVkSnNvbkV4cG9ydFNlY3Rpb24gY2xhc3NOYW1lPVwiZXhwb3J0LW1hcC1tb2RhbF9fanNvbi1vcHRpb25zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5qc29uLmNvbmZpZ1RpdGxlJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5qc29uLmNvbmZpZ0Rpc2NsYWltZXInfSAvPlxuICAgICAgICAgIDxFeHBvcnRNYXBMaW5rIGhyZWY9e0FERF9EQVRBX1RPX01BUF9ET0N9PmFkZERhdGFUb01hcDwvRXhwb3J0TWFwTGluaz4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdlclwiPlxuICAgICAgICAgIDxKU09OUHJldHR5IGlkPVwianNvbi1wcmV0dHlcIiBqc29uPXtjb25maWd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj5cbiAgICAgICAgICA8U3R5bGVkV2FybmluZz5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmpzb24uZGlzY2xhaW1lcid9IC8+XG4gICAgICAgICAgPC9TdHlsZWRXYXJuaW5nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVkSnNvbkV4cG9ydFNlY3Rpb24+XG4gIDwvZGl2PlxuKTtcblxuRXhwb3J0SnNvbk1hcFVubWVtb2l6ZWQucHJvcFR5cGVzID0gZXhwb3J0SnNvblByb3BUeXBlcztcblxuRXhwb3J0SnNvbk1hcFVubWVtb2l6ZWQuZGlzcGxheU5hbWUgPSAnRXhwb3J0SnNvbk1hcCc7XG5cbmNvbnN0IEV4cG9ydEpzb25NYXAgPSBSZWFjdC5tZW1vKEV4cG9ydEpzb25NYXBVbm1lbW9pemVkKTtcblxuY29uc3QgRXhwb3J0SnNvbk1hcEZhY3RvcnkgPSAoKSA9PiBFeHBvcnRKc29uTWFwO1xuXG5leHBvcnQgZGVmYXVsdCBFeHBvcnRKc29uTWFwRmFjdG9yeTtcbiJdfQ==