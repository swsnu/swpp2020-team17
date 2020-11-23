"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUpload = exports["default"] = exports.WarningMsg = void 0;

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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _uploadButton = _interopRequireDefault(require("./upload-button"));

var _icons = require("../icons");

var _fileUploadProgress = _interopRequireDefault(require("./file-upload-progress"));

var _fileDrop = _interopRequireDefault(require("./file-drop"));

var _utils = require("../../../utils/utils");

var _userGuides = require("../../../constants/user-guides");

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _mediaBreakpoints = require("../../../styles/media-breakpoints");

var _reactIntl = require("react-intl");

function _templateObject18() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0 auto;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 24px;\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 32px;\n  ", ";\n  ", "\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n\n  .loading-action {\n    margin-right: 10px;\n  }\n  .loading-spinner {\n    margin-left: 10px;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .file-drop {\n    position: relative;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 8px;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 24px;\n  ", ";\n  ", ";\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 8px;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  margin-bottom: 48px;\n\n  ", ";\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 20px;\n  height: 36px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 16px 4px 0;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: white;\n  border-radius: 4px;\n  border-style: ", ";\n  border-width: 1px;\n  border-color: ", ";\n  text-align: center;\n  width: 100%;\n  padding: 48px 8px 0;\n  height: 360px;\n\n  .file-upload-or {\n    color: ", ";\n    padding-right: 4px;\n  }\n\n  .file-type-row {\n    opacity: 0.5;\n  }\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 10px;\n  color: ", ";\n  font-weight: 500;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 12px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 14px;\n  margin-bottom: 12px;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @typedef {import('./file-upload').FileUploadProps} FileUploadProps */
var fileIconColor = '#D3D8E0';

var LinkRenderer = function LinkRenderer(props) {
  return _react["default"].createElement("a", {
    href: props.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.children);
};

var StyledUploadMessage = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.textColorLT;
}, _mediaBreakpoints.media.portable(_templateObject2()));

var WarningMsg = _styledComponents["default"].span(_templateObject3(), function (props) {
  return props.theme.errorColor;
});

exports.WarningMsg = WarningMsg;

var StyledFileDrop = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.dragOver ? 'solid' : 'dashed';
}, function (props) {
  return props.dragOver ? props.theme.textColorLT : props.theme.subtextColorLT;
}, function (props) {
  return props.theme.linkBtnColor;
}, _mediaBreakpoints.media.portable(_templateObject5()));

var MsgWrapper = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.theme.modalTitleColor;
});

var StyledDragNDropIcon = _styledComponents["default"].div(_templateObject7(), fileIconColor, _mediaBreakpoints.media.portable(_templateObject8()), _mediaBreakpoints.media.palm(_templateObject9()));

var StyledFileTypeFow = _styledComponents["default"].div(_templateObject10(), _mediaBreakpoints.media.portable(_templateObject11()), _mediaBreakpoints.media.palm(_templateObject12()));

var StyledFileUpload = _styledComponents["default"].div(_templateObject13());

var StyledMessage = _styledComponents["default"].div(_templateObject14());

var StyledDragFileWrapper = _styledComponents["default"].div(_templateObject15(), _mediaBreakpoints.media.portable(_templateObject16()), _mediaBreakpoints.media.portable(_templateObject17()));

var StyledDisclaimer = (0, _styledComponents["default"])(StyledMessage)(_templateObject18());

