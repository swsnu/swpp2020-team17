"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapContainerFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMapGl = _interopRequireDefault(require("react-map-gl"));

var _react2 = _interopRequireDefault(require("@deck.gl/react"));

var _reselect = require("reselect");

var _viewportMercatorProject = _interopRequireDefault(require("viewport-mercator-project"));

var _mapPopover = _interopRequireDefault(require("./map/map-popover"));

var _mapControl = _interopRequireDefault(require("./map/map-control"));

var _styledComponents = require("./common/styled-components");

var _editor = _interopRequireDefault(require("./editor/editor"));

var _mapboxUtils = require("../layers/mapbox-utils");

var _baseLayer = require("../layers/base-layer");

var _glUtils = require("../utils/gl-utils");

var _mapboxUtils2 = require("../utils/map-style-utils/mapbox-utils");

var _layerUtils = require("../utils/layer-utils");

var _dBuildingLayer = _interopRequireDefault(require("../deckgl-layers/3d-building-layer/3d-building-layer"));

var _defaultSettings = require("../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MAP_STYLE = {
  container: {
    display: 'inline-block',
    position: 'relative'
  },
  top: {
    position: 'absolute',
    top: '0px',
    pointerEvents: 'none'
  }
};
var MAPBOXGL_STYLE_UPDATE = 'style.load';
var MAPBOXGL_RENDER = 'render';
var TRANSITION_DURATION = 0;

