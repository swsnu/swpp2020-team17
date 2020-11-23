"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = exports.setExportHTMLMapMode = exports.setExportMapFormat = exports.setUserMapboxAccessToken = exports.setExportData = exports.setExportFiltered = exports.setExportDataType = exports.setExportSelectedDataset = exports.startSaveStorage = exports.cleanupExportImage = exports.setExportImageError = exports.setExportImageDataUri = exports.startExportingImage = exports.setExportImageSetting = exports.removeNotification = exports.addNotification = exports.openDeleteModal = exports.toggleMapControl = exports.hideExportDropdown = exports.showExportDropdown = exports.toggleModal = exports.toggleSidePanel = void 0;

var _reduxActions = require("redux-actions");

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/**
 * Toggle active side panel
 * @memberof uiStateActions
 * @param id  id of side panel to be shown, one of `layer`, `filter`, `interaction`, `map`
 * @type {typeof import('./ui-state-actions').toggleSidePanel}
 * @public
 */
var toggleSidePanel = (0, _reduxActions.createAction)(_actionTypes["default"].TOGGLE_SIDE_PANEL, function (id) {
  return id;
});
/**
 * Show and hide modal dialog
 * @memberof uiStateActions
 * @param id - id of modal to be shown, null to hide modals. One of:
 *  - [`DATA_TABLE_ID`](../constants/default-settings.md#data_table_id)
 *  - [`DELETE_DATA_ID`](../constants/default-settings.md#delete_data_id)
 *  - [`ADD_DATA_ID`](../constants/default-settings.md#add_data_id)
 *  - [`EXPORT_IMAGE_ID`](../constants/default-settings.md#export_image_id)
 *  - [`EXPORT_DATA_ID`](../constants/default-settings.md#export_data_id)
 *  - [`ADD_MAP_STYLE_ID`](../constants/default-settings.md#add_map_style_id)
 * @type {typeof import('./ui-state-actions').toggleModal}
 * @public
 */

exports.toggleSidePanel = toggleSidePanel;
var toggleModal = (0, _reduxActions.createAction)(_actionTypes["default"].TOGGLE_MODAL, function (id) {
  return id;
});
/**
 * Hide and show side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateActions
 * @param id - id of the dropdown
 * @type {typeof import('./ui-state-actions').showExportDropdown}
 * @public
 */

exports.toggleModal = toggleModal;
var showExportDropdown = (0, _reduxActions.createAction)(_actionTypes["default"].SHOW_EXPORT_DROPDOWN, function (id) {
  return id;
});
/**
 * Hide side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateActions
 * @type {typeof import('./ui-state-actions').hideExportDropdown}
 * @public
 */

exports.showExportDropdown = showExportDropdown;
var hideExportDropdown = (0, _reduxActions.createAction)(_actionTypes["default"].HIDE_EXPORT_DROPDOWN);
/**
 * Toggle active map control panel
 * @memberof uiStateActions
 * @param panelId - map control panel id, one of the keys of: [`DEFAULT_MAP_CONTROLS`](#default_map_controls)
 * @type {typeof import('./ui-state-actions').toggleMapControl}
 * @public
 */

exports.hideExportDropdown = hideExportDropdown;
var toggleMapControl = (0, _reduxActions.createAction)(_actionTypes["default"].TOGGLE_MAP_CONTROL, function (panelId, index) {
  return {
    panelId: panelId,
    index: index
  };
});
/**
 * Toggle active map control panel
 * @memberof uiStateActions
 * @param datasetId - `id` of the dataset to be deleted
 * @type {typeof import('./ui-state-actions').openDeleteModal}
 * @public
 */

exports.toggleMapControl = toggleMapControl;
var openDeleteModal = (0, _reduxActions.createAction)(_actionTypes["default"].OPEN_DELETE_MODAL, function (datasetId) {
  return datasetId;
});
/**
 * Add a notification to be displayed
 * @memberof uiStateActions
 * @param notification - The `notification` object to be added
 * @type {typeof import('./ui-state-actions').addNotification}
 * @public
 */

exports.openDeleteModal = openDeleteModal;
var addNotification = (0, _reduxActions.createAction)(_actionTypes["default"].ADD_NOTIFICATION, function (notification) {
  return notification;
});
/**
 * Remove a notification
 * @memberof uiStateActions
 * @param id - `id` of the notification to be removed
 * @type {typeof import('./ui-state-actions').removeNotification}
 * @public
 */

