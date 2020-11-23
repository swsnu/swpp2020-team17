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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactIntl = require("react-intl");

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents2 = require("../common/styled-components");

var _mapLayerSelector = _interopRequireDefault(require("../common/map-layer-selector"));

var _logo = _interopRequireDefault(require("../common/logo"));

var _mapLegend = _interopRequireDefault(require("./map-legend"));

var _icons = require("../common/icons");

var _verticalToolbar = _interopRequireDefault(require("../common/vertical-toolbar"));

var _toolbarItem = _interopRequireDefault(require("../common/toolbar-item"));

var _defaultSettings = require("../../constants/default-settings");

var _locales = require("../../localization/locales");

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 32px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ", ";\n  height: 32px;\n  padding: 6px 12px;\n  font-size: 11px;\n  color: ", ";\n  position: relative;\n\n  button {\n    width: 18px;\n    height: 18px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  max-height: 500px;\n  min-height: 100px;\n  overflow: auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  flex-grow: 1;\n  z-index: 1;\n  p {\n    margin-bottom: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 4px 0;\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  right: 0;\n  width: ", "px;\n  padding: ", "px;\n  z-index: 10;\n  margin-top: ", "px;\n  position: absolute;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledMapControl = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.mapControl.width;
}, function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.top || 0;
});

var StyledMapControlAction = _styledComponents["default"].div(_templateObject2());

var StyledMapControlPanel = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.mapPanelBackgroundColor;
});

var StyledMapControlPanelContent = _styledComponents["default"].div.attrs({
  className: 'map-control__panel-content'
})(_templateObject4(), function (props) {
  return props.theme.dropdownScrollBar;
});

var StyledMapControlPanelHeader = _styledComponents["default"].div.attrs({
  className: 'map-control__panel-header'
})(_templateObject5(), function (props) {
  return props.theme.mapPanelHeaderBackgroundColor;
}, function (props) {
  return props.theme.titleTextColor;
});

var ActionPanel = function ActionPanel(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react["default"].createElement(StyledMapControlAction, {
    className: className
  }, children);
};

ActionPanel.displayName = 'ActionPanel';

var MapControlTooltip = _react["default"].memo(function (_ref2) {
  var id = _ref2.id,
      message = _ref2.message;
  return _react["default"].createElement(_styledComponents2.Tooltip, {
    id: id,
    place: "left",
    effect: "solid"
  }, _react["default"].createElement("span", null, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: message
  })));
});

MapControlTooltip.displayName = 'MapControlTooltip';

var MapLegendTooltip = function MapLegendTooltip(_ref3) {
  var id = _ref3.id,
      message = _ref3.message;
  return _react["default"].createElement(_styledComponents2.Tooltip, {
    id: id,
    place: "left",
    effect: "solid"
  }, _react["default"].createElement("span", null, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: message
  })));
};

var LayerSelectorPanel = _react["default"].memo(function (_ref4) {
  var items = _ref4.items,
      onMapToggleLayer = _ref4.onMapToggleLayer,
      isActive = _ref4.isActive,
      toggleMenuPanel = _ref4.toggleMenuPanel;
  return !isActive ? _react["default"].createElement(_styledComponents2.MapControlButton, {
    key: 1,
    onClick: function onClick(e) {
      e.preventDefault();
      toggleMenuPanel();
    },
    className: "map-control-button toggle-layer",
    "data-tip": true,
    "data-for": "toggle-layer"
  }, _react["default"].createElement(_icons.Layers, {
    height: "22px"
  }), _react["default"].createElement(MapControlTooltip, {
    id: "toggle-layer",
    message: isActive ? 'tooltip.hideLayerPanel' : 'tooltip.showLayerPanel'
  })) : _react["default"].createElement(MapControlPanel, {
    header: "header.visibleLayers",
    onClick: toggleMenuPanel
  }, _react["default"].createElement(_mapLayerSelector["default"], {
    layers: items,
    onMapToggleLayer: onMapToggleLayer
  }));
});

LayerSelectorPanel.displayName = 'LayerSelectorPanel';

var MapControlPanel = _react["default"].memo(function (_ref5) {
  var children = _ref5.children,
      header = _ref5.header,
      onClick = _ref5.onClick,
      _ref5$scale = _ref5.scale,
      scale = _ref5$scale === void 0 ? 1 : _ref5$scale,
      isExport = _ref5.isExport;
  return _react["default"].createElement(StyledMapControlPanel, {
    style: {
      transform: "scale(".concat(scale, ") translate(calc(-").concat(25 * (scale - 1), "% - ").concat(10 * scale, "px), calc(").concat(25 * (scale - 1), "% + ").concat(10 * scale, "px))"),
      marginBottom: '8px'
    }
  }, _react["default"].createElement(StyledMapControlPanelHeader, null, isExport ? _react["default"].createElement(_logo["default"], {
    version: false,
    appName: "kepler.gl"
  }) : _react["default"].createElement("span", {
    style: {
      verticalAlign: 'middle'
    }
  }, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: header
  })), isExport ? null : _react["default"].createElement(_styledComponents2.IconRoundSmall, {
    className: "close-map-control-item",
    onClick: onClick
  }, _react["default"].createElement(_icons.Close, {
    height: "16px"
  }))), _react["default"].createElement(StyledMapControlPanelContent, null, children));
});

MapControlPanel.displayName = 'MapControlPanel';

var MapLegendPanel = function MapLegendPanel(_ref6) {
  var layers = _ref6.layers,
      isActive = _ref6.isActive,
      scale = _ref6.scale,
      onToggleMenuPanel = _ref6.onToggleMenuPanel,
      isExport = _ref6.isExport;
  return !isActive ? _react["default"].createElement(_styledComponents2.MapControlButton, {
    key: 2,
    "data-tip": true,
    "data-for": "show-legend",
    className: "map-control-button show-legend",
    onClick: function onClick(e) {
      e.preventDefault();
      onToggleMenuPanel();
    }
  }, _react["default"].createElement(_icons.Legend, {
    height: "22px"
  }), _react["default"].createElement(MapLegendTooltip, {
    id: "show-legend",
    message: 'tooltip.showLegend'
  })) : _react["default"].createElement(MapControlPanel, {
    scale: scale,
    header: 'header.layerLegend',
    onClick: onToggleMenuPanel,
    isExport: isExport
  }, _react["default"].createElement(_mapLegend["default"], {
    layers: layers
  }));
};

MapLegendPanel.displayName = 'MapControlPanel';

var SplitMapButton = _react["default"].memo(function (_ref7) {
  var isSplit = _ref7.isSplit,
      mapIndex = _ref7.mapIndex,
      onToggleSplitMap = _ref7.onToggleSplitMap;
  return _react["default"].createElement(_styledComponents2.MapControlButton, {
    active: isSplit,
    onClick: function onClick(e) {
      e.preventDefault();
      onToggleSplitMap(isSplit ? mapIndex : undefined);
    },
    key: "split-".concat(isSplit),
    className: (0, _classnames["default"])('map-control-button', 'split-map', {
      'close-map': isSplit
    }),
    "data-tip": true,
    "data-for": "action-toggle"
  }, isSplit ? _react["default"].createElement(_icons.Delete, {
    height: "18px"
  }) : _react["default"].createElement(_icons.Split, {
    height: "18px"
  }), _react["default"].createElement(MapControlTooltip, {
    id: "action-toggle",
    message: isSplit ? 'tooltip.closePanel' : 'tooltip.switchToDualView'
  }));
});

