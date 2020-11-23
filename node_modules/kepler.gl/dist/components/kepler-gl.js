"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _window = require("global/window");

var _redux = require("redux");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reselect = require("reselect");

var _keplerglConnect = require("../connect/keplergl-connect");

var _reactIntl = require("react-intl");

var _localization = require("../localization");

var _context = require("./context");

var VisStateActions = _interopRequireWildcard(require("../actions/vis-state-actions"));

var MapStateActions = _interopRequireWildcard(require("../actions/map-state-actions"));

var MapStyleActions = _interopRequireWildcard(require("../actions/map-style-actions"));

var UIStateActions = _interopRequireWildcard(require("../actions/ui-state-actions"));

var ProviderActions = _interopRequireWildcard(require("../actions/provider-actions"));

var _defaultSettings = require("../constants/default-settings");

var _userFeedbacks = require("../constants/user-feedbacks");

var _sidePanel = _interopRequireDefault(require("./side-panel"));

var _mapContainer = _interopRequireDefault(require("./map-container"));

var _bottomWidget = _interopRequireDefault(require("./bottom-widget"));

var _modalContainer = _interopRequireDefault(require("./modal-container"));

var _plotContainer = _interopRequireDefault(require("./plot-container"));

var _notificationPanel = _interopRequireDefault(require("./notification-panel"));

var _geocoderPanel = _interopRequireDefault(require("./geocoder-panel"));

var _utils = require("../utils/utils");

var _mapboxUtils = require("../utils/mapbox-utils");

var _base = require("../styles/base");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n\n  *,\n  *:before,\n  *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n\n  .mapboxgl-ctrl .mapboxgl-ctrl-logo {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Maybe we should think about exporting this or creating a variable
// as part of the base.js theme
var GlobalStyle = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.fontWeight;
}, function (props) {
  return props.theme.fontSize;
}, function (props) {
  return props.theme.lineHeight;
}, function (props) {
  return props.theme.labelColor;
});

KeplerGlFactory.deps = [_bottomWidget["default"], _geocoderPanel["default"], _mapContainer["default"], _modalContainer["default"], _sidePanel["default"], _plotContainer["default"], _notificationPanel["default"]];

