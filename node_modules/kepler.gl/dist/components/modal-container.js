"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModalContainerFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _styledComponents = require("styled-components");

var _reactDom = require("react-dom");

var _reselect = require("reselect");

var _lodash = _interopRequireDefault(require("lodash.get"));

var _document = _interopRequireDefault(require("global/document"));

var _modalDialog = _interopRequireDefault(require("./modals/modal-dialog"));

var _schemas = _interopRequireDefault(require("../schemas"));

var _exportUtils = require("../utils/export-utils");

var _mapInfoUtils = require("../utils/map-info-utils");

var _deleteDataModal = _interopRequireDefault(require("./modals/delete-data-modal"));

var _overwriteMapModal = _interopRequireDefault(require("./modals/overwrite-map-modal"));

var _dataTableModal = _interopRequireDefault(require("./modals/data-table-modal"));

var _loadDataModal = _interopRequireDefault(require("./modals/load-data-modal"));

var _exportImageModal = _interopRequireDefault(require("./modals/export-image-modal"));

var _exportDataModal = _interopRequireDefault(require("./modals/export-data-modal"));

var _exportMapModal = _interopRequireDefault(require("./modals/export-map-modal/export-map-modal"));

var _addMapStyleModal = _interopRequireDefault(require("./modals/add-map-style-modal"));

var _saveMapModal = _interopRequireDefault(require("./modals/save-map-modal"));

var _shareMapModal = _interopRequireDefault(require("./modals/share-map-modal"));

var _mediaBreakpoints = require("../styles/media-breakpoints");

var _defaultSettings = require("../constants/default-settings");

var _keyevent = _interopRequireDefault(require("../constants/keyevent"));

var _visStateSelectors = require("../reducers/vis-state-selectors");

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n                width: ", "px;\n              "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n              ", ";\n              ", "\n            "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  max-width: 960px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  top: 60px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 40%;\n  padding: 40px 40px 32px 40px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n    margin: 0 auto;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  top: 80px;\n  padding: 32px 0 0 0;\n  width: 90vw;\n  max-width: 90vw;\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var DataTableModalStyle = (0, _styledComponents.css)(_templateObject(), _mediaBreakpoints.media.portable(_templateObject2()), _mediaBreakpoints.media.palm(_templateObject3()));
var smallModalCss = (0, _styledComponents.css)(_templateObject4());
var LoadDataModalStyle = (0, _styledComponents.css)(_templateObject5());
var DefaultStyle = (0, _styledComponents.css)(_templateObject6());
ModalContainerFactory.deps = [_deleteDataModal["default"], _overwriteMapModal["default"], _dataTableModal["default"], _loadDataModal["default"], _exportImageModal["default"], _exportDataModal["default"], _exportMapModal["default"], _addMapStyleModal["default"], _modalDialog["default"], _saveMapModal["default"], _shareMapModal["default"]];

