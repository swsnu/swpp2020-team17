"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DatasetTabs = exports.DatasetModalTab = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _datasetLabel = _interopRequireDefault(require("../common/dataset-label"));

var _dataTable = _interopRequireDefault(require("../common/data-table"));

var _reselect = require("reselect");

var _cellSize = require("../common/data-table/cell-size");

var _canvas = _interopRequireDefault(require("../common/data-table/canvas"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  min-height: 70vh;\n  max-height: 70vh;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-bottom: 3px solid ", ";\n  cursor: pointer;\n  display: flex;\n  height: 35px;\n  margin: 0 3px;\n  padding: 0 5px;\n\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  padding: ", " ", " 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  min-height: 70vh;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var dgSettings = {
  sidePadding: '38px',
  verticalPadding: '16px',
  height: '36px'
};

var StyledModal = _styledComponents["default"].div(_templateObject());

var DatasetCatalog = _styledComponents["default"].div(_templateObject2(), dgSettings.verticalPadding, dgSettings.sidePadding);

var DatasetModalTab = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.active ? 'black' : 'transparent';
});

exports.DatasetModalTab = DatasetModalTab;

var DatasetTabsUnmemoized = function DatasetTabsUnmemoized(_ref) {
  var activeDataset = _ref.activeDataset,
      datasets = _ref.datasets,
      showDatasetTable = _ref.showDatasetTable;
  return _react["default"].createElement(DatasetCatalog, {
    className: "dataset-modal-catalog"
  }, Object.values(datasets).map(function (dataset) {
    return _react["default"].createElement(DatasetModalTab, {
      className: "dataset-modal-tab",
      active: dataset === activeDataset,
      key: dataset.id,
      onClick: function onClick() {
        return showDatasetTable(dataset.id);
      }
    }, _react["default"].createElement(_datasetLabel["default"], {
      dataset: dataset
    }));
  }));
};

var DatasetTabs = _react["default"].memo(DatasetTabsUnmemoized);

exports.DatasetTabs = DatasetTabs;
DatasetTabs.displayName = 'DatasetTabs';
DataTableModalFactory.deps = [_dataTable["default"]];

var TableContainer = _styledComponents["default"].div(_templateObject4());

function DataTableModalFactory(DataTable) {
  var DataTableModal =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(DataTableModal, _React$Component);

    function DataTableModal() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, DataTableModal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(DataTableModal)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "datasetCellSizeCache", {});
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dataId", function (props) {
        return props.dataId;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "datasets", function (props) {
        return props.datasets;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fields", function (props) {
        return (props.datasets[props.dataId] || {}).fields;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "columns", (0, _reselect.createSelector)(_this.fields, function (fields) {
        return fields.map(function (f) {
          return f.name;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "colMeta", (0, _reselect.createSelector)(_this.fields, function (fields) {
        return fields.reduce(function (acc, _ref2) {
          var name = _ref2.name,
              type = _ref2.type;
          return _objectSpread({}, acc, (0, _defineProperty2["default"])({}, name, type));
        }, {});
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cellSizeCache", (0, _reselect.createSelector)(_this.dataId, _this.datasets, function (dataId, datasets) {
        if (!_this.props.datasets[dataId]) {
          return {};
        }

        var _this$props$datasets$ = _this.props.datasets[dataId],
            fields = _this$props$datasets$.fields,
            allData = _this$props$datasets$.allData;
        var showCalculate = null;

        if (!_this.datasetCellSizeCache[dataId]) {
          showCalculate = true;
        } else if (_this.datasetCellSizeCache[dataId].fields !== fields || _this.datasetCellSizeCache[dataId].allData !== allData) {
          showCalculate = true;
        }

        if (!showCalculate) {
          return _this.datasetCellSizeCache[dataId].cellSizeCache;
        }

        var cellSizeCache = fields.reduce(function (acc, field, colIdx) {
          return _objectSpread({}, acc, (0, _defineProperty2["default"])({}, field.name, (0, _cellSize.renderedSize)({
            text: {
              rows: allData,
              column: field.name
            },
            colIdx: colIdx,
            type: field.type,
            fontSize: _this.props.theme.cellFontSize,
            font: _this.props.theme.fontFamily
          })));
        }, {}); // save it to cache

        _this.datasetCellSizeCache[dataId] = {
          cellSizeCache: cellSizeCache,
          fields: fields,
          allData: allData
        };
        return cellSizeCache;
      }));
      return _this;
    }

    (0, _createClass2["default"])(DataTableModal, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            datasets = _this$props.datasets,
            dataId = _this$props.dataId,
            showDatasetTable = _this$props.showDatasetTable;

        if (!datasets || !dataId) {
          return null;
        }

        var activeDataset = datasets[dataId];
        var columns = this.columns(this.props);
        var colMeta = this.colMeta(this.props);
        var cellSizeCache = this.cellSizeCache(this.props);
        return _react["default"].createElement(StyledModal, {
          className: "dataset-modal",
          id: "dataset-modal"
        }, _react["default"].createElement(_canvas["default"], null), _react["default"].createElement(TableContainer, null, _react["default"].createElement(DatasetTabs, {
          activeDataset: activeDataset,
          datasets: datasets,
          showDatasetTable: showDatasetTable
        }), datasets[dataId] ? _react["default"].createElement(DataTable, {
          key: dataId,
          dataId: dataId,
          columns: columns,
          colMeta: colMeta,
          cellSizeCache: cellSizeCache,
          rows: activeDataset.allData,
          pinnedColumns: activeDataset.pinnedColumns,
          sortOrder: activeDataset.sortOrder,
          sortColumn: activeDataset.sortColumn,
          copyTableColumn: this.props.copyTableColumn,
          pinTableColumn: this.props.pinTableColumn,
          sortTableColumn: this.props.sortTableColumn
        }) : null));
      }
    }]);
    return DataTableModal;
  }(_react["default"].Component);

  return (0, _styledComponents.withTheme)(DataTableModal);
}

