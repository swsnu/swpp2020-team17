"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CloudStorageDropdownFactory = exports.SaveExportDropdownFactory = exports.PanelHeaderDropdownFactory = exports.PanelAction = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _styledComponents2 = require("../common/styled-components");

var _logo = _interopRequireDefault(require("../common/logo"));

var _icons = require("../common/icons");

var _panelDropdown = _interopRequireDefault(require("./panel-dropdown"));

var _toolbar = _interopRequireDefault(require("../common/toolbar"));

var _toolbarItem = _interopRequireDefault(require("../common/toolbar-item"));

var _reactIntl = require("react-intl");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-radius: 2px;\n  color: ", ";\n  display: flex;\n  height: 26px;\n  justify-content: space-between;\n  margin-left: 4px;\n  padding: 5px;\n  font-weight: bold;\n  p {\n    display: inline-block;\n    margin-right: 6px;\n  }\n  a {\n    height: 20px;\n  }\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n\n    a {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px 16px 0 16px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledPanelHeader = _styledComponents["default"].div.attrs({
  className: 'side-side-panel__header'
})(_templateObject(), function (props) {
  return props.theme.sidePanelHeaderBg;
});

var StyledPanelHeaderTop = _styledComponents["default"].div.attrs({
  className: 'side-panel__header__top'
})(_templateObject2());

var StyledPanelTopActions = _styledComponents["default"].div.attrs({
  className: 'side-panel__top__actions'
})(_templateObject3());

var StyledPanelAction = _styledComponents["default"].div.attrs({
  className: 'side-panel__panel-header__action'
})(_templateObject4(), function (props) {
  return props.active ? props.theme.textColorHl : props.theme.subtextColor;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});

var StyledToolbar = (0, _styledComponents["default"])(_toolbar["default"])(_templateObject5());

var PanelAction = function PanelAction(_ref) {
  var item = _ref.item,
      onClick = _ref.onClick;
  return _react["default"].createElement(StyledPanelAction, {
    "data-tip": true,
    "data-for": "".concat(item.id, "-action"),
    onClick: onClick
  }, item.label ? _react["default"].createElement("p", null, item.label) : null, _react["default"].createElement("a", {
    target: item.blank ? '_blank' : '',
    href: item.href
  }, _react["default"].createElement(item.iconComponent, (0, _extends2["default"])({
    height: "20px"
  }, item.iconComponentProps))), item.tooltip ? _react["default"].createElement(_styledComponents2.Tooltip, {
    id: "".concat(item.id, "-action"),
    place: "bottom",
    delayShow: 500,
    effect: "solid"
  }, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: item.tooltip
  })) : null);
};

exports.PanelAction = PanelAction;

var PanelHeaderDropdownFactory = function PanelHeaderDropdownFactory() {
  var PanelHeaderDropdown = function PanelHeaderDropdown(_ref2) {
    var items = _ref2.items,
        show = _ref2.show,
        onClose = _ref2.onClose,
        id = _ref2.id;
    return _react["default"].createElement(StyledToolbar, {
      show: show,
      className: "".concat(id, "-dropdown")
    }, _react["default"].createElement(_panelDropdown["default"], {
      className: "panel-header-dropdown__inner",
      show: show,
      onClose: onClose
    }, items.map(function (item) {
      return _react["default"].createElement(_toolbarItem["default"], {
        id: item.key,
        key: item.key,
        label: item.label,
        icon: item.icon,
        onClick: item.onClick,
        onClose: onClose
      });
    })));
  };

  return PanelHeaderDropdown;
};

exports.PanelHeaderDropdownFactory = PanelHeaderDropdownFactory;

var getDropdownItemsSelector = function getDropdownItemsSelector() {
  return (0, _reselect.createSelector)(function (props) {
    return props;
  }, function (props) {
    return props.items.map(function (t) {
      return _objectSpread({}, t, {
        onClick: t.onClick && t.onClick(props) ? t.onClick(props) : null
      });
    }).filter(function (l) {
      return l.onClick;
    });
  });
};

var SaveExportDropdownFactory = function SaveExportDropdownFactory(PanelHeaderDropdown) {
  var dropdownItemsSelector = getDropdownItemsSelector();

  var SaveExportDropdown = function SaveExportDropdown(props) {
    return _react["default"].createElement(PanelHeaderDropdown, {
      items: dropdownItemsSelector(props),
      show: props.show,
      onClose: props.onClose,
      id: "save-export"
    });
  };

  SaveExportDropdown.defaultProps = {
    items: [{
      label: 'toolbar.exportImage',
      icon: _icons.Picture,
      key: 'image',
      onClick: function onClick(props) {
        return props.onExportImage;
      }
    }, {
      label: 'toolbar.exportData',
      icon: _icons.DataTable,
      key: 'data',
      onClick: function onClick(props) {
        return props.onExportData;
      }
    }, {
      label: 'toolbar.exportMap',
      icon: _icons.Map,
      key: 'map',
      onClick: function onClick(props) {
        return props.onExportMap;
      }
    }, {
      label: 'toolbar.saveMap',
      icon: _icons.Save2,
      key: 'save',
      onClick: function onClick(props) {
        return props.onSaveMap;
      }
    }, {
      label: 'toolbar.shareMapURL',
      icon: _icons.Share,
      key: 'share',
      onClick: function onClick(props) {
        return props.onShareMap;
      }
    }]
  };
  return SaveExportDropdown;
};

exports.SaveExportDropdownFactory = SaveExportDropdownFactory;
SaveExportDropdownFactory.deps = [PanelHeaderDropdownFactory];

var CloudStorageDropdownFactory = function CloudStorageDropdownFactory(PanelHeaderDropdown) {
  var dropdownItemsSelector = getDropdownItemsSelector();

  var CloudStorageDropdown = function CloudStorageDropdown(props) {
    return _react["default"].createElement(PanelHeaderDropdown, {
      items: dropdownItemsSelector(props),
      show: props.show,
      onClose: props.onClose,
      id: "cloud-storage"
    });
  };

  CloudStorageDropdown.defaultProps = {
    items: [{
      label: 'Save',
      icon: _icons.Save2,
      key: 'save',
      onClick: function onClick(props) {
        return props.onSaveToStorage;
      }
    }, {
      label: 'Save As',
      icon: _icons.Save2,
      key: 'saveAs',
      onClick: function onClick(props) {
        return props.onSaveAsToStorage;
      }
    }]
  };
  return CloudStorageDropdown;
};

