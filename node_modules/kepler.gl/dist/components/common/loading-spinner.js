"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-radius: 50%;\n  border: 3px solid ", ";\n  padding: 2px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    border-left-color: ", ";\n    animation: _preloader_spin_ 500ms linear infinite;\n    border-radius: 50%;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n    border-right-color: transparent;\n    cursor: wait;\n    border-style: solid;\n    display: block;\n    animation-name: ", ";\n}"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var animationName = (0, _styledComponents.keyframes)(_templateObject());

var Loader = _styledComponents["default"].span(_templateObject2(), function (props) {
  return props.color || props.theme.primaryBtnBgd;
}, animationName);

var LoadingWrapper = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.borderColor || props.theme.borderColorLT;
});

var LoadingSpinner = function LoadingSpinner(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 32 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$borderColor = _ref.borderColor,
      borderColor = _ref$borderColor === void 0 ? '' : _ref$borderColor,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 3 : _ref$strokeWidth,
      _ref$gap = _ref.gap,
      gap = _ref$gap === void 0 ? 2 : _ref$gap;
  return _react["default"].createElement(LoadingWrapper, {
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px"),
      padding: "".concat(gap, "px")
    }
  }, _react["default"].createElement(Loader, {
    color: color,
    style: {
      width: "".concat(size - strokeWidth * 2 - gap * 2, "px"),
      height: "".concat(size - strokeWidth * 2 - gap * 2, "px")
    }
  }));
};

var _default = LoadingSpinner;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sb2FkaW5nLXNwaW5uZXIuanMiXSwibmFtZXMiOlsiYW5pbWF0aW9uTmFtZSIsImtleWZyYW1lcyIsIkxvYWRlciIsInN0eWxlZCIsInNwYW4iLCJwcm9wcyIsImNvbG9yIiwidGhlbWUiLCJwcmltYXJ5QnRuQmdkIiwiTG9hZGluZ1dyYXBwZXIiLCJkaXYiLCJib3JkZXJDb2xvciIsImJvcmRlckNvbG9yTFQiLCJMb2FkaW5nU3Bpbm5lciIsInNpemUiLCJzdHJva2VXaWR0aCIsImdhcCIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLE9BQUdDLDJCQUFILG9CQUFuQjs7QUFTQSxJQUFNQyxNQUFNLEdBQUdDLDZCQUFPQyxJQUFWLHFCQUNhLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sSUFBZUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLGFBQS9CO0FBQUEsQ0FEbEIsRUFVVVIsYUFWVixDQUFaOztBQWFBLElBQU1TLGNBQWMsR0FBR04sNkJBQU9PLEdBQVYscUJBRUUsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ00sV0FBTixJQUFxQk4sS0FBSyxDQUFDRSxLQUFOLENBQVlLLGFBQXJDO0FBQUEsQ0FGUCxDQUFwQjs7QUFNQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsdUJBQUVDLElBQUY7QUFBQSxNQUFFQSxJQUFGLDBCQUFTLEVBQVQ7QUFBQSx3QkFBYVIsS0FBYjtBQUFBLE1BQWFBLEtBQWIsMkJBQXFCLEVBQXJCO0FBQUEsOEJBQXlCSyxXQUF6QjtBQUFBLE1BQXlCQSxXQUF6QixpQ0FBdUMsRUFBdkM7QUFBQSw4QkFBMkNJLFdBQTNDO0FBQUEsTUFBMkNBLFdBQTNDLGlDQUF5RCxDQUF6RDtBQUFBLHNCQUE0REMsR0FBNUQ7QUFBQSxNQUE0REEsR0FBNUQseUJBQWtFLENBQWxFO0FBQUEsU0FDckIsZ0NBQUMsY0FBRDtBQUFnQixJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxLQUFLLFlBQUtILElBQUwsT0FBTjtBQUFxQkksTUFBQUEsTUFBTSxZQUFLSixJQUFMLE9BQTNCO0FBQTBDSyxNQUFBQSxPQUFPLFlBQUtILEdBQUw7QUFBakQ7QUFBdkIsS0FDRSxnQ0FBQyxNQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUVWLEtBRFQ7QUFFRSxJQUFBLEtBQUssRUFBRTtBQUNMVyxNQUFBQSxLQUFLLFlBQUtILElBQUksR0FBR0MsV0FBVyxHQUFHLENBQXJCLEdBQXlCQyxHQUFHLEdBQUcsQ0FBcEMsT0FEQTtBQUVMRSxNQUFBQSxNQUFNLFlBQUtKLElBQUksR0FBR0MsV0FBVyxHQUFHLENBQXJCLEdBQXlCQyxHQUFHLEdBQUcsQ0FBcEM7QUFGRDtBQUZULElBREYsQ0FEcUI7QUFBQSxDQUF2Qjs7ZUFZZUgsYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGFuaW1hdGlvbk5hbWUgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG5gO1xuXG5jb25zdCBMb2FkZXIgPSBzdHlsZWQuc3BhbmBcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvciB8fCBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkfTtcbiAgICBhbmltYXRpb246IF9wcmVsb2FkZXJfc3Bpbl8gNTAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogd2FpdDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGFuaW1hdGlvbi1uYW1lOiAke2FuaW1hdGlvbk5hbWV9O1xufWA7XG5cbmNvbnN0IExvYWRpbmdXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLmJvcmRlckNvbG9yIHx8IHByb3BzLnRoZW1lLmJvcmRlckNvbG9yTFR9O1xuICBwYWRkaW5nOiAycHg7XG5gO1xuXG5jb25zdCBMb2FkaW5nU3Bpbm5lciA9ICh7c2l6ZSA9IDMyLCBjb2xvciA9ICcnLCBib3JkZXJDb2xvciA9ICcnLCBzdHJva2VXaWR0aCA9IDMsIGdhcCA9IDJ9KSA9PiAoXG4gIDxMb2FkaW5nV3JhcHBlciBzdHlsZT17e3dpZHRoOiBgJHtzaXplfXB4YCwgaGVpZ2h0OiBgJHtzaXplfXB4YCwgcGFkZGluZzogYCR7Z2FwfXB4YH19PlxuICAgIDxMb2FkZXJcbiAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBgJHtzaXplIC0gc3Ryb2tlV2lkdGggKiAyIC0gZ2FwICogMn1weGAsXG4gICAgICAgIGhlaWdodDogYCR7c2l6ZSAtIHN0cm9rZVdpZHRoICogMiAtIGdhcCAqIDJ9cHhgXG4gICAgICB9fVxuICAgIC8+XG4gIDwvTG9hZGluZ1dyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nU3Bpbm5lcjtcbiJdfQ==