SplitMapButton.displayName = 'SplitMapButton';

var Toggle3dButton = _react["default"].memo(function (_ref8) {
  var dragRotate = _ref8.dragRotate,
      onTogglePerspective = _ref8.onTogglePerspective;
  return _react["default"].createElement(_styledComponents2.MapControlButton, {
    onClick: function onClick(e) {
      e.preventDefault();
      onTogglePerspective();
    },
    active: dragRotate,
    "data-tip": true,
    "data-for": "action-3d"
  }, _react["default"].createElement(_icons.Cube3d, {
    height: "22px"
  }), _react["default"].createElement(MapControlTooltip, {
    id: "action-3d",
    message: dragRotate ? 'tooltip.disable3DMap' : 'tooltip.3DMap'
  }));
});

Toggle3dButton.displayName = 'Toggle3dButton';
var StyledToolbar = (0, _styledComponents["default"])(_verticalToolbar["default"])(_templateObject6());

var MapDrawPanel = _react["default"].memo(function (_ref9) {
  var editor = _ref9.editor,
      isActive = _ref9.isActive,
      onToggleMenuPanel = _ref9.onToggleMenuPanel,
      onSetEditorMode = _ref9.onSetEditorMode,
      onToggleEditorVisibility = _ref9.onToggleEditorVisibility;
  return _react["default"].createElement("div", {
    className: "map-draw-controls",
    style: {
      position: 'relative'
    }
  }, isActive ? _react["default"].createElement(StyledToolbar, {
    show: isActive
  }, _react["default"].createElement(_toolbarItem["default"], {
    className: "edit-feature",
    onClick: function onClick() {
      return onSetEditorMode(_defaultSettings.EDITOR_MODES.EDIT);
    },
    label: "toolbar.select",
    iconHeight: "22px",
    icon: _icons.CursorClick,
    active: editor.mode === _defaultSettings.EDITOR_MODES.EDIT
  }), _react["default"].createElement(_toolbarItem["default"], {
    className: "draw-feature",
    onClick: function onClick() {
      return onSetEditorMode(_defaultSettings.EDITOR_MODES.DRAW_POLYGON);
    },
    label: "toolbar.polygon",
    iconHeight: "22px",
    icon: _icons.Polygon,
    active: editor.mode === _defaultSettings.EDITOR_MODES.DRAW_POLYGON
  }), _react["default"].createElement(_toolbarItem["default"], {
    className: "draw-rectangle",
    onClick: function onClick() {
      return onSetEditorMode(_defaultSettings.EDITOR_MODES.DRAW_RECTANGLE);
    },
    label: "toolbar.rectangle",
    iconHeight: "22px",
    icon: _icons.Rectangle,
    active: editor.mode === _defaultSettings.EDITOR_MODES.DRAW_RECTANGLE
  }), _react["default"].createElement(_toolbarItem["default"], {
    className: "toggle-features",
    onClick: onToggleEditorVisibility,
    label: editor.visible ? 'toolbar.hide' : 'toolbar.show',
    iconHeight: "22px",
    icon: editor.visible ? _icons.EyeSeen : _icons.EyeUnseen
  })) : null, _react["default"].createElement(_styledComponents2.MapControlButton, {
    onClick: function onClick(e) {
      e.preventDefault();
      onToggleMenuPanel();
    },
    active: isActive,
    "data-tip": true,
    "data-for": "map-draw"
  }, _react["default"].createElement(_icons.DrawPolygon, {
    height: "22px"
  }), _react["default"].createElement(MapControlTooltip, {
    id: "map-draw",
    message: "tooltip.DrawOnMap"
  })));
});

MapDrawPanel.displayName = 'MapDrawPanel';

var LocalePanel = _react["default"].memo(function (_ref10) {
  var availableLocales = _ref10.availableLocales,
      isActive = _ref10.isActive,
      onToggleMenuPanel = _ref10.onToggleMenuPanel,
      onSetLocale = _ref10.onSetLocale,
      activeLocale = _ref10.activeLocale;
  var onClickItem = (0, _react.useCallback)(function (locale) {
    onSetLocale(locale);
  }, [onSetLocale]);
  var onClickButton = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    onToggleMenuPanel();
  }, [onToggleMenuPanel]);
  var getLabel = (0, _react.useCallback)(function (locale) {
    return "toolbar.".concat(locale);
  }, []);
  return _react["default"].createElement("div", {
    style: {
      position: 'relative'
    }
  }, isActive ? _react["default"].createElement(StyledToolbar, {
    show: isActive
  }, availableLocales.map(function (locale) {
    return _react["default"].createElement(_toolbarItem["default"], {
      key: locale,
      onClick: function onClick() {
        return onClickItem(locale);
      },
      label: getLabel(locale),
      active: activeLocale === locale
    });
  })) : null, _react["default"].createElement(_styledComponents2.MapControlButton, {
    onClick: onClickButton,
    active: isActive,
    "data-tip": true,
    "data-for": "locale"
  }, activeLocale.toUpperCase(), _react["default"].createElement(MapControlTooltip, {
    id: "locale",
    message: "tooltip.selectLocale"
  })));
});

LocalePanel.displayName = 'LocalePanel';

