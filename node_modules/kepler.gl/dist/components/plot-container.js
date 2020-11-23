"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PlotContainerFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactMapGl = require("react-map-gl");

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _notificationsUtils = require("../utils/notifications-utils");

var _mapContainer = _interopRequireDefault(require("./map-container"));

var _exportUtils = require("../utils/export-utils");

var _mapboxGlStyleEditor = require("../utils/map-style-utils/mapbox-gl-style-editor");

var _dataUtils = require("../utils/data-utils");

var _geoViewport = _interopRequireDefault(require("@mapbox/geo-viewport"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .mapboxgl-ctrl-bottom-left,\n  .mapboxgl-ctrl-bottom-right {\n    display: none;\n  }\n\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var CLASS_FILTER = ['mapboxgl-control-container', 'attrition-logo'];

var DOM_FILTER_FUNC = function DOM_FILTER_FUNC(node) {
  return !CLASS_FILTER.includes(node.className);
};

var OUT_OF_SCREEN_POSITION = -9999;
var propTypes = {
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  exportImageSetting: _propTypes["default"].object.isRequired,
  addNotification: _propTypes["default"].func.isRequired,
  mapFields: _propTypes["default"].object.isRequired,
  setExportImageSetting: _propTypes["default"].object.isRequired,
  setExportImageDataUri: _propTypes["default"].func.isRequired,
  setExportImageError: _propTypes["default"].func.isRequired,
  splitMaps: _propTypes["default"].arrayOf(_propTypes["default"].object)
};
PlotContainerFactory.deps = [_mapContainer["default"]]; // Remove mapbox logo in exported map, because it contains non-ascii characters

var StyledPlotContainer = _styledComponents["default"].div(_templateObject(), OUT_OF_SCREEN_POSITION, OUT_OF_SCREEN_POSITION);

var StyledMapContainer = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});

var deckGlProps = {
  glOptions: {
    preserveDrawingBuffer: true,
    useDevicePixels: false
  }
};

