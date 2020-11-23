"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTable = exports.TableSection = exports.Container = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactVirtualized = require("react-virtualized");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _reselect = require("reselect");

var _lodash = _interopRequireDefault(require("lodash.get"));

var _lodash2 = _interopRequireDefault(require("lodash.debounce"));

var _optionDropdown = _interopRequireDefault(require("./option-dropdown"));

var _grid = _interopRequireDefault(require("./grid"));

var _button = _interopRequireDefault(require("./button"));

var _icons = require("../icons");

var _fieldToken = _interopRequireDefault(require("../field-token"));

var _dataUtils = require("../../../utils/data-utils");

var _cellSize = require("./cell-size");

var _defaultSettings = require("../../../constants/default-settings");

var _fieldToAlignRight;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  font-size: 11px;\n  flex-grow: 1;\n  color: ", ";\n  width: 100%;\n\n  .ReactVirtualized__Grid:focus,\n  .ReactVirtualized__Grid:active {\n    outline: 0;\n  }\n\n  .cell {\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  *:focus {\n    outline: 0;\n  }\n\n  .results-table-wrapper {\n    position: relative;\n    min-height: 100%;\n    max-height: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    overflow: hidden;\n    border-top: none;\n\n    .scroll-in-ui-thread::after {\n      content: '';\n      height: 100%;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      top: 0;\n      width: 100%;\n    }\n\n    .grid-row {\n      position: relative;\n      display: flex;\n      flex-direction: row;\n    }\n    .grid-column {\n      display: flex;\n      flex-direction: column;\n      flex: 1 1 auto;\n    }\n    .pinned-grid-container {\n      flex: 0 0 75px;\n      z-index: 10;\n      position: absolute;\n      left: 0;\n      top: 0;\n      border-right: 2px solid ", ";\n    }\n\n    .header-grid {\n      overflow: hidden !important;\n    }\n\n    .body-grid {\n      overflow: overlay !important;\n    }\n\n    .pinned-grid {\n      overflow: overlay !important;\n    }\n\n    .even-row {\n      background-color: ", ";\n    }\n    .odd-row {\n      background-color: ", ";\n    }\n    .cell,\n    .header-cell {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start;\n      text-align: center;\n      overflow: hidden;\n\n      .n-sort-idx {\n        font-size: 9px;\n      }\n    }\n    .cell {\n      border-bottom: 1px solid ", ";\n      border-right: 1px solid ", ";\n      white-space: nowrap;\n      overflow: auto;\n      padding: 0 ", "px;\n      font-size: ", "px;\n\n      .result-link {\n        text-decoration: none;\n      }\n    }\n    .cell.end-cell,\n    .header-cell.end-cell {\n      border-right: none;\n      padding-right: ", "px;\n    }\n    .cell.first-cell,\n    .header-cell.first-cell {\n      padding-left: ", "px;\n    }\n    .cell.bottom-cell {\n      border-bottom: none;\n    }\n    .cell.align-right {\n      align-items: flex-end;\n    }\n    .header-cell {\n      border-bottom: 1px solid ", ";\n      border-top: 1px solid ", ";\n      padding-top: ", "px;\n      padding-right: 0;\n      padding-bottom: ", "px;\n      padding-left: ", "px;\n      align-items: center;\n      justify-content: space-between;\n      display: flex;\n      flex-direction: row;\n      background-color: ", ";\n\n      &:hover {\n        .more {\n          color: ", ";\n        }\n      }\n      .n-sort-idx {\n        font-size: 9px;\n      }\n      .details {\n        font-weight: 500;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        height: 100%;\n        overflow: hidden;\n        flex-grow: 1;\n        .col-name {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n\n          .col-name__left {\n            display: flex;\n            align-items: center;\n            overflow: hidden;\n            svg {\n              margin-left: 6px;\n            }\n          }\n          .col-name__name {\n            overflow: hidden;\n            white-space: nowrap;\n          }\n          .col-name__sort {\n            cursor: pointer;\n          }\n        }\n      }\n\n      .more {\n        color: transparent;\n        margin-left: 5px;\n      }\n    }\n  }\n\n  :focus {\n    outline: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var defaultHeaderRowHeight = 55;
var defaultRowHeight = 32;
var overscanColumnCount = 10;
var overscanRowCount = 10;
var fieldToAlignRight = (_fieldToAlignRight = {}, (0, _defineProperty2["default"])(_fieldToAlignRight, _defaultSettings.ALL_FIELD_TYPES.integer, true), (0, _defineProperty2["default"])(_fieldToAlignRight, _defaultSettings.ALL_FIELD_TYPES.real, true), _fieldToAlignRight);

var Container = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.pinnedGridBorderColor;
}, function (props) {
  return props.theme.evenRowBackground;
}, function (props) {
  return props.theme.oddRowBackground;
}, function (props) {
  return props.theme.cellBorderColor;
}, function (props) {
  return props.theme.cellBorderColor;
}, function (props) {
  return props.theme.cellPaddingSide;
}, function (props) {
  return props.theme.cellFontSize;
}, function (props) {
  return props.theme.cellPaddingSide + props.theme.edgeCellPaddingSide;
}, function (props) {
  return props.theme.cellPaddingSide + props.theme.edgeCellPaddingSide;
}, function (props) {
  return props.theme.headerCellBorderColor;
}, function (props) {
  return props.theme.headerCellBorderColor;
}, function (props) {
  return props.theme.headerPaddingTop;
}, function (props) {
  return props.theme.headerPaddingBottom;
}, function (props) {
  return props.theme.cellPaddingSide;
}, function (props) {
  return props.theme.headerCellBackground;
}, function (props) {
  return props.theme.headerCellIconColor;
});

exports.Container = Container;
var defaultColumnWidth = 200;

var columnWidthFunction = function columnWidthFunction(columns, cellSizeCache, ghost) {
  return function (_ref) {
    var index = _ref.index;
    return (columns[index] || {}).ghost ? ghost : cellSizeCache[columns[index]] || defaultColumnWidth;
  };
};
/*
 * This is an accessor method used to generalize getting a cell from a data row
 */


var getRowCell = function getRowCell(_ref2) {
  var rows = _ref2.rows,
      columns = _ref2.columns,
      column = _ref2.column,
      colMeta = _ref2.colMeta,
      rowIndex = _ref2.rowIndex,
      sortColumn = _ref2.sortColumn,
      sortOrder = _ref2.sortOrder;
  var rowIdx = sortOrder && sortOrder.length ? (0, _lodash["default"])(sortOrder, rowIndex) : rowIndex;
  var type = colMeta[column];
  return (0, _dataUtils.parseFieldValue)((0, _lodash["default"])(rows, [rowIdx, columns.indexOf(column)], 'Err'), type);
};

