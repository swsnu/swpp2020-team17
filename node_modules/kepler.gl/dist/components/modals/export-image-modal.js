"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _imagePreview = _interopRequireDefault(require("../common/image-preview"));

var _defaultSettings = require("../../constants/default-settings");

var _styledComponents2 = require("../common/styled-components");

var _switch = _interopRequireDefault(require("../common/switch"));

var _reactIntl = require("react-intl");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 250px;\n\n  .image-option-section {\n    .image-option-section-title {\n      font-weight: 500;\n      font-size: 14px;\n    }\n  }\n\n  .button-list {\n    display: flex;\n    flex-direction: row;\n    padding: 8px 0px;\n  }\n\n  input {\n    margin-right: 8px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ImageOptionList = _styledComponents["default"].div(_templateObject());

var ExportImageModalFactory = function ExportImageModalFactory() {
  var ExportImageModal =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(ExportImageModal, _Component);

    function ExportImageModal() {
      (0, _classCallCheck2["default"])(this, ExportImageModal);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ExportImageModal).apply(this, arguments));
    }

    (0, _createClass2["default"])(ExportImageModal, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this._updateMapDim();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.props.onUpdateImageSetting({
          exporting: false
        });
      }
    }, {
      key: "_updateMapDim",
      value: function _updateMapDim() {
        var _this$props = this.props,
            exportImage = _this$props.exportImage,
            mapH = _this$props.mapH,
            mapW = _this$props.mapW;

        if (mapH !== exportImage.mapH || mapW !== exportImage.mapW) {
          this.props.onUpdateImageSetting({
            mapH: mapH,
            mapW: mapW,
            legend: false
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            exportImage = _this$props2.exportImage,
            onUpdateImageSetting = _this$props2.onUpdateImageSetting,
            intl = _this$props2.intl;
        var legend = exportImage.legend,
            ratio = exportImage.ratio,
            resolution = exportImage.resolution;
        return _react["default"].createElement(_styledComponents2.StyledModalContent, {
          className: "export-image-modal"
        }, _react["default"].createElement(ImageOptionList, null, _react["default"].createElement("div", {
          className: "image-option-section"
        }, _react["default"].createElement("div", {
          className: "image-option-section-title"
        }, _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportImage.ratioTitle'
        })), _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportImage.ratioDescription'
        }), _react["default"].createElement("div", {
          className: "button-list"
        }, _defaultSettings.EXPORT_IMG_RATIO_OPTIONS.filter(function (op) {
          return !op.hidden;
        }).map(function (op) {
          return _react["default"].createElement(_styledComponents2.SelectionButton, {
            key: op.id,
            selected: ratio === op.id,
            onClick: function onClick() {
              return onUpdateImageSetting({
                ratio: op.id
              });
            }
          }, _react["default"].createElement(_reactIntl.FormattedMessage, {
            id: op.label
          }));
        }))), _react["default"].createElement("div", {
          className: "image-option-section"
        }, _react["default"].createElement("div", {
          className: "image-option-section-title"
        }, _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportImage.resolutionTitle'
        })), _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportImage.resolutionDescription'
        }), _react["default"].createElement("div", {
          className: "button-list"
        }, _defaultSettings.EXPORT_IMG_RESOLUTION_OPTIONS.map(function (op) {
          return _react["default"].createElement(_styledComponents2.SelectionButton, {
            key: op.id,
            selected: resolution === op.id,
            onClick: function onClick() {
              return op.available && onUpdateImageSetting({
                resolution: op.id
              });
            }
          }, op.label);
        }))), _react["default"].createElement("div", {
          className: "image-option-section"
        }, _react["default"].createElement("div", {
          className: "image-option-section-title"
        }, _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportImage.mapLegendTitle'
        })), _react["default"].createElement(_switch["default"], {
          type: "checkbox",
          id: "add-map-legend",
          checked: legend,
          label: intl.formatMessage({
            id: 'modal.exportImage.mapLegendAdd'
          }),
          onChange: function onChange() {
            return onUpdateImageSetting({
              legend: !legend
            });
          }
        }))), _react["default"].createElement(_imagePreview["default"], {
          exportImage: exportImage
        }));
      }
    }]);
    return ExportImageModal;
  }(_react.Component);

  (0, _defineProperty2["default"])(ExportImageModal, "propTypes", {
    mapW: _propTypes["default"].number.isRequired,
    mapH: _propTypes["default"].number.isRequired,
    exportImage: _propTypes["default"].object.isRequired,
    // callbacks
    onUpdateImageSetting: _propTypes["default"].func.isRequired
  });
  return (0, _reactIntl.injectIntl)(ExportImageModal);
};

