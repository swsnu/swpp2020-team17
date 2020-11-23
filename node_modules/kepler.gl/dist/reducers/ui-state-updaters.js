"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startSaveStorage = exports.setLocaleUpdater = exports.toggleSplitMapUpdater = exports.loadFilesErrUpdater = exports.loadFilesSuccessUpdater = exports.loadFilesUpdater = exports.removeNotificationUpdater = exports.addNotificationUpdater = exports.setExportMapHTMLModeUpdater = exports.setExportMapFormatUpdater = exports.setUserMapboxAccessTokenUpdater = exports.setExportDataUpdater = exports.setExportFilteredUpdater = exports.setExportDataTypeUpdater = exports.setExportSelectedDatasetUpdater = exports.startExportingImageUpdater = exports.cleanupExportImageUpdater = exports.setExportImageErrorUpdater = exports.setExportImageDataUriUpdater = exports.setExportImageSettingUpdater = exports.openDeleteModalUpdater = exports.toggleMapControlUpdater = exports.hideExportDropdownUpdater = exports.showExportDropdownUpdater = exports.toggleModalUpdater = exports.toggleSidePanelUpdater = exports.initUiStateUpdater = exports.INITIAL_UI_STATE = exports.DEFAULT_EXPORT_MAP = exports.DEFAULT_EXPORT_JSON = exports.DEFAULT_EXPORT_HTML = exports.DEFAULT_NOTIFICATIONS = exports.DEFAULT_EXPORT_DATA = exports.DEFAULT_LOAD_FILES = exports.DEFAULT_EXPORT_IMAGE = exports.DEFAULT_MAP_CONTROLS = exports.DEFAULT_MODAL = exports.DEFAULT_ACTIVE_SIDE_PANEL = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _defaultSettings = require("../constants/default-settings");

var _locales = require("../localization/locales");

var _notificationsUtils = require("../utils/notifications-utils");

var _exportUtils = require("../utils/export-utils");

var _composerHelpers = require("./composer-helpers");

var _constants = require("../constants");

var _DEFAULT_EXPORT_MAP;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULT_ACTIVE_SIDE_PANEL = 'layer';
exports.DEFAULT_ACTIVE_SIDE_PANEL = DEFAULT_ACTIVE_SIDE_PANEL;
var DEFAULT_MODAL = _defaultSettings.ADD_DATA_ID;
/**
 * Updaters for `uiState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 *
 * @public
 * @example
 *
 * import keplerGlReducer, {uiStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // click button to close side panel
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             uiState: uiStateUpdaters.toggleSidePanelUpdater(
 *               uiState, {payload: null}
 *             )
 *          }
 *        }
 *      };
 *  }
 *  return reducers(state, action);
 * };
 *
 * export default composedReducer;
 */

/* eslint-disable no-unused-vars */

exports.DEFAULT_MODAL = DEFAULT_MODAL;
var uiStateUpdaters = null;
/* eslint-enable no-unused-vars */

var DEFAULT_MAP_CONTROLS_FEATURES = {
  show: true,
  active: false,
  // defines which map index users are interacting with (through map controls)
  activeMapIndex: 0
};
/**
 * A list of map control visibility and whether is it active.
 * @memberof uiStateUpdaters
 * @constant
 * @property visibleLayers Default: `{show: true, active: false}`
 * @property mapLegend Default: `{show: true, active: false}`
 * @property toggle3d Default: `{show: true}`
 * @property splitMap Default: `{show: true}`
 * @property mapDraw Default: `{show: true, active: false}`
 * @property mapLocale Default: `{show: false, active: false}`
 * @type {import('./ui-state-updaters').MapControls}
 * @public
 */

var DEFAULT_MAP_CONTROLS = ['visibleLayers', 'mapLegend', 'toggle3d', 'splitMap', 'mapDraw', 'mapLocale'].reduce(function (_final, current) {
  return _objectSpread({}, _final, (0, _defineProperty2["default"])({}, current, DEFAULT_MAP_CONTROLS_FEATURES));
}, {});
/**
 * Default image export config
 * @memberof uiStateUpdaters
 * @constant
 * @property ratio Default: `'SCREEN'`,
 * @property resolution Default: `'ONE_X'`,
 * @property legend Default: `false`,
 * @property mapH Default: 0,
 * @property mapW Default: 0,
 * @property imageSize Default: {zoomOffset: 0, scale: 1, imageW: 0, imageH: 0},
 * @property imageDataUri Default: `''`,
 * @property exporting Default: `false`
 * @property error Default: `false`
 * @type {import('./ui-state-updaters').ExportImage}
 * @public
 */

exports.DEFAULT_MAP_CONTROLS = DEFAULT_MAP_CONTROLS;
var DEFAULT_EXPORT_IMAGE = {
  // user options
  ratio: _defaultSettings.EXPORT_IMG_RATIOS.SCREEN,
  resolution: _defaultSettings.RESOLUTIONS.ONE_X,
  legend: false,
  mapH: 0,
  mapW: 0,
  imageSize: {
    zoomOffset: 0,
    scale: 1,
    imageW: 0,
    imageH: 0
  },
  // when this is set to true, the mock map viewport will move to the center of data
  center: false,
  // exporting state
  imageDataUri: '',
  // exporting: used to attach plot-container to dom
  exporting: false,
  // processing: used as loading indicator when export image is being produced
  processing: false,
  error: false
};
exports.DEFAULT_EXPORT_IMAGE = DEFAULT_EXPORT_IMAGE;
var DEFAULT_LOAD_FILES = {
  fileLoading: false
};
/**
 * Default initial `exportData` settings
 * @memberof uiStateUpdaters
 * @constant
 * @property selectedDataset Default: `''`,
 * @property dataType Default: `'csv'`,
 * @property filtered Default: `true`,
 * @type {import('./ui-state-updaters').ExportData}
 * @public
 */

exports.DEFAULT_LOAD_FILES = DEFAULT_LOAD_FILES;
var DEFAULT_EXPORT_DATA = {
  selectedDataset: '',
  dataType: _defaultSettings.EXPORT_DATA_TYPE.CSV,
  filtered: true
};
/**
 * @constant
 */

exports.DEFAULT_EXPORT_DATA = DEFAULT_EXPORT_DATA;
var DEFAULT_NOTIFICATIONS = [];
/**
 * @constant
 * @property exportMapboxAccessToken - Default: null, this is used when we provide a default mapbox token for users to take advantage of
 * @property userMapboxToken - Default: '', mapbox token provided by user through input field
 * @property mode - Default: 'READ', read only or editable
 * @type {import('./ui-state-updaters').ExportHtml}
 * @public
 */

exports.DEFAULT_NOTIFICATIONS = DEFAULT_NOTIFICATIONS;
var DEFAULT_EXPORT_HTML = {
  exportMapboxAccessToken: null,
  userMapboxToken: '',
  mode: _defaultSettings.EXPORT_HTML_MAP_MODES.READ
};
/**
 * @constant
 * @property hasData - Default: 'true',
 * @type {import('./ui-state-updaters').ExportJson}
 * @public
 */

exports.DEFAULT_EXPORT_HTML = DEFAULT_EXPORT_HTML;
var DEFAULT_EXPORT_JSON = {
  hasData: true
};
/**
 * Export Map Config
 * @constant
 * @property HTML - Default: 'DEFAULT_EXPORT_HTML',
 * @property JSON - Default: 'DEFAULT_EXPORT_JSON',
 * @property format - Default: 'HTML',
 * @type {import('./ui-state-updaters').ExportMap}
 * @public
 */

exports.DEFAULT_EXPORT_JSON = DEFAULT_EXPORT_JSON;
var DEFAULT_EXPORT_MAP = (_DEFAULT_EXPORT_MAP = {}, (0, _defineProperty2["default"])(_DEFAULT_EXPORT_MAP, _defaultSettings.EXPORT_MAP_FORMATS.HTML, DEFAULT_EXPORT_HTML), (0, _defineProperty2["default"])(_DEFAULT_EXPORT_MAP, _defaultSettings.EXPORT_MAP_FORMATS.JSON, DEFAULT_EXPORT_JSON), (0, _defineProperty2["default"])(_DEFAULT_EXPORT_MAP, "format", _defaultSettings.EXPORT_MAP_FORMATS.HTML), _DEFAULT_EXPORT_MAP);
/**
 * Default initial `uiState`
 * @memberof uiStateUpdaters
 * @constant
 * @property readOnly Default: `false`
 * @property activeSidePanel Default: `'layer'`
 * @property currentModal Default: `'addData'`
 * @property datasetKeyToRemove Default: `null`
 * @property visibleDropdown Default: `null`
 * @property exportImage Default: [`DEFAULT_EXPORT_IMAGE`](#default_export_image)
 * @property exportData Default: [`DEFAULT_EXPORT_DATA`](#default_export_data)
 * @property exportMap Default: [`DEFAULT_EXPORT_MAP`](#default_export_map)
 * @property mapControls Default: [`DEFAULT_MAP_CONTROLS`](#default_map_controls)
 * @property notifications Default: `[]`
 * @property notifications Default: `[]`
 * @property loadFiles
 * @type {import('./ui-state-updaters').UiState}
 * @public
 */

exports.DEFAULT_EXPORT_MAP = DEFAULT_EXPORT_MAP;
var INITIAL_UI_STATE = {
  readOnly: false,
  activeSidePanel: DEFAULT_ACTIVE_SIDE_PANEL,
  currentModal: DEFAULT_MODAL,
  datasetKeyToRemove: null,
  visibleDropdown: null,
  // export image modal ui
  exportImage: DEFAULT_EXPORT_IMAGE,
  // export data modal ui
  exportData: DEFAULT_EXPORT_DATA,
  // html export
  exportMap: DEFAULT_EXPORT_MAP,
  // map control panels
  mapControls: DEFAULT_MAP_CONTROLS,
  // ui notifications
  notifications: DEFAULT_NOTIFICATIONS,
  // load files
  loadFiles: DEFAULT_LOAD_FILES,
  // Locale of the UI
  locale: _locales.LOCALE_CODES.en
};
/* Updaters */

/**
 * @memberof uiStateUpdaters

 */

exports.INITIAL_UI_STATE = INITIAL_UI_STATE;

var initUiStateUpdater = function initUiStateUpdater(state, action) {
  return _objectSpread({}, state, {}, (action.payload || {}).initialUiState);
};
/**
 * Toggle active side panel
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload id of side panel to be shown, one of `layer`, `filter`, `interaction`, `map`. close side panel if `null`
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').toggleSidePanelUpdater}
 * @public
 */


exports.initUiStateUpdater = initUiStateUpdater;

var toggleSidePanelUpdater = function toggleSidePanelUpdater(state, _ref) {
  var id = _ref.payload;
  return id === state.activeSidePanel ? state : _objectSpread({}, state, {
    activeSidePanel: id
  });
};
/**
 * Show and hide modal dialog
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @paramaction.payload id of modal to be shown, null to hide modals. One of:
 *  - [`DATA_TABLE_ID`](../constants/default-settings.md#data_table_id)
 *  - [`DELETE_DATA_ID`](../constants/default-settings.md#delete_data_id)
 *  - [`ADD_DATA_ID`](../constants/default-settings.md#add_data_id)
 *  - [`EXPORT_IMAGE_ID`](../constants/default-settings.md#export_image_id)
 *  - [`EXPORT_DATA_ID`](../constants/default-settings.md#export_data_id)
 *  - [`ADD_MAP_STYLE_ID`](../constants/default-settings.md#add_map_style_id)
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').toggleModalUpdater}
 * @public
 */


exports.toggleSidePanelUpdater = toggleSidePanelUpdater;

var toggleModalUpdater = function toggleModalUpdater(state, _ref2) {
  var id = _ref2.payload;
  return _objectSpread({}, state, {
    currentModal: id
  });
};
/**
 * Hide and show side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateUpdaters
 * @type {typeof import('./ui-state-updaters').showExportDropdownUpdater}
 * @public
 */


exports.toggleModalUpdater = toggleModalUpdater;

