"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("../common/icons");

var _styledComponents2 = require("../common/styled-components");

var _loadingSpinner = _interopRequireDefault(require("../common/loading-spinner"));

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 11px;\n  margin-top: 8px;\n  text-align: center;\n  color: ", ";\n  overflow: hidden;\n  width: 100px;\n  text-overflow: ellipsis;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 12px;\n  margin-top: 12px;\n  margin-bottom: 4px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: block;\n  width: 16px;\n  height: 16px;\n  border-top-left-radius: 2px;\n\n  :after {\n    position: absolute;\n    display: table;\n    border: 2px solid #fff;\n    border-top: 0;\n    border-left: 0;\n    transform: rotate(45deg) scale(1) translate(-50%, -50%);\n    opacity: 1;\n    content: ' ';\n    top: 50%;\n    left: 25%;\n    width: 5.7px;\n    height: 9.1px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 2px;\n  border: 1px solid\n    ", ";\n  color: ", ";\n  cursor: pointer;\n  font-weight: 500;\n  width: 120px;\n  height: 168px;\n  background-color: #ffffff;\n  transition: ", ";\n  position: relative;\n  :hover {\n    border: 1px solid ", ";\n    color: ", ";\n  }\n\n  .button {\n    margin-top: 20px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledTileWrapper = _styledComponents["default"].div.attrs({
  className: 'provider-tile__wrapper'
})(_templateObject(), function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.primaryBtnBgd;
});

var CheckMark = _styledComponents["default"].span.attrs({
  className: 'checkbox-inner'
})(_templateObject2(), function (props) {
  return props.theme.primaryBtnBgd;
});

var StyledBox = (0, _styledComponents["default"])(_styledComponents2.CenterVerticalFlexbox)(_templateObject3());

var StyledCloudName = _styledComponents["default"].div(_templateObject4());

var StyledUserName = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.primaryBtnActBgd;
});

var LoginButton = function LoginButton(_ref) {
  var onClick = _ref.onClick;
  return _react["default"].createElement(_styledComponents2.Button, {
    className: "login-button",
    link: true,
    small: true,
    onClick: onClick
  }, _react["default"].createElement(_icons.Login, null), "Login");
};

var LogoutButton = function LogoutButton(_ref2) {
  var onClick = _ref2.onClick;
  return _react["default"].createElement(_styledComponents2.Button, {
    className: "logout-button",
    link: true,
    small: true,
    onClick: onClick
  }, _react["default"].createElement(_icons.Logout, null), "Logout");
};

var ActionButton = function ActionButton(_ref3) {
  var isConnected = _ref3.isConnected,
      _ref3$actionName = _ref3.actionName,
      actionName = _ref3$actionName === void 0 ? null : _ref3$actionName,
      isReady = _ref3.isReady;
  return isConnected && actionName ? _react["default"].createElement(_styledComponents2.Button, {
    className: "cloud-tile__action",
    small: true,
    secondary: true,
    disabled: !isReady
  }, isReady ? actionName : _react["default"].createElement(_loadingSpinner["default"], {
    size: 12
  })) : null;
};