var _default = DataTableModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9kYXRhLXRhYmxlLW1vZGFsLmpzIl0sIm5hbWVzIjpbImRnU2V0dGluZ3MiLCJzaWRlUGFkZGluZyIsInZlcnRpY2FsUGFkZGluZyIsImhlaWdodCIsIlN0eWxlZE1vZGFsIiwic3R5bGVkIiwiZGl2IiwiRGF0YXNldENhdGFsb2ciLCJEYXRhc2V0TW9kYWxUYWIiLCJwcm9wcyIsImFjdGl2ZSIsIkRhdGFzZXRUYWJzVW5tZW1vaXplZCIsImFjdGl2ZURhdGFzZXQiLCJkYXRhc2V0cyIsInNob3dEYXRhc2V0VGFibGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJkYXRhc2V0IiwiaWQiLCJEYXRhc2V0VGFicyIsIlJlYWN0IiwibWVtbyIsImRpc3BsYXlOYW1lIiwiRGF0YVRhYmxlTW9kYWxGYWN0b3J5IiwiZGVwcyIsIkRhdGFUYWJsZUZhY3RvcnkiLCJUYWJsZUNvbnRhaW5lciIsIkRhdGFUYWJsZSIsIkRhdGFUYWJsZU1vZGFsIiwiZGF0YUlkIiwiZmllbGRzIiwiZiIsIm5hbWUiLCJyZWR1Y2UiLCJhY2MiLCJ0eXBlIiwiYWxsRGF0YSIsInNob3dDYWxjdWxhdGUiLCJkYXRhc2V0Q2VsbFNpemVDYWNoZSIsImNlbGxTaXplQ2FjaGUiLCJmaWVsZCIsImNvbElkeCIsInRleHQiLCJyb3dzIiwiY29sdW1uIiwiZm9udFNpemUiLCJ0aGVtZSIsImNlbGxGb250U2l6ZSIsImZvbnQiLCJmb250RmFtaWx5IiwiY29sdW1ucyIsImNvbE1ldGEiLCJwaW5uZWRDb2x1bW5zIiwic29ydE9yZGVyIiwic29ydENvbHVtbiIsImNvcHlUYWJsZUNvbHVtbiIsInBpblRhYmxlQ29sdW1uIiwic29ydFRhYmxlQ29sdW1uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7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QSxTQUFTLEVBQUMsZUFBdkI7QUFBdUMsVUFBQSxFQUFFLEVBQUM7QUFBMUMsV0FDRSxnQ0FBQyxrQkFBRCxPQURGLEVBRUUsZ0NBQUMsY0FBRCxRQUNFLGdDQUFDLFdBQUQ7QUFDRSxVQUFBLGFBQWEsRUFBRUcsYUFEakI7QUFFRSxVQUFBLFFBQVEsRUFBRUMsUUFGWjtBQUdFLFVBQUEsZ0JBQWdCLEVBQUVDO0FBSHBCLFVBREYsRUFNR0QsUUFBUSxDQUFDaUIsTUFBRCxDQUFSLEdBQ0MsZ0NBQUMsU0FBRDtBQUNFLFVBQUEsR0FBRyxFQUFFQSxNQURQO0FBRUUsVUFBQSxNQUFNLEVBQUVBLE1BRlY7QUFHRSxVQUFBLE9BQU8sRUFBRXFCLE9BSFg7QUFJRSxVQUFBLE9BQU8sRUFBRUMsT0FKWDtBQUtFLFVBQUEsYUFBYSxFQUFFWixhQUxqQjtBQU1FLFVBQUEsSUFBSSxFQUFFNUIsYUFBYSxDQUFDeUIsT0FOdEI7QUFPRSxVQUFBLGFBQWEsRUFBRXpCLGFBQWEsQ0FBQ3lDLGFBUC9CO0FBUUUsVUFBQSxTQUFTLEVBQUV6QyxhQUFhLENBQUMwQyxTQVIzQjtBQVNFLFVBQUEsVUFBVSxFQUFFMUMsYUFBYSxDQUFDMkMsVUFUNUI7QUFVRSxVQUFBLGVBQWUsRUFBRSxLQUFLOUMsS0FBTCxDQUFXK0MsZUFWOUI7QUFXRSxVQUFBLGNBQWMsRUFBRSxLQUFLL0MsS0FBTCxDQUFXZ0QsY0FYN0I7QUFZRSxVQUFBLGVBQWUsRUFBRSxLQUFLaEQsS0FBTCxDQUFXaUQ7QUFaOUIsVUFERCxHQWVHLElBckJOLENBRkYsQ0FERjtBQTRCRDtBQXBHcUM7QUFBQTtBQUFBLElBQ1hyQyxrQkFBTXNDLFNBREs7O0FBdUd4QyxTQUFPLGlDQUFVOUIsY0FBVixDQUFQO0FBQ0Q7O2VBRWNMLHFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHt3aXRoVGhlbWV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBEYXRhc2V0TGFiZWwgZnJvbSAnY29tcG9uZW50cy9jb21tb24vZGF0YXNldC1sYWJlbCc7XG5pbXBvcnQgRGF0YVRhYmxlRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9kYXRhLXRhYmxlJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7cmVuZGVyZWRTaXplfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9kYXRhLXRhYmxlL2NlbGwtc2l6ZSc7XG5pbXBvcnQgQ2FudmFzSGFjayBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9kYXRhLXRhYmxlL2NhbnZhcyc7XG5cbmNvbnN0IGRnU2V0dGluZ3MgPSB7XG4gIHNpZGVQYWRkaW5nOiAnMzhweCcsXG4gIHZlcnRpY2FsUGFkZGluZzogJzE2cHgnLFxuICBoZWlnaHQ6ICczNnB4J1xufTtcblxuY29uc3QgU3R5bGVkTW9kYWwgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiA3MHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuY29uc3QgRGF0YXNldENhdGFsb2cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAke2RnU2V0dGluZ3MudmVydGljYWxQYWRkaW5nfSAke2RnU2V0dGluZ3Muc2lkZVBhZGRpbmd9IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRGF0YXNldE1vZGFsVGFiID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR7cHJvcHMgPT4gKHByb3BzLmFjdGl2ZSA/ICdibGFjaycgOiAndHJhbnNwYXJlbnQnKX07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW46IDAgM3B4O1xuICBwYWRkaW5nOiAwIDVweDtcblxuICA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuYDtcblxuY29uc3QgRGF0YXNldFRhYnNVbm1lbW9pemVkID0gKHthY3RpdmVEYXRhc2V0LCBkYXRhc2V0cywgc2hvd0RhdGFzZXRUYWJsZX0pID0+IChcbiAgPERhdGFzZXRDYXRhbG9nIGNsYXNzTmFtZT1cImRhdGFzZXQtbW9kYWwtY2F0YWxvZ1wiPlxuICAgIHtPYmplY3QudmFsdWVzKGRhdGFzZXRzKS5tYXAoZGF0YXNldCA9PiAoXG4gICAgICA8RGF0YXNldE1vZGFsVGFiXG4gICAgICAgIGNsYXNzTmFtZT1cImRhdGFzZXQtbW9kYWwtdGFiXCJcbiAgICAgICAgYWN0aXZlPXtkYXRhc2V0ID09PSBhY3RpdmVEYXRhc2V0fVxuICAgICAgICBrZXk9e2RhdGFzZXQuaWR9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dEYXRhc2V0VGFibGUoZGF0YXNldC5pZCl9XG4gICAgICA+XG4gICAgICAgIDxEYXRhc2V0TGFiZWwgZGF0YXNldD17ZGF0YXNldH0gLz5cbiAgICAgIDwvRGF0YXNldE1vZGFsVGFiPlxuICAgICkpfVxuICA8L0RhdGFzZXRDYXRhbG9nPlxuKTtcblxuZXhwb3J0IGNvbnN0IERhdGFzZXRUYWJzID0gUmVhY3QubWVtbyhEYXRhc2V0VGFic1VubWVtb2l6ZWQpO1xuXG5EYXRhc2V0VGFicy5kaXNwbGF5TmFtZSA9ICdEYXRhc2V0VGFicyc7XG5cbkRhdGFUYWJsZU1vZGFsRmFjdG9yeS5kZXBzID0gW0RhdGFUYWJsZUZhY3RvcnldO1xuXG5jb25zdCBUYWJsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWluLWhlaWdodDogNzB2aDtcbiAgbWF4LWhlaWdodDogNzB2aDtcbmA7XG5cbmZ1bmN0aW9uIERhdGFUYWJsZU1vZGFsRmFjdG9yeShEYXRhVGFibGUpIHtcbiAgY2xhc3MgRGF0YVRhYmxlTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGRhdGFzZXRDZWxsU2l6ZUNhY2hlID0ge307XG4gICAgZGF0YUlkID0gcHJvcHMgPT4gcHJvcHMuZGF0YUlkO1xuICAgIGRhdGFzZXRzID0gcHJvcHMgPT4gcHJvcHMuZGF0YXNldHM7XG4gICAgZmllbGRzID0gcHJvcHMgPT4gKHByb3BzLmRhdGFzZXRzW3Byb3BzLmRhdGFJZF0gfHwge30pLmZpZWxkcztcbiAgICBjb2x1bW5zID0gY3JlYXRlU2VsZWN0b3IodGhpcy5maWVsZHMsIGZpZWxkcyA9PiBmaWVsZHMubWFwKGYgPT4gZi5uYW1lKSk7XG4gICAgY29sTWV0YSA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZmllbGRzLCBmaWVsZHMgPT5cbiAgICAgIGZpZWxkcy5yZWR1Y2UoXG4gICAgICAgIChhY2MsIHtuYW1lLCB0eXBlfSkgPT4gKHtcbiAgICAgICAgICAuLi5hY2MsXG4gICAgICAgICAgW25hbWVdOiB0eXBlXG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICk7XG4gICAgY2VsbFNpemVDYWNoZSA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZGF0YUlkLCB0aGlzLmRhdGFzZXRzLCAoZGF0YUlkLCBkYXRhc2V0cykgPT4ge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmRhdGFzZXRzW2RhdGFJZF0pIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgICAgY29uc3Qge2ZpZWxkcywgYWxsRGF0YX0gPSB0aGlzLnByb3BzLmRhdGFzZXRzW2RhdGFJZF07XG5cbiAgICAgIGxldCBzaG93Q2FsY3VsYXRlID0gbnVsbDtcbiAgICAgIGlmICghdGhpcy5kYXRhc2V0Q2VsbFNpemVDYWNoZVtkYXRhSWRdKSB7XG4gICAgICAgIHNob3dDYWxjdWxhdGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy5kYXRhc2V0Q2VsbFNpemVDYWNoZVtkYXRhSWRdLmZpZWxkcyAhPT0gZmllbGRzIHx8XG4gICAgICAgIHRoaXMuZGF0YXNldENlbGxTaXplQ2FjaGVbZGF0YUlkXS5hbGxEYXRhICE9PSBhbGxEYXRhXG4gICAgICApIHtcbiAgICAgICAgc2hvd0NhbGN1bGF0ZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2hvd0NhbGN1bGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhc2V0Q2VsbFNpemVDYWNoZVtkYXRhSWRdLmNlbGxTaXplQ2FjaGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNlbGxTaXplQ2FjaGUgPSBmaWVsZHMucmVkdWNlKFxuICAgICAgICAoYWNjLCBmaWVsZCwgY29sSWR4KSA9PiAoe1xuICAgICAgICAgIC4uLmFjYyxcbiAgICAgICAgICBbZmllbGQubmFtZV06IHJlbmRlcmVkU2l6ZSh7XG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgIHJvd3M6IGFsbERhdGEsXG4gICAgICAgICAgICAgIGNvbHVtbjogZmllbGQubmFtZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbElkeCxcbiAgICAgICAgICAgIHR5cGU6IGZpZWxkLnR5cGUsXG4gICAgICAgICAgICBmb250U2l6ZTogdGhpcy5wcm9wcy50aGVtZS5jZWxsRm9udFNpemUsXG4gICAgICAgICAgICBmb250OiB0aGlzLnByb3BzLnRoZW1lLmZvbnRGYW1pbHlcbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAge31cbiAgICAgICk7XG4gICAgICAvLyBzYXZlIGl0IHRvIGNhY2hlXG4gICAgICB0aGlzLmRhdGFzZXRDZWxsU2l6ZUNhY2hlW2RhdGFJZF0gPSB7XG4gICAgICAgIGNlbGxTaXplQ2FjaGUsXG4gICAgICAgIGZpZWxkcyxcbiAgICAgICAgYWxsRGF0YVxuICAgICAgfTtcbiAgICAgIHJldHVybiBjZWxsU2l6ZUNhY2hlO1xuICAgIH0pO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2RhdGFzZXRzLCBkYXRhSWQsIHNob3dEYXRhc2V0VGFibGV9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmICghZGF0YXNldHMgfHwgIWRhdGFJZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aXZlRGF0YXNldCA9IGRhdGFzZXRzW2RhdGFJZF07XG4gICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5jb2x1bW5zKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgY29sTWV0YSA9IHRoaXMuY29sTWV0YSh0aGlzLnByb3BzKTtcbiAgICAgIGNvbnN0IGNlbGxTaXplQ2FjaGUgPSB0aGlzLmNlbGxTaXplQ2FjaGUodGhpcy5wcm9wcyk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRNb2RhbCBjbGFzc05hbWU9XCJkYXRhc2V0LW1vZGFsXCIgaWQ9XCJkYXRhc2V0LW1vZGFsXCI+XG4gICAgICAgICAgPENhbnZhc0hhY2sgLz5cbiAgICAgICAgICA8VGFibGVDb250YWluZXI+XG4gICAgICAgICAgICA8RGF0YXNldFRhYnNcbiAgICAgICAgICAgICAgYWN0aXZlRGF0YXNldD17YWN0aXZlRGF0YXNldH1cbiAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICBzaG93RGF0YXNldFRhYmxlPXtzaG93RGF0YXNldFRhYmxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtkYXRhc2V0c1tkYXRhSWRdID8gKFxuICAgICAgICAgICAgICA8RGF0YVRhYmxlXG4gICAgICAgICAgICAgICAga2V5PXtkYXRhSWR9XG4gICAgICAgICAgICAgICAgZGF0YUlkPXtkYXRhSWR9XG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICBjb2xNZXRhPXtjb2xNZXRhfVxuICAgICAgICAgICAgICAgIGNlbGxTaXplQ2FjaGU9e2NlbGxTaXplQ2FjaGV9XG4gICAgICAgICAgICAgICAgcm93cz17YWN0aXZlRGF0YXNldC5hbGxEYXRhfVxuICAgICAgICAgICAgICAgIHBpbm5lZENvbHVtbnM9e2FjdGl2ZURhdGFzZXQucGlubmVkQ29sdW1uc31cbiAgICAgICAgICAgICAgICBzb3J0T3JkZXI9e2FjdGl2ZURhdGFzZXQuc29ydE9yZGVyfVxuICAgICAgICAgICAgICAgIHNvcnRDb2x1bW49e2FjdGl2ZURhdGFzZXQuc29ydENvbHVtbn1cbiAgICAgICAgICAgICAgICBjb3B5VGFibGVDb2x1bW49e3RoaXMucHJvcHMuY29weVRhYmxlQ29sdW1ufVxuICAgICAgICAgICAgICAgIHBpblRhYmxlQ29sdW1uPXt0aGlzLnByb3BzLnBpblRhYmxlQ29sdW1ufVxuICAgICAgICAgICAgICAgIHNvcnRUYWJsZUNvbHVtbj17dGhpcy5wcm9wcy5zb3J0VGFibGVDb2x1bW59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgICAgICA8L1N0eWxlZE1vZGFsPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd2l0aFRoZW1lKERhdGFUYWJsZU1vZGFsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVRhYmxlTW9kYWxGYWN0b3J5O1xuIl19