function FileUploadFactory() {
  /** @augments {Component<FileUploadProps>} */
  var FileUpload =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(FileUpload, _Component);

    function FileUpload() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, FileUpload);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(FileUpload)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        dragOver: false,
        fileLoading: false,
        files: [],
        errorFiles: []
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "frame", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isValidFileType", function (filename) {
        var _this$props$fileExten = _this.props.fileExtensions,
            fileExtensions = _this$props$fileExten === void 0 ? [] : _this$props$fileExten;
        var fileExt = fileExtensions.find(function (ext) {
          return filename.endsWith(ext);
        });
        return Boolean(fileExt);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleFileInput", function (fileList, event) {
        if (event) {
          event.stopPropagation();
        }

        var files = (0, _toConsumableArray2["default"])(fileList).filter(Boolean);
        var _this$props$disableEx = _this.props.disableExtensionFilter,
            disableExtensionFilter = _this$props$disableEx === void 0 ? false : _this$props$disableEx; // TODO - move this code out of the component

        var filesToLoad = [];
        var errorFiles = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var file = _step.value;

            if (disableExtensionFilter || _this._isValidFileType(file.name)) {
              filesToLoad.push(file);
            } else {
              errorFiles.push(file.name);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var nextState = {
          files: filesToLoad,
          errorFiles: errorFiles,
          dragOver: false
        };

        _this.setState(nextState, function () {
          return nextState.files.length ? _this.props.onFileUpload(nextState.files) : null;
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleDragState", function (newState) {
        _this.setState({
          dragOver: newState
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(FileUpload, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$state = this.state,
            dragOver = _this$state.dragOver,
            files = _this$state.files,
            errorFiles = _this$state.errorFiles;
        var _this$props = this.props,
            fileLoading = _this$props.fileLoading,
            fileLoadingProgress = _this$props.fileLoadingProgress,
            theme = _this$props.theme,
            intl = _this$props.intl;
        var _this$props2 = this.props,
            _this$props2$fileExte = _this$props2.fileExtensions,
            fileExtensions = _this$props2$fileExte === void 0 ? [] : _this$props2$fileExte,
            _this$props2$fileForm = _this$props2.fileFormatNames,
            fileFormatNames = _this$props2$fileForm === void 0 ? [] : _this$props2$fileForm;
        return _react["default"].createElement(StyledFileUpload, {
          className: "file-uploader",
          ref: this.frame
        }, _fileDrop["default"] ? _react["default"].createElement(_fileDrop["default"], {
          frame: this.frame.current || document,
          onDragOver: function onDragOver() {
            return _this2._toggleDragState(true);
          },
          onDragLeave: function onDragLeave() {
            return _this2._toggleDragState(false);
          },
          onDrop: this._handleFileInput,
          className: "file-uploader__file-drop"
        }, _react["default"].createElement(StyledUploadMessage, {
          className: "file-upload__message"
        }, _react["default"].createElement(_reactMarkdown["default"], {
          source: "".concat(intl.formatMessage({
            id: 'fileUploader.configUploadMessage'
          }, {
            fileFormatNames: fileFormatNames.map(function (format) {
              return "**".concat(format, "**");
            }).join(', ')
          }), "(").concat(_userGuides.GUIDES_FILE_FORMAT_DOC, ")."),
          renderers: {
            link: LinkRenderer
          }
        })), _react["default"].createElement(StyledFileDrop, {
          dragOver: dragOver
        }, _react["default"].createElement(StyledFileTypeFow, {
          className: "file-type-row"
        }, fileExtensions.map(function (ext) {
          return _react["default"].createElement(_icons.FileType, {
            key: ext,
            ext: ext,
            height: "50px",
            fontSize: "9px"
          });
        })), fileLoading ? _react["default"].createElement(_fileUploadProgress["default"], {
          fileLoadingProgress: fileLoadingProgress,
          theme: theme
        }) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
          style: {
            opacity: dragOver ? 0.5 : 1
          },
          className: "file-upload-display-message"
        }, _react["default"].createElement(StyledDragNDropIcon, null, _react["default"].createElement(_icons.DragNDrop, {
          height: "44px"
        })), errorFiles.length ? _react["default"].createElement(WarningMsg, null, _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'fileUploader.fileNotSupported',
          values: {
            errorFiles: errorFiles.join(', ')
          }
        })) : null), !files.length ? _react["default"].createElement(StyledDragFileWrapper, null, _react["default"].createElement(MsgWrapper, null, _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'fileUploader.message'
        })), _react["default"].createElement("span", {
          className: "file-upload-or"
        }, _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'fileUploader.or'
        })), _react["default"].createElement(_uploadButton["default"], {
          onUpload: this._handleFileInput
        }, _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'fileUploader.browseFiles'
        }))) : null, _react["default"].createElement(StyledDisclaimer, null, _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'fileUploader.disclaimer'
        }))))) : null, _react["default"].createElement(WarningMsg, null, (0, _utils.isChrome)() ? _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'fileUploader.chromeMessage'
        }) : ''));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        if (state.fileLoading && props.fileLoading === false && state.files.length) {
          return {
            files: [],
            fileLoading: props.fileLoading
          };
        }

        return {
          fileLoading: props.fileLoading
        };
      }
    }]);
    return FileUpload;
  }(_react.Component);

  return (0, _reactIntl.injectIntl)(FileUpload);
}