exports.CloudStorageDropdownFactory = CloudStorageDropdownFactory;
CloudStorageDropdownFactory.deps = [PanelHeaderDropdownFactory];
PanelHeaderFactory.deps = [SaveExportDropdownFactory, CloudStorageDropdownFactory];

function PanelHeaderFactory(SaveExportDropdown, CloudStorageDropdown) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(PanelHeader, _Component);

    function PanelHeader() {
      (0, _classCallCheck2["default"])(this, PanelHeader);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PanelHeader).apply(this, arguments));
    }

    (0, _createClass2["default"])(PanelHeader, [{
      key: "render",
      value: function render() {
        var _this = this;

        var _this$props = this.props,
            appName = _this$props.appName,
            appWebsite = _this$props.appWebsite,
            version = _this$props.version,
            actionItems = _this$props.actionItems,
            visibleDropdown = _this$props.visibleDropdown,
            showExportDropdown = _this$props.showExportDropdown,
            hideExportDropdown = _this$props.hideExportDropdown,
            dropdownCallbacks = (0, _objectWithoutProperties2["default"])(_this$props, ["appName", "appWebsite", "version", "actionItems", "visibleDropdown", "showExportDropdown", "hideExportDropdown"]);
        var items = actionItems || []; // don't render cloud storage icon if onSaveToStorage is not provided

        if (typeof this.props.onSaveToStorage !== 'function') {
          items = actionItems.filter(function (ai) {
            return ai.id !== 'storage';
          });
        }

        return _react["default"].createElement(StyledPanelHeader, {
          className: "side-panel__panel-header"
        }, _react["default"].createElement(StyledPanelHeaderTop, {
          className: "side-panel__panel-header__top"
        }, _react["default"].createElement(this.props.logoComponent, {
          appName: appName,
          version: version,
          appWebsite: appWebsite
        }), _react["default"].createElement(StyledPanelTopActions, null, items.map(function (item) {
          return _react["default"].createElement("div", {
            className: "side-panel__panel-header__right",
            key: item.id,
            style: {
              position: 'relative'
            }
          }, _react["default"].createElement(PanelAction, {
            item: item,
            onClick: function onClick() {
              if (item.dropdownComponent) {
                showExportDropdown(item.id);
              } else {
                item.onClick && item.onClick(_this.props);
              }
            }
          }), item.dropdownComponent ? _react["default"].createElement(item.dropdownComponent, (0, _extends2["default"])({
            onClose: hideExportDropdown,
            show: visibleDropdown === item.id
          }, dropdownCallbacks)) : null);
        }))));
      }
    }]);
    return PanelHeader;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    appName: _propTypes["default"].string,
    appWebsite: _propTypes["default"].string,
    version: _propTypes["default"].string,
    visibleDropdown: _propTypes["default"].string,
    logoComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    actionItems: _propTypes["default"].arrayOf(_propTypes["default"].any),
    onExportImage: _propTypes["default"].func,
    onExportData: _propTypes["default"].func,
    onExportConfig: _propTypes["default"].func,
    onExportMap: _propTypes["default"].func,
    onSaveToStorage: _propTypes["default"].func,
    onSaveAsToStorage: _propTypes["default"].func,
    onSaveMap: _propTypes["default"].func,
    onShareMap: _propTypes["default"].func
  }), (0, _defineProperty2["default"])(_class, "defaultProps", {
    logoComponent: _logo["default"],
    actionItems: [{
      id: 'storage',
      iconComponent: _icons.Db,
      tooltip: 'tooltip.cloudStorage',
      onClick: function onClick() {},
      dropdownComponent: CloudStorageDropdown
    }, {
      id: 'save',
      iconComponent: _icons.Save,
      onClick: function onClick() {},
      label: 'Share',
      dropdownComponent: SaveExportDropdown
    }]
  }), _temp;
}

