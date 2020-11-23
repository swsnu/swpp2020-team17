"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HexagonIdVisConfigs = exports.defaultCoverage = exports.defaultElevation = exports.hexIdAccessor = exports.hexIdRequiredColumns = exports.HEXAGON_ID_FIELDS = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _layers = require("@deck.gl/layers");

var _geoLayers = require("@deck.gl/geo-layers");

var _enhancedColumnLayer = _interopRequireDefault(require("../../deckgl-layers/column-layer/enhanced-column-layer"));

var _h3Utils = require("./h3-utils");

var _h3HexagonLayerIcon = _interopRequireDefault(require("./h3-hexagon-layer-icon"));

var _defaultSettings = require("../../constants/default-settings");

var _colorUtils = require("../../utils/color-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULT_LINE_SCALE_VALUE = 8;
var HEXAGON_ID_FIELDS = {
  hex_id: ['hex_id', 'hexagon_id', 'h3_id']
};
exports.HEXAGON_ID_FIELDS = HEXAGON_ID_FIELDS;
var hexIdRequiredColumns = ['hex_id'];
exports.hexIdRequiredColumns = hexIdRequiredColumns;

var hexIdAccessor = function hexIdAccessor(_ref) {
  var hex_id = _ref.hex_id;
  return function (d) {
    return d.data[hex_id.fieldIdx];
  };
};

exports.hexIdAccessor = hexIdAccessor;
var defaultElevation = 500;
exports.defaultElevation = defaultElevation;
var defaultCoverage = 1;
exports.defaultCoverage = defaultCoverage;
var HexagonIdVisConfigs = {
  opacity: 'opacity',
  colorRange: 'colorRange',
  coverage: 'coverage',
  enable3d: 'enable3d',
  sizeRange: 'elevationRange',
  coverageRange: 'coverageRange',
  elevationScale: 'elevationScale'
};
exports.HexagonIdVisConfigs = HexagonIdVisConfigs;

var HexagonIdLayer =
/*#__PURE__*/
function (_Layer) {
  (0, _inherits2["default"])(HexagonIdLayer, _Layer);

  function HexagonIdLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HexagonIdLayer);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(HexagonIdLayer).call(this, props));

    _this.registerVisConfig(HexagonIdVisConfigs);

    _this.getPositionAccessor = function () {
      return hexIdAccessor(_this.config.columns);
    };

    return _this;
  }

  (0, _createClass2["default"])(HexagonIdLayer, [{
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(HexagonIdLayer.prototype), "getDefaultLayerConfig", this).call(this, props), {
        // add height visual channel
        coverageField: null,
        coverageDomain: [0, 1],
        coverageScale: 'linear'
      });
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref2, getHexId) {
      var allData = _ref2.allData,
          filteredIndex = _ref2.filteredIndex;
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        var index = filteredIndex[i];
        var id = getHexId({
          data: allData[index]
        });
        var centroid = this.dataToFeature.centroids[index];

        if (centroid) {
          data.push({
            // keep a reference to the original data index
            index: index,
            data: allData[index],
            id: id,
            centroid: centroid
          });
        }
      }

      return data;
    } // TODO: fix complexity

    /* eslint-disable complexity */

  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var _this2 = this;

      var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _this$config = this.config,
          colorScale = _this$config.colorScale,
          colorDomain = _this$config.colorDomain,
          colorField = _this$config.colorField,
          color = _this$config.color,
          sizeField = _this$config.sizeField,
          sizeScale = _this$config.sizeScale,
          sizeDomain = _this$config.sizeDomain,
          coverageField = _this$config.coverageField,
          coverageScale = _this$config.coverageScale,
          coverageDomain = _this$config.coverageDomain,
          _this$config$visConfi = _this$config.visConfig,
          sizeRange = _this$config$visConfi.sizeRange,
          colorRange = _this$config$visConfi.colorRange,
          coverageRange = _this$config$visConfi.coverageRange,
          enable3d = _this$config$visConfi.enable3d;
      var gpuFilter = datasets[this.config.dataId].gpuFilter;
      var getHexId = this.getPositionAccessor();

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data; // color


      var cScale = colorField && this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(function (c) {
        return (0, _colorUtils.hexToRgb)(c);
      })); // height

      var sScale = sizeField && enable3d && this.getVisChannelScale(sizeScale, sizeDomain, sizeRange, 0); // coverage

      var coScale = coverageField && this.getVisChannelScale(coverageScale, coverageDomain, coverageRange, 0);
      var getElevation = sScale ? function (d) {
        return _this2.getEncodedChannelValue(sScale, d.data, sizeField, 0);
      } : defaultElevation;
      var getFillColor = cScale ? function (d) {
        return _this2.getEncodedChannelValue(cScale, d.data, colorField);
      } : color;
      var getCoverage = coScale ? function (d) {
        return _this2.getEncodedChannelValue(coScale, d.data, coverageField, 0);
      } : defaultCoverage;
      return {
        data: data,
        getElevation: getElevation,
        getFillColor: getFillColor,
        getHexId: getHexId,
        getCoverage: getCoverage,
        getFilterValue: gpuFilter.filterValueAccessor()
      };
    }
    /* eslint-enable complexity */

  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData, getHexId) {
      var centroids = allData.map(function (d, index) {
        var id = getHexId({
          data: d
        });

        if (!(0, _h3Utils.h3IsValid)(id)) {
          return null;
        } // save a reference of centroids to dataToFeature
        // so we don't have to re calculate it again


        return (0, _h3Utils.getCentroid)({
          id: id
        });
      });
      var bounds = this.getPointsBounds(centroids);
      this.dataToFeature = {
        centroids: centroids
      };
      this.updateMeta({
        bounds: bounds
      });
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState;
      var zoomFactor = this.getZoomFactor(mapState);
      var eleZoomFactor = this.getElevationZoomFactor(mapState);
      var config = this.config;
      var visConfig = config.visConfig;
      var h3HexagonLayerTriggers = {
        getFillColor: {
          color: config.color,
          colorField: config.colorField,
          colorRange: visConfig.colorRange,
          colorScale: config.colorScale
        },
        getElevation: {
          sizeField: config.sizeField,
          sizeRange: visConfig.sizeRange,
          sizeScale: config.sizeScale,
          enable3d: visConfig.enable3d
        },
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      };
      var columnLayerTriggers = {
        getCoverage: {
          coverageField: config.coverageField,
          coverageRange: visConfig.coverageRange
        }
      };
      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      return [new _geoLayers.H3HexagonLayer(_objectSpread({}, defaultLayerProps, {}, data, {
        wrapLongitude: false,
        getHexagon: function getHexagon(x) {
          return x.id;
        },
        // coverage
        coverage: config.coverageField ? 1 : visConfig.coverage,
        // highlight
        autoHighlight: visConfig.enable3d,
        highlightColor: _defaultSettings.HIGHLIGH_COLOR_3D,
        // elevation
        extruded: visConfig.enable3d,
        elevationScale: visConfig.elevationScale * eleZoomFactor,
        // render
        updateTriggers: h3HexagonLayerTriggers,
        _subLayerProps: {
          'hexagon-cell': {
            type: _enhancedColumnLayer["default"],
            getCoverage: data.getCoverage,
            updateTriggers: columnLayerTriggers
          }
        }
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) && !config.sizeField ? [new _layers.GeoJsonLayer(_objectSpread({}, this.getDefaultHoverLayerProps(), {
        data: [(0, _h3Utils.idToPolygonGeo)(objectHovered)],
        getLineColor: config.highlightColor,
        lineWidthScale: DEFAULT_LINE_SCALE_VALUE * zoomFactor,
        wrapLongitude: false
      }))] : []));
    }
  }, {
    key: "type",
    get: function get() {
      return 'hexagonId';
    }
  }, {
    key: "name",
    get: function get() {
      return 'H3';
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return hexIdRequiredColumns;
    }
  }, {
    key: "layerIcon",
    get: function get() {
      // use hexagon layer icon for now
      return _h3HexagonLayerIcon["default"];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(HexagonIdLayer.prototype), "visualChannels", this), {
        size: _objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(HexagonIdLayer.prototype), "visualChannels", this).size, {
          property: 'height'
        }),
        coverage: {
          property: 'coverage',
          field: 'coverageField',
          scale: 'coverageScale',
          domain: 'coverageDomain',
          range: 'coverageRange',
          key: 'coverage',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.radius
        }
      });
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref3) {
      var _ref3$fields = _ref3.fields,
          fields = _ref3$fields === void 0 ? [] : _ref3$fields,
          _ref3$allData = _ref3.allData,
          allData = _ref3$allData === void 0 ? [] : _ref3$allData;
      var foundColumns = this.findDefaultColumnField(HEXAGON_ID_FIELDS, fields);
      var hexFields = (0, _h3Utils.getHexFields)(fields, allData);

      if ((!foundColumns || !foundColumns.length) && !hexFields.length) {
        return {
          props: []
        };
      }

      return {
        props: (foundColumns || []).map(function (columns) {
          return {
            isVisible: true,
            label: 'H3 Hexagon',
            columns: columns
          };
        }).concat((hexFields || []).map(function (f) {
          return {
            isVisible: true,
            label: f.name,
            columns: {
              hex_id: {
                value: f.name,
                fieldIdx: fields.findIndex(function (fid) {
                  return fid.name === f.name;
                })
              }
            }
          };
        }))
      };
    }
  }]);
  return HexagonIdLayer;
}(_baseLayer["default"]);