var renderHeaderCell = function renderHeaderCell(columns, isPinned, props, toggleMoreOptions, moreOptionsColumn) {
  // eslint-disable-next-line react/display-name
  return function (cellInfo) {
    var _classnames;

    var columnIndex = cellInfo.columnIndex,
        key = cellInfo.key,
        style = cellInfo.style;
    var colMeta = props.colMeta,
        sortColumn = props.sortColumn,
        _sortTableColumn = props.sortTableColumn,
        unsortColumn = props.unsortColumn,
        _pinTableColumn = props.pinTableColumn,
        _copyTableColumn = props.copyTableColumn,
        dataId = props.dataId;
    var column = columns[columnIndex];
    var isGhost = column.ghost;
    var isSorted = sortColumn[column];
    var firstCell = columnIndex === 0;
    return _react["default"].createElement("div", {
      className: (0, _classnames3["default"])('header-cell', (_classnames = {}, (0, _defineProperty2["default"])(_classnames, "column-".concat(columnIndex), true), (0, _defineProperty2["default"])(_classnames, 'pinned-header-cell', isPinned), (0, _defineProperty2["default"])(_classnames, 'first-cell', firstCell), _classnames)),
      key: key,
      style: style,
      onClick: function onClick(e) {
        e.shiftKey ? _sortTableColumn(dataId, column) : null;
      },
      onDoubleClick: function onDoubleClick() {
        return _sortTableColumn(dataId, column);
      },
      title: column
    }, isGhost ? _react["default"].createElement("div", null) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("section", {
      className: "details"
    }, _react["default"].createElement("div", {
      className: "col-name"
    }, _react["default"].createElement("div", {
      className: "col-name__left"
    }, _react["default"].createElement("div", {
      className: "col-name__name"
    }, column), _react["default"].createElement(_button["default"], {
      className: "col-name__sort",
      onClick: function onClick() {
        return _sortTableColumn(dataId, column);
      }
    }, isSorted ? isSorted === _defaultSettings.SORT_ORDER.ASCENDING ? _react["default"].createElement(_icons.ArrowUp, {
      height: "14px"
    }) : _react["default"].createElement(_icons.ArrowDown, {
      height: "14px"
    }) : null)), _react["default"].createElement(_button["default"], {
      className: "more",
      onClick: function onClick() {
        return toggleMoreOptions(column);
      }
    }, _react["default"].createElement(_icons.VertThreeDots, {
      height: "14px"
    }))), _react["default"].createElement(_fieldToken["default"], {
      type: colMeta[column]
    })), _react["default"].createElement("section", {
      className: "options"
    }, _react["default"].createElement(_optionDropdown["default"], {
      isOpened: moreOptionsColumn === column,
      type: colMeta[column],
      column: column,
      toggleMoreOptions: toggleMoreOptions,
      sortTableColumn: function sortTableColumn(mode) {
        return _sortTableColumn(dataId, column, mode);
      },
      sortMode: sortColumn && sortColumn[column],
      pinTableColumn: function pinTableColumn() {
        return _pinTableColumn(dataId, column);
      },
      copyTableColumn: function copyTableColumn() {
        return _copyTableColumn(dataId, column);
      },
      isSorted: isSorted,
      isPinned: isPinned,
      unsortColumn: unsortColumn
    }))));
  };
};

var renderDataCell = function renderDataCell(columns, isPinned, props) {
  return function (cellInfo) {
    var _classnames2;

    var columnIndex = cellInfo.columnIndex,
        key = cellInfo.key,
        style = cellInfo.style,
        rowIndex = cellInfo.rowIndex;
    var rows = props.rows,
        colMeta = props.colMeta;
    var column = columns[columnIndex];
    var isGhost = column.ghost;
    var rowCell = isGhost ? '' : getRowCell(_objectSpread({}, props, {
      column: column,
      rowIndex: rowIndex
    }));
    var type = isGhost ? null : colMeta[column];
    var endCell = columnIndex === columns.length - 1;
    var firstCell = columnIndex === 0;
    var bottomCell = rowIndex === rows.length - 1;
    var alignRight = fieldToAlignRight[type];

    var cell = _react["default"].createElement("div", {
      className: (0, _classnames3["default"])('cell', (_classnames2 = {}, (0, _defineProperty2["default"])(_classnames2, rowIndex % 2 === 0 ? 'even-row' : 'odd-row', true), (0, _defineProperty2["default"])(_classnames2, "row-".concat(rowIndex), true), (0, _defineProperty2["default"])(_classnames2, 'pinned-cell', isPinned), (0, _defineProperty2["default"])(_classnames2, 'first-cell', firstCell), (0, _defineProperty2["default"])(_classnames2, 'end-cell', endCell), (0, _defineProperty2["default"])(_classnames2, 'bottom-cell', bottomCell), (0, _defineProperty2["default"])(_classnames2, 'align-right', alignRight), _classnames2)),
      key: key,
      style: style,
      title: isGhost ? undefined : rowCell
    }, "".concat(rowCell).concat(endCell ? '\n' : '\t'));

    return cell;
  };
};

var TableSection = function TableSection(_ref3) {
  var classList = _ref3.classList,
      isPinned = _ref3.isPinned,
      columns = _ref3.columns,
      headerGridProps = _ref3.headerGridProps,
      fixedWidth = _ref3.fixedWidth,
      _ref3$fixedHeight = _ref3.fixedHeight,
      fixedHeight = _ref3$fixedHeight === void 0 ? undefined : _ref3$fixedHeight,
      onScroll = _ref3.onScroll,
      scrollTop = _ref3.scrollTop,
      dataGridProps = _ref3.dataGridProps,
      columnWidth = _ref3.columnWidth,
      setGridRef = _ref3.setGridRef,
      headerCellRender = _ref3.headerCellRender,
      dataCellRender = _ref3.dataCellRender,
      _ref3$scrollLeft = _ref3.scrollLeft,
      scrollLeft = _ref3$scrollLeft === void 0 ? undefined : _ref3$scrollLeft;
  return _react["default"].createElement(_reactVirtualized.AutoSizer, null, function (_ref4) {
    var width = _ref4.width,
        height = _ref4.height;
    var gridDimension = {
      columnCount: columns.length,
      columnWidth: columnWidth,
      width: fixedWidth || width
    };
    var dataGridHeight = fixedHeight || height;
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
      className: (0, _classnames3["default"])('scroll-in-ui-thread', classList.header)
    }, _react["default"].createElement(_grid["default"], (0, _extends2["default"])({
      cellRenderer: headerCellRender
    }, headerGridProps, gridDimension, {
      scrollLeft: scrollLeft
    }))), _react["default"].createElement("div", {
      className: (0, _classnames3["default"])('scroll-in-ui-thread', classList.rows),
      style: {
        top: headerGridProps.height
      }
    }, _react["default"].createElement(_grid["default"], (0, _extends2["default"])({
      cellRenderer: dataCellRender
    }, dataGridProps, gridDimension, {
      className: isPinned ? 'pinned-grid' : 'body-grid',
      height: dataGridHeight - headerGridProps.height,
      onScroll: onScroll,
      scrollTop: scrollTop,
      setGridRef: setGridRef
    }))));
  });
};

exports.TableSection = TableSection;

