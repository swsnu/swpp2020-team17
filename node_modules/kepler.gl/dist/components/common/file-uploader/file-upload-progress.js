"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _progressBar = _interopRequireDefault(require("../progress-bar"));

var _styledComponents2 = require("../styled-components");

var _utils = require("../../../utils/utils");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 400px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 12px;\n  margin-top: 12px;\n  border-image: initial;\n  padding: 8px 12px;\n\n  .top-row {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .file-name {\n    font-weight: 500;\n  }\n  .middle-row {\n    margin-top: 6px;\n  }\n  .bottom-row {\n    margin-top: 6px;\n    text-align: start;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @typedef {import('./file-upload-progress').FileUploadProgressProps} FileUploadProgressProps*/
var StyledFileProgress = _styledComponents["default"].div.attrs({
  className: 'file-upload__progress'
})(_templateObject(), function (props) {
  return props.theme.textColorLT;
});

var StyledProgressWrapper = _styledComponents["default"].div.attrs({
  className: 'file-upload__progress__wrapper'
})(_templateObject2());

var StyledContainer = _styledComponents["default"].div(_templateObject3());

var formatPercent = function formatPercent(percent) {
  return "".concat(Math.floor(percent * 100), "%");
};
/**
 * @param {object} params
 * @param {string} params.message
 * @param {string} params.fileName
 * @param {number} params.percent
 * @param {any} params.error
 * @param {object} params.theme
 */


var UploadProgress = function UploadProgress(_ref) {
  var message = _ref.message,
      fileName = _ref.fileName,
      percent = _ref.percent,
      error = _ref.error,
      theme = _ref.theme;
  var percentStr = formatPercent(percent);
  var barColor = error ? theme.errorColor : theme.activeColorLT;
  return _react["default"].createElement(StyledFileProgress, {
    className: "file-upload-progress__message"
  }, _react["default"].createElement("div", {
    className: "top-row"
  }, _react["default"].createElement(_styledComponents2.TruncatedTitleText, {
    className: "file-name",
    title: fileName
  }, fileName), _react["default"].createElement("div", {
    className: "percent"
  }, percentStr)), _react["default"].createElement("div", {
    className: "middle-row"
  }, _react["default"].createElement(_progressBar["default"], {
    percent: percentStr,
    barColor: barColor,
    isLoading: true,
    theme: theme
  })), _react["default"].createElement("div", {
    className: "bottom-row",
    style: {
      color: error ? theme.errorColor : theme.textColorLT
    }
  }, error ? (0, _utils.getError)(error) : message));
};
/** @type {React.FunctionComponent<FileUploadProgressProps>} */


var FileUploadProgress = function FileUploadProgress(_ref2) {
  var fileLoadingProgress = _ref2.fileLoadingProgress,
      theme = _ref2.theme;
  return _react["default"].createElement(StyledContainer, null, _react["default"].createElement(StyledProgressWrapper, null, Object.values(fileLoadingProgress).map(function (item) {
    return _react["default"].createElement(UploadProgress, (0, _extends2["default"])({}, item, {
      key: item.fileName,
      theme: theme
    }));
  })));
};

var _default = (0, _styledComponents.withTheme)(FileUploadProgress);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkLXByb2dyZXNzLmpzIl0sIm5hbWVzIjpbIlN0eWxlZEZpbGVQcm9ncmVzcyIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvckxUIiwiU3R5bGVkUHJvZ3Jlc3NXcmFwcGVyIiwiU3R5bGVkQ29udGFpbmVyIiwiZm9ybWF0UGVyY2VudCIsInBlcmNlbnQiLCJNYXRoIiwiZmxvb3IiLCJVcGxvYWRQcm9ncmVzcyIsIm1lc3NhZ2UiLCJmaWxlTmFtZSIsImVycm9yIiwicGVyY2VudFN0ciIsImJhckNvbG9yIiwiZXJyb3JDb2xvciIsImFjdGl2ZUNvbG9yTFQiLCJjb2xvciIsIkZpbGVVcGxvYWRQcm9ncmVzcyIsImZpbGVMb2FkaW5nUHJvZ3Jlc3MiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUMxQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRCtCLENBQWpCLENBQUgsb0JBR2IsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBSFEsQ0FBeEI7O0FBMEJBLElBQU1DLHFCQUFxQixHQUFHUCw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQzdDQyxFQUFBQSxTQUFTLEVBQUU7QUFEa0MsQ0FBakIsQ0FBSCxvQkFBM0I7O0FBTUEsSUFBTUssZUFBZSxHQUFHUiw2QkFBT0MsR0FBVixvQkFBckI7O0FBTUEsSUFBTVEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxPQUFPO0FBQUEsbUJBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixPQUFPLEdBQUcsR0FBckIsQ0FBUDtBQUFBLENBQTdCO0FBRUE7Ozs7Ozs7Ozs7QUFRQSxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWdEO0FBQUEsTUFBOUNDLE9BQThDLFFBQTlDQSxPQUE4QztBQUFBLE1BQXJDQyxRQUFxQyxRQUFyQ0EsUUFBcUM7QUFBQSxNQUEzQkwsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsTUFBbEJNLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhYLEtBQVcsUUFBWEEsS0FBVztBQUNyRSxNQUFNWSxVQUFVLEdBQUdSLGFBQWEsQ0FBQ0MsT0FBRCxDQUFoQztBQUNBLE1BQU1RLFFBQVEsR0FBR0YsS0FBSyxHQUFHWCxLQUFLLENBQUNjLFVBQVQsR0FBc0JkLEtBQUssQ0FBQ2UsYUFBbEQ7QUFFQSxTQUNFLGdDQUFDLGtCQUFEO0FBQW9CLElBQUEsU0FBUyxFQUFDO0FBQTlCLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0UsZ0NBQUMscUNBQUQ7QUFBb0IsSUFBQSxTQUFTLEVBQUMsV0FBOUI7QUFBMEMsSUFBQSxLQUFLLEVBQUVMO0FBQWpELEtBQ0dBLFFBREgsQ0FERixFQUlFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUEwQkUsVUFBMUIsQ0FKRixDQURGLEVBT0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0UsZ0NBQUMsdUJBQUQ7QUFBYSxJQUFBLE9BQU8sRUFBRUEsVUFBdEI7QUFBa0MsSUFBQSxRQUFRLEVBQUVDLFFBQTVDO0FBQXNELElBQUEsU0FBUyxNQUEvRDtBQUFnRSxJQUFBLEtBQUssRUFBRWI7QUFBdkUsSUFERixDQVBGLEVBVUU7QUFBSyxJQUFBLFNBQVMsRUFBQyxZQUFmO0FBQTRCLElBQUEsS0FBSyxFQUFFO0FBQUNnQixNQUFBQSxLQUFLLEVBQUVMLEtBQUssR0FBR1gsS0FBSyxDQUFDYyxVQUFULEdBQXNCZCxLQUFLLENBQUNDO0FBQXpDO0FBQW5DLEtBQ0dVLEtBQUssR0FBRyxxQkFBU0EsS0FBVCxDQUFILEdBQXFCRixPQUQ3QixDQVZGLENBREY7QUFnQkQsQ0FwQkQ7QUFzQkE7OztBQUNBLElBQU1RLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUFFQyxtQkFBRixTQUFFQSxtQkFBRjtBQUFBLE1BQXVCbEIsS0FBdkIsU0FBdUJBLEtBQXZCO0FBQUEsU0FDekIsZ0NBQUMsZUFBRCxRQUNFLGdDQUFDLHFCQUFELFFBQ0dtQixNQUFNLENBQUNDLE1BQVAsQ0FBY0YsbUJBQWQsRUFBbUNHLEdBQW5DLENBQXVDLFVBQUFDLElBQUk7QUFBQSxXQUMxQyxnQ0FBQyxjQUFELGdDQUFvQkEsSUFBcEI7QUFBMEIsTUFBQSxHQUFHLEVBQUVBLElBQUksQ0FBQ1osUUFBcEM7QUFBOEMsTUFBQSxLQUFLLEVBQUVWO0FBQXJELE9BRDBDO0FBQUEsR0FBM0MsQ0FESCxDQURGLENBRHlCO0FBQUEsQ0FBM0I7O2VBVWUsaUNBQVVpQixrQkFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHt3aXRoVGhlbWV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHtUcnVuY2F0ZWRUaXRsZVRleHR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Z2V0RXJyb3J9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZmlsZS11cGxvYWQtcHJvZ3Jlc3MnKS5GaWxlVXBsb2FkUHJvZ3Jlc3NQcm9wc30gRmlsZVVwbG9hZFByb2dyZXNzUHJvcHMqL1xuXG5jb25zdCBTdHlsZWRGaWxlUHJvZ3Jlc3MgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnZmlsZS11cGxvYWRfX3Byb2dyZXNzJ1xufSlgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuXG4gIC50b3Atcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5maWxlLW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgLm1pZGRsZS1yb3cge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgfVxuICAuYm90dG9tLXJvdyB7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRQcm9ncmVzc1dyYXBwZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnZmlsZS11cGxvYWRfX3Byb2dyZXNzX193cmFwcGVyJ1xufSlgXG4gIHdpZHRoOiA0MDBweDtcbmA7XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IGZvcm1hdFBlcmNlbnQgPSBwZXJjZW50ID0+IGAke01hdGguZmxvb3IocGVyY2VudCAqIDEwMCl9JWA7XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5tZXNzYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmZpbGVOYW1lXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnBlcmNlbnRcbiAqIEBwYXJhbSB7YW55fSBwYXJhbXMuZXJyb3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMudGhlbWVcbiAqL1xuY29uc3QgVXBsb2FkUHJvZ3Jlc3MgPSAoe21lc3NhZ2UsIGZpbGVOYW1lLCBwZXJjZW50LCBlcnJvciwgdGhlbWV9KSA9PiB7XG4gIGNvbnN0IHBlcmNlbnRTdHIgPSBmb3JtYXRQZXJjZW50KHBlcmNlbnQpO1xuICBjb25zdCBiYXJDb2xvciA9IGVycm9yID8gdGhlbWUuZXJyb3JDb2xvciA6IHRoZW1lLmFjdGl2ZUNvbG9yTFQ7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkRmlsZVByb2dyZXNzIGNsYXNzTmFtZT1cImZpbGUtdXBsb2FkLXByb2dyZXNzX19tZXNzYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1yb3dcIj5cbiAgICAgICAgPFRydW5jYXRlZFRpdGxlVGV4dCBjbGFzc05hbWU9XCJmaWxlLW5hbWVcIiB0aXRsZT17ZmlsZU5hbWV9PlxuICAgICAgICAgIHtmaWxlTmFtZX1cbiAgICAgICAgPC9UcnVuY2F0ZWRUaXRsZVRleHQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyY2VudFwiPntwZXJjZW50U3RyfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZS1yb3dcIj5cbiAgICAgICAgPFByb2dyZXNzQmFyIHBlcmNlbnQ9e3BlcmNlbnRTdHJ9IGJhckNvbG9yPXtiYXJDb2xvcn0gaXNMb2FkaW5nIHRoZW1lPXt0aGVtZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tcm93XCIgc3R5bGU9e3tjb2xvcjogZXJyb3IgPyB0aGVtZS5lcnJvckNvbG9yIDogdGhlbWUudGV4dENvbG9yTFR9fT5cbiAgICAgICAge2Vycm9yID8gZ2V0RXJyb3IoZXJyb3IpIDogbWVzc2FnZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVkRmlsZVByb2dyZXNzPlxuICApO1xufTtcblxuLyoqIEB0eXBlIHtSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxGaWxlVXBsb2FkUHJvZ3Jlc3NQcm9wcz59ICovXG5jb25zdCBGaWxlVXBsb2FkUHJvZ3Jlc3MgPSAoe2ZpbGVMb2FkaW5nUHJvZ3Jlc3MsIHRoZW1lfSkgPT4gKFxuICA8U3R5bGVkQ29udGFpbmVyPlxuICAgIDxTdHlsZWRQcm9ncmVzc1dyYXBwZXI+XG4gICAgICB7T2JqZWN0LnZhbHVlcyhmaWxlTG9hZGluZ1Byb2dyZXNzKS5tYXAoaXRlbSA9PiAoXG4gICAgICAgIDxVcGxvYWRQcm9ncmVzcyB7Li4uaXRlbX0ga2V5PXtpdGVtLmZpbGVOYW1lfSB0aGVtZT17dGhlbWV9IC8+XG4gICAgICApKX1cbiAgICA8L1N0eWxlZFByb2dyZXNzV3JhcHBlcj5cbiAgPC9TdHlsZWRDb250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoRmlsZVVwbG9hZFByb2dyZXNzKTtcbiJdfQ==