var showExportDropdownUpdater = function showExportDropdownUpdater(state, _ref3) {
  var id = _ref3.payload;
  return _objectSpread({}, state, {
    visibleDropdown: id
  });
};
/**
 * Hide side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateUpdaters
 * @type {typeof import('./ui-state-updaters').hideExportDropdownUpdater}
 * @public
 */


exports.showExportDropdownUpdater = showExportDropdownUpdater;

var hideExportDropdownUpdater = function hideExportDropdownUpdater(state) {
  return _objectSpread({}, state, {
    visibleDropdown: null
  });
};
/**
 * Toggle active map control panel
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action action
 * @param action.payload map control panel id, one of the keys of: [`DEFAULT_MAP_CONTROLS`](#default_map_controls)
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').toggleMapControlUpdater}
 * @public
 */


exports.hideExportDropdownUpdater = hideExportDropdownUpdater;

var toggleMapControlUpdater = function toggleMapControlUpdater(state, _ref4) {
  var _ref4$payload = _ref4.payload,
      panelId = _ref4$payload.panelId,
      _ref4$payload$index = _ref4$payload.index,
      index = _ref4$payload$index === void 0 ? 0 : _ref4$payload$index;
  return _objectSpread({}, state, {
    mapControls: _objectSpread({}, state.mapControls, (0, _defineProperty2["default"])({}, panelId, _objectSpread({}, state.mapControls[panelId], {
      // this handles split map interaction
      // Toggling from within the same map will simply toggle the active property
      // Toggling from within different maps we set the active property to true
      active: index === state.mapControls[panelId].activeMapIndex ? !state.mapControls[panelId].active : true,
      activeMapIndex: index
    })))
  });
};
/**
 * Toggle active map control panel
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload dataset id
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').openDeleteModalUpdater}
 * @public
 */


exports.toggleMapControlUpdater = toggleMapControlUpdater;

var openDeleteModalUpdater = function openDeleteModalUpdater(state, _ref5) {
  var datasetKeyToRemove = _ref5.payload;
  return _objectSpread({}, state, {
    currentModal: _defaultSettings.DELETE_DATA_ID,
    datasetKeyToRemove: datasetKeyToRemove
  });
};
/**
 * Set `exportImage.legend` to `true` or `false`
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setExportImageSettingUpdater}
 * @public
 */


exports.openDeleteModalUpdater = openDeleteModalUpdater;

var setExportImageSettingUpdater = function setExportImageSettingUpdater(state, _ref6) {
  var newSetting = _ref6.payload;

  var updated = _objectSpread({}, state.exportImage, {}, newSetting);

  var imageSize = (0, _exportUtils.calculateExportImageSize)(updated) || state.exportImage.imageSize;
  return _objectSpread({}, state, {
    exportImage: _objectSpread({}, updated, {
      imageSize: imageSize
    })
  });
};
/**
 * Set `exportImage.setExportImageDataUri` to a image dataUri
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload export image data uri
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setExportImageDataUriUpdater}
 * @public
 */


exports.setExportImageSettingUpdater = setExportImageSettingUpdater;

var setExportImageDataUriUpdater = function setExportImageDataUriUpdater(state, _ref7) {
  var dataUri = _ref7.payload;
  return _objectSpread({}, state, {
    exportImage: _objectSpread({}, state.exportImage, {
      processing: false,
      imageDataUri: dataUri
    })
  });
};
/**
 * @memberof uiStateUpdaters
 * @type {typeof import('./ui-state-updaters').setExportImageErrorUpdater}
 * @public
 */


exports.setExportImageDataUriUpdater = setExportImageDataUriUpdater;

var setExportImageErrorUpdater = function setExportImageErrorUpdater(state, _ref8) {
  var error = _ref8.payload;
  return _objectSpread({}, state, {
    exportImage: _objectSpread({}, state.exportImage, {
      exporting: false,
      error: error
    })
  });
};
/**
 * Delete cached export image
 * @memberof uiStateUpdaters
 * @type {typeof import('./ui-state-updaters').cleanupExportImageUpdater}
 * @public
 */


exports.setExportImageErrorUpdater = setExportImageErrorUpdater;

var cleanupExportImageUpdater = function cleanupExportImageUpdater(state) {
  return _objectSpread({}, state, {
    exportImage: _objectSpread({}, state.exportImage, {
      exporting: false,
      imageDataUri: '',
      error: false,
      center: false
    })
  });
};
/**
 * Start image exporting flow
 * @memberof uiStateUpdaters
 * @param state
 * @param options
 * @returns {UiState}
 * @type {typeof import('./ui-state-updaters').startExportingImage}
 * @public
 */


exports.cleanupExportImageUpdater = cleanupExportImageUpdater;

var startExportingImageUpdater = function startExportingImageUpdater(state, _ref9) {
  var _ref9$payload = _ref9.payload,
      options = _ref9$payload === void 0 ? {} : _ref9$payload;

  var imageSettings = _objectSpread({}, options, {
    exporting: true
  });

  return (0, _composerHelpers.compose_)([cleanupExportImageUpdater, (0, _composerHelpers.apply_)(setExportImageSettingUpdater, (0, _composerHelpers.payload_)(imageSettings)), (0, _composerHelpers.apply_)(toggleModalUpdater, (0, _composerHelpers.payload_)(_constants.EXPORT_IMAGE_ID))])(state);
};
/**
 * Set selected dataset for export
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload dataset id
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setExportSelectedDatasetUpdater}
 * @public
 */


exports.startExportingImageUpdater = startExportingImageUpdater;

var setExportSelectedDatasetUpdater = function setExportSelectedDatasetUpdater(state, _ref10) {
  var dataset = _ref10.payload;
  return _objectSpread({}, state, {
    exportData: _objectSpread({}, state.exportData, {
      selectedDataset: dataset
    })
  });
};
/**
 * Set data format for exporting data
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload one of `'text/csv'`
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setExportDataTypeUpdater}
 * @public
 */


exports.setExportSelectedDatasetUpdater = setExportSelectedDatasetUpdater;

var setExportDataTypeUpdater = function setExportDataTypeUpdater(state, _ref11) {
  var dataType = _ref11.payload;
  return _objectSpread({}, state, {
    exportData: _objectSpread({}, state.exportData, {
      dataType: dataType
    })
  });
};
/**
 * Whether to export filtered data, `true` or `false`
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setExportFilteredUpdater}
 * @public
 */


exports.setExportDataTypeUpdater = setExportDataTypeUpdater;

var setExportFilteredUpdater = function setExportFilteredUpdater(state, _ref12) {
  var filtered = _ref12.payload;
  return _objectSpread({}, state, {
    exportData: _objectSpread({}, state.exportData, {
      filtered: filtered
    })
  });
};
/**
 * Whether to including data in map config, toggle between `true` or `false`
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setExportDataUpdater}
 * @public
 */


exports.setExportFilteredUpdater = setExportFilteredUpdater;

var setExportDataUpdater = function setExportDataUpdater(state) {
  return _objectSpread({}, state, {
    exportMap: _objectSpread({}, state.exportMap, (0, _defineProperty2["default"])({}, _defaultSettings.EXPORT_MAP_FORMATS.JSON, _objectSpread({}, state.exportMap[_defaultSettings.EXPORT_MAP_FORMATS.JSON], {
      hasData: !state.exportMap[_defaultSettings.EXPORT_MAP_FORMATS.JSON].hasData
    })))
  });
};
/**
 * whether to export a mapbox access to HTML single page
 * @param state - `uiState`
 * @param action
 * @param action.payload
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setUserMapboxAccessTokenUpdater}
 * @public
 */


exports.setExportDataUpdater = setExportDataUpdater;

var setUserMapboxAccessTokenUpdater = function setUserMapboxAccessTokenUpdater(state, _ref13) {
  var userMapboxToken = _ref13.payload;
  return _objectSpread({}, state, {
    exportMap: _objectSpread({}, state.exportMap, (0, _defineProperty2["default"])({}, _defaultSettings.EXPORT_MAP_FORMATS.HTML, _objectSpread({}, state.exportMap[_defaultSettings.EXPORT_MAP_FORMATS.HTML], {
      userMapboxToken: userMapboxToken
    })))
  });
};
/**
 * Sets the export map format
 * @param state - `uiState`
 * @param action
 * @param action.payload format to use to export the map into
 * @return nextState
 * @type {typeof import('./ui-state-updaters').setExportMapFormatUpdater}
 */


exports.setUserMapboxAccessTokenUpdater = setUserMapboxAccessTokenUpdater;

var setExportMapFormatUpdater = function setExportMapFormatUpdater(state, _ref14) {
  var format = _ref14.payload;
  return _objectSpread({}, state, {
    exportMap: _objectSpread({}, state.exportMap, {
      format: format
    })
  });
};
/**
 * Set the export html map mode
 * @param state - `uiState`
 * @param action
 * @param action.payload to be set (available modes: EXPORT_HTML_MAP_MODES)
 * @return nextState
 * @type {typeof import('./ui-state-updaters').setExportMapHTMLModeUpdater}
 */


exports.setExportMapFormatUpdater = setExportMapFormatUpdater;

var setExportMapHTMLModeUpdater = function setExportMapHTMLModeUpdater(state, _ref15) {
  var mode = _ref15.payload;
  return _objectSpread({}, state, {
    exportMap: _objectSpread({}, state.exportMap, (0, _defineProperty2["default"])({}, _defaultSettings.EXPORT_MAP_FORMATS.HTML, _objectSpread({}, state.exportMap[_defaultSettings.EXPORT_MAP_FORMATS.HTML], {
      mode: mode
    })))
  });
};
/**
 * Add a notification to be displayed
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').addNotificationUpdater}
 * @public
 */


exports.setExportMapHTMLModeUpdater = setExportMapHTMLModeUpdater;

var addNotificationUpdater = function addNotificationUpdater(state, _ref16) {
  var payload = _ref16.payload;
  return _objectSpread({}, state, {
    notifications: [].concat((0, _toConsumableArray2["default"])(state.notifications || []), [(0, _notificationsUtils.createNotification)(payload)])
  });
};
/**
 * Remove a notification
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload id of the notification to be removed
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').removeNotificationUpdater}
 * @public
 */


exports.addNotificationUpdater = addNotificationUpdater;

var removeNotificationUpdater = function removeNotificationUpdater(state, _ref17) {
  var id = _ref17.payload;
  return _objectSpread({}, state, {
    notifications: state.notifications.filter(function (n) {
      return n.id !== id;
    })
  });
};
/**
 * Fired when file loading begin
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').loadFilesUpdater}
 * @public
 */


exports.removeNotificationUpdater = removeNotificationUpdater;

var loadFilesUpdater = function loadFilesUpdater(state) {
  return _objectSpread({}, state, {
    loadFiles: _objectSpread({}, state.loadFiles, {
      fileLoading: true
    })
  });
};
/**
 * Handles loading file success and set fileLoading property to false
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').loadFilesSuccessUpdater}
 */


exports.loadFilesUpdater = loadFilesUpdater;

var loadFilesSuccessUpdater = function loadFilesSuccessUpdater(state) {
  return _objectSpread({}, state, {
    loadFiles: _objectSpread({}, state.loadFiles, {
      fileLoading: false
    })
  });
};
/**
 * Handles load file error and set fileLoading property to false
 * @memberof uiStateUpdaters
 * @param state
 * @param action
 * @param action.error
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').loadFilesErrUpdater}
 * @public
 */


exports.loadFilesSuccessUpdater = loadFilesSuccessUpdater;

var loadFilesErrUpdater = function loadFilesErrUpdater(state, _ref18) {
  var error = _ref18.error;
  return addNotificationUpdater(_objectSpread({}, state, {
    loadFiles: _objectSpread({}, state.loadFiles, {
      fileLoading: false
    })
  }), {
    payload: (0, _notificationsUtils.errorNotification)({
      message: (error || {}).message || 'Failed to upload files',
      topic: _defaultSettings.DEFAULT_NOTIFICATION_TOPICS.global
    })
  });
};
/**
 * Handles toggle map split and reset all map control index to 0
 * @memberof uiStateUpdaters
 * @param state
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').toggleSplitMapUpdater}
 * @public
 */