var CloudTile = function CloudTile(_ref4) {
  var onSelect = _ref4.onSelect,
      _ref4$onConnect = _ref4.onConnect,
      onConnect = _ref4$onConnect === void 0 ? null : _ref4$onConnect,
      _ref4$onLogout = _ref4.onLogout,
      onLogout = _ref4$onLogout === void 0 ? null : _ref4$onLogout,
      _ref4$actionName = _ref4.actionName,
      actionName = _ref4$actionName === void 0 ? null : _ref4$actionName,
      cloudProvider = _ref4.cloudProvider,
      onSetCloudProvider = _ref4.onSetCloudProvider,
      isSelected = _ref4.isSelected,
      isConnected = _ref4.isConnected,
      _ref4$isReady = _ref4.isReady,
      isReady = _ref4$isReady === void 0 ? true : _ref4$isReady;
  var userName = typeof cloudProvider.getUserName === 'function' ? cloudProvider.getUserName() : null;
  var onClickConnect = typeof onConnect === 'function' ? onConnect : function () {
    return cloudProvider.login(function () {
      return onSetCloudProvider(cloudProvider.name);
    });
  };
  var onClickLogout = typeof onLogout === 'function' ? onLogout : function () {
    return cloudProvider.logout(function () {
      return isSelected ? onSetCloudProvider(null) : null;
    });
  };
  return _react["default"].createElement(StyledBox, null, _react["default"].createElement(StyledTileWrapper, {
    onClick: isConnected ? onSelect : onClickConnect,
    selected: isSelected
  }, _react["default"].createElement(StyledCloudName, null, cloudProvider.displayName || cloudProvider.name), cloudProvider.icon ? _react["default"].createElement(cloudProvider.icon, {
    height: "64px"
  }) : null, _react["default"].createElement(ActionButton, {
    isConnected: isConnected,
    actionName: actionName,
    isReady: isReady
  }), userName && _react["default"].createElement(StyledUserName, null, userName), isSelected && _react["default"].createElement(CheckMark, null)), isConnected ? _react["default"].createElement(LogoutButton, {
    onClick: onClickLogout
  }) : _react["default"].createElement(LoginButton, {
    onClick: onClickConnect
  }));
};