var _default = FileUploadFactory;
exports["default"] = _default;
var FileUpload = FileUploadFactory();
exports.FileUpload = FileUpload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkLmpzIl0sIm5hbWVzIjpbImZpbGVJY29uQ29sb3IiLCJMaW5rUmVuZGVyZXIiLCJwcm9wcyIsImhyZWYiLCJjaGlsZHJlbiIsIlN0eWxlZFVwbG9hZE1lc3NhZ2UiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsInRleHRDb2xvckxUIiwibWVkaWEiLCJwb3J0YWJsZSIsIldhcm5pbmdNc2ciLCJzcGFuIiwiZXJyb3JDb2xvciIsIlN0eWxlZEZpbGVEcm9wIiwiZHJhZ092ZXIiLCJzdWJ0ZXh0Q29sb3JMVCIsImxpbmtCdG5Db2xvciIsIk1zZ1dyYXBwZXIiLCJtb2RhbFRpdGxlQ29sb3IiLCJTdHlsZWREcmFnTkRyb3BJY29uIiwicGFsbSIsIlN0eWxlZEZpbGVUeXBlRm93IiwiU3R5bGVkRmlsZVVwbG9hZCIsIlN0eWxlZE1lc3NhZ2UiLCJTdHlsZWREcmFnRmlsZVdyYXBwZXIiLCJTdHlsZWREaXNjbGFpbWVyIiwiRmlsZVVwbG9hZEZhY3RvcnkiLCJGaWxlVXBsb2FkIiwiZmlsZUxvYWRpbmciLCJmaWxlcyIsImVycm9yRmlsZXMiLCJmaWxlbmFtZSIsImZpbGVFeHRlbnNpb25zIiwiZmlsZUV4dCIsImZpbmQiLCJleHQiLCJlbmRzV2l0aCIsIkJvb2xlYW4iLCJmaWxlTGlzdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZmlsdGVyIiwiZGlzYWJsZUV4dGVuc2lvbkZpbHRlciIsImZpbGVzVG9Mb2FkIiwiZmlsZSIsIl9pc1ZhbGlkRmlsZVR5cGUiLCJuYW1lIiwicHVzaCIsIm5leHRTdGF0ZSIsInNldFN0YXRlIiwibGVuZ3RoIiwib25GaWxlVXBsb2FkIiwibmV3U3RhdGUiLCJzdGF0ZSIsImZpbGVMb2FkaW5nUHJvZ3Jlc3MiLCJpbnRsIiwiZmlsZUZvcm1hdE5hbWVzIiwiZnJhbWUiLCJGaWxlRHJvcCIsImN1cnJlbnQiLCJkb2N1bWVudCIsIl90b2dnbGVEcmFnU3RhdGUiLCJfaGFuZGxlRmlsZUlucHV0IiwiZm9ybWF0TWVzc2FnZSIsImlkIiwibWFwIiwiZm9ybWF0Iiwiam9pbiIsIkdVSURFU19GSUxFX0ZPUk1BVF9ET0MiLCJsaW5rIiwib3BhY2l0eSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBdEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFJO0FBQzVCLFNBQ0U7QUFBRyxJQUFBLElBQUksRUFBRUEsS0FBSyxDQUFDQyxJQUFmO0FBQXFCLElBQUEsTUFBTSxFQUFDLFFBQTVCO0FBQXFDLElBQUEsR0FBRyxFQUFDO0FBQXpDLEtBQ0dELEtBQUssQ0FBQ0UsUUFEVCxDQURGO0FBS0QsQ0FORDs7QUFPQSxJQUFNQyxtQkFBbUIsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQ2QsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBRFMsRUFLckJDLHdCQUFNQyxRQUxlLHFCQUF6Qjs7QUFVTyxJQUFNQyxVQUFVLEdBQUdOLDZCQUFPTyxJQUFWLHFCQUVaLFVBQUFYLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNNLEtBQU4sQ0FBWU0sVUFBaEI7QUFBQSxDQUZPLENBQWhCOzs7O0FBTVAsSUFBTUMsY0FB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LGdDQUFDLDJCQUFEO0FBQWtCLFVBQUEsRUFBRSxFQUFFO0FBQXRCLFVBREYsQ0FQRixDQURELEdBWUcsSUE5Qk4sRUFnQ0UsZ0NBQUMsZ0JBQUQsUUFDRSxnQ0FBQywyQkFBRDtBQUFrQixVQUFBLEVBQUUsRUFBRTtBQUF0QixVQURGLENBaENGLENBVEosQ0FwQkYsQ0FERCxHQXFFRyxJQXRFTixFQXdFRSxnQ0FBQyxVQUFELFFBQ0cseUJBQWEsZ0NBQUMsMkJBQUQ7QUFBa0IsVUFBQSxFQUFFLEVBQUU7QUFBdEIsVUFBYixHQUFzRSxFQUR6RSxDQXhFRixDQURGO0FBOEVEO0FBakp3QjtBQUFBO0FBQUEsK0NBVU85RCxLQVZQLEVBVWNxRCxLQVZkLEVBVXFCO0FBQzVDLFlBQUlBLEtBQUssQ0FBQ3pCLFdBQU4sSUFBcUI1QixLQUFLLENBQUM0QixXQUFOLEtBQXNCLEtBQTNDLElBQW9EeUIsS0FBSyxDQUFDeEIsS0FBTixDQUFZcUIsTUFBcEUsRUFBNEU7QUFDMUUsaUJBQU87QUFDTHJCLFlBQUFBLEtBQUssRUFBRSxFQURGO0FBRUxELFlBQUFBLFdBQVcsRUFBRTVCLEtBQUssQ0FBQzRCO0FBRmQsV0FBUDtBQUlEOztBQUNELGVBQU87QUFDTEEsVUFBQUEsV0FBVyxFQUFFNUIsS0FBSyxDQUFDNEI7QUFEZCxTQUFQO0FBR0Q7QUFwQndCO0FBQUE7QUFBQSxJQUVGMkMsZ0JBRkU7O0FBb0ozQixTQUFPLDJCQUFXNUMsVUFBWCxDQUFQO0FBQ0Q7O2VBRWNELGlCOztBQUNSLElBQU1DLFVBQVUsR0FBR0QsaUJBQWlCLEVBQXBDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFVwbG9hZEJ1dHRvbiBmcm9tICcuL3VwbG9hZC1idXR0b24nO1xuaW1wb3J0IHtEcmFnTkRyb3AsIEZpbGVUeXBlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgRmlsZVVwbG9hZFByb2dyZXNzIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWQtcHJvZ3Jlc3MnO1xuaW1wb3J0IEZpbGVEcm9wIGZyb20gJy4vZmlsZS1kcm9wJztcblxuaW1wb3J0IHtpc0Nocm9tZX0gZnJvbSAndXRpbHMvdXRpbHMnO1xuaW1wb3J0IHtHVUlERVNfRklMRV9GT1JNQVRfRE9DfSBmcm9tICdjb25zdGFudHMvdXNlci1ndWlkZXMnO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuLy8gQnJlYWtwb2ludHNcbmltcG9ydCB7bWVkaWF9IGZyb20gJ3N0eWxlcy9tZWRpYS1icmVha3BvaW50cyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGx9IGZyb20gJ3JlYWN0LWludGwnO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9maWxlLXVwbG9hZCcpLkZpbGVVcGxvYWRQcm9wc30gRmlsZVVwbG9hZFByb3BzICovXG5cbmNvbnN0IGZpbGVJY29uQ29sb3IgPSAnI0QzRDhFMCc7XG5cbmNvbnN0IExpbmtSZW5kZXJlciA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtwcm9wcy5ocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9hPlxuICApO1xufTtcbmNvbnN0IFN0eWxlZFVwbG9hZE1lc3NhZ2UgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBXYXJuaW5nTXNnID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmVycm9yQ29sb3J9O1xuICBmb250LXdlaWdodDogNTAwO1xuYDtcblxuY29uc3QgU3R5bGVkRmlsZURyb3AgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItc3R5bGU6ICR7cHJvcHMgPT4gKHByb3BzLmRyYWdPdmVyID8gJ3NvbGlkJyA6ICdkYXNoZWQnKX07XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmRyYWdPdmVyID8gcHJvcHMudGhlbWUudGV4dENvbG9yTFQgOiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JMVCl9O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0OHB4IDhweCAwO1xuICBoZWlnaHQ6IDM2MHB4O1xuXG4gIC5maWxlLXVwbG9hZC1vciB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGlua0J0bkNvbG9yfTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIH1cblxuICAuZmlsZS10eXBlLXJvdyB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgcGFkZGluZzogMTZweCA0cHggMDtcbiAgYH07XG5gO1xuXG5jb25zdCBNc2dXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxUaXRsZUNvbG9yfTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDM2cHg7XG5gO1xuXG5jb25zdCBTdHlsZWREcmFnTkRyb3BJY29uID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7ZmlsZUljb25Db2xvcn07XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG5cbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBgfTtcbiAgJHttZWRpYS5wYWxtYFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYH07XG5gO1xuXG5jb25zdCBTdHlsZWRGaWxlVHlwZUZvdyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYH07XG4gICR7bWVkaWEucGFsbWBcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGB9O1xuYDtcblxuY29uc3QgU3R5bGVkRmlsZVVwbG9hZCA9IHN0eWxlZC5kaXZgXG4gIC5maWxlLWRyb3Age1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkTWVzc2FnZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG4gIC5sb2FkaW5nLWFjdGlvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5sb2FkaW5nLXNwaW5uZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWREcmFnRmlsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGB9O1xuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGB9XG5gO1xuXG5jb25zdCBTdHlsZWREaXNjbGFpbWVyID0gc3R5bGVkKFN0eWxlZE1lc3NhZ2UpYFxuICBtYXJnaW46IDAgYXV0bztcbmA7XG5cbmZ1bmN0aW9uIEZpbGVVcGxvYWRGYWN0b3J5KCkge1xuICAvKiogQGF1Z21lbnRzIHtDb21wb25lbnQ8RmlsZVVwbG9hZFByb3BzPn0gKi9cbiAgY2xhc3MgRmlsZVVwbG9hZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICBkcmFnT3ZlcjogZmFsc2UsXG4gICAgICBmaWxlTG9hZGluZzogZmFsc2UsXG4gICAgICBmaWxlczogW10sXG4gICAgICBlcnJvckZpbGVzOiBbXVxuICAgIH07XG5cbiAgICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgICAgaWYgKHN0YXRlLmZpbGVMb2FkaW5nICYmIHByb3BzLmZpbGVMb2FkaW5nID09PSBmYWxzZSAmJiBzdGF0ZS5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgZmlsZUxvYWRpbmc6IHByb3BzLmZpbGVMb2FkaW5nXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWxlTG9hZGluZzogcHJvcHMuZmlsZUxvYWRpbmdcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnJhbWUgPSBjcmVhdGVSZWYoKTtcblxuICAgIF9pc1ZhbGlkRmlsZVR5cGUgPSBmaWxlbmFtZSA9PiB7XG4gICAgICBjb25zdCB7ZmlsZUV4dGVuc2lvbnMgPSBbXX0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgZmlsZUV4dCA9IGZpbGVFeHRlbnNpb25zLmZpbmQoZXh0ID0+IGZpbGVuYW1lLmVuZHNXaXRoKGV4dCkpO1xuXG4gICAgICByZXR1cm4gQm9vbGVhbihmaWxlRXh0KTtcbiAgICB9O1xuXG4gICAgLyoqIEBwYXJhbSB7RmlsZUxpc3R9IGZpbGVMaXN0ICovXG4gICAgX2hhbmRsZUZpbGVJbnB1dCA9IChmaWxlTGlzdCwgZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsZXMgPSBbLi4uZmlsZUxpc3RdLmZpbHRlcihCb29sZWFuKTtcblxuICAgICAgY29uc3Qge2Rpc2FibGVFeHRlbnNpb25GaWx0ZXIgPSBmYWxzZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAvLyBUT0RPIC0gbW92ZSB0aGlzIGNvZGUgb3V0IG9mIHRoZSBjb21wb25lbnRcbiAgICAgIGNvbnN0IGZpbGVzVG9Mb2FkID0gW107XG4gICAgICBjb25zdCBlcnJvckZpbGVzID0gW107XG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgaWYgKGRpc2FibGVFeHRlbnNpb25GaWx0ZXIgfHwgdGhpcy5faXNWYWxpZEZpbGVUeXBlKGZpbGUubmFtZSkpIHtcbiAgICAgICAgICBmaWxlc1RvTG9hZC5wdXNoKGZpbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVycm9yRmlsZXMucHVzaChmaWxlLm5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtmaWxlczogZmlsZXNUb0xvYWQsIGVycm9yRmlsZXMsIGRyYWdPdmVyOiBmYWxzZX07XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCAoKSA9PlxuICAgICAgICBuZXh0U3RhdGUuZmlsZXMubGVuZ3RoID8gdGhpcy5wcm9wcy5vbkZpbGVVcGxvYWQobmV4dFN0YXRlLmZpbGVzKSA6IG51bGxcbiAgICAgICk7XG4gICAgfTtcblxuICAgIF90b2dnbGVEcmFnU3RhdGUgPSBuZXdTdGF0ZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkcmFnT3ZlcjogbmV3U3RhdGV9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2RyYWdPdmVyLCBmaWxlcywgZXJyb3JGaWxlc30gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3Qge2ZpbGVMb2FkaW5nLCBmaWxlTG9hZGluZ1Byb2dyZXNzLCB0aGVtZSwgaW50bH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2ZpbGVFeHRlbnNpb25zID0gW10sIGZpbGVGb3JtYXROYW1lcyA9IFtdfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkRmlsZVVwbG9hZCBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZGVyXCIgcmVmPXt0aGlzLmZyYW1lfT5cbiAgICAgICAgICB7RmlsZURyb3AgPyAoXG4gICAgICAgICAgICA8RmlsZURyb3BcbiAgICAgICAgICAgICAgZnJhbWU9e3RoaXMuZnJhbWUuY3VycmVudCB8fCBkb2N1bWVudH1cbiAgICAgICAgICAgICAgb25EcmFnT3Zlcj17KCkgPT4gdGhpcy5fdG9nZ2xlRHJhZ1N0YXRlKHRydWUpfVxuICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17KCkgPT4gdGhpcy5fdG9nZ2xlRHJhZ1N0YXRlKGZhbHNlKX1cbiAgICAgICAgICAgICAgb25Ecm9wPXt0aGlzLl9oYW5kbGVGaWxlSW5wdXR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGUtdXBsb2FkZXJfX2ZpbGUtZHJvcFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdHlsZWRVcGxvYWRNZXNzYWdlIGNsYXNzTmFtZT1cImZpbGUtdXBsb2FkX19tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgICAgIHNvdXJjZT17YCR7aW50bC5mb3JtYXRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6ICdmaWxlVXBsb2FkZXIuY29uZmlnVXBsb2FkTWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGVGb3JtYXROYW1lczogZmlsZUZvcm1hdE5hbWVzLm1hcChmb3JtYXQgPT4gYCoqJHtmb3JtYXR9KipgKS5qb2luKCcsICcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICl9KCR7R1VJREVTX0ZJTEVfRk9STUFUX0RPQ30pLmB9XG4gICAgICAgICAgICAgICAgICByZW5kZXJlcnM9e3tsaW5rOiBMaW5rUmVuZGVyZXJ9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU3R5bGVkVXBsb2FkTWVzc2FnZT5cbiAgICAgICAgICAgICAgPFN0eWxlZEZpbGVEcm9wIGRyYWdPdmVyPXtkcmFnT3Zlcn0+XG4gICAgICAgICAgICAgICAgPFN0eWxlZEZpbGVUeXBlRm93IGNsYXNzTmFtZT1cImZpbGUtdHlwZS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIHtmaWxlRXh0ZW5zaW9ucy5tYXAoZXh0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEZpbGVUeXBlIGtleT17ZXh0fSBleHQ9e2V4dH0gaGVpZ2h0PVwiNTBweFwiIGZvbnRTaXplPVwiOXB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRmlsZVR5cGVGb3c+XG4gICAgICAgICAgICAgICAge2ZpbGVMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgPEZpbGVVcGxvYWRQcm9ncmVzcyBmaWxlTG9hZGluZ1Byb2dyZXNzPXtmaWxlTG9hZGluZ1Byb2dyZXNzfSB0aGVtZT17dGhlbWV9IC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e29wYWNpdHk6IGRyYWdPdmVyID8gMC41IDogMX19XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWQtZGlzcGxheS1tZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREcmFnTkRyb3BJY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdORHJvcCBoZWlnaHQ9XCI0NHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERyYWdORHJvcEljb24+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JGaWxlcy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8V2FybmluZ01zZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17J2ZpbGVVcGxvYWRlci5maWxlTm90U3VwcG9ydGVkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3tlcnJvckZpbGVzOiBlcnJvckZpbGVzLmpvaW4oJywgJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9XYXJuaW5nTXNnPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgeyFmaWxlcy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERyYWdGaWxlV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNc2dXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2ZpbGVVcGxvYWRlci5tZXNzYWdlJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTXNnV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGUtdXBsb2FkLW9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnZmlsZVVwbG9hZGVyLm9yJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWRCdXR0b24gb25VcGxvYWQ9e3RoaXMuX2hhbmRsZUZpbGVJbnB1dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnZmlsZVVwbG9hZGVyLmJyb3dzZUZpbGVzJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVXBsb2FkQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRHJhZ0ZpbGVXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGlzY2xhaW1lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2ZpbGVVcGxvYWRlci5kaXNjbGFpbWVyJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXNjbGFpbWVyPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9TdHlsZWRGaWxlRHJvcD5cbiAgICAgICAgICAgIDwvRmlsZURyb3A+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICA8V2FybmluZ01zZz5cbiAgICAgICAgICAgIHtpc0Nocm9tZSgpID8gPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydmaWxlVXBsb2FkZXIuY2hyb21lTWVzc2FnZSd9IC8+IDogJyd9XG4gICAgICAgICAgPC9XYXJuaW5nTXNnPlxuICAgICAgICA8L1N0eWxlZEZpbGVVcGxvYWQ+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmplY3RJbnRsKEZpbGVVcGxvYWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlVXBsb2FkRmFjdG9yeTtcbmV4cG9ydCBjb25zdCBGaWxlVXBsb2FkID0gRmlsZVVwbG9hZEZhY3RvcnkoKTtcbiJdfQ==