var MapControlFactory = function MapControlFactory() {
  var MapControl =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(MapControl, _Component);

    function MapControl() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, MapControl);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(MapControl)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerSelector", function (props) {
        return props.layers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersToRenderSelector", function (props) {
        return props.layersToRender;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerPanelItemsSelector", (0, _reselect.createSelector)(_this.layerSelector, _this.layersToRenderSelector, function (layers, layersToRender) {
        return layers.filter(function (l) {
          return l.config.isVisible;
        }).map(function (layer) {
          return {
            id: layer.id,
            name: layer.config.label,
            // layer
            isVisible: layersToRender[layer.id]
          };
        });
      }));
      return _this;
    }

    (0, _createClass2["default"])(MapControl, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            dragRotate = _this$props.dragRotate,
            layers = _this$props.layers,
            layersToRender = _this$props.layersToRender,
            isSplit = _this$props.isSplit,
            isExport = _this$props.isExport,
            mapIndex = _this$props.mapIndex,
            mapControls = _this$props.mapControls,
            onTogglePerspective = _this$props.onTogglePerspective,
            onToggleSplitMap = _this$props.onToggleSplitMap,
            onMapToggleLayer = _this$props.onMapToggleLayer,
            onToggleMapControl = _this$props.onToggleMapControl,
            editor = _this$props.editor,
            scale = _this$props.scale,
            readOnly = _this$props.readOnly,
            locale = _this$props.locale,
            top = _this$props.top;
        var _mapControls$visibleL = mapControls.visibleLayers,
            visibleLayers = _mapControls$visibleL === void 0 ? {} : _mapControls$visibleL,
            _mapControls$mapLegen = mapControls.mapLegend,
            mapLegend = _mapControls$mapLegen === void 0 ? {} : _mapControls$mapLegen,
            _mapControls$toggle3d = mapControls.toggle3d,
            toggle3d = _mapControls$toggle3d === void 0 ? {} : _mapControls$toggle3d,
            _mapControls$splitMap = mapControls.splitMap,
            splitMap = _mapControls$splitMap === void 0 ? {} : _mapControls$splitMap,
            _mapControls$mapDraw = mapControls.mapDraw,
            mapDraw = _mapControls$mapDraw === void 0 ? {} : _mapControls$mapDraw,
            _mapControls$mapLocal = mapControls.mapLocale,
            mapLocale = _mapControls$mapLocal === void 0 ? {} : _mapControls$mapLocal;
        return _react["default"].createElement(StyledMapControl, {
          className: "map-control",
          top: top
        }, splitMap.show && readOnly !== true ? _react["default"].createElement(ActionPanel, {
          className: "split-map",
          key: 0
        }, _react["default"].createElement(SplitMapButton, {
          isSplit: isSplit,
          mapIndex: mapIndex,
          onToggleSplitMap: onToggleSplitMap
        })) : null, isSplit && visibleLayers.show && readOnly !== true ? _react["default"].createElement(ActionPanel, {
          className: "map-layers",
          key: 1
        }, _react["default"].createElement(LayerSelectorPanel, {
          items: this.layerPanelItemsSelector(this.props),
          onMapToggleLayer: onMapToggleLayer,
          isActive: visibleLayers.active,
          toggleMenuPanel: function toggleMenuPanel() {
            return onToggleMapControl('visibleLayers');
          }
        })) : null, toggle3d.show ? _react["default"].createElement(ActionPanel, {
          className: "toggle-3d",
          key: 2
        }, _react["default"].createElement(Toggle3dButton, {
          dragRotate: dragRotate,
          onTogglePerspective: onTogglePerspective
        })) : null, mapLegend.show ? _react["default"].createElement(ActionPanel, {
          className: "show-legend",
          key: 3
        }, _react["default"].createElement(MapLegendPanel, {
          layers: layers.filter(function (l) {
            return layersToRender[l.id];
          }),
          scale: scale,
          isExport: isExport,
          onMapToggleLayer: onMapToggleLayer,
          isActive: mapLegend.active,
          onToggleMenuPanel: function onToggleMenuPanel() {
            return onToggleMapControl('mapLegend');
          }
        })) : null, mapDraw.show ? _react["default"].createElement(ActionPanel, {
          key: 4
        }, _react["default"].createElement(MapDrawPanel, {
          isActive: mapDraw.active && mapDraw.activeMapIndex === mapIndex,
          editor: editor,
          onToggleMenuPanel: function onToggleMenuPanel() {
            return onToggleMapControl('mapDraw');
          },
          onSetEditorMode: this.props.onSetEditorMode,
          onToggleEditorVisibility: this.props.onToggleEditorVisibility
        })) : null, mapLocale.show ? _react["default"].createElement(ActionPanel, {
          key: 5
        }, _react["default"].createElement(LocalePanel, {
          isActive: mapLocale.active,
          activeLocale: locale,
          availableLocales: Object.keys(_locales.LOCALE_CODES),
          onSetLocale: this.props.onSetLocale,
          onToggleMenuPanel: function onToggleMenuPanel() {
            return onToggleMapControl('mapLocale');
          }
        })) : null);
      }
    }]);
    return MapControl;
  }(_react.Component);

  (0, _defineProperty2["default"])(MapControl, "propTypes", {
    datasets: _propTypes["default"].object.isRequired,
    dragRotate: _propTypes["default"].bool.isRequired,
    isSplit: _propTypes["default"].bool.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].object),
    layersToRender: _propTypes["default"].object.isRequired,
    mapIndex: _propTypes["default"].number.isRequired,
    mapControls: _propTypes["default"].object.isRequired,
    onTogglePerspective: _propTypes["default"].func.isRequired,
    onToggleSplitMap: _propTypes["default"].func.isRequired,
    onToggleMapControl: _propTypes["default"].func.isRequired,
    onSetEditorMode: _propTypes["default"].func.isRequired,
    onToggleEditorVisibility: _propTypes["default"].func.isRequired,
    top: _propTypes["default"].number.isRequired,
    onSetLocale: _propTypes["default"].func.isRequired,
    locale: _propTypes["default"].string.isRequired,
    // optional
    readOnly: _propTypes["default"].bool,
    scale: _propTypes["default"].number,
    mapLayers: _propTypes["default"].object,
    editor: _propTypes["default"].object
  });
  (0, _defineProperty2["default"])(MapControl, "defaultProps", {
    isSplit: false,
    top: 0,
    mapIndex: 0
  });
  MapControl.displayName = 'MapControl';
  return MapControl;
};