exports.addNotification = addNotification;
var removeNotification = (0, _reduxActions.createAction)(_actionTypes["default"].REMOVE_NOTIFICATION, function (id) {
  return id;
});
/**
 * Set `exportImage` settings: ratio, resolution, legend
 * @memberof uiStateActions
 * @param newSetting - {ratio: '1x'}
 * @type {typeof import('./ui-state-actions').setExportImageSetting}
 * @public
 */

exports.removeNotification = removeNotification;
var setExportImageSetting = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_IMAGE_SETTING, function (newSetting) {
  return newSetting;
});
/**
 * Start exporting image flow
 * @memberof uiStateActions
 * @type {typeof import('./ui-state-actions').startExportingImage}
 * @public
 */

exports.setExportImageSetting = setExportImageSetting;
var startExportingImage = (0, _reduxActions.createAction)(_actionTypes["default"].START_EXPORTING_IMAGE);
/**
 * Set `exportImage.setExportImageDataUri` to a dataUri
 * @memberof uiStateActions
 * @param dataUri - export image data uri
 * @type {typeof import('./ui-state-actions').setExportImageDataUri}
 * @public
 */

exports.startExportingImage = startExportingImage;
var setExportImageDataUri = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_IMAGE_DATA_URI, function (dataUri) {
  return dataUri;
});
/**
 * Set Export image error
 * @memberof uiStateActions
 * @type {typeof import('./ui-state-actions').setExportImageError}
 * @public
 */

exports.setExportImageDataUri = setExportImageDataUri;
var setExportImageError = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_IMAGE_ERROR, function (error) {
  return error;
});
/**
 * Delete cached export image
 * @memberof uiStateActions
 * @type {typeof import('./ui-state-actions').cleanupExportImage}
 * @public
 */

exports.setExportImageError = setExportImageError;
var cleanupExportImage = (0, _reduxActions.createAction)(_actionTypes["default"].CLEANUP_EXPORT_IMAGE);
/**
 * Start saving storage flow
 * @memberof uiStateActions
 * @type {typeof import('./ui-state-actions').startSaveStorage}
 */

exports.cleanupExportImage = cleanupExportImage;
var startSaveStorage = (0, _reduxActions.createAction)(_actionTypes["default"].START_SAVE_STORAGE);
/**
 * Set selected dataset for export
 * @memberof uiStateActions
 * @param datasetId - dataset id
 * @type {typeof import('./ui-state-actions').setExportSelectedDataset}
 * @public
 */

exports.startSaveStorage = startSaveStorage;
var setExportSelectedDataset = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_SELECTED_DATASET, function (datasetId) {
  return datasetId;
});
/**
 * Set data format for exporting data
 * @memberof uiStateActions
 * @param dataType - one of `'text/csv'`
 * @type {typeof import('./ui-state-actions').setExportDataType}
 * @public
 */

exports.setExportSelectedDataset = setExportSelectedDataset;
var setExportDataType = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_DATA_TYPE, function (dataType) {
  return dataType;
});
/**
 * Whether to export filtered data, `true` or `false`
 * @memberof uiStateActions
 * @param payload - set `true` to ony export filtered data
 * @type {typeof import('./ui-state-actions').setExportFiltered}
 * @public
 */

exports.setExportDataType = setExportDataType;
var setExportFiltered = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_FILTERED, function (payload) {
  return payload;
});
/**
 * Whether to including data in map config, toggle between `true` or `false`
 * @memberof uiStateActions
 * @type {typeof import('./ui-state-actions').setExportData}
 * @public
 */

exports.setExportFiltered = setExportFiltered;
var setExportData = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_DATA);
/**
 * Whether we export a mapbox access token used to create a single map html file
 * @memberof uiStateActions
 * @param payload - mapbox access token
 * @type {typeof import('./ui-state-actions').setUserMapboxAccessToken}
 * @public
 */

exports.setExportData = setExportData;
var setUserMapboxAccessToken = (0, _reduxActions.createAction)(_actionTypes["default"].SET_USER_MAPBOX_ACCESS_TOKEN, function (payload) {
  return payload;
});
/**
 * Set the export map format (html, json)
 * @memberOf uiStateActions
 * @param payload - map format
 * @type {typeof import('./ui-state-actions').setExportMapFormat}
 * @public
 */