var Attribution = function Attribution() {
  return _react["default"].createElement(_styledComponents.StyledAttrbution, null, _react["default"].createElement("div", {
    className: "attrition-logo"
  }, "Basemap by:", _react["default"].createElement("a", {
    className: "mapboxgl-ctrl-logo",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.mapbox.com/",
    "aria-label": "Mapbox logo"
  })), _react["default"].createElement("div", null, _react["default"].createElement("a", {
    href: "https://kepler.gl/policy/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\xA9 kepler.gl |", ' '), _react["default"].createElement("a", {
    href: "https://www.mapbox.com/about/maps/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\xA9 Mapbox |", ' '), _react["default"].createElement("a", {
    href: "http://www.openstreetmap.org/copyright",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\xA9 OpenStreetMap |", ' '), _react["default"].createElement("a", {
    href: "https://www.mapbox.com/map-feedback/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, _react["default"].createElement("strong", null, "Improve this map"))));
};

MapContainerFactory.deps = [_mapPopover["default"], _mapControl["default"], _editor["default"]];

function MapContainerFactory(MapPopover, MapControl, Editor) {
  var MapContainer =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(MapContainer, _Component);

    function MapContainer(_props) {
      var _this;

      (0, _classCallCheck2["default"])(this, MapContainer);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MapContainer).call(this, _props));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersSelector", function (props) {
        return props.layers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerDataSelector", function (props) {
        return props.layerData;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapLayersSelector", function (props) {
        return props.mapLayers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerOrderSelector", function (props) {
        return props.layerOrder;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersToRenderSelector", (0, _reselect.createSelector)(_this.layersSelector, _this.layerDataSelector, _this.mapLayersSelector, // {[id]: true \ false}
      function (layers, layerData, mapLayers) {
        return layers.reduce(function (accu, layer, idx) {
          return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, layer.id, layer.id !== _defaultSettings.GEOCODER_LAYER_ID && layer.shouldRenderLayer(layerData[idx]) && _this._isVisibleMapLayer(layer, mapLayers)));
        }, {});
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filtersSelector", function (props) {
        return props.filters;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "polygonFilters", (0, _reselect.createSelector)(_this.filtersSelector, function (filters) {
        return filters.filter(function (f) {
          return f.type === _defaultSettings.FILTER_TYPES.polygon;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapboxLayersSelector", (0, _reselect.createSelector)(_this.layersSelector, _this.layerDataSelector, _this.layerOrderSelector, _this.layersToRenderSelector, _mapboxUtils.generateMapboxLayers));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onCloseMapPopover", function () {
        _this.props.visStateActions.onLayerClick(null);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onLayerSetDomain", function (idx, colorDomain) {
        _this.props.visStateActions.layerConfigChange(_this.props.layers[idx], {
          colorDomain: colorDomain
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleMapToggleLayer", function (layerId) {
        var _this$props = _this.props,
            _this$props$index = _this$props.index,
            mapIndex = _this$props$index === void 0 ? 0 : _this$props$index,
            visStateActions = _this$props.visStateActions;
        visStateActions.toggleLayerForMap(mapIndex, layerId);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onMapboxStyleUpdate", function () {
        // force refresh mapboxgl layers
        _this.previousLayers = {};

        _this._updateMapboxLayers();

        if (typeof _this.props.onMapStyleLoaded === 'function') {
          _this.props.onMapStyleLoaded(_this._map);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setMapboxMap", function (mapbox) {
        if (!_this._map && mapbox) {
          _this._map = mapbox.getMap(); // i noticed in certain context we don't access the actual map element

          if (!_this._map) {
            return;
          } // bind mapboxgl event listener


          _this._map.on(MAPBOXGL_STYLE_UPDATE, _this._onMapboxStyleUpdate);

          _this._map.on(MAPBOXGL_RENDER, function () {
            if (typeof _this.props.onMapRender === 'function') {
              _this.props.onMapRender(_this._map);
            }
          });
        }

        if (_this.props.getMapboxRef) {
          // The parent component can gain access to our MapboxGlMap by
          // providing this callback. Note that 'mapbox' will be null when the
          // ref is unset (e.g. when a split map is closed).
          _this.props.getMapboxRef(mapbox, _this.props.index);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBeforeRender", function (_ref) {
        var gl = _ref.gl;
        (0, _glUtils.setLayerBlending)(gl, _this.props.layerBlending);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderLayer", function (overlays, idx) {
        var _this$props2 = _this.props,
            datasets = _this$props2.datasets,
            layers = _this$props2.layers,
            layerData = _this$props2.layerData,
            hoverInfo = _this$props2.hoverInfo,
            clicked = _this$props2.clicked,
            mapState = _this$props2.mapState,
            interactionConfig = _this$props2.interactionConfig,
            animationConfig = _this$props2.animationConfig;
        var layer = layers[idx];
        var data = layerData[idx];

        var _ref2 = datasets[layer.config.dataId] || {},
            gpuFilter = _ref2.gpuFilter;

        var objectHovered = clicked || hoverInfo;
        var layerCallbacks = {
          onSetLayerDomain: function onSetLayerDomain(val) {
            return _this._onLayerSetDomain(idx, val);
          }
        }; // Layer is Layer class

        var layerOverlay = layer.renderLayer({
          data: data,
          gpuFilter: gpuFilter,
          idx: idx,
          interactionConfig: interactionConfig,
          layerCallbacks: layerCallbacks,
          mapState: mapState,
          animationConfig: animationConfig,
          objectHovered: objectHovered
        });
        return overlays.concat(layerOverlay || []);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onViewportChange", function (viewState) {
        if (typeof _this.props.onViewStateChange === 'function') {
          _this.props.onViewStateChange(viewState);
        }

        _this.props.mapStateActions.updateMap(viewState);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleMapControl", function (panelId) {
        var _this$props3 = _this.props,
            index = _this$props3.index,
            uiStateActions = _this$props3.uiStateActions;
        uiStateActions.toggleMapControl(panelId, index);
      });
      _this.previousLayers = {// [layers.id]: mapboxLayerConfig
      };
      _this._deck = null;
      return _this;
    }

    (0, _createClass2["default"])(MapContainer, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // unbind mapboxgl event listener
        if (this._map) {
          this._map.off(MAPBOXGL_STYLE_UPDATE);

          this._map.off(MAPBOXGL_RENDER);
        }
      }
    }, {
      key: "_isVisibleMapLayer",

      /* component private functions */
      value: function _isVisibleMapLayer(layer, mapLayers) {
        // if layer.id is not in mapLayers, don't render it
        return !mapLayers || mapLayers && mapLayers[layer.id];
      }
    }, {
      key: "_onDeckInitialized",
      value: function _onDeckInitialized(gl) {
        if (this.props.onDeckInitialized) {
          this.props.onDeckInitialized(this._deck, gl);
        }
      }
    }, {
      key: "_renderMapPopover",

      /* component render functions */

      /* eslint-disable complexity */
      value: function _renderMapPopover(layersToRender) {
        // TODO: move this into reducer so it can be tested
        var _this$props4 = this.props,
            mapState = _this$props4.mapState,
            hoverInfo = _this$props4.hoverInfo,
            clicked = _this$props4.clicked,
            datasets = _this$props4.datasets,
            interactionConfig = _this$props4.interactionConfig,
            layers = _this$props4.layers,
            _this$props4$mousePos = _this$props4.mousePos,
            mousePosition = _this$props4$mousePos.mousePosition,
            coordinate = _this$props4$mousePos.coordinate,
            pinned = _this$props4$mousePos.pinned;

        if (!mousePosition) {
          return null;
        } // if clicked something, ignore hover behavior


        var layerHoverProp = null;
        var layerPinnedProp = null;
        var position = {
          x: mousePosition[0],
          y: mousePosition[1]
        };
        var pinnedPosition = {};
        layerHoverProp = (0, _layerUtils.getLayerHoverProp)({
          interactionConfig: interactionConfig,
          hoverInfo: hoverInfo,
          layers: layers,
          layersToRender: layersToRender,
          datasets: datasets
        });
        var compareMode = interactionConfig.tooltip.config ? interactionConfig.tooltip.config.compareMode : false;
        var hasTooltip = pinned || clicked;
        var hasComparisonTooltip = compareMode || !clicked && !pinned;

        if (hasTooltip) {
          // project lnglat to screen so that tooltip follows the object on zoom
          var viewport = new _viewportMercatorProject["default"](mapState);
          var lngLat = clicked ? clicked.lngLat : pinned.coordinate;
          pinnedPosition = this._getHoverXY(viewport, lngLat);
          layerPinnedProp = (0, _layerUtils.getLayerHoverProp)({
            interactionConfig: interactionConfig,
            hoverInfo: clicked,
            layers: layers,
            layersToRender: layersToRender,
            datasets: datasets
          });

          if (layerHoverProp) {
            layerHoverProp.primaryData = layerPinnedProp.data;
            layerHoverProp.compareType = interactionConfig.tooltip.config.compareType;
          }
        }

        var commonProp = {
          onClose: this._onCloseMapPopover,
          mapW: mapState.width,
          mapH: mapState.height,
          zoom: mapState.zoom
        };
        return _react["default"].createElement("div", null, hasTooltip && _react["default"].createElement(MapPopover, (0, _extends2["default"])({}, pinnedPosition, commonProp, {
          layerHoverProp: layerPinnedProp,
          coordinate: interactionConfig.coordinate.enabled && (pinned || {}).coordinate,
          frozen: Boolean(hasTooltip),
          isBase: compareMode
        })), hasComparisonTooltip && _react["default"].createElement(MapPopover, (0, _extends2["default"])({}, position, commonProp, {
          layerHoverProp: layerHoverProp,
          coordinate: interactionConfig.coordinate.enabled && coordinate
        })));
      }
      /* eslint-enable complexity */

    }, {
      key: "_getHoverXY",
      value: function _getHoverXY(viewport, lngLat) {
        var screenCoord = !viewport || !lngLat ? null : viewport.project(lngLat);
        return screenCoord && {
          x: screenCoord[0],
          y: screenCoord[1]
        };
      }
    }, {
      key: "_renderDeckOverlay",
      value: function _renderDeckOverlay(layersToRender) {
        var _this2 = this;

        var _this$props5 = this.props,
            mapState = _this$props5.mapState,
            mapStyle = _this$props5.mapStyle,
            layerData = _this$props5.layerData,
            layerOrder = _this$props5.layerOrder,
            layers = _this$props5.layers,
            visStateActions = _this$props5.visStateActions,
            mapboxApiAccessToken = _this$props5.mapboxApiAccessToken,
            mapboxApiUrl = _this$props5.mapboxApiUrl;
        var deckGlLayers = []; // wait until data is ready before render data layers

        if (layerData && layerData.length) {
          // last layer render first
          deckGlLayers = layerOrder.slice().reverse().filter(function (idx) {
            return layers[idx].overlayType === _baseLayer.OVERLAY_TYPE.deckgl && layersToRender[layers[idx].id];
          }).reduce(this._renderLayer, []);
        }

        if (mapStyle.visibleLayerGroups['3d building']) {
          deckGlLayers.push(new _dBuildingLayer["default"]({
            id: '_keplergl_3d-building',
            mapboxApiAccessToken: mapboxApiAccessToken,
            mapboxApiUrl: mapboxApiUrl,
            threeDBuildingColor: mapStyle.threeDBuildingColor,
            updateTriggers: {
              getFillColor: mapStyle.threeDBuildingColor
            }
          }));
        }

        return _react["default"].createElement(_react2["default"], (0, _extends2["default"])({}, this.props.deckGlProps, {
          viewState: mapState,
          id: "default-deckgl-overlay",
          layers: deckGlLayers,
          onBeforeRender: this._onBeforeRender,
          onHover: visStateActions.onLayerHover,
          onClick: visStateActions.onLayerClick,
          ref: function ref(comp) {
            if (comp && comp.deck && !_this2._deck) {
              _this2._deck = comp.deck;
            }
          },
          onWebGLInitialized: function onWebGLInitialized(gl) {
            return _this2._onDeckInitialized(gl);
          }
        }));
      }
    }, {
      key: "_updateMapboxLayers",
      value: function _updateMapboxLayers() {
        var mapboxLayers = this.mapboxLayersSelector(this.props);

        if (!Object.keys(mapboxLayers).length && !Object.keys(this.previousLayers).length) {
          return;
        }

        (0, _mapboxUtils.updateMapboxLayers)(this._map, mapboxLayers, this.previousLayers);
        this.previousLayers = mapboxLayers;
      }
    }, {
      key: "_renderMapboxOverlays",
      value: function _renderMapboxOverlays() {
        if (this._map && this._map.isStyleLoaded()) {
          this._updateMapboxLayers();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props6 = this.props,
            mapState = _this$props6.mapState,
            mapStyle = _this$props6.mapStyle,
            mapStateActions = _this$props6.mapStateActions,
            mapLayers = _this$props6.mapLayers,
            layers = _this$props6.layers,
            MapComponent = _this$props6.MapComponent,
            datasets = _this$props6.datasets,
            mapboxApiAccessToken = _this$props6.mapboxApiAccessToken,
            mapboxApiUrl = _this$props6.mapboxApiUrl,
            mapControls = _this$props6.mapControls,
            uiState = _this$props6.uiState,
            uiStateActions = _this$props6.uiStateActions,
            visStateActions = _this$props6.visStateActions,
            interactionConfig = _this$props6.interactionConfig,
            editor = _this$props6.editor,
            index = _this$props6.index;
        var layersToRender = this.layersToRenderSelector(this.props);

        if (!mapStyle.bottomMapStyle) {
          // style not yet loaded
          return _react["default"].createElement("div", null);
        }

        var mapProps = _objectSpread({}, mapState, {
          preserveDrawingBuffer: true,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          onViewportChange: this._onViewportChange,
          transformRequest: _mapboxUtils2.transformRequest
        });

        var isEdit = uiState.mapControls.mapDraw.active;
        var hasGeocoderLayer = layers.find(function (l) {
          return l.id === _defaultSettings.GEOCODER_LAYER_ID;
        });
        return _react["default"].createElement(_styledComponents.StyledMapContainer, {
          style: MAP_STYLE.container
        }, _react["default"].createElement(MapControl, {
          datasets: datasets,
          dragRotate: mapState.dragRotate,
          isSplit: Boolean(mapLayers),
          isExport: this.props.isExport,
          layers: layers,
          layersToRender: layersToRender,
          mapIndex: index,
          mapControls: mapControls,
          readOnly: this.props.readOnly,
          scale: mapState.scale || 1,
          top: interactionConfig.geocoder && interactionConfig.geocoder.enabled ? 52 : 0,
          editor: editor,
          locale: uiState.locale,
          onTogglePerspective: mapStateActions.togglePerspective,
          onToggleSplitMap: mapStateActions.toggleSplitMap,
          onMapToggleLayer: this._handleMapToggleLayer,
          onToggleMapControl: this._toggleMapControl,
          onSetEditorMode: visStateActions.setEditorMode,
          onSetLocale: uiStateActions.setLocale,
          onToggleEditorVisibility: visStateActions.toggleEditorVisibility
        }), _react["default"].createElement(MapComponent, (0, _extends2["default"])({}, mapProps, {
          key: "bottom",
          ref: this._setMapboxMap,
          mapStyle: mapStyle.bottomMapStyle,
          getCursor: this.props.hoverInfo ? function () {
            return 'pointer';
          } : undefined,
          transitionDuration: TRANSITION_DURATION,
          onMouseMove: this.props.visStateActions.onMouseMove
        }), this._renderDeckOverlay(layersToRender), this._renderMapboxOverlays(layersToRender), _react["default"].createElement(Editor, {
          index: index,
          datasets: datasets,
          editor: editor,
          filters: this.polygonFilters(this.props),
          isEnabled: isEdit,
          layers: layers,
          layersToRender: layersToRender,
          onDeleteFeature: visStateActions.deleteFeature,
          onSelect: visStateActions.setSelectedFeature,
          onUpdate: visStateActions.setFeatures,
          onTogglePolygonFilter: visStateActions.setPolygonFilterLayer,
          style: {
            pointerEvents: isEdit ? 'all' : 'none',
            position: 'absolute',
            display: editor.visible ? 'block' : 'none'
          }
        })), mapStyle.topMapStyle || hasGeocoderLayer ? _react["default"].createElement("div", {
          style: MAP_STYLE.top
        }, _react["default"].createElement(MapComponent, (0, _extends2["default"])({}, mapProps, {
          key: "top",
          mapStyle: mapStyle.topMapStyle
        }), this._renderDeckOverlay((0, _defineProperty2["default"])({}, _defaultSettings.GEOCODER_LAYER_ID, true)))) : null, this._renderMapPopover(layersToRender), _react["default"].createElement(Attribution, null));
      }
    }]);
    return MapContainer;
  }(_react.Component);

  (0, _defineProperty2["default"])(MapContainer, "propTypes", {
    // required
    datasets: _propTypes["default"].object,
    interactionConfig: _propTypes["default"].object.isRequired,
    layerBlending: _propTypes["default"].string.isRequired,
    layerOrder: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    layerData: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    filters: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    mapState: _propTypes["default"].object.isRequired,
    mapControls: _propTypes["default"].object.isRequired,
    uiState: _propTypes["default"].object.isRequired,
    mapStyle: _propTypes["default"].object.isRequired,
    mousePos: _propTypes["default"].object.isRequired,
    mapboxApiAccessToken: _propTypes["default"].string.isRequired,
    mapboxApiUrl: _propTypes["default"].string,
    visStateActions: _propTypes["default"].object.isRequired,
    mapStateActions: _propTypes["default"].object.isRequired,
    uiStateActions: _propTypes["default"].object.isRequired,
    // optional
    readOnly: _propTypes["default"].bool,
    isExport: _propTypes["default"].bool,
    clicked: _propTypes["default"].object,
    hoverInfo: _propTypes["default"].object,
    mapLayers: _propTypes["default"].object,
    onMapToggleLayer: _propTypes["default"].func,
    onMapStyleLoaded: _propTypes["default"].func,
    onMapRender: _propTypes["default"].func,
    getMapboxRef: _propTypes["default"].func,
    index: _propTypes["default"].number
  });
  (0, _defineProperty2["default"])(MapContainer, "defaultProps", {
    MapComponent: _reactMapGl["default"],
    deckGlProps: {},
    index: 0
  });
  MapContainer.displayName = 'MapContainer';
  return MapContainer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL21hcC1jb250YWluZXIuanMiXSwibmFtZXMiOlsiTUFQX1NUWUxFIiwiY29udGFpbmVyIiwiZGlzcGxheSIsInBvc2l0aW9uIiwidG9wIiwicG9pbnRlckV2ZW50cyIsIk1BUEJPWEdMX1NUWUxFX1VQREFURSIsIk1BUEJPWEdMX1JFTkRFUiIsIlRSQU5TSVRJT05fRFVSQVRJT04iLCJBdHRyaWJ1dGlvbiIsIk1hcENvbnRhaW5lckZhY3RvcnkiLCJkZXBzIiwiTWFwUG9wb3ZlckZhY3RvcnkiLCJNYXBDb250cm9sRmFjdG9yeSIsIkVkaXRvckZhY3RvcnkiLCJNYXBQb3BvdmVyIiwiTWFwQ29udHJvbCIsIkVkaXRvciIsIk1hcENvbnRhaW5lciIsInByb3BzIiwibGF5ZXJzIiwibGF5ZXJEYXRhIiwibWFwTGF5ZXJzIiwibGF5ZXJPcmRlciIsImxheWVyc1NlbGVjdG9yIiwibGF5ZXJEYXRhU2VsZWN0b3IiLCJtYXBMYXllcnNTZWxlY3RvciIsInJlZHVjZSIsImFjY3UiLCJsYXllciIsImlkeCIsImlkIiwiR0VPQ09ERVJfTEFZRVJfSUQiLCJzaG91bGRSZW5kZXJMYXllciIsIl9pc1Zpc2libGVNYXBMYXllciIsImZpbHRlcnMiLCJmaWx0ZXJzU2VsZWN0b3IiLCJmaWx0ZXIiLCJmIiwidHlwZSIsIkZJTFRFUl9UWVBFUyIsInBvbHlnb24iLCJsYXllck9yZGVyU2VsZWN0b3IiLCJsYXllcnNUb1JlbmRlclNlbGVjdG9yIiwiZ2VuZXJhdGVNYXBib3hMYXllcnMiLCJ2aXNTdGF0ZUFjdGlvbnMiLCJvbkxheWVyQ2xpY2siLCJjb2xvckRvbWFpbiIsImxheWVyQ29uZmlnQ2hhbmdlIiwibGF5ZXJJZCIsImluZGV4IiwibWFwSW5kZXgiLCJ0b2dnbGVMYXllckZvck1hcCIsInByZXZpb3VzTGF5ZXJzIiwiX3VwZGF0ZU1hcGJveExheWVycyIsIm9uTWFwU3R5bGVMb2FkZWQiLCJfbWFwIiwibWFwYm94IiwiZ2V0TWFwIiwib24iLCJfb25NYXBib3hTdHlsZVVwZGF0ZSIsIm9uTWFwUmVuZGVyIiwiZ2V0TWFwYm94UmVmIiwiZ2wiLCJsYXllckJsZW5kaW5nIiwib3ZlcmxheXMiLCJkYXRhc2V0cyIsImhvdmVySW5mbyIsImNsaWNrZWQiLCJtYXBTdGF0ZSIsImludGVyYWN0aW9uQ29uZmlnIiwiYW5pbWF0aW9uQ29uZmlnIiwiZGF0YSIsImNvbmZpZyIsImRhdGFJZCIsImdwdUZpbHRlciIsIm9iamVjdEhvdmVyZWQiLCJsYXllckNhbGxiYWNrcyIsIm9uU2V0TGF5ZXJEb21haW4iLCJ2YWwiLCJfb25MYXllclNldERvbWFpbiIsImxheWVyT3ZlcmxheSIsInJlbmRlckxheWVyIiwiY29uY2F0Iiwidmlld1N0YXRlIiwib25WaWV3U3RhdGVDaGFuZ2UiLCJtYXBTdGF0ZUFjdGlvbnMiLCJ1cGRhdGVNYXAiLCJwYW5lbElkIiwidWlTdGF0ZUFjdGlvbnMiLCJ0b2dnbGVNYXBDb250cm9sIiwiX2RlY2siLCJvZmYiLCJvbkRlY2tJbml0aWFsaXplZCIsImxheWVyc1RvUmVuZGVyIiwibW91c2VQb3MiLCJtb3VzZVBvc2l0aW9uIiwiY29vcmRpbmF0ZSIsInBpbm5lZCIsImxheWVySG92ZXJQcm9wIiwibGF5ZXJQaW5uZWRQcm9wIiwieCIsInkiLCJwaW5uZWRQb3NpdGlvbiIsImNvbXBhcmVNb2RlIiwidG9vbHRpcCIsImhhc1Rvb2x0aXAiLCJoYXNDb21wYXJpc29uVG9vbHRpcCIsInZpZXdwb3J0IiwiV2ViTWVyY2F0b3JWaWV3cG9ydCIsImxuZ0xhdCIsIl9nZXRIb3ZlclhZIiwicHJpbWFyeURhdGEiLCJjb21wYXJlVHlwZSIsImNvbW1vblByb3AiLCJvbkNsb3NlIiwiX29uQ2xvc2VNYXBQb3BvdmVyIiwibWFwVyIsIndpZHRoIiwibWFwSCIsImhlaWdodCIsInpvb20iLCJlbmFibGVkIiwiQm9vbGVhbiIsInNjcmVlbkNvb3JkIiwicHJvamVjdCIsIm1hcFN0eWxlIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJtYXBib3hBcGlVcmwiLCJkZWNrR2xMYXllcnMiLCJsZW5ndGgiLCJzbGljZSIsInJldmVyc2UiLCJvdmVybGF5VHlwZSIsIk9WRVJMQVlfVFlQRSIsImRlY2tnbCIsIl9yZW5kZXJMYXllciIsInZpc2libGVMYXllckdyb3VwcyIsInB1c2giLCJUaHJlZURCdWlsZGluZ0xheWVyIiwidGhyZWVEQnVpbGRpbmdDb2xvciIsInVwZGF0ZVRyaWdnZXJzIiwiZ2V0RmlsbENvbG9yIiwiZGVja0dsUHJvcHMiLCJfb25CZWZvcmVSZW5kZXIiLCJvbkxheWVySG92ZXIiLCJjb21wIiwiZGVjayIsIl9vbkRlY2tJbml0aWFsaXplZCIsIm1hcGJveExheWVycyIsIm1hcGJveExheWVyc1NlbGVjdG9yIiwiT2JqZWN0Iiwia2V5cyIsImlzU3R5bGVMb2FkZWQiLCJNYXBDb21wb25lbnQiLCJtYXBDb250cm9scyIsInVpU3RhdGUiLCJlZGl0b3IiLCJib3R0b21NYXBTdHlsZSIsIm1hcFByb3BzIiwicHJlc2VydmVEcmF3aW5nQnVmZmVyIiwib25WaWV3cG9ydENoYW5nZSIsIl9vblZpZXdwb3J0Q2hhbmdlIiwidHJhbnNmb3JtUmVxdWVzdCIsImlzRWRpdCIsIm1hcERyYXciLCJhY3RpdmUiLCJoYXNHZW9jb2RlckxheWVyIiwiZmluZCIsImwiLCJkcmFnUm90YXRlIiwiaXNFeHBvcnQiLCJyZWFkT25seSIsInNjYWxlIiwiZ2VvY29kZXIiLCJsb2NhbGUiLCJ0b2dnbGVQZXJzcGVjdGl2ZSIsInRvZ2dsZVNwbGl0TWFwIiwiX2hhbmRsZU1hcFRvZ2dsZUxheWVyIiwiX3RvZ2dsZU1hcENvbnRyb2wiLCJzZXRFZGl0b3JNb2RlIiwic2V0TG9jYWxlIiwidG9nZ2xlRWRpdG9yVmlzaWJpbGl0eSIsIl9zZXRNYXBib3hNYXAiLCJ1bmRlZmluZWQiLCJvbk1vdXNlTW92ZSIsIl9yZW5kZXJEZWNrT3ZlcmxheSIsIl9yZW5kZXJNYXBib3hPdmVybGF5cyIsInBvbHlnb25GaWx0ZXJzIiwiZGVsZXRlRmVhdHVyZSIsInNldFNlbGVjdGVkRmVhdHVyZSIsInNldEZlYXR1cmVzIiwic2V0UG9seWdvbkZpbHRlckxheWVyIiwidmlzaWJsZSIsInRvcE1hcFN0eWxlIiwiX3JlbmRlck1hcFBvcG92ZXIiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYXJyYXlPZiIsImFueSIsImJvb2wiLCJvbk1hcFRvZ2dsZUxheWVyIiwiZnVuYyIsIm51bWJlciIsIk1hcGJveEdMTWFwIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxTQUFTLEVBQUU7QUFDVEMsSUFBQUEsT0FBTyxFQUFFLGNBREE7QUFFVEMsSUFBQUEsUUFBUSxFQUFFO0FBRkQsR0FESztBQUtoQkMsRUFBQUEsR0FBRyxFQUFFO0FBQ0hELElBQUFBLFFBQVEsRUFBRSxVQURQO0FBRUhDLElBQUFBLEdBQUcsRUFBRSxLQUZGO0FBR0hDLElBQUFBLGFBQWEsRUFBRTtBQUhaO0FBTFcsQ0FBbEI7QUFZQSxJQUFNQyxxQkFBcUIsR0FBRyxZQUE5QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxRQUF4QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLENBQTVCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FDbEIsZ0NBQUMsa0NBQUQsUUFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsb0JBRUU7QUFDRSxJQUFBLFNBQVMsRUFBQyxvQkFEWjtBQUVFLElBQUEsTUFBTSxFQUFDLFFBRlQ7QUFHRSxJQUFBLEdBQUcsRUFBQyxxQkFITjtBQUlFLElBQUEsSUFBSSxFQUFDLHlCQUpQO0FBS0Usa0JBQVc7QUFM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cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLy8gbGlicmFyaWVzXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTWFwYm94R0xNYXAgZnJvbSAncmVhY3QtbWFwLWdsJztcbmltcG9ydCBEZWNrR0wgZnJvbSAnQGRlY2suZ2wvcmVhY3QnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IFdlYk1lcmNhdG9yVmlld3BvcnQgZnJvbSAndmlld3BvcnQtbWVyY2F0b3ItcHJvamVjdCc7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCBNYXBQb3BvdmVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL21hcC9tYXAtcG9wb3Zlcic7XG5pbXBvcnQgTWFwQ29udHJvbEZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9tYXAvbWFwLWNvbnRyb2wnO1xuaW1wb3J0IHtTdHlsZWRNYXBDb250YWluZXIsIFN0eWxlZEF0dHJidXRpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IEVkaXRvckZhY3RvcnkgZnJvbSAnLi9lZGl0b3IvZWRpdG9yJztcblxuLy8gdXRpbHNcbmltcG9ydCB7Z2VuZXJhdGVNYXBib3hMYXllcnMsIHVwZGF0ZU1hcGJveExheWVyc30gZnJvbSAnbGF5ZXJzL21hcGJveC11dGlscyc7XG5pbXBvcnQge09WRVJMQVlfVFlQRX0gZnJvbSAnbGF5ZXJzL2Jhc2UtbGF5ZXInO1xuaW1wb3J0IHtzZXRMYXllckJsZW5kaW5nfSBmcm9tICd1dGlscy9nbC11dGlscyc7XG5pbXBvcnQge3RyYW5zZm9ybVJlcXVlc3R9IGZyb20gJ3V0aWxzL21hcC1zdHlsZS11dGlscy9tYXBib3gtdXRpbHMnO1xuaW1wb3J0IHtnZXRMYXllckhvdmVyUHJvcH0gZnJvbSAndXRpbHMvbGF5ZXItdXRpbHMnO1xuXG4vLyBkZWZhdWx0LXNldHRpbmdzXG5pbXBvcnQgVGhyZWVEQnVpbGRpbmdMYXllciBmcm9tICdkZWNrZ2wtbGF5ZXJzLzNkLWJ1aWxkaW5nLWxheWVyLzNkLWJ1aWxkaW5nLWxheWVyJztcbmltcG9ydCB7RklMVEVSX1RZUEVTLCBHRU9DT0RFUl9MQVlFUl9JRH0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBNQVBfU1RZTEUgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIHRvcDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzBweCcsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH1cbn07XG5cbmNvbnN0IE1BUEJPWEdMX1NUWUxFX1VQREFURSA9ICdzdHlsZS5sb2FkJztcbmNvbnN0IE1BUEJPWEdMX1JFTkRFUiA9ICdyZW5kZXInO1xuY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDA7XG5cbmNvbnN0IEF0dHJpYnV0aW9uID0gKCkgPT4gKFxuICA8U3R5bGVkQXR0cmJ1dGlvbj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpdGlvbi1sb2dvXCI+XG4gICAgICBCYXNlbWFwIGJ5OlxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPVwibWFwYm94Z2wtY3RybC1sb2dvXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL1wiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJNYXBib3ggbG9nb1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9rZXBsZXIuZ2wvcG9saWN5L1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgwqkga2VwbGVyLmdsIHx7JyAnfVxuICAgICAgPC9hPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vYWJvdXQvbWFwcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgIMKpIE1hcGJveCB8eycgJ31cbiAgICAgIDwvYT5cbiAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgwqkgT3BlblN0cmVldE1hcCB8eycgJ31cbiAgICAgIDwvYT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL21hcC1mZWVkYmFjay9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgIDxzdHJvbmc+SW1wcm92ZSB0aGlzIG1hcDwvc3Ryb25nPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L1N0eWxlZEF0dHJidXRpb24+XG4pO1xuXG5NYXBDb250YWluZXJGYWN0b3J5LmRlcHMgPSBbTWFwUG9wb3ZlckZhY3RvcnksIE1hcENvbnRyb2xGYWN0b3J5LCBFZGl0b3JGYWN0b3J5XTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwQ29udGFpbmVyRmFjdG9yeShNYXBQb3BvdmVyLCBNYXBDb250cm9sLCBFZGl0b3IpIHtcbiAgY2xhc3MgTWFwQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgLy8gcmVxdWlyZWRcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgaW50ZXJhY3Rpb25Db25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQmxlbmRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyT3JkZXI6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckRhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBmaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcENvbnRyb2xzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICB1aVN0YXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdHlsZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbW91c2VQb3M6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtYXBib3hBcGlVcmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2aXNTdGF0ZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcFN0YXRlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgdWlTdGF0ZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgICAgLy8gb3B0aW9uYWxcbiAgICAgIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGlzRXhwb3J0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGNsaWNrZWQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBob3ZlckluZm86IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBtYXBMYXllcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBvbk1hcFRvZ2dsZUxheWVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uTWFwU3R5bGVMb2FkZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgb25NYXBSZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgZ2V0TWFwYm94UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBNYXBDb21wb25lbnQ6IE1hcGJveEdMTWFwLFxuICAgICAgZGVja0dsUHJvcHM6IHt9LFxuICAgICAgaW5kZXg6IDBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgdGhpcy5wcmV2aW91c0xheWVycyA9IHtcbiAgICAgICAgLy8gW2xheWVycy5pZF06IG1hcGJveExheWVyQ29uZmlnXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9kZWNrID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIC8vIHVuYmluZCBtYXBib3hnbCBldmVudCBsaXN0ZW5lclxuICAgICAgaWYgKHRoaXMuX21hcCkge1xuICAgICAgICB0aGlzLl9tYXAub2ZmKE1BUEJPWEdMX1NUWUxFX1VQREFURSk7XG4gICAgICAgIHRoaXMuX21hcC5vZmYoTUFQQk9YR0xfUkVOREVSKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXllcnNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVycztcbiAgICBsYXllckRhdGFTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVyRGF0YTtcbiAgICBtYXBMYXllcnNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLm1hcExheWVycztcbiAgICBsYXllck9yZGVyU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5sYXllck9yZGVyO1xuICAgIGxheWVyc1RvUmVuZGVyU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMubGF5ZXJzU2VsZWN0b3IsXG4gICAgICB0aGlzLmxheWVyRGF0YVNlbGVjdG9yLFxuICAgICAgdGhpcy5tYXBMYXllcnNTZWxlY3RvcixcbiAgICAgIC8vIHtbaWRdOiB0cnVlIFxcIGZhbHNlfVxuICAgICAgKGxheWVycywgbGF5ZXJEYXRhLCBtYXBMYXllcnMpID0+XG4gICAgICAgIGxheWVycy5yZWR1Y2UoXG4gICAgICAgICAgKGFjY3UsIGxheWVyLCBpZHgpID0+ICh7XG4gICAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgICAgW2xheWVyLmlkXTpcbiAgICAgICAgICAgICAgbGF5ZXIuaWQgIT09IEdFT0NPREVSX0xBWUVSX0lEICYmXG4gICAgICAgICAgICAgIGxheWVyLnNob3VsZFJlbmRlckxheWVyKGxheWVyRGF0YVtpZHhdKSAmJlxuICAgICAgICAgICAgICB0aGlzLl9pc1Zpc2libGVNYXBMYXllcihsYXllciwgbWFwTGF5ZXJzKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHt9XG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZmlsdGVyc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmlsdGVycztcbiAgICBwb2x5Z29uRmlsdGVycyA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZmlsdGVyc1NlbGVjdG9yLCBmaWx0ZXJzID0+XG4gICAgICBmaWx0ZXJzLmZpbHRlcihmID0+IGYudHlwZSA9PT0gRklMVEVSX1RZUEVTLnBvbHlnb24pXG4gICAgKTtcblxuICAgIG1hcGJveExheWVyc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLmxheWVyc1NlbGVjdG9yLFxuICAgICAgdGhpcy5sYXllckRhdGFTZWxlY3RvcixcbiAgICAgIHRoaXMubGF5ZXJPcmRlclNlbGVjdG9yLFxuICAgICAgdGhpcy5sYXllcnNUb1JlbmRlclNlbGVjdG9yLFxuICAgICAgZ2VuZXJhdGVNYXBib3hMYXllcnNcbiAgICApO1xuXG4gICAgLyogY29tcG9uZW50IHByaXZhdGUgZnVuY3Rpb25zICovXG4gICAgX2lzVmlzaWJsZU1hcExheWVyKGxheWVyLCBtYXBMYXllcnMpIHtcbiAgICAgIC8vIGlmIGxheWVyLmlkIGlzIG5vdCBpbiBtYXBMYXllcnMsIGRvbid0IHJlbmRlciBpdFxuICAgICAgcmV0dXJuICFtYXBMYXllcnMgfHwgKG1hcExheWVycyAmJiBtYXBMYXllcnNbbGF5ZXIuaWRdKTtcbiAgICB9XG5cbiAgICBfb25DbG9zZU1hcFBvcG92ZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5vbkxheWVyQ2xpY2sobnVsbCk7XG4gICAgfTtcblxuICAgIF9vbkxheWVyU2V0RG9tYWluID0gKGlkeCwgY29sb3JEb21haW4pID0+IHtcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLmxheWVyQ29uZmlnQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXJzW2lkeF0sIHtcbiAgICAgICAgY29sb3JEb21haW5cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfaGFuZGxlTWFwVG9nZ2xlTGF5ZXIgPSBsYXllcklkID0+IHtcbiAgICAgIGNvbnN0IHtpbmRleDogbWFwSW5kZXggPSAwLCB2aXNTdGF0ZUFjdGlvbnN9ID0gdGhpcy5wcm9wcztcbiAgICAgIHZpc1N0YXRlQWN0aW9ucy50b2dnbGVMYXllckZvck1hcChtYXBJbmRleCwgbGF5ZXJJZCk7XG4gICAgfTtcblxuICAgIF9vbk1hcGJveFN0eWxlVXBkYXRlID0gKCkgPT4ge1xuICAgICAgLy8gZm9yY2UgcmVmcmVzaCBtYXBib3hnbCBsYXllcnNcbiAgICAgIHRoaXMucHJldmlvdXNMYXllcnMgPSB7fTtcbiAgICAgIHRoaXMuX3VwZGF0ZU1hcGJveExheWVycygpO1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25NYXBTdHlsZUxvYWRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnByb3BzLm9uTWFwU3R5bGVMb2FkZWQodGhpcy5fbWFwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3NldE1hcGJveE1hcCA9IG1hcGJveCA9PiB7XG4gICAgICBpZiAoIXRoaXMuX21hcCAmJiBtYXBib3gpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gbWFwYm94LmdldE1hcCgpO1xuICAgICAgICAvLyBpIG5vdGljZWQgaW4gY2VydGFpbiBjb250ZXh0IHdlIGRvbid0IGFjY2VzcyB0aGUgYWN0dWFsIG1hcCBlbGVtZW50XG4gICAgICAgIGlmICghdGhpcy5fbWFwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJpbmQgbWFwYm94Z2wgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgdGhpcy5fbWFwLm9uKE1BUEJPWEdMX1NUWUxFX1VQREFURSwgdGhpcy5fb25NYXBib3hTdHlsZVVwZGF0ZSk7XG5cbiAgICAgICAgdGhpcy5fbWFwLm9uKE1BUEJPWEdMX1JFTkRFUiwgKCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbk1hcFJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1hcFJlbmRlcih0aGlzLl9tYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmdldE1hcGJveFJlZikge1xuICAgICAgICAvLyBUaGUgcGFyZW50IGNvbXBvbmVudCBjYW4gZ2FpbiBhY2Nlc3MgdG8gb3VyIE1hcGJveEdsTWFwIGJ5XG4gICAgICAgIC8vIHByb3ZpZGluZyB0aGlzIGNhbGxiYWNrLiBOb3RlIHRoYXQgJ21hcGJveCcgd2lsbCBiZSBudWxsIHdoZW4gdGhlXG4gICAgICAgIC8vIHJlZiBpcyB1bnNldCAoZS5nLiB3aGVuIGEgc3BsaXQgbWFwIGlzIGNsb3NlZCkuXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0TWFwYm94UmVmKG1hcGJveCwgdGhpcy5wcm9wcy5pbmRleCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9vbkRlY2tJbml0aWFsaXplZChnbCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25EZWNrSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkRlY2tJbml0aWFsaXplZCh0aGlzLl9kZWNrLCBnbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX29uQmVmb3JlUmVuZGVyID0gKHtnbH0pID0+IHtcbiAgICAgIHNldExheWVyQmxlbmRpbmcoZ2wsIHRoaXMucHJvcHMubGF5ZXJCbGVuZGluZyk7XG4gICAgfTtcblxuICAgIC8qIGNvbXBvbmVudCByZW5kZXIgZnVuY3Rpb25zICovXG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG4gICAgX3JlbmRlck1hcFBvcG92ZXIobGF5ZXJzVG9SZW5kZXIpIHtcbiAgICAgIC8vIFRPRE86IG1vdmUgdGhpcyBpbnRvIHJlZHVjZXIgc28gaXQgY2FuIGJlIHRlc3RlZFxuICAgICAgY29uc3Qge1xuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgaG92ZXJJbmZvLFxuICAgICAgICBjbGlja2VkLFxuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgIGxheWVycyxcbiAgICAgICAgbW91c2VQb3M6IHttb3VzZVBvc2l0aW9uLCBjb29yZGluYXRlLCBwaW5uZWR9XG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgaWYgKCFtb3VzZVBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgLy8gaWYgY2xpY2tlZCBzb21ldGhpbmcsIGlnbm9yZSBob3ZlciBiZWhhdmlvclxuICAgICAgbGV0IGxheWVySG92ZXJQcm9wID0gbnVsbDtcbiAgICAgIGxldCBsYXllclBpbm5lZFByb3AgPSBudWxsO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSB7eDogbW91c2VQb3NpdGlvblswXSwgeTogbW91c2VQb3NpdGlvblsxXX07XG4gICAgICBsZXQgcGlubmVkUG9zaXRpb24gPSB7fTtcblxuICAgICAgbGF5ZXJIb3ZlclByb3AgPSBnZXRMYXllckhvdmVyUHJvcCh7XG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICBob3ZlckluZm8sXG4gICAgICAgIGxheWVycyxcbiAgICAgICAgbGF5ZXJzVG9SZW5kZXIsXG4gICAgICAgIGRhdGFzZXRzXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY29tcGFyZU1vZGUgPSBpbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmNvbmZpZ1xuICAgICAgICA/IGludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAuY29uZmlnLmNvbXBhcmVNb2RlXG4gICAgICAgIDogZmFsc2U7XG5cbiAgICAgIGNvbnN0IGhhc1Rvb2x0aXAgPSBwaW5uZWQgfHwgY2xpY2tlZDtcbiAgICAgIGNvbnN0IGhhc0NvbXBhcmlzb25Ub29sdGlwID0gY29tcGFyZU1vZGUgfHwgKCFjbGlja2VkICYmICFwaW5uZWQpO1xuXG4gICAgICBpZiAoaGFzVG9vbHRpcCkge1xuICAgICAgICAvLyBwcm9qZWN0IGxuZ2xhdCB0byBzY3JlZW4gc28gdGhhdCB0b29sdGlwIGZvbGxvd3MgdGhlIG9iamVjdCBvbiB6b29tXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gbmV3IFdlYk1lcmNhdG9yVmlld3BvcnQobWFwU3RhdGUpO1xuICAgICAgICBjb25zdCBsbmdMYXQgPSBjbGlja2VkID8gY2xpY2tlZC5sbmdMYXQgOiBwaW5uZWQuY29vcmRpbmF0ZTtcbiAgICAgICAgcGlubmVkUG9zaXRpb24gPSB0aGlzLl9nZXRIb3ZlclhZKHZpZXdwb3J0LCBsbmdMYXQpO1xuICAgICAgICBsYXllclBpbm5lZFByb3AgPSBnZXRMYXllckhvdmVyUHJvcCh7XG4gICAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgICAgaG92ZXJJbmZvOiBjbGlja2VkLFxuICAgICAgICAgIGxheWVycyxcbiAgICAgICAgICBsYXllcnNUb1JlbmRlcixcbiAgICAgICAgICBkYXRhc2V0c1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxheWVySG92ZXJQcm9wKSB7XG4gICAgICAgICAgbGF5ZXJIb3ZlclByb3AucHJpbWFyeURhdGEgPSBsYXllclBpbm5lZFByb3AuZGF0YTtcbiAgICAgICAgICBsYXllckhvdmVyUHJvcC5jb21wYXJlVHlwZSA9IGludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAuY29uZmlnLmNvbXBhcmVUeXBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBjb21tb25Qcm9wID0ge1xuICAgICAgICBvbkNsb3NlOiB0aGlzLl9vbkNsb3NlTWFwUG9wb3ZlcixcbiAgICAgICAgbWFwVzogbWFwU3RhdGUud2lkdGgsXG4gICAgICAgIG1hcEg6IG1hcFN0YXRlLmhlaWdodCxcbiAgICAgICAgem9vbTogbWFwU3RhdGUuem9vbVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7aGFzVG9vbHRpcCAmJiAoXG4gICAgICAgICAgICA8TWFwUG9wb3ZlclxuICAgICAgICAgICAgICB7Li4ucGlubmVkUG9zaXRpb259XG4gICAgICAgICAgICAgIHsuLi5jb21tb25Qcm9wfVxuICAgICAgICAgICAgICBsYXllckhvdmVyUHJvcD17bGF5ZXJQaW5uZWRQcm9wfVxuICAgICAgICAgICAgICBjb29yZGluYXRlPXtpbnRlcmFjdGlvbkNvbmZpZy5jb29yZGluYXRlLmVuYWJsZWQgJiYgKHBpbm5lZCB8fCB7fSkuY29vcmRpbmF0ZX1cbiAgICAgICAgICAgICAgZnJvemVuPXtCb29sZWFuKGhhc1Rvb2x0aXApfVxuICAgICAgICAgICAgICBpc0Jhc2U9e2NvbXBhcmVNb2RlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtoYXNDb21wYXJpc29uVG9vbHRpcCAmJiAoXG4gICAgICAgICAgICA8TWFwUG9wb3ZlclxuICAgICAgICAgICAgICB7Li4ucG9zaXRpb259XG4gICAgICAgICAgICAgIHsuLi5jb21tb25Qcm9wfVxuICAgICAgICAgICAgICBsYXllckhvdmVyUHJvcD17bGF5ZXJIb3ZlclByb3B9XG4gICAgICAgICAgICAgIGNvb3JkaW5hdGU9e2ludGVyYWN0aW9uQ29uZmlnLmNvb3JkaW5hdGUuZW5hYmxlZCAmJiBjb29yZGluYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXG5cbiAgICBfZ2V0SG92ZXJYWSh2aWV3cG9ydCwgbG5nTGF0KSB7XG4gICAgICBjb25zdCBzY3JlZW5Db29yZCA9ICF2aWV3cG9ydCB8fCAhbG5nTGF0ID8gbnVsbCA6IHZpZXdwb3J0LnByb2plY3QobG5nTGF0KTtcbiAgICAgIHJldHVybiBzY3JlZW5Db29yZCAmJiB7eDogc2NyZWVuQ29vcmRbMF0sIHk6IHNjcmVlbkNvb3JkWzFdfTtcbiAgICB9XG5cbiAgICBfcmVuZGVyTGF5ZXIgPSAob3ZlcmxheXMsIGlkeCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBsYXllckRhdGEsXG4gICAgICAgIGhvdmVySW5mbyxcbiAgICAgICAgY2xpY2tlZCxcbiAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICBhbmltYXRpb25Db25maWdcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgbGF5ZXIgPSBsYXllcnNbaWR4XTtcbiAgICAgIGNvbnN0IGRhdGEgPSBsYXllckRhdGFbaWR4XTtcbiAgICAgIGNvbnN0IHtncHVGaWx0ZXJ9ID0gZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0gfHwge307XG5cbiAgICAgIGNvbnN0IG9iamVjdEhvdmVyZWQgPSBjbGlja2VkIHx8IGhvdmVySW5mbztcbiAgICAgIGNvbnN0IGxheWVyQ2FsbGJhY2tzID0ge1xuICAgICAgICBvblNldExheWVyRG9tYWluOiB2YWwgPT4gdGhpcy5fb25MYXllclNldERvbWFpbihpZHgsIHZhbClcbiAgICAgIH07XG5cbiAgICAgIC8vIExheWVyIGlzIExheWVyIGNsYXNzXG4gICAgICBjb25zdCBsYXllck92ZXJsYXkgPSBsYXllci5yZW5kZXJMYXllcih7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIGdwdUZpbHRlcixcbiAgICAgICAgaWR4LFxuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgICAgbGF5ZXJDYWxsYmFja3MsXG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICBhbmltYXRpb25Db25maWcsXG4gICAgICAgIG9iamVjdEhvdmVyZWRcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gb3ZlcmxheXMuY29uY2F0KGxheWVyT3ZlcmxheSB8fCBbXSk7XG4gICAgfTtcblxuICAgIF9yZW5kZXJEZWNrT3ZlcmxheShsYXllcnNUb1JlbmRlcikge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIGxheWVyRGF0YSxcbiAgICAgICAgbGF5ZXJPcmRlcixcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBtYXBib3hBcGlVcmxcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBsZXQgZGVja0dsTGF5ZXJzID0gW107XG4gICAgICAvLyB3YWl0IHVudGlsIGRhdGEgaXMgcmVhZHkgYmVmb3JlIHJlbmRlciBkYXRhIGxheWVyc1xuICAgICAgaWYgKGxheWVyRGF0YSAmJiBsYXllckRhdGEubGVuZ3RoKSB7XG4gICAgICAgIC8vIGxhc3QgbGF5ZXIgcmVuZGVyIGZpcnN0XG4gICAgICAgIGRlY2tHbExheWVycyA9IGxheWVyT3JkZXJcbiAgICAgICAgICAuc2xpY2UoKVxuICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgaWR4ID0+IGxheWVyc1tpZHhdLm92ZXJsYXlUeXBlID09PSBPVkVSTEFZX1RZUEUuZGVja2dsICYmIGxheWVyc1RvUmVuZGVyW2xheWVyc1tpZHhdLmlkXVxuICAgICAgICAgIClcbiAgICAgICAgICAucmVkdWNlKHRoaXMuX3JlbmRlckxheWVyLCBbXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXBTdHlsZS52aXNpYmxlTGF5ZXJHcm91cHNbJzNkIGJ1aWxkaW5nJ10pIHtcbiAgICAgICAgZGVja0dsTGF5ZXJzLnB1c2goXG4gICAgICAgICAgbmV3IFRocmVlREJ1aWxkaW5nTGF5ZXIoe1xuICAgICAgICAgICAgaWQ6ICdfa2VwbGVyZ2xfM2QtYnVpbGRpbmcnLFxuICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gICAgICAgICAgICBtYXBib3hBcGlVcmwsXG4gICAgICAgICAgICB0aHJlZURCdWlsZGluZ0NvbG9yOiBtYXBTdHlsZS50aHJlZURCdWlsZGluZ0NvbG9yLFxuICAgICAgICAgICAgdXBkYXRlVHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgZ2V0RmlsbENvbG9yOiBtYXBTdHlsZS50aHJlZURCdWlsZGluZ0NvbG9yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERlY2tHTFxuICAgICAgICAgIHsuLi50aGlzLnByb3BzLmRlY2tHbFByb3BzfVxuICAgICAgICAgIHZpZXdTdGF0ZT17bWFwU3RhdGV9XG4gICAgICAgICAgaWQ9XCJkZWZhdWx0LWRlY2tnbC1vdmVybGF5XCJcbiAgICAgICAgICBsYXllcnM9e2RlY2tHbExheWVyc31cbiAgICAgICAgICBvbkJlZm9yZVJlbmRlcj17dGhpcy5fb25CZWZvcmVSZW5kZXJ9XG4gICAgICAgICAgb25Ib3Zlcj17dmlzU3RhdGVBY3Rpb25zLm9uTGF5ZXJIb3Zlcn1cbiAgICAgICAgICBvbkNsaWNrPXt2aXNTdGF0ZUFjdGlvbnMub25MYXllckNsaWNrfVxuICAgICAgICAgIHJlZj17Y29tcCA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcCAmJiBjb21wLmRlY2sgJiYgIXRoaXMuX2RlY2spIHtcbiAgICAgICAgICAgICAgdGhpcy5fZGVjayA9IGNvbXAuZGVjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uV2ViR0xJbml0aWFsaXplZD17Z2wgPT4gdGhpcy5fb25EZWNrSW5pdGlhbGl6ZWQoZ2wpfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBfdXBkYXRlTWFwYm94TGF5ZXJzKCkge1xuICAgICAgY29uc3QgbWFwYm94TGF5ZXJzID0gdGhpcy5tYXBib3hMYXllcnNTZWxlY3Rvcih0aGlzLnByb3BzKTtcbiAgICAgIGlmICghT2JqZWN0LmtleXMobWFwYm94TGF5ZXJzKS5sZW5ndGggJiYgIU9iamVjdC5rZXlzKHRoaXMucHJldmlvdXNMYXllcnMpLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZU1hcGJveExheWVycyh0aGlzLl9tYXAsIG1hcGJveExheWVycywgdGhpcy5wcmV2aW91c0xheWVycyk7XG5cbiAgICAgIHRoaXMucHJldmlvdXNMYXllcnMgPSBtYXBib3hMYXllcnM7XG4gICAgfVxuXG4gICAgX3JlbmRlck1hcGJveE92ZXJsYXlzKCkge1xuICAgICAgaWYgKHRoaXMuX21hcCAmJiB0aGlzLl9tYXAuaXNTdHlsZUxvYWRlZCgpKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU1hcGJveExheWVycygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9vblZpZXdwb3J0Q2hhbmdlID0gdmlld1N0YXRlID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vblZpZXdTdGF0ZUNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnByb3BzLm9uVmlld1N0YXRlQ2hhbmdlKHZpZXdTdGF0ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm1hcFN0YXRlQWN0aW9ucy51cGRhdGVNYXAodmlld1N0YXRlKTtcbiAgICB9O1xuXG4gICAgX3RvZ2dsZU1hcENvbnRyb2wgPSBwYW5lbElkID0+IHtcbiAgICAgIGNvbnN0IHtpbmRleCwgdWlTdGF0ZUFjdGlvbnN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgdWlTdGF0ZUFjdGlvbnMudG9nZ2xlTWFwQ29udHJvbChwYW5lbElkLCBpbmRleCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgIG1hcFN0eWxlLFxuICAgICAgICBtYXBTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcExheWVycyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBNYXBDb21wb25lbnQsXG4gICAgICAgIGRhdGFzZXRzLFxuICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcbiAgICAgICAgbWFwYm94QXBpVXJsLFxuICAgICAgICBtYXBDb250cm9scyxcbiAgICAgICAgdWlTdGF0ZSxcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgIGVkaXRvcixcbiAgICAgICAgaW5kZXhcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBjb25zdCBsYXllcnNUb1JlbmRlciA9IHRoaXMubGF5ZXJzVG9SZW5kZXJTZWxlY3Rvcih0aGlzLnByb3BzKTtcblxuICAgICAgaWYgKCFtYXBTdHlsZS5ib3R0b21NYXBTdHlsZSkge1xuICAgICAgICAvLyBzdHlsZSBub3QgeWV0IGxvYWRlZFxuICAgICAgICByZXR1cm4gPGRpdiAvPjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFwUHJvcHMgPSB7XG4gICAgICAgIC4uLm1hcFN0YXRlLFxuICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBtYXBib3hBcGlVcmwsXG4gICAgICAgIG9uVmlld3BvcnRDaGFuZ2U6IHRoaXMuX29uVmlld3BvcnRDaGFuZ2UsXG4gICAgICAgIHRyYW5zZm9ybVJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGlzRWRpdCA9IHVpU3RhdGUubWFwQ29udHJvbHMubWFwRHJhdy5hY3RpdmU7XG4gICAgICBjb25zdCBoYXNHZW9jb2RlckxheWVyID0gbGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSBHRU9DT0RFUl9MQVlFUl9JRCk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRNYXBDb250YWluZXIgc3R5bGU9e01BUF9TVFlMRS5jb250YWluZXJ9PlxuICAgICAgICAgIDxNYXBDb250cm9sXG4gICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICBkcmFnUm90YXRlPXttYXBTdGF0ZS5kcmFnUm90YXRlfVxuICAgICAgICAgICAgaXNTcGxpdD17Qm9vbGVhbihtYXBMYXllcnMpfVxuICAgICAgICAgICAgaXNFeHBvcnQ9e3RoaXMucHJvcHMuaXNFeHBvcnR9XG4gICAgICAgICAgICBsYXllcnM9e2xheWVyc31cbiAgICAgICAgICAgIGxheWVyc1RvUmVuZGVyPXtsYXllcnNUb1JlbmRlcn1cbiAgICAgICAgICAgIG1hcEluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIG1hcENvbnRyb2xzPXttYXBDb250cm9sc31cbiAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5fVxuICAgICAgICAgICAgc2NhbGU9e21hcFN0YXRlLnNjYWxlIHx8IDF9XG4gICAgICAgICAgICB0b3A9e2ludGVyYWN0aW9uQ29uZmlnLmdlb2NvZGVyICYmIGludGVyYWN0aW9uQ29uZmlnLmdlb2NvZGVyLmVuYWJsZWQgPyA1MiA6IDB9XG4gICAgICAgICAgICBlZGl0b3I9e2VkaXRvcn1cbiAgICAgICAgICAgIGxvY2FsZT17dWlTdGF0ZS5sb2NhbGV9XG4gICAgICAgICAgICBvblRvZ2dsZVBlcnNwZWN0aXZlPXttYXBTdGF0ZUFjdGlvbnMudG9nZ2xlUGVyc3BlY3RpdmV9XG4gICAgICAgICAgICBvblRvZ2dsZVNwbGl0TWFwPXttYXBTdGF0ZUFjdGlvbnMudG9nZ2xlU3BsaXRNYXB9XG4gICAgICAgICAgICBvbk1hcFRvZ2dsZUxheWVyPXt0aGlzLl9oYW5kbGVNYXBUb2dnbGVMYXllcn1cbiAgICAgICAgICAgIG9uVG9nZ2xlTWFwQ29udHJvbD17dGhpcy5fdG9nZ2xlTWFwQ29udHJvbH1cbiAgICAgICAgICAgIG9uU2V0RWRpdG9yTW9kZT17dmlzU3RhdGVBY3Rpb25zLnNldEVkaXRvck1vZGV9XG4gICAgICAgICAgICBvblNldExvY2FsZT17dWlTdGF0ZUFjdGlvbnMuc2V0TG9jYWxlfVxuICAgICAgICAgICAgb25Ub2dnbGVFZGl0b3JWaXNpYmlsaXR5PXt2aXNTdGF0ZUFjdGlvbnMudG9nZ2xlRWRpdG9yVmlzaWJpbGl0eX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNYXBDb21wb25lbnRcbiAgICAgICAgICAgIHsuLi5tYXBQcm9wc31cbiAgICAgICAgICAgIGtleT1cImJvdHRvbVwiXG4gICAgICAgICAgICByZWY9e3RoaXMuX3NldE1hcGJveE1hcH1cbiAgICAgICAgICAgIG1hcFN0eWxlPXttYXBTdHlsZS5ib3R0b21NYXBTdHlsZX1cbiAgICAgICAgICAgIGdldEN1cnNvcj17dGhpcy5wcm9wcy5ob3ZlckluZm8gPyAoKSA9PiAncG9pbnRlcicgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb249e1RSQU5TSVRJT05fRFVSQVRJT059XG4gICAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMub25Nb3VzZU1vdmV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuX3JlbmRlckRlY2tPdmVybGF5KGxheWVyc1RvUmVuZGVyKX1cbiAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJNYXBib3hPdmVybGF5cyhsYXllcnNUb1JlbmRlcil9XG4gICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICBlZGl0b3I9e2VkaXRvcn1cbiAgICAgICAgICAgICAgZmlsdGVycz17dGhpcy5wb2x5Z29uRmlsdGVycyh0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgaXNFbmFibGVkPXtpc0VkaXR9XG4gICAgICAgICAgICAgIGxheWVycz17bGF5ZXJzfVxuICAgICAgICAgICAgICBsYXllcnNUb1JlbmRlcj17bGF5ZXJzVG9SZW5kZXJ9XG4gICAgICAgICAgICAgIG9uRGVsZXRlRmVhdHVyZT17dmlzU3RhdGVBY3Rpb25zLmRlbGV0ZUZlYXR1cmV9XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt2aXNTdGF0ZUFjdGlvbnMuc2V0U2VsZWN0ZWRGZWF0dXJlfVxuICAgICAgICAgICAgICBvblVwZGF0ZT17dmlzU3RhdGVBY3Rpb25zLnNldEZlYXR1cmVzfVxuICAgICAgICAgICAgICBvblRvZ2dsZVBvbHlnb25GaWx0ZXI9e3Zpc1N0YXRlQWN0aW9ucy5zZXRQb2x5Z29uRmlsdGVyTGF5ZXJ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogaXNFZGl0ID8gJ2FsbCcgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZWRpdG9yLnZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTWFwQ29tcG9uZW50PlxuICAgICAgICAgIHttYXBTdHlsZS50b3BNYXBTdHlsZSB8fCBoYXNHZW9jb2RlckxheWVyID8gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17TUFQX1NUWUxFLnRvcH0+XG4gICAgICAgICAgICAgIDxNYXBDb21wb25lbnQgey4uLm1hcFByb3BzfSBrZXk9XCJ0b3BcIiBtYXBTdHlsZT17bWFwU3R5bGUudG9wTWFwU3R5bGV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJEZWNrT3ZlcmxheSh7W0dFT0NPREVSX0xBWUVSX0lEXTogdHJ1ZX0pfVxuICAgICAgICAgICAgICA8L01hcENvbXBvbmVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHt0aGlzLl9yZW5kZXJNYXBQb3BvdmVyKGxheWVyc1RvUmVuZGVyKX1cbiAgICAgICAgICA8QXR0cmlidXRpb24gLz5cbiAgICAgICAgPC9TdHlsZWRNYXBDb250YWluZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIE1hcENvbnRhaW5lci5kaXNwbGF5TmFtZSA9ICdNYXBDb250YWluZXInO1xuXG4gIHJldHVybiBNYXBDb250YWluZXI7XG59XG4iXX0=