"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("../../common/styled-components");

var _components = require("./components");

var _defaultSettings = require("../../../constants/default-settings");

var _userGuides = require("../../../constants/user-guides");

var _styledComponents2 = _interopRequireDefault(require("styled-components"));

var _reactIntl = require("react-intl");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: unset;\n  width: unset;\n  img {\n    width: 180px;\n    height: 120px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  padding: ", ";\n  color: ", ";\n  height: ", ";\n  outline: 0;\n  font-size: ", ";\n\n  :active,\n  :focus,\n  &.focus,\n  &.active {\n    outline: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .disclaimer {\n    font-size: ", ";\n    color: ", ";\n    margin-top: 12px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ExportMapStyledExportSection = (0, _styledComponents2["default"])(_styledComponents.StyledExportSection)(_templateObject(), function (props) {
  return props.theme.inputFontSize;
}, function (props) {
  return props.theme.inputColor;
});

var StyledInput = _styledComponents2["default"].input(_templateObject2(), function (props) {
  return props.theme.inputPadding;
}, function (props) {
  return props.error ? 'red' : props.theme.titleColorLT;
}, function (props) {
  return props.theme.inputBoxHeight;
}, function (props) {
  return props.theme.inputFontSize;
});

var BigStyledTile = (0, _styledComponents2["default"])(_styledComponents.StyledType)(_templateObject3());
var exportHtmlPropTypes = {
  options: _propTypes["default"].object,
  onEditUserMapboxAccessToken: _propTypes["default"].func.isRequired
};

var ExportHtmlMapUnmemoized = function ExportHtmlMapUnmemoized(_ref) {
  var _ref$onChangeExportMa = _ref.onChangeExportMapHTMLMode,
      onChangeExportMapHTMLMode = _ref$onChangeExportMa === void 0 ? function (mode) {} : _ref$onChangeExportMa,
      _ref$onEditUserMapbox = _ref.onEditUserMapboxAccessToken,
      onEditUserMapboxAccessToken = _ref$onEditUserMapbox === void 0 ? function (token) {} : _ref$onEditUserMapbox,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      intl = _ref.intl;
  return _react["default"].createElement("div", null, _react["default"].createElement(_components.StyledExportMapSection, null, _react["default"].createElement("div", {
    className: "description"
  }), _react["default"].createElement("div", {
    className: "selection"
  }, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.selection'
  }))), _react["default"].createElement(ExportMapStyledExportSection, {
    className: "export-map-modal__html-options"
  }, _react["default"].createElement("div", {
    className: "description"
  }, _react["default"].createElement("div", {
    className: "title"
  }, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.tokenTitle'
  })), _react["default"].createElement("div", {
    className: "subtitle"
  }, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.tokenSubtitle'
  }))), _react["default"].createElement("div", {
    className: "selection"
  }, _react["default"].createElement(StyledInput, {
    onChange: function onChange(e) {
      return onEditUserMapboxAccessToken(e.target.value);
    },
    type: "text",
    placeholder: intl.formatMessage({
      id: 'modal.exportMap.html.tokenPlaceholder'
    }),
    value: // @ts-ignore
    options ? options.userMapboxToken : ''
  }), _react["default"].createElement("div", {
    className: "disclaimer"
  }, _react["default"].createElement(_components.StyledWarning, null, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.tokenMisuseWarning'
  })), _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.tokenDisclaimer'
  }), _react["default"].createElement(_components.ExportMapLink, {
    href: _userGuides.EXPORT_HTML_MAP_DOC
  }, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.tokenUpdate'
  }))))), _react["default"].createElement(ExportMapStyledExportSection, null, _react["default"].createElement("div", {
    className: "description"
  }, _react["default"].createElement("div", {
    className: "title"
  }, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.modeTitle'
  })), _react["default"].createElement("div", {
    className: "subtitle"
  }, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.modeSubtitle1'
  }), _react["default"].createElement("a", {
    href: _userGuides.EXPORT_HTML_MAP_MODES_DOC
  }, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.modeSubtitle2'
  })))), _react["default"].createElement("div", {
    className: "selection"
  }, _defaultSettings.EXPORT_HTML_MAP_MODE_OPTIONS.map(function (mode) {
    return _react["default"].createElement(BigStyledTile, {
      key: mode.id,
      selected: // @ts-ignore
      options.mode === mode.id,
      available: mode.available,
      onClick: function onClick() {
        return mode.available && onChangeExportMapHTMLMode(mode.id);
      }
    }, _react["default"].createElement("img", {
      src: mode.url,
      alt: ""
    }), _react["default"].createElement("p", null, _react["default"].createElement(_reactIntl.FormattedMessage, {
      id: 'modal.exportMap.html.modeDescription',
      values: {
        mode: intl.formatMessage({
          id: mode.label
        })
      }
    })));
  }))));
};

ExportHtmlMapUnmemoized.propTypes = exportHtmlPropTypes;
ExportHtmlMapUnmemoized.displayName = 'ExportHtmlMap';