exports.setUserMapboxAccessToken = setUserMapboxAccessToken;
var setExportMapFormat = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_MAP_FORMAT, function (payload) {
  return payload;
});
/**
 * Set the HTML mode to use to export HTML mode
 * @memberOf uiStateActions
 * @param payload - map mode
 * @type {typeof import('./ui-state-actions').setExportHTMLMapMode}
 */

exports.setExportMapFormat = setExportMapFormat;
var setExportHTMLMapMode = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_MAP_HTML_MODE, function (payload) {
  return payload;
});
/**
 * Set `locale` value
 * @memberof uiStateActions
 * @param locale - locale of the UI
 * @type {typeof import('./ui-state-actions').setLocale}
 * @public
 */

exports.setExportHTMLMapMode = setExportHTMLMapMode;
var setLocale = (0, _reduxActions.createAction)(_actionTypes["default"].SET_LOCALE, function (locale) {
  return {
    locale: locale
  };
});
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Actions handled mostly by  `uiState` reducer.
 * They manage UI changes in tha app, such as open and close side panel,
 * switch between tabs in the side panel, open and close modal dialog for exporting data / images etc.
 * It also manges which settings are selected during image and map export
 *
 * @public
 */

/* eslint-disable no-unused-vars */
// @ts-ignore

exports.setLocale = setLocale;
var uiStateActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3VpLXN0YXRlLWFjdGlvbnMuanMiXSwibmFtZXMiOlsidG9nZ2xlU2lkZVBhbmVsIiwiQWN0aW9uVHlwZXMiLCJUT0dHTEVfU0lERV9QQU5FTCIsImlkIiwidG9nZ2xlTW9kYWwiLCJUT0dHTEVfTU9EQUwiLCJzaG93RXhwb3J0RHJvcGRvd24iLCJTSE9XX0VYUE9SVF9EUk9QRE9XTiIsImhpZGVFeHBvcnREcm9wZG93biIsIkhJREVfRVhQT1JUX0RST1BET1dOIiwidG9nZ2xlTWFwQ29udHJvbCIsIlRPR0dMRV9NQVBfQ09OVFJPTCIsInBhbmVsSWQiLCJpbmRleCIsIm9wZW5EZWxldGVNb2RhbCIsIk9QRU5fREVMRVRFX01PREFMIiwiZGF0YXNldElkIiwiYWRkTm90aWZpY2F0aW9uIiwiQUREX05PVElGSUNBVElPTiIsIm5vdGlmaWNhdGlvbiIsInJlbW92ZU5vdGlmaWNhdGlvbiIsIlJFTU9WRV9OT1RJRklDQVRJT04iLCJzZXRFeHBvcnRJbWFnZVNldHRpbmciLCJTRVRfRVhQT1JUX0lNQUdFX1NFVFRJTkciLCJuZXdTZXR0aW5nIiwic3RhcnRFeHBvcnRpbmdJbWFnZSIsIlNUQVJUX0VYUE9SVElOR19JTUFHRSIsInNldEV4cG9ydEltYWdlRGF0YVVyaSIsIlNFVF9FWFBPUlRfSU1BR0VfREFUQV9VUkkiLCJkYXRhVXJpIiwic2V0RXhwb3J0SW1hZ2VFcnJvciIsIlNFVF9FWFBPUlRfSU1BR0VfRVJST1IiLCJlcnJvciIsImNsZWFudXBFeHBvcnRJbWFnZSIsIkNMRUFOVVBfRVhQT1JUX0lNQUdFIiwic3RhcnRTYXZlU3RvcmFnZSIsIlNUQVJUX1NBVkVfU1RPUkFHRSIsInNldEV4cG9ydFNlbGVjdGVkRGF0YXNldCIsIlNFVF9FWFBPUlRfU0VMRUNURURfREFUQVNFVCIsInNldEV4cG9ydERhdGFUeXBlIiwiU0VUX0VYUE9SVF9EQVRBX1RZUEUiLCJkYXRhVHlwZSIsInNldEV4cG9ydEZpbHRlcmVkIiwiU0VUX0VYUE9SVF9GSUxURVJFRCIsInBheWxvYWQiLCJzZXRFeHBvcnREYXRhIiwiU0VUX0VYUE9SVF9EQVRBIiwic2V0VXNlck1hcGJveEFjY2Vzc1Rva2VuIiwiU0VUX1VTRVJfTUFQQk9YX0FDQ0VTU19UT0tFTiIsInNldEV4cG9ydE1hcEZvcm1hdCIsIlNFVF9FWFBPUlRfTUFQX0ZPUk1BVCIsInNldEV4cG9ydEhUTUxNYXBNb2RlIiwiU0VUX0VYUE9SVF9NQVBfSFRNTF9NT0RFIiwic2V0TG9jYWxlIiwiU0VUX0xPQ0FMRSIsImxvY2FsZSIsInVpU3RhdGVBY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBOzs7Ozs7O0FBT08sSUFBTUEsZUFBZSxHQUFHLGdDQUFhQyx3QkFBWUMsaUJBQXpCLEVBQTRDLFVBQUFDLEVBQUU7QUFBQSxTQUFJQSxFQUFKO0FBQUEsQ0FBOUMsQ0FBeEI7QUFFUDs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sSUFBTUMsV0FBVyxHQUFHLGdDQUFhSCx3QkFBWUksWUFBekIsRUFBdUMsVUFBQUYsRUFBRTtBQUFBLFNBQUlBLEVBQUo7QUFBQSxDQUF6QyxDQUFwQjtBQUVQOzs7Ozs7Ozs7QUFPTyxJQUFNRyxrQkFBa0IsR0FBRyxnQ0FBYUwsd0JBQVlNLG9CQUF6QixFQUErQyxVQUFBSixFQUFFO0FBQUEsU0FBSUEsRUFBSjtBQUFBLENBQWpELENBQTNCO0FBRVA7Ozs7Ozs7O0FBTU8sSUFBTUssa0JBQWtCLEdBQUcsZ0NBQWFQLHdCQUFZUSxvQkFBekIsQ0FBM0I7QUFFUDs7Ozs7Ozs7O0FBT08sSUFBTUMsZ0JBQWdCLEdBQUcsZ0NBQWFULHdCQUFZVSxrQkFBekIsRUFBNkMsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsU0FBcUI7QUFDaEdELElBQUFBLE9BQU8sRUFBUEEsT0FE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QUFjLEdBQUcsSUFBdkI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y3JlYXRlQWN0aW9ufSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICdjb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuLyoqXG4gKiBUb2dnbGUgYWN0aXZlIHNpZGUgcGFuZWxcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkICBpZCBvZiBzaWRlIHBhbmVsIHRvIGJlIHNob3duLCBvbmUgb2YgYGxheWVyYCwgYGZpbHRlcmAsIGBpbnRlcmFjdGlvbmAsIGBtYXBgXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykudG9nZ2xlU2lkZVBhbmVsfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlU2lkZVBhbmVsID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLlRPR0dMRV9TSURFX1BBTkVMLCBpZCA9PiBpZCk7XG5cbi8qKlxuICogU2hvdyBhbmQgaGlkZSBtb2RhbCBkaWFsb2dcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkIC0gaWQgb2YgbW9kYWwgdG8gYmUgc2hvd24sIG51bGwgdG8gaGlkZSBtb2RhbHMuIE9uZSBvZjpcbiAqICAtIFtgREFUQV9UQUJMRV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2RhdGFfdGFibGVfaWQpXG4gKiAgLSBbYERFTEVURV9EQVRBX0lEYF0oLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MubWQjZGVsZXRlX2RhdGFfaWQpXG4gKiAgLSBbYEFERF9EQVRBX0lEYF0oLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MubWQjYWRkX2RhdGFfaWQpXG4gKiAgLSBbYEVYUE9SVF9JTUFHRV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2V4cG9ydF9pbWFnZV9pZClcbiAqICAtIFtgRVhQT1JUX0RBVEFfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNleHBvcnRfZGF0YV9pZClcbiAqICAtIFtgQUREX01BUF9TVFlMRV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2FkZF9tYXBfc3R5bGVfaWQpXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykudG9nZ2xlTW9kYWx9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVNb2RhbCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5UT0dHTEVfTU9EQUwsIGlkID0+IGlkKTtcblxuLyoqXG4gKiBIaWRlIGFuZCBzaG93IHNpZGUgcGFuZWwgaGVhZGVyIGRyb3Bkb3duLCBhY3RpdmF0ZWQgYnkgY2xpY2tpbmcgdGhlIHNoYXJlIGxpbmsgb24gdG9wIG9mIHRoZSBzaWRlIHBhbmVsXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBpZCAtIGlkIG9mIHRoZSBkcm9wZG93blxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLnNob3dFeHBvcnREcm9wZG93bn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dFeHBvcnREcm9wZG93biA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5TSE9XX0VYUE9SVF9EUk9QRE9XTiwgaWQgPT4gaWQpO1xuXG4vKipcbiAqIEhpZGUgc2lkZSBwYW5lbCBoZWFkZXIgZHJvcGRvd24sIGFjdGl2YXRlZCBieSBjbGlja2luZyB0aGUgc2hhcmUgbGluayBvbiB0b3Agb2YgdGhlIHNpZGUgcGFuZWxcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLmhpZGVFeHBvcnREcm9wZG93bn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGhpZGVFeHBvcnREcm9wZG93biA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5ISURFX0VYUE9SVF9EUk9QRE9XTik7XG5cbi8qKlxuICogVG9nZ2xlIGFjdGl2ZSBtYXAgY29udHJvbCBwYW5lbFxuICogQG1lbWJlcm9mIHVpU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gcGFuZWxJZCAtIG1hcCBjb250cm9sIHBhbmVsIGlkLCBvbmUgb2YgdGhlIGtleXMgb2Y6IFtgREVGQVVMVF9NQVBfQ09OVFJPTFNgXSgjZGVmYXVsdF9tYXBfY29udHJvbHMpXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykudG9nZ2xlTWFwQ29udHJvbH1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZU1hcENvbnRyb2wgPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuVE9HR0xFX01BUF9DT05UUk9MLCAocGFuZWxJZCwgaW5kZXgpID0+ICh7XG4gIHBhbmVsSWQsXG4gIGluZGV4XG59KSk7XG5cbi8qKlxuICogVG9nZ2xlIGFjdGl2ZSBtYXAgY29udHJvbCBwYW5lbFxuICogQG1lbWJlcm9mIHVpU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gZGF0YXNldElkIC0gYGlkYCBvZiB0aGUgZGF0YXNldCB0byBiZSBkZWxldGVkXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykub3BlbkRlbGV0ZU1vZGFsfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgb3BlbkRlbGV0ZU1vZGFsID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLk9QRU5fREVMRVRFX01PREFMLCBkYXRhc2V0SWQgPT4gZGF0YXNldElkKTtcblxuLyoqXG4gKiBBZGQgYSBub3RpZmljYXRpb24gdG8gYmUgZGlzcGxheWVkXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBub3RpZmljYXRpb24gLSBUaGUgYG5vdGlmaWNhdGlvbmAgb2JqZWN0IHRvIGJlIGFkZGVkXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykuYWRkTm90aWZpY2F0aW9ufVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgYWRkTm90aWZpY2F0aW9uID0gY3JlYXRlQWN0aW9uKFxuICBBY3Rpb25UeXBlcy5BRERfTk9USUZJQ0FUSU9OLFxuICBub3RpZmljYXRpb24gPT4gbm90aWZpY2F0aW9uXG4pO1xuXG4vKipcbiAqIFJlbW92ZSBhIG5vdGlmaWNhdGlvblxuICogQG1lbWJlcm9mIHVpU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gaWQgLSBgaWRgIG9mIHRoZSBub3RpZmljYXRpb24gdG8gYmUgcmVtb3ZlZFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLnJlbW92ZU5vdGlmaWNhdGlvbn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vdGlmaWNhdGlvbiA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5SRU1PVkVfTk9USUZJQ0FUSU9OLCBpZCA9PiBpZCk7XG5cbi8qKlxuICogU2V0IGBleHBvcnRJbWFnZWAgc2V0dGluZ3M6IHJhdGlvLCByZXNvbHV0aW9uLCBsZWdlbmRcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xuICogQHBhcmFtIG5ld1NldHRpbmcgLSB7cmF0aW86ICcxeCd9XG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykuc2V0RXhwb3J0SW1hZ2VTZXR0aW5nfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0SW1hZ2VTZXR0aW5nID0gY3JlYXRlQWN0aW9uKFxuICBBY3Rpb25UeXBlcy5TRVRfRVhQT1JUX0lNQUdFX1NFVFRJTkcsXG4gIG5ld1NldHRpbmcgPT4gbmV3U2V0dGluZ1xuKTtcblxuLyoqXG4gKiBTdGFydCBleHBvcnRpbmcgaW1hZ2UgZmxvd1xuICogQG1lbWJlcm9mIHVpU3RhdGVBY3Rpb25zXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykuc3RhcnRFeHBvcnRpbmdJbWFnZX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHN0YXJ0RXhwb3J0aW5nSW1hZ2UgPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuU1RBUlRfRVhQT1JUSU5HX0lNQUdFKTtcblxuLyoqXG4gKiBTZXQgYGV4cG9ydEltYWdlLnNldEV4cG9ydEltYWdlRGF0YVVyaWAgdG8gYSBkYXRhVXJpXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBkYXRhVXJpIC0gZXhwb3J0IGltYWdlIGRhdGEgdXJpXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykuc2V0RXhwb3J0SW1hZ2VEYXRhVXJpfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0SW1hZ2VEYXRhVXJpID0gY3JlYXRlQWN0aW9uKFxuICBBY3Rpb25UeXBlcy5TRVRfRVhQT1JUX0lNQUdFX0RBVEFfVVJJLFxuICBkYXRhVXJpID0+IGRhdGFVcmlcbik7XG5cbi8qKlxuICogU2V0IEV4cG9ydCBpbWFnZSBlcnJvclxuICogQG1lbWJlcm9mIHVpU3RhdGVBY3Rpb25zXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykuc2V0RXhwb3J0SW1hZ2VFcnJvcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEltYWdlRXJyb3IgPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuU0VUX0VYUE9SVF9JTUFHRV9FUlJPUiwgZXJyb3IgPT4gZXJyb3IpO1xuXG4vKipcbiAqIERlbGV0ZSBjYWNoZWQgZXhwb3J0IGltYWdlXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLWFjdGlvbnMnKS5jbGVhbnVwRXhwb3J0SW1hZ2V9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBjbGVhbnVwRXhwb3J0SW1hZ2UgPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuQ0xFQU5VUF9FWFBPUlRfSU1BR0UpO1xuXG4vKipcbiAqIFN0YXJ0IHNhdmluZyBzdG9yYWdlIGZsb3dcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLnN0YXJ0U2F2ZVN0b3JhZ2V9XG4gKi9cbmV4cG9ydCBjb25zdCBzdGFydFNhdmVTdG9yYWdlID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLlNUQVJUX1NBVkVfU1RPUkFHRSk7XG5cbi8qKlxuICogU2V0IHNlbGVjdGVkIGRhdGFzZXQgZm9yIGV4cG9ydFxuICogQG1lbWJlcm9mIHVpU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gZGF0YXNldElkIC0gZGF0YXNldCBpZFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLnNldEV4cG9ydFNlbGVjdGVkRGF0YXNldH1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEV4cG9ydFNlbGVjdGVkRGF0YXNldCA9IGNyZWF0ZUFjdGlvbihcbiAgQWN0aW9uVHlwZXMuU0VUX0VYUE9SVF9TRUxFQ1RFRF9EQVRBU0VULFxuICBkYXRhc2V0SWQgPT4gZGF0YXNldElkXG4pO1xuXG4vKipcbiAqIFNldCBkYXRhIGZvcm1hdCBmb3IgZXhwb3J0aW5nIGRhdGFcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xuICogQHBhcmFtIGRhdGFUeXBlIC0gb25lIG9mIGAndGV4dC9jc3YnYFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLnNldEV4cG9ydERhdGFUeXBlfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0RGF0YVR5cGUgPSBjcmVhdGVBY3Rpb24oXG4gIEFjdGlvblR5cGVzLlNFVF9FWFBPUlRfREFUQV9UWVBFLFxuICBkYXRhVHlwZSA9PiBkYXRhVHlwZVxuKTtcblxuLyoqXG4gKiBXaGV0aGVyIHRvIGV4cG9ydCBmaWx0ZXJlZCBkYXRhLCBgdHJ1ZWAgb3IgYGZhbHNlYFxuICogQG1lbWJlcm9mIHVpU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gcGF5bG9hZCAtIHNldCBgdHJ1ZWAgdG8gb255IGV4cG9ydCBmaWx0ZXJlZCBkYXRhXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykuc2V0RXhwb3J0RmlsdGVyZWR9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRGaWx0ZXJlZCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5TRVRfRVhQT1JUX0ZJTFRFUkVELCBwYXlsb2FkID0+IHBheWxvYWQpO1xuXG4vKipcbiAqIFdoZXRoZXIgdG8gaW5jbHVkaW5nIGRhdGEgaW4gbWFwIGNvbmZpZywgdG9nZ2xlIGJldHdlZW4gYHRydWVgIG9yIGBmYWxzZWBcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLnNldEV4cG9ydERhdGF9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnREYXRhID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLlNFVF9FWFBPUlRfREFUQSk7XG5cbi8qKlxuICogV2hldGhlciB3ZSBleHBvcnQgYSBtYXBib3ggYWNjZXNzIHRva2VuIHVzZWQgdG8gY3JlYXRlIGEgc2luZ2xlIG1hcCBodG1sIGZpbGVcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xuICogQHBhcmFtIHBheWxvYWQgLSBtYXBib3ggYWNjZXNzIHRva2VuXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykuc2V0VXNlck1hcGJveEFjY2Vzc1Rva2VufVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0VXNlck1hcGJveEFjY2Vzc1Rva2VuID0gY3JlYXRlQWN0aW9uKFxuICBBY3Rpb25UeXBlcy5TRVRfVVNFUl9NQVBCT1hfQUNDRVNTX1RPS0VOLFxuICBwYXlsb2FkID0+IHBheWxvYWRcbik7XG5cbi8qKlxuICogU2V0IHRoZSBleHBvcnQgbWFwIGZvcm1hdCAoaHRtbCwganNvbilcbiAqIEBtZW1iZXJPZiB1aVN0YXRlQWN0aW9uc1xuICogQHBhcmFtIHBheWxvYWQgLSBtYXAgZm9ybWF0XG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykuc2V0RXhwb3J0TWFwRm9ybWF0fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0TWFwRm9ybWF0ID0gY3JlYXRlQWN0aW9uKFxuICBBY3Rpb25UeXBlcy5TRVRfRVhQT1JUX01BUF9GT1JNQVQsXG4gIHBheWxvYWQgPT4gcGF5bG9hZFxuKTtcblxuLyoqXG4gKiBTZXQgdGhlIEhUTUwgbW9kZSB0byB1c2UgdG8gZXhwb3J0IEhUTUwgbW9kZVxuICogQG1lbWJlck9mIHVpU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gcGF5bG9hZCAtIG1hcCBtb2RlXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykuc2V0RXhwb3J0SFRNTE1hcE1vZGV9XG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRIVE1MTWFwTW9kZSA9IGNyZWF0ZUFjdGlvbihcbiAgQWN0aW9uVHlwZXMuU0VUX0VYUE9SVF9NQVBfSFRNTF9NT0RFLFxuICBwYXlsb2FkID0+IHBheWxvYWRcbik7XG5cbi8qKlxuICogU2V0IGBsb2NhbGVgIHZhbHVlXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBsb2NhbGUgLSBsb2NhbGUgb2YgdGhlIFVJXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykuc2V0TG9jYWxlfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxlID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLlNFVF9MT0NBTEUsIGxvY2FsZSA9PiAoe1xuICBsb2NhbGVcbn0pKTtcblxuLyoqXG4gKiBUaGlzIGRlY2xhcmF0aW9uIGlzIG5lZWRlZCB0byBncm91cCBhY3Rpb25zIGluIGRvY3NcbiAqL1xuLyoqXG4gKiBBY3Rpb25zIGhhbmRsZWQgbW9zdGx5IGJ5ICBgdWlTdGF0ZWAgcmVkdWNlci5cbiAqIFRoZXkgbWFuYWdlIFVJIGNoYW5nZXMgaW4gdGhhIGFwcCwgc3VjaCBhcyBvcGVuIGFuZCBjbG9zZSBzaWRlIHBhbmVsLFxuICogc3dpdGNoIGJldHdlZW4gdGFicyBpbiB0aGUgc2lkZSBwYW5lbCwgb3BlbiBhbmQgY2xvc2UgbW9kYWwgZGlhbG9nIGZvciBleHBvcnRpbmcgZGF0YSAvIGltYWdlcyBldGMuXG4gKiBJdCBhbHNvIG1hbmdlcyB3aGljaCBzZXR0aW5ncyBhcmUgc2VsZWN0ZWQgZHVyaW5nIGltYWdlIGFuZCBtYXAgZXhwb3J0XG4gKlxuICogQHB1YmxpY1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgdWlTdGF0ZUFjdGlvbnMgPSBudWxsO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuIl19