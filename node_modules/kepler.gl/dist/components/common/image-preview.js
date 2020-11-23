"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _loadingSpinner = _interopRequireDefault(require("./loading-spinner"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  padding: 30px;\n\n  .dimension,\n  .instruction {\n    padding: 8px 0px;\n  }\n\n  .preview-image {\n    background: #e2e2e2;\n    border-radius: 4px;\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.18);\n    width: 100%;\n    position: relative;\n  }\n\n  .preview-image-placeholder {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  .preview-image-spinner {\n    position: absolute;\n    left: calc(50% - 25px);\n    top: calc(50% - 25px);\n  }\n\n  .preview-image--error {\n    font-size: 12px;\n    padding: 12px;\n    color: ", ";\n    text-align: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @typedef {import('../../reducers/ui-state-updaters').ExportImage} ExportImage */
var StyledImagePreview = _styledComponents["default"].div.attrs({
  className: 'image-preview'
})(_templateObject(), function (props) {
  return props.theme.errorColor;
});
/**
 * @param {object} props
 * @param {ExportImage} [props.exportImage]
 * @param {number} [props.width]
 * @param {boolean} [props.showDimension]
 */


var ImagePreview = function ImagePreview(_ref) {
  var exportImage = _ref.exportImage,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 400 : _ref$width,
      _ref$showDimension = _ref.showDimension,
      showDimension = _ref$showDimension === void 0 ? false : _ref$showDimension;

  var _ref2 = exportImage || {},
      error = _ref2.error,
      imageDataUri = _ref2.imageDataUri,
      processing = _ref2.processing,
      _ref2$imageSize = _ref2.imageSize;

  _ref2$imageSize = _ref2$imageSize === void 0 ? {} : _ref2$imageSize;
  var _ref2$imageSize$image = _ref2$imageSize.imageW,
      imageW = _ref2$imageSize$image === void 0 ? 0 : _ref2$imageSize$image,
      _ref2$imageSize$image2 = _ref2$imageSize.imageH,
      imageH = _ref2$imageSize$image2 === void 0 ? 0 : _ref2$imageSize$image2;
  var imageStyle = {
    width: "".concat(width, "px"),
    height: "".concat(imageH / (imageW || 1) * width, "px")
  };
  return _react["default"].createElement(StyledImagePreview, null, showDimension ? _react["default"].createElement("div", {
    className: "dimension"
  }, imageW, " pixel x ", imageH, " pixel") : null, _react["default"].createElement("div", {
    className: "preview-image",
    style: imageStyle
  }, processing ? _react["default"].createElement("div", {
    className: "preview-image-spinner"
  }, _react["default"].createElement(_loadingSpinner["default"], null)) : error ? _react["default"].createElement("div", {
    className: "preview-image--error"
  }, _react["default"].createElement("span", null, error.message || 'Generate map image failed!')) : _react["default"].createElement("img", {
    className: "preview-image-placeholder",
    src: imageDataUri
  })));
};