function KeplerGlFactory(BottomWidget, GeoCoderPanel, MapContainer, ModalContainer, SidePanel, PlotContainer, NotificationPanel) {
  /** @typedef {import('./kepler-gl').KeplerGlProps} KeplerGlProps */

  /** @augments React.Component<KeplerGlProps> */
  var KeplerGL =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(KeplerGL, _Component);

    function KeplerGL() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, KeplerGL);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(KeplerGL)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "themeSelector", function (props) {
        return props.theme;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableThemeSelector", (0, _reselect.createSelector)(_this.themeSelector, function (theme) {
        return (0, _typeof2["default"])(theme) === 'object' ? _objectSpread({}, _base.theme, {}, theme) : theme === _defaultSettings.THEME.light ? _base.themeLT : theme === _defaultSettings.THEME.base ? _base.themeBS : theme;
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableProviders", (0, _reselect.createSelector)(function (props) {
        return props.cloudProviders;
      }, function (providers) {
        return Array.isArray(providers) && providers.length ? {
          hasStorage: providers.some(function (p) {
            return p.hasPrivateStorage();
          }),
          hasShare: providers.some(function (p) {
            return p.hasSharingUrl();
          })
        } : {};
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_loadMapStyle", function () {
        var defaultStyles = Object.values(_this.props.mapStyle.mapStyles); // add id to custom map styles if not given

        var customStyles = (_this.props.mapStyles || []).map(function (ms) {
          return _objectSpread({}, ms, {
            id: ms.id || (0, _utils.generateHashId)()
          });
        });
        var allStyles = [].concat((0, _toConsumableArray2["default"])(customStyles), (0, _toConsumableArray2["default"])(defaultStyles)).reduce(function (accu, style) {
          var hasStyleObject = style.style && (0, _typeof2["default"])(style.style) === 'object';
          accu[hasStyleObject ? 'toLoad' : 'toRequest'][style.id] = style;
          return accu;
        }, {
          toLoad: {},
          toRequest: {}
        });

        _this.props.mapStyleActions.loadMapStyles(allStyles.toLoad);

        _this.props.mapStyleActions.requestMapStyles(allStyles.toRequest);
      });
      return _this;
    }

    (0, _createClass2["default"])(KeplerGL, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._validateMapboxToken();

        this._loadMapStyle(this.props.mapStyles);

        this._handleResize(this.props);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if ( // if dimension props has changed
        this.props.height !== prevProps.height || this.props.width !== prevProps.width || // react-map-gl will dispatch updateViewport after this._handleResize is called
        // here we check if this.props.mapState.height is sync with props.height
        this.props.height !== this.props.mapState.height) {
          this._handleResize(this.props);
        }
      }
    }, {
      key: "_validateMapboxToken",

      /* private methods */
      value: function _validateMapboxToken() {
        var mapboxApiAccessToken = this.props.mapboxApiAccessToken;

        if (!(0, _mapboxUtils.validateToken)(mapboxApiAccessToken)) {
          _window.console.warn(_userFeedbacks.MISSING_MAPBOX_TOKEN);
        }
      }
    }, {
      key: "_handleResize",
      value: function _handleResize(_ref) {
        var width = _ref.width,
            height = _ref.height;

        if (!Number.isFinite(width) || !Number.isFinite(height)) {
          _window.console.warn('width and height is required');

          return;
        }

        this.props.mapStateActions.updateMap({
          width: width / (1 + Number(this.props.mapState.isSplit)),
          height: height
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            id = _this$props.id,
            appName = _this$props.appName,
            version = _this$props.version,
            appWebsite = _this$props.appWebsite,
            onSaveMap = _this$props.onSaveMap,
            onViewStateChange = _this$props.onViewStateChange,
            onDeckInitialized = _this$props.onDeckInitialized,
            width = _this$props.width,
            height = _this$props.height,
            mapboxApiAccessToken = _this$props.mapboxApiAccessToken,
            mapboxApiUrl = _this$props.mapboxApiUrl,
            getMapboxRef = _this$props.getMapboxRef,
            deckGlProps = _this$props.deckGlProps,
            mapStyle = _this$props.mapStyle,
            mapState = _this$props.mapState,
            uiState = _this$props.uiState,
            visState = _this$props.visState,
            providerState = _this$props.providerState,
            visStateActions = _this$props.visStateActions,
            mapStateActions = _this$props.mapStateActions,
            mapStyleActions = _this$props.mapStyleActions,
            uiStateActions = _this$props.uiStateActions,
            providerActions = _this$props.providerActions,
            readOnly = _this$props.readOnly;
        var availableProviders = this.availableProviders(this.props);
        var filters = visState.filters,
            layers = visState.layers,
            splitMaps = visState.splitMaps,
            layerOrder = visState.layerOrder,
            layerBlending = visState.layerBlending,
            layerClasses = visState.layerClasses,
            interactionConfig = visState.interactionConfig,
            datasets = visState.datasets,
            layerData = visState.layerData,
            hoverInfo = visState.hoverInfo,
            clicked = visState.clicked,
            mousePos = visState.mousePos,
            animationConfig = visState.animationConfig,
            mapInfo = visState.mapInfo;
        var notificationPanelFields = {
          removeNotification: uiStateActions.removeNotification,
          notifications: uiState.notifications
        };
        var sideFields = {
          appName: appName,
          version: version,
          appWebsite: appWebsite,
          datasets: datasets,
          filters: filters,
          layers: layers,
          layerOrder: layerOrder,
          layerClasses: layerClasses,
          interactionConfig: interactionConfig,
          mapStyle: mapStyle,
          mapInfo: mapInfo,
          layerBlending: layerBlending,
          onSaveMap: onSaveMap,
          uiState: uiState,
          mapStyleActions: mapStyleActions,
          visStateActions: visStateActions,
          uiStateActions: uiStateActions,
          width: this.props.sidePanelWidth,
          availableProviders: availableProviders,
          mapSaved: providerState.mapSaved
        };
        var mapFields = {
          datasets: datasets,
          getMapboxRef: getMapboxRef,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          mapState: mapState,
          uiState: uiState,
          editor: visState.editor,
          mapStyle: mapStyle,
          mapControls: uiState.mapControls,
          layers: layers,
          layerOrder: layerOrder,
          layerData: layerData,
          layerBlending: layerBlending,
          filters: filters,
          interactionConfig: interactionConfig,
          hoverInfo: hoverInfo,
          clicked: clicked,
          mousePos: mousePos,
          readOnly: uiState.readOnly,
          onDeckInitialized: onDeckInitialized,
          onViewStateChange: onViewStateChange,
          uiStateActions: uiStateActions,
          visStateActions: visStateActions,
          mapStateActions: mapStateActions,
          animationConfig: animationConfig,
          deckGlProps: deckGlProps
        };
        var isSplit = splitMaps && splitMaps.length > 1;
        var containerW = mapState.width * (Number(isSplit) + 1);
        var mapContainers = !isSplit ? [_react["default"].createElement(MapContainer, (0, _extends2["default"])({
          key: 0,
          index: 0
        }, mapFields, {
          mapLayers: null
        }))] : splitMaps.map(function (settings, index) {
          return _react["default"].createElement(MapContainer, (0, _extends2["default"])({
            key: index,
            index: index
          }, mapFields, {
            mapLayers: splitMaps[index].layers
          }));
        });
        var isExportingImage = uiState.exportImage.exporting;
        var theme = this.availableThemeSelector(this.props);
        return _react["default"].createElement(_context.RootContext.Provider, {
          value: this.root
        }, _react["default"].createElement(_reactIntl.IntlProvider, {
          locale: uiState.locale,
          messages: _localization.messages[uiState.locale]
        }, _react["default"].createElement(_styledComponents.ThemeProvider, {
          theme: theme
        }, _react["default"].createElement(GlobalStyle, {
          width: width,
          height: height,
          className: "kepler-gl",
          id: "kepler-gl__".concat(id),
          ref: this.root
        }, _react["default"].createElement(NotificationPanel, notificationPanelFields), !uiState.readOnly && !readOnly && _react["default"].createElement(SidePanel, sideFields), _react["default"].createElement("div", {
          className: "maps",
          style: {
            display: 'flex'
          }
        }, mapContainers), isExportingImage && _react["default"].createElement(PlotContainer, {
          width: width,
          height: height,
          exportImageSetting: uiState.exportImage,
          mapFields: mapFields,
          addNotification: uiStateActions.addNotification,
          setExportImageSetting: uiStateActions.setExportImageSetting,
          setExportImageDataUri: uiStateActions.setExportImageDataUri,
          setExportImageError: uiStateActions.setExportImageError,
          splitMaps: splitMaps
        }), interactionConfig.geocoder.enabled && _react["default"].createElement(GeoCoderPanel, {
          isGeocoderEnabled: interactionConfig.geocoder.enabled,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapState: mapState,
          updateVisData: visStateActions.updateVisData,
          removeDataset: visStateActions.removeDataset,
          updateMap: mapStateActions.updateMap
        }), _react["default"].createElement(BottomWidget, {
          filters: filters,
          datasets: datasets,
          uiState: uiState,
          layers: layers,
          animationConfig: animationConfig,
          visStateActions: visStateActions,
          sidePanelWidth: uiState.readOnly ? 0 : this.props.sidePanelWidth + theme.sidePanel.margin.left,
          containerW: containerW
        }), _react["default"].createElement(ModalContainer, {
          mapStyle: mapStyle,
          visState: visState,
          mapState: mapState,
          uiState: uiState,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          visStateActions: visStateActions,
          uiStateActions: uiStateActions,
          mapStyleActions: mapStyleActions,
          providerActions: providerActions,
          rootNode: this.root.current,
          containerW: containerW,
          containerH: mapState.height,
          providerState: this.props.providerState // User defined cloud provider props
          ,
          cloudProviders: this.props.cloudProviders,
          onExportToCloudSuccess: this.props.onExportToCloudSuccess,
          onLoadCloudMapSuccess: this.props.onLoadCloudMapSuccess,
          onLoadCloudMapError: this.props.onLoadCloudMapError,
          onExportToCloudError: this.props.onExportToCloudError
        })))));
      }
    }]);
    return KeplerGL;
  }(_react.Component);

  (0, _defineProperty2["default"])(KeplerGL, "defaultProps", {
    mapStyles: [],
    mapStylesReplaceDefault: false,
    mapboxApiUrl: _defaultSettings.DEFAULT_MAPBOX_API_URL,
    width: 800,
    height: 800,
    appName: _defaultSettings.KEPLER_GL_NAME,
    version: _defaultSettings.KEPLER_GL_VERSION,
    sidePanelWidth: _defaultSettings.DIMENSIONS.sidePanel.width,
    theme: {},
    cloudProviders: [],
    readOnly: false
  });
  (0, _defineProperty2["default"])(KeplerGL, "contextType", _context.RootContext);
  return (0, _keplerglConnect.connect)(mapStateToProps, makeMapDispatchToProps)((0, _styledComponents.withTheme)(KeplerGL));
}

