"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SidePanelFactory;
exports.PanelTitleFactory = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _reactIntl = require("react-intl");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _sideBar = _interopRequireDefault(require("./side-panel/side-bar"));

var _panelHeader = _interopRequireDefault(require("./side-panel/panel-header"));

var _layerManager = _interopRequireDefault(require("./side-panel/layer-manager"));

var _filterManager = _interopRequireDefault(require("./side-panel/filter-manager"));

var _interactionManager = _interopRequireDefault(require("./side-panel/interaction-manager"));

var _mapManager = _interopRequireDefault(require("./side-panel/map-manager"));

var _panelToggle = _interopRequireDefault(require("./side-panel/panel-toggle"));

var _customPanel = _interopRequireDefault(require("./side-panel/custom-panel"));

var _defaultSettings = require("../constants/default-settings");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 20px;\n  font-weight: 400;\n  letter-spacing: 1.25px;\n  margin-bottom: 14px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  flex-grow: 1;\n  padding: ", "px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n\n  .side-panel__content__inner {\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SidePanelContent = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.sidePanelScrollBar;
}, function (props) {
  return props.theme.sidePanelInnerPadding;
});

var PanelTitleFactory = function PanelTitleFactory() {
  return _styledComponents["default"].div(_templateObject2(), function (props) {
    return props.theme.titleTextColor;
  });
};

exports.PanelTitleFactory = PanelTitleFactory;
SidePanelFactory.deps = [_sideBar["default"], _panelHeader["default"], _panelToggle["default"], PanelTitleFactory, _layerManager["default"], _filterManager["default"], _interactionManager["default"], _mapManager["default"], _customPanel["default"]];
/**
 *
 * Vertical sidebar containing input components for the rendering layers
 */