var _default = ImagePreview;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pbWFnZS1wcmV2aWV3LmpzIl0sIm5hbWVzIjpbIlN0eWxlZEltYWdlUHJldmlldyIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJ0aGVtZSIsImVycm9yQ29sb3IiLCJJbWFnZVByZXZpZXciLCJleHBvcnRJbWFnZSIsIndpZHRoIiwic2hvd0RpbWVuc2lvbiIsImVycm9yIiwiaW1hZ2VEYXRhVXJpIiwicHJvY2Vzc2luZyIsImltYWdlU2l6ZSIsImltYWdlVyIsImltYWdlSCIsImltYWdlU3R5bGUiLCJoZWlnaHQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUMxQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRCtCLENBQWpCLENBQUgsb0JBd0NYLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBaEI7QUFBQSxDQXhDTSxDQUF4QjtBQTZDQTs7Ozs7Ozs7QUFNQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUF1RDtBQUFBLE1BQXJEQyxXQUFxRCxRQUFyREEsV0FBcUQ7QUFBQSx3QkFBeENDLEtBQXdDO0FBQUEsTUFBeENBLEtBQXdDLDJCQUFoQyxHQUFnQztBQUFBLGdDQUEzQkMsYUFBMkI7QUFBQSxNQUEzQkEsYUFBMkIsbUNBQVgsS0FBVzs7QUFBQSxjQUV4RUYsV0FBVyxJQUFJLEVBRnlEO0FBQUEsTUFDbkVHLEtBRG1FLFNBQ25FQSxLQURtRTtBQUFBLE1BQzVEQyxZQUQ0RCxTQUM1REEsWUFENEQ7QUFBQSxNQUM5Q0MsVUFEOEMsU0FDOUNBLFVBRDhDO0FBQUEsOEJBQ2xDQyxTQURrQzs7QUFBQSxpREFDSSxFQURKO0FBQUEsOENBQ3RCQyxNQURzQjtBQUFBLE1BQ3RCQSxNQURzQixzQ0FDYixDQURhO0FBQUEsK0NBQ1ZDLE1BRFU7QUFBQSxNQUNWQSxNQURVLHVDQUNELENBREM7QUFJMUUsTUFBTUMsVUFBVSxHQUFHO0FBQ2pCUixJQUFBQSxLQUFLLFlBQUtBLEtBQUwsT0FEWTtBQUVqQlMsSUFBQUEsTUFBTSxZQUFNRixNQUFNLElBQUlELE1BQU0sSUFBSSxDQUFkLENBQVAsR0FBMkJOLEtBQWhDO0FBRlcsR0FBbkI7QUFLQSxTQUNFLGdDQUFDLGtCQUFELFFBQ0dDLGFBQWEsR0FDWjtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDR0ssTUFESCxlQUNvQkMsTUFEcEIsV0FEWSxHQUlWLElBTE4sRUFNRTtBQUFLLElBQUEsU0FBUyxFQUFDLGVBQWY7QUFBK0IsSUFBQSxLQUFLLEVBQUVDO0FBQXRDLEtBQ0dKLFVBQVUsR0FDVDtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRSxnQ0FBQywwQkFBRCxPQURGLENBRFMsR0FJUEYsS0FBSyxHQUNQO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFLDhDQUFPQSxLQUFLLENBQUNRLE9BQU4sSUFBaUIsNEJBQXhCLENBREYsQ0FETyxHQUtQO0FBQUssSUFBQSxTQUFTLEVBQUMsMkJBQWY7QUFBMkMsSUFBQSxHQUFHLEVBQUVQO0FBQWhELElBVkosQ0FORixDQURGO0FBc0JELENBL0JEOztlQWlDZUwsWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9sb2FkaW5nLXNwaW5uZXInO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vcmVkdWNlcnMvdWktc3RhdGUtdXBkYXRlcnMnKS5FeHBvcnRJbWFnZX0gRXhwb3J0SW1hZ2UgKi9cblxuY29uc3QgU3R5bGVkSW1hZ2VQcmV2aWV3ID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2ltYWdlLXByZXZpZXcnXG59KWBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHg7XG5cbiAgLmRpbWVuc2lvbixcbiAgLmluc3RydWN0aW9uIHtcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xuICB9XG5cbiAgLnByZXZpZXctaW1hZ2Uge1xuICAgIGJhY2tncm91bmQ6ICNlMmUyZTI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlLXBsYWNlaG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnByZXZpZXctaW1hZ2Utc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjVweCk7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDI1cHgpO1xuICB9XG5cbiAgLnByZXZpZXctaW1hZ2UtLWVycm9yIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5lcnJvckNvbG9yfTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbmA7XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge0V4cG9ydEltYWdlfSBbcHJvcHMuZXhwb3J0SW1hZ2VdXG4gKiBAcGFyYW0ge251bWJlcn0gW3Byb3BzLndpZHRoXVxuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMuc2hvd0RpbWVuc2lvbl1cbiAqL1xuY29uc3QgSW1hZ2VQcmV2aWV3ID0gKHtleHBvcnRJbWFnZSwgd2lkdGggPSA0MDAsIHNob3dEaW1lbnNpb24gPSBmYWxzZX0pID0+IHtcbiAgY29uc3Qge2Vycm9yLCBpbWFnZURhdGFVcmksIHByb2Nlc3NpbmcsIGltYWdlU2l6ZToge2ltYWdlVyA9IDAsIGltYWdlSCA9IDB9ID0ge319ID1cbiAgICBleHBvcnRJbWFnZSB8fCB7fTtcblxuICBjb25zdCBpbWFnZVN0eWxlID0ge1xuICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgaGVpZ2h0OiBgJHsoaW1hZ2VIIC8gKGltYWdlVyB8fCAxKSkgKiB3aWR0aH1weGBcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRJbWFnZVByZXZpZXc+XG4gICAgICB7c2hvd0RpbWVuc2lvbiA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb25cIj5cbiAgICAgICAgICB7aW1hZ2VXfSBwaXhlbCB4IHtpbWFnZUh9IHBpeGVsXG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2VcIiBzdHlsZT17aW1hZ2VTdHlsZX0+XG4gICAgICAgIHtwcm9jZXNzaW5nID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1pbWFnZS1zcGlubmVyXCI+XG4gICAgICAgICAgICA8TG9hZGluZ1NwaW5uZXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IGVycm9yID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1pbWFnZS0tZXJyb3JcIj5cbiAgICAgICAgICAgIDxzcGFuPntlcnJvci5tZXNzYWdlIHx8ICdHZW5lcmF0ZSBtYXAgaW1hZ2UgZmFpbGVkISd9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJldmlldy1pbWFnZS1wbGFjZWhvbGRlclwiIHNyYz17aW1hZ2VEYXRhVXJpfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9TdHlsZWRJbWFnZVByZXZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVByZXZpZXc7XG4iXX0=