var _default = CloudTile;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9jbG91ZC10aWxlLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFRpbGVXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInNlbGVjdGVkIiwidGhlbWUiLCJwcmltYXJ5QnRuQmdkIiwic2VsZWN0Qm9yZGVyQ29sb3JMVCIsInRyYW5zaXRpb24iLCJDaGVja01hcmsiLCJzcGFuIiwiU3R5bGVkQm94IiwiQ2VudGVyVmVydGljYWxGbGV4Ym94IiwiU3R5bGVkQ2xvdWROYW1lIiwiU3R5bGVkVXNlck5hbWUiLCJwcmltYXJ5QnRuQWN0QmdkIiwiTG9naW5CdXR0b24iLCJvbkNsaWNrIiwiTG9nb3V0QnV0dG9uIiwiQWN0aW9uQnV0dG9uIiwiaXNDb25uZWN0ZWQiLCJhY3Rpb25OYW1lIiwiaXNSZWFkeSIsIkNsb3VkVGlsZSIsIm9uU2VsZWN0Iiwib25Db25uZWN0Iiwib25Mb2dvdXQiLCJjbG91ZFByb3ZpZGVyIiwib25TZXRDbG91ZFByb3ZpZGVyIiwiaXNTZWxlY3RlZCIsInVzZXJOYW1lIiwiZ2V0VXNlck5hbWUiLCJvbkNsaWNrQ29ubmVjdCIsImxvZ2luIiwibmFtZSIsIm9uQ2xpY2tMb2dvdXQiLCJsb2dvdXQiLCJkaXNwbGF5TmFtZSIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDekNDLEVBQUFBLFNBQVMsRUFBRTtBQUQ4QixDQUFqQixDQUFILG9CQVNqQixVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxRQUFOLEdBQWlCRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsYUFBN0IsR0FBNkNILEtB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QWdFLElBQUEsT0FBTyxFQUFFQztBQUF6RSxJQUhGLEVBSUdRLFFBQVEsSUFBSSxnQ0FBQyxjQUFELFFBQWlCQSxRQUFqQixDQUpmLEVBS0dELFVBQVUsSUFBSSxnQ0FBQyxTQUFELE9BTGpCLENBREYsRUFRR1QsV0FBVyxHQUNWLGdDQUFDLFlBQUQ7QUFBYyxJQUFBLE9BQU8sRUFBRWU7QUFBdkIsSUFEVSxHQUdWLGdDQUFDLFdBQUQ7QUFBYSxJQUFBLE9BQU8sRUFBRUg7QUFBdEIsSUFYSixDQURGO0FBZ0JELENBakREOztlQW1EZVQsUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7TG9nb3V0LCBMb2dpbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtDZW50ZXJWZXJ0aWNhbEZsZXhib3gsIEJ1dHRvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2xvYWRpbmctc3Bpbm5lcic7XG5cbmNvbnN0IFN0eWxlZFRpbGVXcmFwcGVyID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3Byb3ZpZGVyLXRpbGVfX3dyYXBwZXInXG59KWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkXG4gICAgJHtwcm9wcyA9PiAocHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkIDogcHJvcHMudGhlbWUuc2VsZWN0Qm9yZGVyQ29sb3JMVCl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkIDogcHJvcHMudGhlbWUuc2VsZWN0Qm9yZGVyQ29sb3JMVCl9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxNjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9ufTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICA6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZH07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZH07XG4gIH1cblxuICAuYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5gO1xuXG5jb25zdCBDaGVja01hcmsgPSBzdHlsZWQuc3Bhbi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2NoZWNrYm94LWlubmVyJ1xufSlgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZH07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcblxuICA6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbnRlbnQ6ICcgJztcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAyNSU7XG4gICAgd2lkdGg6IDUuN3B4O1xuICAgIGhlaWdodDogOS4xcHg7XG4gIH1cbmA7XG5jb25zdCBTdHlsZWRCb3ggPSBzdHlsZWQoQ2VudGVyVmVydGljYWxGbGV4Ym94KWBcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuYDtcblxuY29uc3QgU3R5bGVkQ2xvdWROYW1lID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG5gO1xuXG5jb25zdCBTdHlsZWRVc2VyTmFtZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5BY3RCZ2R9O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuYDtcblxuY29uc3QgTG9naW5CdXR0b24gPSAoe29uQ2xpY2t9KSA9PiAoXG4gIDxCdXR0b24gY2xhc3NOYW1lPVwibG9naW4tYnV0dG9uXCIgbGluayBzbWFsbCBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICA8TG9naW4gLz5cbiAgICBMb2dpblxuICA8L0J1dHRvbj5cbik7XG5cbmNvbnN0IExvZ291dEJ1dHRvbiA9ICh7b25DbGlja30pID0+IChcbiAgPEJ1dHRvbiBjbGFzc05hbWU9XCJsb2dvdXQtYnV0dG9uXCIgbGluayBzbWFsbCBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICA8TG9nb3V0IC8+XG4gICAgTG9nb3V0XG4gIDwvQnV0dG9uPlxuKTtcblxuY29uc3QgQWN0aW9uQnV0dG9uID0gKHtpc0Nvbm5lY3RlZCwgYWN0aW9uTmFtZSA9IG51bGwsIGlzUmVhZHl9KSA9PlxuICBpc0Nvbm5lY3RlZCAmJiBhY3Rpb25OYW1lID8gKFxuICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiY2xvdWQtdGlsZV9fYWN0aW9uXCIgc21hbGwgc2Vjb25kYXJ5IGRpc2FibGVkPXshaXNSZWFkeX0+XG4gICAgICB7aXNSZWFkeSA/IGFjdGlvbk5hbWUgOiA8TG9hZGluZ1NwaW5uZXIgc2l6ZT17MTJ9IC8+fVxuICAgIDwvQnV0dG9uPlxuICApIDogbnVsbDtcblxuY29uc3QgQ2xvdWRUaWxlID0gKHtcbiAgLy8gYWN0aW9uIHdoZW4gY2xpY2sgb24gdGhlIHRpbGVcbiAgb25TZWxlY3QsXG4gIC8vIGRlZmF1bHQgdG8gbG9naW5cbiAgb25Db25uZWN0ID0gbnVsbCxcbiAgLy8gZGVmYXVsdCB0byBsb2dvdXRcbiAgb25Mb2dvdXQgPSBudWxsLFxuICAvLyBhY3Rpb24gbmFtZVxuICBhY3Rpb25OYW1lID0gbnVsbCxcbiAgLy8gY2xvdWQgcHJvdmlkZXIgY2xhc3NcbiAgY2xvdWRQcm92aWRlcixcbiAgLy8gZnVuY3Rpb24gdG8gdGFrZSBhZnRlciBsb2dpbiBvciBsb2dvdXRcbiAgb25TZXRDbG91ZFByb3ZpZGVyLFxuICAvLyB3aGV0aGVyIHByb3ZpZGVyIGlzIHNlbGVjdGVkIGFzIGN1cnJlbnRQcm92aWRlclxuICBpc1NlbGVjdGVkLFxuICAvLyB3aGV0aGVyIHVzZXIgaGFzIGxvZ2dlZCBpblxuICBpc0Nvbm5lY3RlZCxcblxuICBpc1JlYWR5ID0gdHJ1ZVxufSkgPT4ge1xuICBjb25zdCB1c2VyTmFtZSA9XG4gICAgdHlwZW9mIGNsb3VkUHJvdmlkZXIuZ2V0VXNlck5hbWUgPT09ICdmdW5jdGlvbicgPyBjbG91ZFByb3ZpZGVyLmdldFVzZXJOYW1lKCkgOiBudWxsO1xuXG4gIGNvbnN0IG9uQ2xpY2tDb25uZWN0ID1cbiAgICB0eXBlb2Ygb25Db25uZWN0ID09PSAnZnVuY3Rpb24nXG4gICAgICA/IG9uQ29ubmVjdFxuICAgICAgOiAoKSA9PiBjbG91ZFByb3ZpZGVyLmxvZ2luKCgpID0+IG9uU2V0Q2xvdWRQcm92aWRlcihjbG91ZFByb3ZpZGVyLm5hbWUpKTtcblxuICBjb25zdCBvbkNsaWNrTG9nb3V0ID1cbiAgICB0eXBlb2Ygb25Mb2dvdXQgPT09ICdmdW5jdGlvbidcbiAgICAgID8gb25Mb2dvdXRcbiAgICAgIDogKCkgPT4gY2xvdWRQcm92aWRlci5sb2dvdXQoKCkgPT4gKGlzU2VsZWN0ZWQgPyBvblNldENsb3VkUHJvdmlkZXIobnVsbCkgOiBudWxsKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQm94PlxuICAgICAgPFN0eWxlZFRpbGVXcmFwcGVyIG9uQ2xpY2s9e2lzQ29ubmVjdGVkID8gb25TZWxlY3QgOiBvbkNsaWNrQ29ubmVjdH0gc2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9PlxuICAgICAgICA8U3R5bGVkQ2xvdWROYW1lPntjbG91ZFByb3ZpZGVyLmRpc3BsYXlOYW1lIHx8IGNsb3VkUHJvdmlkZXIubmFtZX08L1N0eWxlZENsb3VkTmFtZT5cbiAgICAgICAge2Nsb3VkUHJvdmlkZXIuaWNvbiA/IDxjbG91ZFByb3ZpZGVyLmljb24gaGVpZ2h0PVwiNjRweFwiIC8+IDogbnVsbH1cbiAgICAgICAgPEFjdGlvbkJ1dHRvbiBpc0Nvbm5lY3RlZD17aXNDb25uZWN0ZWR9IGFjdGlvbk5hbWU9e2FjdGlvbk5hbWV9IGlzUmVhZHk9e2lzUmVhZHl9IC8+XG4gICAgICAgIHt1c2VyTmFtZSAmJiA8U3R5bGVkVXNlck5hbWU+e3VzZXJOYW1lfTwvU3R5bGVkVXNlck5hbWU+fVxuICAgICAgICB7aXNTZWxlY3RlZCAmJiA8Q2hlY2tNYXJrIC8+fVxuICAgICAgPC9TdHlsZWRUaWxlV3JhcHBlcj5cbiAgICAgIHtpc0Nvbm5lY3RlZCA/IChcbiAgICAgICAgPExvZ291dEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrTG9nb3V0fSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPExvZ2luQnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0fSAvPlxuICAgICAgKX1cbiAgICA8L1N0eWxlZEJveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsb3VkVGlsZTtcbiJdfQ==