var ExportHtmlMap = _react["default"].memo(ExportHtmlMapUnmemoized);

var ExportHtmlMapFactory = function ExportHtmlMapFactory() {
  return (0, _reactIntl.injectIntl)(ExportHtmlMap);
};

var _default = ExportHtmlMapFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtbWFwLW1vZGFsL2V4cG9ydC1odG1sLW1hcC5qcyJdLCJuYW1lcyI6WyJFeHBvcnRNYXBTdHlsZWRFeHBvcnRTZWN0aW9uIiwiU3R5bGVkRXhwb3J0U2VjdGlvbiIsInByb3BzIiwidGhlbWUiLCJpbnB1dEZvbnRTaXplIiwiaW5wdXRDb2xvciIsIlN0eWxlZElucHV0Iiwic3R5bGVkIiwiaW5wdXQiLCJpbnB1dFBhZGRpbmciLCJlcnJvciIsInRpdGxlQ29sb3JMVCIsImlucHV0Qm94SGVpZ2h0IiwiQmlnU3R5bGVkVGlsZSIsIlN0eWxlZFR5cGUiLCJleHBvcnRIdG1sUHJvcFR5cGVzIiwib3B0aW9ucyIsIlByb3BUeXBlcyIsIm9iamVjdCIsIm9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbiIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiRXhwb3J0SHRtbE1hcFVubWVtb2l6ZWQiLCJvbkNoYW5nZUV4cG9ydE1hcEhUTUxNb2RlIiwibW9kZSIsInRva2VuIiwiaW50bCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcm1hdE1lc3NhZ2UiLCJpZCIsInVzZXJNYXBib3hUb2tlbiIsIkVYUE9SVF9IVE1MX01BUF9ET0MiLCJFWFBPUlRfSFRNTF9NQVBfTU9ERVNfRE9DIiwiRVhQT1JUX0hUTUxfTUFQX01PREVfT1BUSU9OUyIsIm1hcCIsImF2YWlsYWJsZSIsInVybCIsImxhYmVsIiwicHJvcFR5cGVzIiwiZGlzcGxheU5hbWUiLCJFeHBvcnRIdG1sTWFwIiwiUmVhY3QiLCJtZW1vIiwiRXhwb3J0SHRtbE1hcEZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLDRCQUE0QixHQUFHLG1DQUFPQyxxQ0FBUCxDQUFILG9CQUVq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Q0ksYUFBTCxDQUFtQjtBQUFDQyxVQUFBQSxFQUFFLEVBQUVQLElBQUksQ0FBQ2U7QUFBVixTQUFuQjtBQUFQO0FBRlYsTUFERixDQVZGLENBRG9DO0FBQUEsR0FBckMsQ0FESCxDQVpGLENBckNGLENBTjhCO0FBQUEsQ0FBaEM7O0FBZ0ZBakIsdUJBQXVCLENBQUNrQixTQUF4QixHQUFvQ3pCLG1CQUFwQztBQUNBTyx1QkFBdUIsQ0FBQ21CLFdBQXhCLEdBQXNDLGVBQXRDOztBQUVBLElBQU1DLGFBQWEsR0FBR0Msa0JBQU1DLElBQU4sQ0FBV3RCLHVCQUFYLENBQXRCOztBQUVBLElBQU11QixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCO0FBQUEsU0FBTSwyQkFBV0gsYUFBWCxDQUFOO0FBQUEsQ0FBN0I7O2VBRWVHLG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1N0eWxlZEV4cG9ydFNlY3Rpb24sIFN0eWxlZFR5cGV9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7U3R5bGVkRXhwb3J0TWFwU2VjdGlvbiwgU3R5bGVkV2FybmluZywgRXhwb3J0TWFwTGlua30gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7RVhQT1JUX0hUTUxfTUFQX01PREVfT1BUSU9OU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtFWFBPUlRfSFRNTF9NQVBfRE9DLCBFWFBPUlRfSFRNTF9NQVBfTU9ERVNfRE9DfSBmcm9tICdjb25zdGFudHMvdXNlci1ndWlkZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGx9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5jb25zdCBFeHBvcnRNYXBTdHlsZWRFeHBvcnRTZWN0aW9uID0gc3R5bGVkKFN0eWxlZEV4cG9ydFNlY3Rpb24pYFxuICAuZGlzY2xhaW1lciB7XG4gICAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Rm9udFNpemV9O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Q29sb3J9O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dFBhZGRpbmd9O1xuICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuZXJyb3IgPyAncmVkJyA6IHByb3BzLnRoZW1lLnRpdGxlQ29sb3JMVCl9O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRCb3hIZWlnaHR9O1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRGb250U2l6ZX07XG5cbiAgOmFjdGl2ZSxcbiAgOmZvY3VzLFxuICAmLmZvY3VzLFxuICAmLmFjdGl2ZSB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuYDtcblxuY29uc3QgQmlnU3R5bGVkVGlsZSA9IHN0eWxlZChTdHlsZWRUeXBlKWBcbiAgaGVpZ2h0OiB1bnNldDtcbiAgd2lkdGg6IHVuc2V0O1xuICBpbWcge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICB9XG5gO1xuXG5jb25zdCBleHBvcnRIdG1sUHJvcFR5cGVzID0ge1xuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICBvbkVkaXRVc2VyTWFwYm94QWNjZXNzVG9rZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IEV4cG9ydEh0bWxNYXBVbm1lbW9pemVkID0gKHtcbiAgb25DaGFuZ2VFeHBvcnRNYXBIVE1MTW9kZSA9IG1vZGUgPT4ge30sXG4gIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbiA9IHRva2VuID0+IHt9LFxuICBvcHRpb25zID0ge30sXG4gIGludGxcbn0pID0+IChcbiAgPGRpdj5cbiAgICA8U3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRNYXAuaHRtbC5zZWxlY3Rpb24nfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9TdHlsZWRFeHBvcnRNYXBTZWN0aW9uPlxuICAgIDxFeHBvcnRNYXBTdHlsZWRFeHBvcnRTZWN0aW9uIGNsYXNzTmFtZT1cImV4cG9ydC1tYXAtbW9kYWxfX2h0bWwtb3B0aW9uc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRNYXAuaHRtbC50b2tlblRpdGxlJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLnRva2VuU3VidGl0bGUnfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdtb2RhbC5leHBvcnRNYXAuaHRtbC50b2tlblBsYWNlaG9sZGVyJ30pfVxuICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG9wdGlvbnMgPyBvcHRpb25zLnVzZXJNYXBib3hUb2tlbiA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj5cbiAgICAgICAgICA8U3R5bGVkV2FybmluZz5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmh0bWwudG9rZW5NaXN1c2VXYXJuaW5nJ30gLz5cbiAgICAgICAgICA8L1N0eWxlZFdhcm5pbmc+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRNYXAuaHRtbC50b2tlbkRpc2NsYWltZXInfSAvPlxuICAgICAgICAgIDxFeHBvcnRNYXBMaW5rIGhyZWY9e0VYUE9SVF9IVE1MX01BUF9ET0N9PlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRNYXAuaHRtbC50b2tlblVwZGF0ZSd9IC8+XG4gICAgICAgICAgPC9FeHBvcnRNYXBMaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvRXhwb3J0TWFwU3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICA8RXhwb3J0TWFwU3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmh0bWwubW9kZVRpdGxlJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLm1vZGVTdWJ0aXRsZTEnfSAvPlxuICAgICAgICAgIDxhIGhyZWY9e0VYUE9SVF9IVE1MX01BUF9NT0RFU19ET0N9PlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRNYXAuaHRtbC5tb2RlU3VidGl0bGUyJ30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxuICAgICAgICB7RVhQT1JUX0hUTUxfTUFQX01PREVfT1BUSU9OUy5tYXAobW9kZSA9PiAoXG4gICAgICAgICAgPEJpZ1N0eWxlZFRpbGVcbiAgICAgICAgICAgIGtleT17bW9kZS5pZH1cbiAgICAgICAgICAgIHNlbGVjdGVkPXtcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBvcHRpb25zLm1vZGUgPT09IG1vZGUuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF2YWlsYWJsZT17bW9kZS5hdmFpbGFibGV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtb2RlLmF2YWlsYWJsZSAmJiBvbkNoYW5nZUV4cG9ydE1hcEhUTUxNb2RlKG1vZGUuaWQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgc3JjPXttb2RlLnVybH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmh0bWwubW9kZURlc2NyaXB0aW9uJ31cbiAgICAgICAgICAgICAgICB2YWx1ZXM9e3ttb2RlOiBpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiBtb2RlLmxhYmVsfSl9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvQmlnU3R5bGVkVGlsZT5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0V4cG9ydE1hcFN0eWxlZEV4cG9ydFNlY3Rpb24+XG4gIDwvZGl2PlxuKTtcblxuRXhwb3J0SHRtbE1hcFVubWVtb2l6ZWQucHJvcFR5cGVzID0gZXhwb3J0SHRtbFByb3BUeXBlcztcbkV4cG9ydEh0bWxNYXBVbm1lbW9pemVkLmRpc3BsYXlOYW1lID0gJ0V4cG9ydEh0bWxNYXAnO1xuXG5jb25zdCBFeHBvcnRIdG1sTWFwID0gUmVhY3QubWVtbyhFeHBvcnRIdG1sTWFwVW5tZW1vaXplZCk7XG5cbmNvbnN0IEV4cG9ydEh0bWxNYXBGYWN0b3J5ID0gKCkgPT4gaW5qZWN0SW50bChFeHBvcnRIdG1sTWFwKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwb3J0SHRtbE1hcEZhY3Rvcnk7XG4iXX0=