function SidePanelFactory(Sidebar, PanelHeader, PanelToggle, PanelTitle, LayerManager, FilterManager, InteractionManager, MapManager, CustomPanels) {
  var customPanels = (0, _lodash["default"])(CustomPanels, ['defaultProps', 'panels']) || [];

  var getCustomPanelProps = (0, _lodash["default"])(CustomPanels, ['defaultProps', 'getProps']) || function () {
    return {};
  };

  var SidePanel =
  /*#__PURE__*/
  function (_PureComponent) {
    (0, _inherits2["default"])(SidePanel, _PureComponent);

    function SidePanel() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, SidePanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(SidePanel)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOpenOrClose", function () {
        _this.props.uiStateActions.toggleSidePanel(_this.props.uiState.activeSidePanel ? null : 'layer');
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showDatasetTable", function (dataId) {
        // this will open data table modal
        _this.props.visStateActions.showDatasetTable(dataId);

        _this.props.uiStateActions.toggleModal(_defaultSettings.DATA_TABLE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showAddDataModal", function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_DATA_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showAddMapStyleModal", function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_MAP_STYLE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeDataset", function (key) {
        // this will show the modal dialog to confirm deletion
        _this.props.uiStateActions.openDeleteModal(key);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickExportImage", function () {
        return _this.props.uiStateActions.startExportingImage();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickExportData", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_DATA_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickExportMap", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_MAP_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickSaveToStorage", function () {
        return _this.props.uiStateActions.startSaveStorage(_this.props.mapSaved);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickSaveAsToStorage", function () {
        // add (copy) to file name
        _this.props.visStateActions.setMapInfo({
          title: "".concat(_this.props.mapInfo.title || 'Kepler.gl', " (Copy)")
        });

        _this.props.uiStateActions.startSaveStorage(false);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickShareMap", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.SHARE_MAP_ID);
      });
      return _this;
    }

    (0, _createClass2["default"])(SidePanel, [{
      key: "render",
      // eslint-disable-next-line complexity
      value: function render() {
        var _this$props = this.props,
            appName = _this$props.appName,
            appWebsite = _this$props.appWebsite,
            version = _this$props.version,
            datasets = _this$props.datasets,
            filters = _this$props.filters,
            layers = _this$props.layers,
            layerBlending = _this$props.layerBlending,
            layerClasses = _this$props.layerClasses,
            uiState = _this$props.uiState,
            layerOrder = _this$props.layerOrder,
            interactionConfig = _this$props.interactionConfig,
            visStateActions = _this$props.visStateActions,
            mapStyleActions = _this$props.mapStyleActions,
            uiStateActions = _this$props.uiStateActions,
            availableProviders = _this$props.availableProviders;
        var activeSidePanel = uiState.activeSidePanel;
        var isOpen = Boolean(activeSidePanel);
        var panels = [].concat((0, _toConsumableArray2["default"])(this.props.panels), (0, _toConsumableArray2["default"])(customPanels));
        var layerManagerActions = {
          addLayer: visStateActions.addLayer,
          layerConfigChange: visStateActions.layerConfigChange,
          layerColorUIChange: visStateActions.layerColorUIChange,
          layerTextLabelChange: visStateActions.layerTextLabelChange,
          layerVisualChannelConfigChange: visStateActions.layerVisualChannelConfigChange,
          layerTypeChange: visStateActions.layerTypeChange,
          layerVisConfigChange: visStateActions.layerVisConfigChange,
          updateLayerBlending: visStateActions.updateLayerBlending,
          updateLayerOrder: visStateActions.reorderLayer,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          removeLayer: visStateActions.removeLayer,
          removeDataset: this._removeDataset,
          openModal: uiStateActions.toggleModal
        };
        var filterManagerActions = {
          addFilter: visStateActions.addFilter,
          removeFilter: visStateActions.removeFilter,
          setFilter: visStateActions.setFilter,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          toggleAnimation: visStateActions.toggleFilterAnimation,
          enlargeFilter: visStateActions.enlargeFilter,
          toggleFilterFeature: visStateActions.toggleFilterFeature
        };
        var interactionManagerActions = {
          onConfigChange: visStateActions.interactionConfigChange
        };
        var mapManagerActions = {
          addMapStyleUrl: mapStyleActions.addMapStyleUrl,
          onConfigChange: mapStyleActions.mapConfigChange,
          onStyleChange: mapStyleActions.mapStyleChange,
          onBuildingChange: mapStyleActions.mapBuildingChange,
          set3dBuildingColor: mapStyleActions.set3dBuildingColor,
          showAddMapStyleModal: this._showAddMapStyleModal
        };
        return _react["default"].createElement("div", null, _react["default"].createElement(Sidebar, {
          width: this.props.width,
          isOpen: isOpen,
          minifiedWidth: 0,
          onOpenOrClose: this._onOpenOrClose
        }, _react["default"].createElement(PanelHeader, {
          appName: appName,
          version: version,
          appWebsite: appWebsite,
          visibleDropdown: uiState.visibleDropdown,
          showExportDropdown: uiStateActions.showExportDropdown,
          hideExportDropdown: uiStateActions.hideExportDropdown,
          onExportImage: this._onClickExportImage,
          onExportData: this._onClickExportData,
          onExportMap: this._onClickExportMap,
          onSaveMap: this.props.onSaveMap,
          onSaveToStorage: availableProviders.hasStorage ? this._onClickSaveToStorage : null,
          onSaveAsToStorage: availableProviders.hasStorage && this.props.mapSaved ? this._onClickSaveAsToStorage : null,
          onShareMap: availableProviders.hasShare ? this._onClickShareMap : null
        }), _react["default"].createElement(PanelToggle, {
          panels: panels,
          activePanel: activeSidePanel,
          togglePanel: uiStateActions.toggleSidePanel
        }), _react["default"].createElement(SidePanelContent, {
          className: "side-panel__content"
        }, _react["default"].createElement("div", {
          className: "side-panel__content__inner"
        }, _react["default"].createElement(PanelTitle, {
          className: "side-panel__content__title"
        }, _react["default"].createElement(_reactIntl.FormattedMessage, {
          id: (panels.find(function (_ref) {
            var id = _ref.id;
            return id === activeSidePanel;
          }) || {}).label
        })), activeSidePanel === 'layer' && _react["default"].createElement(LayerManager, (0, _extends2["default"])({}, layerManagerActions, {
          datasets: datasets,
          layers: layers,
          layerClasses: layerClasses,
          layerOrder: layerOrder,
          layerBlending: layerBlending,
          colorPalette: uiState.colorPalette
        })), activeSidePanel === 'filter' && _react["default"].createElement(FilterManager, (0, _extends2["default"])({}, filterManagerActions, {
          datasets: datasets,
          layers: layers,
          filters: filters
        })), activeSidePanel === 'interaction' && _react["default"].createElement(InteractionManager, (0, _extends2["default"])({}, interactionManagerActions, {
          datasets: datasets,
          interactionConfig: interactionConfig
        })), activeSidePanel === 'map' && _react["default"].createElement(MapManager, (0, _extends2["default"])({}, mapManagerActions, {
          mapStyle: this.props.mapStyle
        })), (customPanels || []).find(function (p) {
          return p.id === activeSidePanel;
        }) ? _react["default"].createElement(CustomPanels, (0, _extends2["default"])({}, getCustomPanelProps(this.props), {
          activeSidePanel: activeSidePanel
        })) : null))));
      }
    }]);
    return SidePanel;
  }(_react.PureComponent);

  (0, _defineProperty2["default"])(SidePanel, "propTypes", {
    filters: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    interactionConfig: _propTypes["default"].object.isRequired,
    layerBlending: _propTypes["default"].string.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    layerClasses: _propTypes["default"].object.isRequired,
    mapStyle: _propTypes["default"].object.isRequired,
    width: _propTypes["default"].number.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    visStateActions: _propTypes["default"].object.isRequired,
    mapStyleActions: _propTypes["default"].object.isRequired,
    availableProviders: _propTypes["default"].object,
    mapSaved: _propTypes["default"].string,
    panels: _propTypes["default"].arrayOf(_propTypes["default"].object)
  });
  (0, _defineProperty2["default"])(SidePanel, "defaultProps", {
    panels: _defaultSettings.SIDEBAR_PANELS,
    uiState: {},
    visStateActions: {},
    mapStyleActions: {},
    uiStateActions: {},
    availableProviders: {}
  });
  return SidePanel;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwuanMiXSwibmFtZXMiOlsiU2lkZVBhbmVsQ29udGVudCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzaWRlUGFuZWxTY3JvbGxCYXIiLCJzaWRlUGFuZWxJbm5lclBhZGRpbmciLCJQYW5lbFRpdGxlRmFjdG9yeSIsInRpdGxlVGV4dENvbG9yIiwiU2lkZVBhbmVsRmFjdG9yeSIsImRlcHMiLCJTaWRlYmFyRmFjdG9yeSIsIlBhbmVsSGVhZGVyRmFjdG9yeSIsIlBhbmVsVG9nZ2xlRmFjdG9yeSIsIkxheWVyTWFuYWdlckZhY3RvcnkiLCJGaWx0ZXJNYW5hZ2VyRmFjdG9yeSIsIkludGVyYWN0aW9uTWFuYWdlckZhY3RvcnkiLCJNYXBNYW5hZ2VyRmFjdG9yeSIsIkN1c3RvbVBhbmVsc0ZhY3RvcnkiLCJTaWRlYmFyIiwiUGFuZWxIZWFkZXIiLCJQYW5lbFRvZ2dsZSIsIlBhbmVsVGl0bGUiLCJMYXllck1hbmFnZXIiLCJGaWx0ZXJNYW5hZ2VyIiwiSW50ZXJhY3Rpb25NYW5hZ2VyIiwiTWFwTWFuYWdlciIsIkN1c3RvbVBhbmVscyIsImN1c3RvbVBhbmVscyIsImdldEN1c3RvbVBhbmVsUHJvcHMiLCJTaWRlUGFuZWwiLCJ1aVN0YXRlQWN0aW9ucyIsInRvZ2dsZVNpZGVQYW5lbCIsInVpU3RhdGUiLCJhY3RpdmVTaWRlUGFuZWwiLCJkYXRhSWQiLCJ2aXNTdGF0ZUFjdGlvbnMiLCJzaG93RGF0YXNldFRhYmxlIiwidG9nZ2xlTW9kYWwiLCJEQVRBX1RBQkxFX0lEIiwiQUREX0RBVEFfSUQiLCJBRERfTUFQX1NUWUxFX0lEIiwia2V5Iiwib3BlbkRlbGV0ZU1vZGFsIiwic3RhcnRFeHBvcnRpbmdJbWFnZSIsIkVYUE9SVF9EQVRBX0lEIiwiRVhQT1JUX01BUF9JRCIsInN0YXJ0U2F2ZVN0b3JhZ2UiLCJtYXBTYXZlZCIsInNldE1hcEluZm8iLCJ0aXRsZSIsIm1hcEluZm8iLCJTSEFSRV9NQVBfSUQiLCJhcHBOYW1lIiwiYXBwV2Vic2l0ZSIsInZlcnNpb24iLCJkYXRhc2V0cyIsImZpbHRlcnMiLCJsYXllcnMiLCJsYXllckJsZW5kaW5nIiwibGF5ZXJDbGFzc2VzIiwibGF5ZXJPcmRlciIsImludGVyYWN0aW9uQ29uZmlnIiwibWFwU3R5bGVBY3Rpb25zIiwiYXZhaWxhYmxlUHJvdmlkZXJzIiwiaXNPcGVuIiwiQm9vbGVhbiIsInBhbmVscyIsImxheWVyTWFuYWdlckFjdGlvbnMiLCJhZGRMYXllciIsImxheWVyQ29uZmlnQ2hhbmdlIiwibGF5ZXJDb2xvclVJQ2hhbmdlIiwibGF5ZXJUZXh0TGFiZWxDaGFuZ2UiLCJsYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2UiLCJsYXllclR5cGVDaGFuZ2UiLCJsYXllclZpc0NvbmZpZ0NoYW5nZSIsInVwZGF0ZUxheWVyQmxlbmRpbmciLCJ1cGRhdGVMYXllck9yZGVyIiwicmVvcmRlckxheWVyIiwiX3Nob3dEYXRhc2V0VGFibGUiLCJzaG93QWRkRGF0YU1vZGFsIiwiX3Nob3dBZGREYXRhTW9kYWwiLCJyZW1vdmVMYXllciIsInJlbW92ZURhdGFzZXQiLCJfcmVtb3ZlRGF0YXNldCIsIm9wZW5Nb2RhbCIsImZpbHRlck1hbmFnZXJBY3Rpb25zIiwiYWRkRmlsdGVyIiwicmVtb3ZlRmlsdGVyIiwic2V0RmlsdGVyIiwidG9nZ2xlQW5pbWF0aW9uIiwidG9nZ2xlRmlsdGVyQW5pbWF0aW9uIiwiZW5sYXJnZUZpbHRlciIsInRvZ2dsZUZpbHRlckZlYXR1cmUiLCJpbnRlcmFjdGlvbk1hbmFnZXJBY3Rpb25zIiwib25Db25maWdDaGFuZ2UiLCJpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZSIsIm1hcE1hbmFnZXJBY3Rpb25zIiwiYWRkTWFwU3R5bGVVcmwiLCJtYXBDb25maWdDaGFuZ2UiLCJvblN0eWxlQ2hhbmdlIiwibWFwU3R5bGVDaGFuZ2UiLCJvbkJ1aWxkaW5nQ2hhbmdlIiwibWFwQnVpbGRpbmdDaGFuZ2UiLCJzZXQzZEJ1aWxkaW5nQ29sb3IiLCJzaG93QWRkTWFwU3R5bGVNb2RhbCIsIl9zaG93QWRkTWFwU3R5bGVNb2RhbCIsIndpZHRoIiwiX29uT3Blbk9yQ2xvc2UiLCJ2aXNpYmxlRHJvcGRvd24iLCJzaG93RXhwb3J0RHJvcGRvd24iLCJoaWRlRXhwb3J0RHJvcGRvd24iLCJfb25DbGlja0V4cG9ydEltYWdlIiwiX29uQ2xpY2tFeHBvcnREYXRhIiwiX29uQ2xpY2tFeHBvcnRNYXAiLCJvblNhdmVNYXAiLCJoYXNTdG9yYWdlIiwiX29uQ2xpY2tTYXZlVG9TdG9yYWdlIiwiX29uQ2xpY2tTYXZlQXNUb1N0b3JhZ2UiLCJoYXNTaGFyZSIsIl9vbkNsaWNrU2hhcmVNYXAiLCJmaW5kIiwiaWQiLCJsYWJlbCIsImNvbG9yUGFsZXR0ZSIsIm1hcFN0eWxlIiwicCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiYW55IiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsInN0cmluZyIsIm51bWJlciIsIlNJREVCQVJfUEFORUxTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQU1BLGdCQUFnQixHQUFHQyw2QkFBT0MsR0FBVixvQkFDbEIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxrQkFBaEI7QUFBQSxDQURhLEVBR1QsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxxQkFBaEI7QUFBQSxDQUhJLENBQXRCOztBQWNPLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxTQUFNTiw2QkFBT0MsR0FBYixxQkFDdEIsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxj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RXdFLHNCQUFVSSxNQUFWLENBQWlCRCxVQVJWO0FBU2pCL0YsSUFBQUEsZUFBZSxFQUFFNEYsc0JBQVVJLE1BQVYsQ0FBaUJELFVBVGpCO0FBVWpCcEUsSUFBQUEsZUFBZSxFQUFFaUUsc0JBQVVJLE1BQVYsQ0FBaUJELFVBVmpCO0FBV2pCbkUsSUFBQUEsa0JBQWtCLEVBQUVnRSxzQkFBVUksTUFYYjtBQVlqQnBGLElBQUFBLFFBQVEsRUFBRWdGLHNCQUFVSyxNQVpIO0FBYWpCbEUsSUFBQUEsTUFBTSxFQUFFNkQsc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVSSxNQUE1QjtBQWJTLEdBTHJCO0FBQUEsbUNBSU10RyxTQUpOLGtCQXFCd0I7QUFDcEJxQyxJQUFBQSxNQUFNLEVBQUVvRSwrQkFEWTtBQUVwQnRHLElBQUFBLE9BQU8sRUFBRSxFQUZXO0FBR3BCRyxJQUFBQSxlQUFlLEVBQUUsRUFIRztBQUlwQjJCLElBQUFBLGVBQWUsRUFBRSxFQUpHO0FBS3BCaEMsSUFBQUEsY0FBYyxFQUFFLEVBTEk7QUFNcEJpQyxJQUFBQSxrQkFBa0IsRUFBRTtBQU5BLEdBckJ4QjtBQTZOQSxTQUFPbEMsU0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XG5cbmltcG9ydCBTaWRlYmFyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvc2lkZS1iYXInO1xuaW1wb3J0IFBhbmVsSGVhZGVyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyJztcbmltcG9ydCBMYXllck1hbmFnZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9sYXllci1tYW5hZ2VyJztcbmltcG9ydCBGaWx0ZXJNYW5hZ2VyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvZmlsdGVyLW1hbmFnZXInO1xuaW1wb3J0IEludGVyYWN0aW9uTWFuYWdlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL2ludGVyYWN0aW9uLW1hbmFnZXInO1xuaW1wb3J0IE1hcE1hbmFnZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9tYXAtbWFuYWdlcic7XG5pbXBvcnQgUGFuZWxUb2dnbGVGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9wYW5lbC10b2dnbGUnO1xuaW1wb3J0IEN1c3RvbVBhbmVsc0ZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL2N1c3RvbS1wYW5lbCc7XG5cbmltcG9ydCB7XG4gIEFERF9EQVRBX0lELFxuICBBRERfTUFQX1NUWUxFX0lELFxuICBEQVRBX1RBQkxFX0lELFxuICBFWFBPUlRfREFUQV9JRCxcbiAgRVhQT1JUX01BUF9JRCxcbiAgU0hBUkVfTUFQX0lELFxuICBTSURFQkFSX1BBTkVMU1xufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IFNpZGVQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbFNjcm9sbEJhcn07XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxJbm5lclBhZGRpbmd9cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG4gIC5zaWRlLXBhbmVsX19jb250ZW50X19pbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFBhbmVsVGl0bGVGYWN0b3J5ID0gKCkgPT4gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVUZXh0Q29sb3J9O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG5gO1xuXG5TaWRlUGFuZWxGYWN0b3J5LmRlcHMgPSBbXG4gIFNpZGViYXJGYWN0b3J5LFxuICBQYW5lbEhlYWRlckZhY3RvcnksXG4gIFBhbmVsVG9nZ2xlRmFjdG9yeSxcbiAgUGFuZWxUaXRsZUZhY3RvcnksXG4gIExheWVyTWFuYWdlckZhY3RvcnksXG4gIEZpbHRlck1hbmFnZXJGYWN0b3J5LFxuICBJbnRlcmFjdGlvbk1hbmFnZXJGYWN0b3J5LFxuICBNYXBNYW5hZ2VyRmFjdG9yeSxcbiAgQ3VzdG9tUGFuZWxzRmFjdG9yeVxuXTtcblxuLyoqXG4gKlxuICogVmVydGljYWwgc2lkZWJhciBjb250YWluaW5nIGlucHV0IGNvbXBvbmVudHMgZm9yIHRoZSByZW5kZXJpbmcgbGF5ZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVQYW5lbEZhY3RvcnkoXG4gIFNpZGViYXIsXG4gIFBhbmVsSGVhZGVyLFxuICBQYW5lbFRvZ2dsZSxcbiAgUGFuZWxUaXRsZSxcbiAgTGF5ZXJNYW5hZ2VyLFxuICBGaWx0ZXJNYW5hZ2VyLFxuICBJbnRlcmFjdGlvbk1hbmFnZXIsXG4gIE1hcE1hbmFnZXIsXG4gIEN1c3RvbVBhbmVsc1xuKSB7XG4gIGNvbnN0IGN1c3RvbVBhbmVscyA9IGdldChDdXN0b21QYW5lbHMsIFsnZGVmYXVsdFByb3BzJywgJ3BhbmVscyddKSB8fCBbXTtcbiAgY29uc3QgZ2V0Q3VzdG9tUGFuZWxQcm9wcyA9IGdldChDdXN0b21QYW5lbHMsIFsnZGVmYXVsdFByb3BzJywgJ2dldFByb3BzJ10pIHx8ICgoKSA9PiAoe30pKTtcblxuICBjbGFzcyBTaWRlUGFuZWwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZmlsdGVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIGludGVyYWN0aW9uQ29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBsYXllckJsZW5kaW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHZpc1N0YXRlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3R5bGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBhdmFpbGFibGVQcm92aWRlcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBtYXBTYXZlZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHBhbmVsczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIHBhbmVsczogU0lERUJBUl9QQU5FTFMsXG4gICAgICB1aVN0YXRlOiB7fSxcbiAgICAgIHZpc1N0YXRlQWN0aW9uczoge30sXG4gICAgICBtYXBTdHlsZUFjdGlvbnM6IHt9LFxuICAgICAgdWlTdGF0ZUFjdGlvbnM6IHt9LFxuICAgICAgYXZhaWxhYmxlUHJvdmlkZXJzOiB7fVxuICAgIH07XG5cbiAgICAvKiBjb21wb25lbnQgcHJpdmF0ZSBmdW5jdGlvbnMgKi9cbiAgICBfb25PcGVuT3JDbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlU2lkZVBhbmVsKFxuICAgICAgICB0aGlzLnByb3BzLnVpU3RhdGUuYWN0aXZlU2lkZVBhbmVsID8gbnVsbCA6ICdsYXllcidcbiAgICAgICk7XG4gICAgfTtcblxuICAgIF9zaG93RGF0YXNldFRhYmxlID0gZGF0YUlkID0+IHtcbiAgICAgIC8vIHRoaXMgd2lsbCBvcGVuIGRhdGEgdGFibGUgbW9kYWxcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnNob3dEYXRhc2V0VGFibGUoZGF0YUlkKTtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoREFUQV9UQUJMRV9JRCk7XG4gICAgfTtcblxuICAgIF9zaG93QWRkRGF0YU1vZGFsID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChBRERfREFUQV9JRCk7XG4gICAgfTtcblxuICAgIF9zaG93QWRkTWFwU3R5bGVNb2RhbCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoQUREX01BUF9TVFlMRV9JRCk7XG4gICAgfTtcblxuICAgIF9yZW1vdmVEYXRhc2V0ID0ga2V5ID0+IHtcbiAgICAgIC8vIHRoaXMgd2lsbCBzaG93IHRoZSBtb2RhbCBkaWFsb2cgdG8gY29uZmlybSBkZWxldGlvblxuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy5vcGVuRGVsZXRlTW9kYWwoa2V5KTtcbiAgICB9O1xuXG4gICAgX29uQ2xpY2tFeHBvcnRJbWFnZSA9ICgpID0+IHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMuc3RhcnRFeHBvcnRpbmdJbWFnZSgpO1xuXG4gICAgX29uQ2xpY2tFeHBvcnREYXRhID0gKCkgPT4gdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChFWFBPUlRfREFUQV9JRCk7XG5cbiAgICBfb25DbGlja0V4cG9ydE1hcCA9ICgpID0+IHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoRVhQT1JUX01BUF9JRCk7XG5cbiAgICBfb25DbGlja1NhdmVUb1N0b3JhZ2UgPSAoKSA9PiB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnN0YXJ0U2F2ZVN0b3JhZ2UodGhpcy5wcm9wcy5tYXBTYXZlZCk7XG5cbiAgICBfb25DbGlja1NhdmVBc1RvU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgIC8vIGFkZCAoY29weSkgdG8gZmlsZSBuYW1lXG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5zZXRNYXBJbmZvKHtcbiAgICAgICAgdGl0bGU6IGAke3RoaXMucHJvcHMubWFwSW5mby50aXRsZSB8fCAnS2VwbGVyLmdsJ30gKENvcHkpYFxuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnN0YXJ0U2F2ZVN0b3JhZ2UoZmFsc2UpO1xuICAgIH07XG5cbiAgICBfb25DbGlja1NoYXJlTWFwID0gKCkgPT4gdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChTSEFSRV9NQVBfSUQpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGFwcE5hbWUsXG4gICAgICAgIGFwcFdlYnNpdGUsXG4gICAgICAgIHZlcnNpb24sXG4gICAgICAgIGRhdGFzZXRzLFxuICAgICAgICBmaWx0ZXJzLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIGxheWVyQmxlbmRpbmcsXG4gICAgICAgIGxheWVyQ2xhc3NlcyxcbiAgICAgICAgdWlTdGF0ZSxcbiAgICAgICAgbGF5ZXJPcmRlcixcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgbWFwU3R5bGVBY3Rpb25zLFxuICAgICAgICB1aVN0YXRlQWN0aW9ucyxcbiAgICAgICAgYXZhaWxhYmxlUHJvdmlkZXJzXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3Qge2FjdGl2ZVNpZGVQYW5lbH0gPSB1aVN0YXRlO1xuICAgICAgY29uc3QgaXNPcGVuID0gQm9vbGVhbihhY3RpdmVTaWRlUGFuZWwpO1xuICAgICAgY29uc3QgcGFuZWxzID0gWy4uLnRoaXMucHJvcHMucGFuZWxzLCAuLi5jdXN0b21QYW5lbHNdO1xuXG4gICAgICBjb25zdCBsYXllck1hbmFnZXJBY3Rpb25zID0ge1xuICAgICAgICBhZGRMYXllcjogdmlzU3RhdGVBY3Rpb25zLmFkZExheWVyLFxuICAgICAgICBsYXllckNvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyQ29uZmlnQ2hhbmdlLFxuICAgICAgICBsYXllckNvbG9yVUlDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllckNvbG9yVUlDaGFuZ2UsXG4gICAgICAgIGxheWVyVGV4dExhYmVsQ2hhbmdlOiB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJUZXh0TGFiZWxDaGFuZ2UsXG4gICAgICAgIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJUeXBlQ2hhbmdlOiB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJUeXBlQ2hhbmdlLFxuICAgICAgICBsYXllclZpc0NvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVmlzQ29uZmlnQ2hhbmdlLFxuICAgICAgICB1cGRhdGVMYXllckJsZW5kaW5nOiB2aXNTdGF0ZUFjdGlvbnMudXBkYXRlTGF5ZXJCbGVuZGluZyxcbiAgICAgICAgdXBkYXRlTGF5ZXJPcmRlcjogdmlzU3RhdGVBY3Rpb25zLnJlb3JkZXJMYXllcixcbiAgICAgICAgc2hvd0RhdGFzZXRUYWJsZTogdGhpcy5fc2hvd0RhdGFzZXRUYWJsZSxcbiAgICAgICAgc2hvd0FkZERhdGFNb2RhbDogdGhpcy5fc2hvd0FkZERhdGFNb2RhbCxcbiAgICAgICAgcmVtb3ZlTGF5ZXI6IHZpc1N0YXRlQWN0aW9ucy5yZW1vdmVMYXllcixcbiAgICAgICAgcmVtb3ZlRGF0YXNldDogdGhpcy5fcmVtb3ZlRGF0YXNldCxcbiAgICAgICAgb3Blbk1vZGFsOiB1aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbFxuICAgICAgfTtcblxuICAgICAgY29uc3QgZmlsdGVyTWFuYWdlckFjdGlvbnMgPSB7XG4gICAgICAgIGFkZEZpbHRlcjogdmlzU3RhdGVBY3Rpb25zLmFkZEZpbHRlcixcbiAgICAgICAgcmVtb3ZlRmlsdGVyOiB2aXNTdGF0ZUFjdGlvbnMucmVtb3ZlRmlsdGVyLFxuICAgICAgICBzZXRGaWx0ZXI6IHZpc1N0YXRlQWN0aW9ucy5zZXRGaWx0ZXIsXG4gICAgICAgIHNob3dEYXRhc2V0VGFibGU6IHRoaXMuX3Nob3dEYXRhc2V0VGFibGUsXG4gICAgICAgIHNob3dBZGREYXRhTW9kYWw6IHRoaXMuX3Nob3dBZGREYXRhTW9kYWwsXG4gICAgICAgIHRvZ2dsZUFuaW1hdGlvbjogdmlzU3RhdGVBY3Rpb25zLnRvZ2dsZUZpbHRlckFuaW1hdGlvbixcbiAgICAgICAgZW5sYXJnZUZpbHRlcjogdmlzU3RhdGVBY3Rpb25zLmVubGFyZ2VGaWx0ZXIsXG4gICAgICAgIHRvZ2dsZUZpbHRlckZlYXR1cmU6IHZpc1N0YXRlQWN0aW9ucy50b2dnbGVGaWx0ZXJGZWF0dXJlXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbnRlcmFjdGlvbk1hbmFnZXJBY3Rpb25zID0ge1xuICAgICAgICBvbkNvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmludGVyYWN0aW9uQ29uZmlnQ2hhbmdlXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBtYXBNYW5hZ2VyQWN0aW9ucyA9IHtcbiAgICAgICAgYWRkTWFwU3R5bGVVcmw6IG1hcFN0eWxlQWN0aW9ucy5hZGRNYXBTdHlsZVVybCxcbiAgICAgICAgb25Db25maWdDaGFuZ2U6IG1hcFN0eWxlQWN0aW9ucy5tYXBDb25maWdDaGFuZ2UsXG4gICAgICAgIG9uU3R5bGVDaGFuZ2U6IG1hcFN0eWxlQWN0aW9ucy5tYXBTdHlsZUNoYW5nZSxcbiAgICAgICAgb25CdWlsZGluZ0NoYW5nZTogbWFwU3R5bGVBY3Rpb25zLm1hcEJ1aWxkaW5nQ2hhbmdlLFxuICAgICAgICBzZXQzZEJ1aWxkaW5nQ29sb3I6IG1hcFN0eWxlQWN0aW9ucy5zZXQzZEJ1aWxkaW5nQ29sb3IsXG4gICAgICAgIHNob3dBZGRNYXBTdHlsZU1vZGFsOiB0aGlzLl9zaG93QWRkTWFwU3R5bGVNb2RhbFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICAgIG1pbmlmaWVkV2lkdGg9ezB9XG4gICAgICAgICAgICBvbk9wZW5PckNsb3NlPXt0aGlzLl9vbk9wZW5PckNsb3NlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYW5lbEhlYWRlclxuICAgICAgICAgICAgICBhcHBOYW1lPXthcHBOYW1lfVxuICAgICAgICAgICAgICB2ZXJzaW9uPXt2ZXJzaW9ufVxuICAgICAgICAgICAgICBhcHBXZWJzaXRlPXthcHBXZWJzaXRlfVxuICAgICAgICAgICAgICB2aXNpYmxlRHJvcGRvd249e3VpU3RhdGUudmlzaWJsZURyb3Bkb3dufVxuICAgICAgICAgICAgICBzaG93RXhwb3J0RHJvcGRvd249e3VpU3RhdGVBY3Rpb25zLnNob3dFeHBvcnREcm9wZG93bn1cbiAgICAgICAgICAgICAgaGlkZUV4cG9ydERyb3Bkb3duPXt1aVN0YXRlQWN0aW9ucy5oaWRlRXhwb3J0RHJvcGRvd259XG4gICAgICAgICAgICAgIG9uRXhwb3J0SW1hZ2U9e3RoaXMuX29uQ2xpY2tFeHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgb25FeHBvcnREYXRhPXt0aGlzLl9vbkNsaWNrRXhwb3J0RGF0YX1cbiAgICAgICAgICAgICAgb25FeHBvcnRNYXA9e3RoaXMuX29uQ2xpY2tFeHBvcnRNYXB9XG4gICAgICAgICAgICAgIG9uU2F2ZU1hcD17dGhpcy5wcm9wcy5vblNhdmVNYXB9XG4gICAgICAgICAgICAgIG9uU2F2ZVRvU3RvcmFnZT17YXZhaWxhYmxlUHJvdmlkZXJzLmhhc1N0b3JhZ2UgPyB0aGlzLl9vbkNsaWNrU2F2ZVRvU3RvcmFnZSA6IG51bGx9XG4gICAgICAgICAgICAgIG9uU2F2ZUFzVG9TdG9yYWdlPXtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVQcm92aWRlcnMuaGFzU3RvcmFnZSAmJiB0aGlzLnByb3BzLm1hcFNhdmVkXG4gICAgICAgICAgICAgICAgICA/IHRoaXMuX29uQ2xpY2tTYXZlQXNUb1N0b3JhZ2VcbiAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uU2hhcmVNYXA9e2F2YWlsYWJsZVByb3ZpZGVycy5oYXNTaGFyZSA/IHRoaXMuX29uQ2xpY2tTaGFyZU1hcCA6IG51bGx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFBhbmVsVG9nZ2xlXG4gICAgICAgICAgICAgIHBhbmVscz17cGFuZWxzfVxuICAgICAgICAgICAgICBhY3RpdmVQYW5lbD17YWN0aXZlU2lkZVBhbmVsfVxuICAgICAgICAgICAgICB0b2dnbGVQYW5lbD17dWlTdGF0ZUFjdGlvbnMudG9nZ2xlU2lkZVBhbmVsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTaWRlUGFuZWxDb250ZW50IGNsYXNzTmFtZT1cInNpZGUtcGFuZWxfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19jb250ZW50X19pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxQYW5lbFRpdGxlIGNsYXNzTmFtZT1cInNpZGUtcGFuZWxfX2NvbnRlbnRfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBpZD17KHBhbmVscy5maW5kKCh7aWR9KSA9PiBpZCA9PT0gYWN0aXZlU2lkZVBhbmVsKSB8fCB7fSkubGFiZWx9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvUGFuZWxUaXRsZT5cbiAgICAgICAgICAgICAgICB7YWN0aXZlU2lkZVBhbmVsID09PSAnbGF5ZXInICYmIChcbiAgICAgICAgICAgICAgICAgIDxMYXllck1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLmxheWVyTWFuYWdlckFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgICAgICAgIGxheWVyQ2xhc3Nlcz17bGF5ZXJDbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICBsYXllck9yZGVyPXtsYXllck9yZGVyfVxuICAgICAgICAgICAgICAgICAgICBsYXllckJsZW5kaW5nPXtsYXllckJsZW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICBjb2xvclBhbGV0dGU9e3VpU3RhdGUuY29sb3JQYWxldHRlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHthY3RpdmVTaWRlUGFuZWwgPT09ICdmaWx0ZXInICYmIChcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5maWx0ZXJNYW5hZ2VyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgICAgICBsYXllcnM9e2xheWVyc31cbiAgICAgICAgICAgICAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7YWN0aXZlU2lkZVBhbmVsID09PSAnaW50ZXJhY3Rpb24nICYmIChcbiAgICAgICAgICAgICAgICAgIDxJbnRlcmFjdGlvbk1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLmludGVyYWN0aW9uTWFuYWdlckFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Db25maWc9e2ludGVyYWN0aW9uQ29uZmlnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHthY3RpdmVTaWRlUGFuZWwgPT09ICdtYXAnICYmIChcbiAgICAgICAgICAgICAgICAgIDxNYXBNYW5hZ2VyIHsuLi5tYXBNYW5hZ2VyQWN0aW9uc30gbWFwU3R5bGU9e3RoaXMucHJvcHMubWFwU3R5bGV9IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7KGN1c3RvbVBhbmVscyB8fCBbXSkuZmluZChwID0+IHAuaWQgPT09IGFjdGl2ZVNpZGVQYW5lbCkgPyAoXG4gICAgICAgICAgICAgICAgICA8Q3VzdG9tUGFuZWxzXG4gICAgICAgICAgICAgICAgICAgIHsuLi5nZXRDdXN0b21QYW5lbFByb3BzKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTaWRlUGFuZWw9e2FjdGl2ZVNpZGVQYW5lbH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TaWRlUGFuZWxDb250ZW50PlxuICAgICAgICAgIDwvU2lkZWJhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBTaWRlUGFuZWw7XG59XG4iXX0=