function ModalContainerFactory(DeleteDatasetModal, OverWriteMapModal, DataTableModal, LoadDataModal, ExportImageModal, ExportDataModal, ExportMapModal, AddMapStyleModal, ModalDialog, SaveMapModal, ShareMapModal) {
  /** @typedef {import('./modal-container').ModalContainerProps} ModalContainerProps */

  /** @augments React.Component<ModalContainerProps> */
  var ModalContainer =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(ModalContainer, _Component);

    function ModalContainer() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, ModalContainer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ModalContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "componentDidMount", function () {
        _document["default"].addEventListener('keyup', _this._onKeyUp);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cloudProviders", function (props) {
        return props.cloudProviders;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "providerWithStorage", (0, _reselect.createSelector)(_this.cloudProviders, function (cloudProviders) {
        return cloudProviders.filter(function (p) {
          return p.hasPrivateStorage();
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "providerWithShare", (0, _reselect.createSelector)(_this.cloudProviders, function (cloudProviders) {
        return cloudProviders.filter(function (p) {
          return p.hasSharingUrl();
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onKeyUp", function (event) {
        var keyCode = event.keyCode;

        if (keyCode === _keyevent["default"].DOM_VK_ESCAPE) {
          _this._closeModal();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_closeModal", function () {
        _this.props.uiStateActions.toggleModal(null);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deleteDataset", function (key) {
        _this.props.visStateActions.removeDataset(key);

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onAddCustomMapStyle", function () {
        _this.props.mapStyleActions.addCustomMapStyle();

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onFileUpload", function (fileList) {
        _this.props.visStateActions.loadFiles(fileList);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportImage", function () {
        if (!_this.props.uiState.exportImage.processing) {
          (0, _exportUtils.exportImage)(_this.props);

          _this.props.uiStateActions.cleanupExportImage();

          _this._closeModal();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportData", function () {
        (0, _exportUtils.exportData)(_this.props, _this.props.uiState.exportData);

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportMap", function () {
        var uiState = _this.props.uiState;
        var format = uiState.exportMap.format;
        (format === _defaultSettings.EXPORT_MAP_FORMATS.HTML ? _exportUtils.exportHtml : _exportUtils.exportJson)(_this.props, _this.props.uiState.exportMap[format] || {});

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_exportFileToCloud", function (_ref) {
        var provider = _ref.provider,
            isPublic = _ref.isPublic,
            overwrite = _ref.overwrite,
            closeModal = _ref.closeModal;
        var toSave = (0, _exportUtils.exportMap)(_this.props);

        _this.props.providerActions.exportFileToCloud({
          // @ts-ignore
          mapData: toSave,
          provider: provider,
          options: {
            isPublic: isPublic,
            overwrite: overwrite
          },
          closeModal: closeModal,
          onSuccess: _this.props.onExportToCloudSuccess,
          onError: _this.props.onExportToCloudError
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSaveMap", function () {
        var overwrite = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var currentProvider = _this.props.providerState.currentProvider; // @ts-ignore

        var provider = _this.props.cloudProviders.find(function (p) {
          return p.name === currentProvider;
        });

        _this._exportFileToCloud({
          provider: provider,
          isPublic: false,
          overwrite: overwrite,
          closeModal: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOverwriteMap", function () {
        _this._onSaveMap(true);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onShareMapUrl", function (provider) {
        _this._exportFileToCloud({
          provider: provider,
          isPublic: true,
          overwrite: false,
          closeModal: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onCloseSaveMap", function () {
        _this.props.providerActions.resetProviderStatus();

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onLoadCloudMap", function (payload) {
        _this.props.providerActions.loadCloudMap(_objectSpread({}, payload, {
          onSuccess: _this.props.onLoadCloudMapSuccess,
          onError: _this.props.onLoadCloudMapError
        }));
      });
      return _this;
    }

    (0, _createClass2["default"])(ModalContainer, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _document["default"].removeEventListener('keyup', this._onKeyUp);
      }
    }, {
      key: "render",

      /* eslint-disable complexity */
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            containerW = _this$props.containerW,
            containerH = _this$props.containerH,
            mapStyle = _this$props.mapStyle,
            mapState = _this$props.mapState,
            uiState = _this$props.uiState,
            visState = _this$props.visState,
            rootNode = _this$props.rootNode,
            visStateActions = _this$props.visStateActions,
            uiStateActions = _this$props.uiStateActions,
            providerState = _this$props.providerState;
        var currentModal = uiState.currentModal,
            datasetKeyToRemove = uiState.datasetKeyToRemove;
        var datasets = visState.datasets,
            layers = visState.layers,
            editingDataset = visState.editingDataset;
        var template = null;
        var modalProps = {}; // TODO - currentModal is a string
        // @ts-ignore

        if (currentModal && currentModal.id && currentModal.template) {
          // if currentMdoal template is already provided
          // TODO: need to check whether template is valid
          // @ts-ignore
          template = _react["default"].createElement(currentModal.template, null); // @ts-ignore

          modalProps = currentModal.modalProps;
        } else {
          switch (currentModal) {
            case _defaultSettings.DATA_TABLE_ID:
              var width = containerW * 0.9;
              template = _react["default"].createElement(DataTableModal, {
                width: containerW * 0.9,
                height: containerH * 0.85,
                datasets: datasets,
                dataId: editingDataset,
                showDatasetTable: visStateActions.showDatasetTable,
                sortTableColumn: visStateActions.sortTableColumn,
                pinTableColumn: visStateActions.pinTableColumn,
                copyTableColumn: visStateActions.copyTableColumn
              }); // TODO: we need to make this width consistent with the css rule defined modal.js:32 max-width: 70vw

              modalProps.cssStyle = (0, _styledComponents.css)(_templateObject7(), DataTableModalStyle, _mediaBreakpoints.media.palm(_templateObject8(), width));
              break;

            case _defaultSettings.DELETE_DATA_ID:
              // validate options
              if (datasetKeyToRemove && datasets && datasets[datasetKeyToRemove]) {
                template = _react["default"].createElement(DeleteDatasetModal, {
                  dataset: datasets[datasetKeyToRemove],
                  layers: layers
                });
                modalProps = {
                  title: 'modal.title.deleteDataset',
                  cssStyle: smallModalCss,
                  footer: true,
                  onConfirm: function onConfirm() {
                    return _this2._deleteDataset(datasetKeyToRemove);
                  },
                  onCancel: this._closeModal,
                  confirmButton: {
                    negative: true,
                    large: true,
                    children: 'modal.button.delete'
                  }
                };
              }

              break;
            // in case we add a new case after this one

            case _defaultSettings.ADD_DATA_ID:
              template = _react["default"].createElement(LoadDataModal, (0, _extends2["default"])({}, providerState, {
                onClose: this._closeModal,
                onFileUpload: this._onFileUpload,
                onLoadCloudMap: this._onLoadCloudMap,
                cloudProviders: this.providerWithStorage(this.props),
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                getSavedMaps: this.props.providerActions.getSavedMaps,
                loadFiles: uiState.loadFiles,
                fileLoading: visState.fileLoading,
                fileLoadingProgress: visState.fileLoadingProgress,
                fileFormatNames: (0, _visStateSelectors.getFileFormatNames)(this.props.visState),
                fileExtensions: (0, _visStateSelectors.getFileExtensions)(this.props.visState)
              }));
              modalProps = {
                title: 'modal.title.addDataToMap',
                cssStyle: LoadDataModalStyle,
                footer: false,
                onConfirm: this._closeModal
              };
              break;

            case _defaultSettings.EXPORT_IMAGE_ID:
              template = _react["default"].createElement(ExportImageModal, {
                exportImage: uiState.exportImage,
                mapW: containerW,
                mapH: containerH,
                onUpdateImageSetting: uiStateActions.setExportImageSetting
              });
              modalProps = {
                title: 'modal.title.exportImage',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportImage,
                confirmButton: {
                  large: true,
                  disabled: uiState.exportImage.processing,
                  children: 'modal.button.download'
                }
              };
              break;

            case _defaultSettings.EXPORT_DATA_ID:
              template = _react["default"].createElement(ExportDataModal, (0, _extends2["default"])({}, uiState.exportData, {
                datasets: datasets,
                applyCPUFilter: this.props.visStateActions.applyCPUFilter,
                onClose: this._closeModal,
                onChangeExportDataType: uiStateActions.setExportDataType,
                onChangeExportSelectedDataset: uiStateActions.setExportSelectedDataset,
                onChangeExportFiltered: uiStateActions.setExportFiltered
              }));
              modalProps = {
                title: 'modal.title.exportData',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportData,
                confirmButton: {
                  large: true,
                  children: 'modal.button.export'
                }
              };
              break;

            case _defaultSettings.EXPORT_MAP_ID:
              var keplerGlConfig = _schemas["default"].getConfigToSave({
                mapStyle: mapStyle,
                visState: visState,
                mapState: mapState,
                uiState: uiState
              });

              template = _react["default"].createElement(ExportMapModal, {
                config: keplerGlConfig,
                options: uiState.exportMap,
                onChangeExportMapFormat: uiStateActions.setExportMapFormat,
                onEditUserMapboxAccessToken: uiStateActions.setUserMapboxAccessToken,
                onChangeExportMapHTMLMode: uiStateActions.setExportHTMLMapMode
              });
              modalProps = {
                title: 'modal.title.exportMap',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportMap,
                confirmButton: {
                  large: true,
                  children: 'modal.button.export'
                }
              };
              break;

            case _defaultSettings.ADD_MAP_STYLE_ID:
              template = _react["default"].createElement(AddMapStyleModal, {
                mapboxApiAccessToken: this.props.mapboxApiAccessToken,
                mapboxApiUrl: this.props.mapboxApiUrl,
                mapState: this.props.mapState,
                inputStyle: mapStyle.inputStyle,
                inputMapStyle: this.props.mapStyleActions.inputMapStyle,
                loadCustomMapStyle: this.props.mapStyleActions.loadCustomMapStyle
              });
              modalProps = {
                title: 'modal.title.addCustomMapboxStyle',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onAddCustomMapStyle,
                confirmButton: {
                  large: true,
                  disabled: !mapStyle.inputStyle.style,
                  children: 'modal.button.addStyle'
                }
              };
              break;

            case _defaultSettings.SAVE_MAP_ID:
              template = _react["default"].createElement(SaveMapModal, (0, _extends2["default"])({}, providerState, {
                exportImage: uiState.exportImage,
                mapInfo: visState.mapInfo,
                onSetMapInfo: visStateActions.setMapInfo,
                cloudProviders: this.providerWithStorage(this.props),
                onSetCloudProvider: this.props.providerActions.setCloudProvider
              }));
              modalProps = {
                title: 'modal.title.saveMap',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: function onConfirm() {
                  return _this2._onSaveMap(false);
                },
                confirmButton: {
                  large: true,
                  disabled: uiState.exportImage.exporting || !(0, _mapInfoUtils.isValidMapInfo)(visState.mapInfo) || !providerState.currentProvider,
                  children: 'modal.button.save'
                }
              };
              break;

            case _defaultSettings.OVERWRITE_MAP_ID:
              template = _react["default"].createElement(OverWriteMapModal, (0, _extends2["default"])({}, providerState, {
                cloudProviders: this.props.cloudProviders,
                title: (0, _lodash["default"])(visState, ['mapInfo', 'title']),
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                onUpdateImageSetting: uiStateActions.setExportImageSetting
              }));
              modalProps = {
                title: 'Overwrite Existing File?',
                cssStyle: smallModalCss,
                footer: true,
                onConfirm: this._onOverwriteMap,
                onCancel: this._closeModal,
                confirmButton: {
                  large: true,
                  children: 'Yes',
                  disabled: uiState.exportImage.exporting || !(0, _mapInfoUtils.isValidMapInfo)(visState.mapInfo) || !providerState.currentProvider
                }
              };
              break;

            case _defaultSettings.SHARE_MAP_ID:
              template = _react["default"].createElement(ShareMapModal, (0, _extends2["default"])({}, providerState, {
                isReady: !uiState.exportImage.exporting,
                cloudProviders: this.providerWithShare(this.props),
                onExport: this._onShareMapUrl,
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                onUpdateImageSetting: uiStateActions.setExportImageSetting
              }));
              modalProps = {
                title: 'modal.title.shareURL',
                cssStyle: '',
                onCancel: this._onCloseSaveMap
              };
              break;

            default:
              break;
          }
        }

        return this.props.rootNode ? _react["default"].createElement(ModalDialog, (0, _extends2["default"])({
          parentSelector: function parentSelector() {
            return (0, _reactDom.findDOMNode)(rootNode);
          },
          isOpen: Boolean(currentModal),
          onCancel: this._closeModal
        }, modalProps, {
          cssStyle: DefaultStyle.concat(modalProps.cssStyle)
        }), template) : null;
      }
      /* eslint-enable complexity */

    }]);
    return ModalContainer;
  }(_react.Component);

  (0, _defineProperty2["default"])(ModalContainer, "propTypes", {
    rootNode: _propTypes["default"].object,
    containerW: _propTypes["default"].number,
    containerH: _propTypes["default"].number,
    mapboxApiAccessToken: _propTypes["default"].string.isRequired,
    mapboxApiUrl: _propTypes["default"].string,
    mapState: _propTypes["default"].object.isRequired,
    mapStyle: _propTypes["default"].object.isRequired,
    uiState: _propTypes["default"].object.isRequired,
    visState: _propTypes["default"].object.isRequired,
    visStateActions: _propTypes["default"].object.isRequired,
    uiStateActions: _propTypes["default"].object.isRequired,
    mapStyleActions: _propTypes["default"].object.isRequired,
    onSaveToStorage: _propTypes["default"].func,
    cloudProviders: _propTypes["default"].arrayOf(_propTypes["default"].object)
  });
  return ModalContainer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFsLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJEYXRhVGFibGVNb2RhbFN0eWxlIiwiY3NzIiwibWVkaWEiLCJwb3J0YWJsZSIsInBhbG0iLCJzbWFsbE1vZGFsQ3NzIiwiTG9hZERhdGFNb2RhbFN0eWxlIiwiRGVmYXVsdFN0eWxlIiwiTW9kYWxDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIkRlbGV0ZURhdGFzZXRNb2RhbEZhY3RvcnkiLCJPdmVyV3JpdGVNYXBNb2RhbEZhY3RvcnkiLCJEYXRhVGFibGVNb2RhbEZhY3RvcnkiLCJMb2FkRGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydEltYWdlTW9kYWxGYWN0b3J5IiwiRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydE1hcE1vZGFsRmFjdG9yeSIsIkFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5IiwiTW9kYWxEaWFsb2dGYWN0b3J5IiwiU2F2ZU1hcE1vZGFsRmFjdG9yeSIsIlNoYXJlTWFwTW9kYWxGYWN0b3J5IiwiRGVsZXRlRGF0YXNldE1vZGFsIiwiT3ZlcldyaXRlTWFwTW9kYWwiLCJEYXRhVGFibGVNb2RhbCIsIkxvYWREYXRhTW9kYWwiLCJFeHBvcnRJbWFnZU1vZGFsIiwiRXhwb3J0RGF0YU1vZGFsIiwiRXhwb3J0TWFwTW9kYWwiLCJBZGRNYXBTdHlsZU1vZGFsIiwiTW9kYWxEaWFsb2ciLCJTYXZlTWFwTW9kYWwiLCJTaGFyZU1hcE1vZGFsIiwiTW9kYWxDb250YWluZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25LZXlVcCIsInByb3BzIiwiY2xvdWRQcm92aWRlcnMiLCJmaWx0ZXIiLCJwIiwiaGFzUHJpdmF0ZVN0b3JhZ2UiLCJoYXNTaGFyaW5nVXJsIiwiZXZlbnQiLCJrZXlDb2RlIiwiS2V5RXZlbnQiLCJET01fVktfRVNDQVBFIiwiX2Nsb3NlTW9kYWwiLCJ1aVN0YXRlQWN0aW9ucyIsInRvZ2dsZU1vZGFsIiwia2V5IiwidmlzU3RhdGVBY3Rpb25zIiwicmVtb3ZlRGF0YXNldCIsIm1hcFN0eWxlQWN0aW9ucyIsImFkZEN1c3RvbU1hcFN0eWxlIiwiZmlsZUxpc3QiLCJsb2FkRmlsZXMiLCJ1aVN0YXRlIiwiZXhwb3J0SW1hZ2UiLCJwcm9jZXNzaW5nIiwiY2xlYW51cEV4cG9ydEltYWdlIiwiZXhwb3J0RGF0YSIsImZvcm1hdCIsImV4cG9ydE1hcCIsIkVYUE9SVF9NQVBfRk9STUFUUyIsIkhUTUwiLCJleHBvcnRIdG1sIiwiZXhwb3J0SnNvbiIsInByb3ZpZGVyIiwiaXNQdWJsaWMiLCJvdmVyd3JpdGUiLCJjbG9zZU1vZGFsIiwidG9TYXZlIiwicHJvdmlkZXJBY3Rpb25zIiwiZXhwb3J0RmlsZVRvQ2xvdWQiLCJtYXBEYXRhIiwib3B0aW9ucyIsIm9uU3VjY2VzcyIsIm9uRXhwb3J0VG9DbG91ZFN1Y2Nlc3MiLCJvbkVycm9yIiwib25FeHBvcnRUb0Nsb3VkRXJyb3IiLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlclN0YXRlIiwiZmluZCIsIm5hbWUiLCJfZXhwb3J0RmlsZVRvQ2xvdWQiLCJfb25TYXZlTWFwIiwicmVzZXRQcm92aWRlclN0YXR1cyIsInBheWxvYWQiLCJsb2FkQ2xvdWRNYXAiLCJvbkxvYWRDbG91ZE1hcFN1Y2Nlc3MiLCJvbkxvYWRDbG91ZE1hcEVycm9yIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5lclciLCJjb250YWluZXJIIiwibWFwU3R5bGUiLCJtYXBTdGF0ZSIsInZpc1N0YXRlIiwicm9vdE5vZGUiLCJjdXJyZW50TW9kYWwiLCJkYXRhc2V0S2V5VG9SZW1vdmUiLCJkYXRhc2V0cyIsImxheWVycyIsImVkaXRpbmdEYXRhc2V0IiwidGVtcGxhdGUiLCJtb2RhbFByb3BzIiwiaWQiLCJEQVRBX1RBQkxFX0lEIiwid2lkdGgiLCJzaG93RGF0YXNldFRhYmxlIiwic29ydFRhYmxlQ29sdW1uIiwicGluVGFibGVDb2x1bW4iLCJjb3B5VGFibGVDb2x1bW4iLCJjc3NTdHlsZSIsIkRFTEVURV9EQVRBX0lEIiwidGl0bGUiLCJmb290ZXIiLCJvbkNvbmZpcm0iLCJfZGVsZXRlRGF0YXNldCIsIm9uQ2FuY2VsIiwiY29uZmlybUJ1dHRvbiIsIm5lZ2F0aXZlIiwibGFyZ2UiLCJjaGlsZHJlbiIsIkFERF9EQVRBX0lEIiwiX29uRmlsZVVwbG9hZCIsIl9vbkxvYWRDbG91ZE1hcCIsInByb3ZpZGVyV2l0aFN0b3JhZ2UiLCJzZXRDbG91ZFByb3ZpZGVyIiwiZ2V0U2F2ZWRNYXBzIiwiZmlsZUxvYWRpbmciLCJmaWxlTG9hZGluZ1Byb2dyZXNzIiwiRVhQT1JUX0lNQUdFX0lEIiwic2V0RXhwb3J0SW1hZ2VTZXR0aW5nIiwiX29uRXhwb3J0SW1hZ2UiLCJkaXNhYmxlZCIsIkVYUE9SVF9EQVRBX0lEIiwiYXBwbHlDUFVGaWx0ZXIiLCJzZXRFeHBvcnREYXRhVHlwZSIsInNldEV4cG9ydFNlbGVjdGVkRGF0YXNldCIsInNldEV4cG9ydEZpbHRlcmVkIiwiX29uRXhwb3J0RGF0YSIsIkVYUE9SVF9NQVBfSUQiLCJrZXBsZXJHbENvbmZpZyIsIktlcGxlckdsU2NoZW1hIiwiZ2V0Q29uZmlnVG9TYXZlIiwic2V0RXhwb3J0TWFwRm9ybWF0Iiwic2V0VXNlck1hcGJveEFjY2Vzc1Rva2VuIiwic2V0RXhwb3J0SFRNTE1hcE1vZGUiLCJfb25FeHBvcnRNYXAiLCJBRERfTUFQX1NUWUxFX0lEIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJtYXBib3hBcGlVcmwiLCJpbnB1dFN0eWxlIiwiaW5wdXRNYXBTdHlsZSIsImxvYWRDdXN0b21NYXBTdHlsZSIsIl9vbkFkZEN1c3RvbU1hcFN0eWxlIiwic3R5bGUiLCJTQVZFX01BUF9JRCIsIm1hcEluZm8iLCJzZXRNYXBJbmZvIiwiZXhwb3J0aW5nIiwiT1ZFUldSSVRFX01BUF9JRCIsIl9vbk92ZXJ3cml0ZU1hcCIsIlNIQVJFX01BUF9JRCIsInByb3ZpZGVyV2l0aFNoYXJlIiwiX29uU2hhcmVNYXBVcmwiLCJfb25DbG9zZVNhdmVNYXAiLCJCb29sZWFuIiwiY29uY2F0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwibnVtYmVyIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uU2F2ZVRvU3RvcmFnZSIsImZ1bmMiLCJhcnJheU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFHQTs7QUFhQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsT0FBR0MscUJBQUgscUJBTXJCQyx3QkFBTUMsUUFOZSxzQkFVckJELHdCQUFNRSxJQVZlLHFCQUF6QjtBQWVBLElBQU1DLGFBQWEsT0FBR0oscUJBQUgscUJBQW5CO0FBS0EsSUFBTUssa0JBQWtCLE9BQUdMLHFCQUFILHFCQUF4QjtBQUlBLElBQU1NLFlBQVksT0FBR04scUJBQUgscUJBQWxCO0FBSUFPLHFCQUFxQixDQUFDQyxJQUF0QixHQUE2QixDQUMzQkMsMkJBRDJCLEVBRTNCQyw2QkFGMkIsRUFHM0JDLDBCQUgyQixFQUkzQkMseUJBSjJCLEVBSzNCQyw0QkFMMkIsRUFNM0JDLDJCQU4yQixFQU8zQkMsMEJBUDJCLEVBUTNCQyw0QkFSMkIsRUFTM0JDLHVCQVQyQixFQVUzQkMsd0JBVjJCLEVBVzNCQyx5QkFYMkIsQ0FBN0I7O0FBY2UsU0FBU1oscUJBQVQsQ0FDYmEsa0JBRGEsRUFFYkMsaUJBRmEsRUFHYkMsY0FIYSxFQUliQyxhQUphLEVBS2JDLGdCQUxhLEVBTWJDLGVBTmEsRUFPYkMsY0FQYSxFQVFiQyxnQkFSYSxFQVNiQyxXQVRhLEVBVWJDLFlBVmEs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O0FBR2pCL0UsSUFBQUEsVUFBVSxFQUFFNkUsc0JBQVVFLE1BSEw7QUFJakJ0QixJQUFBQSxvQkFBb0IsRUFBRW9CLHNCQUFVRyxNQUFWLENBQWlCQyxVQUp0QjtBQUtqQnZCLElBQUFBLFlBQVksRUFBRW1CLHNCQUFVRyxNQUxQO0FBTWpCOUUsSUFBQUEsUUFBUSxFQUFFMkUsc0JBQVVDLE1BQVYsQ0FBaUJHLFVBTlY7QUFPakJoRixJQUFBQSxRQUFRLEVBQUU0RSxzQkFBVUMsTUFBVixDQUFpQkcsVUFQVjtBQVFqQnRILElBQUFBLE9BQU8sRUFBRWtILHNCQUFVQyxNQUFWLENBQWlCRyxVQVJUO0FBU2pCOUUsSUFBQUEsUUFBUSxFQUFFMEUsc0JBQVVDLE1BQVYsQ0FBaUJHLFVBVFY7QUFVakI1SCxJQUFBQSxlQUFlLEVBQUV3SCxzQkFBVUMsTUFBVixDQUFpQkcsVUFWakI7QUFXakIvSCxJQUFBQSxjQUFjLEVBQUUySCxzQkFBVUMsTUFBVixDQUFpQkcsVUFYaEI7QUFZakIxSCxJQUFBQSxlQUFlLEVBQUVzSCxzQkFBVUMsTUFBVixDQUFpQkcsVUFaakI7QUFhakJDLElBQUFBLGVBQWUsRUFBRUwsc0JBQVVNLElBYlY7QUFjakIzSSxJQUFBQSxjQUFjLEVBQUVxSSxzQkFBVU8sT0FBVixDQUFrQlAsc0JBQVVDLE1BQTVCO0FBZEMsR0FMckI7QUFxYUEsU0FBTzNJLGNBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2ZpbmRET01Ob2RlfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcbmltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuXG5pbXBvcnQgTW9kYWxEaWFsb2dGYWN0b3J5IGZyb20gJy4vbW9kYWxzL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQgS2VwbGVyR2xTY2hlbWEgZnJvbSAnc2NoZW1hcyc7XG5pbXBvcnQge2V4cG9ydEpzb24sIGV4cG9ydEh0bWwsIGV4cG9ydERhdGEsIGV4cG9ydEltYWdlLCBleHBvcnRNYXB9IGZyb20gJ3V0aWxzL2V4cG9ydC11dGlscyc7XG5pbXBvcnQge2lzVmFsaWRNYXBJbmZvfSBmcm9tICd1dGlscy9tYXAtaW5mby11dGlscyc7XG5cbi8vIG1vZGFsc1xuaW1wb3J0IERlbGV0ZURhdGFzZXRNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZGVsZXRlLWRhdGEtbW9kYWwnO1xuaW1wb3J0IE92ZXJXcml0ZU1hcE1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9vdmVyd3JpdGUtbWFwLW1vZGFsJztcbmltcG9ydCBEYXRhVGFibGVNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZGF0YS10YWJsZS1tb2RhbCc7XG5pbXBvcnQgTG9hZERhdGFNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvbG9hZC1kYXRhLW1vZGFsJztcbmltcG9ydCBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9leHBvcnQtaW1hZ2UtbW9kYWwnO1xuaW1wb3J0IEV4cG9ydERhdGFNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZXhwb3J0LWRhdGEtbW9kYWwnO1xuaW1wb3J0IEV4cG9ydE1hcE1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9leHBvcnQtbWFwLW1vZGFsL2V4cG9ydC1tYXAtbW9kYWwnO1xuaW1wb3J0IEFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2FkZC1tYXAtc3R5bGUtbW9kYWwnO1xuaW1wb3J0IFNhdmVNYXBNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvc2F2ZS1tYXAtbW9kYWwnO1xuaW1wb3J0IFNoYXJlTWFwTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL3NoYXJlLW1hcC1tb2RhbCc7XG5cbi8vIEJyZWFrcG9pbnRzXG5pbXBvcnQge21lZGlhfSBmcm9tICdzdHlsZXMvbWVkaWEtYnJlYWtwb2ludHMnO1xuXG4vLyBUZW1wbGF0ZVxuaW1wb3J0IHtcbiAgQUREX0RBVEFfSUQsXG4gIERBVEFfVEFCTEVfSUQsXG4gIERFTEVURV9EQVRBX0lELFxuICBFWFBPUlRfREFUQV9JRCxcbiAgRVhQT1JUX0lNQUdFX0lELFxuICBFWFBPUlRfTUFQX0lELFxuICBBRERfTUFQX1NUWUxFX0lELFxuICBTQVZFX01BUF9JRCxcbiAgU0hBUkVfTUFQX0lELFxuICBPVkVSV1JJVEVfTUFQX0lEXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7RVhQT1JUX01BUF9GT1JNQVRTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQgS2V5RXZlbnQgZnJvbSAnY29uc3RhbnRzL2tleWV2ZW50JztcbmltcG9ydCB7Z2V0RmlsZUZvcm1hdE5hbWVzLCBnZXRGaWxlRXh0ZW5zaW9uc30gZnJvbSAnLi4vcmVkdWNlcnMvdmlzLXN0YXRlLXNlbGVjdG9ycyc7XG5cbmNvbnN0IERhdGFUYWJsZU1vZGFsU3R5bGUgPSBjc3NgXG4gIHRvcDogODBweDtcbiAgcGFkZGluZzogMzJweCAwIDAgMDtcbiAgd2lkdGg6IDkwdnc7XG4gIG1heC13aWR0aDogOTB2dztcblxuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIHBhZGRpbmc6IDA7XG4gIGB9XG5cbiAgJHttZWRpYS5wYWxtYFxuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIGB9XG5gO1xuY29uc3Qgc21hbGxNb2RhbENzcyA9IGNzc2BcbiAgd2lkdGg6IDQwJTtcbiAgcGFkZGluZzogNDBweCA0MHB4IDMycHggNDBweDtcbmA7XG5cbmNvbnN0IExvYWREYXRhTW9kYWxTdHlsZSA9IGNzc2BcbiAgdG9wOiA2MHB4O1xuYDtcblxuY29uc3QgRGVmYXVsdFN0eWxlID0gY3NzYFxuICBtYXgtd2lkdGg6IDk2MHB4O1xuYDtcblxuTW9kYWxDb250YWluZXJGYWN0b3J5LmRlcHMgPSBbXG4gIERlbGV0ZURhdGFzZXRNb2RhbEZhY3RvcnksXG4gIE92ZXJXcml0ZU1hcE1vZGFsRmFjdG9yeSxcbiAgRGF0YVRhYmxlTW9kYWxGYWN0b3J5LFxuICBMb2FkRGF0YU1vZGFsRmFjdG9yeSxcbiAgRXhwb3J0SW1hZ2VNb2RhbEZhY3RvcnksXG4gIEV4cG9ydERhdGFNb2RhbEZhY3RvcnksXG4gIEV4cG9ydE1hcE1vZGFsRmFjdG9yeSxcbiAgQWRkTWFwU3R5bGVNb2RhbEZhY3RvcnksXG4gIE1vZGFsRGlhbG9nRmFjdG9yeSxcbiAgU2F2ZU1hcE1vZGFsRmFjdG9yeSxcbiAgU2hhcmVNYXBNb2RhbEZhY3Rvcnlcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsQ29udGFpbmVyRmFjdG9yeShcbiAgRGVsZXRlRGF0YXNldE1vZGFsLFxuICBPdmVyV3JpdGVNYXBNb2RhbCxcbiAgRGF0YVRhYmxlTW9kYWwsXG4gIExvYWREYXRhTW9kYWwsXG4gIEV4cG9ydEltYWdlTW9kYWwsXG4gIEV4cG9ydERhdGFNb2RhbCxcbiAgRXhwb3J0TWFwTW9kYWwsXG4gIEFkZE1hcFN0eWxlTW9kYWwsXG4gIE1vZGFsRGlhbG9nLFxuICBTYXZlTWFwTW9kYWwsXG4gIFNoYXJlTWFwTW9kYWxcbikge1xuICAvKiogQHR5cGVkZWYge2ltcG9ydCgnLi9tb2RhbC1jb250YWluZXInKS5Nb2RhbENvbnRhaW5lclByb3BzfSBNb2RhbENvbnRhaW5lclByb3BzICovXG4gIC8qKiBAYXVnbWVudHMgUmVhY3QuQ29tcG9uZW50PE1vZGFsQ29udGFpbmVyUHJvcHM+ICovXG4gIGNsYXNzIE1vZGFsQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvLyBUT0RPIC0gcmVtb3ZlIHdoZW4gcHJvcCB0eXBlcyBhcmUgZnVsbHkgZXhwb3J0ZWRcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgcm9vdE5vZGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBjb250YWluZXJXOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgY29udGFpbmVySDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtYXBib3hBcGlVcmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBtYXBTdGF0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHVpU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHZpc1N0YXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICB2aXNTdGF0ZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHVpU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdHlsZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG9uU2F2ZVRvU3RvcmFnZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBjbG91ZFByb3ZpZGVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcbiAgICB9O1xuICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwKTtcbiAgICB9O1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwKTtcbiAgICB9XG5cbiAgICBjbG91ZFByb3ZpZGVycyA9IHByb3BzID0+IHByb3BzLmNsb3VkUHJvdmlkZXJzO1xuICAgIHByb3ZpZGVyV2l0aFN0b3JhZ2UgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmNsb3VkUHJvdmlkZXJzLCBjbG91ZFByb3ZpZGVycyA9PlxuICAgICAgY2xvdWRQcm92aWRlcnMuZmlsdGVyKHAgPT4gcC5oYXNQcml2YXRlU3RvcmFnZSgpKVxuICAgICk7XG4gICAgcHJvdmlkZXJXaXRoU2hhcmUgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmNsb3VkUHJvdmlkZXJzLCBjbG91ZFByb3ZpZGVycyA9PlxuICAgICAgY2xvdWRQcm92aWRlcnMuZmlsdGVyKHAgPT4gcC5oYXNTaGFyaW5nVXJsKCkpXG4gICAgKTtcblxuICAgIF9vbktleVVwID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gS2V5RXZlbnQuRE9NX1ZLX0VTQ0FQRSkge1xuICAgICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9jbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChudWxsKTtcbiAgICB9O1xuXG4gICAgX2RlbGV0ZURhdGFzZXQgPSBrZXkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMucmVtb3ZlRGF0YXNldChrZXkpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfb25BZGRDdXN0b21NYXBTdHlsZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMubWFwU3R5bGVBY3Rpb25zLmFkZEN1c3RvbU1hcFN0eWxlKCk7XG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIF9vbkZpbGVVcGxvYWQgPSBmaWxlTGlzdCA9PiB7XG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5sb2FkRmlsZXMoZmlsZUxpc3QpO1xuICAgIH07XG5cbiAgICBfb25FeHBvcnRJbWFnZSA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy51aVN0YXRlLmV4cG9ydEltYWdlLnByb2Nlc3NpbmcpIHtcbiAgICAgICAgZXhwb3J0SW1hZ2UodGhpcy5wcm9wcyk7XG4gICAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMuY2xlYW51cEV4cG9ydEltYWdlKCk7XG4gICAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX29uRXhwb3J0RGF0YSA9ICgpID0+IHtcbiAgICAgIGV4cG9ydERhdGEodGhpcy5wcm9wcywgdGhpcy5wcm9wcy51aVN0YXRlLmV4cG9ydERhdGEpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfb25FeHBvcnRNYXAgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7dWlTdGF0ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2Zvcm1hdH0gPSB1aVN0YXRlLmV4cG9ydE1hcDtcbiAgICAgIChmb3JtYXQgPT09IEVYUE9SVF9NQVBfRk9STUFUUy5IVE1MID8gZXhwb3J0SHRtbCA6IGV4cG9ydEpzb24pKFxuICAgICAgICB0aGlzLnByb3BzLFxuICAgICAgICB0aGlzLnByb3BzLnVpU3RhdGUuZXhwb3J0TWFwW2Zvcm1hdF0gfHwge31cbiAgICAgICk7XG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIF9leHBvcnRGaWxlVG9DbG91ZCA9ICh7cHJvdmlkZXIsIGlzUHVibGljLCBvdmVyd3JpdGUsIGNsb3NlTW9kYWx9KSA9PiB7XG4gICAgICBjb25zdCB0b1NhdmUgPSBleHBvcnRNYXAodGhpcy5wcm9wcyk7XG5cbiAgICAgIHRoaXMucHJvcHMucHJvdmlkZXJBY3Rpb25zLmV4cG9ydEZpbGVUb0Nsb3VkKHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBtYXBEYXRhOiB0b1NhdmUsXG4gICAgICAgIHByb3ZpZGVyLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgaXNQdWJsaWMsXG4gICAgICAgICAgb3ZlcndyaXRlXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlTW9kYWwsXG4gICAgICAgIG9uU3VjY2VzczogdGhpcy5wcm9wcy5vbkV4cG9ydFRvQ2xvdWRTdWNjZXNzLFxuICAgICAgICBvbkVycm9yOiB0aGlzLnByb3BzLm9uRXhwb3J0VG9DbG91ZEVycm9yXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX29uU2F2ZU1hcCA9IChvdmVyd3JpdGUgPSBmYWxzZSkgPT4ge1xuICAgICAgY29uc3Qge2N1cnJlbnRQcm92aWRlcn0gPSB0aGlzLnByb3BzLnByb3ZpZGVyU3RhdGU7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBwcm92aWRlciA9IHRoaXMucHJvcHMuY2xvdWRQcm92aWRlcnMuZmluZChwID0+IHAubmFtZSA9PT0gY3VycmVudFByb3ZpZGVyKTtcbiAgICAgIHRoaXMuX2V4cG9ydEZpbGVUb0Nsb3VkKHtcbiAgICAgICAgcHJvdmlkZXIsXG4gICAgICAgIGlzUHVibGljOiBmYWxzZSxcbiAgICAgICAgb3ZlcndyaXRlLFxuICAgICAgICBjbG9zZU1vZGFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX29uT3ZlcndyaXRlTWFwID0gKCkgPT4ge1xuICAgICAgdGhpcy5fb25TYXZlTWFwKHRydWUpO1xuICAgIH07XG5cbiAgICBfb25TaGFyZU1hcFVybCA9IHByb3ZpZGVyID0+IHtcbiAgICAgIHRoaXMuX2V4cG9ydEZpbGVUb0Nsb3VkKHtwcm92aWRlciwgaXNQdWJsaWM6IHRydWUsIG92ZXJ3cml0ZTogZmFsc2UsIGNsb3NlTW9kYWw6IGZhbHNlfSk7XG4gICAgfTtcblxuICAgIF9vbkNsb3NlU2F2ZU1hcCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMucHJvdmlkZXJBY3Rpb25zLnJlc2V0UHJvdmlkZXJTdGF0dXMoKTtcbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICB9O1xuXG4gICAgX29uTG9hZENsb3VkTWFwID0gcGF5bG9hZCA9PiB7XG4gICAgICB0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5sb2FkQ2xvdWRNYXAoe1xuICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICBvblN1Y2Nlc3M6IHRoaXMucHJvcHMub25Mb2FkQ2xvdWRNYXBTdWNjZXNzLFxuICAgICAgICBvbkVycm9yOiB0aGlzLnByb3BzLm9uTG9hZENsb3VkTWFwRXJyb3JcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjb250YWluZXJXLFxuICAgICAgICBjb250YWluZXJILFxuICAgICAgICBtYXBTdHlsZSxcbiAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgIHVpU3RhdGUsXG4gICAgICAgIHZpc1N0YXRlLFxuICAgICAgICByb290Tm9kZSxcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLFxuICAgICAgICB1aVN0YXRlQWN0aW9ucyxcbiAgICAgICAgcHJvdmlkZXJTdGF0ZVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHtjdXJyZW50TW9kYWwsIGRhdGFzZXRLZXlUb1JlbW92ZX0gPSB1aVN0YXRlO1xuICAgICAgY29uc3Qge2RhdGFzZXRzLCBsYXllcnMsIGVkaXRpbmdEYXRhc2V0fSA9IHZpc1N0YXRlO1xuXG4gICAgICBsZXQgdGVtcGxhdGUgPSBudWxsO1xuICAgICAgbGV0IG1vZGFsUHJvcHMgPSB7fTtcblxuICAgICAgLy8gVE9ETyAtIGN1cnJlbnRNb2RhbCBpcyBhIHN0cmluZ1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaWYgKGN1cnJlbnRNb2RhbCAmJiBjdXJyZW50TW9kYWwuaWQgJiYgY3VycmVudE1vZGFsLnRlbXBsYXRlKSB7XG4gICAgICAgIC8vIGlmIGN1cnJlbnRNZG9hbCB0ZW1wbGF0ZSBpcyBhbHJlYWR5IHByb3ZpZGVkXG4gICAgICAgIC8vIFRPRE86IG5lZWQgdG8gY2hlY2sgd2hldGhlciB0ZW1wbGF0ZSBpcyB2YWxpZFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRlbXBsYXRlID0gPGN1cnJlbnRNb2RhbC50ZW1wbGF0ZSAvPjtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBtb2RhbFByb3BzID0gY3VycmVudE1vZGFsLm1vZGFsUHJvcHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRNb2RhbCkge1xuICAgICAgICAgIGNhc2UgREFUQV9UQUJMRV9JRDpcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyVyAqIDAuOTtcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8RGF0YVRhYmxlTW9kYWxcbiAgICAgICAgICAgICAgICB3aWR0aD17Y29udGFpbmVyVyAqIDAuOX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2NvbnRhaW5lckggKiAwLjg1fVxuICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICBkYXRhSWQ9e2VkaXRpbmdEYXRhc2V0fVxuICAgICAgICAgICAgICAgIHNob3dEYXRhc2V0VGFibGU9e3Zpc1N0YXRlQWN0aW9ucy5zaG93RGF0YXNldFRhYmxlfVxuICAgICAgICAgICAgICAgIHNvcnRUYWJsZUNvbHVtbj17dmlzU3RhdGVBY3Rpb25zLnNvcnRUYWJsZUNvbHVtbn1cbiAgICAgICAgICAgICAgICBwaW5UYWJsZUNvbHVtbj17dmlzU3RhdGVBY3Rpb25zLnBpblRhYmxlQ29sdW1ufVxuICAgICAgICAgICAgICAgIGNvcHlUYWJsZUNvbHVtbj17dmlzU3RhdGVBY3Rpb25zLmNvcHlUYWJsZUNvbHVtbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IHdlIG5lZWQgdG8gbWFrZSB0aGlzIHdpZHRoIGNvbnNpc3RlbnQgd2l0aCB0aGUgY3NzIHJ1bGUgZGVmaW5lZCBtb2RhbC5qczozMiBtYXgtd2lkdGg6IDcwdndcbiAgICAgICAgICAgIG1vZGFsUHJvcHMuY3NzU3R5bGUgPSBjc3NgXG4gICAgICAgICAgICAgICR7RGF0YVRhYmxlTW9kYWxTdHlsZX07XG4gICAgICAgICAgICAgICR7bWVkaWEucGFsbWBcbiAgICAgICAgICAgICAgICB3aWR0aDogJHt3aWR0aH1weDtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIERFTEVURV9EQVRBX0lEOlxuICAgICAgICAgICAgLy8gdmFsaWRhdGUgb3B0aW9uc1xuICAgICAgICAgICAgaWYgKGRhdGFzZXRLZXlUb1JlbW92ZSAmJiBkYXRhc2V0cyAmJiBkYXRhc2V0c1tkYXRhc2V0S2V5VG9SZW1vdmVdKSB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICAgIDxEZWxldGVEYXRhc2V0TW9kYWwgZGF0YXNldD17ZGF0YXNldHNbZGF0YXNldEtleVRvUmVtb3ZlXX0gbGF5ZXJzPXtsYXllcnN9IC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5kZWxldGVEYXRhc2V0JyxcbiAgICAgICAgICAgICAgICBjc3NTdHlsZTogc21hbGxNb2RhbENzcyxcbiAgICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgb25Db25maXJtOiAoKSA9PiB0aGlzLl9kZWxldGVEYXRhc2V0KGRhdGFzZXRLZXlUb1JlbW92ZSksXG4gICAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgICAgbmVnYXRpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBsYXJnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnbW9kYWwuYnV0dG9uLmRlbGV0ZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhazsgLy8gaW4gY2FzZSB3ZSBhZGQgYSBuZXcgY2FzZSBhZnRlciB0aGlzIG9uZVxuICAgICAgICAgIGNhc2UgQUREX0RBVEFfSUQ6XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPExvYWREYXRhTW9kYWxcbiAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLl9jbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgIG9uRmlsZVVwbG9hZD17dGhpcy5fb25GaWxlVXBsb2FkfVxuICAgICAgICAgICAgICAgIG9uTG9hZENsb3VkTWFwPXt0aGlzLl9vbkxvYWRDbG91ZE1hcH1cbiAgICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVycz17dGhpcy5wcm92aWRlcldpdGhTdG9yYWdlKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcj17dGhpcy5wcm9wcy5wcm92aWRlckFjdGlvbnMuc2V0Q2xvdWRQcm92aWRlcn1cbiAgICAgICAgICAgICAgICBnZXRTYXZlZE1hcHM9e3RoaXMucHJvcHMucHJvdmlkZXJBY3Rpb25zLmdldFNhdmVkTWFwc31cbiAgICAgICAgICAgICAgICBsb2FkRmlsZXM9e3VpU3RhdGUubG9hZEZpbGVzfVxuICAgICAgICAgICAgICAgIGZpbGVMb2FkaW5nPXt2aXNTdGF0ZS5maWxlTG9hZGluZ31cbiAgICAgICAgICAgICAgICBmaWxlTG9hZGluZ1Byb2dyZXNzPXt2aXNTdGF0ZS5maWxlTG9hZGluZ1Byb2dyZXNzfVxuICAgICAgICAgICAgICAgIGZpbGVGb3JtYXROYW1lcz17Z2V0RmlsZUZvcm1hdE5hbWVzKHRoaXMucHJvcHMudmlzU3RhdGUpfVxuICAgICAgICAgICAgICAgIGZpbGVFeHRlbnNpb25zPXtnZXRGaWxlRXh0ZW5zaW9ucyh0aGlzLnByb3BzLnZpc1N0YXRlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICB0aXRsZTogJ21vZGFsLnRpdGxlLmFkZERhdGFUb01hcCcsXG4gICAgICAgICAgICAgIGNzc1N0eWxlOiBMb2FkRGF0YU1vZGFsU3R5bGUsXG4gICAgICAgICAgICAgIGZvb3RlcjogZmFsc2UsXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fY2xvc2VNb2RhbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgRVhQT1JUX0lNQUdFX0lEOlxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxFeHBvcnRJbWFnZU1vZGFsXG4gICAgICAgICAgICAgICAgZXhwb3J0SW1hZ2U9e3VpU3RhdGUuZXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgICAgbWFwVz17Y29udGFpbmVyV31cbiAgICAgICAgICAgICAgICBtYXBIPXtjb250YWluZXJIfVxuICAgICAgICAgICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZVNldHRpbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5leHBvcnRJbWFnZScsXG4gICAgICAgICAgICAgIGNzc1N0eWxlOiAnJyxcbiAgICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcbiAgICAgICAgICAgICAgb25Db25maXJtOiB0aGlzLl9vbkV4cG9ydEltYWdlLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHVpU3RhdGUuZXhwb3J0SW1hZ2UucHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ21vZGFsLmJ1dHRvbi5kb3dubG9hZCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgRVhQT1JUX0RBVEFfSUQ6XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPEV4cG9ydERhdGFNb2RhbFxuICAgICAgICAgICAgICAgIHsuLi51aVN0YXRlLmV4cG9ydERhdGF9XG4gICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgIGFwcGx5Q1BVRmlsdGVyPXt0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5hcHBseUNQVUZpbHRlcn1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLl9jbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0RGF0YVR5cGU9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydERhdGFUeXBlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0U2VsZWN0ZWREYXRhc2V0PXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRTZWxlY3RlZERhdGFzZXR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnRGaWx0ZXJlZD17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0RmlsdGVyZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5leHBvcnREYXRhJyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6ICcnLFxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uRXhwb3J0RGF0YSxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnbW9kYWwuYnV0dG9uLmV4cG9ydCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgRVhQT1JUX01BUF9JRDpcbiAgICAgICAgICAgIGNvbnN0IGtlcGxlckdsQ29uZmlnID0gS2VwbGVyR2xTY2hlbWEuZ2V0Q29uZmlnVG9TYXZlKHtcbiAgICAgICAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgICAgICAgIHZpc1N0YXRlLFxuICAgICAgICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgICAgICAgdWlTdGF0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPEV4cG9ydE1hcE1vZGFsXG4gICAgICAgICAgICAgICAgY29uZmlnPXtrZXBsZXJHbENvbmZpZ31cbiAgICAgICAgICAgICAgICBvcHRpb25zPXt1aVN0YXRlLmV4cG9ydE1hcH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydE1hcEZvcm1hdD17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0TWFwRm9ybWF0fVxuICAgICAgICAgICAgICAgIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbj17dWlTdGF0ZUFjdGlvbnMuc2V0VXNlck1hcGJveEFjY2Vzc1Rva2VufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGU9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEhUTUxNYXBNb2RlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWwudGl0bGUuZXhwb3J0TWFwJyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6ICcnLFxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uRXhwb3J0TWFwLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uZXhwb3J0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBBRERfTUFQX1NUWUxFX0lEOlxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxBZGRNYXBTdHlsZU1vZGFsXG4gICAgICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e3RoaXMucHJvcHMubWFwYm94QXBpQWNjZXNzVG9rZW59XG4gICAgICAgICAgICAgICAgbWFwYm94QXBpVXJsPXt0aGlzLnByb3BzLm1hcGJveEFwaVVybH1cbiAgICAgICAgICAgICAgICBtYXBTdGF0ZT17dGhpcy5wcm9wcy5tYXBTdGF0ZX1cbiAgICAgICAgICAgICAgICBpbnB1dFN0eWxlPXttYXBTdHlsZS5pbnB1dFN0eWxlfVxuICAgICAgICAgICAgICAgIGlucHV0TWFwU3R5bGU9e3RoaXMucHJvcHMubWFwU3R5bGVBY3Rpb25zLmlucHV0TWFwU3R5bGV9XG4gICAgICAgICAgICAgICAgbG9hZEN1c3RvbU1hcFN0eWxlPXt0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5sb2FkQ3VzdG9tTWFwU3R5bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5hZGRDdXN0b21NYXBib3hTdHlsZScsXG4gICAgICAgICAgICAgIGNzc1N0eWxlOiAnJyxcbiAgICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcbiAgICAgICAgICAgICAgb25Db25maXJtOiB0aGlzLl9vbkFkZEN1c3RvbU1hcFN0eWxlLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFtYXBTdHlsZS5pbnB1dFN0eWxlLnN0eWxlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnbW9kYWwuYnV0dG9uLmFkZFN0eWxlJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBTQVZFX01BUF9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8U2F2ZU1hcE1vZGFsXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVyU3RhdGV9XG4gICAgICAgICAgICAgICAgZXhwb3J0SW1hZ2U9e3VpU3RhdGUuZXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgICAgbWFwSW5mbz17dmlzU3RhdGUubWFwSW5mb31cbiAgICAgICAgICAgICAgICBvblNldE1hcEluZm89e3Zpc1N0YXRlQWN0aW9ucy5zZXRNYXBJbmZvfVxuICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXt0aGlzLnByb3ZpZGVyV2l0aFN0b3JhZ2UodGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXt0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5zZXRDbG91ZFByb3ZpZGVyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWwudGl0bGUuc2F2ZU1hcCcsXG4gICAgICAgICAgICAgIGNzc1N0eWxlOiAnJyxcbiAgICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcbiAgICAgICAgICAgICAgb25Db25maXJtOiAoKSA9PiB0aGlzLl9vblNhdmVNYXAoZmFsc2UpLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICB1aVN0YXRlLmV4cG9ydEltYWdlLmV4cG9ydGluZyB8fFxuICAgICAgICAgICAgICAgICAgIWlzVmFsaWRNYXBJbmZvKHZpc1N0YXRlLm1hcEluZm8pIHx8XG4gICAgICAgICAgICAgICAgICAhcHJvdmlkZXJTdGF0ZS5jdXJyZW50UHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uc2F2ZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgT1ZFUldSSVRFX01BUF9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8T3ZlcldyaXRlTWFwTW9kYWxcbiAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVycz17dGhpcy5wcm9wcy5jbG91ZFByb3ZpZGVyc31cbiAgICAgICAgICAgICAgICB0aXRsZT17Z2V0KHZpc1N0YXRlLCBbJ21hcEluZm8nLCAndGl0bGUnXSl9XG4gICAgICAgICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXt0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5zZXRDbG91ZFByb3ZpZGVyfVxuICAgICAgICAgICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZVNldHRpbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdPdmVyd3JpdGUgRXhpc3RpbmcgRmlsZT8nLFxuICAgICAgICAgICAgICBjc3NTdHlsZTogc21hbGxNb2RhbENzcyxcbiAgICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uT3ZlcndyaXRlTWFwLFxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnWWVzJyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgIHVpU3RhdGUuZXhwb3J0SW1hZ2UuZXhwb3J0aW5nIHx8XG4gICAgICAgICAgICAgICAgICAhaXNWYWxpZE1hcEluZm8odmlzU3RhdGUubWFwSW5mbykgfHxcbiAgICAgICAgICAgICAgICAgICFwcm92aWRlclN0YXRlLmN1cnJlbnRQcm92aWRlclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBTSEFSRV9NQVBfSUQ6XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPFNoYXJlTWFwTW9kYWxcbiAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICBpc1JlYWR5PXshdWlTdGF0ZS5leHBvcnRJbWFnZS5leHBvcnRpbmd9XG4gICAgICAgICAgICAgICAgY2xvdWRQcm92aWRlcnM9e3RoaXMucHJvdmlkZXJXaXRoU2hhcmUodGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAgICAgb25FeHBvcnQ9e3RoaXMuX29uU2hhcmVNYXBVcmx9XG4gICAgICAgICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXt0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5zZXRDbG91ZFByb3ZpZGVyfVxuICAgICAgICAgICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZVNldHRpbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5zaGFyZVVSTCcsXG4gICAgICAgICAgICAgIGNzc1N0eWxlOiAnJyxcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX29uQ2xvc2VTYXZlTWFwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnJvb3ROb2RlID8gKFxuICAgICAgICA8TW9kYWxEaWFsb2dcbiAgICAgICAgICBwYXJlbnRTZWxlY3Rvcj17KCkgPT4gZmluZERPTU5vZGUocm9vdE5vZGUpfVxuICAgICAgICAgIGlzT3Blbj17Qm9vbGVhbihjdXJyZW50TW9kYWwpfVxuICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLl9jbG9zZU1vZGFsfVxuICAgICAgICAgIHsuLi5tb2RhbFByb3BzfVxuICAgICAgICAgIGNzc1N0eWxlPXtEZWZhdWx0U3R5bGUuY29uY2F0KG1vZGFsUHJvcHMuY3NzU3R5bGUpfVxuICAgICAgICA+XG4gICAgICAgICAge3RlbXBsYXRlfVxuICAgICAgICA8L01vZGFsRGlhbG9nPlxuICAgICAgKSA6IG51bGw7XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xuICB9XG5cbiAgcmV0dXJuIE1vZGFsQ29udGFpbmVyO1xufVxuIl19