var _default = ExportImageModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtaW1hZ2UtbW9kYWwuanMiXSwibmFtZXMiOlsiSW1hZ2VPcHRpb25MaXN0Iiwic3R5bGVkIiwiZGl2IiwiRXhwb3J0SW1hZ2VNb2RhbEZhY3RvcnkiLCJFeHBvcnRJbWFnZU1vZGFsIiwiX3VwZGF0ZU1hcERpbSIsInByb3BzIiwib25VcGRhdGVJbWFnZVNldHRpbmciLCJleHBvcnRpbmciLCJleHBvcnRJbWFnZSIsIm1hcEgiLCJtYXBXIiwibGVnZW5kIiwiaW50bCIsInJhdGlvIiwicmVzb2x1dGlvbiIsIkVYUE9SVF9JTUdfUkFUSU9fT1BUSU9OUyIsImZpbHRlciIsIm9wIiwiaGlkZGVuIiwibWFwIiwiaWQiLCJsYWJlbCIsIkVYUE9SVF9JTUdfUkVTT0xVVElPTl9PUFRJT05TIiwiYXZhaWxhYmxlIiwiZm9ybWF0TWVzc2FnZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUFyQjs7QUF3QkEsSUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQUEsTUFDOUJDLGdCQUQ4QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMkNBVWI7QUFDbkIsYUFBS0MsYUFBTDtBQUNEO0FBWmlDO0FBQUE7QUFBQSw2Q0FjWDtBQUNyQixhQUFLQyxLQUFMLENBQVdDLG9CQUFYLENBQWdDO0FBQUNDLFVBQUFBLFNBQVMsRUFBRTtBQUFaLFNBQWhDO0FBQ0Q7QUFoQmlDO0FBQUE7QUFBQSxzQ0FrQmxCO0FBQUEsMEJBQ29CLEtBQUtG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ZixXQUNFO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixXQUNFLGdDQUFDLDJCQUFEO0FBQWtCLFVBQUEsRUFBRSxFQUFFO0FBQXRCLFVBREYsQ0FERixFQUlFLGdDQUFDLGtCQUFEO0FBQ0UsVUFBQSxJQUFJLEVBQUMsVUFEUDtBQUVFLFVBQUEsRUFBRSxFQUFDLGdCQUZMO0FBR0UsVUFBQSxPQUFPLEVBQUVWLE1BSFg7QUFJRSxVQUFBLEtBQUssRUFBRUMsSUFBSSxDQUFDWSxhQUFMLENBQW1CO0FBQUNKLFlBQUFBLEVBQUUsRUFBRTtBQUFMLFdBQW5CLENBSlQ7QUFLRSxVQUFBLFFBQVEsRUFBRTtBQUFBLG1CQUFNZCxvQkFBb0IsQ0FBQztBQUFDSyxjQUFBQSxNQUFNLEVBQUUsQ0FBQ0E7QUFBVixhQUFELENBQTFCO0FBQUE7QUFMWixVQUpGLENBbkNGLENBREYsRUFpREUsZ0NBQUMsd0JBQUQ7QUFBYyxVQUFBLFdBQVcsRUFBRUg7QUFBM0IsVUFqREYsQ0FERjtBQXFERDtBQXRGaUM7QUFBQTtBQUFBLElBQ0xpQixnQkFESzs7QUFBQSxtQ0FDOUJ0QixnQkFEOEIsZUFFZjtBQUNqQk8sSUFBQUEsSUFBSSxFQUFFZ0Isc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRE47QUFFakJuQixJQUFBQSxJQUFJLEVBQUVpQixzQkFBVUMsTUFBVixDQUFpQkMsVUFGTjtBQUdqQnBCLElBQUFBLFdBQVcsRUFBRWtCLHNCQUFVRyxNQUFWLENBQWlCRCxVQUhiO0FBSWpCO0FBQ0F0QixJQUFBQSxvQkFBb0IsRUFBRW9CLHNCQUFVSSxJQUFWLENBQWVGO0FBTHBCLEdBRmU7QUF5RnBDLFNBQU8sMkJBQVd6QixnQkFBWCxDQUFQO0FBQ0QsQ0ExRkQ7O2VBNEZlRCx1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEltYWdlUHJldmlldyBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pbWFnZS1wcmV2aWV3JztcblxuaW1wb3J0IHtFWFBPUlRfSU1HX1JBVElPX09QVElPTlMsIEVYUE9SVF9JTUdfUkVTT0xVVElPTl9PUFRJT05TfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmltcG9ydCB7U3R5bGVkTW9kYWxDb250ZW50LCBTZWxlY3Rpb25CdXR0b259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3dpdGNoJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZSwgaW5qZWN0SW50bH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmNvbnN0IEltYWdlT3B0aW9uTGlzdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMjUwcHg7XG5cbiAgLmltYWdlLW9wdGlvbi1zZWN0aW9uIHtcbiAgICAuaW1hZ2Utb3B0aW9uLXNlY3Rpb24tdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAuYnV0dG9uLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xuICB9XG5cbiAgaW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeSA9ICgpID0+IHtcbiAgY2xhc3MgRXhwb3J0SW1hZ2VNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIG1hcFc6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIG1hcEg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGV4cG9ydEltYWdlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAvLyBjYWxsYmFja3NcbiAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZU1hcERpbSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZUltYWdlU2V0dGluZyh7ZXhwb3J0aW5nOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIF91cGRhdGVNYXBEaW0oKSB7XG4gICAgICBjb25zdCB7ZXhwb3J0SW1hZ2UsIG1hcEgsIG1hcFd9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmIChtYXBIICE9PSBleHBvcnRJbWFnZS5tYXBIIHx8IG1hcFcgIT09IGV4cG9ydEltYWdlLm1hcFcpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZUltYWdlU2V0dGluZyh7XG4gICAgICAgICAgbWFwSCxcbiAgICAgICAgICBtYXBXLFxuICAgICAgICAgIGxlZ2VuZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2V4cG9ydEltYWdlLCBvblVwZGF0ZUltYWdlU2V0dGluZywgaW50bH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2xlZ2VuZCwgcmF0aW8sIHJlc29sdXRpb259ID0gZXhwb3J0SW1hZ2U7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRNb2RhbENvbnRlbnQgY2xhc3NOYW1lPVwiZXhwb3J0LWltYWdlLW1vZGFsXCI+XG4gICAgICAgICAgPEltYWdlT3B0aW9uTGlzdD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1vcHRpb24tc2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0SW1hZ2UucmF0aW9UaXRsZSd9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydEltYWdlLnJhdGlvRGVzY3JpcHRpb24nfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1saXN0XCI+XG4gICAgICAgICAgICAgICAge0VYUE9SVF9JTUdfUkFUSU9fT1BUSU9OUy5maWx0ZXIob3AgPT4gIW9wLmhpZGRlbikubWFwKG9wID0+IChcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3Rpb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtvcC5pZH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3JhdGlvID09PSBvcC5pZH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25VcGRhdGVJbWFnZVNldHRpbmcoe3JhdGlvOiBvcC5pZH0pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17b3AubGFiZWx9IC8+XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdGlvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1vcHRpb24tc2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0SW1hZ2UucmVzb2x1dGlvblRpdGxlJ30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0SW1hZ2UucmVzb2x1dGlvbkRlc2NyaXB0aW9uJ30gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tbGlzdFwiPlxuICAgICAgICAgICAgICAgIHtFWFBPUlRfSU1HX1JFU09MVVRJT05fT1BUSU9OUy5tYXAob3AgPT4gKFxuICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e29wLmlkfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17cmVzb2x1dGlvbiA9PT0gb3AuaWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wLmF2YWlsYWJsZSAmJiBvblVwZGF0ZUltYWdlU2V0dGluZyh7cmVzb2x1dGlvbjogb3AuaWR9KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge29wLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Rpb25CdXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydEltYWdlLm1hcExlZ2VuZFRpdGxlJ30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGlkPVwiYWRkLW1hcC1sZWdlbmRcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2xlZ2VuZH1cbiAgICAgICAgICAgICAgICBsYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ21vZGFsLmV4cG9ydEltYWdlLm1hcExlZ2VuZEFkZCd9KX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25VcGRhdGVJbWFnZVNldHRpbmcoe2xlZ2VuZDogIWxlZ2VuZH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9JbWFnZU9wdGlvbkxpc3Q+XG4gICAgICAgICAgPEltYWdlUHJldmlldyBleHBvcnRJbWFnZT17ZXhwb3J0SW1hZ2V9IC8+XG4gICAgICAgIDwvU3R5bGVkTW9kYWxDb250ZW50PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5qZWN0SW50bChFeHBvcnRJbWFnZU1vZGFsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cG9ydEltYWdlTW9kYWxGYWN0b3J5O1xuIl19