var DataTable =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(DataTable, _Component);

  function DataTable() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, DataTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(DataTable)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      cellSizeCache: {},
      moreOptionsColumn: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "columns", function (props) {
      return props.columns;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "pinnedColumns", function (props) {
      return props.pinnedColumns;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unpinnedColumns", (0, _reselect.createSelector)(_this.columns, _this.pinnedColumns, function (columns, pinnedColumns) {
      return !Array.isArray(pinnedColumns) ? columns : columns.filter(function (c) {
        return !pinnedColumns.includes(c);
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMoreOptions", function (moreOptionsColumn) {
      return _this.setState({
        moreOptionsColumn: _this.state.moreOptionsColumn === moreOptionsColumn ? null : moreOptionsColumn
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getCellSizeCache", function () {
      var _this$props = _this.props,
          propsCache = _this$props.cellSizeCache,
          fixedWidth = _this$props.fixedWidth,
          pinnedColumns = _this$props.pinnedColumns;

      var unpinnedColumns = _this.unpinnedColumns(_this.props);

      var width = fixedWidth ? fixedWidth : _this.root.current ? _this.root.current.clientWidth : 0; // pin column border is 2 pixel vs 1 pixel

      var adjustWidth = pinnedColumns.length ? width - 1 : width;

      var _adjustCellsToContain = (0, _cellSize.adjustCellsToContainer)(adjustWidth, propsCache, pinnedColumns, unpinnedColumns),
          cellSizeCache = _adjustCellsToContain.cellSizeCache,
          ghost = _adjustCellsToContain.ghost;

      return {
        cellSizeCache: cellSizeCache,
        ghost: ghost
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "doScaleCellsToWidth", function () {
      _this.setState(_this.getCellSizeCache());
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaleCellsToWidth", (0, _lodash2["default"])(_this.doScaleCellsToWidth, 300));
    return _this;
  }

  (0, _createClass2["default"])(DataTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.scaleCellsToWidth);
      this.scaleCellsToWidth();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.cellSizeCache !== prevProps.cellSizeCache || this.props.pinnedColumns !== prevProps.pinnedColumns) {
        this.scaleCellsToWidth();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.scaleCellsToWidth);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          rows = _this$props2.rows,
          pinnedColumns = _this$props2.pinnedColumns,
          _this$props2$theme = _this$props2.theme,
          theme = _this$props2$theme === void 0 ? {} : _this$props2$theme,
          fixedWidth = _this$props2.fixedWidth,
          fixedHeight = _this$props2.fixedHeight;
      var unpinnedColumns = this.unpinnedColumns(this.props);
      var _this$state = this.state,
          cellSizeCache = _this$state.cellSizeCache,
          moreOptionsColumn = _this$state.moreOptionsColumn,
          ghost = _this$state.ghost;
      var unpinnedColumnsGhost = ghost ? [].concat((0, _toConsumableArray2["default"])(unpinnedColumns), [{
        ghost: true
      }]) : unpinnedColumns;
      var pinnedColumnsWidth = pinnedColumns.reduce(function (acc, val) {
        return acc + (0, _lodash["default"])(cellSizeCache, val, 0);
      }, 0);
      var hasPinnedColumns = Boolean(pinnedColumns.length);
      var _theme$headerRowHeigh = theme.headerRowHeight,
          headerRowHeight = _theme$headerRowHeigh === void 0 ? defaultHeaderRowHeight : _theme$headerRowHeigh,
          _theme$rowHeight = theme.rowHeight,
          rowHeight = _theme$rowHeight === void 0 ? defaultRowHeight : _theme$rowHeight;
      var headerGridProps = {
        cellSizeCache: cellSizeCache,
        className: 'header-grid',
        height: headerRowHeight,
        rowCount: 1,
        rowHeight: headerRowHeight
      };
      var dataGridProps = {
        cellSizeCache: cellSizeCache,
        overscanColumnCount: overscanColumnCount,
        overscanRowCount: overscanRowCount,
        rowCount: (rows || []).length,
        rowHeight: rowHeight
      };
      return _react["default"].createElement(Container, {
        className: "data-table-container",
        ref: this.root
      }, Object.keys(cellSizeCache).length && _react["default"].createElement(_reactVirtualized.ScrollSync, null, function (_ref5) {
        var _onScroll = _ref5.onScroll,
            scrollLeft = _ref5.scrollLeft,
            scrollTop = _ref5.scrollTop;
        return _react["default"].createElement("div", {
          className: "results-table-wrapper"
        }, hasPinnedColumns && _react["default"].createElement("div", {
          key: "pinned-columns",
          className: "pinned-columns grid-row"
        }, _react["default"].createElement(TableSection, {
          classList: {
            header: 'pinned-columns--header pinned-grid-container',
            rows: 'pinned-columns--rows pinned-grid-container'
          },
          isPinned: true,
          columns: pinnedColumns,
          headerGridProps: headerGridProps,
          fixedWidth: pinnedColumnsWidth,
          onScroll: function onScroll(args) {
            return _onScroll(_objectSpread({}, args, {
              scrollLeft: scrollLeft
            }));
          },
          scrollTop: scrollTop,
          dataGridProps: dataGridProps,
          setGridRef: function setGridRef(pinnedGrid) {
            return _this2.pinnedGrid = pinnedGrid;
          },
          columnWidth: columnWidthFunction(pinnedColumns, cellSizeCache),
          headerCellRender: renderHeaderCell(pinnedColumns, true, _this2.props, _this2.toggleMoreOptions, moreOptionsColumn),
          dataCellRender: renderDataCell(pinnedColumns, true, _this2.props)
        })), _react["default"].createElement("div", {
          key: "unpinned-columns",
          style: {
            marginLeft: "".concat(hasPinnedColumns ? "".concat(pinnedColumnsWidth, "px") : '0')
          },
          className: "unpinned-columns grid-column"
        }, _react["default"].createElement(TableSection, {
          classList: {
            header: 'unpinned-columns--header unpinned-grid-container',
            rows: 'unpinned-columns--rows unpinned-grid-container'
          },
          isPinned: false,
          columns: unpinnedColumnsGhost,
          headerGridProps: headerGridProps,
          fixedWidth: fixedWidth,
          fixedHeight: fixedHeight,
          onScroll: _onScroll,
          scrollTop: scrollTop,
          scrollLeft: scrollLeft,
          dataGridProps: dataGridProps,
          setGridRef: function setGridRef(unpinnedGrid) {
            return _this2.unpinnedGrid = unpinnedGrid;
          },
          columnWidth: columnWidthFunction(unpinnedColumnsGhost, cellSizeCache, ghost),
          headerCellRender: renderHeaderCell(unpinnedColumnsGhost, false, _this2.props, _this2.toggleMoreOptions, moreOptionsColumn),
          dataCellRender: renderDataCell(unpinnedColumnsGhost, false, _this2.props)
        })));
      }));
    }
  }]);
  return DataTable;
}(_react.Component);

exports.DataTable = DataTable;
(0, _defineProperty2["default"])(DataTable, "defaultProps", {
  rows: [],
  pinnedColumns: [],
  colMeta: {},
  cellSizeCache: {},
  sortColumn: {},
  fixedWidth: null,
  fixedHeight: null,
  theme: {}
});

function DataTableFactory() {
  return (0, _styledComponents.withTheme)(DataTable);
}

var _default = DataTableFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9kYXRhLXRhYmxlL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRIZWFkZXJSb3dIZWlnaHQiLCJkZWZhdWx0Um93SGVpZ2h0Iiwib3ZlcnNjYW5Db2x1bW5Db3VudCIsIm92ZXJzY2FuUm93Q291bnQiLCJmaWVsZFRvQWxpZ25SaWdodCIsIkFMTF9GSUVMRF9UWVBFUyIsImludGVnZXIiLCJyZWFsIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvckxUIiwicGlubmVkR3JpZEJvcmRlckNvbG9yIiwiZXZlblJvd0JhY2tncm91bmQiLCJvZGRSb3dCYWNrZ3JvdW5kIiwiY2VsbEJvcmRlckNvbG9yIiwiY2VsbFBhZGRpbmdTaWRlIiwiY2VsbEZvbnRTaXplIiwiZWRnZUNlbGxQYWRkaW5nU2lkZSIsImhlYWRlckNlbGxCb3JkZXJDb2xvciIsImhlYWRlclBhZGRpbmdUb3AiLCJoZWFkZXJQYWRkaW5nQm90dG9tIiwiaGVhZGVyQ2VsbEJhY2tncm91bmQiLCJoZWFkZXJDZWxsSWNvbkNvbG9yIiwiZGVmYXVsdENvbHVtbldpZHRoIiwiY29sdW1uV2lkdGhGdW5jdGlvbiIsImNvbHVtbnMiLCJjZWxsU2l6ZUNhY2hlIiwiZ2hvc3QiLCJpbmRleCIsImdldFJvd0NlbGwiLCJyb3dzIiwiY29sdW1uIiwiY29sTWV0YSIsInJvd0luZGV4Iiwic29ydENvbHVtbiIsInNvcnRPcmRlciIsInJvd0lkeCIsImxlbmd0aCIsInR5cGUiLCJpbmRleE9mIiwicmVuZGVySGVhZGVyQ2VsbCIsImlzUGlubmVkIiwidG9nZ2xlTW9yZU9wdGlvbnMiLCJtb3JlT3B0aW9uc0NvbHVtbiIsImNlbGxJbmZvIiwiY29sdW1uSW5kZXgiLCJrZXkiLCJzdHlsZSIsInNvcnRUYWJsZUNvbHVtbiIsInVuc29ydENvbHVtbiIsInBpblRhYmxlQ29sdW1uIiwiY29weVRhYmxlQ29sdW1uIiwiZGF0YUlkIiwiaXNHaG9zdCIsImlzU29ydGVkIiwiZmlyc3RDZWxsIiwiZSIsInNoaWZ0S2V5IiwiU09SVF9PUkRFUiIsIkFTQ0VORElORyIsIm1vZGUiLCJyZW5kZXJEYXRhQ2VsbCIsInJvd0NlbGwiLCJlbmRDZWxsIiwiYm90dG9tQ2VsbCIsImFsaWduUmlnaHQiLCJjZWxsIiwidW5kZWZpbmVkIiwiVGFibGVTZWN0aW9uIiwiY2xhc3NMaXN0IiwiaGVhZGVyR3JpZFByb3BzIiwiZml4ZWRXaWR0aCIsImZpeGVkSGVpZ2h0Iiwib25TY3JvbGwiLCJzY3JvbGxUb3AiLCJkYXRhR3JpZFByb3BzIiwiY29sdW1uV2lkdGgiLCJzZXRHcmlkUmVmIiwiaGVhZGVyQ2VsbFJlbmRlciIsImRhdGFDZWxsUmVuZGVyIiwic2Nyb2xsTGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiZ3JpZERpbWVuc2lvbiIsImNvbHVtbkNvdW50IiwiZGF0YUdyaWRIZWlnaHQiLCJoZWFkZXIiLCJ0b3AiLCJEYXRhVGFibGUiLCJwaW5uZWRDb2x1bW5zIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIiwiYyIsImluY2x1ZGVzIiwic2V0U3RhdGUiLCJzdGF0ZSIsInByb3BzQ2FjaGUiLCJ1bnBpbm5lZENvbHVtbnMiLCJyb290IiwiY3VycmVudCIsImNsaWVudFdpZHRoIiwiYWRqdXN0V2lkdGgiLCJnZXRDZWxsU2l6ZUNhY2hlIiwiZG9TY2FsZUNlbGxzVG9XaWR0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY2FsZUNlbGxzVG9XaWR0aCIsInByZXZQcm9wcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1bnBpbm5lZENvbHVtbnNHaG9zdCIsInBpbm5lZENvbHVtbnNXaWR0aCIsInJlZHVjZSIsImFjYyIsInZhbCIsImhhc1Bpbm5lZENvbHVtbnMiLCJCb29sZWFuIiwiaGVhZGVyUm93SGVpZ2h0Iiwicm93SGVpZ2h0IiwiY2xhc3NOYW1lIiwicm93Q291bnQiLCJPYmplY3QiLCJrZXlzIiwiYXJncyIsInBpbm5lZEdyaWQiLCJtYXJnaW5MZWZ0IiwidW5waW5uZWRHcmlkIiwiQ29tcG9uZW50IiwiRGF0YVRhYmxlRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsc0JBQXNCLEdBQUcsRUFBL0I7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxFQUF6QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLEVBQTVCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsRUFBekI7QUFDQSxJQUFNQyxpQkFBaUIsa0ZBQ3BCQyxpQ0FBZ0JDLE9BREksRUFDTSxJQUROLHdEQUVwQkQsaUNBQWdCRSxJQUZJLEVBRUcsSUFGSCxzQkFBdkI7O0FBS08sSUFBTUMsU0FBUyxHQUFHQyw2QkFBT0MsR0FBVixvQkFJWCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQWhCO0FBQUEsQ0FKTSxFQTBEVSxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLHFCQUFoQjtBQUFBLENBMURmLEVBMEVJLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsaUJBQWhCO0FBQUEsQ0ExRVQsRUE2RUksVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxnQkFBaEI7QUFBQSxDQTdFVCxFQStGVyxVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLGVBQWhCO0FBQUEsQ0EvRmhCLEVBZ0dVLFVBQUFOLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssZUFBaEI7QUFBQSxDQWhHZixFQW1HSCxVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxD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RUFBQUEsYUFBYSxFQUFFLEVBRks7QUFHcEJ6RCxFQUFBQSxPQUFPLEVBQUUsRUFIVztBQUlwQk4sRUFBQUEsYUFBYSxFQUFFLEVBSks7QUFLcEJRLEVBQUFBLFVBQVUsRUFBRSxFQUxRO0FBTXBCcUMsRUFBQUEsVUFBVSxFQUFFLElBTlE7QUFPcEJDLEVBQUFBLFdBQVcsRUFBRSxJQVBPO0FBUXBCL0QsRUFBQUEsS0FBSyxFQUFFO0FBUmEsQzs7QUFtTHhCLFNBQVN1SCxnQkFBVCxHQUE0QjtBQUMxQixTQUFPLGlDQUFVeEMsU0FBVixDQUFQO0FBQ0Q7O2VBRWN3QyxnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgY3JlYXRlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1Njcm9sbFN5bmMsIEF1dG9TaXplcn0gZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQnO1xuaW1wb3J0IHN0eWxlZCwge3dpdGhUaGVtZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XG5cbmltcG9ydCBPcHRpb25Ecm9wZG93biBmcm9tICcuL29wdGlvbi1kcm9wZG93bic7XG5cbmltcG9ydCBHcmlkIGZyb20gJy4vZ3JpZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCB7QXJyb3dVcCwgQXJyb3dEb3dufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQge1ZlcnRUaHJlZURvdHN9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBGaWVsZFRva2VuIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpZWxkLXRva2VuJztcblxuaW1wb3J0IHtwYXJzZUZpZWxkVmFsdWV9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuaW1wb3J0IHthZGp1c3RDZWxsc1RvQ29udGFpbmVyfSBmcm9tICcuL2NlbGwtc2l6ZSc7XG5cbmltcG9ydCB7QUxMX0ZJRUxEX1RZUEVTLCBTT1JUX09SREVSfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IGRlZmF1bHRIZWFkZXJSb3dIZWlnaHQgPSA1NTtcbmNvbnN0IGRlZmF1bHRSb3dIZWlnaHQgPSAzMjtcbmNvbnN0IG92ZXJzY2FuQ29sdW1uQ291bnQgPSAxMDtcbmNvbnN0IG92ZXJzY2FuUm93Q291bnQgPSAxMDtcbmNvbnN0IGZpZWxkVG9BbGlnblJpZ2h0ID0ge1xuICBbQUxMX0ZJRUxEX1RZUEVTLmludGVnZXJdOiB0cnVlLFxuICBbQUxMX0ZJRUxEX1RZUEVTLnJlYWxdOiB0cnVlXG59O1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLlJlYWN0VmlydHVhbGl6ZWRfX0dyaWQ6Zm9jdXMsXG4gIC5SZWFjdFZpcnR1YWxpemVkX19HcmlkOmFjdGl2ZSB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuXG4gIC5jZWxsIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICo6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cblxuICAucmVzdWx0cy10YWJsZS13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItdG9wOiBub25lO1xuXG4gICAgLnNjcm9sbC1pbi11aS10aHJlYWQ6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmdyaWQtcm93IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiAgICAuZ3JpZC1jb2x1bW4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG4gICAgLnBpbm5lZC1ncmlkLWNvbnRhaW5lciB7XG4gICAgICBmbGV4OiAwIDAgNzVweDtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGlubmVkR3JpZEJvcmRlckNvbG9yfTtcbiAgICB9XG5cbiAgICAuaGVhZGVyLWdyaWQge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5ib2R5LWdyaWQge1xuICAgICAgb3ZlcmZsb3c6IG92ZXJsYXkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucGlubmVkLWdyaWQge1xuICAgICAgb3ZlcmZsb3c6IG92ZXJsYXkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZXZlbi1yb3cge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ldmVuUm93QmFja2dyb3VuZH07XG4gICAgfVxuICAgIC5vZGQtcm93IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUub2RkUm93QmFja2dyb3VuZH07XG4gICAgfVxuICAgIC5jZWxsLFxuICAgIC5oZWFkZXItY2VsbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgIC5uLXNvcnQtaWR4IHtcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5jZWxsIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNlbGxCb3JkZXJDb2xvcn07XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNlbGxCb3JkZXJDb2xvcn07XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBwYWRkaW5nOiAwICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2VsbFBhZGRpbmdTaWRlfXB4O1xuICAgICAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNlbGxGb250U2l6ZX1weDtcblxuICAgICAgLnJlc3VsdC1saW5rIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgICAuY2VsbC5lbmQtY2VsbCxcbiAgICAuaGVhZGVyLWNlbGwuZW5kLWNlbGwge1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgcGFkZGluZy1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jZWxsUGFkZGluZ1NpZGUgKyBwcm9wcy50aGVtZS5lZGdlQ2VsbFBhZGRpbmdTaWRlfXB4O1xuICAgIH1cbiAgICAuY2VsbC5maXJzdC1jZWxsLFxuICAgIC5oZWFkZXItY2VsbC5maXJzdC1jZWxsIHtcbiAgICAgIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jZWxsUGFkZGluZ1NpZGUgKyBwcm9wcy50aGVtZS5lZGdlQ2VsbFBhZGRpbmdTaWRlfXB4O1xuICAgIH1cbiAgICAuY2VsbC5ib3R0b20tY2VsbCB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgICAuY2VsbC5hbGlnbi1yaWdodCB7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuICAgIC5oZWFkZXItY2VsbCB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXJDZWxsQm9yZGVyQ29sb3J9O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyQ2VsbEJvcmRlckNvbG9yfTtcbiAgICAgIHBhZGRpbmctdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlclBhZGRpbmdUb3B9cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyUGFkZGluZ0JvdHRvbX1weDtcbiAgICAgIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jZWxsUGFkZGluZ1NpZGV9cHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlckNlbGxCYWNrZ3JvdW5kfTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIC5tb3JlIHtcbiAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXJDZWxsSWNvbkNvbG9yfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm4tc29ydC1pZHgge1xuICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgIH1cbiAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgLmNvbC1uYW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgLmNvbC1uYW1lX19sZWZ0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2wtbmFtZV9fbmFtZSB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbC1uYW1lX19zb3J0IHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm1vcmUge1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBkZWZhdWx0Q29sdW1uV2lkdGggPSAyMDA7XG5cbmNvbnN0IGNvbHVtbldpZHRoRnVuY3Rpb24gPSAoY29sdW1ucywgY2VsbFNpemVDYWNoZSwgZ2hvc3QpID0+ICh7aW5kZXh9KSA9PiB7XG4gIHJldHVybiAoY29sdW1uc1tpbmRleF0gfHwge30pLmdob3N0ID8gZ2hvc3QgOiBjZWxsU2l6ZUNhY2hlW2NvbHVtbnNbaW5kZXhdXSB8fCBkZWZhdWx0Q29sdW1uV2lkdGg7XG59O1xuXG4vKlxuICogVGhpcyBpcyBhbiBhY2Nlc3NvciBtZXRob2QgdXNlZCB0byBnZW5lcmFsaXplIGdldHRpbmcgYSBjZWxsIGZyb20gYSBkYXRhIHJvd1xuICovXG5jb25zdCBnZXRSb3dDZWxsID0gKHtyb3dzLCBjb2x1bW5zLCBjb2x1bW4sIGNvbE1ldGEsIHJvd0luZGV4LCBzb3J0Q29sdW1uLCBzb3J0T3JkZXJ9KSA9PiB7XG4gIGNvbnN0IHJvd0lkeCA9IHNvcnRPcmRlciAmJiBzb3J0T3JkZXIubGVuZ3RoID8gZ2V0KHNvcnRPcmRlciwgcm93SW5kZXgpIDogcm93SW5kZXg7XG4gIGNvbnN0IHR5cGUgPSBjb2xNZXRhW2NvbHVtbl07XG5cbiAgcmV0dXJuIHBhcnNlRmllbGRWYWx1ZShnZXQocm93cywgW3Jvd0lkeCwgY29sdW1ucy5pbmRleE9mKGNvbHVtbildLCAnRXJyJyksIHR5cGUpO1xufTtcblxuY29uc3QgcmVuZGVySGVhZGVyQ2VsbCA9IChjb2x1bW5zLCBpc1Bpbm5lZCwgcHJvcHMsIHRvZ2dsZU1vcmVPcHRpb25zLCBtb3JlT3B0aW9uc0NvbHVtbikgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG4gIHJldHVybiBjZWxsSW5mbyA9PiB7XG4gICAgY29uc3Qge2NvbHVtbkluZGV4LCBrZXksIHN0eWxlfSA9IGNlbGxJbmZvO1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbE1ldGEsXG4gICAgICBzb3J0Q29sdW1uLFxuICAgICAgc29ydFRhYmxlQ29sdW1uLFxuICAgICAgdW5zb3J0Q29sdW1uLFxuICAgICAgcGluVGFibGVDb2x1bW4sXG4gICAgICBjb3B5VGFibGVDb2x1bW4sXG4gICAgICBkYXRhSWRcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zW2NvbHVtbkluZGV4XTtcbiAgICBjb25zdCBpc0dob3N0ID0gY29sdW1uLmdob3N0O1xuICAgIGNvbnN0IGlzU29ydGVkID0gc29ydENvbHVtbltjb2x1bW5dO1xuICAgIGNvbnN0IGZpcnN0Q2VsbCA9IGNvbHVtbkluZGV4ID09PSAwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdoZWFkZXItY2VsbCcsIHtcbiAgICAgICAgICBbYGNvbHVtbi0ke2NvbHVtbkluZGV4fWBdOiB0cnVlLFxuICAgICAgICAgICdwaW5uZWQtaGVhZGVyLWNlbGwnOiBpc1Bpbm5lZCxcbiAgICAgICAgICAnZmlyc3QtY2VsbCc6IGZpcnN0Q2VsbFxuICAgICAgICB9KX1cbiAgICAgICAga2V5PXtrZXl9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgZS5zaGlmdEtleSA/IHNvcnRUYWJsZUNvbHVtbihkYXRhSWQsIGNvbHVtbikgOiBudWxsO1xuICAgICAgICB9fVxuICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiBzb3J0VGFibGVDb2x1bW4oZGF0YUlkLCBjb2x1bW4pfVxuICAgICAgICB0aXRsZT17Y29sdW1ufVxuICAgICAgPlxuICAgICAgICB7aXNHaG9zdCA/IChcbiAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW5hbWVfX2xlZnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW5hbWVfX25hbWVcIj57Y29sdW1ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbmFtZV9fc29ydFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNvcnRUYWJsZUNvbHVtbihkYXRhSWQsIGNvbHVtbil9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpc1NvcnRlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICBpc1NvcnRlZCA9PT0gU09SVF9PUkRFUi5BU0NFTkRJTkcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dVcCBoZWlnaHQ9XCIxNHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RG93biBoZWlnaHQ9XCIxNHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtb3JlXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlTW9yZU9wdGlvbnMoY29sdW1uKX0+XG4gICAgICAgICAgICAgICAgICA8VmVydFRocmVlRG90cyBoZWlnaHQ9XCIxNHB4XCIgLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPEZpZWxkVG9rZW4gdHlwZT17Y29sTWV0YVtjb2x1bW5dfSAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgIDxPcHRpb25Ecm9wZG93blxuICAgICAgICAgICAgICAgIGlzT3BlbmVkPXttb3JlT3B0aW9uc0NvbHVtbiA9PT0gY29sdW1ufVxuICAgICAgICAgICAgICAgIHR5cGU9e2NvbE1ldGFbY29sdW1uXX1cbiAgICAgICAgICAgICAgICBjb2x1bW49e2NvbHVtbn1cbiAgICAgICAgICAgICAgICB0b2dnbGVNb3JlT3B0aW9ucz17dG9nZ2xlTW9yZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgc29ydFRhYmxlQ29sdW1uPXttb2RlID0+IHNvcnRUYWJsZUNvbHVtbihkYXRhSWQsIGNvbHVtbiwgbW9kZSl9XG4gICAgICAgICAgICAgICAgc29ydE1vZGU9e3NvcnRDb2x1bW4gJiYgc29ydENvbHVtbltjb2x1bW5dfVxuICAgICAgICAgICAgICAgIHBpblRhYmxlQ29sdW1uPXsoKSA9PiBwaW5UYWJsZUNvbHVtbihkYXRhSWQsIGNvbHVtbil9XG4gICAgICAgICAgICAgICAgY29weVRhYmxlQ29sdW1uPXsoKSA9PiBjb3B5VGFibGVDb2x1bW4oZGF0YUlkLCBjb2x1bW4pfVxuICAgICAgICAgICAgICAgIGlzU29ydGVkPXtpc1NvcnRlZH1cbiAgICAgICAgICAgICAgICBpc1Bpbm5lZD17aXNQaW5uZWR9XG4gICAgICAgICAgICAgICAgdW5zb3J0Q29sdW1uPXt1bnNvcnRDb2x1bW59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufTtcblxuY29uc3QgcmVuZGVyRGF0YUNlbGwgPSAoY29sdW1ucywgaXNQaW5uZWQsIHByb3BzKSA9PiB7XG4gIHJldHVybiBjZWxsSW5mbyA9PiB7XG4gICAgY29uc3Qge2NvbHVtbkluZGV4LCBrZXksIHN0eWxlLCByb3dJbmRleH0gPSBjZWxsSW5mbztcbiAgICBjb25zdCB7cm93cywgY29sTWV0YX0gPSBwcm9wcztcbiAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zW2NvbHVtbkluZGV4XTtcbiAgICBjb25zdCBpc0dob3N0ID0gY29sdW1uLmdob3N0O1xuXG4gICAgY29uc3Qgcm93Q2VsbCA9IGlzR2hvc3QgPyAnJyA6IGdldFJvd0NlbGwoey4uLnByb3BzLCBjb2x1bW4sIHJvd0luZGV4fSk7XG4gICAgY29uc3QgdHlwZSA9IGlzR2hvc3QgPyBudWxsIDogY29sTWV0YVtjb2x1bW5dO1xuXG4gICAgY29uc3QgZW5kQ2VsbCA9IGNvbHVtbkluZGV4ID09PSBjb2x1bW5zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgZmlyc3RDZWxsID0gY29sdW1uSW5kZXggPT09IDA7XG4gICAgY29uc3QgYm90dG9tQ2VsbCA9IHJvd0luZGV4ID09PSByb3dzLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgYWxpZ25SaWdodCA9IGZpZWxkVG9BbGlnblJpZ2h0W3R5cGVdO1xuXG4gICAgY29uc3QgY2VsbCA9IChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdjZWxsJywge1xuICAgICAgICAgIFtyb3dJbmRleCAlIDIgPT09IDAgPyAnZXZlbi1yb3cnIDogJ29kZC1yb3cnXTogdHJ1ZSxcbiAgICAgICAgICBbYHJvdy0ke3Jvd0luZGV4fWBdOiB0cnVlLFxuICAgICAgICAgICdwaW5uZWQtY2VsbCc6IGlzUGlubmVkLFxuICAgICAgICAgICdmaXJzdC1jZWxsJzogZmlyc3RDZWxsLFxuICAgICAgICAgICdlbmQtY2VsbCc6IGVuZENlbGwsXG4gICAgICAgICAgJ2JvdHRvbS1jZWxsJzogYm90dG9tQ2VsbCxcbiAgICAgICAgICAnYWxpZ24tcmlnaHQnOiBhbGlnblJpZ2h0XG4gICAgICAgIH0pfVxuICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICB0aXRsZT17aXNHaG9zdCA/IHVuZGVmaW5lZCA6IHJvd0NlbGx9XG4gICAgICA+XG4gICAgICAgIHtgJHtyb3dDZWxsfSR7ZW5kQ2VsbCA/ICdcXG4nIDogJ1xcdCd9YH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICByZXR1cm4gY2VsbDtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBUYWJsZVNlY3Rpb24gPSAoe1xuICBjbGFzc0xpc3QsXG4gIGlzUGlubmVkLFxuICBjb2x1bW5zLFxuICBoZWFkZXJHcmlkUHJvcHMsXG4gIGZpeGVkV2lkdGgsXG4gIGZpeGVkSGVpZ2h0ID0gdW5kZWZpbmVkLFxuICBvblNjcm9sbCxcbiAgc2Nyb2xsVG9wLFxuICBkYXRhR3JpZFByb3BzLFxuICBjb2x1bW5XaWR0aCxcbiAgc2V0R3JpZFJlZixcbiAgaGVhZGVyQ2VsbFJlbmRlcixcbiAgZGF0YUNlbGxSZW5kZXIsXG4gIHNjcm9sbExlZnQgPSB1bmRlZmluZWRcbn0pID0+IChcbiAgPEF1dG9TaXplcj5cbiAgICB7KHt3aWR0aCwgaGVpZ2h0fSkgPT4ge1xuICAgICAgY29uc3QgZ3JpZERpbWVuc2lvbiA9IHtcbiAgICAgICAgY29sdW1uQ291bnQ6IGNvbHVtbnMubGVuZ3RoLFxuICAgICAgICBjb2x1bW5XaWR0aCxcbiAgICAgICAgd2lkdGg6IGZpeGVkV2lkdGggfHwgd2lkdGhcbiAgICAgIH07XG4gICAgICBjb25zdCBkYXRhR3JpZEhlaWdodCA9IGZpeGVkSGVpZ2h0IHx8IGhlaWdodDtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3Njcm9sbC1pbi11aS10aHJlYWQnLCBjbGFzc0xpc3QuaGVhZGVyKX0+XG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBjZWxsUmVuZGVyZXI9e2hlYWRlckNlbGxSZW5kZXJ9XG4gICAgICAgICAgICAgIHsuLi5oZWFkZXJHcmlkUHJvcHN9XG4gICAgICAgICAgICAgIHsuLi5ncmlkRGltZW5zaW9ufVxuICAgICAgICAgICAgICBzY3JvbGxMZWZ0PXtzY3JvbGxMZWZ0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3Njcm9sbC1pbi11aS10aHJlYWQnLCBjbGFzc0xpc3Qucm93cyl9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB0b3A6IGhlYWRlckdyaWRQcm9wcy5oZWlnaHRcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgY2VsbFJlbmRlcmVyPXtkYXRhQ2VsbFJlbmRlcn1cbiAgICAgICAgICAgICAgey4uLmRhdGFHcmlkUHJvcHN9XG4gICAgICAgICAgICAgIHsuLi5ncmlkRGltZW5zaW9ufVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2lzUGlubmVkID8gJ3Bpbm5lZC1ncmlkJyA6ICdib2R5LWdyaWQnfVxuICAgICAgICAgICAgICBoZWlnaHQ9e2RhdGFHcmlkSGVpZ2h0IC0gaGVhZGVyR3JpZFByb3BzLmhlaWdodH1cbiAgICAgICAgICAgICAgb25TY3JvbGw9e29uU2Nyb2xsfVxuICAgICAgICAgICAgICBzY3JvbGxUb3A9e3Njcm9sbFRvcH1cbiAgICAgICAgICAgICAgc2V0R3JpZFJlZj17c2V0R3JpZFJlZn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9fVxuICA8L0F1dG9TaXplcj5cbik7XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHJvd3M6IFtdLFxuICAgIHBpbm5lZENvbHVtbnM6IFtdLFxuICAgIGNvbE1ldGE6IHt9LFxuICAgIGNlbGxTaXplQ2FjaGU6IHt9LFxuICAgIHNvcnRDb2x1bW46IHt9LFxuICAgIGZpeGVkV2lkdGg6IG51bGwsXG4gICAgZml4ZWRIZWlnaHQ6IG51bGwsXG4gICAgdGhlbWU6IHt9XG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgY2VsbFNpemVDYWNoZToge30sXG4gICAgbW9yZU9wdGlvbnNDb2x1bW46IG51bGxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zY2FsZUNlbGxzVG9XaWR0aCk7XG4gICAgdGhpcy5zY2FsZUNlbGxzVG9XaWR0aCgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMuY2VsbFNpemVDYWNoZSAhPT0gcHJldlByb3BzLmNlbGxTaXplQ2FjaGUgfHxcbiAgICAgIHRoaXMucHJvcHMucGlubmVkQ29sdW1ucyAhPT0gcHJldlByb3BzLnBpbm5lZENvbHVtbnNcbiAgICApIHtcbiAgICAgIHRoaXMuc2NhbGVDZWxsc1RvV2lkdGgoKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zY2FsZUNlbGxzVG9XaWR0aCk7XG4gIH1cbiAgcm9vdCA9IGNyZWF0ZVJlZigpO1xuICBjb2x1bW5zID0gcHJvcHMgPT4gcHJvcHMuY29sdW1ucztcbiAgcGlubmVkQ29sdW1ucyA9IHByb3BzID0+IHByb3BzLnBpbm5lZENvbHVtbnM7XG4gIHVucGlubmVkQ29sdW1ucyA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuY29sdW1ucywgdGhpcy5waW5uZWRDb2x1bW5zLCAoY29sdW1ucywgcGlubmVkQ29sdW1ucykgPT5cbiAgICAhQXJyYXkuaXNBcnJheShwaW5uZWRDb2x1bW5zKSA/IGNvbHVtbnMgOiBjb2x1bW5zLmZpbHRlcihjID0+ICFwaW5uZWRDb2x1bW5zLmluY2x1ZGVzKGMpKVxuICApO1xuXG4gIHRvZ2dsZU1vcmVPcHRpb25zID0gbW9yZU9wdGlvbnNDb2x1bW4gPT5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vcmVPcHRpb25zQ29sdW1uOlxuICAgICAgICB0aGlzLnN0YXRlLm1vcmVPcHRpb25zQ29sdW1uID09PSBtb3JlT3B0aW9uc0NvbHVtbiA/IG51bGwgOiBtb3JlT3B0aW9uc0NvbHVtblxuICAgIH0pO1xuXG4gIGdldENlbGxTaXplQ2FjaGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge2NlbGxTaXplQ2FjaGU6IHByb3BzQ2FjaGUsIGZpeGVkV2lkdGgsIHBpbm5lZENvbHVtbnN9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB1bnBpbm5lZENvbHVtbnMgPSB0aGlzLnVucGlubmVkQ29sdW1ucyh0aGlzLnByb3BzKTtcblxuICAgIGNvbnN0IHdpZHRoID0gZml4ZWRXaWR0aCA/IGZpeGVkV2lkdGggOiB0aGlzLnJvb3QuY3VycmVudCA/IHRoaXMucm9vdC5jdXJyZW50LmNsaWVudFdpZHRoIDogMDtcblxuICAgIC8vIHBpbiBjb2x1bW4gYm9yZGVyIGlzIDIgcGl4ZWwgdnMgMSBwaXhlbFxuICAgIGNvbnN0IGFkanVzdFdpZHRoID0gcGlubmVkQ29sdW1ucy5sZW5ndGggPyB3aWR0aCAtIDEgOiB3aWR0aDtcbiAgICBjb25zdCB7Y2VsbFNpemVDYWNoZSwgZ2hvc3R9ID0gYWRqdXN0Q2VsbHNUb0NvbnRhaW5lcihcbiAgICAgIGFkanVzdFdpZHRoLFxuICAgICAgcHJvcHNDYWNoZSxcbiAgICAgIHBpbm5lZENvbHVtbnMsXG4gICAgICB1bnBpbm5lZENvbHVtbnNcbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICBjZWxsU2l6ZUNhY2hlLFxuICAgICAgZ2hvc3RcbiAgICB9O1xuICB9O1xuXG4gIGRvU2NhbGVDZWxsc1RvV2lkdGggPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldENlbGxTaXplQ2FjaGUoKSk7XG4gIH07XG5cbiAgc2NhbGVDZWxsc1RvV2lkdGggPSBkZWJvdW5jZSh0aGlzLmRvU2NhbGVDZWxsc1RvV2lkdGgsIDMwMCk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtyb3dzLCBwaW5uZWRDb2x1bW5zLCB0aGVtZSA9IHt9LCBmaXhlZFdpZHRoLCBmaXhlZEhlaWdodH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHVucGlubmVkQ29sdW1ucyA9IHRoaXMudW5waW5uZWRDb2x1bW5zKHRoaXMucHJvcHMpO1xuXG4gICAgY29uc3Qge2NlbGxTaXplQ2FjaGUsIG1vcmVPcHRpb25zQ29sdW1uLCBnaG9zdH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHVucGlubmVkQ29sdW1uc0dob3N0ID0gZ2hvc3QgPyBbLi4udW5waW5uZWRDb2x1bW5zLCB7Z2hvc3Q6IHRydWV9XSA6IHVucGlubmVkQ29sdW1ucztcbiAgICBjb25zdCBwaW5uZWRDb2x1bW5zV2lkdGggPSBwaW5uZWRDb2x1bW5zLnJlZHVjZShcbiAgICAgIChhY2MsIHZhbCkgPT4gYWNjICsgZ2V0KGNlbGxTaXplQ2FjaGUsIHZhbCwgMCksXG4gICAgICAwXG4gICAgKTtcblxuICAgIGNvbnN0IGhhc1Bpbm5lZENvbHVtbnMgPSBCb29sZWFuKHBpbm5lZENvbHVtbnMubGVuZ3RoKTtcbiAgICBjb25zdCB7aGVhZGVyUm93SGVpZ2h0ID0gZGVmYXVsdEhlYWRlclJvd0hlaWdodCwgcm93SGVpZ2h0ID0gZGVmYXVsdFJvd0hlaWdodH0gPSB0aGVtZTtcblxuICAgIGNvbnN0IGhlYWRlckdyaWRQcm9wcyA9IHtcbiAgICAgIGNlbGxTaXplQ2FjaGUsXG4gICAgICBjbGFzc05hbWU6ICdoZWFkZXItZ3JpZCcsXG4gICAgICBoZWlnaHQ6IGhlYWRlclJvd0hlaWdodCxcbiAgICAgIHJvd0NvdW50OiAxLFxuICAgICAgcm93SGVpZ2h0OiBoZWFkZXJSb3dIZWlnaHRcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YUdyaWRQcm9wcyA9IHtcbiAgICAgIGNlbGxTaXplQ2FjaGUsXG4gICAgICBvdmVyc2NhbkNvbHVtbkNvdW50LFxuICAgICAgb3ZlcnNjYW5Sb3dDb3VudCxcbiAgICAgIHJvd0NvdW50OiAocm93cyB8fCBbXSkubGVuZ3RoLFxuICAgICAgcm93SGVpZ2h0XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImRhdGEtdGFibGUtY29udGFpbmVyXCIgcmVmPXt0aGlzLnJvb3R9PlxuICAgICAgICB7T2JqZWN0LmtleXMoY2VsbFNpemVDYWNoZSkubGVuZ3RoICYmIChcbiAgICAgICAgICA8U2Nyb2xsU3luYz5cbiAgICAgICAgICAgIHsoe29uU2Nyb2xsLCBzY3JvbGxMZWZ0LCBzY3JvbGxUb3B9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzLXRhYmxlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIHtoYXNQaW5uZWRDb2x1bW5zICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJwaW5uZWQtY29sdW1uc1wiIGNsYXNzTmFtZT1cInBpbm5lZC1jb2x1bW5zIGdyaWQtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlU2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogJ3Bpbm5lZC1jb2x1bW5zLS1oZWFkZXIgcGlubmVkLWdyaWQtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93czogJ3Bpbm5lZC1jb2x1bW5zLS1yb3dzIHBpbm5lZC1ncmlkLWNvbnRhaW5lcidcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Bpbm5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17cGlubmVkQ29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckdyaWRQcm9wcz17aGVhZGVyR3JpZFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWRXaWR0aD17cGlubmVkQ29sdW1uc1dpZHRofVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TY3JvbGw9e2FyZ3MgPT4gb25TY3JvbGwoey4uLmFyZ3MsIHNjcm9sbExlZnR9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcD17c2Nyb2xsVG9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUdyaWRQcm9wcz17ZGF0YUdyaWRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdyaWRSZWY9e3Bpbm5lZEdyaWQgPT4gKHRoaXMucGlubmVkR3JpZCA9IHBpbm5lZEdyaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg9e2NvbHVtbldpZHRoRnVuY3Rpb24ocGlubmVkQ29sdW1ucywgY2VsbFNpemVDYWNoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJDZWxsUmVuZGVyPXtyZW5kZXJIZWFkZXJDZWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwaW5uZWRDb2x1bW5zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1vcmVPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JlT3B0aW9uc0NvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDZWxsUmVuZGVyPXtyZW5kZXJEYXRhQ2VsbChwaW5uZWRDb2x1bW5zLCB0cnVlLCB0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT1cInVucGlubmVkLWNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGAke2hhc1Bpbm5lZENvbHVtbnMgPyBgJHtwaW5uZWRDb2x1bW5zV2lkdGh9cHhgIDogJzAnfWBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5waW5uZWQtY29sdW1ucyBncmlkLWNvbHVtblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogJ3VucGlubmVkLWNvbHVtbnMtLWhlYWRlciB1bnBpbm5lZC1ncmlkLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzOiAndW5waW5uZWQtY29sdW1ucy0tcm93cyB1bnBpbm5lZC1ncmlkLWNvbnRhaW5lcidcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGlzUGlubmVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXt1bnBpbm5lZENvbHVtbnNHaG9zdH1cbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJHcmlkUHJvcHM9e2hlYWRlckdyaWRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICBmaXhlZFdpZHRoPXtmaXhlZFdpZHRofVxuICAgICAgICAgICAgICAgICAgICAgIGZpeGVkSGVpZ2h0PXtmaXhlZEhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICBvblNjcm9sbD17b25TY3JvbGx9XG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wPXtzY3JvbGxUb3B9XG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdD17c2Nyb2xsTGVmdH1cbiAgICAgICAgICAgICAgICAgICAgICBkYXRhR3JpZFByb3BzPXtkYXRhR3JpZFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgIHNldEdyaWRSZWY9e3VucGlubmVkR3JpZCA9PiAodGhpcy51bnBpbm5lZEdyaWQgPSB1bnBpbm5lZEdyaWQpfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoPXtjb2x1bW5XaWR0aEZ1bmN0aW9uKHVucGlubmVkQ29sdW1uc0dob3N0LCBjZWxsU2l6ZUNhY2hlLCBnaG9zdCl9XG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyQ2VsbFJlbmRlcj17cmVuZGVySGVhZGVyQ2VsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHVucGlubmVkQ29sdW1uc0dob3N0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNb3JlT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVPcHRpb25zQ29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2VsbFJlbmRlcj17cmVuZGVyRGF0YUNlbGwodW5waW5uZWRDb2x1bW5zR2hvc3QsIGZhbHNlLCB0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L1Njcm9sbFN5bmM+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIERhdGFUYWJsZUZhY3RvcnkoKSB7XG4gIHJldHVybiB3aXRoVGhlbWUoRGF0YVRhYmxlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVRhYmxlRmFjdG9yeTtcbiJdfQ==