"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _mapbox = _interopRequireDefault(require("mapbox"));

var _reactIntl = require("react-intl");

var _viewportMercatorProject = require("viewport-mercator-project");

var _keyevent = _interopRequireDefault(require("../../constants/keyevent"));

var _styledComponents2 = require("../common/styled-components");

var _icons = require("../common/icons");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  color: ", ";\n\n  .geocoder-input {\n    box-shadow: ", ";\n\n    .geocoder-input__search {\n      position: absolute;\n      height: ", "px;\n      width: 30px;\n      padding-left: 6px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: ", ";\n    }\n\n    input {\n      padding: 4px 36px;\n      height: ", "px;\n    }\n  }\n\n  .geocoder-results {\n    box-shadow: ", ";\n    background-color: ", ";\n    position: absolute;\n    width: ", "px;\n    margin-top: ", "px;\n  }\n\n  .geocoder-item {\n    ", ";\n    ", ";\n\n    &.active {\n      background-color: ", ";\n    }\n  }\n\n  .remove-result {\n    position: absolute;\n    right: 16px;\n    top: 0px;\n    height: ", "px;\n    display: flex;\n    align-items: center;\n\n    :hover {\n      cursor: pointer;\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var debounceTimeout = null;

var StyledContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.boxShadow;
}, function (props) {
  return props.theme.geocoderInputHeight;
}, function (props) {
  return props.theme.subtextColor;
}, function (props) {
  return props.theme.geocoderInputHeight;
}, function (props) {
  return props.theme.boxShadow;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return Number.isFinite(props.width) ? props.width : props.theme.geocoderWidth;
}, function (props) {
  return props.theme.dropdownWapperMargin;
}, function (props) {
  return props.theme.dropdownListItem;
}, function (props) {
  return props.theme.textTruncate;
}, function (props) {
  return props.theme.dropdownListHighlightBg;
}, function (props) {
  return props.theme.geocoderInputHeight;
}, function (props) {
  return props.theme.textColorHl;
});

var PLACEHOLDER = 'Enter an Address';

var GeoCoder = function GeoCoder(_ref) {
  var mapboxApiAccessToken = _ref.mapboxApiAccessToken,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$initialInputValu = _ref.initialInputValue,
      initialInputValue = _ref$initialInputValu === void 0 ? '' : _ref$initialInputValu,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 5 : _ref$limit,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 300 : _ref$timeout,
      _ref$formatItem = _ref.formatItem,
      formatItem = _ref$formatItem === void 0 ? function (item) {
    return item.place_name;
  } : _ref$formatItem,
      viewport = _ref.viewport,
      onSelected = _ref.onSelected,
      onDeleteMarker = _ref.onDeleteMarker,
      transitionDuration = _ref.transitionDuration,
      pointZoom = _ref.pointZoom,
      width = _ref.width,
      intl = _ref.intl;

  var _useState = (0, _react.useState)(initialInputValue),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      showResults = _useState4[0],
      setShowResults = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      showDelete = _useState6[0],
      setShowDelete = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      results = _useState8[0],
      setResults = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      selectedIndex = _useState10[0],
      setSelectedIndex = _useState10[1];

  var client = (0, _react.useMemo)(function () {
    return new _mapbox["default"](mapboxApiAccessToken);
  }, [mapboxApiAccessToken]);
  var onChange = (0, _react.useCallback)(function (event) {
    var queryString = event.target.value;
    setInputValue(queryString);
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var response;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(limit > 0 && Boolean(queryString))) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return client.geocodeForward(queryString, {
                limit: limit
              });

            case 3:
              response = _context.sent;
              setShowResults(true);
              setResults(response.entity.features);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), timeout);
  }, [client, results, setResults, setShowResults]);
  var onBlur = (0, _react.useCallback)(function () {
    setTimeout(function () {
      setShowResults(false);
    }, timeout);
  }, [setShowResults]);
  var onFocus = (0, _react.useCallback)(function () {
    return setShowResults(true);
  }, [setShowResults]);
  var onItemSelected = (0, _react.useCallback)(function (item) {
    var newViewport = new _viewportMercatorProject.WebMercatorViewport(viewport);
    var bbox = item.bbox,
        center = item.center;
    newViewport = bbox ? newViewport.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]]) : {
      longitude: center[0],
      latitude: center[1],
      zoom: pointZoom
    };
    var _newViewport = newViewport,
        longitude = _newViewport.longitude,
        latitude = _newViewport.latitude,
        zoom = _newViewport.zoom;
    onSelected(_objectSpread({}, viewport, {}, {
      longitude: longitude,
      latitude: latitude,
      zoom: zoom,
      transitionDuration: transitionDuration
    }), item);
    setShowResults(false);
    setInputValue(formatItem(item));
    setShowDelete(true);
  }, [viewport, onSelected, transitionDuration, pointZoom, formatItem]);
  var onMarkDeleted = (0, _react.useCallback)(function () {
    setShowDelete(false);
    setInputValue('');
    onDeleteMarker();
  }, [onDeleteMarker]);
  var onKeyDown = (0, _react.useCallback)(function (e) {
    switch (e.keyCode) {
      case _keyevent["default"].DOM_VK_UP:
        setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : selectedIndex);
        break;

      case _keyevent["default"].DOM_VK_DOWN:
        setSelectedIndex(selectedIndex < results.length - 1 ? selectedIndex + 1 : selectedIndex);
        break;

      case _keyevent["default"].DOM_VK_ENTER:
      case _keyevent["default"].DOM_VK_RETURN:
        onItemSelected(results[selectedIndex]);
        break;

      default:
        break;
    }
  }, [results, selectedIndex, setSelectedIndex]);
  return _react["default"].createElement(StyledContainer, {
    className: className,
    width: width
  }, _react["default"].createElement("div", {
    className: "geocoder-input"
  }, _react["default"].createElement("div", {
    className: "geocoder-input__search"
  }, _react["default"].createElement(_icons.Search, {
    height: "20px"
  })), _react["default"].createElement(_styledComponents2.Input, {
    type: "text",
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    onKeyDown: onKeyDown,
    value: inputValue,
    placeholder: intl ? intl.formatMessage({
      id: 'geocoder.title',
      defaultMessage: PLACEHOLDER
    }) : PLACEHOLDER
  }), showDelete ? _react["default"].createElement("div", {
    className: "remove-result"
  }, _react["default"].createElement(_icons.Delete, {
    height: "12px",
    onClick: onMarkDeleted
  })) : null), showResults ? _react["default"].createElement("div", {
    className: "geocoder-results"
  }, results.map(function (item, index) {
    return _react["default"].createElement("div", {
      key: index,
      className: (0, _classnames["default"])('geocoder-item', {
        active: selectedIndex === index
      }),
      onClick: function onClick() {
        return onItemSelected(item);
      }
    }, formatItem(item));
  })) : null);
};