var _default = PanelHeaderFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFBhbmVsSGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsSGVhZGVyQmciLCJTdHlsZWRQYW5lbEhlYWRlclRvcCIsIlN0eWxlZFBhbmVsVG9wQWN0aW9ucyIsIlN0eWxlZFBhbmVsQWN0aW9uIiwiYWN0aXZlIiwidGV4dENvbG9ySGwiLCJzdWJ0ZXh0Q29sb3IiLCJTdHlsZWRUb29sYmFyIiwiVG9vbGJhciIsIlBhbmVsQWN0aW9uIiwiaXRlbSIsIm9uQ2xpY2siLCJpZCIsImxhYmVsIiwiYmxhbmsiLCJocmVmIiwiaWNvbkNvbXBvbmVudFByb3BzIiwidG9vbHRpcCIsIlBhbmVsSGVhZGVyRHJvcGRvd25GYWN0b3J5IiwiUGFuZWxIZWFkZXJEcm9wZG93biIsIml0ZW1zIiwic2hvdyIsIm9uQ2xvc2UiLCJtYXAiLCJrZXkiLCJpY29uIiwiZ2V0RHJvcGRvd25JdGVtc1NlbGVjdG9yIiwidCIsImZpbHRlciIsImwiLCJTYXZlRXhwb3J0RHJvcGRvd25GYWN0b3J5IiwiZHJvcGRvd25JdGVtc1NlbGVjdG9yIiwiU2F2ZUV4cG9ydERyb3Bkb3duIiwiZGVmYXVsdFByb3BzIiwiUGljdHVyZSIsIm9uRXhwb3J0SW1hZ2UiLCJEYXRhVGFibGUiLCJvbkV4cG9ydERhdGEiLCJNYXBJY29uIiwib25FeHBvcnRNYXAiLCJTYXZlMiIsIm9uU2F2ZU1hcCIsIlNoYXJlIiwib25TaGFyZU1hcCIsImRlcHMiLCJDbG91ZFN0b3JhZ2VEcm9wZG93bkZhY3RvcnkiLCJDbG91ZFN0b3JhZ2VEcm9wZG93biIsIm9uU2F2ZVRvU3RvcmFnZSIsIm9uU2F2ZUFzVG9TdG9yYWdlIiwiUGFuZWxIZWFkZXJGYWN0b3J5IiwiYXBwTmFtZSIsImFwcFdlYnNpdGUiLCJ2ZXJzaW9uIiwiYWN0aW9uSXRlbXMiLCJ2aXNpYmxlRHJvcGRvd24iLCJzaG93RXhwb3J0RHJvcGRvd24iLCJoaWRlRXhwb3J0RHJvcGRvd24iLCJkcm9wZG93bkNhbGxiYWNrcyIsImFpIiwicG9zaXRpb24iLCJkcm9wZG93bkNvbXBvbmVudCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImxvZ29Db21wb25lbnQiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiZnVuYyIsImFycmF5T2YiLCJhbnkiLCJvbkV4cG9ydENvbmZpZyIsIktlcGxlckdsTG9nbyIsImljb25Db21wb25lbnQiLCJEYiIsIlNhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHQyw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQ3pDQyxFQUFBQSxTQUFTLEVBQUU7QUFEOEIsQ0FBakIsQ0FBSCxvQkFHRCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLGlCQUFoQjtBQUFBLENBSEosQ0FBdkI7O0FBT0EsSUFBTUMsb0JBQW9CLEdBQUdQLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDNUNDLEVBQUFBLFNBQVMsRUFBRTtBQURpQyxDQUFqQixDQUFILG9CQUExQjs7QUFTQSxJQUFNSyxxQkFBcUIsR0FBR1IsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUM3Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRGtDLENBQWpCLENBQUgsb0JBQTNCOztBQU1BLElBQU1NLGlCQUFpQixHQUFHVCw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQ3pDQyxFQUFBQSxTQUFTLEVBQUU7QUFEOEIsQ0FBakIsQ0FBSCxxQkFLWixVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDTSxNQUFOLEdBQWVOLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxXQUEzQixHQUF5Q1AsS0FBSyxDQUFDQyxLQUFOLENBQVlPLFlBQTFEO0FBQUEsQ0FMTyxFQXNCVixVQUFBUixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLFdBQWhCO0FBQUEsQ0F0QkssRUF5QlIsVUFBQVAsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxXQUFoQjtBQUFBLENBekJHLENBQXZCOztBQThCQSxJQUFNRSxhQUFhLEdBQUcsa0NBQU9DLG1CQUFQLENBQUgsb0JBQW5COztBQUlPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBRUMsSUFBRixRQUFFQSxJQUFGO0FBQUEsTUFBUUMsT0FBUixRQUFRQSxPQUFSO0FBQUEsU0FDekIsZ0NBQUMsaUJBQUQ7QUFBbUIsb0JBQW5CO0FBQTRCLDBCQUFhRCxJQUFJLENBQUNFLEVBQWxCLFlBQTVCO0FBQTJELElBQUEsT0FBTyxFQUFFRDtBQUFwRSxLQUNHRCxJQUFJLENBQUNHLEtBQUwsR0FBYSwyQ0FBSUgsSUFBSSxDQUFDRyxLQUFULENBQWIsR0FBbUMsSUFEdEMsRUFFRTtBQUFHLElBQUEsTUFBTSxFQUFFSCxJQUFJLENBQUNJLEtBQUwsR0FBYSxRQUFiLEdBQXdCLEVBQW5DO0FBQXVDLElBQUEsSUFBSSxFQUFFSixJQUFJLENBQUNLO0FBQWxELEtBQ0UsZ0NBQUMsSUFBRCxDQUFNLGFBQU47QUFBb0IsSUFBQSxNQUFNLEVBQUM7QUFBM0IsS0FBc0NMLElBQUksQ0FBQ00sa0JBQTNDLEVBREYsQ0FGRixFQUtHTixJQUFJLENBQUNPLE9BQUwsR0FDQyxnQ0FBQywwQkFBRDtBQUFTLElBQUEsRUFBRSxZQUFLUCxJQUFJLENBQUNFLEVBQVYsWUFBWDtBQUFrQyxJQUFBLEtBQUssRUFBQyxRQUF4QztBQUFpRCxJQUFBLFNBQVMsRUFBRSxHQUE1RDtBQUFpRSxJQUFBLE1BQU0sRUFBQztBQUF4RSxLQUNFLGdDQUFDLDJCQUFEO0FBQWtCLElBQUEsRUFBRSxFQUFFRixJQUFJLENBQUNPO0FBQTNCLElBREYsQ0FERCxHQUlHLElBVE4sQ0FEeUI7QUFBQSxDQUFwQjs7OztBQWNBLElBQU1DLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsR0FBTTtBQUM5QyxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLFFBQWdDO0FBQUEsUUFBOUJDLEtBQThCLFNBQTlCQSxLQUE4QjtBQUFBLFFBQXZCQyxJQUF1QixTQUF2QkEsSUFBdUI7QUFBQSxRQUFqQkMsT0FBaUIsU0FBakJBLE9BQWlCO0FBQUEsUUFBUlYsRUFBUSxTQUFSQSxFQUFRO0FBQzFELFdBQ0UsZ0NBQUMsYUFBRDtBQUFlLE1BQUEsSUFBSSxFQUFFUyxJQUFyQjtBQUEyQixNQUFBLFNBQVMsWUFBS1QsRUFBTDtBQUFwQyxPQUNFLGdDQUFDLHlCQUFEO0FBQ0UsTUFBQSxTQUFTLEVBQUMsOEJBRFo7QUFFRSxNQUFBLElBQUksRUFBRVMsSUFGUjtBQUdFLE1BQUEsT0FBTyxFQUFFQztBQUhYLE9BS0dGLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUFiLElBQUk7QUFBQSxhQUNiLGdDQUFDLHVCQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUVBLElBQUksQ0FBQ2MsR0FEWDtBQUVFLFFBQUEsR0FBRyxFQUFFZCxJQUFJLENBQUNjLEdBRlo7QUFHRSxRQUFBLEtBQUssRUFBRWQsSUFBSSxDQUFDRyxLQUhkO0FBSUUsUUFBQSxJQUFJLEVBQUVILElBQUksQ0FBQ2UsSUFKYjtBQUtFLFFBQUEsT0FBTyxFQUFFZixJQUFJLENBQUNDLE9BTGhCO0FBTUUsUUFBQSxPQUFPLEVBQUVXO0FBTlgsUUFEYTtBQUFBLEtBQWQsQ0FMSCxDQURGLENBREY7QUFvQkQsR0FyQkQ7O0FBdUJBLFNBQU9ILG1CQUFQO0FBQ0QsQ0F6Qk07Ozs7QUEyQlAsSUFBTU8sd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQjtBQUFBLFNBQy9CLDhCQUNFLFVBQUE1QixLQUFLO0FBQUEsV0FBSUEsS0FBSjtBQUFBLEdBRFAsRUFFRSxVQUFBQSxLQUFLO0FBQUEsV0FDSEEsS0FBSyxDQUFDc0IsS0FBTixDQUNHRyxHQURILENBQ08sVUFBQUksQ0FBQztBQUFBLCtCQUNEQSxDQURDO0FBRUpoQixRQUFBQSxPQUFPLEVBQUVnQixDQUFDLENBQUNoQixPQUFGLElBQWFnQixDQUFDLENBQUNoQixPQUFGLENBQVViLEtBQVYsQ0FBYixHQUFnQzZCLENBQUMsQ0FBQ2hCLE9BQUYsQ0FBVWIsS0FBVixDQUFoQyxHQUFtRDtBQUZ4RDtBQUFBLEtBRFIsRUFLRzhCLE1BTEgsQ0FLVSxVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDbEIsT0FBTjtBQUFBLEtBTFgsQ0FERztBQUFBLEdBRlAsQ0FEK0I7QUFBQSxDQUFqQzs7QUFZTyxJQUFNbUIseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFBWCxtQkFBbUIsRUFBSTtBQUM5RCxNQUFNWSxxQkFBcUIsR0FBR0wsd0JBQXdCLEVBQXREOztBQUVBLE1BQU1NLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQWxDLEtBQUs7QUFBQSxXQUM5QixnQ0FBQyxtQkFBRDtBQUNFLE1BQUEsS0FBSyxFQUFFaUMscUJBQXFCLENBQUNqQyxLQUFELENBRDlCO0FBRUUsTUFBQSxJQUFJLEVBQUVBLEtBQUssQ0FBQ3VCLElBRmQ7QUFHRSxNQUFBLE9BQU8sRUFBRXZCLEtBQUssQ0FBQ3dCLE9BSGpCO0FBSUUsTUFBQSxFQUFFLEVBQUM7QUFKTCxNQUQ4QjtBQUFBLEdBQWhDOztBQVNBVSxFQUFBQSxrQkFBa0IsQ0FBQ0MsWUFBbkIsR0FBa0M7QUFDaENiLElBQUFBLEtBQUssRUFBRSxDQUNMO0FBQ0VQLE1BQUFBLEtBQUssRUFBRSxxQkFEVDtBQUVFWSxNQUFBQSxJQUFJLEVBQUVTLGNBRlI7QUFHRVYsTUFBQUEsR0FBRyxFQUFFLE9BSFA7QUFJRWIsTUFBQUEsT0FBTyxFQUFFLGlCQUFBYixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDcUMsYUFBVjtBQUFBO0FBSmhCLEtBREssRUFPTDtBQUNFdEIsTUFBQUEsS0FBSyxFQUFFLG9CQURUO0FBRUVZLE1BQUFBLElBQUksRUFBRVcsZ0JBRlI7QUFHRVosTUFBQUEsR0FBRyxFQUFFLE1BSFA7QUFJRWIsTUFBQUEsT0FBTyxFQUFFLGlCQUFBYixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDdUMsWUFBVjtBQUFBO0FBSmhCLEtBUEssRUFhTDtBQUNFeEIsTUFBQUEsS0FBSyxFQUFFLG1CQURUO0FBRUVZLE1BQUFBLElBQUksRUFBRWEsVUFGUjtBQUdFZCxNQUFBQSxHQUFHLEVBQUUsS0FIUDtBQUlFYixNQUFBQSxPQUFPLEVBQUUsaUJBQUFiLEtBQUs7QUFBQSxlQUFJQSxLQUFLLENBQUN5QyxXQUFWO0FBQUE7QUFKaEIsS0FiSyxFQW1CTDtBQUNFMUIsTUFBQUEsS0FBSyxFQUFFLGlCQURUO0FBRUVZLE1BQUFBLElBQUksRUFBRWUsWUFGUjtBQUdFaEIsTUFBQUEsR0FBRyxFQUFFLE1BSFA7QUFJRWIsTUFBQUEsT0FBTyxFQUFFLGlCQUFBYixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDMkMsU0FBVjtBQUFBO0FBSmhCLEtBbkJLLEVBeUJMO0FBQ0U1QixNQUFBQSxLQUFLLEVBQUUscUJBRFQ7QUFFRVksTUFBQUEsSUFBSSxFQUFFaUIsWUFGUjtBQUdFbEIsTUFBQUEsR0FBRyxFQUFFLE9BSFA7QUFJRWIsTUFBQUEsT0FBTyxFQUFFLGlCQUFBYixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDNkMsVUFBVjtBQUFBO0FBSmhCLEtBekJLO0FBRHlCLEdBQWxDO0FBbUNBLFNBQU9YLGtCQUFQO0FBQ0QsQ0FoRE07OztBQWlEUEYseUJBQXlCLENBQUNjLElBQTFCLEdBQWlDLENBQUMxQiwwQkFBRCxDQUFqQzs7QUFFTyxJQUFNMkIsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUE4QixDQUFBMUIsbUJBQW1CLEVBQUk7QUFDaEUsTUFBTVkscUJBQXFCLEdBQUdMLHdCQUF3QixFQUF0RDs7QUFFQSxNQUFNb0Isb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBaEQsS0FBSztBQUFBLFdBQ2hDLGdDQUFDLG1CQUFEO0FBQ0UsTUFBQSxLQUFLLEVBQUVpQyxxQkFBcUIsQ0FBQ2pDLEtBQUQsQ0FEOUI7QUFFRSxNQUFBLElBQUksRUFBRUEsS0FBSyxDQUFDdUIsSUFGZDtBQUdFLE1BQUEsT0FBTyxFQUFFdkIsS0FBSyxDQUFDd0IsT0FIakI7QUFJRSxNQUFBLEVBQUUsRUFBQztBQUpMLE1BRGdDO0FBQUEsR0FBbEM7O0FBUUF3QixFQUFBQSxvQkFBb0IsQ0FBQ2IsWUFBckIsR0FBb0M7QUFDbENiLElBQUFBLEtBQUssRUFBRSxDQUNMO0FBQ0VQLE1BQUFBLEtBQUssRUFBRSxNQURUO0FBRUVZLE1BQUFBLElBQUksRUFBRWUsWUFGUjtBQUdFaEIsTUFBQUEsR0FBRyxFQUFFLE1BSFA7QUFJRWIsTUFBQUEsT0FBTyxFQUFFLGlCQUFBYixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDaUQsZUFBVjtBQUFBO0FBSmhCLEtBREssRUFPTDtBQUNFbEMsTUFBQUEsS0FBSyxFQUFFLFNBRFQ7QUFFRVksTUFBQUEsSUFBSSxFQUFFZSxZQUZSO0FBR0VoQixNQUFBQSxHQUFHLEVBQUUsUUFIUDtBQUlFYixNQUFBQSxPQUFPLEVBQUUsaUJBQUFiLEtBQUs7QUFBQSxlQUFJQSxLQUFLLENBQUNrRCxpQkFBVjtBQUFBO0FBSmhCLEtBUEs7QUFEMkIsR0FBcEM7QUFnQkEsU0FBT0Ysb0JBQVA7QUFDRCxDQTVCTTs7O0FBNkJQRCwyQkFBMkIsQ0FBQ0QsSUFBNUIsR0FBbUMsQ0FBQzFCLDBCQUFELENBQW5DO0FBRUErQixrQkFBa0IsQ0FBQ0wsSUFBbkIsR0FBMEIsQ0FBQ2QseUJBQUQsRUFBNEJlLDJCQUE1QixDQUExQjs7QUFFQSxTQUFTSSxrQkFBVCxDQUE0QmpCLGtCQUE1QixFQUFnRGMsb0JBQWhELEVBQXNFO0FBQUE7O0FBQ3BFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkFzQ1c7QUFBQTs7QUFBQSwwQkFVSCxLQUFLaEQsS0FWRjtBQUFBLFlBRUxvRCxPQUZLLGVBRUxBLE9BRks7QUFBQSxZQUdMQyxVQUhLLGVBR0xBLFVBSEs7QUFBQSxZQUlMQyxPQUpLLGVBSUxBLE9BSks7QUFBQSxZQUtMQyxXQUxLLGVBS0xBLFdBTEs7QUFBQSxZQU1MQyxlQU5LLGVBTUxBLGVBTks7QUFBQSxZQU9MQyxrQkFQSyxlQU9MQSxrQkFQSztBQUFBLFlBUUxDLGtCQVJLLGVBUUxBLGtCQVJLO0FBQUEsWUFTRkMsaUJBVEU7QUFXUCxZQUFJckMsS0FBSyxHQUFHaUMsV0FBVyxJQUFJLEVBQTNCLENBWE8sQ0FhUDs7QUFDQSxZQUFJLE9BQU8sS0FBS3ZELEtBQUwsQ0FBV2lELGVBQWxCLEtBQXNDLFVBQTFDLEVBQXNEO0FBQ3BEM0IsVUFBQUEsS0FBSyxHQUFHaUMsV0FBVyxDQUFDekIsTUFBWixDQUFtQixVQUFBOEIsRUFBRTtBQUFBLG1CQUFJQSxFQUFFLENBQUM5QyxFQUFILEtBQVUsU0FBZDtBQUFBLFdBQXJCLENBQVI7QUFDRDs7QUFFRCxlQUNFLGdDQUFDLGlCQUFEO0FBQW1CLFVBQUEsU0FBUyxFQUFDO0FBQTdCLFdBQ0UsZ0NBQUMsb0JBQUQ7QUFBc0IsVUFBQSxTQUFTLEVBQUM7QUFBaEMsV0FDRSxxQ0FBTSxLQUFOLENBQVksYUFBWjtBQUEwQixVQUFBLE9BQU8sRUFBRXNDLE9BQW5DO0FBQTRDLFVBQUEsT0FBTyxFQUFFRSxPQUFyRDtBQUE4RCxVQUFBLFVBQVUsRUFBRUQ7QUFBMUUsVUFERixFQUVFLGdDQUFDLHFCQUFELFFBQ0cvQixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBYixJQUFJO0FBQUEsaUJBQ2I7QUFDRSxZQUFBLFNBQVMsRUFBQyxpQ0FEWjtBQUVFLFlBQUEsR0FBRyxFQUFFQSxJQUFJLENBQUNFLEVBRlo7QUFHRSxZQUFBLEtBQUssRUFBRTtBQUFDK0MsY0FBQUEsUUFBUSxFQUFFO0FBQVg7QUFIVCxhQUtFLGdDQUFDLFdBQUQ7QUFDRSxZQUFBLElBQUksRUFBRWpELElBRFI7QUFFRSxZQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiLGtCQUFJQSxJQUFJLENBQUNrRCxpQkFBVCxFQUE0QjtBQUMxQkwsZ0JBQUFBLGtCQUFrQixDQUFDN0MsSUFBSSxDQUFDRSxFQUFOLENBQWxCO0FBQ0QsZUFGRCxNQUVPO0FBQ0xGLGdCQUFBQSxJQUFJLENBQUNDLE9BQUwsSUFBZ0JELElBQUksQ0FBQ0MsT0FBTCxDQUFhLEtBQUksQ0FBQ2IsS0FBbEIsQ0FBaEI7QUFDRDtBQUNGO0FBUkgsWUFMRixFQWVHWSxJQUFJLENBQUNrRCxpQkFBTCxHQUNDLGdDQUFDLElBQUQsQ0FBTSxpQkFBTjtBQUNFLFlBQUEsT0FBTyxFQUFFSixrQkFEWDtBQUVFLFlBQUEsSUFBSSxFQUFFRixlQUFlLEtBQUs1QyxJQUFJLENBQUNFO0FBRmpDLGFBR002QyxpQkFITixFQURELEdBTUcsSUFyQk4sQ0FEYTtBQUFBLFNBQWQsQ0FESCxDQUZGLENBREYsQ0FERjtBQWtDRDtBQTFGSDtBQUFBO0FBQUEsSUFBaUNJLGdCQUFqQyx5REFDcUI7QUFDakJYLElBQUFBLE9BQU8sRUFBRVksc0JBQVVDLE1BREY7QUFFakJaLElBQUFBLFVBQVUsRUFBRVcsc0JBQVVDLE1BRkw7QUFHakJYLElBQUFBLE9BQU8sRUFBRVUsc0JBQVVDLE1BSEY7QUFJakJULElBQUFBLGVBQWUsRUFBRVEsc0JBQVVDLE1BSlY7QUFLakJDLElBQUFBLGFBQWEsRUFBRUYsc0JBQVVHLFNBQVYsQ0FBb0IsQ0FBQ0gsc0JBQVVJLE9BQVgsRUFBb0JKLHNCQUFVSyxJQUE5QixDQUFwQixDQUxFO0FBTWpCZCxJQUFBQSxXQUFXLEVBQUVTLHNCQUFVTSxPQUFWLENBQWtCTixzQkFBVU8sR0FBNUIsQ0FOSTtBQU9qQmxDLElBQUFBLGFBQWEsRUFBRTJCLHNCQUFVSyxJQVBSO0FBUWpCOUIsSUFBQUEsWUFBWSxFQUFFeUIsc0JBQVVLLElBUlA7QUFTakJHLElBQUFBLGNBQWMsRUFBRVIsc0JBQVVLLElBVFQ7QUFVakI1QixJQUFBQSxXQUFXLEVBQUV1QixzQkFBVUssSUFWTjtBQVdqQnBCLElBQUFBLGVBQWUsRUFBRWUsc0JBQVVLLElBWFY7QUFZakJuQixJQUFBQSxpQkFBaUIsRUFBRWMsc0JBQVVLLElBWlo7QUFhakIxQixJQUFBQSxTQUFTLEVBQUVxQixzQkFBVUssSUFiSjtBQWNqQnhCLElBQUFBLFVBQVUsRUFBRW1CLHNCQUFVSztBQWRMLEdBRHJCLDREQWtCd0I7QUFDcEJILElBQUFBLGFBQWEsRUFBRU8sZ0JBREs7QUFFcEJsQixJQUFBQSxXQUFXLEVBQUUsQ0FDWDtBQUNFekMsTUFBQUEsRUFBRSxFQUFFLFNBRE47QUFFRTRELE1BQUFBLGFBQWEsRUFBRUMsU0FGakI7QUFHRXhELE1BQUFBLE9BQU8sRUFBRSxzQkFIWDtBQUlFTixNQUFBQSxPQUFPLEVBQUUsbUJBQU0sQ0FBRSxDQUpuQjtBQUtFaUQsTUFBQUEsaUJBQWlCLEVBQUVkO0FBTHJCLEtBRFcsRUFRWDtBQUNFbEMsTUFBQUEsRUFBRSxFQUFFLE1BRE47QUFFRTRELE1BQUFBLGFBQWEsRUFBRUUsV0FGakI7QUFHRS9ELE1BQUFBLE9BQU8sRUFBRSxtQkFBTSxDQUFFLENBSG5CO0FBSUVFLE1BQUFBLEtBQUssRUFBRSxPQUpUO0FBS0UrQyxNQUFBQSxpQkFBaUIsRUFBRTVCO0FBTHJCLEtBUlc7QUFGTyxHQWxCeEI7QUE0RkQ7O2VBRWNpQixrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHtUb29sdGlwfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgS2VwbGVyR2xMb2dvIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2xvZ28nO1xuaW1wb3J0IHtTYXZlLCBEYXRhVGFibGUsIFNhdmUyLCBQaWN0dXJlLCBEYiwgTWFwIGFzIE1hcEljb24sIFNoYXJlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgQ2xpY2tPdXRzaWRlQ2xvc2VEcm9wZG93biBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtZHJvcGRvd24nO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vdG9vbGJhcic7XG5pbXBvcnQgVG9vbGJhckl0ZW0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vdG9vbGJhci1pdGVtJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmNvbnN0IFN0eWxlZFBhbmVsSGVhZGVyID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtc2lkZS1wYW5lbF9faGVhZGVyJ1xufSlgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsSGVhZGVyQmd9O1xuICBwYWRkaW5nOiAxMnB4IDE2cHggMCAxNnB4O1xuYDtcblxuY29uc3QgU3R5bGVkUGFuZWxIZWFkZXJUb3AgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbF9faGVhZGVyX190b3AnXG59KWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IFN0eWxlZFBhbmVsVG9wQWN0aW9ucyA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsX190b3BfX2FjdGlvbnMnXG59KWBcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IFN0eWxlZFBhbmVsQWN0aW9uID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWxfX3BhbmVsLWhlYWRlcl9fYWN0aW9uJ1xufSlgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnRleHRDb2xvckhsIDogcHJvcHMudGhlbWUuc3VidGV4dENvbG9yKX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMjZweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIH1cbiAgYSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRUb29sYmFyID0gc3R5bGVkKFRvb2xiYXIpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5gO1xuXG5leHBvcnQgY29uc3QgUGFuZWxBY3Rpb24gPSAoe2l0ZW0sIG9uQ2xpY2t9KSA9PiAoXG4gIDxTdHlsZWRQYW5lbEFjdGlvbiBkYXRhLXRpcCBkYXRhLWZvcj17YCR7aXRlbS5pZH0tYWN0aW9uYH0gb25DbGljaz17b25DbGlja30+XG4gICAge2l0ZW0ubGFiZWwgPyA8cD57aXRlbS5sYWJlbH08L3A+IDogbnVsbH1cbiAgICA8YSB0YXJnZXQ9e2l0ZW0uYmxhbmsgPyAnX2JsYW5rJyA6ICcnfSBocmVmPXtpdGVtLmhyZWZ9PlxuICAgICAgPGl0ZW0uaWNvbkNvbXBvbmVudCBoZWlnaHQ9XCIyMHB4XCIgey4uLml0ZW0uaWNvbkNvbXBvbmVudFByb3BzfSAvPlxuICAgIDwvYT5cbiAgICB7aXRlbS50b29sdGlwID8gKFxuICAgICAgPFRvb2x0aXAgaWQ9e2Ake2l0ZW0uaWR9LWFjdGlvbmB9IHBsYWNlPVwiYm90dG9tXCIgZGVsYXlTaG93PXs1MDB9IGVmZmVjdD1cInNvbGlkXCI+XG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtpdGVtLnRvb2x0aXB9IC8+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKSA6IG51bGx9XG4gIDwvU3R5bGVkUGFuZWxBY3Rpb24+XG4pO1xuXG5leHBvcnQgY29uc3QgUGFuZWxIZWFkZXJEcm9wZG93bkZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IFBhbmVsSGVhZGVyRHJvcGRvd24gPSAoe2l0ZW1zLCBzaG93LCBvbkNsb3NlLCBpZH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZFRvb2xiYXIgc2hvdz17c2hvd30gY2xhc3NOYW1lPXtgJHtpZH0tZHJvcGRvd25gfT5cbiAgICAgICAgPENsaWNrT3V0c2lkZUNsb3NlRHJvcGRvd25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwYW5lbC1oZWFkZXItZHJvcGRvd25fX2lubmVyXCJcbiAgICAgICAgICBzaG93PXtzaG93fVxuICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgID5cbiAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgPFRvb2xiYXJJdGVtXG4gICAgICAgICAgICAgIGlkPXtpdGVtLmtleX1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cbiAgICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgIGljb249e2l0ZW0uaWNvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17aXRlbS5vbkNsaWNrfVxuICAgICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DbGlja091dHNpZGVDbG9zZURyb3Bkb3duPlxuICAgICAgPC9TdHlsZWRUb29sYmFyPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFBhbmVsSGVhZGVyRHJvcGRvd247XG59O1xuXG5jb25zdCBnZXREcm9wZG93bkl0ZW1zU2VsZWN0b3IgPSAoKSA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBwcm9wcyA9PiBwcm9wcyxcbiAgICBwcm9wcyA9PlxuICAgICAgcHJvcHMuaXRlbXNcbiAgICAgICAgLm1hcCh0ID0+ICh7XG4gICAgICAgICAgLi4udCxcbiAgICAgICAgICBvbkNsaWNrOiB0Lm9uQ2xpY2sgJiYgdC5vbkNsaWNrKHByb3BzKSA/IHQub25DbGljayhwcm9wcykgOiBudWxsXG4gICAgICAgIH0pKVxuICAgICAgICAuZmlsdGVyKGwgPT4gbC5vbkNsaWNrKVxuICApO1xuXG5leHBvcnQgY29uc3QgU2F2ZUV4cG9ydERyb3Bkb3duRmFjdG9yeSA9IFBhbmVsSGVhZGVyRHJvcGRvd24gPT4ge1xuICBjb25zdCBkcm9wZG93bkl0ZW1zU2VsZWN0b3IgPSBnZXREcm9wZG93bkl0ZW1zU2VsZWN0b3IoKTtcblxuICBjb25zdCBTYXZlRXhwb3J0RHJvcGRvd24gPSBwcm9wcyA9PiAoXG4gICAgPFBhbmVsSGVhZGVyRHJvcGRvd25cbiAgICAgIGl0ZW1zPXtkcm9wZG93bkl0ZW1zU2VsZWN0b3IocHJvcHMpfVxuICAgICAgc2hvdz17cHJvcHMuc2hvd31cbiAgICAgIG9uQ2xvc2U9e3Byb3BzLm9uQ2xvc2V9XG4gICAgICBpZD1cInNhdmUtZXhwb3J0XCJcbiAgICAvPlxuICApO1xuXG4gIFNhdmVFeHBvcnREcm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICd0b29sYmFyLmV4cG9ydEltYWdlJyxcbiAgICAgICAgaWNvbjogUGljdHVyZSxcbiAgICAgICAga2V5OiAnaW1hZ2UnLFxuICAgICAgICBvbkNsaWNrOiBwcm9wcyA9PiBwcm9wcy5vbkV4cG9ydEltYWdlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ3Rvb2xiYXIuZXhwb3J0RGF0YScsXG4gICAgICAgIGljb246IERhdGFUYWJsZSxcbiAgICAgICAga2V5OiAnZGF0YScsXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uRXhwb3J0RGF0YVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICd0b29sYmFyLmV4cG9ydE1hcCcsXG4gICAgICAgIGljb246IE1hcEljb24sXG4gICAgICAgIGtleTogJ21hcCcsXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uRXhwb3J0TWFwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ3Rvb2xiYXIuc2F2ZU1hcCcsXG4gICAgICAgIGljb246IFNhdmUyLFxuICAgICAgICBrZXk6ICdzYXZlJyxcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25TYXZlTWFwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ3Rvb2xiYXIuc2hhcmVNYXBVUkwnLFxuICAgICAgICBpY29uOiBTaGFyZSxcbiAgICAgICAga2V5OiAnc2hhcmUnLFxuICAgICAgICBvbkNsaWNrOiBwcm9wcyA9PiBwcm9wcy5vblNoYXJlTWFwXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHJldHVybiBTYXZlRXhwb3J0RHJvcGRvd247XG59O1xuU2F2ZUV4cG9ydERyb3Bkb3duRmFjdG9yeS5kZXBzID0gW1BhbmVsSGVhZGVyRHJvcGRvd25GYWN0b3J5XTtcblxuZXhwb3J0IGNvbnN0IENsb3VkU3RvcmFnZURyb3Bkb3duRmFjdG9yeSA9IFBhbmVsSGVhZGVyRHJvcGRvd24gPT4ge1xuICBjb25zdCBkcm9wZG93bkl0ZW1zU2VsZWN0b3IgPSBnZXREcm9wZG93bkl0ZW1zU2VsZWN0b3IoKTtcblxuICBjb25zdCBDbG91ZFN0b3JhZ2VEcm9wZG93biA9IHByb3BzID0+IChcbiAgICA8UGFuZWxIZWFkZXJEcm9wZG93blxuICAgICAgaXRlbXM9e2Ryb3Bkb3duSXRlbXNTZWxlY3Rvcihwcm9wcyl9XG4gICAgICBzaG93PXtwcm9wcy5zaG93fVxuICAgICAgb25DbG9zZT17cHJvcHMub25DbG9zZX1cbiAgICAgIGlkPVwiY2xvdWQtc3RvcmFnZVwiXG4gICAgLz5cbiAgKTtcbiAgQ2xvdWRTdG9yYWdlRHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnU2F2ZScsXG4gICAgICAgIGljb246IFNhdmUyLFxuICAgICAgICBrZXk6ICdzYXZlJyxcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25TYXZlVG9TdG9yYWdlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1NhdmUgQXMnLFxuICAgICAgICBpY29uOiBTYXZlMixcbiAgICAgICAga2V5OiAnc2F2ZUFzJyxcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25TYXZlQXNUb1N0b3JhZ2VcbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIHJldHVybiBDbG91ZFN0b3JhZ2VEcm9wZG93bjtcbn07XG5DbG91ZFN0b3JhZ2VEcm9wZG93bkZhY3RvcnkuZGVwcyA9IFtQYW5lbEhlYWRlckRyb3Bkb3duRmFjdG9yeV07XG5cblBhbmVsSGVhZGVyRmFjdG9yeS5kZXBzID0gW1NhdmVFeHBvcnREcm9wZG93bkZhY3RvcnksIENsb3VkU3RvcmFnZURyb3Bkb3duRmFjdG9yeV07XG5cbmZ1bmN0aW9uIFBhbmVsSGVhZGVyRmFjdG9yeShTYXZlRXhwb3J0RHJvcGRvd24sIENsb3VkU3RvcmFnZURyb3Bkb3duKSB7XG4gIHJldHVybiBjbGFzcyBQYW5lbEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGFwcE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBhcHBXZWJzaXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdmVyc2lvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZpc2libGVEcm9wZG93bjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGxvZ29Db21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgICAgYWN0aW9uSXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgICAgb25FeHBvcnRJbWFnZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvbkV4cG9ydERhdGE6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgb25FeHBvcnRDb25maWc6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgb25FeHBvcnRNYXA6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgb25TYXZlVG9TdG9yYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uU2F2ZUFzVG9TdG9yYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uU2F2ZU1hcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvblNoYXJlTWFwOiBQcm9wVHlwZXMuZnVuY1xuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgbG9nb0NvbXBvbmVudDogS2VwbGVyR2xMb2dvLFxuICAgICAgYWN0aW9uSXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnc3RvcmFnZScsXG4gICAgICAgICAgaWNvbkNvbXBvbmVudDogRGIsXG4gICAgICAgICAgdG9vbHRpcDogJ3Rvb2x0aXAuY2xvdWRTdG9yYWdlJyxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7fSxcbiAgICAgICAgICBkcm9wZG93bkNvbXBvbmVudDogQ2xvdWRTdG9yYWdlRHJvcGRvd25cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnc2F2ZScsXG4gICAgICAgICAgaWNvbkNvbXBvbmVudDogU2F2ZSxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7fSxcbiAgICAgICAgICBsYWJlbDogJ1NoYXJlJyxcbiAgICAgICAgICBkcm9wZG93bkNvbXBvbmVudDogU2F2ZUV4cG9ydERyb3Bkb3duXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBhcHBOYW1lLFxuICAgICAgICBhcHBXZWJzaXRlLFxuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBhY3Rpb25JdGVtcyxcbiAgICAgICAgdmlzaWJsZURyb3Bkb3duLFxuICAgICAgICBzaG93RXhwb3J0RHJvcGRvd24sXG4gICAgICAgIGhpZGVFeHBvcnREcm9wZG93bixcbiAgICAgICAgLi4uZHJvcGRvd25DYWxsYmFja3NcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgbGV0IGl0ZW1zID0gYWN0aW9uSXRlbXMgfHwgW107XG5cbiAgICAgIC8vIGRvbid0IHJlbmRlciBjbG91ZCBzdG9yYWdlIGljb24gaWYgb25TYXZlVG9TdG9yYWdlIGlzIG5vdCBwcm92aWRlZFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uU2F2ZVRvU3RvcmFnZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpdGVtcyA9IGFjdGlvbkl0ZW1zLmZpbHRlcihhaSA9PiBhaS5pZCAhPT0gJ3N0b3JhZ2UnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZFBhbmVsSGVhZGVyIGNsYXNzTmFtZT1cInNpZGUtcGFuZWxfX3BhbmVsLWhlYWRlclwiPlxuICAgICAgICAgIDxTdHlsZWRQYW5lbEhlYWRlclRvcCBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJfX3RvcFwiPlxuICAgICAgICAgICAgPHRoaXMucHJvcHMubG9nb0NvbXBvbmVudCBhcHBOYW1lPXthcHBOYW1lfSB2ZXJzaW9uPXt2ZXJzaW9ufSBhcHBXZWJzaXRlPXthcHBXZWJzaXRlfSAvPlxuICAgICAgICAgICAgPFN0eWxlZFBhbmVsVG9wQWN0aW9ucz5cbiAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJfX3JpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxQYW5lbEFjdGlvblxuICAgICAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZHJvcGRvd25Db21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFeHBvcnREcm9wZG93bihpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5vbkNsaWNrICYmIGl0ZW0ub25DbGljayh0aGlzLnByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2l0ZW0uZHJvcGRvd25Db21wb25lbnQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLmRyb3Bkb3duQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGlkZUV4cG9ydERyb3Bkb3dufVxuICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3Zpc2libGVEcm9wZG93biA9PT0gaXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICB7Li4uZHJvcGRvd25DYWxsYmFja3N9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1N0eWxlZFBhbmVsVG9wQWN0aW9ucz5cbiAgICAgICAgICA8L1N0eWxlZFBhbmVsSGVhZGVyVG9wPlxuICAgICAgICA8L1N0eWxlZFBhbmVsSGVhZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbmVsSGVhZGVyRmFjdG9yeTtcbiJdfQ==