exports.loadFilesErrUpdater = loadFilesErrUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state) {
  return _objectSpread({}, state, {
    mapControls: Object.entries(state.mapControls).reduce(function (acc, entry) {
      return _objectSpread({}, acc, (0, _defineProperty2["default"])({}, entry[0], _objectSpread({}, entry[1], {
        activeMapIndex: 0
      })));
    }, {})
  });
};
/**
 * Set the locale of the UI
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload
 * @param action.payload.locale locale
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setLocaleUpdater}
 * @public
 */


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

var setLocaleUpdater = function setLocaleUpdater(state, _ref19) {
  var locale = _ref19.payload.locale;
  return _objectSpread({}, state, {
    locale: locale
  });
};
/**
 * Start saving storage  flow
 * @memberof uiStateUpdaters
 * @param state
 * @param mapSaved
 * @returns {UiState}
 * @type {typeof import('./ui-state-updaters').startSaveStorage}
 */


exports.setLocaleUpdater = setLocaleUpdater;

var startSaveStorage = function startSaveStorage(state, _ref20) {
  var mapSaved = _ref20.payload;
  return (0, _composerHelpers.compose_)([cleanupExportImageUpdater, (0, _composerHelpers.apply_)(setExportImageSettingUpdater, (0, _composerHelpers.payload_)({
    exporting: true
  })), (0, _composerHelpers.apply_)(toggleModalUpdater, (0, _composerHelpers.payload_)(mapSaved ? _defaultSettings.OVERWRITE_MAP_ID : _defaultSettings.SAVE_MAP_ID))])(state);
};