var _default = MapControlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9tYXAtY29udHJvbC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRNYXBDb250cm9sIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsIm1hcENvbnRyb2wiLCJ3aWR0aCIsInBhZGRpbmciLCJ0b3AiLCJTdHlsZWRNYXBDb250cm9sQWN0aW9uIiwiU3R5bGVkTWFwQ29udHJvbFBhbmVsIiwibWFwUGFuZWxCYWNrZ3JvdW5kQ29sb3IiLCJTdHlsZWRNYXBDb250cm9sUGFuZWxDb250ZW50IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJkcm9wZG93blNjcm9sbEJhciIsIlN0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlciIsIm1hcFBhbmVsSGVhZGVyQmFja2dyb3VuZENvbG9yIiwidGl0bGVUZXh0Q29sb3IiLCJBY3Rpb25QYW5lbCIsImNoaWxkcmVuIiwiZGlzcGxheU5hbWUiLCJNYXBDb250cm9sVG9vbHRpcCIsIlJlYWN0IiwibWVtbyIsImlkIiwibWVzc2FnZSIsIk1hcExlZ2VuZFRvb2x0aXAiLCJMYXllclNlbGVjdG9yUGFuZWwiLCJpdGVtcyIsIm9uTWFwVG9nZ2xlTGF5ZXIiLCJpc0FjdGl2ZSIsInRvZ2dsZU1lbnVQYW5lbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIk1hcENvbnRyb2xQYW5lbCIsImhlYWRlciIsIm9uQ2xpY2siLCJzY2FsZSIsImlzRXhwb3J0IiwidHJhbnNmb3JtIiwibWFyZ2luQm90dG9tIiwidmVydGljYWxBbGlnbiIsIk1hcExlZ2VuZFBhbmVsIiwibGF5ZXJzIiwib25Ub2dnbGVNZW51UGFuZWwiLCJTcGxpdE1hcEJ1dHRvbiIsImlzU3BsaXQiLCJtYXBJbmRleCIsIm9uVG9nZ2xlU3BsaXRNYXAiLCJ1bmRlZmluZWQiLCJUb2dnbGUzZEJ1dHRvbiIsImRyYWdSb3RhdGUiLCJvblRvZ2dsZVBlcnNwZWN0aXZlIiwiU3R5bGVkVG9vbGJhciIsIlZlcnRpY2FsVG9vbGJhciIsIk1hcERyYXdQYW5lbCIsImVkaXRvciIsIm9uU2V0RWRpdG9yTW9kZSIsIm9uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eSIsInBvc2l0aW9uIiwiRURJVE9SX01PREVTIiwiRURJVCIsIkN1cnNvckNsaWNrIiwibW9kZSIsIkRSQVdfUE9MWUdPTiIsIlBvbHlnb24iLCJEUkFXX1JFQ1RBTkdMRSIsIlJlY3RhbmdsZSIsInZpc2libGUiLCJFeWVTZWVuIiwiRXllVW5zZWVuIiwiTG9jYWxlUGFuZWwiLCJhdmFpbGFibGVMb2NhbGVzIiwib25TZXRMb2NhbGUiLCJhY3RpdmVMb2NhbGUiLCJvbkNsaWNrSXRlbSIsImxvY2FsZSIsIm9uQ2xpY2tCdXR0b24iLCJnZXRMYWJlbCIsIm1hcCIsInRvVXBwZXJDYXNlIiwiTWFwQ29udHJvbEZhY3RvcnkiLCJNYXBDb250cm9sIiwibGF5ZXJzVG9SZW5kZXIiLCJsYXllclNlbGVjdG9yIiwibGF5ZXJzVG9SZW5kZXJTZWxlY3RvciIsImZpbHRlciIsImwiLCJjb25maWciLCJpc1Zpc2libGUiLCJsYXllciIsIm5hbWUiLCJsYWJlbCIsIm1hcENvbnRyb2xzIiwib25Ub2dnbGVNYXBDb250cm9sIiwicmVhZE9ubHkiLCJ2aXNpYmxlTGF5ZXJzIiwibWFwTGVnZW5kIiwidG9nZ2xlM2QiLCJzcGxpdE1hcCIsIm1hcERyYXciLCJtYXBMb2NhbGUiLCJzaG93IiwibGF5ZXJQYW5lbEl0ZW1zU2VsZWN0b3IiLCJhY3RpdmUiLCJhY3RpdmVNYXBJbmRleCIsIk9iamVjdCIsImtleXMiLCJMT0NBTEVfQ09ERVMiLCJDb21wb25lbnQiLCJkYXRhc2V0cyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiYXJyYXlPZiIsIm51bWJlciIsImZ1bmMiLCJzdHJpbmciLCJtYXBMYXllcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7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QVVPLE1BQVYsQ0FBaUJMLFVBZlI7QUFpQmpCO0FBQ0FsQixJQUFBQSxRQUFRLEVBQUVnQixzQkFBVUcsSUFsQkg7QUFtQmpCN0UsSUFBQUEsS0FBSyxFQUFFMEUsc0JBQVVLLE1BbkJBO0FBb0JqQkcsSUFBQUEsU0FBUyxFQUFFUixzQkFBVUMsTUFwQko7QUFxQmpCeEQsSUFBQUEsTUFBTSxFQUFFdUQsc0JBQVVDO0FBckJELEdBRlM7QUFBQSxtQ0FDeEI5QixVQUR3QixrQkEwQk47QUFDcEJwQyxJQUFBQSxPQUFPLEVBQUUsS0FEVztBQUVwQnZDLElBQUFBLEdBQUcsRUFBRSxDQUZlO0FBR3BCd0MsSUFBQUEsUUFBUSxFQUFFO0FBSFUsR0ExQk07QUF1SjlCbUMsRUFBQUEsVUFBVSxDQUFDOUQsV0FBWCxHQUF5QixZQUF6QjtBQUVBLFNBQU84RCxVQUFQO0FBQ0QsQ0ExSkQ7O2VBNEplRCxpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IHtJY29uUm91bmRTbWFsbCwgTWFwQ29udHJvbEJ1dHRvbiwgVG9vbHRpcH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IE1hcExheWVyU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vbWFwLWxheWVyLXNlbGVjdG9yJztcbmltcG9ydCBLZXBsZXJHbExvZ28gZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9nbyc7XG5pbXBvcnQgTWFwTGVnZW5kIGZyb20gJy4vbWFwLWxlZ2VuZCc7XG5pbXBvcnQge1xuICBDbG9zZSxcbiAgQ3ViZTNkLFxuICBDdXJzb3JDbGljayxcbiAgRGVsZXRlLFxuICBEcmF3UG9seWdvbixcbiAgRXllU2VlbixcbiAgRXllVW5zZWVuLFxuICBMYXllcnMsXG4gIExlZ2VuZCxcbiAgUG9seWdvbixcbiAgUmVjdGFuZ2xlLFxuICBTcGxpdFxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgVmVydGljYWxUb29sYmFyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3ZlcnRpY2FsLXRvb2xiYXInO1xuaW1wb3J0IFRvb2xiYXJJdGVtIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3Rvb2xiYXItaXRlbSc7XG5pbXBvcnQge0VESVRPUl9NT0RFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtMT0NBTEVfQ09ERVN9IGZyb20gJ2xvY2FsaXphdGlvbi9sb2NhbGVzJztcblxuY29uc3QgU3R5bGVkTWFwQ29udHJvbCA9IHN0eWxlZC5kaXZgXG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXBDb250cm9sLndpZHRofXB4O1xuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcENvbnRyb2wucGFkZGluZ31weDtcbiAgei1pbmRleDogMTA7XG4gIG1hcmdpbi10b3A6ICR7cHJvcHMgPT4gcHJvcHMudG9wIHx8IDB9cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xBY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA0cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwUGFuZWxCYWNrZ3JvdW5kQ29sb3J9O1xuICBmbGV4LWdyb3c6IDE7XG4gIHotaW5kZXg6IDE7XG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbWFwLWNvbnRyb2xfX3BhbmVsLWNvbnRlbnQnXG59KWBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93blNjcm9sbEJhcn07XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG5gO1xuXG5jb25zdCBTdHlsZWRNYXBDb250cm9sUGFuZWxIZWFkZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbWFwLWNvbnRyb2xfX3BhbmVsLWhlYWRlcidcbn0pYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwUGFuZWxIZWFkZXJCYWNrZ3JvdW5kQ29sb3J9O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlVGV4dENvbG9yfTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBY3Rpb25QYW5lbCA9ICh7Y2xhc3NOYW1lLCBjaGlsZHJlbn0pID0+IChcbiAgPFN0eWxlZE1hcENvbnRyb2xBY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L1N0eWxlZE1hcENvbnRyb2xBY3Rpb24+XG4pO1xuXG5BY3Rpb25QYW5lbC5kaXNwbGF5TmFtZSA9ICdBY3Rpb25QYW5lbCc7XG5cbmNvbnN0IE1hcENvbnRyb2xUb29sdGlwID0gUmVhY3QubWVtbygoe2lkLCBtZXNzYWdlfSkgPT4gKFxuICA8VG9vbHRpcCBpZD17aWR9IHBsYWNlPVwibGVmdFwiIGVmZmVjdD1cInNvbGlkXCI+XG4gICAgPHNwYW4+XG4gICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17bWVzc2FnZX0gLz5cbiAgICA8L3NwYW4+XG4gIDwvVG9vbHRpcD5cbikpO1xuXG5NYXBDb250cm9sVG9vbHRpcC5kaXNwbGF5TmFtZSA9ICdNYXBDb250cm9sVG9vbHRpcCc7XG5cbmNvbnN0IE1hcExlZ2VuZFRvb2x0aXAgPSAoe2lkLCBtZXNzYWdlfSkgPT4gKFxuICA8VG9vbHRpcCBpZD17aWR9IHBsYWNlPVwibGVmdFwiIGVmZmVjdD1cInNvbGlkXCI+XG4gICAgPHNwYW4+XG4gICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17bWVzc2FnZX0gLz5cbiAgICA8L3NwYW4+XG4gIDwvVG9vbHRpcD5cbik7XG5cbmNvbnN0IExheWVyU2VsZWN0b3JQYW5lbCA9IFJlYWN0Lm1lbW8oKHtpdGVtcywgb25NYXBUb2dnbGVMYXllciwgaXNBY3RpdmUsIHRvZ2dsZU1lbnVQYW5lbH0pID0+XG4gICFpc0FjdGl2ZSA/IChcbiAgICA8TWFwQ29udHJvbEJ1dHRvblxuICAgICAga2V5PXsxfVxuICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdG9nZ2xlTWVudVBhbmVsKCk7XG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPVwibWFwLWNvbnRyb2wtYnV0dG9uIHRvZ2dsZS1sYXllclwiXG4gICAgICBkYXRhLXRpcFxuICAgICAgZGF0YS1mb3I9XCJ0b2dnbGUtbGF5ZXJcIlxuICAgID5cbiAgICAgIDxMYXllcnMgaGVpZ2h0PVwiMjJweFwiIC8+XG4gICAgICA8TWFwQ29udHJvbFRvb2x0aXBcbiAgICAgICAgaWQ9XCJ0b2dnbGUtbGF5ZXJcIlxuICAgICAgICBtZXNzYWdlPXtpc0FjdGl2ZSA/ICd0b29sdGlwLmhpZGVMYXllclBhbmVsJyA6ICd0b29sdGlwLnNob3dMYXllclBhbmVsJ31cbiAgICAgIC8+XG4gICAgPC9NYXBDb250cm9sQnV0dG9uPlxuICApIDogKFxuICAgIDxNYXBDb250cm9sUGFuZWwgaGVhZGVyPVwiaGVhZGVyLnZpc2libGVMYXllcnNcIiBvbkNsaWNrPXt0b2dnbGVNZW51UGFuZWx9PlxuICAgICAgPE1hcExheWVyU2VsZWN0b3IgbGF5ZXJzPXtpdGVtc30gb25NYXBUb2dnbGVMYXllcj17b25NYXBUb2dnbGVMYXllcn0gLz5cbiAgICA8L01hcENvbnRyb2xQYW5lbD5cbiAgKVxuKTtcblxuTGF5ZXJTZWxlY3RvclBhbmVsLmRpc3BsYXlOYW1lID0gJ0xheWVyU2VsZWN0b3JQYW5lbCc7XG5cbmNvbnN0IE1hcENvbnRyb2xQYW5lbCA9IFJlYWN0Lm1lbW8oKHtjaGlsZHJlbiwgaGVhZGVyLCBvbkNsaWNrLCBzY2FsZSA9IDEsIGlzRXhwb3J0fSkgPT4gKFxuICA8U3R5bGVkTWFwQ29udHJvbFBhbmVsXG4gICAgc3R5bGU9e3tcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGV9KSB0cmFuc2xhdGUoY2FsYygtJHsyNSAqIChzY2FsZSAtIDEpfSUgLSAkezEwICpcbiAgICAgICAgc2NhbGV9cHgpLCBjYWxjKCR7MjUgKiAoc2NhbGUgLSAxKX0lICsgJHsxMCAqIHNjYWxlfXB4KSlgLFxuICAgICAgbWFyZ2luQm90dG9tOiAnOHB4J1xuICAgIH19XG4gID5cbiAgICA8U3R5bGVkTWFwQ29udHJvbFBhbmVsSGVhZGVyPlxuICAgICAge2lzRXhwb3J0ID8gKFxuICAgICAgICA8S2VwbGVyR2xMb2dvIHZlcnNpb249e2ZhbHNlfSBhcHBOYW1lPVwia2VwbGVyLmdsXCIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7dmVydGljYWxBbGlnbjogJ21pZGRsZSd9fT5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17aGVhZGVyfSAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICApfVxuICAgICAge2lzRXhwb3J0ID8gbnVsbCA6IChcbiAgICAgICAgPEljb25Sb3VuZFNtYWxsIGNsYXNzTmFtZT1cImNsb3NlLW1hcC1jb250cm9sLWl0ZW1cIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICA8Q2xvc2UgaGVpZ2h0PVwiMTZweFwiIC8+XG4gICAgICAgIDwvSWNvblJvdW5kU21hbGw+XG4gICAgICApfVxuICAgIDwvU3R5bGVkTWFwQ29udHJvbFBhbmVsSGVhZGVyPlxuICAgIDxTdHlsZWRNYXBDb250cm9sUGFuZWxDb250ZW50PntjaGlsZHJlbn08L1N0eWxlZE1hcENvbnRyb2xQYW5lbENvbnRlbnQ+XG4gIDwvU3R5bGVkTWFwQ29udHJvbFBhbmVsPlxuKSk7XG5cbk1hcENvbnRyb2xQYW5lbC5kaXNwbGF5TmFtZSA9ICdNYXBDb250cm9sUGFuZWwnO1xuXG5jb25zdCBNYXBMZWdlbmRQYW5lbCA9ICh7bGF5ZXJzLCBpc0FjdGl2ZSwgc2NhbGUsIG9uVG9nZ2xlTWVudVBhbmVsLCBpc0V4cG9ydH0pID0+XG4gICFpc0FjdGl2ZSA/IChcbiAgICA8TWFwQ29udHJvbEJ1dHRvblxuICAgICAga2V5PXsyfVxuICAgICAgZGF0YS10aXBcbiAgICAgIGRhdGEtZm9yPVwic2hvdy1sZWdlbmRcIlxuICAgICAgY2xhc3NOYW1lPVwibWFwLWNvbnRyb2wtYnV0dG9uIHNob3ctbGVnZW5kXCJcbiAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uVG9nZ2xlTWVudVBhbmVsKCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxMZWdlbmQgaGVpZ2h0PVwiMjJweFwiIC8+XG4gICAgICA8TWFwTGVnZW5kVG9vbHRpcCBpZD1cInNob3ctbGVnZW5kXCIgbWVzc2FnZT17J3Rvb2x0aXAuc2hvd0xlZ2VuZCd9IC8+XG4gICAgPC9NYXBDb250cm9sQnV0dG9uPlxuICApIDogKFxuICAgIDxNYXBDb250cm9sUGFuZWxcbiAgICAgIHNjYWxlPXtzY2FsZX1cbiAgICAgIGhlYWRlcj17J2hlYWRlci5sYXllckxlZ2VuZCd9XG4gICAgICBvbkNsaWNrPXtvblRvZ2dsZU1lbnVQYW5lbH1cbiAgICAgIGlzRXhwb3J0PXtpc0V4cG9ydH1cbiAgICA+XG4gICAgICA8TWFwTGVnZW5kIGxheWVycz17bGF5ZXJzfSAvPlxuICAgIDwvTWFwQ29udHJvbFBhbmVsPlxuICApO1xuXG5NYXBMZWdlbmRQYW5lbC5kaXNwbGF5TmFtZSA9ICdNYXBDb250cm9sUGFuZWwnO1xuXG5jb25zdCBTcGxpdE1hcEJ1dHRvbiA9IFJlYWN0Lm1lbW8oKHtpc1NwbGl0LCBtYXBJbmRleCwgb25Ub2dnbGVTcGxpdE1hcH0pID0+IChcbiAgPE1hcENvbnRyb2xCdXR0b25cbiAgICBhY3RpdmU9e2lzU3BsaXR9XG4gICAgb25DbGljaz17ZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBvblRvZ2dsZVNwbGl0TWFwKGlzU3BsaXQgPyBtYXBJbmRleCA6IHVuZGVmaW5lZCk7XG4gICAgfX1cbiAgICBrZXk9e2BzcGxpdC0ke2lzU3BsaXR9YH1cbiAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21hcC1jb250cm9sLWJ1dHRvbicsICdzcGxpdC1tYXAnLCB7J2Nsb3NlLW1hcCc6IGlzU3BsaXR9KX1cbiAgICBkYXRhLXRpcFxuICAgIGRhdGEtZm9yPVwiYWN0aW9uLXRvZ2dsZVwiXG4gID5cbiAgICB7aXNTcGxpdCA/IDxEZWxldGUgaGVpZ2h0PVwiMThweFwiIC8+IDogPFNwbGl0IGhlaWdodD1cIjE4cHhcIiAvPn1cbiAgICA8TWFwQ29udHJvbFRvb2x0aXBcbiAgICAgIGlkPVwiYWN0aW9uLXRvZ2dsZVwiXG4gICAgICBtZXNzYWdlPXtpc1NwbGl0ID8gJ3Rvb2x0aXAuY2xvc2VQYW5lbCcgOiAndG9vbHRpcC5zd2l0Y2hUb0R1YWxWaWV3J31cbiAgICAvPlxuICA8L01hcENvbnRyb2xCdXR0b24+XG4pKTtcblxuU3BsaXRNYXBCdXR0b24uZGlzcGxheU5hbWUgPSAnU3BsaXRNYXBCdXR0b24nO1xuXG5jb25zdCBUb2dnbGUzZEJ1dHRvbiA9IFJlYWN0Lm1lbW8oKHtkcmFnUm90YXRlLCBvblRvZ2dsZVBlcnNwZWN0aXZlfSkgPT4gKFxuICA8TWFwQ29udHJvbEJ1dHRvblxuICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgb25Ub2dnbGVQZXJzcGVjdGl2ZSgpO1xuICAgIH19XG4gICAgYWN0aXZlPXtkcmFnUm90YXRlfVxuICAgIGRhdGEtdGlwXG4gICAgZGF0YS1mb3I9XCJhY3Rpb24tM2RcIlxuICA+XG4gICAgPEN1YmUzZCBoZWlnaHQ9XCIyMnB4XCIgLz5cbiAgICA8TWFwQ29udHJvbFRvb2x0aXBcbiAgICAgIGlkPVwiYWN0aW9uLTNkXCJcbiAgICAgIG1lc3NhZ2U9e2RyYWdSb3RhdGUgPyAndG9vbHRpcC5kaXNhYmxlM0RNYXAnIDogJ3Rvb2x0aXAuM0RNYXAnfVxuICAgIC8+XG4gIDwvTWFwQ29udHJvbEJ1dHRvbj5cbikpO1xuXG5Ub2dnbGUzZEJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdUb2dnbGUzZEJ1dHRvbic7XG5cbmNvbnN0IFN0eWxlZFRvb2xiYXIgPSBzdHlsZWQoVmVydGljYWxUb29sYmFyKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzJweDtcbmA7XG5cbmNvbnN0IE1hcERyYXdQYW5lbCA9IFJlYWN0Lm1lbW8oXG4gICh7ZWRpdG9yLCBpc0FjdGl2ZSwgb25Ub2dnbGVNZW51UGFuZWwsIG9uU2V0RWRpdG9yTW9kZSwgb25Ub2dnbGVFZGl0b3JWaXNpYmlsaXR5fSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1kcmF3LWNvbnRyb2xzXCIgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxuICAgICAgICB7aXNBY3RpdmUgPyAoXG4gICAgICAgICAgPFN0eWxlZFRvb2xiYXIgc2hvdz17aXNBY3RpdmV9PlxuICAgICAgICAgICAgPFRvb2xiYXJJdGVtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmVhdHVyZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2V0RWRpdG9yTW9kZShFRElUT1JfTU9ERVMuRURJVCl9XG4gICAgICAgICAgICAgIGxhYmVsPVwidG9vbGJhci5zZWxlY3RcIlxuICAgICAgICAgICAgICBpY29uSGVpZ2h0PVwiMjJweFwiXG4gICAgICAgICAgICAgIGljb249e0N1cnNvckNsaWNrfVxuICAgICAgICAgICAgICBhY3RpdmU9e2VkaXRvci5tb2RlID09PSBFRElUT1JfTU9ERVMuRURJVH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VG9vbGJhckl0ZW1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJhdy1mZWF0dXJlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZXRFZGl0b3JNb2RlKEVESVRPUl9NT0RFUy5EUkFXX1BPTFlHT04pfVxuICAgICAgICAgICAgICBsYWJlbD1cInRvb2xiYXIucG9seWdvblwiXG4gICAgICAgICAgICAgIGljb25IZWlnaHQ9XCIyMnB4XCJcbiAgICAgICAgICAgICAgaWNvbj17UG9seWdvbn1cbiAgICAgICAgICAgICAgYWN0aXZlPXtlZGl0b3IubW9kZSA9PT0gRURJVE9SX01PREVTLkRSQVdfUE9MWUdPTn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VG9vbGJhckl0ZW1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJhdy1yZWN0YW5nbGVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNldEVkaXRvck1vZGUoRURJVE9SX01PREVTLkRSQVdfUkVDVEFOR0xFKX1cbiAgICAgICAgICAgICAgbGFiZWw9XCJ0b29sYmFyLnJlY3RhbmdsZVwiXG4gICAgICAgICAgICAgIGljb25IZWlnaHQ9XCIyMnB4XCJcbiAgICAgICAgICAgICAgaWNvbj17UmVjdGFuZ2xlfVxuICAgICAgICAgICAgICBhY3RpdmU9e2VkaXRvci5tb2RlID09PSBFRElUT1JfTU9ERVMuRFJBV19SRUNUQU5HTEV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRvb2xiYXJJdGVtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvZ2dsZS1mZWF0dXJlc1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eX1cbiAgICAgICAgICAgICAgbGFiZWw9e2VkaXRvci52aXNpYmxlID8gJ3Rvb2xiYXIuaGlkZScgOiAndG9vbGJhci5zaG93J31cbiAgICAgICAgICAgICAgaWNvbkhlaWdodD1cIjIycHhcIlxuICAgICAgICAgICAgICBpY29uPXtlZGl0b3IudmlzaWJsZSA/IEV5ZVNlZW4gOiBFeWVVbnNlZW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3R5bGVkVG9vbGJhcj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxNYXBDb250cm9sQnV0dG9uXG4gICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvblRvZ2dsZU1lbnVQYW5lbCgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgYWN0aXZlPXtpc0FjdGl2ZX1cbiAgICAgICAgICBkYXRhLXRpcFxuICAgICAgICAgIGRhdGEtZm9yPVwibWFwLWRyYXdcIlxuICAgICAgICA+XG4gICAgICAgICAgPERyYXdQb2x5Z29uIGhlaWdodD1cIjIycHhcIiAvPlxuICAgICAgICAgIDxNYXBDb250cm9sVG9vbHRpcCBpZD1cIm1hcC1kcmF3XCIgbWVzc2FnZT1cInRvb2x0aXAuRHJhd09uTWFwXCIgLz5cbiAgICAgICAgPC9NYXBDb250cm9sQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuKTtcblxuTWFwRHJhd1BhbmVsLmRpc3BsYXlOYW1lID0gJ01hcERyYXdQYW5lbCc7XG5cbmNvbnN0IExvY2FsZVBhbmVsID0gUmVhY3QubWVtbyhcbiAgKHthdmFpbGFibGVMb2NhbGVzLCBpc0FjdGl2ZSwgb25Ub2dnbGVNZW51UGFuZWwsIG9uU2V0TG9jYWxlLCBhY3RpdmVMb2NhbGV9KSA9PiB7XG4gICAgY29uc3Qgb25DbGlja0l0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICAgIGxvY2FsZSA9PiB7XG4gICAgICAgIG9uU2V0TG9jYWxlKGxvY2FsZSk7XG4gICAgICB9LFxuICAgICAgW29uU2V0TG9jYWxlXVxuICAgICk7XG5cbiAgICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soXG4gICAgICBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvblRvZ2dsZU1lbnVQYW5lbCgpO1xuICAgICAgfSxcbiAgICAgIFtvblRvZ2dsZU1lbnVQYW5lbF1cbiAgICApO1xuICAgIGNvbnN0IGdldExhYmVsID0gdXNlQ2FsbGJhY2sobG9jYWxlID0+IGB0b29sYmFyLiR7bG9jYWxlfWAsIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cbiAgICAgICAge2lzQWN0aXZlID8gKFxuICAgICAgICAgIDxTdHlsZWRUb29sYmFyIHNob3c9e2lzQWN0aXZlfT5cbiAgICAgICAgICAgIHthdmFpbGFibGVMb2NhbGVzLm1hcChsb2NhbGUgPT4gKFxuICAgICAgICAgICAgICA8VG9vbGJhckl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrSXRlbShsb2NhbGUpfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtnZXRMYWJlbChsb2NhbGUpfVxuICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlTG9jYWxlID09PSBsb2NhbGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0eWxlZFRvb2xiYXI+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8TWFwQ29udHJvbEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufSBhY3RpdmU9e2lzQWN0aXZlfSBkYXRhLXRpcCBkYXRhLWZvcj1cImxvY2FsZVwiPlxuICAgICAgICAgIHthY3RpdmVMb2NhbGUudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICA8TWFwQ29udHJvbFRvb2x0aXAgaWQ9XCJsb2NhbGVcIiBtZXNzYWdlPVwidG9vbHRpcC5zZWxlY3RMb2NhbGVcIiAvPlxuICAgICAgICA8L01hcENvbnRyb2xCdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuXG5Mb2NhbGVQYW5lbC5kaXNwbGF5TmFtZSA9ICdMb2NhbGVQYW5lbCc7XG5cbmNvbnN0IE1hcENvbnRyb2xGYWN0b3J5ID0gKCkgPT4ge1xuICBjbGFzcyBNYXBDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGRyYWdSb3RhdGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICBpc1NwbGl0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICAgIGxheWVyc1RvUmVuZGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgbWFwQ29udHJvbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG9uVG9nZ2xlUGVyc3BlY3RpdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBvblRvZ2dsZVNwbGl0TWFwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgb25Ub2dnbGVNYXBDb250cm9sOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgb25TZXRFZGl0b3JNb2RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgb25Ub2dnbGVFZGl0b3JWaXNpYmlsaXR5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdG9wOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBvblNldExvY2FsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgICAvLyBvcHRpb25hbFxuICAgICAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuICAgICAgc2NhbGU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXBMYXllcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBlZGl0b3I6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGlzU3BsaXQ6IGZhbHNlLFxuICAgICAgdG9wOiAwLFxuICAgICAgbWFwSW5kZXg6IDBcbiAgICB9O1xuXG4gICAgbGF5ZXJTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVycztcbiAgICBsYXllcnNUb1JlbmRlclNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGF5ZXJzVG9SZW5kZXI7XG4gICAgbGF5ZXJQYW5lbEl0ZW1zU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMubGF5ZXJTZWxlY3RvcixcbiAgICAgIHRoaXMubGF5ZXJzVG9SZW5kZXJTZWxlY3RvcixcbiAgICAgIChsYXllcnMsIGxheWVyc1RvUmVuZGVyKSA9PlxuICAgICAgICBsYXllcnNcbiAgICAgICAgICAuZmlsdGVyKGwgPT4gbC5jb25maWcuaXNWaXNpYmxlKVxuICAgICAgICAgIC5tYXAobGF5ZXIgPT4gKHtcbiAgICAgICAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgICAgICAgIG5hbWU6IGxheWVyLmNvbmZpZy5sYWJlbCxcbiAgICAgICAgICAgIC8vIGxheWVyXG4gICAgICAgICAgICBpc1Zpc2libGU6IGxheWVyc1RvUmVuZGVyW2xheWVyLmlkXVxuICAgICAgICAgIH0pKVxuICAgICk7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRyYWdSb3RhdGUsXG4gICAgICAgIGxheWVycyxcbiAgICAgICAgbGF5ZXJzVG9SZW5kZXIsXG4gICAgICAgIGlzU3BsaXQsXG4gICAgICAgIGlzRXhwb3J0LFxuICAgICAgICBtYXBJbmRleCxcbiAgICAgICAgbWFwQ29udHJvbHMsXG4gICAgICAgIG9uVG9nZ2xlUGVyc3BlY3RpdmUsXG4gICAgICAgIG9uVG9nZ2xlU3BsaXRNYXAsXG4gICAgICAgIG9uTWFwVG9nZ2xlTGF5ZXIsXG4gICAgICAgIG9uVG9nZ2xlTWFwQ29udHJvbCxcbiAgICAgICAgZWRpdG9yLFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgcmVhZE9ubHksXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgdG9wXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3Qge1xuICAgICAgICB2aXNpYmxlTGF5ZXJzID0ge30sXG4gICAgICAgIG1hcExlZ2VuZCA9IHt9LFxuICAgICAgICB0b2dnbGUzZCA9IHt9LFxuICAgICAgICBzcGxpdE1hcCA9IHt9LFxuICAgICAgICBtYXBEcmF3ID0ge30sXG4gICAgICAgIG1hcExvY2FsZSA9IHt9XG4gICAgICB9ID0gbWFwQ29udHJvbHM7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRNYXBDb250cm9sIGNsYXNzTmFtZT1cIm1hcC1jb250cm9sXCIgdG9wPXt0b3B9PlxuICAgICAgICAgIHsvKiBTcGxpdCBNYXAgKi99XG4gICAgICAgICAge3NwbGl0TWFwLnNob3cgJiYgcmVhZE9ubHkgIT09IHRydWUgPyAoXG4gICAgICAgICAgICA8QWN0aW9uUGFuZWwgY2xhc3NOYW1lPVwic3BsaXQtbWFwXCIga2V5PXswfT5cbiAgICAgICAgICAgICAgPFNwbGl0TWFwQnV0dG9uXG4gICAgICAgICAgICAgICAgaXNTcGxpdD17aXNTcGxpdH1cbiAgICAgICAgICAgICAgICBtYXBJbmRleD17bWFwSW5kZXh9XG4gICAgICAgICAgICAgICAgb25Ub2dnbGVTcGxpdE1hcD17b25Ub2dnbGVTcGxpdE1hcH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7LyogTWFwIExheWVycyAqL31cbiAgICAgICAgICB7aXNTcGxpdCAmJiB2aXNpYmxlTGF5ZXJzLnNob3cgJiYgcmVhZE9ubHkgIT09IHRydWUgPyAoXG4gICAgICAgICAgICA8QWN0aW9uUGFuZWwgY2xhc3NOYW1lPVwibWFwLWxheWVyc1wiIGtleT17MX0+XG4gICAgICAgICAgICAgIDxMYXllclNlbGVjdG9yUGFuZWxcbiAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5sYXllclBhbmVsSXRlbXNTZWxlY3Rvcih0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgICBvbk1hcFRvZ2dsZUxheWVyPXtvbk1hcFRvZ2dsZUxheWVyfVxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXt2aXNpYmxlTGF5ZXJzLmFjdGl2ZX1cbiAgICAgICAgICAgICAgICB0b2dnbGVNZW51UGFuZWw9eygpID0+IG9uVG9nZ2xlTWFwQ29udHJvbCgndmlzaWJsZUxheWVycycpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHsvKiAzRCBNYXAgKi99XG4gICAgICAgICAge3RvZ2dsZTNkLnNob3cgPyAoXG4gICAgICAgICAgICA8QWN0aW9uUGFuZWwgY2xhc3NOYW1lPVwidG9nZ2xlLTNkXCIga2V5PXsyfT5cbiAgICAgICAgICAgICAgPFRvZ2dsZTNkQnV0dG9uIGRyYWdSb3RhdGU9e2RyYWdSb3RhdGV9IG9uVG9nZ2xlUGVyc3BlY3RpdmU9e29uVG9nZ2xlUGVyc3BlY3RpdmV9IC8+XG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgey8qIE1hcCBMZWdlbmQgKi99XG4gICAgICAgICAge21hcExlZ2VuZC5zaG93ID8gKFxuICAgICAgICAgICAgPEFjdGlvblBhbmVsIGNsYXNzTmFtZT1cInNob3ctbGVnZW5kXCIga2V5PXszfT5cbiAgICAgICAgICAgICAgPE1hcExlZ2VuZFBhbmVsXG4gICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnMuZmlsdGVyKGwgPT4gbGF5ZXJzVG9SZW5kZXJbbC5pZF0pfVxuICAgICAgICAgICAgICAgIHNjYWxlPXtzY2FsZX1cbiAgICAgICAgICAgICAgICBpc0V4cG9ydD17aXNFeHBvcnR9XG4gICAgICAgICAgICAgICAgb25NYXBUb2dnbGVMYXllcj17b25NYXBUb2dnbGVMYXllcn1cbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17bWFwTGVnZW5kLmFjdGl2ZX1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZU1lbnVQYW5lbD17KCkgPT4gb25Ub2dnbGVNYXBDb250cm9sKCdtYXBMZWdlbmQnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7bWFwRHJhdy5zaG93ID8gKFxuICAgICAgICAgICAgPEFjdGlvblBhbmVsIGtleT17NH0+XG4gICAgICAgICAgICAgIDxNYXBEcmF3UGFuZWxcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17bWFwRHJhdy5hY3RpdmUgJiYgbWFwRHJhdy5hY3RpdmVNYXBJbmRleCA9PT0gbWFwSW5kZXh9XG4gICAgICAgICAgICAgICAgZWRpdG9yPXtlZGl0b3J9XG4gICAgICAgICAgICAgICAgb25Ub2dnbGVNZW51UGFuZWw9eygpID0+IG9uVG9nZ2xlTWFwQ29udHJvbCgnbWFwRHJhdycpfVxuICAgICAgICAgICAgICAgIG9uU2V0RWRpdG9yTW9kZT17dGhpcy5wcm9wcy5vblNldEVkaXRvck1vZGV9XG4gICAgICAgICAgICAgICAgb25Ub2dnbGVFZGl0b3JWaXNpYmlsaXR5PXt0aGlzLnByb3BzLm9uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7bWFwTG9jYWxlLnNob3cgPyAoXG4gICAgICAgICAgICA8QWN0aW9uUGFuZWwga2V5PXs1fT5cbiAgICAgICAgICAgICAgPExvY2FsZVBhbmVsXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e21hcExvY2FsZS5hY3RpdmV9XG4gICAgICAgICAgICAgICAgYWN0aXZlTG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlTG9jYWxlcz17T2JqZWN0LmtleXMoTE9DQUxFX0NPREVTKX1cbiAgICAgICAgICAgICAgICBvblNldExvY2FsZT17dGhpcy5wcm9wcy5vblNldExvY2FsZX1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZU1lbnVQYW5lbD17KCkgPT4gb25Ub2dnbGVNYXBDb250cm9sKCdtYXBMb2NhbGUnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvU3R5bGVkTWFwQ29udHJvbD5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgTWFwQ29udHJvbC5kaXNwbGF5TmFtZSA9ICdNYXBDb250cm9sJztcblxuICByZXR1cm4gTWFwQ29udHJvbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcENvbnRyb2xGYWN0b3J5O1xuIl19