exports["default"] = HexagonIdLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaDMtaGV4YWdvbi1sYXllci9oMy1oZXhhZ29uLWxheWVyLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfTElORV9TQ0FMRV9WQUxVRSIsIkhFWEFHT05fSURfRklFTERTIiwiaGV4X2lkIiwiaGV4SWRSZXF1aXJlZENvbHVtbnMiLCJoZXhJZEFjY2Vzc29yIiwiZCIsImRhdGEiLCJmaWVsZElkeCIsImRlZmF1bHRFbGV2YXRpb24iLCJkZWZhdWx0Q292ZXJhZ2UiLCJIZXhhZ29uSWRWaXNDb25maWdzIiwib3BhY2l0eSIsImNvbG9yUmFuZ2UiLCJjb3ZlcmFnZSIsImVuYWJsZTNkIiwic2l6ZVJhbmdlIiwiY292ZXJhZ2VSYW5nZSIsImVsZXZhdGlvblNjYWxlIiwiSGV4YWdvbklkTGF5ZXIiLCJwcm9wcyIsInJlZ2lzdGVyVmlzQ29uZmlnIiwiZ2V0UG9zaXRpb25BY2Nlc3NvciIsImNvbmZpZyIsImNvbHVtbnMiLCJjb3ZlcmFnZUZpZWxkIiwiY292ZXJhZ2VEb21haW4iLCJjb3ZlcmFnZVNjYWxlIiwiZ2V0SGV4SWQiLCJhbGxEYXRhIiwiZmlsdGVyZWRJbmRleCIsImkiLCJsZW5ndGgiLCJpbmRleCIsImlkIiwiY2VudHJvaWQiLCJkYXRhVG9GZWF0dXJlIiwiY2VudHJvaWRzIiwicHVzaCIsImRhdGFzZXRzIiwib2xkTGF5ZXJEYXRhIiwib3B0IiwiY29sb3JTY2FsZSIsImNvbG9yRG9tYWluIiwiY29sb3JGaWVsZCIsImNvbG9yIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwic2l6ZURvbWFpbiIsInZpc0NvbmZpZyIsImdwdUZpbHRlciIsImRhdGFJZCIsInVwZGF0ZURhdGEiLCJjU2NhbGUiLCJnZXRWaXNDaGFubmVsU2NhbGUiLCJjb2xvcnMiLCJtYXAiLCJjIiwic1NjYWxlIiwiY29TY2FsZSIsImdldEVsZXZhdGlvbiIsImdldEVuY29kZWRDaGFubmVsVmFsdWUiLCJnZXRGaWxsQ29sb3IiLCJnZXRDb3ZlcmFnZSIsImdldEZpbHRlclZhbHVlIiwiZmlsdGVyVmFsdWVBY2Nlc3NvciIsImJvdW5kcyIsImdldFBvaW50c0JvdW5kcyIsInVwZGF0ZU1ldGEiLCJvcHRzIiwib2JqZWN0SG92ZXJlZCIsIm1hcFN0YXRlIiwiem9vbUZhY3RvciIsImdldFpvb21GYWN0b3IiLCJlbGVab29tRmFjdG9yIiwiZ2V0RWxldmF0aW9uWm9vbUZhY3RvciIsImgzSGV4YWdvbkxheWVyVHJpZ2dlcnMiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiY29sdW1uTGF5ZXJUcmlnZ2VycyIsImRlZmF1bHRMYXllclByb3BzIiwiZ2V0RGVmYXVsdERlY2tMYXllclByb3BzIiwiSDNIZXhhZ29uTGF5ZXIiLCJ3cmFwTG9uZ2l0dWRlIiwiZ2V0SGV4YWdvbiIsIngiLCJhdXRvSGlnaGxpZ2h0IiwiaGlnaGxpZ2h0Q29sb3IiLCJISUdITElHSF9DT0xPUl8zRCIsImV4dHJ1ZGVkIiwidXBkYXRlVHJpZ2dlcnMiLCJfc3ViTGF5ZXJQcm9wcyIsInR5cGUiLCJFbmhhbmNlZENvbHVtbkxheWVyIiwiaXNMYXllckhvdmVyZWQiLCJHZW9Kc29uTGF5ZXIiLCJnZXREZWZhdWx0SG92ZXJMYXllclByb3BzIiwiZ2V0TGluZUNvbG9yIiwibGluZVdpZHRoU2NhbGUiLCJIM0hleGFnb25MYXllckljb24iLCJzaXplIiwicHJvcGVydHkiLCJmaWVsZCIsInNjYWxlIiwiZG9tYWluIiwicmFuZ2UiLCJrZXkiLCJjaGFubmVsU2NhbGVUeXBlIiwiQ0hBTk5FTF9TQ0FMRVMiLCJyYWRpdXMiLCJmaWVsZHMiLCJmb3VuZENvbHVtbnMiLCJmaW5kRGVmYXVsdENvbHVtbkZpZWxkIiwiaGV4RmllbGRzIiwiaXNWaXNpYmxlIiwibGFiZWwiLCJjb25jYXQiLCJmIiwibmFtZSIsInZhbHVlIiwiZmluZEluZGV4IiwiZmlkIiwiTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FB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QUssRUFBRUYsQ0FBQyxDQUFDQyxJQURIO0FBRU43RyxnQkFBQUEsUUFBUSxFQUFFcUcsTUFBTSxDQUFDVSxTQUFQLENBQWlCLFVBQUFDLEdBQUc7QUFBQSx5QkFBSUEsR0FBRyxDQUFDSCxJQUFKLEtBQWFELENBQUMsQ0FBQ0MsSUFBbkI7QUFBQSxpQkFBcEI7QUFGSjtBQUREO0FBSGlCLFdBQUw7QUFBQSxTQUF2QixDQVBHO0FBREYsT0FBUDtBQW9CRDs7O0VBdEV5Q0kscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi4vYmFzZS1sYXllcic7XG5pbXBvcnQge0dlb0pzb25MYXllcn0gZnJvbSAnQGRlY2suZ2wvbGF5ZXJzJztcbmltcG9ydCB7SDNIZXhhZ29uTGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2dlby1sYXllcnMnO1xuaW1wb3J0IEVuaGFuY2VkQ29sdW1uTGF5ZXIgZnJvbSAnZGVja2dsLWxheWVycy9jb2x1bW4tbGF5ZXIvZW5oYW5jZWQtY29sdW1uLWxheWVyJztcbmltcG9ydCB7Z2V0Q2VudHJvaWQsIGlkVG9Qb2x5Z29uR2VvLCBoM0lzVmFsaWQsIGdldEhleEZpZWxkc30gZnJvbSAnLi9oMy11dGlscyc7XG5pbXBvcnQgSDNIZXhhZ29uTGF5ZXJJY29uIGZyb20gJy4vaDMtaGV4YWdvbi1sYXllci1pY29uJztcbmltcG9ydCB7Q0hBTk5FTF9TQ0FMRVMsIEhJR0hMSUdIX0NPTE9SXzNEfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge2hleFRvUmdifSBmcm9tICd1dGlscy9jb2xvci11dGlscyc7XG5cbmNvbnN0IERFRkFVTFRfTElORV9TQ0FMRV9WQUxVRSA9IDg7XG5cbmV4cG9ydCBjb25zdCBIRVhBR09OX0lEX0ZJRUxEUyA9IHtcbiAgaGV4X2lkOiBbJ2hleF9pZCcsICdoZXhhZ29uX2lkJywgJ2gzX2lkJ11cbn07XG5cbmV4cG9ydCBjb25zdCBoZXhJZFJlcXVpcmVkQ29sdW1ucyA9IFsnaGV4X2lkJ107XG5leHBvcnQgY29uc3QgaGV4SWRBY2Nlc3NvciA9ICh7aGV4X2lkfSkgPT4gZCA9PiBkLmRhdGFbaGV4X2lkLmZpZWxkSWR4XTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0RWxldmF0aW9uID0gNTAwO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb3ZlcmFnZSA9IDE7XG5cbmV4cG9ydCBjb25zdCBIZXhhZ29uSWRWaXNDb25maWdzID0ge1xuICBvcGFjaXR5OiAnb3BhY2l0eScsXG4gIGNvbG9yUmFuZ2U6ICdjb2xvclJhbmdlJyxcbiAgY292ZXJhZ2U6ICdjb3ZlcmFnZScsXG4gIGVuYWJsZTNkOiAnZW5hYmxlM2QnLFxuICBzaXplUmFuZ2U6ICdlbGV2YXRpb25SYW5nZScsXG4gIGNvdmVyYWdlUmFuZ2U6ICdjb3ZlcmFnZVJhbmdlJyxcbiAgZWxldmF0aW9uU2NhbGU6ICdlbGV2YXRpb25TY2FsZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhleGFnb25JZExheWVyIGV4dGVuZHMgTGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKEhleGFnb25JZFZpc0NvbmZpZ3MpO1xuICAgIHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvciA9ICgpID0+IGhleElkQWNjZXNzb3IodGhpcy5jb25maWcuY29sdW1ucyk7XG4gIH1cblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2hleGFnb25JZCc7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gJ0gzJztcbiAgfVxuXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gaGV4SWRSZXF1aXJlZENvbHVtbnM7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIC8vIHVzZSBoZXhhZ29uIGxheWVyIGljb24gZm9yIG5vd1xuICAgIHJldHVybiBIM0hleGFnb25MYXllckljb247XG4gIH1cblxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLFxuICAgICAgc2l6ZToge1xuICAgICAgICAuLi5zdXBlci52aXN1YWxDaGFubmVscy5zaXplLFxuICAgICAgICBwcm9wZXJ0eTogJ2hlaWdodCdcbiAgICAgIH0sXG4gICAgICBjb3ZlcmFnZToge1xuICAgICAgICBwcm9wZXJ0eTogJ2NvdmVyYWdlJyxcbiAgICAgICAgZmllbGQ6ICdjb3ZlcmFnZUZpZWxkJyxcbiAgICAgICAgc2NhbGU6ICdjb3ZlcmFnZVNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnY292ZXJhZ2VEb21haW4nLFxuICAgICAgICByYW5nZTogJ2NvdmVyYWdlUmFuZ2UnLFxuICAgICAgICBrZXk6ICdjb3ZlcmFnZScsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLnJhZGl1c1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZmluZERlZmF1bHRMYXllclByb3BzKHtmaWVsZHMgPSBbXSwgYWxsRGF0YSA9IFtdfSkge1xuICAgIGNvbnN0IGZvdW5kQ29sdW1ucyA9IHRoaXMuZmluZERlZmF1bHRDb2x1bW5GaWVsZChIRVhBR09OX0lEX0ZJRUxEUywgZmllbGRzKTtcbiAgICBjb25zdCBoZXhGaWVsZHMgPSBnZXRIZXhGaWVsZHMoZmllbGRzLCBhbGxEYXRhKTtcbiAgICBpZiAoKCFmb3VuZENvbHVtbnMgfHwgIWZvdW5kQ29sdW1ucy5sZW5ndGgpICYmICFoZXhGaWVsZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge3Byb3BzOiBbXX07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiAoZm91bmRDb2x1bW5zIHx8IFtdKVxuICAgICAgICAubWFwKGNvbHVtbnMgPT4gKHtcbiAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICAgICAgbGFiZWw6ICdIMyBIZXhhZ29uJyxcbiAgICAgICAgICBjb2x1bW5zXG4gICAgICAgIH0pKVxuICAgICAgICAuY29uY2F0KFxuICAgICAgICAgIChoZXhGaWVsZHMgfHwgW10pLm1hcChmID0+ICh7XG4gICAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICAgICAgICBsYWJlbDogZi5uYW1lLFxuICAgICAgICAgICAgY29sdW1uczoge1xuICAgICAgICAgICAgICBoZXhfaWQ6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZi5uYW1lLFxuICAgICAgICAgICAgICAgIGZpZWxkSWR4OiBmaWVsZHMuZmluZEluZGV4KGZpZCA9PiBmaWQubmFtZSA9PT0gZi5uYW1lKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpXG4gICAgICAgIClcbiAgICB9O1xuICB9XG5cbiAgZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzID0ge30pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzKSxcblxuICAgICAgLy8gYWRkIGhlaWdodCB2aXN1YWwgY2hhbm5lbFxuICAgICAgY292ZXJhZ2VGaWVsZDogbnVsbCxcbiAgICAgIGNvdmVyYWdlRG9tYWluOiBbMCwgMV0sXG4gICAgICBjb3ZlcmFnZVNjYWxlOiAnbGluZWFyJ1xuICAgIH07XG4gIH1cblxuICBjYWxjdWxhdGVEYXRhQXR0cmlidXRlKHthbGxEYXRhLCBmaWx0ZXJlZEluZGV4fSwgZ2V0SGV4SWQpIHtcbiAgICBjb25zdCBkYXRhID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkSW5kZXgubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZmlsdGVyZWRJbmRleFtpXTtcbiAgICAgIGNvbnN0IGlkID0gZ2V0SGV4SWQoe2RhdGE6IGFsbERhdGFbaW5kZXhdfSk7XG4gICAgICBjb25zdCBjZW50cm9pZCA9IHRoaXMuZGF0YVRvRmVhdHVyZS5jZW50cm9pZHNbaW5kZXhdO1xuXG4gICAgICBpZiAoY2VudHJvaWQpIHtcbiAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICAvLyBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBkYXRhIGluZGV4XG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgZGF0YTogYWxsRGF0YVtpbmRleF0sXG4gICAgICAgICAgaWQsXG4gICAgICAgICAgY2VudHJvaWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLy8gVE9ETzogZml4IGNvbXBsZXhpdHlcbiAgLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuICBmb3JtYXRMYXllckRhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSwgb3B0ID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2xvclNjYWxlLFxuICAgICAgY29sb3JEb21haW4sXG4gICAgICBjb2xvckZpZWxkLFxuICAgICAgY29sb3IsXG4gICAgICBzaXplRmllbGQsXG4gICAgICBzaXplU2NhbGUsXG4gICAgICBzaXplRG9tYWluLFxuICAgICAgY292ZXJhZ2VGaWVsZCxcbiAgICAgIGNvdmVyYWdlU2NhbGUsXG4gICAgICBjb3ZlcmFnZURvbWFpbixcbiAgICAgIHZpc0NvbmZpZzoge3NpemVSYW5nZSwgY29sb3JSYW5nZSwgY292ZXJhZ2VSYW5nZSwgZW5hYmxlM2R9XG4gICAgfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgY29uc3Qge2dwdUZpbHRlcn0gPSBkYXRhc2V0c1t0aGlzLmNvbmZpZy5kYXRhSWRdO1xuICAgIGNvbnN0IGdldEhleElkID0gdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yKCk7XG4gICAgY29uc3Qge2RhdGF9ID0gdGhpcy51cGRhdGVEYXRhKGRhdGFzZXRzLCBvbGRMYXllckRhdGEpO1xuICAgIC8vIGNvbG9yXG4gICAgY29uc3QgY1NjYWxlID1cbiAgICAgIGNvbG9yRmllbGQgJiZcbiAgICAgIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKFxuICAgICAgICBjb2xvclNjYWxlLFxuICAgICAgICBjb2xvckRvbWFpbixcbiAgICAgICAgY29sb3JSYW5nZS5jb2xvcnMubWFwKGMgPT4gaGV4VG9SZ2IoYykpXG4gICAgICApO1xuXG4gICAgLy8gaGVpZ2h0XG4gICAgY29uc3Qgc1NjYWxlID1cbiAgICAgIHNpemVGaWVsZCAmJiBlbmFibGUzZCAmJiB0aGlzLmdldFZpc0NoYW5uZWxTY2FsZShzaXplU2NhbGUsIHNpemVEb21haW4sIHNpemVSYW5nZSwgMCk7XG5cbiAgICAvLyBjb3ZlcmFnZVxuICAgIGNvbnN0IGNvU2NhbGUgPVxuICAgICAgY292ZXJhZ2VGaWVsZCAmJiB0aGlzLmdldFZpc0NoYW5uZWxTY2FsZShjb3ZlcmFnZVNjYWxlLCBjb3ZlcmFnZURvbWFpbiwgY292ZXJhZ2VSYW5nZSwgMCk7XG5cbiAgICBjb25zdCBnZXRFbGV2YXRpb24gPSBzU2NhbGVcbiAgICAgID8gZCA9PiB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoc1NjYWxlLCBkLmRhdGEsIHNpemVGaWVsZCwgMClcbiAgICAgIDogZGVmYXVsdEVsZXZhdGlvbjtcblxuICAgIGNvbnN0IGdldEZpbGxDb2xvciA9IGNTY2FsZVxuICAgICAgPyBkID0+IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShjU2NhbGUsIGQuZGF0YSwgY29sb3JGaWVsZClcbiAgICAgIDogY29sb3I7XG5cbiAgICBjb25zdCBnZXRDb3ZlcmFnZSA9IGNvU2NhbGVcbiAgICAgID8gZCA9PiB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoY29TY2FsZSwgZC5kYXRhLCBjb3ZlcmFnZUZpZWxkLCAwKVxuICAgICAgOiBkZWZhdWx0Q292ZXJhZ2U7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YSxcbiAgICAgIGdldEVsZXZhdGlvbixcbiAgICAgIGdldEZpbGxDb2xvcixcbiAgICAgIGdldEhleElkLFxuICAgICAgZ2V0Q292ZXJhZ2UsXG4gICAgICBnZXRGaWx0ZXJWYWx1ZTogZ3B1RmlsdGVyLmZpbHRlclZhbHVlQWNjZXNzb3IoKVxuICAgIH07XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXG5cbiAgdXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEsIGdldEhleElkKSB7XG4gICAgY29uc3QgY2VudHJvaWRzID0gYWxsRGF0YS5tYXAoKGQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGdldEhleElkKHtkYXRhOiBkfSk7XG4gICAgICBpZiAoIWgzSXNWYWxpZChpZCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvLyBzYXZlIGEgcmVmZXJlbmNlIG9mIGNlbnRyb2lkcyB0byBkYXRhVG9GZWF0dXJlXG4gICAgICAvLyBzbyB3ZSBkb24ndCBoYXZlIHRvIHJlIGNhbGN1bGF0ZSBpdCBhZ2FpblxuICAgICAgcmV0dXJuIGdldENlbnRyb2lkKHtpZH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYm91bmRzID0gdGhpcy5nZXRQb2ludHNCb3VuZHMoY2VudHJvaWRzKTtcbiAgICB0aGlzLmRhdGFUb0ZlYXR1cmUgPSB7Y2VudHJvaWRzfTtcbiAgICB0aGlzLnVwZGF0ZU1ldGEoe2JvdW5kc30pO1xuICB9XG5cbiAgcmVuZGVyTGF5ZXIob3B0cykge1xuICAgIGNvbnN0IHtkYXRhLCBncHVGaWx0ZXIsIG9iamVjdEhvdmVyZWQsIG1hcFN0YXRlfSA9IG9wdHM7XG5cbiAgICBjb25zdCB6b29tRmFjdG9yID0gdGhpcy5nZXRab29tRmFjdG9yKG1hcFN0YXRlKTtcbiAgICBjb25zdCBlbGVab29tRmFjdG9yID0gdGhpcy5nZXRFbGV2YXRpb25ab29tRmFjdG9yKG1hcFN0YXRlKTtcbiAgICBjb25zdCB7Y29uZmlnfSA9IHRoaXM7XG4gICAgY29uc3Qge3Zpc0NvbmZpZ30gPSBjb25maWc7XG5cbiAgICBjb25zdCBoM0hleGFnb25MYXllclRyaWdnZXJzID0ge1xuICAgICAgZ2V0RmlsbENvbG9yOiB7XG4gICAgICAgIGNvbG9yOiBjb25maWcuY29sb3IsXG4gICAgICAgIGNvbG9yRmllbGQ6IGNvbmZpZy5jb2xvckZpZWxkLFxuICAgICAgICBjb2xvclJhbmdlOiB2aXNDb25maWcuY29sb3JSYW5nZSxcbiAgICAgICAgY29sb3JTY2FsZTogY29uZmlnLmNvbG9yU2NhbGVcbiAgICAgIH0sXG4gICAgICBnZXRFbGV2YXRpb246IHtcbiAgICAgICAgc2l6ZUZpZWxkOiBjb25maWcuc2l6ZUZpZWxkLFxuICAgICAgICBzaXplUmFuZ2U6IHZpc0NvbmZpZy5zaXplUmFuZ2UsXG4gICAgICAgIHNpemVTY2FsZTogY29uZmlnLnNpemVTY2FsZSxcbiAgICAgICAgZW5hYmxlM2Q6IHZpc0NvbmZpZy5lbmFibGUzZFxuICAgICAgfSxcbiAgICAgIGdldEZpbHRlclZhbHVlOiBncHVGaWx0ZXIuZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2Vyc1xuICAgIH07XG5cbiAgICBjb25zdCBjb2x1bW5MYXllclRyaWdnZXJzID0ge1xuICAgICAgZ2V0Q292ZXJhZ2U6IHtcbiAgICAgICAgY292ZXJhZ2VGaWVsZDogY29uZmlnLmNvdmVyYWdlRmllbGQsXG4gICAgICAgIGNvdmVyYWdlUmFuZ2U6IHZpc0NvbmZpZy5jb3ZlcmFnZVJhbmdlXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGRlZmF1bHRMYXllclByb3BzID0gdGhpcy5nZXREZWZhdWx0RGVja0xheWVyUHJvcHMob3B0cyk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IEgzSGV4YWdvbkxheWVyKHtcbiAgICAgICAgLi4uZGVmYXVsdExheWVyUHJvcHMsXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlLFxuXG4gICAgICAgIGdldEhleGFnb246IHggPT4geC5pZCxcblxuICAgICAgICAvLyBjb3ZlcmFnZVxuICAgICAgICBjb3ZlcmFnZTogY29uZmlnLmNvdmVyYWdlRmllbGQgPyAxIDogdmlzQ29uZmlnLmNvdmVyYWdlLFxuXG4gICAgICAgIC8vIGhpZ2hsaWdodFxuICAgICAgICBhdXRvSGlnaGxpZ2h0OiB2aXNDb25maWcuZW5hYmxlM2QsXG4gICAgICAgIGhpZ2hsaWdodENvbG9yOiBISUdITElHSF9DT0xPUl8zRCxcblxuICAgICAgICAvLyBlbGV2YXRpb25cbiAgICAgICAgZXh0cnVkZWQ6IHZpc0NvbmZpZy5lbmFibGUzZCxcbiAgICAgICAgZWxldmF0aW9uU2NhbGU6IHZpc0NvbmZpZy5lbGV2YXRpb25TY2FsZSAqIGVsZVpvb21GYWN0b3IsXG5cbiAgICAgICAgLy8gcmVuZGVyXG4gICAgICAgIHVwZGF0ZVRyaWdnZXJzOiBoM0hleGFnb25MYXllclRyaWdnZXJzLFxuICAgICAgICBfc3ViTGF5ZXJQcm9wczoge1xuICAgICAgICAgICdoZXhhZ29uLWNlbGwnOiB7XG4gICAgICAgICAgICB0eXBlOiBFbmhhbmNlZENvbHVtbkxheWVyLFxuICAgICAgICAgICAgZ2V0Q292ZXJhZ2U6IGRhdGEuZ2V0Q292ZXJhZ2UsXG4gICAgICAgICAgICB1cGRhdGVUcmlnZ2VyczogY29sdW1uTGF5ZXJUcmlnZ2Vyc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICAuLi4odGhpcy5pc0xheWVySG92ZXJlZChvYmplY3RIb3ZlcmVkKSAmJiAhY29uZmlnLnNpemVGaWVsZFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIG5ldyBHZW9Kc29uTGF5ZXIoe1xuICAgICAgICAgICAgICAuLi50aGlzLmdldERlZmF1bHRIb3ZlckxheWVyUHJvcHMoKSxcbiAgICAgICAgICAgICAgZGF0YTogW2lkVG9Qb2x5Z29uR2VvKG9iamVjdEhvdmVyZWQpXSxcbiAgICAgICAgICAgICAgZ2V0TGluZUNvbG9yOiBjb25maWcuaGlnaGxpZ2h0Q29sb3IsXG4gICAgICAgICAgICAgIGxpbmVXaWR0aFNjYWxlOiBERUZBVUxUX0xJTkVfU0NBTEVfVkFMVUUgKiB6b29tRmFjdG9yLFxuICAgICAgICAgICAgICB3cmFwTG9uZ2l0dWRlOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIDogW10pXG4gICAgXTtcbiAgfVxufVxuIl19