exports.startSaveStorage = startSaveStorage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy91aS1zdGF0ZS11cGRhdGVycy5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0FDVElWRV9TSURFX1BBTkVMIiwiREVGQVVMVF9NT0RBTCIsIkFERF9EQVRBX0lEIiwidWlTdGF0ZVVwZGF0ZXJzIiwiREVGQVVMVF9NQVBfQ09OVFJPTFNfRkVBVFVSRVMiLCJzaG93IiwiYWN0aXZlIiwiYWN0aXZlTWFwSW5kZXgiLCJERUZBVUxUX01BUF9DT05UUk9MUyIsInJlZHVjZSIsImZpbmFsIiwiY3VycmVudCIsIkRFRkFVTFRfRVhQT1JUX0lNQUdFIiwicmF0aW8iLCJFWFBPUlRfSU1HX1JBVElPUyIsIlNDUkVFTiIsInJlc29sdXRpb24iLCJSRVNPTFVUSU9OUyIsIk9ORV9YIiwibGVnZW5kIiwibWFwSCIsIm1hcFciLCJpbWFnZVNpemUiLCJ6b29tT2Zmc2V0Iiwic2NhbGUiLCJpbWFnZVciLCJpbWFnZUgiLCJjZW50ZXIiLCJpbWFnZURhdGFVcmkiLCJleHBvcnRpbmciLCJwcm9jZXNzaW5nIiwiZXJyb3IiLCJERUZBVUxUX0xPQURfRklMRVMiLCJmaWxlTG9hZGluZyIsIkRFRkFVTFRfRVhQT1JUX0RBVEEiLCJzZWxlY3RlZERhdGFzZXQiLCJkYXRhVHlwZSIsIkVYUE9SVF9EQVRBX1RZUEUiLCJDU1YiLCJmaWx0ZXJlZCIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OUyIsIkRFRkFVTFRfRVhQT1JUX0hUTUwiLCJleHBvcnRNYXBib3hBY2Nlc3NUb2tlbiIsInVzZXJNYXBib3hUb2tlbiIsIm1vZGUiLCJFWFBPUlRfSFRNTF9NQVBfTU9ERVMiLCJSRUFEIiwiREVGQVVMVF9FWFBPUlRfSlNPTiIsImhhc0RhdGEiLCJERUZBVUxUX0VYUE9SVF9NQVAiLCJFWFBPUlRfTUFQX0ZPUk1BVFMiLCJIVE1MIiwiSlNPTiIsIklOSVRJQUxfVUlfU1RBVEUiLCJyZWFkT25seSIsImFjdGl2ZVNpZGVQYW5lbCIsImN1cnJlbnRNb2RhbCIsImRhdGFzZXRLZXlUb1JlbW92ZSIsInZpc2libGVEcm9wZG93biIsImV4cG9ydEltYWdlIiwiZXhwb3J0RGF0YSIsImV4cG9ydE1hcCIsIm1hcENvbnRyb2xzIiwibm90aWZpY2F0aW9ucyIsImxvYWRGaWxlcyIsImxvY2FsZSIsIkxPQ0FMRV9DT0RFUyIsImVuIiwiaW5pdFVpU3RhdGVVcGRhdGVyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiaW5pdGlhbFVpU3RhdGUiLCJ0b2dnbGVTaWRlUGFuZWxVcGRhdGVyIiwiaWQiLCJ0b2dnbGVNb2RhbFVwZGF0ZXIiLCJzaG93RXhwb3J0RHJvcGRvd25VcGRhdGVyIiwiaGlkZUV4cG9ydERyb3Bkb3duVXBkYXRlciIsInRvZ2dsZU1hcENvbnRyb2xVcGRhdGVyIiwicGFuZWxJZCIsImluZGV4Iiwib3BlbkRlbGV0ZU1vZGFsVXBkYXRlciIsIkRFTEVURV9EQVRBX0lEIiwic2V0RXhwb3J0SW1hZ2VTZXR0aW5nVXBkYXRlciIsIm5ld1NldHRpbmciLCJ1cGRhdGVkIiwic2V0RXhwb3J0SW1hZ2VEYXRhVXJpVXBkYXRlciIsImRhdGFVcmkiLCJzZXRFeHBvcnRJbWFnZUVycm9yVXBkYXRlciIsImNsZWFudXBFeHBvcnRJbWFnZVVwZGF0ZXIiLCJzdGFydEV4cG9ydGluZ0ltYWdlVXBkYXRlciIsIm9wdGlvbnMiLCJpbWFnZVNldHRpbmdzIiwiRVhQT1JUX0lNQUdFX0lEIiwic2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0VXBkYXRlciIsImRhdGFzZXQiLCJzZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXIiLCJzZXRFeHBvcnRGaWx0ZXJlZFVwZGF0ZXIiLCJzZXRFeHBvcnREYXRhVXBkYXRlciIsInNldFVzZXJNYXBib3hBY2Nlc3NUb2tlblVwZGF0ZXIiLCJzZXRFeHBvcnRNYXBGb3JtYXRVcGRhdGVyIiwiZm9ybWF0Iiwic2V0RXhwb3J0TWFwSFRNTE1vZGVVcGRhdGVyIiwiYWRkTm90aWZpY2F0aW9uVXBkYXRlciIsInJlbW92ZU5vdGlmaWNhdGlvblVwZGF0ZXIiLCJmaWx0ZXIiLCJuIiwibG9hZEZpbGVzVXBkYXRlciIsImxvYWRGaWxlc1N1Y2Nlc3NVcGRhdGVyIiwibG9hZEZpbGVzRXJyVXBkYXRlciIsIm1lc3NhZ2UiLCJ0b3BpYyIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyIsImdsb2JhbCIsInRvZ2dsZVNwbGl0TWFwVXBkYXRlciIsIk9iamVjdCIsImVudHJpZXMiLCJhY2MiLCJlbnRyeSIsInNldExvY2FsZVVwZGF0ZXIiLCJzdGFydFNhdmVTdG9yYWdlIiwibWFwU2F2ZWQiLCJPVkVSV1JJVEVfTUFQX0lEIiwiU0FWRV9NQVBfSUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFxQkE7O0FBVUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBR08sSUFBTUEseUJBQXlCLEdBQUcsT0FBbEM7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHQyw0QkFBdEI7QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTs7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLElBQXhCO0FBQ0E7O0FBRUEsSUFBTUMsNkJBQTZCLEdBQUc7QUFDcENDLEVBQUFBLElBQUksRUFBRSxJQUQ4QjtBQUVwQ0MsRUFBQUEsTUFBTSxFQUFFLEtBRjRCO0FBR3BDO0FBQ0FDLEVBQUFBLGNBQWMsRUFBRTtBQUpvQixDQUF0QztBQU9BOzs7Ozs7Ozs7Ozs7OztBQWFPLElBQU1DLG9CQUFvQixHQUFHLENBQ2xDLGVBRGtDLEVBRWxDLFdBRmtDLEVBR2xDLFVBSGtDLEVBSWxDLFVBSmtDLEVBS2xDLFNBTGtDLEVBTWxDLFdBTmtDLEVBT2xDQyxNQVBrQyxDQVFsQyxVQUFDQyxNQUFELEVBQVFDLE9BQVI7QUFBQSwyQkFDS0QsTUFETCx1Q0FFR0MsT0FGSCxFQUVhUCw2QkFGYjtBQUFBLENBUmtDLEVBWWxDLEVBWmtDLENBQTdCO0FBZVA7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCTyxJQUFNUSxvQkFBb0IsR0FBRztBQUNsQztBQUNBQyxFQUFBQSxLQUFLLEVBQUVDLG1DQUFrQkMsTUFGUztBQUdsQ0MsRUFBQUEsVUFBVSxFQUFFQyw2QkFBWUMsS0FIVTtBQUlsQ0MsRUFBQUEsTUFBTSxFQUFFLEtBSjBCO0FBS2xDQyxFQUFBQSxJQUFJLEVBQUUsQ0FMNEI7QUFNbENDLEVBQUFBLElBQUksRUFBRSxDQU40QjtBQU9sQ0MsRUFBQUEsU0FBUyxFQUFFO0FBQ1RDLElBQUFBLFVBQVUsRUFBRSxDQURIO0FBRVRDLElBQUFBLEtBQUssRUFBRSxDQUZFO0FBR1RDLElBQUFBLE1BQU0sRUFBRSxDQUhDO0FBSVRDLElBQUFBLE1BQU0sRUFBRTtBQUpDLEdBUHVCO0FBYWxDO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSxLQWQwQjtBQWVsQztBQUNBQyxFQUFBQSxZQUFZLEVBQUUsRUFoQm9CO0FBaUJsQztBQUNBQyxFQUFBQSxTQUFTLEVBQUUsS0FsQnVCO0FBbUJsQztBQUNBQyxFQUFBQSxVQUFVLEVBQUUsS0FwQnNCO0FBcUJsQ0MsRUFBQUEsS0FBSyxFQUFFO0FBckIyQixDQUE3Qjs7QUF3QkEsSUFBTUMsa0JBQWtCLEdBQUc7QUFDaENDLEVBQUFBLFdBQVcsRUFBRTtBQURtQixDQUEzQjtBQUlQOzs7Ozs7Ozs7Ozs7QUFVTyxJQUFNQyxtQkFBbUIsR0FBRztBQUNqQ0MsRUFBQUEsZUFBZSxFQUFFLEVBRGdCO0FBRWpDQyxFQUFBQSxRQUFRLEVBQUVDLGtDQUFpQkMsR0FGTTtBQUdqQ0MsRUFBQUEsUUFBUSxFQUFFO0FBSHVCLENBQTVCO0FBTVA7Ozs7O0FBR08sSUFBTUMscUJBQXFCLEdBQUcsRUFBOUI7QUFFUDs7Ozs7Ozs7OztBQVFPLElBQU1DLG1CQUFtQixHQUFHO0FBQ2pDQyxFQUFBQSx1QkFBdUIsRUFBRSxJQURRO0FBRWpDQyxFQUFBQSxlQUFlLEVBQUUsRUFGZ0I7QUFHakNDLEVBQUFBLElBQUksRUFBRUMsdUNBQXNCQztBQUhLLENBQTVCO0FBTVA7Ozs7Ozs7O0FBTU8sSUFBTUMsbUJBQW1CLEdBQUc7QUFDakNDLEVBQUFBLE9BQU8sRUFBRTtBQUR3QixDQUE1QjtBQUlQOzs7Ozs7Ozs7OztBQVNPLElBQU1DLGtCQUFrQixvRkFDNUJDLG9DQUFtQkMsSUFEUyxFQUNGVixtQkFERSx5REFFNUJTLG9DQUFtQkUsSUFGUyxFQUVGTCxtQkFGRSxtRUFHckJHLG9DQUFtQkMsSUFIRSx1QkFBeEI7QUFNUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJPLElBQU1FLGdCQUFnQixHQUFHO0FBQzlCQyxFQUFBQSxRQUFRLEVBQUUsS0FEb0I7QUFFOUJDLEVBQUFBLGVBQWUsRUFBRXZELHlCQUZhO0FBRzlCd0QsRUFBQUEsWUFBWSxFQUFFdkQsYUFIZ0I7QUFJOUJ3RCxFQUFBQSxrQkFBa0IsRUFBRSxJQUpVO0FBSzlCQyxFQUFBQSxlQUFlLEVBQUUsSUFMYTtBQU05QjtBQUNBQyxFQUFBQSxXQUFXLEVBQUUvQyxvQkFQaUI7QUFROUI7QUFDQWdELEVBQUFBLFVBQVUsRUFBRTFCLG1CQVRrQjtBQVU5QjtBQUNBMkIsRUFBQUEsU0FBUyxFQUFFWixrQkFYbUI7QUFZOUI7QUFDQWEsRUFBQUEsV0FBVyxFQUFFdEQsb0JBYmlCO0FBYzlCO0FBQ0F1RCxFQUFBQSxhQUFhLEVBQUV2QixxQkFmZTtBQWdCOUI7QUFDQXdCLEVBQUFBLFNBQVMsRUFBRWhDLGtCQWpCbUI7QUFrQjlCO0FBQ0FpQyxFQUFBQSxNQUFNLEVBQUVDLHNCQUFhQztBQW5CUyxDQUF6QjtBQXNCUDs7QUFDQTs7Ozs7OztBQUlPLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsMkJBQzdCRCxLQUQ2QixNQUU3QixDQUFDQyxNQUFNLENBQUNDLE9BQVAsSUFBa0IsRUFBbkIsRUFBdUJDLGNBRk07QUFBQSxDQUEzQjtBQUtQOzs7Ozs7Ozs7Ozs7OztBQVVPLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0osS0FBRCxRQUEwQjtBQUFBLE1BQVJLLEVBQVEsUUFBakJILE9BQWlCO0FBQzlELFNBQU9HLEVBQUUsS0FBS0wsS0FBSyxDQUFDZCxlQUFiLEdBQ0hjLEtBREcscUJBR0VBLEtBSEY7QUFJRGQsSUFBQUEsZUFBZSxFQUFFbUI7QUFKaEIsSUFBUDtBQU1ELENBUE07QUFTUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQk8sSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDTixLQUFEO0FBQUEsTUFBa0JLLEVBQWxCLFNBQVNILE9BQVQ7QUFBQSwyQkFDN0JGLEtBRDZCO0FBRWhDYixJQUFBQSxZQUFZLEVBQUVrQjtBQUZrQjtBQUFBLENBQTNCO0FBS1A7Ozs7Ozs7Ozs7QUFNTyxJQUFNRSx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLENBQUNQLEtBQUQ7QUFBQSxNQUFrQkssRUFBbEIsU0FBU0gsT0FBVDtBQUFBLDJCQUNwQ0YsS0FEb0M7QUFFdkNYLElBQUFBLGVBQWUsRUFBRWdCO0FBRnNCO0FBQUEsQ0FBbEM7QUFLUDs7Ozs7Ozs7OztBQU1PLElBQU1HLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQVIsS0FBSztBQUFBLDJCQUN6Q0EsS0FEeUM7QUFFNUNYLElBQUFBLGVBQWUsRUFBRTtBQUYyQjtBQUFBLENBQXZDO0FBS1A7Ozs7Ozs7Ozs7Ozs7O0FBVU8sSUFBTW9CLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ1QsS0FBRDtBQUFBLDRCQUFTRSxPQUFUO0FBQUEsTUFBbUJRLE9BQW5CLGlCQUFtQkEsT0FBbkI7QUFBQSwwQ0FBNEJDLEtBQTVCO0FBQUEsTUFBNEJBLEtBQTVCLG9DQUFvQyxDQUFwQztBQUFBLDJCQUNsQ1gsS0FEa0M7QUFFckNQLElBQUFBLFdBQVcsb0JBQ05PLEtBQUssQ0FBQ1AsV0FEQSx1Q0FFUmlCLE9BRlEsb0JBR0pWLEtBQUssQ0FBQ1AsV0FBTixDQUFrQmlCLE9BQWxCLENBSEk7QUFJUDtBQUNBO0FBQ0E7QUFDQXpFLE1BQUFBLE1BQU0sRUFDSjBFLEtBQUssS0FBS1gsS0FBSyxDQUFDUCxXQUFOLENBQWtCaUIsT0FBbEIsRUFBMkJ4RSxjQUFyQyxHQUNJLENBQUM4RCxLQUFLLENBQUNQLFdBQU4sQ0FBa0JpQixPQUFsQixFQUEyQnpFLE1BRGhDLEdBRUksSUFWQztBQVdQQyxNQUFBQSxjQUFjLEVBQUV5RTtBQVhUO0FBRjBCO0FBQUEsQ0FBaEM7QUFrQlA7Ozs7Ozs7Ozs7Ozs7O0FBVU8sSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDWixLQUFEO0FBQUEsTUFBa0JaLGtCQUFsQixTQUFTYyxPQUFUO0FBQUEsMkJBQ2pDRixLQURpQztBQUVwQ2IsSUFBQUEsWUFBWSxFQUFFMEIsK0JBRnNCO0FBR3BDekIsSUFBQUEsa0JBQWtCLEVBQWxCQTtBQUhvQztBQUFBLENBQS9CO0FBTVA7Ozs7Ozs7Ozs7OztBQVFPLElBQU0wQiw0QkFBNEIsR0FBRyxTQUEvQkEsNEJBQStCLENBQUNkLEtBQUQsU0FBa0M7QUFBQSxNQUFoQmUsVUFBZ0IsU0FBekJiLE9BQXlCOztBQUM1RSxNQUFNYyxPQUFPLHFCQUFPaEIsS0FBSyxDQUFDVixXQUFiLE1BQTZCeUIsVUFBN0IsQ0FBYjs7QUFDQSxNQUFNOUQsU0FBUyxHQUFHLDJDQUF5QitELE9BQXpCLEtBQXFDaEIsS0FBSyxDQUFDVixXQUFOLENBQWtCckMsU0FBekU7QUFFQSwyQkFDSytDLEtBREw7QUFFRVYsSUFBQUEsV0FBVyxvQkFDTjBCLE9BRE07QUFFVC9ELE1BQUFBLFNBQVMsRUFBVEE7QUFGUztBQUZiO0FBT0QsQ0FYTTtBQWFQOzs7Ozs7Ozs7Ozs7OztBQVVPLElBQU1nRSw0QkFBNEIsR0FBRyxTQUEvQkEsNEJBQStCLENBQUNqQixLQUFEO0FBQUEsTUFBa0JrQixPQUFsQixTQUFTaEIsT0FBVDtBQUFBLDJCQUN2Q0YsS0FEdUM7QUFFMUNWLElBQUFBLFdBQVcsb0JBQ05VLEtBQUssQ0FBQ1YsV0FEQTtBQUVUN0IsTUFBQUEsVUFBVSxFQUFFLEtBRkg7QUFHVEYsTUFBQUEsWUFBWSxFQUFFMkQ7QUFITDtBQUYrQjtBQUFBLENBQXJDO0FBU1A7Ozs7Ozs7OztBQUtPLElBQU1DLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsQ0FBQ25CLEtBQUQ7QUFBQSxNQUFrQnRDLEtBQWxCLFNBQVN3QyxPQUFUO0FBQUEsMkJBQ3JDRixLQURxQztBQUV4Q1YsSUFBQUEsV0FBVyxvQkFDTlUsS0FBSyxDQUFDVixXQURBO0FBRVQ5QixNQUFBQSxTQUFTLEVBQUUsS0FGRjtBQUdURSxNQUFBQSxLQUFLLEVBQUxBO0FBSFM7QUFGNkI7QUFBQSxDQUFuQztBQVNQOzs7Ozs7Ozs7O0FBTU8sSUFBTTBELHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQXBCLEtBQUs7QUFBQSwyQkFDekNBLEtBRHlDO0FBRTVDVixJQUFBQSxXQUFXLG9CQUNOVSxLQUFLLENBQUNWLFdBREE7QUFFVDlCLE1BQUFBLFNBQVMsRUFBRSxLQUZGO0FBR1RELE1BQUFBLFlBQVksRUFBRSxFQUhMO0FBSVRHLE1BQUFBLEtBQUssRUFBRSxLQUpFO0FBS1RKLE1BQUFBLE1BQU0sRUFBRTtBQUxDO0FBRmlDO0FBQUEsQ0FBdkM7QUFXUDs7Ozs7Ozs7Ozs7OztBQVNPLElBQU0rRCwwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUNyQixLQUFELFNBQW9DO0FBQUEsNEJBQTNCRSxPQUEyQjtBQUFBLE1BQWxCb0IsT0FBa0IsOEJBQVIsRUFBUTs7QUFDNUUsTUFBTUMsYUFBYSxxQkFDZEQsT0FEYztBQUVqQjlELElBQUFBLFNBQVMsRUFBRTtBQUZNLElBQW5COztBQUtBLFNBQU8sK0JBQVMsQ0FDZDRELHlCQURjLEVBRWQsNkJBQU9OLDRCQUFQLEVBQXFDLCtCQUFTUyxhQUFULENBQXJDLENBRmMsRUFHZCw2QkFBT2pCLGtCQUFQLEVBQTJCLCtCQUFTa0IsMEJBQVQsQ0FBM0IsQ0FIYyxDQUFULEVBSUp4QixLQUpJLENBQVA7QUFLRCxDQVhNO0FBYVA7Ozs7Ozs7Ozs7Ozs7O0FBVU8sSUFBTXlCLCtCQUErQixHQUFHLFNBQWxDQSwrQkFBa0MsQ0FBQ3pCLEtBQUQ7QUFBQSxNQUFrQjBCLE9BQWxCLFVBQVN4QixPQUFUO0FBQUEsMkJBQzFDRixLQUQwQztBQUU3Q1QsSUFBQUEsVUFBVSxvQkFDTFMsS0FBSyxDQUFDVCxVQUREO0FBRVJ6QixNQUFBQSxlQUFlLEVBQUU0RDtBQUZUO0FBRm1DO0FBQUEsQ0FBeEM7QUFRUDs7Ozs7Ozs7Ozs7Ozs7QUFVTyxJQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUMzQixLQUFEO0FBQUEsTUFBa0JqQyxRQUFsQixVQUFTbUMsT0FBVDtBQUFBLDJCQUNuQ0YsS0FEbUM7QUFFdENULElBQUFBLFVBQVUsb0JBQ0xTLEtBQUssQ0FBQ1QsVUFERDtBQUVSeEIsTUFBQUEsUUFBUSxFQUFSQTtBQUZRO0FBRjRCO0FBQUEsQ0FBakM7QUFRUDs7Ozs7Ozs7Ozs7Ozs7QUFVTyxJQUFNNkQsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDNUIsS0FBRDtBQUFBLE1BQWtCOUIsUUFBbEIsVUFBU2dDLE9BQVQ7QUFBQSwyQkFDbkNGLEtBRG1DO0FBRXRDVCxJQUFBQSxVQUFVLG9CQUNMUyxLQUFLLENBQUNULFVBREQ7QUFFUnJCLE1BQUFBLFFBQVEsRUFBUkE7QUFGUTtBQUY0QjtBQUFBLENBQWpDO0FBUVA7Ozs7Ozs7Ozs7OztBQVFPLElBQU0yRCxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUE3QixLQUFLO0FBQUEsMkJBQ3BDQSxLQURvQztBQUV2Q1IsSUFBQUEsU0FBUyxvQkFDSlEsS0FBSyxDQUFDUixTQURGLHVDQUVOWCxvQ0FBbUJFLElBRmIsb0JBR0ZpQixLQUFLLENBQUNSLFNBQU4sQ0FBZ0JYLG9DQUFtQkUsSUFBbkMsQ0FIRTtBQUlMSixNQUFBQSxPQUFPLEVBQUUsQ0FBQ3FCLEtBQUssQ0FBQ1IsU0FBTixDQUFnQlgsb0NBQW1CRSxJQUFuQyxFQUF5Q0o7QUFKOUM7QUFGOEI7QUFBQSxDQUFsQztBQVdQOzs7Ozs7Ozs7Ozs7O0FBU08sSUFBTW1ELCtCQUErQixHQUFHLFNBQWxDQSwrQkFBa0MsQ0FBQzlCLEtBQUQ7QUFBQSxNQUFrQjFCLGVBQWxCLFVBQVM0QixPQUFUO0FBQUEsMkJBQzFDRixLQUQwQztBQUU3Q1IsSUFBQUEsU0FBUyxvQkFDSlEsS0FBSyxDQUFDUixTQURGLHVDQUVOWCxvQ0FBbUJDLElBRmIsb0JBR0ZrQixLQUFLLENBQUNSLFNBQU4sQ0FBZ0JYLG9DQUFtQkMsSUFBbkMsQ0FIRTtBQUlMUixNQUFBQSxlQUFlLEVBQWZBO0FBSks7QUFGb0M7QUFBQSxDQUF4QztBQVdQOzs7Ozs7Ozs7Ozs7QUFRTyxJQUFNeUQseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFDL0IsS0FBRDtBQUFBLE1BQWtCZ0MsTUFBbEIsVUFBUzlCLE9BQVQ7QUFBQSwyQkFDcENGLEtBRG9DO0FBRXZDUixJQUFBQSxTQUFTLG9CQUNKUSxLQUFLLENBQUNSLFNBREY7QUFFUHdDLE1BQUFBLE1BQU0sRUFBTkE7QUFGTztBQUY4QjtBQUFBLENBQWxDO0FBUVA7Ozs7Ozs7Ozs7OztBQVFPLElBQU1DLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEIsQ0FBQ2pDLEtBQUQ7QUFBQSxNQUFrQnpCLElBQWxCLFVBQVMyQixPQUFUO0FBQUEsMkJBQ3RDRixLQURzQztBQUV6Q1IsSUFBQUEsU0FBUyxvQkFDSlEsS0FBSyxDQUFDUixTQURGLHVDQUVOWCxvQ0FBbUJDLElBRmIsb0JBR0ZrQixLQUFLLENBQUNSLFNBQU4sQ0FBZ0JYLG9DQUFtQkMsSUFBbkMsQ0FIRTtBQUlMUCxNQUFBQSxJQUFJLEVBQUpBO0FBSks7QUFGZ0M7QUFBQSxDQUFwQztBQVdQOzs7Ozs7Ozs7Ozs7OztBQVVPLElBQU0yRCxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNsQyxLQUFEO0FBQUEsTUFBU0UsT0FBVCxVQUFTQSxPQUFUO0FBQUEsMkJBQ2pDRixLQURpQztBQUVwQ04sSUFBQUEsYUFBYSxnREFBT00sS0FBSyxDQUFDTixhQUFOLElBQXVCLEVBQTlCLElBQW1DLDRDQUFtQlEsT0FBbkIsQ0FBbkM7QUFGdUI7QUFBQSxDQUEvQjtBQUtQOzs7Ozs7Ozs7Ozs7OztBQVVPLElBQU1pQyx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLENBQUNuQyxLQUFEO0FBQUEsTUFBa0JLLEVBQWxCLFVBQVNILE9BQVQ7QUFBQSwyQkFDcENGLEtBRG9DO0FBRXZDTixJQUFBQSxhQUFhLEVBQUVNLEtBQUssQ0FBQ04sYUFBTixDQUFvQjBDLE1BQXBCLENBQTJCLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNoQyxFQUFGLEtBQVNBLEVBQWI7QUFBQSxLQUE1QjtBQUZ3QjtBQUFBLENBQWxDO0FBS1A7Ozs7Ozs7Ozs7OztBQVFPLElBQU1pQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUF0QyxLQUFLO0FBQUEsMkJBQ2hDQSxLQURnQztBQUVuQ0wsSUFBQUEsU0FBUyxvQkFDSkssS0FBSyxDQUFDTCxTQURGO0FBRVAvQixNQUFBQSxXQUFXLEVBQUU7QUFGTjtBQUYwQjtBQUFBLENBQTlCO0FBUVA7Ozs7Ozs7Ozs7O0FBT08sSUFBTTJFLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQXZDLEtBQUs7QUFBQSwyQkFDdkNBLEtBRHVDO0FBRTFDTCxJQUFBQSxTQUFTLG9CQUNKSyxLQUFLLENBQUNMLFNBREY7QUFFUC9CLE1BQUFBLFdBQVcsRUFBRTtBQUZOO0FBRmlDO0FBQUEsQ0FBckM7QUFRUDs7Ozs7Ozs7Ozs7Ozs7QUFVTyxJQUFNNEUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDeEMsS0FBRDtBQUFBLE1BQVN0QyxLQUFULFVBQVNBLEtBQVQ7QUFBQSxTQUNqQ3dFLHNCQUFzQixtQkFFZmxDLEtBRmU7QUFHbEJMLElBQUFBLFNBQVMsb0JBQ0pLLEtBQUssQ0FBQ0wsU0FERjtBQUVQL0IsTUFBQUEsV0FBVyxFQUFFO0FBRk47QUFIUyxNQVFwQjtBQUNFc0MsSUFBQUEsT0FBTyxFQUFFLDJDQUFrQjtBQUN6QnVDLE1BQUFBLE9BQU8sRUFBRSxDQUFDL0UsS0FBSyxJQUFJLEVBQVYsRUFBYytFLE9BQWQsSUFBeUIsd0JBRFQ7QUFFekJDLE1BQUFBLEtBQUssRUFBRUMsNkNBQTRCQztBQUZWLEtBQWxCO0FBRFgsR0FSb0IsQ0FEVztBQUFBLENBQTVCO0FBaUJQOzs7Ozs7Ozs7Ozs7QUFRTyxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUE3QyxLQUFLO0FBQUEsMkJBQ3JDQSxLQURxQztBQUV4Q1AsSUFBQUEsV0FBVyxFQUFFcUQsTUFBTSxDQUFDQyxPQUFQLENBQWUvQyxLQUFLLENBQUNQLFdBQXJCLEVBQWtDckQsTUFBbEMsQ0FDWCxVQUFDNEcsR0FBRCxFQUFNQyxLQUFOO0FBQUEsK0JBQ0tELEdBREwsdUNBRUdDLEtBQUssQ0FBQyxDQUFELENBRlIsb0JBR09BLEtBQUssQ0FBQyxDQUFELENBSFo7QUFJSS9HLFFBQUFBLGNBQWMsRUFBRTtBQUpwQjtBQUFBLEtBRFcsRUFRWCxFQVJXO0FBRjJCO0FBQUEsQ0FBbkM7QUFjUDs7Ozs7Ozs7Ozs7Ozs7O0FBV08sSUFBTWdILGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ2xELEtBQUQ7QUFBQSxNQUFtQkosTUFBbkIsVUFBU00sT0FBVCxDQUFtQk4sTUFBbkI7QUFBQSwyQkFDM0JJLEtBRDJCO0FBRTlCSixJQUFBQSxNQUFNLEVBQU5BO0FBRjhCO0FBQUEsQ0FBekI7QUFLUDs7Ozs7Ozs7Ozs7O0FBUU8sSUFBTXVELGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ25ELEtBQUQsVUFBZ0M7QUFBQSxNQUFkb0QsUUFBYyxVQUF2QmxELE9BQXVCO0FBQzlELFNBQU8sK0JBQVMsQ0FDZGtCLHlCQURjLEVBRWQsNkJBQU9OLDRCQUFQLEVBQXFDLCtCQUFTO0FBQUN0RCxJQUFBQSxTQUFTLEVBQUU7QUFBWixHQUFULENBQXJDLENBRmMsRUFHZCw2QkFBTzhDLGtCQUFQLEVBQTJCLCtCQUFTOEMsUUFBUSxHQUFHQyxpQ0FBSCxHQUFzQkMsNEJBQXZDLENBQTNCLENBSGMsQ0FBVCxFQUlKdEQsS0FKSSxDQUFQO0FBS0QsQ0FOTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge1xuICBBRERfREFUQV9JRCxcbiAgREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTLFxuICBERUxFVEVfREFUQV9JRCxcbiAgRVhQT1JUX0RBVEFfVFlQRSxcbiAgRVhQT1JUX0hUTUxfTUFQX01PREVTLFxuICBFWFBPUlRfSU1HX1JBVElPUyxcbiAgRVhQT1JUX01BUF9GT1JNQVRTLFxuICBSRVNPTFVUSU9OU1xufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge0xPQ0FMRV9DT0RFU30gZnJvbSAnbG9jYWxpemF0aW9uL2xvY2FsZXMnO1xuaW1wb3J0IHtjcmVhdGVOb3RpZmljYXRpb24sIGVycm9yTm90aWZpY2F0aW9ufSBmcm9tICd1dGlscy9ub3RpZmljYXRpb25zLXV0aWxzJztcbmltcG9ydCB7Y2FsY3VsYXRlRXhwb3J0SW1hZ2VTaXplfSBmcm9tICd1dGlscy9leHBvcnQtdXRpbHMnO1xuaW1wb3J0IHtwYXlsb2FkXywgYXBwbHlfLCBjb21wb3NlX30gZnJvbSAnLi9jb21wb3Nlci1oZWxwZXJzJztcbmltcG9ydCB7RVhQT1JUX0lNQUdFX0lEfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtPVkVSV1JJVEVfTUFQX0lELCBTQVZFX01BUF9JRH0gZnJvbSAnLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9BQ1RJVkVfU0lERV9QQU5FTCA9ICdsYXllcic7XG5leHBvcnQgY29uc3QgREVGQVVMVF9NT0RBTCA9IEFERF9EQVRBX0lEO1xuXG4vKipcbiAqIFVwZGF0ZXJzIGZvciBgdWlTdGF0ZWAgcmVkdWNlci4gQ2FuIGJlIHVzZWQgaW4geW91ciByb290IHJlZHVjZXIgdG8gZGlyZWN0bHkgbW9kaWZ5IGtlcGxlci5nbCdzIHN0YXRlLlxuICogUmVhZCBtb3JlIGFib3V0IFtVc2luZyB1cGRhdGVyc10oLi4vYWR2YW5jZWQtdXNhZ2UvdXNpbmctdXBkYXRlcnMubWQpXG4gKlxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqXG4gKiBpbXBvcnQga2VwbGVyR2xSZWR1Y2VyLCB7dWlTdGF0ZVVwZGF0ZXJzfSBmcm9tICdrZXBsZXIuZ2wvcmVkdWNlcnMnO1xuICogLy8gUm9vdCBSZWR1Y2VyXG4gKiBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gKiAga2VwbGVyR2w6IGtlcGxlckdsUmVkdWNlcixcbiAqICBhcHA6IGFwcFJlZHVjZXJcbiAqIH0pO1xuICpcbiAqIGNvbnN0IGNvbXBvc2VkUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gKiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICogICAgLy8gY2xpY2sgYnV0dG9uIHRvIGNsb3NlIHNpZGUgcGFuZWxcbiAqICAgIGNhc2UgJ0NMSUNLX0JVVFRPTic6XG4gKiAgICAgIHJldHVybiB7XG4gKiAgICAgICAgLi4uc3RhdGUsXG4gKiAgICAgICAga2VwbGVyR2w6IHtcbiAqICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLFxuICogICAgICAgICAgZm9vOiB7XG4gKiAgICAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbC5mb28sXG4gKiAgICAgICAgICAgICB1aVN0YXRlOiB1aVN0YXRlVXBkYXRlcnMudG9nZ2xlU2lkZVBhbmVsVXBkYXRlcihcbiAqICAgICAgICAgICAgICAgdWlTdGF0ZSwge3BheWxvYWQ6IG51bGx9XG4gKiAgICAgICAgICAgICApXG4gKiAgICAgICAgICB9XG4gKiAgICAgICAgfVxuICogICAgICB9O1xuICogIH1cbiAqICByZXR1cm4gcmVkdWNlcnMoc3RhdGUsIGFjdGlvbik7XG4gKiB9O1xuICpcbiAqIGV4cG9ydCBkZWZhdWx0IGNvbXBvc2VkUmVkdWNlcjtcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmNvbnN0IHVpU3RhdGVVcGRhdGVycyA9IG51bGw7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbmNvbnN0IERFRkFVTFRfTUFQX0NPTlRST0xTX0ZFQVRVUkVTID0ge1xuICBzaG93OiB0cnVlLFxuICBhY3RpdmU6IGZhbHNlLFxuICAvLyBkZWZpbmVzIHdoaWNoIG1hcCBpbmRleCB1c2VycyBhcmUgaW50ZXJhY3Rpbmcgd2l0aCAodGhyb3VnaCBtYXAgY29udHJvbHMpXG4gIGFjdGl2ZU1hcEluZGV4OiAwXG59O1xuXG4vKipcbiAqIEEgbGlzdCBvZiBtYXAgY29udHJvbCB2aXNpYmlsaXR5IGFuZCB3aGV0aGVyIGlzIGl0IGFjdGl2ZS5cbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBjb25zdGFudFxuICogQHByb3BlcnR5IHZpc2libGVMYXllcnMgRGVmYXVsdDogYHtzaG93OiB0cnVlLCBhY3RpdmU6IGZhbHNlfWBcbiAqIEBwcm9wZXJ0eSBtYXBMZWdlbmQgRGVmYXVsdDogYHtzaG93OiB0cnVlLCBhY3RpdmU6IGZhbHNlfWBcbiAqIEBwcm9wZXJ0eSB0b2dnbGUzZCBEZWZhdWx0OiBge3Nob3c6IHRydWV9YFxuICogQHByb3BlcnR5IHNwbGl0TWFwIERlZmF1bHQ6IGB7c2hvdzogdHJ1ZX1gXG4gKiBAcHJvcGVydHkgbWFwRHJhdyBEZWZhdWx0OiBge3Nob3c6IHRydWUsIGFjdGl2ZTogZmFsc2V9YFxuICogQHByb3BlcnR5IG1hcExvY2FsZSBEZWZhdWx0OiBge3Nob3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlfWBcbiAqIEB0eXBlIHtpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5NYXBDb250cm9sc31cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFQX0NPTlRST0xTID0gW1xuICAndmlzaWJsZUxheWVycycsXG4gICdtYXBMZWdlbmQnLFxuICAndG9nZ2xlM2QnLFxuICAnc3BsaXRNYXAnLFxuICAnbWFwRHJhdycsXG4gICdtYXBMb2NhbGUnXG5dLnJlZHVjZShcbiAgKGZpbmFsLCBjdXJyZW50KSA9PiAoe1xuICAgIC4uLmZpbmFsLFxuICAgIFtjdXJyZW50XTogREVGQVVMVF9NQVBfQ09OVFJPTFNfRkVBVFVSRVNcbiAgfSksXG4gIHt9XG4pO1xuXG4vKipcbiAqIERlZmF1bHQgaW1hZ2UgZXhwb3J0IGNvbmZpZ1xuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQGNvbnN0YW50XG4gKiBAcHJvcGVydHkgcmF0aW8gRGVmYXVsdDogYCdTQ1JFRU4nYCxcbiAqIEBwcm9wZXJ0eSByZXNvbHV0aW9uIERlZmF1bHQ6IGAnT05FX1gnYCxcbiAqIEBwcm9wZXJ0eSBsZWdlbmQgRGVmYXVsdDogYGZhbHNlYCxcbiAqIEBwcm9wZXJ0eSBtYXBIIERlZmF1bHQ6IDAsXG4gKiBAcHJvcGVydHkgbWFwVyBEZWZhdWx0OiAwLFxuICogQHByb3BlcnR5IGltYWdlU2l6ZSBEZWZhdWx0OiB7em9vbU9mZnNldDogMCwgc2NhbGU6IDEsIGltYWdlVzogMCwgaW1hZ2VIOiAwfSxcbiAqIEBwcm9wZXJ0eSBpbWFnZURhdGFVcmkgRGVmYXVsdDogYCcnYCxcbiAqIEBwcm9wZXJ0eSBleHBvcnRpbmcgRGVmYXVsdDogYGZhbHNlYFxuICogQHByb3BlcnR5IGVycm9yIERlZmF1bHQ6IGBmYWxzZWBcbiAqIEB0eXBlIHtpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5FeHBvcnRJbWFnZX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX0lNQUdFID0ge1xuICAvLyB1c2VyIG9wdGlvbnNcbiAgcmF0aW86IEVYUE9SVF9JTUdfUkFUSU9TLlNDUkVFTixcbiAgcmVzb2x1dGlvbjogUkVTT0xVVElPTlMuT05FX1gsXG4gIGxlZ2VuZDogZmFsc2UsXG4gIG1hcEg6IDAsXG4gIG1hcFc6IDAsXG4gIGltYWdlU2l6ZToge1xuICAgIHpvb21PZmZzZXQ6IDAsXG4gICAgc2NhbGU6IDEsXG4gICAgaW1hZ2VXOiAwLFxuICAgIGltYWdlSDogMFxuICB9LFxuICAvLyB3aGVuIHRoaXMgaXMgc2V0IHRvIHRydWUsIHRoZSBtb2NrIG1hcCB2aWV3cG9ydCB3aWxsIG1vdmUgdG8gdGhlIGNlbnRlciBvZiBkYXRhXG4gIGNlbnRlcjogZmFsc2UsXG4gIC8vIGV4cG9ydGluZyBzdGF0ZVxuICBpbWFnZURhdGFVcmk6ICcnLFxuICAvLyBleHBvcnRpbmc6IHVzZWQgdG8gYXR0YWNoIHBsb3QtY29udGFpbmVyIHRvIGRvbVxuICBleHBvcnRpbmc6IGZhbHNlLFxuICAvLyBwcm9jZXNzaW5nOiB1c2VkIGFzIGxvYWRpbmcgaW5kaWNhdG9yIHdoZW4gZXhwb3J0IGltYWdlIGlzIGJlaW5nIHByb2R1Y2VkXG4gIHByb2Nlc3Npbmc6IGZhbHNlLFxuICBlcnJvcjogZmFsc2Vcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0xPQURfRklMRVMgPSB7XG4gIGZpbGVMb2FkaW5nOiBmYWxzZVxufTtcblxuLyoqXG4gKiBEZWZhdWx0IGluaXRpYWwgYGV4cG9ydERhdGFgIHNldHRpbmdzXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAY29uc3RhbnRcbiAqIEBwcm9wZXJ0eSBzZWxlY3RlZERhdGFzZXQgRGVmYXVsdDogYCcnYCxcbiAqIEBwcm9wZXJ0eSBkYXRhVHlwZSBEZWZhdWx0OiBgJ2NzdidgLFxuICogQHByb3BlcnR5IGZpbHRlcmVkIERlZmF1bHQ6IGB0cnVlYCxcbiAqIEB0eXBlIHtpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5FeHBvcnREYXRhfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9FWFBPUlRfREFUQSA9IHtcbiAgc2VsZWN0ZWREYXRhc2V0OiAnJyxcbiAgZGF0YVR5cGU6IEVYUE9SVF9EQVRBX1RZUEUuQ1NWLFxuICBmaWx0ZXJlZDogdHJ1ZVxufTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTk9USUZJQ0FUSU9OUyA9IFtdO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQHByb3BlcnR5IGV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuIC0gRGVmYXVsdDogbnVsbCwgdGhpcyBpcyB1c2VkIHdoZW4gd2UgcHJvdmlkZSBhIGRlZmF1bHQgbWFwYm94IHRva2VuIGZvciB1c2VycyB0byB0YWtlIGFkdmFudGFnZSBvZlxuICogQHByb3BlcnR5IHVzZXJNYXBib3hUb2tlbiAtIERlZmF1bHQ6ICcnLCBtYXBib3ggdG9rZW4gcHJvdmlkZWQgYnkgdXNlciB0aHJvdWdoIGlucHV0IGZpZWxkXG4gKiBAcHJvcGVydHkgbW9kZSAtIERlZmF1bHQ6ICdSRUFEJywgcmVhZCBvbmx5IG9yIGVkaXRhYmxlXG4gKiBAdHlwZSB7aW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuRXhwb3J0SHRtbH1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX0hUTUwgPSB7XG4gIGV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuOiBudWxsLFxuICB1c2VyTWFwYm94VG9rZW46ICcnLFxuICBtb2RlOiBFWFBPUlRfSFRNTF9NQVBfTU9ERVMuUkVBRFxufTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBwcm9wZXJ0eSBoYXNEYXRhIC0gRGVmYXVsdDogJ3RydWUnLFxuICogQHR5cGUge2ltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLkV4cG9ydEpzb259XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VYUE9SVF9KU09OID0ge1xuICBoYXNEYXRhOiB0cnVlXG59O1xuXG4vKipcbiAqIEV4cG9ydCBNYXAgQ29uZmlnXG4gKiBAY29uc3RhbnRcbiAqIEBwcm9wZXJ0eSBIVE1MIC0gRGVmYXVsdDogJ0RFRkFVTFRfRVhQT1JUX0hUTUwnLFxuICogQHByb3BlcnR5IEpTT04gLSBEZWZhdWx0OiAnREVGQVVMVF9FWFBPUlRfSlNPTicsXG4gKiBAcHJvcGVydHkgZm9ybWF0IC0gRGVmYXVsdDogJ0hUTUwnLFxuICogQHR5cGUge2ltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLkV4cG9ydE1hcH1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX01BUCA9IHtcbiAgW0VYUE9SVF9NQVBfRk9STUFUUy5IVE1MXTogREVGQVVMVF9FWFBPUlRfSFRNTCxcbiAgW0VYUE9SVF9NQVBfRk9STUFUUy5KU09OXTogREVGQVVMVF9FWFBPUlRfSlNPTixcbiAgZm9ybWF0OiBFWFBPUlRfTUFQX0ZPUk1BVFMuSFRNTFxufTtcblxuLyoqXG4gKiBEZWZhdWx0IGluaXRpYWwgYHVpU3RhdGVgXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAY29uc3RhbnRcbiAqIEBwcm9wZXJ0eSByZWFkT25seSBEZWZhdWx0OiBgZmFsc2VgXG4gKiBAcHJvcGVydHkgYWN0aXZlU2lkZVBhbmVsIERlZmF1bHQ6IGAnbGF5ZXInYFxuICogQHByb3BlcnR5IGN1cnJlbnRNb2RhbCBEZWZhdWx0OiBgJ2FkZERhdGEnYFxuICogQHByb3BlcnR5IGRhdGFzZXRLZXlUb1JlbW92ZSBEZWZhdWx0OiBgbnVsbGBcbiAqIEBwcm9wZXJ0eSB2aXNpYmxlRHJvcGRvd24gRGVmYXVsdDogYG51bGxgXG4gKiBAcHJvcGVydHkgZXhwb3J0SW1hZ2UgRGVmYXVsdDogW2BERUZBVUxUX0VYUE9SVF9JTUFHRWBdKCNkZWZhdWx0X2V4cG9ydF9pbWFnZSlcbiAqIEBwcm9wZXJ0eSBleHBvcnREYXRhIERlZmF1bHQ6IFtgREVGQVVMVF9FWFBPUlRfREFUQWBdKCNkZWZhdWx0X2V4cG9ydF9kYXRhKVxuICogQHByb3BlcnR5IGV4cG9ydE1hcCBEZWZhdWx0OiBbYERFRkFVTFRfRVhQT1JUX01BUGBdKCNkZWZhdWx0X2V4cG9ydF9tYXApXG4gKiBAcHJvcGVydHkgbWFwQ29udHJvbHMgRGVmYXVsdDogW2BERUZBVUxUX01BUF9DT05UUk9MU2BdKCNkZWZhdWx0X21hcF9jb250cm9scylcbiAqIEBwcm9wZXJ0eSBub3RpZmljYXRpb25zIERlZmF1bHQ6IGBbXWBcbiAqIEBwcm9wZXJ0eSBub3RpZmljYXRpb25zIERlZmF1bHQ6IGBbXWBcbiAqIEBwcm9wZXJ0eSBsb2FkRmlsZXNcbiAqIEB0eXBlIHtpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5VaVN0YXRlfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgSU5JVElBTF9VSV9TVEFURSA9IHtcbiAgcmVhZE9ubHk6IGZhbHNlLFxuICBhY3RpdmVTaWRlUGFuZWw6IERFRkFVTFRfQUNUSVZFX1NJREVfUEFORUwsXG4gIGN1cnJlbnRNb2RhbDogREVGQVVMVF9NT0RBTCxcbiAgZGF0YXNldEtleVRvUmVtb3ZlOiBudWxsLFxuICB2aXNpYmxlRHJvcGRvd246IG51bGwsXG4gIC8vIGV4cG9ydCBpbWFnZSBtb2RhbCB1aVxuICBleHBvcnRJbWFnZTogREVGQVVMVF9FWFBPUlRfSU1BR0UsXG4gIC8vIGV4cG9ydCBkYXRhIG1vZGFsIHVpXG4gIGV4cG9ydERhdGE6IERFRkFVTFRfRVhQT1JUX0RBVEEsXG4gIC8vIGh0bWwgZXhwb3J0XG4gIGV4cG9ydE1hcDogREVGQVVMVF9FWFBPUlRfTUFQLFxuICAvLyBtYXAgY29udHJvbCBwYW5lbHNcbiAgbWFwQ29udHJvbHM6IERFRkFVTFRfTUFQX0NPTlRST0xTLFxuICAvLyB1aSBub3RpZmljYXRpb25zXG4gIG5vdGlmaWNhdGlvbnM6IERFRkFVTFRfTk9USUZJQ0FUSU9OUyxcbiAgLy8gbG9hZCBmaWxlc1xuICBsb2FkRmlsZXM6IERFRkFVTFRfTE9BRF9GSUxFUyxcbiAgLy8gTG9jYWxlIG9mIHRoZSBVSVxuICBsb2NhbGU6IExPQ0FMRV9DT0RFUy5lblxufTtcblxuLyogVXBkYXRlcnMgKi9cbi8qKlxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuXG4gKi9cbmV4cG9ydCBjb25zdCBpbml0VWlTdGF0ZVVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIC4uLihhY3Rpb24ucGF5bG9hZCB8fCB7fSkuaW5pdGlhbFVpU3RhdGVcbn0pO1xuXG4vKipcbiAqIFRvZ2dsZSBhY3RpdmUgc2lkZSBwYW5lbFxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHN0YXRlIGB1aVN0YXRlYFxuICogQHBhcmFtIGFjdGlvblxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkIGlkIG9mIHNpZGUgcGFuZWwgdG8gYmUgc2hvd24sIG9uZSBvZiBgbGF5ZXJgLCBgZmlsdGVyYCwgYGludGVyYWN0aW9uYCwgYG1hcGAuIGNsb3NlIHNpZGUgcGFuZWwgaWYgYG51bGxgXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlU2lkZVBhbmVsVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVNpZGVQYW5lbFVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBpZH0pID0+IHtcbiAgcmV0dXJuIGlkID09PSBzdGF0ZS5hY3RpdmVTaWRlUGFuZWxcbiAgICA/IHN0YXRlXG4gICAgOiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhY3RpdmVTaWRlUGFuZWw6IGlkXG4gICAgICB9O1xufTtcblxuLyoqXG4gKiBTaG93IGFuZCBoaWRlIG1vZGFsIGRpYWxvZ1xuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHN0YXRlIGB1aVN0YXRlYFxuICogQHBhcmFtIGFjdGlvblxuICogQHBhcmFtYWN0aW9uLnBheWxvYWQgaWQgb2YgbW9kYWwgdG8gYmUgc2hvd24sIG51bGwgdG8gaGlkZSBtb2RhbHMuIE9uZSBvZjpcbiAqICAtIFtgREFUQV9UQUJMRV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2RhdGFfdGFibGVfaWQpXG4gKiAgLSBbYERFTEVURV9EQVRBX0lEYF0oLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MubWQjZGVsZXRlX2RhdGFfaWQpXG4gKiAgLSBbYEFERF9EQVRBX0lEYF0oLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MubWQjYWRkX2RhdGFfaWQpXG4gKiAgLSBbYEVYUE9SVF9JTUFHRV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2V4cG9ydF9pbWFnZV9pZClcbiAqICAtIFtgRVhQT1JUX0RBVEFfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNleHBvcnRfZGF0YV9pZClcbiAqICAtIFtgQUREX01BUF9TVFlMRV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2FkZF9tYXBfc3R5bGVfaWQpXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlTW9kYWxVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlTW9kYWxVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogaWR9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgY3VycmVudE1vZGFsOiBpZFxufSk7XG5cbi8qKlxuICogSGlkZSBhbmQgc2hvdyBzaWRlIHBhbmVsIGhlYWRlciBkcm9wZG93biwgYWN0aXZhdGVkIGJ5IGNsaWNraW5nIHRoZSBzaGFyZSBsaW5rIG9uIHRvcCBvZiB0aGUgc2lkZSBwYW5lbFxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5zaG93RXhwb3J0RHJvcGRvd25VcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2hvd0V4cG9ydERyb3Bkb3duVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IGlkfSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIHZpc2libGVEcm9wZG93bjogaWRcbn0pO1xuXG4vKipcbiAqIEhpZGUgc2lkZSBwYW5lbCBoZWFkZXIgZHJvcGRvd24sIGFjdGl2YXRlZCBieSBjbGlja2luZyB0aGUgc2hhcmUgbGluayBvbiB0b3Agb2YgdGhlIHNpZGUgcGFuZWxcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuaGlkZUV4cG9ydERyb3Bkb3duVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGhpZGVFeHBvcnREcm9wZG93blVwZGF0ZXIgPSBzdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgdmlzaWJsZURyb3Bkb3duOiBudWxsXG59KTtcblxuLyoqXG4gKiBUb2dnbGUgYWN0aXZlIG1hcCBjb250cm9sIHBhbmVsXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkIG1hcCBjb250cm9sIHBhbmVsIGlkLCBvbmUgb2YgdGhlIGtleXMgb2Y6IFtgREVGQVVMVF9NQVBfQ09OVFJPTFNgXSgjZGVmYXVsdF9tYXBfY29udHJvbHMpXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlTWFwQ29udHJvbFVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVNYXBDb250cm9sVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IHtwYW5lbElkLCBpbmRleCA9IDB9fSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIG1hcENvbnRyb2xzOiB7XG4gICAgLi4uc3RhdGUubWFwQ29udHJvbHMsXG4gICAgW3BhbmVsSWRdOiB7XG4gICAgICAuLi5zdGF0ZS5tYXBDb250cm9sc1twYW5lbElkXSxcbiAgICAgIC8vIHRoaXMgaGFuZGxlcyBzcGxpdCBtYXAgaW50ZXJhY3Rpb25cbiAgICAgIC8vIFRvZ2dsaW5nIGZyb20gd2l0aGluIHRoZSBzYW1lIG1hcCB3aWxsIHNpbXBseSB0b2dnbGUgdGhlIGFjdGl2ZSBwcm9wZXJ0eVxuICAgICAgLy8gVG9nZ2xpbmcgZnJvbSB3aXRoaW4gZGlmZmVyZW50IG1hcHMgd2Ugc2V0IHRoZSBhY3RpdmUgcHJvcGVydHkgdG8gdHJ1ZVxuICAgICAgYWN0aXZlOlxuICAgICAgICBpbmRleCA9PT0gc3RhdGUubWFwQ29udHJvbHNbcGFuZWxJZF0uYWN0aXZlTWFwSW5kZXhcbiAgICAgICAgICA/ICFzdGF0ZS5tYXBDb250cm9sc1twYW5lbElkXS5hY3RpdmVcbiAgICAgICAgICA6IHRydWUsXG4gICAgICBhY3RpdmVNYXBJbmRleDogaW5kZXhcbiAgICB9XG4gIH1cbn0pO1xuXG4vKipcbiAqIFRvZ2dsZSBhY3RpdmUgbWFwIGNvbnRyb2wgcGFuZWxcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSBhY3Rpb25cbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZCBkYXRhc2V0IGlkXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykub3BlbkRlbGV0ZU1vZGFsVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IG9wZW5EZWxldGVNb2RhbFVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBkYXRhc2V0S2V5VG9SZW1vdmV9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgY3VycmVudE1vZGFsOiBERUxFVEVfREFUQV9JRCxcbiAgZGF0YXNldEtleVRvUmVtb3ZlXG59KTtcblxuLyoqXG4gKiBTZXQgYGV4cG9ydEltYWdlLmxlZ2VuZGAgdG8gYHRydWVgIG9yIGBmYWxzZWBcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5zZXRFeHBvcnRJbWFnZVNldHRpbmdVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0SW1hZ2VTZXR0aW5nVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IG5ld1NldHRpbmd9KSA9PiB7XG4gIGNvbnN0IHVwZGF0ZWQgPSB7Li4uc3RhdGUuZXhwb3J0SW1hZ2UsIC4uLm5ld1NldHRpbmd9O1xuICBjb25zdCBpbWFnZVNpemUgPSBjYWxjdWxhdGVFeHBvcnRJbWFnZVNpemUodXBkYXRlZCkgfHwgc3RhdGUuZXhwb3J0SW1hZ2UuaW1hZ2VTaXplO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZXhwb3J0SW1hZ2U6IHtcbiAgICAgIC4uLnVwZGF0ZWQsXG4gICAgICBpbWFnZVNpemVcbiAgICB9XG4gIH07XG59O1xuXG4vKipcbiAqIFNldCBgZXhwb3J0SW1hZ2Uuc2V0RXhwb3J0SW1hZ2VEYXRhVXJpYCB0byBhIGltYWdlIGRhdGFVcmlcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSBhY3Rpb25cbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZCBleHBvcnQgaW1hZ2UgZGF0YSB1cmlcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5zZXRFeHBvcnRJbWFnZURhdGFVcmlVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0SW1hZ2VEYXRhVXJpVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IGRhdGFVcml9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0SW1hZ2U6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnRJbWFnZSxcbiAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICBpbWFnZURhdGFVcmk6IGRhdGFVcmlcbiAgfVxufSk7XG5cbi8qKlxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5zZXRFeHBvcnRJbWFnZUVycm9yVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEltYWdlRXJyb3JVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogZXJyb3J9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0SW1hZ2U6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnRJbWFnZSxcbiAgICBleHBvcnRpbmc6IGZhbHNlLFxuICAgIGVycm9yXG4gIH1cbn0pO1xuXG4vKipcbiAqIERlbGV0ZSBjYWNoZWQgZXhwb3J0IGltYWdlXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLmNsZWFudXBFeHBvcnRJbWFnZVVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBjbGVhbnVwRXhwb3J0SW1hZ2VVcGRhdGVyID0gc3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGV4cG9ydEltYWdlOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0SW1hZ2UsXG4gICAgZXhwb3J0aW5nOiBmYWxzZSxcbiAgICBpbWFnZURhdGFVcmk6ICcnLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICBjZW50ZXI6IGZhbHNlXG4gIH1cbn0pO1xuXG4vKipcbiAqIFN0YXJ0IGltYWdlIGV4cG9ydGluZyBmbG93XG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0gc3RhdGVcbiAqIEBwYXJhbSBvcHRpb25zXG4gKiBAcmV0dXJucyB7VWlTdGF0ZX1cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuc3RhcnRFeHBvcnRpbmdJbWFnZX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHN0YXJ0RXhwb3J0aW5nSW1hZ2VVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogb3B0aW9ucyA9IHt9fSkgPT4ge1xuICBjb25zdCBpbWFnZVNldHRpbmdzID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgZXhwb3J0aW5nOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIGNvbXBvc2VfKFtcbiAgICBjbGVhbnVwRXhwb3J0SW1hZ2VVcGRhdGVyLFxuICAgIGFwcGx5XyhzZXRFeHBvcnRJbWFnZVNldHRpbmdVcGRhdGVyLCBwYXlsb2FkXyhpbWFnZVNldHRpbmdzKSksXG4gICAgYXBwbHlfKHRvZ2dsZU1vZGFsVXBkYXRlciwgcGF5bG9hZF8oRVhQT1JUX0lNQUdFX0lEKSlcbiAgXSkoc3RhdGUpO1xufTtcblxuLyoqXG4gKiBTZXQgc2VsZWN0ZWQgZGF0YXNldCBmb3IgZXhwb3J0XG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0gYWN0aW9uXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWQgZGF0YXNldCBpZFxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLnNldEV4cG9ydFNlbGVjdGVkRGF0YXNldFVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRTZWxlY3RlZERhdGFzZXRVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogZGF0YXNldH0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnREYXRhOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0RGF0YSxcbiAgICBzZWxlY3RlZERhdGFzZXQ6IGRhdGFzZXRcbiAgfVxufSk7XG5cbi8qKlxuICogU2V0IGRhdGEgZm9ybWF0IGZvciBleHBvcnRpbmcgZGF0YVxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHN0YXRlIGB1aVN0YXRlYFxuICogQHBhcmFtIGFjdGlvblxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkIG9uZSBvZiBgJ3RleHQvY3N2J2BcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5zZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBkYXRhVHlwZX0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnREYXRhOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0RGF0YSxcbiAgICBkYXRhVHlwZVxuICB9XG59KTtcblxuLyoqXG4gKiBXaGV0aGVyIHRvIGV4cG9ydCBmaWx0ZXJlZCBkYXRhLCBgdHJ1ZWAgb3IgYGZhbHNlYFxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHN0YXRlIGB1aVN0YXRlYFxuICogQHBhcmFtIGFjdGlvblxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuc2V0RXhwb3J0RmlsdGVyZWRVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0RmlsdGVyZWRVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogZmlsdGVyZWR9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0RGF0YToge1xuICAgIC4uLnN0YXRlLmV4cG9ydERhdGEsXG4gICAgZmlsdGVyZWRcbiAgfVxufSk7XG5cbi8qKlxuICogV2hldGhlciB0byBpbmNsdWRpbmcgZGF0YSBpbiBtYXAgY29uZmlnLCB0b2dnbGUgYmV0d2VlbiBgdHJ1ZWAgb3IgYGZhbHNlYFxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHN0YXRlIGB1aVN0YXRlYFxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLnNldEV4cG9ydERhdGFVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0RGF0YVVwZGF0ZXIgPSBzdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0TWFwOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0TWFwLFxuICAgIFtFWFBPUlRfTUFQX0ZPUk1BVFMuSlNPTl06IHtcbiAgICAgIC4uLnN0YXRlLmV4cG9ydE1hcFtFWFBPUlRfTUFQX0ZPUk1BVFMuSlNPTl0sXG4gICAgICBoYXNEYXRhOiAhc3RhdGUuZXhwb3J0TWFwW0VYUE9SVF9NQVBfRk9STUFUUy5KU09OXS5oYXNEYXRhXG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiB3aGV0aGVyIHRvIGV4cG9ydCBhIG1hcGJveCBhY2Nlc3MgdG8gSFRNTCBzaW5nbGUgcGFnZVxuICogQHBhcmFtIHN0YXRlIC0gYHVpU3RhdGVgXG4gKiBAcGFyYW0gYWN0aW9uXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWRcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5zZXRVc2VyTWFwYm94QWNjZXNzVG9rZW5VcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0VXNlck1hcGJveEFjY2Vzc1Rva2VuVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IHVzZXJNYXBib3hUb2tlbn0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnRNYXA6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnRNYXAsXG4gICAgW0VYUE9SVF9NQVBfRk9STUFUUy5IVE1MXToge1xuICAgICAgLi4uc3RhdGUuZXhwb3J0TWFwW0VYUE9SVF9NQVBfRk9STUFUUy5IVE1MXSxcbiAgICAgIHVzZXJNYXBib3hUb2tlblxuICAgIH1cbiAgfVxufSk7XG5cbi8qKlxuICogU2V0cyB0aGUgZXhwb3J0IG1hcCBmb3JtYXRcbiAqIEBwYXJhbSBzdGF0ZSAtIGB1aVN0YXRlYFxuICogQHBhcmFtIGFjdGlvblxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkIGZvcm1hdCB0byB1c2UgdG8gZXhwb3J0IHRoZSBtYXAgaW50b1xuICogQHJldHVybiBuZXh0U3RhdGVcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuc2V0RXhwb3J0TWFwRm9ybWF0VXBkYXRlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNldEV4cG9ydE1hcEZvcm1hdFVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBmb3JtYXR9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0TWFwOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0TWFwLFxuICAgIGZvcm1hdFxuICB9XG59KTtcblxuLyoqXG4gKiBTZXQgdGhlIGV4cG9ydCBodG1sIG1hcCBtb2RlXG4gKiBAcGFyYW0gc3RhdGUgLSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSBhY3Rpb25cbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZCB0byBiZSBzZXQgKGF2YWlsYWJsZSBtb2RlczogRVhQT1JUX0hUTUxfTUFQX01PREVTKVxuICogQHJldHVybiBuZXh0U3RhdGVcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuc2V0RXhwb3J0TWFwSFRNTE1vZGVVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0TWFwSFRNTE1vZGVVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogbW9kZX0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnRNYXA6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnRNYXAsXG4gICAgW0VYUE9SVF9NQVBfRk9STUFUUy5IVE1MXToge1xuICAgICAgLi4uc3RhdGUuZXhwb3J0TWFwW0VYUE9SVF9NQVBfRk9STUFUUy5IVE1MXSxcbiAgICAgIG1vZGVcbiAgICB9XG4gIH1cbn0pO1xuXG4vKipcbiAqIEFkZCBhIG5vdGlmaWNhdGlvbiB0byBiZSBkaXNwbGF5ZWRcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSBhY3Rpb25cbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZFxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLmFkZE5vdGlmaWNhdGlvblVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBhZGROb3RpZmljYXRpb25VcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZH0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBub3RpZmljYXRpb25zOiBbLi4uKHN0YXRlLm5vdGlmaWNhdGlvbnMgfHwgW10pLCBjcmVhdGVOb3RpZmljYXRpb24ocGF5bG9hZCldXG59KTtcblxuLyoqXG4gKiBSZW1vdmUgYSBub3RpZmljYXRpb25cbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSBhY3Rpb25cbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZCBpZCBvZiB0aGUgbm90aWZpY2F0aW9uIHRvIGJlIHJlbW92ZWRcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5yZW1vdmVOb3RpZmljYXRpb25VcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlTm90aWZpY2F0aW9uVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IGlkfSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIG5vdGlmaWNhdGlvbnM6IHN0YXRlLm5vdGlmaWNhdGlvbnMuZmlsdGVyKG4gPT4gbi5pZCAhPT0gaWQpXG59KTtcblxuLyoqXG4gKiBGaXJlZCB3aGVuIGZpbGUgbG9hZGluZyBiZWdpblxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHN0YXRlIGB1aVN0YXRlYFxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLmxvYWRGaWxlc1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBsb2FkRmlsZXNVcGRhdGVyID0gc3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGxvYWRGaWxlczoge1xuICAgIC4uLnN0YXRlLmxvYWRGaWxlcyxcbiAgICBmaWxlTG9hZGluZzogdHJ1ZVxuICB9XG59KTtcblxuLyoqXG4gKiBIYW5kbGVzIGxvYWRpbmcgZmlsZSBzdWNjZXNzIGFuZCBzZXQgZmlsZUxvYWRpbmcgcHJvcGVydHkgdG8gZmFsc2VcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5sb2FkRmlsZXNTdWNjZXNzVXBkYXRlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGxvYWRGaWxlc1N1Y2Nlc3NVcGRhdGVyID0gc3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGxvYWRGaWxlczoge1xuICAgIC4uLnN0YXRlLmxvYWRGaWxlcyxcbiAgICBmaWxlTG9hZGluZzogZmFsc2VcbiAgfVxufSk7XG5cbi8qKlxuICogSGFuZGxlcyBsb2FkIGZpbGUgZXJyb3IgYW5kIHNldCBmaWxlTG9hZGluZyBwcm9wZXJ0eSB0byBmYWxzZVxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHN0YXRlXG4gKiBAcGFyYW0gYWN0aW9uXG4gKiBAcGFyYW0gYWN0aW9uLmVycm9yXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykubG9hZEZpbGVzRXJyVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGxvYWRGaWxlc0VyclVwZGF0ZXIgPSAoc3RhdGUsIHtlcnJvcn0pID0+XG4gIGFkZE5vdGlmaWNhdGlvblVwZGF0ZXIoXG4gICAge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBsb2FkRmlsZXM6IHtcbiAgICAgICAgLi4uc3RhdGUubG9hZEZpbGVzLFxuICAgICAgICBmaWxlTG9hZGluZzogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHBheWxvYWQ6IGVycm9yTm90aWZpY2F0aW9uKHtcbiAgICAgICAgbWVzc2FnZTogKGVycm9yIHx8IHt9KS5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gdXBsb2FkIGZpbGVzJyxcbiAgICAgICAgdG9waWM6IERFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUy5nbG9iYWxcbiAgICAgIH0pXG4gICAgfVxuICApO1xuXG4vKipcbiAqIEhhbmRsZXMgdG9nZ2xlIG1hcCBzcGxpdCBhbmQgcmVzZXQgYWxsIG1hcCBjb250cm9sIGluZGV4IHRvIDBcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZVxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLnRvZ2dsZVNwbGl0TWFwVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVNwbGl0TWFwVXBkYXRlciA9IHN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBtYXBDb250cm9sczogT2JqZWN0LmVudHJpZXMoc3RhdGUubWFwQ29udHJvbHMpLnJlZHVjZShcbiAgICAoYWNjLCBlbnRyeSkgPT4gKHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIFtlbnRyeVswXV06IHtcbiAgICAgICAgLi4uZW50cnlbMV0sXG4gICAgICAgIGFjdGl2ZU1hcEluZGV4OiAwXG4gICAgICB9XG4gICAgfSksXG4gICAge31cbiAgKVxufSk7XG5cbi8qKlxuICogU2V0IHRoZSBsb2NhbGUgb2YgdGhlIFVJXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0gYWN0aW9uXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWRcbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZC5sb2NhbGUgbG9jYWxlXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuc2V0TG9jYWxlVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldExvY2FsZVVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiB7bG9jYWxlfX0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBsb2NhbGVcbn0pO1xuXG4vKipcbiAqIFN0YXJ0IHNhdmluZyBzdG9yYWdlICBmbG93XG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0gc3RhdGVcbiAqIEBwYXJhbSBtYXBTYXZlZFxuICogQHJldHVybnMge1VpU3RhdGV9XG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLnN0YXJ0U2F2ZVN0b3JhZ2V9XG4gKi9cbmV4cG9ydCBjb25zdCBzdGFydFNhdmVTdG9yYWdlID0gKHN0YXRlLCB7cGF5bG9hZDogbWFwU2F2ZWR9KSA9PiB7XG4gIHJldHVybiBjb21wb3NlXyhbXG4gICAgY2xlYW51cEV4cG9ydEltYWdlVXBkYXRlcixcbiAgICBhcHBseV8oc2V0RXhwb3J0SW1hZ2VTZXR0aW5nVXBkYXRlciwgcGF5bG9hZF8oe2V4cG9ydGluZzogdHJ1ZX0pKSxcbiAgICBhcHBseV8odG9nZ2xlTW9kYWxVcGRhdGVyLCBwYXlsb2FkXyhtYXBTYXZlZCA/IE9WRVJXUklURV9NQVBfSUQgOiBTQVZFX01BUF9JRCkpXG4gIF0pKHN0YXRlKTtcbn07XG4iXX0=