var _default = (0, _reactIntl.injectIntl)(GeoCoder);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2dlb2NvZGVyL2dlb2NvZGVyLmpzIl0sIm5hbWVzIjpbImRlYm91bmNlVGltZW91dCIsIlN0eWxlZENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3IiLCJib3hTaGFkb3ciLCJnZW9jb2RlcklucHV0SGVpZ2h0Iiwic3VidGV4dENvbG9yIiwicGFuZWxCYWNrZ3JvdW5kIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJ3aWR0aCIsImdlb2NvZGVyV2lkdGgiLCJkcm9wZG93bldhcHBlck1hcmdpbiIsImRyb3Bkb3duTGlzdEl0ZW0iLCJ0ZXh0VHJ1bmNhdGUiLCJkcm9wZG93bkxpc3RIaWdobGlnaHRCZyIsInRleHRDb2xvckhsIiwiUExBQ0VIT0xERVIiLCJHZW9Db2RlciIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwiY2xhc3NOYW1lIiwiaW5pdGlhbElucHV0VmFsdWUiLCJsaW1pdCIsInRpbWVvdXQiLCJmb3JtYXRJdGVtIiwiaXRlbSIsInBsYWNlX25hbWUiLCJ2aWV3cG9ydCIsIm9uU2VsZWN0ZWQiLCJvbkRlbGV0ZU1hcmtlciIsInRyYW5zaXRpb25EdXJhdGlvbiIsInBvaW50Wm9vbSIsImludGwiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInNob3dSZXN1bHRzIiwic2V0U2hvd1Jlc3VsdHMiLCJzaG93RGVsZXRlIiwic2V0U2hvd0RlbGV0ZSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJjbGllbnQiLCJNYXBib3hDbGllbnQiLCJvbkNoYW5nZSIsImV2ZW50IiwicXVlcnlTdHJpbmciLCJ0YXJnZXQiLCJ2YWx1ZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJCb29sZWFuIiwiZ2VvY29kZUZvcndhcmQiLCJyZXNwb25zZSIsImVudGl0eSIsImZlYXR1cmVzIiwib25CbHVyIiwib25Gb2N1cyIsIm9uSXRlbVNlbGVjdGVkIiwibmV3Vmlld3BvcnQiLCJXZWJNZXJjYXRvclZpZXdwb3J0IiwiYmJveCIsImNlbnRlciIsImZpdEJvdW5kcyIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiem9vbSIsIm9uTWFya0RlbGV0ZWQiLCJvbktleURvd24iLCJlIiwia2V5Q29kZSIsIktleUV2ZW50IiwiRE9NX1ZLX1VQIiwiRE9NX1ZLX0RPV04iLCJsZW5ndGgiLCJET01fVktfRU5URVIiLCJET01fVktfUkVUVVJOIiwiZm9ybWF0TWVzc2FnZSIsImlkIiwiZGVmYXVsdE1lc3NhZ2UiLCJtYXAiLCJpbmRleCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZSxHQUFHLElBQXRCOztBQUVBLElBQU1DLGVBQWUsR0FBR0MsNkJBQU9DLEdBQVYsb0JBRVYsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxTQUFoQjtBQUFBLENBRkssRUFLSCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFNBQWhCO0FBQUEsQ0FMRixFQVNMLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsbUJBQWhCO0FBQUEsQ0FUQSxFQWVOLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksWUFBaEI7QUFBQSxDQWZDLEVBb0JMLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsbUJBQWhCO0FBQUEsQ0FwQkEsRUF5QkgsVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxTQUFoQjtBQUFBLENBekJGLEVBMEJHLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtB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QUVXLFNBTGI7QUFNRSxJQUFBLEtBQUssRUFBRXBDLFVBTlQ7QUFPRSxJQUFBLFdBQVcsRUFDVEQsSUFBSSxHQUNBQSxJQUFJLENBQUM4QyxhQUFMLENBQW1CO0FBQUNDLE1BQUFBLEVBQUUsRUFBRSxnQkFBTDtBQUF1QkMsTUFBQUEsY0FBYyxFQUFFL0Q7QUFBdkMsS0FBbkIsQ0FEQSxHQUVBQTtBQVZSLElBSkYsRUFpQkdvQixVQUFVLEdBQ1Q7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0UsZ0NBQUMsYUFBRDtBQUFRLElBQUEsTUFBTSxFQUFDLE1BQWY7QUFBc0IsSUFBQSxPQUFPLEVBQUUrQjtBQUEvQixJQURGLENBRFMsR0FJUCxJQXJCTixDQURGLEVBeUJHakMsV0FBVyxHQUNWO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNHSSxPQUFPLENBQUMwQyxHQUFSLENBQVksVUFBQ3hELElBQUQsRUFBT3lELEtBQVA7QUFBQSxXQUNYO0FBQ0UsTUFBQSxHQUFHLEVBQUVBLEtBRFA7QUFFRSxNQUFBLFNBQVMsRUFBRSw0QkFBVyxlQUFYLEVBQTRCO0FBQUNDLFFBQUFBLE1BQU0sRUFBRTFDLGFBQWEsS0FBS3lDO0FBQTNCLE9BQTVCLENBRmI7QUFHRSxNQUFBLE9BQU8sRUFBRTtBQUFBLGVBQU12QixjQUFjLENBQUNsQyxJQUFELENBQXBCO0FBQUE7QUFIWCxPQUtHRCxVQUFVLENBQUNDLElBQUQsQ0FMYixDQURXO0FBQUEsR0FBWixDQURILENBRFUsR0FZUixJQXJDTixDQURGO0FBeUNELENBOUlEOztlQWdKZSwyQkFBV1AsUUFBWCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IE1hcGJveENsaWVudCBmcm9tICdtYXBib3gnO1xuaW1wb3J0IHtpbmplY3RJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7V2ViTWVyY2F0b3JWaWV3cG9ydH0gZnJvbSAndmlld3BvcnQtbWVyY2F0b3ItcHJvamVjdCc7XG5pbXBvcnQgS2V5RXZlbnQgZnJvbSAnY29uc3RhbnRzL2tleWV2ZW50JztcbmltcG9ydCB7SW5wdXR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7U2VhcmNoLCBEZWxldGV9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcblxubGV0IGRlYm91bmNlVGltZW91dCA9IG51bGw7XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcblxuICAuZ2VvY29kZXItaW5wdXQge1xuICAgIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm94U2hhZG93fTtcblxuICAgIC5nZW9jb2Rlci1pbnB1dF9fc2VhcmNoIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5nZW9jb2RlcklucHV0SGVpZ2h0fXB4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgIHBhZGRpbmc6IDRweCAzNnB4O1xuICAgICAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmdlb2NvZGVySW5wdXRIZWlnaHR9cHg7XG4gICAgfVxuICB9XG5cbiAgLmdlb2NvZGVyLXJlc3VsdHMge1xuICAgIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm94U2hhZG93fTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAke3Byb3BzID0+IChOdW1iZXIuaXNGaW5pdGUocHJvcHMud2lkdGgpID8gcHJvcHMud2lkdGggOiBwcm9wcy50aGVtZS5nZW9jb2RlcldpZHRoKX1weDtcbiAgICBtYXJnaW4tdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duV2FwcGVyTWFyZ2lufXB4O1xuICB9XG5cbiAgLmdlb2NvZGVyLWl0ZW0ge1xuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0SXRlbX07XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0VHJ1bmNhdGV9O1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RIaWdobGlnaHRCZ307XG4gICAgfVxuICB9XG5cbiAgLnJlbW92ZS1yZXN1bHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTZweDtcbiAgICB0b3A6IDBweDtcbiAgICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ2VvY29kZXJJbnB1dEhlaWdodH1weDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICA6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUExBQ0VIT0xERVIgPSAnRW50ZXIgYW4gQWRkcmVzcyc7XG5cbmNvbnN0IEdlb0NvZGVyID0gKHtcbiAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gIGNsYXNzTmFtZSA9ICcnLFxuICBpbml0aWFsSW5wdXRWYWx1ZSA9ICcnLFxuICBsaW1pdCA9IDUsXG4gIHRpbWVvdXQgPSAzMDAsXG4gIGZvcm1hdEl0ZW0gPSBpdGVtID0+IGl0ZW0ucGxhY2VfbmFtZSxcbiAgdmlld3BvcnQsXG4gIG9uU2VsZWN0ZWQsXG4gIG9uRGVsZXRlTWFya2VyLFxuICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gIHBvaW50Wm9vbSxcbiAgd2lkdGgsXG4gIGludGxcbn0pID0+IHtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbElucHV0VmFsdWUpO1xuICBjb25zdCBbc2hvd1Jlc3VsdHMsIHNldFNob3dSZXN1bHRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dEZWxldGUsIHNldFNob3dEZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNsaWVudCA9IHVzZU1lbW8oKCkgPT4gbmV3IE1hcGJveENsaWVudChtYXBib3hBcGlBY2Nlc3NUb2tlbiksIFttYXBib3hBcGlBY2Nlc3NUb2tlbl0pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgZXZlbnQgPT4ge1xuICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICBzZXRJbnB1dFZhbHVlKHF1ZXJ5U3RyaW5nKTtcbiAgICAgIGNsZWFyVGltZW91dChkZWJvdW5jZVRpbWVvdXQpO1xuXG4gICAgICBkZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKGxpbWl0ID4gMCAmJiBCb29sZWFuKHF1ZXJ5U3RyaW5nKSkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50Lmdlb2NvZGVGb3J3YXJkKHF1ZXJ5U3RyaW5nLCB7bGltaXR9KTtcbiAgICAgICAgICBzZXRTaG93UmVzdWx0cyh0cnVlKTtcbiAgICAgICAgICBzZXRSZXN1bHRzKHJlc3BvbnNlLmVudGl0eS5mZWF0dXJlcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH0sXG4gICAgW2NsaWVudCwgcmVzdWx0cywgc2V0UmVzdWx0cywgc2V0U2hvd1Jlc3VsdHNdXG4gICk7XG5cbiAgY29uc3Qgb25CbHVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvd1Jlc3VsdHMoZmFsc2UpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9LCBbc2V0U2hvd1Jlc3VsdHNdKTtcblxuICBjb25zdCBvbkZvY3VzID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0U2hvd1Jlc3VsdHModHJ1ZSksIFtzZXRTaG93UmVzdWx0c10pO1xuXG4gIGNvbnN0IG9uSXRlbVNlbGVjdGVkID0gdXNlQ2FsbGJhY2soXG4gICAgaXRlbSA9PiB7XG4gICAgICBsZXQgbmV3Vmlld3BvcnQgPSBuZXcgV2ViTWVyY2F0b3JWaWV3cG9ydCh2aWV3cG9ydCk7XG4gICAgICBjb25zdCB7YmJveCwgY2VudGVyfSA9IGl0ZW07XG5cbiAgICAgIG5ld1ZpZXdwb3J0ID0gYmJveFxuICAgICAgICA/IG5ld1ZpZXdwb3J0LmZpdEJvdW5kcyhbXG4gICAgICAgICAgICBbYmJveFswXSwgYmJveFsxXV0sXG4gICAgICAgICAgICBbYmJveFsyXSwgYmJveFszXV1cbiAgICAgICAgICBdKVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIGxvbmdpdHVkZTogY2VudGVyWzBdLFxuICAgICAgICAgICAgbGF0aXR1ZGU6IGNlbnRlclsxXSxcbiAgICAgICAgICAgIHpvb206IHBvaW50Wm9vbVxuICAgICAgICAgIH07XG5cbiAgICAgIGNvbnN0IHtsb25naXR1ZGUsIGxhdGl0dWRlLCB6b29tfSA9IG5ld1ZpZXdwb3J0O1xuXG4gICAgICBvblNlbGVjdGVkKHsuLi52aWV3cG9ydCwgLi4ue2xvbmdpdHVkZSwgbGF0aXR1ZGUsIHpvb20sIHRyYW5zaXRpb25EdXJhdGlvbn19LCBpdGVtKTtcblxuICAgICAgc2V0U2hvd1Jlc3VsdHMoZmFsc2UpO1xuICAgICAgc2V0SW5wdXRWYWx1ZShmb3JtYXRJdGVtKGl0ZW0pKTtcbiAgICAgIHNldFNob3dEZWxldGUodHJ1ZSk7XG4gICAgfSxcbiAgICBbdmlld3BvcnQsIG9uU2VsZWN0ZWQsIHRyYW5zaXRpb25EdXJhdGlvbiwgcG9pbnRab29tLCBmb3JtYXRJdGVtXVxuICApO1xuXG4gIGNvbnN0IG9uTWFya0RlbGV0ZWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2hvd0RlbGV0ZShmYWxzZSk7XG4gICAgc2V0SW5wdXRWYWx1ZSgnJyk7XG4gICAgb25EZWxldGVNYXJrZXIoKTtcbiAgfSwgW29uRGVsZXRlTWFya2VyXSk7XG5cbiAgY29uc3Qgb25LZXlEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgZSA9PiB7XG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIEtleUV2ZW50LkRPTV9WS19VUDpcbiAgICAgICAgICBzZXRTZWxlY3RlZEluZGV4KHNlbGVjdGVkSW5kZXggPiAwID8gc2VsZWN0ZWRJbmRleCAtIDEgOiBzZWxlY3RlZEluZGV4KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBLZXlFdmVudC5ET01fVktfRE9XTjpcbiAgICAgICAgICBzZXRTZWxlY3RlZEluZGV4KHNlbGVjdGVkSW5kZXggPCByZXN1bHRzLmxlbmd0aCAtIDEgPyBzZWxlY3RlZEluZGV4ICsgMSA6IHNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEtleUV2ZW50LkRPTV9WS19FTlRFUjpcbiAgICAgICAgY2FzZSBLZXlFdmVudC5ET01fVktfUkVUVVJOOlxuICAgICAgICAgIG9uSXRlbVNlbGVjdGVkKHJlc3VsdHNbc2VsZWN0ZWRJbmRleF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3Jlc3VsdHMsIHNlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQ29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB3aWR0aD17d2lkdGh9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW9jb2Rlci1pbnB1dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlb2NvZGVyLWlucHV0X19zZWFyY2hcIj5cbiAgICAgICAgICA8U2VhcmNoIGhlaWdodD1cIjIwcHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgICAgICAgIG9uS2V5RG93bj17b25LZXlEb3dufVxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgIGludGxcbiAgICAgICAgICAgICAgPyBpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAnZ2VvY29kZXIudGl0bGUnLCBkZWZhdWx0TWVzc2FnZTogUExBQ0VIT0xERVJ9KVxuICAgICAgICAgICAgICA6IFBMQUNFSE9MREVSXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICB7c2hvd0RlbGV0ZSA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbW92ZS1yZXN1bHRcIj5cbiAgICAgICAgICAgIDxEZWxldGUgaGVpZ2h0PVwiMTJweFwiIG9uQ2xpY2s9e29uTWFya0RlbGV0ZWR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtzaG93UmVzdWx0cyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW9jb2Rlci1yZXN1bHRzXCI+XG4gICAgICAgICAge3Jlc3VsdHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2dlb2NvZGVyLWl0ZW0nLCB7YWN0aXZlOiBzZWxlY3RlZEluZGV4ID09PSBpbmRleH0pfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkl0ZW1TZWxlY3RlZChpdGVtKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Zvcm1hdEl0ZW0oaXRlbSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwoR2VvQ29kZXIpO1xuIl19