function PlotContainerFactory(MapContainer) {
  var PlotContainer =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(PlotContainer, _Component);

    function PlotContainer(_props) {
      var _this;

      (0, _classCallCheck2["default"])(this, PlotContainer);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PlotContainer).call(this, _props));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "plottingAreaRef", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapStyleSelector", function (props) {
        return props.mapFields.mapStyle;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapScaleSelector", function (props) {
        var imageSize = props.exportImageSetting.imageSize;
        var mapState = props.mapFields.mapState;

        if (imageSize.scale) {
          return imageSize.scale;
        }

        var scale = (0, _exportUtils.getScaleFromImageSize)(imageSize.imageW, imageSize.imageH, mapState.width * (mapState.isSplit ? 2 : 1), mapState.height);
        return scale > 0 ? scale : 1;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaledMapStyleSelector", (0, _reselect.createSelector)(_this.mapStyleSelector, _this.mapScaleSelector, function (mapStyle, scale) {
        return _objectSpread({}, mapStyle, {
          bottomMapStyle: (0, _mapboxGlStyleEditor.scaleMapStyleByResolution)(mapStyle.bottomMapStyle, scale),
          topMapStyle: (0, _mapboxGlStyleEditor.scaleMapStyleByResolution)(mapStyle.topMapStyle, scale)
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onMapRender", function (map) {
        if (map.isStyleLoaded()) {
          _this._retrieveNewScreenshot();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_retrieveNewScreenshot", function () {
        if (_this.plottingAreaRef.current) {
          (0, _exportUtils.convertToPng)(_this.plottingAreaRef.current, {
            filter: DOM_FILTER_FUNC
          }).then(_this.props.setExportImageDataUri)["catch"](function (err) {
            _this.props.setExportImageError(err);

            _this.props.addNotification((0, _notificationsUtils.exportImageError)({
              err: err
            }));
          });
        }
      });
      _this._onMapRender = (0, _lodash["default"])(_this._onMapRender, 500);
      _this._retrieveNewScreenshot = (0, _lodash["default"])(_this._retrieveNewScreenshot, 500);
      return _this;
    }

    (0, _createClass2["default"])(PlotContainer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.setExportImageSetting({
          processing: true
        });
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this2 = this;

        // re-fetch the new screenshot only when ratio legend or resolution changes
        var checks = ['ratio', 'resolution', 'legend'];
        var shouldRetrieveScreenshot = checks.some(function (item) {
          return _this2.props.exportImageSetting[item] !== prevProps.exportImageSetting[item];
        });

        if (shouldRetrieveScreenshot) {
          this.props.setExportImageSetting({
            processing: true
          });

          this._retrieveNewScreenshot();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            exportImageSetting = _this$props.exportImageSetting,
            mapFields = _this$props.mapFields,
            splitMaps = _this$props.splitMaps;
        var _exportImageSetting$i = exportImageSetting.imageSize,
            imageSize = _exportImageSetting$i === void 0 ? {} : _exportImageSetting$i,
            legend = exportImageSetting.legend;
        var mapState = mapFields.mapState;
        var isSplit = splitMaps && splitMaps.length > 1;
        var size = {
          width: imageSize.imageW || 1,
          height: imageSize.imageH || 1
        };
        var bounds = (0, _dataUtils.findMapBounds)(mapFields.layers);
        var width = size.width / (isSplit ? 2 : 1);
        var height = size.height;
        var scale = this.mapScaleSelector(this.props);

        var newMapState = _objectSpread({}, mapState, {
          width: width,
          height: height,
          zoom: mapState.zoom + (Math.log2(scale) || 0)
        });

        if (exportImageSetting.center) {
          var _ref = exportImageSetting.center ? _geoViewport["default"].viewport(bounds, [width, height]) : {
            center: [mapState.longitude, mapState.latitude],
            zoom: mapState.zoom
          },
              center = _ref.center,
              zoom = _ref.zoom;

          newMapState.longitude = center[0];
          newMapState.latitude = center[1];
          newMapState.zoom = zoom + Number(Math.log2(scale) || 0);
        }

        var mapProps = _objectSpread({}, mapFields, {
          mapStyle: this.scaledMapStyleSelector(this.props),
          // override viewport based on export settings
          mapState: newMapState,
          mapControls: {
            // override map legend visibility
            mapLegend: {
              show: legend,
              active: true
            }
          },
          MapComponent: _reactMapGl.StaticMap,
          onMapRender: this._onMapRender,
          isExport: true,
          deckGlProps: deckGlProps
        });

        var mapContainers = !isSplit ? _react["default"].createElement(MapContainer, (0, _extends2["default"])({
          index: 0
        }, mapProps)) : splitMaps.map(function (settings, index) {
          return _react["default"].createElement(MapContainer, (0, _extends2["default"])({
            key: index,
            index: index
          }, mapProps, {
            mapLayers: splitMaps[index].layers
          }));
        });
        return _react["default"].createElement(StyledPlotContainer, {
          className: "export-map-instance"
        }, _react["default"].createElement(StyledMapContainer, {
          ref: this.plottingAreaRef,
          width: size.width,
          height: size.height
        }, mapContainers));
      }
    }]);
    return PlotContainer;
  }(_react.Component);

  PlotContainer.propsTypes = propTypes;
  return PlotContainer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3Bsb3QtY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIkNMQVNTX0ZJTFRFUiIsIkRPTV9GSUxURVJfRlVOQyIsIm5vZGUiLCJpbmNsdWRlcyIsImNsYXNzTmFtZSIsIk9VVF9PRl9TQ1JFRU5fUE9TSVRJT04iLCJwcm9wVHlwZXMiLCJ3aWR0aCIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJoZWlnaHQiLCJleHBvcnRJbWFnZVNldHRpbmciLCJvYmplY3QiLCJhZGROb3RpZmljYXRpb24iLCJmdW5jIiwibWFwRmllbGRzIiwic2V0RXhwb3J0SW1hZ2VTZXR0aW5nIiwic2V0RXhwb3J0SW1hZ2VEYXRhVXJpIiwic2V0RXhwb3J0SW1hZ2VFcnJvciIsInNwbGl0TWFwcyIsImFycmF5T2YiLCJQbG90Q29udGFpbmVyRmFjdG9yeSIsImRlcHMiLCJNYXBDb250YWluZXJGYWN0b3J5IiwiU3R5bGVkUGxvdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0eWxlZE1hcENvbnRhaW5lciIsInByb3BzIiwiZGVja0dsUHJvcHMiLCJnbE9wdGlvbnMiLCJwcmVzZXJ2ZURyYXdpbmdCdWZmZXIiLCJ1c2VEZXZpY2VQaXhlbHMiLCJNYXBDb250YWluZXIiLCJQbG90Q29udGFpbmVyIiwibWFwU3R5bGUiLCJpbWFnZVNpemUiLCJtYXBTdGF0ZSIsInNjYWxlIiwiaW1hZ2VXIiwiaW1hZ2VIIiwiaXNTcGxpdCIsIm1hcFN0eWxlU2VsZWN0b3IiLCJtYXBTY2FsZVNlbGVjdG9yIiwiYm90dG9tTWFwU3R5bGUiLCJ0b3BNYXBTdHlsZSIsIm1hcCIsImlzU3R5bGVMb2FkZWQiLCJfcmV0cmlldmVOZXdTY3JlZW5zaG90IiwicGxvdHRpbmdBcmVhUmVmIiwiY3VycmVudCIsImZpbHRlciIsInRoZW4iLCJlcnIiLCJfb25NYXBSZW5kZXIiLCJwcm9jZXNzaW5nIiwicHJldlByb3BzIiwiY2hlY2tzIiwic2hvdWxkUmV0cmlldmVTY3JlZW5zaG90Iiwic29tZSIsIml0ZW0iLCJsZWdlbmQiLCJsZW5ndGgiLCJzaXplIiwiYm91bmRzIiwibGF5ZXJzIiwibmV3TWFwU3RhdGUiLCJ6b29tIiwiTWF0aCIsImxvZzIiLCJjZW50ZXIiLCJnZW9WaWV3cG9ydCIsInZpZXdwb3J0IiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJOdW1iZXIiLCJtYXBQcm9wcyIsInNjYWxlZE1hcFN0eWxlU2VsZWN0b3IiLCJtYXBDb250cm9scyIsIm1hcExlZ2VuZCIsInNob3ciLCJhY3RpdmUiLCJNYXBDb21wb25lbnQiLCJTdGF0aWNNYXAiLCJvbk1hcFJlbmRlciIsImlzRXhwb3J0IiwibWFwQ29udGFpbmVycyIsInNldHRpbmdzIiwiaW5kZXgiLCJDb21wb25lbnQiLCJwcm9wc1R5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FBQyw0QkFBRCxFQUErQixnQkFBL0IsQ0FBckI7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxJQUFJO0FBQUEsU0FBSSxDQUFDRixZQUFZLENBQUNHLFFBQWIsQ0FBc0JELElBQUksQ0FBQ0UsU0FBM0IsQ0FBTDtBQUFBLENBQTVCOztBQUNBLElBQU1DLHNCQUFzQixHQUFHLENBQUMsSUFBaEM7QUFFQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLEtBQUssRUFBRUMsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFI7QUFFaEJDLEVBQUFBLE1BQU0sRUFBRUgsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRlQ7QUFHaEJFLEVBQUFBLGtCQUFrQixFQUFFSixzQkFBVUssTUFBVixDQUFpQkgsVUFIckI7QUFJaEJJLEVBQUFBLGVBQWUsRUFBRU4sc0JB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ZDs7QUFtQkEsWUFBTXlELGFBQWEsR0FBRyxDQUFDN0MsT0FBRCxHQUNwQixnQ0FBQyxZQUFEO0FBQWMsVUFBQSxLQUFLLEVBQUU7QUFBckIsV0FBNEJtQyxRQUE1QixFQURvQixHQUdwQnpELFNBQVMsQ0FBQzJCLEdBQVYsQ0FBYyxVQUFDeUMsUUFBRCxFQUFXQyxLQUFYO0FBQUEsaUJBQ1osZ0NBQUMsWUFBRDtBQUNFLFlBQUEsR0FBRyxFQUFFQSxLQURQO0FBRUUsWUFBQSxLQUFLLEVBQUVBO0FBRlQsYUFHTVosUUFITjtBQUlFLFlBQUEsU0FBUyxFQUFFekQsU0FBUyxDQUFDcUUsS0FBRCxDQUFULENBQWlCdkI7QUFKOUIsYUFEWTtBQUFBLFNBQWQsQ0FIRjtBQWFBLGVBQ0UsZ0NBQUMsbUJBQUQ7QUFBcUIsVUFBQSxTQUFTLEVBQUM7QUFBL0IsV0FDRSxnQ0FBQyxrQkFBRDtBQUFvQixVQUFBLEdBQUcsRUFBRSxLQUFLaEIsZUFBOUI7QUFBK0MsVUFBQSxLQUFLLEVBQUVjLElBQUksQ0FBQ3pELEtBQTNEO0FBQWtFLFVBQUEsTUFBTSxFQUFFeUQsSUFBSSxDQUFDckQ7QUFBL0UsV0FDRzRFLGFBREgsQ0FERixDQURGO0FBT0Q7QUE5SXNEO0FBQUE7QUFBQSxJQUM3QkcsZ0JBRDZCOztBQWlKekR2RCxFQUFBQSxhQUFhLENBQUN3RCxVQUFkLEdBQTJCckYsU0FBM0I7QUFDQSxTQUFPNkIsYUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLy8gbGlicmFyaWVzXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtTdGF0aWNNYXB9IGZyb20gJ3JlYWN0LW1hcC1nbCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcbmltcG9ydCB7ZXhwb3J0SW1hZ2VFcnJvcn0gZnJvbSAndXRpbHMvbm90aWZpY2F0aW9ucy11dGlscyc7XG5pbXBvcnQgTWFwQ29udGFpbmVyRmFjdG9yeSBmcm9tICcuL21hcC1jb250YWluZXInO1xuaW1wb3J0IHtjb252ZXJ0VG9Qbmd9IGZyb20gJ3V0aWxzL2V4cG9ydC11dGlscyc7XG5pbXBvcnQge3NjYWxlTWFwU3R5bGVCeVJlc29sdXRpb259IGZyb20gJ3V0aWxzL21hcC1zdHlsZS11dGlscy9tYXBib3gtZ2wtc3R5bGUtZWRpdG9yJztcbmltcG9ydCB7Z2V0U2NhbGVGcm9tSW1hZ2VTaXplfSBmcm9tICd1dGlscy9leHBvcnQtdXRpbHMnO1xuaW1wb3J0IHtmaW5kTWFwQm91bmRzfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcbmltcG9ydCBnZW9WaWV3cG9ydCBmcm9tICdAbWFwYm94L2dlby12aWV3cG9ydCc7XG5cbmNvbnN0IENMQVNTX0ZJTFRFUiA9IFsnbWFwYm94Z2wtY29udHJvbC1jb250YWluZXInLCAnYXR0cml0aW9uLWxvZ28nXTtcbmNvbnN0IERPTV9GSUxURVJfRlVOQyA9IG5vZGUgPT4gIUNMQVNTX0ZJTFRFUi5pbmNsdWRlcyhub2RlLmNsYXNzTmFtZSk7XG5jb25zdCBPVVRfT0ZfU0NSRUVOX1BPU0lUSU9OID0gLTk5OTk7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGV4cG9ydEltYWdlU2V0dGluZzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBhZGROb3RpZmljYXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG1hcEZpZWxkczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZXRFeHBvcnRJbWFnZVNldHRpbmc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc2V0RXhwb3J0SW1hZ2VEYXRhVXJpOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZXRFeHBvcnRJbWFnZUVycm9yOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzcGxpdE1hcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpXG59O1xuXG5QbG90Q29udGFpbmVyRmFjdG9yeS5kZXBzID0gW01hcENvbnRhaW5lckZhY3RvcnldO1xuXG4vLyBSZW1vdmUgbWFwYm94IGxvZ28gaW4gZXhwb3J0ZWQgbWFwLCBiZWNhdXNlIGl0IGNvbnRhaW5zIG5vbi1hc2NpaSBjaGFyYWN0ZXJzXG5jb25zdCBTdHlsZWRQbG90Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgLm1hcGJveGdsLWN0cmwtYm90dG9tLWxlZnQsXG4gIC5tYXBib3hnbC1jdHJsLWJvdHRvbS1yaWdodCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAke09VVF9PRl9TQ1JFRU5fUE9TSVRJT059cHg7XG4gIGxlZnQ6ICR7T1VUX09GX1NDUkVFTl9QT1NJVElPTn1weDtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofXB4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgZGVja0dsUHJvcHMgPSB7XG4gIGdsT3B0aW9uczoge1xuICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICB1c2VEZXZpY2VQaXhlbHM6IGZhbHNlXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsb3RDb250YWluZXJGYWN0b3J5KE1hcENvbnRhaW5lcikge1xuICBjbGFzcyBQbG90Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5fb25NYXBSZW5kZXIgPSBkZWJvdW5jZSh0aGlzLl9vbk1hcFJlbmRlciwgNTAwKTtcbiAgICAgIHRoaXMuX3JldHJpZXZlTmV3U2NyZWVuc2hvdCA9IGRlYm91bmNlKHRoaXMuX3JldHJpZXZlTmV3U2NyZWVuc2hvdCwgNTAwKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMuc2V0RXhwb3J0SW1hZ2VTZXR0aW5nKHtwcm9jZXNzaW5nOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgLy8gcmUtZmV0Y2ggdGhlIG5ldyBzY3JlZW5zaG90IG9ubHkgd2hlbiByYXRpbyBsZWdlbmQgb3IgcmVzb2x1dGlvbiBjaGFuZ2VzXG4gICAgICBjb25zdCBjaGVja3MgPSBbJ3JhdGlvJywgJ3Jlc29sdXRpb24nLCAnbGVnZW5kJ107XG4gICAgICBjb25zdCBzaG91bGRSZXRyaWV2ZVNjcmVlbnNob3QgPSBjaGVja3Muc29tZShcbiAgICAgICAgaXRlbSA9PiB0aGlzLnByb3BzLmV4cG9ydEltYWdlU2V0dGluZ1tpdGVtXSAhPT0gcHJldlByb3BzLmV4cG9ydEltYWdlU2V0dGluZ1tpdGVtXVxuICAgICAgKTtcbiAgICAgIGlmIChzaG91bGRSZXRyaWV2ZVNjcmVlbnNob3QpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRFeHBvcnRJbWFnZVNldHRpbmcoe3Byb2Nlc3Npbmc6IHRydWV9KTtcbiAgICAgICAgdGhpcy5fcmV0cmlldmVOZXdTY3JlZW5zaG90KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGxvdHRpbmdBcmVhUmVmID0gY3JlYXRlUmVmKCk7XG5cbiAgICBtYXBTdHlsZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubWFwRmllbGRzLm1hcFN0eWxlO1xuICAgIG1hcFNjYWxlU2VsZWN0b3IgPSBwcm9wcyA9PiB7XG4gICAgICBjb25zdCB7aW1hZ2VTaXplfSA9IHByb3BzLmV4cG9ydEltYWdlU2V0dGluZztcbiAgICAgIGNvbnN0IHttYXBTdGF0ZX0gPSBwcm9wcy5tYXBGaWVsZHM7XG4gICAgICBpZiAoaW1hZ2VTaXplLnNjYWxlKSB7XG4gICAgICAgIHJldHVybiBpbWFnZVNpemUuc2NhbGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGVGcm9tSW1hZ2VTaXplKFxuICAgICAgICBpbWFnZVNpemUuaW1hZ2VXLFxuICAgICAgICBpbWFnZVNpemUuaW1hZ2VILFxuICAgICAgICBtYXBTdGF0ZS53aWR0aCAqIChtYXBTdGF0ZS5pc1NwbGl0ID8gMiA6IDEpLFxuICAgICAgICBtYXBTdGF0ZS5oZWlnaHRcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBzY2FsZSA+IDAgPyBzY2FsZSA6IDE7XG4gICAgfTtcblxuICAgIHNjYWxlZE1hcFN0eWxlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMubWFwU3R5bGVTZWxlY3RvcixcbiAgICAgIHRoaXMubWFwU2NhbGVTZWxlY3RvcixcbiAgICAgIChtYXBTdHlsZSwgc2NhbGUpID0+ICh7XG4gICAgICAgIC4uLm1hcFN0eWxlLFxuICAgICAgICBib3R0b21NYXBTdHlsZTogc2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbihtYXBTdHlsZS5ib3R0b21NYXBTdHlsZSwgc2NhbGUpLFxuICAgICAgICB0b3BNYXBTdHlsZTogc2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbihtYXBTdHlsZS50b3BNYXBTdHlsZSwgc2NhbGUpXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBfb25NYXBSZW5kZXIgPSBtYXAgPT4ge1xuICAgICAgaWYgKG1hcC5pc1N0eWxlTG9hZGVkKCkpIHtcbiAgICAgICAgdGhpcy5fcmV0cmlldmVOZXdTY3JlZW5zaG90KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9yZXRyaWV2ZU5ld1NjcmVlbnNob3QgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wbG90dGluZ0FyZWFSZWYuY3VycmVudCkge1xuICAgICAgICBjb252ZXJ0VG9QbmcodGhpcy5wbG90dGluZ0FyZWFSZWYuY3VycmVudCwge2ZpbHRlcjogRE9NX0ZJTFRFUl9GVU5DfSlcbiAgICAgICAgICAudGhlbih0aGlzLnByb3BzLnNldEV4cG9ydEltYWdlRGF0YVVyaSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0RXhwb3J0SW1hZ2VFcnJvcihlcnIpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hZGROb3RpZmljYXRpb24oZXhwb3J0SW1hZ2VFcnJvcih7ZXJyfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7ZXhwb3J0SW1hZ2VTZXR0aW5nLCBtYXBGaWVsZHMsIHNwbGl0TWFwc30gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2ltYWdlU2l6ZSA9IHt9LCBsZWdlbmR9ID0gZXhwb3J0SW1hZ2VTZXR0aW5nO1xuICAgICAgY29uc3Qge21hcFN0YXRlfSA9IG1hcEZpZWxkcztcbiAgICAgIGNvbnN0IGlzU3BsaXQgPSBzcGxpdE1hcHMgJiYgc3BsaXRNYXBzLmxlbmd0aCA+IDE7XG5cbiAgICAgIGNvbnN0IHNpemUgPSB7XG4gICAgICAgIHdpZHRoOiBpbWFnZVNpemUuaW1hZ2VXIHx8IDEsXG4gICAgICAgIGhlaWdodDogaW1hZ2VTaXplLmltYWdlSCB8fCAxXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBib3VuZHMgPSBmaW5kTWFwQm91bmRzKG1hcEZpZWxkcy5sYXllcnMpO1xuICAgICAgY29uc3Qgd2lkdGggPSBzaXplLndpZHRoIC8gKGlzU3BsaXQgPyAyIDogMSk7XG4gICAgICBjb25zdCBoZWlnaHQgPSBzaXplLmhlaWdodDtcbiAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5tYXBTY2FsZVNlbGVjdG9yKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgbmV3TWFwU3RhdGUgPSB7XG4gICAgICAgIC4uLm1hcFN0YXRlLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB6b29tOiBtYXBTdGF0ZS56b29tICsgKE1hdGgubG9nMihzY2FsZSkgfHwgMClcbiAgICAgIH07XG5cbiAgICAgIGlmIChleHBvcnRJbWFnZVNldHRpbmcuY2VudGVyKSB7XG4gICAgICAgIGNvbnN0IHtjZW50ZXIsIHpvb219ID0gZXhwb3J0SW1hZ2VTZXR0aW5nLmNlbnRlclxuICAgICAgICAgID8gZ2VvVmlld3BvcnQudmlld3BvcnQoYm91bmRzLCBbd2lkdGgsIGhlaWdodF0pXG4gICAgICAgICAgOiB7Y2VudGVyOiBbbWFwU3RhdGUubG9uZ2l0dWRlLCBtYXBTdGF0ZS5sYXRpdHVkZV0sIHpvb206IG1hcFN0YXRlLnpvb219O1xuXG4gICAgICAgIG5ld01hcFN0YXRlLmxvbmdpdHVkZSA9IGNlbnRlclswXTtcbiAgICAgICAgbmV3TWFwU3RhdGUubGF0aXR1ZGUgPSBjZW50ZXJbMV07XG4gICAgICAgIG5ld01hcFN0YXRlLnpvb20gPSB6b29tICsgTnVtYmVyKE1hdGgubG9nMihzY2FsZSkgfHwgMCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hcFByb3BzID0ge1xuICAgICAgICAuLi5tYXBGaWVsZHMsXG4gICAgICAgIG1hcFN0eWxlOiB0aGlzLnNjYWxlZE1hcFN0eWxlU2VsZWN0b3IodGhpcy5wcm9wcyksXG5cbiAgICAgICAgLy8gb3ZlcnJpZGUgdmlld3BvcnQgYmFzZWQgb24gZXhwb3J0IHNldHRpbmdzXG4gICAgICAgIG1hcFN0YXRlOiBuZXdNYXBTdGF0ZSxcbiAgICAgICAgbWFwQ29udHJvbHM6IHtcbiAgICAgICAgICAvLyBvdmVycmlkZSBtYXAgbGVnZW5kIHZpc2liaWxpdHlcbiAgICAgICAgICBtYXBMZWdlbmQ6IHtcbiAgICAgICAgICAgIHNob3c6IGxlZ2VuZCxcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgTWFwQ29tcG9uZW50OiBTdGF0aWNNYXAsXG4gICAgICAgIG9uTWFwUmVuZGVyOiB0aGlzLl9vbk1hcFJlbmRlcixcbiAgICAgICAgaXNFeHBvcnQ6IHRydWUsXG4gICAgICAgIGRlY2tHbFByb3BzXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBtYXBDb250YWluZXJzID0gIWlzU3BsaXQgPyAoXG4gICAgICAgIDxNYXBDb250YWluZXIgaW5kZXg9ezB9IHsuLi5tYXBQcm9wc30gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIHNwbGl0TWFwcy5tYXAoKHNldHRpbmdzLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxNYXBDb250YWluZXJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICB7Li4ubWFwUHJvcHN9XG4gICAgICAgICAgICBtYXBMYXllcnM9e3NwbGl0TWFwc1tpbmRleF0ubGF5ZXJzfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkUGxvdENvbnRhaW5lciBjbGFzc05hbWU9XCJleHBvcnQtbWFwLWluc3RhbmNlXCI+XG4gICAgICAgICAgPFN0eWxlZE1hcENvbnRhaW5lciByZWY9e3RoaXMucGxvdHRpbmdBcmVhUmVmfSB3aWR0aD17c2l6ZS53aWR0aH0gaGVpZ2h0PXtzaXplLmhlaWdodH0+XG4gICAgICAgICAgICB7bWFwQ29udGFpbmVyc31cbiAgICAgICAgICA8L1N0eWxlZE1hcENvbnRhaW5lcj5cbiAgICAgICAgPC9TdHlsZWRQbG90Q29udGFpbmVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBQbG90Q29udGFpbmVyLnByb3BzVHlwZXMgPSBwcm9wVHlwZXM7XG4gIHJldHVybiBQbG90Q29udGFpbmVyO1xufVxuIl19