function mapStateToProps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = arguments.length > 1 ? arguments[1] : undefined;
  return _objectSpread({}, props, {
    visState: state.visState,
    mapStyle: state.mapStyle,
    mapState: state.mapState,
    uiState: state.uiState,
    providerState: state.providerState
  });
}

var defaultUserActions = {};

var getDispatch = function getDispatch(dispatch) {
  return dispatch;
};

var getUserActions = function getUserActions(dispatch, props) {
  return props.actions || defaultUserActions;
};

function makeGetActionCreators() {
  return (0, _reselect.createSelector)([getDispatch, getUserActions], function (dispatch, userActions) {
    var _map = [VisStateActions, MapStateActions, MapStyleActions, UIStateActions, ProviderActions].map(function (actions) {
      return (0, _redux.bindActionCreators)(mergeActions(actions, userActions), dispatch);
    }),
        _map2 = (0, _slicedToArray2["default"])(_map, 5),
        visStateActions = _map2[0],
        mapStateActions = _map2[1],
        mapStyleActions = _map2[2],
        uiStateActions = _map2[3],
        providerActions = _map2[4];

    return {
      visStateActions: visStateActions,
      mapStateActions: mapStateActions,
      mapStyleActions: mapStyleActions,
      uiStateActions: uiStateActions,
      providerActions: providerActions,
      dispatch: dispatch
    };
  });
}

function makeMapDispatchToProps() {
  var getActionCreators = makeGetActionCreators();

  var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    var groupedActionCreators = getActionCreators(dispatch, ownProps);
    return _objectSpread({}, groupedActionCreators, {
      dispatch: dispatch
    });
  };

  return mapDispatchToProps;
}
/**
 * Override default kepler.gl actions with user defined actions using the same key
 */


function mergeActions(actions, userActions) {
  var overrides = {};

  for (var key in userActions) {
    if (userActions.hasOwnProperty(key) && actions.hasOwnProperty(key)) {
      overrides[key] = userActions[key];
    }
  }

  return _objectSpread({}, actions, {}, overrides);
}

var _default = KeplerGlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2tlcGxlci1nbC5qcyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxhYmVsQ29sb3IiLCJLZXBsZXJHbEZhY3RvcnkiLCJkZXBzIiwiQm90dG9tV2lkZ2V0RmFjdG9yeSIsIkdlb0NvZGVyUGFuZWxGYWN0b3J5IiwiTWFwQ29udGFpbmVyRmFjdG9yeSIsIk1vZGFsQ29udGFpbmVyRmFjdG9yeSIsIlNpZGVQYW5lbEZhY3RvcnkiLCJQbG90Q29udGFpbmVyRmFjdG9yeSIsIk5vdGlmaWNhdGlvblBhbmVsRmFjdG9yeSIsIkJvdHRvbVdpZGdldCIsIkdlb0NvZGVyUGFuZWwiLCJNYXBDb250YWluZXIiLCJNb2RhbENvbnRhaW5lciIsIlNpZGVQYW5lbCIsIlBsb3RDb250YWluZXIiLCJOb3RpZmljYXRpb25QYW5lbCIsIktlcGxlckdMIiwidGhlbWVTZWxlY3RvciIsImJhc2ljVGhlbWUiLCJUSEVNRSIsImxpZ2h0IiwidGhlbWVMVCIsImJhc2UiLCJ0aGVtZUJTIiwiY2xvdWRQcm92aWRlcnMiLCJwcm92aWRlcnMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJoYXNTdG9yYWdlIiwic29tZSIsInAiLCJoYXNQcml2YXRlU3RvcmFnZSIsImhhc1NoYXJlIiwiaGFzU2hhcmluZ1VybCIsImRlZmF1bHRTdHlsZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXBTdHlsZSIsIm1hcFN0eWxlcyIsImN1c3RvbVN0eWxlcyIsIm1hcCIsIm1zIiwiaWQiLCJhbGxTdHlsZXMiLCJyZWR1Y2UiLCJhY2N1Iiwic3R5bGUiLCJoYXNTdHlsZU9iamVjdCIsInRvTG9hZCIsInRvUmVxdWVzdCIsIm1hcFN0eWxlQWN0aW9ucyIsImxvYWRNYXBTdHlsZXMiLCJyZXF1ZXN0TWFwU3R5bGVzIiwiX3ZhbGlkYXRlTWFwYm94VG9rZW4iLCJfbG9hZE1hcFN0eWxlIiwiX2hhbmRsZVJlc2l6ZSIsInByZXZQcm9wcyIsImhlaWdodCIsIndpZHRoIiwibWFwU3RhdGUiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsIkNvbnNvbGUiLCJ3YXJuIiwiTUlTU0lOR19NQVBCT1hfVE9LRU4iLCJOdW1iZXIiLCJpc0Zpbml0ZSIsIm1hcFN0YXRlQWN0aW9ucyIsInVwZGF0ZU1hcCIsImlzU3BsaXQiLCJhcHBOYW1lIiwidmVyc2lvbiIsImFwcFdlYnNpdGUiLCJvblNhdmVNYXAiLCJvblZpZXdTdGF0ZUNoYW5nZSIsIm9uRGVja0luaXRpYWxpemVkIiwibWFwYm94QXBpVXJsIiwiZ2V0TWFwYm94UmVmIiwiZGVja0dsUHJvcHMiLCJ1aVN0YXRlIiwidmlzU3RhdGUiLCJwcm92aWRlclN0YXRlIiwidmlzU3RhdGVBY3Rpb25zIiwidWlTdGF0ZUFjdGlvbnMiLCJwcm92aWRlckFjdGlvbnMiLCJyZWFkT25seSIsImF2YWlsYWJsZVByb3ZpZGVycyIsImZpbHRlcnMiLCJsYXllcnMiLCJzcGxpdE1hcHMiLCJsYXllck9yZGVyIiwibGF5ZXJCbGVuZGluZyIsImxheWVyQ2xhc3NlcyIsImludGVyYWN0aW9uQ29uZmlnIiwiZGF0YXNldHMiLCJsYXllckRhdGEiLCJob3ZlckluZm8iLCJjbGlja2VkIiwibW91c2VQb3MiLCJhbmltYXRpb25Db25maWciLCJtYXBJbmZvIiwibm90aWZpY2F0aW9uUGFuZWxGaWVsZHMiLCJyZW1vdmVOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25zIiwic2lkZUZpZWxkcyIsInNpZGVQYW5lbFdpZHRoIiwibWFwU2F2ZWQiLCJtYXBGaWVsZHMiLCJlZGl0b3IiLCJtYXBDb250cm9scyIsImNvbnRhaW5lclciLCJtYXBDb250YWluZXJzIiwic2V0dGluZ3MiLCJpbmRleCIsImlzRXhwb3J0aW5nSW1hZ2UiLCJleHBvcnRJbWFnZSIsImV4cG9ydGluZyIsImF2YWlsYWJsZVRoZW1lU2VsZWN0b3IiLCJyb290IiwibG9jYWxlIiwibWVzc2FnZXMiLCJkaXNwbGF5IiwiYWRkTm90aWZpY2F0aW9uIiwic2V0RXhwb3J0SW1hZ2VTZXR0aW5nIiwic2V0RXhwb3J0SW1hZ2VEYXRhVXJpIiwic2V0RXhwb3J0SW1hZ2VFcnJvciIsImdlb2NvZGVyIiwiZW5hYmxlZCIsInVwZGF0ZVZpc0RhdGEiLCJyZW1vdmVEYXRhc2V0Iiwic2lkZVBhbmVsIiwibWFyZ2luIiwibGVmdCIsImN1cnJlbnQiLCJvbkV4cG9ydFRvQ2xvdWRTdWNjZXNzIiwib25Mb2FkQ2xvdWRNYXBTdWNjZXNzIiwib25Mb2FkQ2xvdWRNYXBFcnJvciIsIm9uRXhwb3J0VG9DbG91ZEVycm9yIiwiQ29tcG9uZW50IiwibWFwU3R5bGVzUmVwbGFjZURlZmF1bHQiLCJERUZBVUxUX01BUEJPWF9BUElfVVJMIiwiS0VQTEVSX0dMX05BTUUiLCJLRVBMRVJfR0xfVkVSU0lPTiIsIkRJTUVOU0lPTlMiLCJSb290Q29udGV4dCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1ha2VNYXBEaXNwYXRjaFRvUHJvcHMiLCJzdGF0ZSIsImRlZmF1bHRVc2VyQWN0aW9ucyIsImdldERpc3BhdGNoIiwiZGlzcGF0Y2giLCJnZXRVc2VyQWN0aW9ucyIsImFjdGlvbnMiLCJtYWtlR2V0QWN0aW9uQ3JlYXRvcnMiLCJ1c2VyQWN0aW9ucyIsIlZpc1N0YXRlQWN0aW9ucyIsIk1hcFN0YXRlQWN0aW9ucyIsIk1hcFN0eWxlQWN0aW9ucyIsIlVJU3RhdGVBY3Rpb25zIiwiUHJvdmlkZXJBY3Rpb25zIiwibWVyZ2VBY3Rpb25zIiwiZ2V0QWN0aW9uQ3JlYXRvcnMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJvd25Qcm9wcyIsImdyb3VwZWRBY3Rpb25DcmVhdG9ycyIsIm92ZXJyaWRlcyIsImtleSIsImhhc093blByb3BlcnR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFD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Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgc3R5bGVkLCB7VGhlbWVQcm92aWRlciwgd2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQge2Nvbm5lY3QgYXMga2VwbGVyR2xDb25uZWN0fSBmcm9tICdjb25uZWN0L2tlcGxlcmdsLWNvbm5lY3QnO1xuaW1wb3J0IHtJbnRsUHJvdmlkZXJ9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi4vbG9jYWxpemF0aW9uJztcbmltcG9ydCB7Um9vdENvbnRleHR9IGZyb20gJ2NvbXBvbmVudHMvY29udGV4dCc7XG5cbmltcG9ydCAqIGFzIFZpc1N0YXRlQWN0aW9ucyBmcm9tICdhY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zJztcbmltcG9ydCAqIGFzIE1hcFN0YXRlQWN0aW9ucyBmcm9tICdhY3Rpb25zL21hcC1zdGF0ZS1hY3Rpb25zJztcbmltcG9ydCAqIGFzIE1hcFN0eWxlQWN0aW9ucyBmcm9tICdhY3Rpb25zL21hcC1zdHlsZS1hY3Rpb25zJztcbmltcG9ydCAqIGFzIFVJU3RhdGVBY3Rpb25zIGZyb20gJ2FjdGlvbnMvdWktc3RhdGUtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBQcm92aWRlckFjdGlvbnMgZnJvbSAnYWN0aW9ucy9wcm92aWRlci1hY3Rpb25zJztcblxuaW1wb3J0IHtcbiAgRElNRU5TSU9OUyxcbiAgS0VQTEVSX0dMX05BTUUsXG4gIEtFUExFUl9HTF9WRVJTSU9OLFxuICBUSEVNRSxcbiAgREVGQVVMVF9NQVBCT1hfQVBJX1VSTFxufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge01JU1NJTkdfTUFQQk9YX1RPS0VOfSBmcm9tICdjb25zdGFudHMvdXNlci1mZWVkYmFja3MnO1xuXG5pbXBvcnQgU2lkZVBhbmVsRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwnO1xuaW1wb3J0IE1hcENvbnRhaW5lckZhY3RvcnkgZnJvbSAnLi9tYXAtY29udGFpbmVyJztcbmltcG9ydCBCb3R0b21XaWRnZXRGYWN0b3J5IGZyb20gJy4vYm90dG9tLXdpZGdldCc7XG5pbXBvcnQgTW9kYWxDb250YWluZXJGYWN0b3J5IGZyb20gJy4vbW9kYWwtY29udGFpbmVyJztcbmltcG9ydCBQbG90Q29udGFpbmVyRmFjdG9yeSBmcm9tICcuL3Bsb3QtY29udGFpbmVyJztcbmltcG9ydCBOb3RpZmljYXRpb25QYW5lbEZhY3RvcnkgZnJvbSAnLi9ub3RpZmljYXRpb24tcGFuZWwnO1xuaW1wb3J0IEdlb0NvZGVyUGFuZWxGYWN0b3J5IGZyb20gJy4vZ2VvY29kZXItcGFuZWwnO1xuXG5pbXBvcnQge2dlbmVyYXRlSGFzaElkfSBmcm9tICd1dGlscy91dGlscyc7XG5pbXBvcnQge3ZhbGlkYXRlVG9rZW59IGZyb20gJ3V0aWxzL21hcGJveC11dGlscyc7XG5cbmltcG9ydCB7dGhlbWUgYXMgYmFzaWNUaGVtZSwgdGhlbWVMVCwgdGhlbWVCU30gZnJvbSAnc3R5bGVzL2Jhc2UnO1xuXG4vLyBNYXliZSB3ZSBzaG91bGQgdGhpbmsgYWJvdXQgZXhwb3J0aW5nIHRoaXMgb3IgY3JlYXRpbmcgYSB2YXJpYWJsZVxuLy8gYXMgcGFydCBvZiB0aGUgYmFzZS5qcyB0aGVtZVxuY29uc3QgR2xvYmFsU3R5bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250RmFtaWx5fTtcbiAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFdlaWdodH07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250U2l6ZX07XG4gIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmVIZWlnaHR9O1xuXG4gICosXG4gICo6YmVmb3JlLFxuICAqOmFmdGVyIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBsaSB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICB9XG5cbiAgLm1hcGJveGdsLWN0cmwgLm1hcGJveGdsLWN0cmwtbG9nbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuS2VwbGVyR2xGYWN0b3J5LmRlcHMgPSBbXG4gIEJvdHRvbVdpZGdldEZhY3RvcnksXG4gIEdlb0NvZGVyUGFuZWxGYWN0b3J5LFxuICBNYXBDb250YWluZXJGYWN0b3J5LFxuICBNb2RhbENvbnRhaW5lckZhY3RvcnksXG4gIFNpZGVQYW5lbEZhY3RvcnksXG4gIFBsb3RDb250YWluZXJGYWN0b3J5LFxuICBOb3RpZmljYXRpb25QYW5lbEZhY3Rvcnlcbl07XG5cbmZ1bmN0aW9uIEtlcGxlckdsRmFjdG9yeShcbiAgQm90dG9tV2lkZ2V0LFxuICBHZW9Db2RlclBhbmVsLFxuICBNYXBDb250YWluZXIsXG4gIE1vZGFsQ29udGFpbmVyLFxuICBTaWRlUGFuZWwsXG4gIFBsb3RDb250YWluZXIsXG4gIE5vdGlmaWNhdGlvblBhbmVsXG4pIHtcbiAgLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4va2VwbGVyLWdsJykuS2VwbGVyR2xQcm9wc30gS2VwbGVyR2xQcm9wcyAqL1xuICAvKiogQGF1Z21lbnRzIFJlYWN0LkNvbXBvbmVudDxLZXBsZXJHbFByb3BzPiAqL1xuICBjbGFzcyBLZXBsZXJHTCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIG1hcFN0eWxlczogW10sXG4gICAgICBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdDogZmFsc2UsXG4gICAgICBtYXBib3hBcGlVcmw6IERFRkFVTFRfTUFQQk9YX0FQSV9VUkwsXG4gICAgICB3aWR0aDogODAwLFxuICAgICAgaGVpZ2h0OiA4MDAsXG4gICAgICBhcHBOYW1lOiBLRVBMRVJfR0xfTkFNRSxcbiAgICAgIHZlcnNpb246IEtFUExFUl9HTF9WRVJTSU9OLFxuICAgICAgc2lkZVBhbmVsV2lkdGg6IERJTUVOU0lPTlMuc2lkZVBhbmVsLndpZHRoLFxuICAgICAgdGhlbWU6IHt9LFxuICAgICAgY2xvdWRQcm92aWRlcnM6IFtdLFxuICAgICAgcmVhZE9ubHk6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5fdmFsaWRhdGVNYXBib3hUb2tlbigpO1xuICAgICAgdGhpcy5fbG9hZE1hcFN0eWxlKHRoaXMucHJvcHMubWFwU3R5bGVzKTtcbiAgICAgIHRoaXMuX2hhbmRsZVJlc2l6ZSh0aGlzLnByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIGlmIGRpbWVuc2lvbiBwcm9wcyBoYXMgY2hhbmdlZFxuICAgICAgICB0aGlzLnByb3BzLmhlaWdodCAhPT0gcHJldlByb3BzLmhlaWdodCB8fFxuICAgICAgICB0aGlzLnByb3BzLndpZHRoICE9PSBwcmV2UHJvcHMud2lkdGggfHxcbiAgICAgICAgLy8gcmVhY3QtbWFwLWdsIHdpbGwgZGlzcGF0Y2ggdXBkYXRlVmlld3BvcnQgYWZ0ZXIgdGhpcy5faGFuZGxlUmVzaXplIGlzIGNhbGxlZFxuICAgICAgICAvLyBoZXJlIHdlIGNoZWNrIGlmIHRoaXMucHJvcHMubWFwU3RhdGUuaGVpZ2h0IGlzIHN5bmMgd2l0aCBwcm9wcy5oZWlnaHRcbiAgICAgICAgdGhpcy5wcm9wcy5oZWlnaHQgIT09IHRoaXMucHJvcHMubWFwU3RhdGUuaGVpZ2h0XG4gICAgICApIHtcbiAgICAgICAgdGhpcy5faGFuZGxlUmVzaXplKHRoaXMucHJvcHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJvb3QgPSBjcmVhdGVSZWYoKTtcbiAgICBzdGF0aWMgY29udGV4dFR5cGUgPSBSb290Q29udGV4dDtcblxuICAgIC8qIHNlbGVjdG9ycyAqL1xuICAgIHRoZW1lU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy50aGVtZTtcbiAgICBhdmFpbGFibGVUaGVtZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy50aGVtZVNlbGVjdG9yLCB0aGVtZSA9PlxuICAgICAgdHlwZW9mIHRoZW1lID09PSAnb2JqZWN0J1xuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLmJhc2ljVGhlbWUsXG4gICAgICAgICAgICAuLi50aGVtZVxuICAgICAgICAgIH1cbiAgICAgICAgOiB0aGVtZSA9PT0gVEhFTUUubGlnaHRcbiAgICAgICAgPyB0aGVtZUxUXG4gICAgICAgIDogdGhlbWUgPT09IFRIRU1FLmJhc2VcbiAgICAgICAgPyB0aGVtZUJTXG4gICAgICAgIDogdGhlbWVcbiAgICApO1xuXG4gICAgYXZhaWxhYmxlUHJvdmlkZXJzID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICBwcm9wcyA9PiBwcm9wcy5jbG91ZFByb3ZpZGVycyxcbiAgICAgIHByb3ZpZGVycyA9PlxuICAgICAgICBBcnJheS5pc0FycmF5KHByb3ZpZGVycykgJiYgcHJvdmlkZXJzLmxlbmd0aFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBoYXNTdG9yYWdlOiBwcm92aWRlcnMuc29tZShwID0+IHAuaGFzUHJpdmF0ZVN0b3JhZ2UoKSksXG4gICAgICAgICAgICAgIGhhc1NoYXJlOiBwcm92aWRlcnMuc29tZShwID0+IHAuaGFzU2hhcmluZ1VybCgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge31cbiAgICApO1xuXG4gICAgLyogcHJpdmF0ZSBtZXRob2RzICovXG4gICAgX3ZhbGlkYXRlTWFwYm94VG9rZW4oKSB7XG4gICAgICBjb25zdCB7bWFwYm94QXBpQWNjZXNzVG9rZW59ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmICghdmFsaWRhdGVUb2tlbihtYXBib3hBcGlBY2Nlc3NUb2tlbikpIHtcbiAgICAgICAgQ29uc29sZS53YXJuKE1JU1NJTkdfTUFQQk9YX1RPS0VOKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFuZGxlUmVzaXplKHt3aWR0aCwgaGVpZ2h0fSkge1xuICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUod2lkdGgpIHx8ICFOdW1iZXIuaXNGaW5pdGUoaGVpZ2h0KSkge1xuICAgICAgICBDb25zb2xlLndhcm4oJ3dpZHRoIGFuZCBoZWlnaHQgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5tYXBTdGF0ZUFjdGlvbnMudXBkYXRlTWFwKHtcbiAgICAgICAgd2lkdGg6IHdpZHRoIC8gKDEgKyBOdW1iZXIodGhpcy5wcm9wcy5tYXBTdGF0ZS5pc1NwbGl0KSksXG4gICAgICAgIGhlaWdodFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2xvYWRNYXBTdHlsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRlZmF1bHRTdHlsZXMgPSBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMubWFwU3R5bGUubWFwU3R5bGVzKTtcbiAgICAgIC8vIGFkZCBpZCB0byBjdXN0b20gbWFwIHN0eWxlcyBpZiBub3QgZ2l2ZW5cbiAgICAgIGNvbnN0IGN1c3RvbVN0eWxlcyA9ICh0aGlzLnByb3BzLm1hcFN0eWxlcyB8fCBbXSkubWFwKG1zID0+ICh7XG4gICAgICAgIC4uLm1zLFxuICAgICAgICBpZDogbXMuaWQgfHwgZ2VuZXJhdGVIYXNoSWQoKVxuICAgICAgfSkpO1xuXG4gICAgICBjb25zdCBhbGxTdHlsZXMgPSBbLi4uY3VzdG9tU3R5bGVzLCAuLi5kZWZhdWx0U3R5bGVzXS5yZWR1Y2UoXG4gICAgICAgIChhY2N1LCBzdHlsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGhhc1N0eWxlT2JqZWN0ID0gc3R5bGUuc3R5bGUgJiYgdHlwZW9mIHN0eWxlLnN0eWxlID09PSAnb2JqZWN0JztcbiAgICAgICAgICBhY2N1W2hhc1N0eWxlT2JqZWN0ID8gJ3RvTG9hZCcgOiAndG9SZXF1ZXN0J11bc3R5bGUuaWRdID0gc3R5bGU7XG5cbiAgICAgICAgICByZXR1cm4gYWNjdTtcbiAgICAgICAgfSxcbiAgICAgICAge3RvTG9hZDoge30sIHRvUmVxdWVzdDoge319XG4gICAgICApO1xuXG4gICAgICB0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5sb2FkTWFwU3R5bGVzKGFsbFN0eWxlcy50b0xvYWQpO1xuICAgICAgdGhpcy5wcm9wcy5tYXBTdHlsZUFjdGlvbnMucmVxdWVzdE1hcFN0eWxlcyhhbGxTdHlsZXMudG9SZXF1ZXN0KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICAvLyBwcm9wc1xuICAgICAgICBpZCxcbiAgICAgICAgYXBwTmFtZSxcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgYXBwV2Vic2l0ZSxcbiAgICAgICAgb25TYXZlTWFwLFxuICAgICAgICBvblZpZXdTdGF0ZUNoYW5nZSxcbiAgICAgICAgb25EZWNrSW5pdGlhbGl6ZWQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBtYXBib3hBcGlVcmwsXG4gICAgICAgIGdldE1hcGJveFJlZixcbiAgICAgICAgZGVja0dsUHJvcHMsXG5cbiAgICAgICAgLy8gcmVkdXggc3RhdGVcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICB2aXNTdGF0ZSxcbiAgICAgICAgcHJvdmlkZXJTdGF0ZSxcblxuICAgICAgICAvLyBhY3Rpb25zLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcFN0YXRlQWN0aW9ucyxcbiAgICAgICAgbWFwU3R5bGVBY3Rpb25zLFxuICAgICAgICB1aVN0YXRlQWN0aW9ucyxcbiAgICAgICAgcHJvdmlkZXJBY3Rpb25zLFxuXG4gICAgICAgIC8vIHJlYWRPbmx5IG92ZXJyaWRlXG4gICAgICAgIHJlYWRPbmx5XG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgYXZhaWxhYmxlUHJvdmlkZXJzID0gdGhpcy5hdmFpbGFibGVQcm92aWRlcnModGhpcy5wcm9wcyk7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBzcGxpdE1hcHMsIC8vIHRoaXMgd2lsbCBzdG9yZSBzdXBwb3J0IGZvciBzcGxpdCBtYXAgdmlldyBpcyBuZWNlc3NhcnlcbiAgICAgICAgbGF5ZXJPcmRlcixcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcbiAgICAgICAgbGF5ZXJDbGFzc2VzLFxuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIGxheWVyRGF0YSxcbiAgICAgICAgaG92ZXJJbmZvLFxuICAgICAgICBjbGlja2VkLFxuICAgICAgICBtb3VzZVBvcyxcbiAgICAgICAgYW5pbWF0aW9uQ29uZmlnLFxuICAgICAgICBtYXBJbmZvXG4gICAgICB9ID0gdmlzU3RhdGU7XG5cbiAgICAgIGNvbnN0IG5vdGlmaWNhdGlvblBhbmVsRmllbGRzID0ge1xuICAgICAgICByZW1vdmVOb3RpZmljYXRpb246IHVpU3RhdGVBY3Rpb25zLnJlbW92ZU5vdGlmaWNhdGlvbixcbiAgICAgICAgbm90aWZpY2F0aW9uczogdWlTdGF0ZS5ub3RpZmljYXRpb25zXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzaWRlRmllbGRzID0ge1xuICAgICAgICBhcHBOYW1lLFxuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBhcHBXZWJzaXRlLFxuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBsYXllck9yZGVyLFxuICAgICAgICBsYXllckNsYXNzZXMsXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICBtYXBTdHlsZSxcbiAgICAgICAgbWFwSW5mbyxcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcbiAgICAgICAgb25TYXZlTWFwLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICBtYXBTdHlsZUFjdGlvbnMsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXG4gICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLnNpZGVQYW5lbFdpZHRoLFxuICAgICAgICBhdmFpbGFibGVQcm92aWRlcnMsXG4gICAgICAgIG1hcFNhdmVkOiBwcm92aWRlclN0YXRlLm1hcFNhdmVkXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBtYXBGaWVsZHMgPSB7XG4gICAgICAgIGRhdGFzZXRzLFxuICAgICAgICBnZXRNYXBib3hSZWYsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBtYXBib3hBcGlVcmwsXG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICBlZGl0b3I6IHZpc1N0YXRlLmVkaXRvcixcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIG1hcENvbnRyb2xzOiB1aVN0YXRlLm1hcENvbnRyb2xzLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIGxheWVyT3JkZXIsXG4gICAgICAgIGxheWVyRGF0YSxcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgIGhvdmVySW5mbyxcbiAgICAgICAgY2xpY2tlZCxcbiAgICAgICAgbW91c2VQb3MsXG4gICAgICAgIHJlYWRPbmx5OiB1aVN0YXRlLnJlYWRPbmx5LFxuICAgICAgICBvbkRlY2tJbml0aWFsaXplZCxcbiAgICAgICAgb25WaWV3U3RhdGVDaGFuZ2UsXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcFN0YXRlQWN0aW9ucyxcbiAgICAgICAgYW5pbWF0aW9uQ29uZmlnLFxuICAgICAgICBkZWNrR2xQcm9wc1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaXNTcGxpdCA9IHNwbGl0TWFwcyAmJiBzcGxpdE1hcHMubGVuZ3RoID4gMTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lclcgPSBtYXBTdGF0ZS53aWR0aCAqIChOdW1iZXIoaXNTcGxpdCkgKyAxKTtcblxuICAgICAgY29uc3QgbWFwQ29udGFpbmVycyA9ICFpc1NwbGl0XG4gICAgICAgID8gWzxNYXBDb250YWluZXIga2V5PXswfSBpbmRleD17MH0gey4uLm1hcEZpZWxkc30gbWFwTGF5ZXJzPXtudWxsfSAvPl1cbiAgICAgICAgOiBzcGxpdE1hcHMubWFwKChzZXR0aW5ncywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxNYXBDb250YWluZXJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICB7Li4ubWFwRmllbGRzfVxuICAgICAgICAgICAgICBtYXBMYXllcnM9e3NwbGl0TWFwc1tpbmRleF0ubGF5ZXJzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKTtcblxuICAgICAgY29uc3QgaXNFeHBvcnRpbmdJbWFnZSA9IHVpU3RhdGUuZXhwb3J0SW1hZ2UuZXhwb3J0aW5nO1xuXG4gICAgICBjb25zdCB0aGVtZSA9IHRoaXMuYXZhaWxhYmxlVGhlbWVTZWxlY3Rvcih0aGlzLnByb3BzKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJvb3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnJvb3R9PlxuICAgICAgICAgIDxJbnRsUHJvdmlkZXIgbG9jYWxlPXt1aVN0YXRlLmxvY2FsZX0gbWVzc2FnZXM9e21lc3NhZ2VzW3VpU3RhdGUubG9jYWxlXX0+XG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICA8R2xvYmFsU3R5bGVcbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia2VwbGVyLWdsXCJcbiAgICAgICAgICAgICAgICBpZD17YGtlcGxlci1nbF9fJHtpZH1gfVxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5yb290fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvblBhbmVsIHsuLi5ub3RpZmljYXRpb25QYW5lbEZpZWxkc30gLz5cbiAgICAgICAgICAgICAgICB7IXVpU3RhdGUucmVhZE9ubHkgJiYgIXJlYWRPbmx5ICYmIDxTaWRlUGFuZWwgey4uLnNpZGVGaWVsZHN9IC8+fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwc1wiIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgICAgICAgICAgICB7bWFwQ29udGFpbmVyc31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7aXNFeHBvcnRpbmdJbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8UGxvdENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICBleHBvcnRJbWFnZVNldHRpbmc9e3VpU3RhdGUuZXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIG1hcEZpZWxkcz17bWFwRmllbGRzfVxuICAgICAgICAgICAgICAgICAgICBhZGROb3RpZmljYXRpb249e3VpU3RhdGVBY3Rpb25zLmFkZE5vdGlmaWNhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgc2V0RXhwb3J0SW1hZ2VTZXR0aW5nPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZVNldHRpbmd9XG4gICAgICAgICAgICAgICAgICAgIHNldEV4cG9ydEltYWdlRGF0YVVyaT17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0SW1hZ2VEYXRhVXJpfVxuICAgICAgICAgICAgICAgICAgICBzZXRFeHBvcnRJbWFnZUVycm9yPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZUVycm9yfVxuICAgICAgICAgICAgICAgICAgICBzcGxpdE1hcHM9e3NwbGl0TWFwc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7aW50ZXJhY3Rpb25Db25maWcuZ2VvY29kZXIuZW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8R2VvQ29kZXJQYW5lbFxuICAgICAgICAgICAgICAgICAgICBpc0dlb2NvZGVyRW5hYmxlZD17aW50ZXJhY3Rpb25Db25maWcuZ2VvY29kZXIuZW5hYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e21hcGJveEFwaUFjY2Vzc1Rva2VufVxuICAgICAgICAgICAgICAgICAgICBtYXBTdGF0ZT17bWFwU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZpc0RhdGE9e3Zpc1N0YXRlQWN0aW9ucy51cGRhdGVWaXNEYXRhfVxuICAgICAgICAgICAgICAgICAgICByZW1vdmVEYXRhc2V0PXt2aXNTdGF0ZUFjdGlvbnMucmVtb3ZlRGF0YXNldH1cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTWFwPXttYXBTdGF0ZUFjdGlvbnMudXBkYXRlTWFwfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxCb3R0b21XaWRnZXRcbiAgICAgICAgICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgICB1aVN0YXRlPXt1aVN0YXRlfVxuICAgICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25Db25maWc9e2FuaW1hdGlvbkNvbmZpZ31cbiAgICAgICAgICAgICAgICAgIHZpc1N0YXRlQWN0aW9ucz17dmlzU3RhdGVBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgc2lkZVBhbmVsV2lkdGg9e1xuICAgICAgICAgICAgICAgICAgICB1aVN0YXRlLnJlYWRPbmx5ID8gMCA6IHRoaXMucHJvcHMuc2lkZVBhbmVsV2lkdGggKyB0aGVtZS5zaWRlUGFuZWwubWFyZ2luLmxlZnRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclc9e2NvbnRhaW5lcld9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TW9kYWxDb250YWluZXJcbiAgICAgICAgICAgICAgICAgIG1hcFN0eWxlPXttYXBTdHlsZX1cbiAgICAgICAgICAgICAgICAgIHZpc1N0YXRlPXt2aXNTdGF0ZX1cbiAgICAgICAgICAgICAgICAgIG1hcFN0YXRlPXttYXBTdGF0ZX1cbiAgICAgICAgICAgICAgICAgIHVpU3RhdGU9e3VpU3RhdGV9XG4gICAgICAgICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17bWFwYm94QXBpQWNjZXNzVG9rZW59XG4gICAgICAgICAgICAgICAgICBtYXBib3hBcGlVcmw9e21hcGJveEFwaVVybH1cbiAgICAgICAgICAgICAgICAgIHZpc1N0YXRlQWN0aW9ucz17dmlzU3RhdGVBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgdWlTdGF0ZUFjdGlvbnM9e3VpU3RhdGVBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgbWFwU3R5bGVBY3Rpb25zPXttYXBTdHlsZUFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICBwcm92aWRlckFjdGlvbnM9e3Byb3ZpZGVyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgIHJvb3ROb2RlPXt0aGlzLnJvb3QuY3VycmVudH1cbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclc9e2NvbnRhaW5lcld9XG4gICAgICAgICAgICAgICAgICBjb250YWluZXJIPXttYXBTdGF0ZS5oZWlnaHR9XG4gICAgICAgICAgICAgICAgICBwcm92aWRlclN0YXRlPXt0aGlzLnByb3BzLnByb3ZpZGVyU3RhdGV9XG4gICAgICAgICAgICAgICAgICAvLyBVc2VyIGRlZmluZWQgY2xvdWQgcHJvdmlkZXIgcHJvcHNcbiAgICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXt0aGlzLnByb3BzLmNsb3VkUHJvdmlkZXJzfVxuICAgICAgICAgICAgICAgICAgb25FeHBvcnRUb0Nsb3VkU3VjY2Vzcz17dGhpcy5wcm9wcy5vbkV4cG9ydFRvQ2xvdWRTdWNjZXNzfVxuICAgICAgICAgICAgICAgICAgb25Mb2FkQ2xvdWRNYXBTdWNjZXNzPXt0aGlzLnByb3BzLm9uTG9hZENsb3VkTWFwU3VjY2Vzc31cbiAgICAgICAgICAgICAgICAgIG9uTG9hZENsb3VkTWFwRXJyb3I9e3RoaXMucHJvcHMub25Mb2FkQ2xvdWRNYXBFcnJvcn1cbiAgICAgICAgICAgICAgICAgIG9uRXhwb3J0VG9DbG91ZEVycm9yPXt0aGlzLnByb3BzLm9uRXhwb3J0VG9DbG91ZEVycm9yfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR2xvYmFsU3R5bGU+XG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgPC9JbnRsUHJvdmlkZXI+XG4gICAgICAgIDwvUm9vdENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBrZXBsZXJHbENvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYWtlTWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoVGhlbWUoS2VwbGVyR0wpKTtcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlID0ge30sIHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgLi4ucHJvcHMsXG4gICAgdmlzU3RhdGU6IHN0YXRlLnZpc1N0YXRlLFxuICAgIG1hcFN0eWxlOiBzdGF0ZS5tYXBTdHlsZSxcbiAgICBtYXBTdGF0ZTogc3RhdGUubWFwU3RhdGUsXG4gICAgdWlTdGF0ZTogc3RhdGUudWlTdGF0ZSxcbiAgICBwcm92aWRlclN0YXRlOiBzdGF0ZS5wcm92aWRlclN0YXRlXG4gIH07XG59XG5cbmNvbnN0IGRlZmF1bHRVc2VyQWN0aW9ucyA9IHt9O1xuY29uc3QgZ2V0RGlzcGF0Y2ggPSBkaXNwYXRjaCA9PiBkaXNwYXRjaDtcbmNvbnN0IGdldFVzZXJBY3Rpb25zID0gKGRpc3BhdGNoLCBwcm9wcykgPT4gcHJvcHMuYWN0aW9ucyB8fCBkZWZhdWx0VXNlckFjdGlvbnM7XG5cbmZ1bmN0aW9uIG1ha2VHZXRBY3Rpb25DcmVhdG9ycygpIHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFtnZXREaXNwYXRjaCwgZ2V0VXNlckFjdGlvbnNdLCAoZGlzcGF0Y2gsIHVzZXJBY3Rpb25zKSA9PiB7XG4gICAgY29uc3QgW3Zpc1N0YXRlQWN0aW9ucywgbWFwU3RhdGVBY3Rpb25zLCBtYXBTdHlsZUFjdGlvbnMsIHVpU3RhdGVBY3Rpb25zLCBwcm92aWRlckFjdGlvbnNdID0gW1xuICAgICAgVmlzU3RhdGVBY3Rpb25zLFxuICAgICAgTWFwU3RhdGVBY3Rpb25zLFxuICAgICAgTWFwU3R5bGVBY3Rpb25zLFxuICAgICAgVUlTdGF0ZUFjdGlvbnMsXG4gICAgICBQcm92aWRlckFjdGlvbnNcbiAgICBdLm1hcChhY3Rpb25zID0+IGJpbmRBY3Rpb25DcmVhdG9ycyhtZXJnZUFjdGlvbnMoYWN0aW9ucywgdXNlckFjdGlvbnMpLCBkaXNwYXRjaCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgIG1hcFN0YXRlQWN0aW9ucyxcbiAgICAgIG1hcFN0eWxlQWN0aW9ucyxcbiAgICAgIHVpU3RhdGVBY3Rpb25zLFxuICAgICAgcHJvdmlkZXJBY3Rpb25zLFxuICAgICAgZGlzcGF0Y2hcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZU1hcERpc3BhdGNoVG9Qcm9wcygpIHtcbiAgY29uc3QgZ2V0QWN0aW9uQ3JlYXRvcnMgPSBtYWtlR2V0QWN0aW9uQ3JlYXRvcnMoKTtcbiAgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IGdyb3VwZWRBY3Rpb25DcmVhdG9ycyA9IGdldEFjdGlvbkNyZWF0b3JzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZ3JvdXBlZEFjdGlvbkNyZWF0b3JzLFxuICAgICAgZGlzcGF0Y2hcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBtYXBEaXNwYXRjaFRvUHJvcHM7XG59XG5cbi8qKlxuICogT3ZlcnJpZGUgZGVmYXVsdCBrZXBsZXIuZ2wgYWN0aW9ucyB3aXRoIHVzZXIgZGVmaW5lZCBhY3Rpb25zIHVzaW5nIHRoZSBzYW1lIGtleVxuICovXG5mdW5jdGlvbiBtZXJnZUFjdGlvbnMoYWN0aW9ucywgdXNlckFjdGlvbnMpIHtcbiAgY29uc3Qgb3ZlcnJpZGVzID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIHVzZXJBY3Rpb25zKSB7XG4gICAgaWYgKHVzZXJBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkgJiYgYWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBvdmVycmlkZXNba2V5XSA9IHVzZXJBY3Rpb25zW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsuLi5hY3Rpb25zLCAuLi5vdmVycmlkZXN9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBLZXBsZXJHbEZhY3Rvcnk7XG4iXX0=