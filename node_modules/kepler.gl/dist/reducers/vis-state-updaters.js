"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStateOnLayerVisibilityChange = updateStateOnLayerVisibilityChange;
exports.layerConfigChangeUpdater = layerConfigChangeUpdater;
exports.layerTextLabelChangeUpdater = layerTextLabelChangeUpdater;
exports.layerTypeChangeUpdater = layerTypeChangeUpdater;
exports.layerVisualChannelChangeUpdater = layerVisualChannelChangeUpdater;
exports.layerVisConfigChangeUpdater = layerVisConfigChangeUpdater;
exports.setFilterUpdater = setFilterUpdater;
exports.interactionConfigChangeUpdater = interactionConfigChangeUpdater;
exports.loadFileStepSuccessUpdater = loadFileStepSuccessUpdater;
exports.loadNextFileUpdater = loadNextFileUpdater;
exports.makeLoadFileTask = makeLoadFileTask;
exports.processFileContentUpdater = processFileContentUpdater;
exports.parseProgress = parseProgress;
exports.addDefaultLayers = addDefaultLayers;
exports.addDefaultTooltips = addDefaultTooltips;
exports.initialFileLoadingProgress = initialFileLoadingProgress;
exports.updateFileLoadingProgressUpdater = updateFileLoadingProgressUpdater;
exports.updateAllLayerDomainData = updateAllLayerDomainData;
exports.updateAnimationDomain = updateAnimationDomain;
exports.setFeaturesUpdater = setFeaturesUpdater;
exports.deleteFeatureUpdater = deleteFeatureUpdater;
exports.setPolygonFilterLayerUpdater = setPolygonFilterLayerUpdater;
exports.sortTableColumnUpdater = sortTableColumnUpdater;
exports.pinTableColumnUpdater = pinTableColumnUpdater;
exports.copyTableColumnUpdater = copyTableColumnUpdater;
exports.toggleEditorVisibilityUpdater = toggleEditorVisibilityUpdater;
exports.setSelectedFeatureUpdater = exports.setEditorModeUpdater = exports.setMapInfoUpdater = exports.applyCPUFilterUpdater = exports.loadFilesErrUpdater = exports.nextFileBatchUpdater = exports.loadFilesUpdater = exports.updateVisDataUpdater = exports.toggleLayerForMapUpdater = exports.toggleSplitMapUpdater = exports.mouseMoveUpdater = exports.mapClickUpdater = exports.layerClickUpdater = exports.layerHoverUpdater = exports.receiveMapConfigUpdater = exports.resetMapConfigUpdater = exports.showDatasetTableUpdater = exports.updateLayerBlendingUpdater = exports.removeDatasetUpdater = exports.reorderLayerUpdater = exports.removeLayerUpdater = exports.addLayerUpdater = exports.removeFilterUpdater = exports.toggleFilterFeatureUpdater = exports.enlargeFilterUpdater = exports.updateLayerAnimationSpeedUpdater = exports.updateAnimationTimeUpdater = exports.updateFilterAnimationSpeedUpdater = exports.toggleFilterAnimationUpdater = exports.layerColorUIChangeUpdater = exports.addFilterUpdater = exports.setFilterPlotUpdater = exports.INITIAL_VIS_STATE = exports.DEFAULT_EDITOR = exports.DEFAULT_ANIMATION_CONFIG = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _window = require("global/window");

var _tasks = require("react-palm/tasks");

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var _lodash2 = _interopRequireDefault(require("lodash.uniq"));

var _lodash3 = _interopRequireDefault(require("lodash.get"));

var _lodash4 = _interopRequireDefault(require("lodash.xor"));

var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

var _dataUtils = require("../utils/data-utils");

var _tasks2 = require("../tasks/tasks");

var _visStateActions = require("../actions/vis-state-actions");

var _interactionUtils = require("../utils/interaction-utils");

var _filterUtils = require("../utils/filter-utils");

var _gpuFilterUtils = require("../utils/gpu-filter-utils");

var _datasetUtils = require("../utils/dataset-utils");

var _utils = require("../utils/utils");

var _layerUtils = require("../utils/layer-utils");

var _visStateMerger = require("./vis-state-merger");

var _splitMapUtils = require("../utils/split-map-utils");

var _layers = require("../layers");

var _layerFactory = require("../layers/layer-factory");

var _defaultSettings = require("../constants/default-settings");

var _composerHelpers = require("./composer-helpers");

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2["default"])(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2["default"])(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2["default"])(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// type imports

/** @typedef {import('./vis-state-updaters').Field} Field */

/** @typedef {import('./vis-state-updaters').Filter} Filter */

/** @typedef {import('./vis-state-updaters').Dataset} Dataset */

/** @typedef {import('./vis-state-updaters').VisState} VisState */

/** @typedef {import('./vis-state-updaters').Datasets} Datasets */

/** @typedef {import('./vis-state-updaters').AnimationConfig} AnimationConfig */

/** @typedef {import('./vis-state-updaters').Editor} Editor */
// react-palm
// disable capture exception for react-palm call to withTask
(0, _tasks.disableStackCapturing)();
/**
 * Updaters for `visState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 *
 * @public
 * @example
 *
 * import keplerGlReducer, {visStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             visState: visStateUpdaters.enlargeFilterUpdater(
 *               state.keplerGl.foo.visState,
 *               {idx: 0}
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
// @ts-ignore

var visStateUpdaters = null;
/* eslint-enable no-unused-vars */

/** @type {AnimationConfig} */

var DEFAULT_ANIMATION_CONFIG = {
  domain: null,
  currentTime: null,
  speed: 1
};
/** @type {Editor} */

exports.DEFAULT_ANIMATION_CONFIG = DEFAULT_ANIMATION_CONFIG;
var DEFAULT_EDITOR = {
  mode: _defaultSettings.EDITOR_MODES.DRAW_POLYGON,
  features: [],
  selectedFeature: null,
  visible: true
};
/**
 * Default initial `visState`
 * @memberof visStateUpdaters
 * @constant
 * @type {VisState}
 * @public
 */

exports.DEFAULT_EDITOR = DEFAULT_EDITOR;
var INITIAL_VIS_STATE = {
  // map info
  mapInfo: {
    title: '',
    description: ''
  },
  // layers
  layers: [],
  layerData: [],
  layerToBeMerged: [],
  layerOrder: [],
  // filters
  filters: [],
  filterToBeMerged: [],
  // a collection of multiple dataset
  datasets: {},
  editingDataset: undefined,
  interactionConfig: (0, _interactionUtils.getDefaultInteraction)(),
  interactionToBeMerged: undefined,
  layerBlending: 'normal',
  hoverInfo: undefined,
  clicked: undefined,
  mousePos: {},
  // this is used when user split maps
  splitMaps: [// this will contain a list of objects to
    // describe the state of layer availability and visibility for each map
    // [
    //   {
    //      layers: {layer_id: true | false}
    //   }
    // ]
  ],
  //
  // defaults layer classes
  layerClasses: _layers.LayerClasses,
  // default animation
  // time in unix timestamp (milliseconds) (the number of seconds since the Unix Epoch)
  animationConfig: DEFAULT_ANIMATION_CONFIG,
  editor: DEFAULT_EDITOR,
  fileLoading: false,
  fileLoadingProgress: {},
  loaders: [],
  loadOptions: {}
};
/**
 * Update state with updated layer and layerData
 * @type {typeof import('./vis-state-updaters').updateStateWithLayerAndData}
 *
 */

exports.INITIAL_VIS_STATE = INITIAL_VIS_STATE;

function updateStateWithLayerAndData(state, _ref) {
  var layerData = _ref.layerData,
      layer = _ref.layer,
      idx = _ref.idx;
  return _objectSpread({}, state, {
    layers: state.layers.map(function (lyr, i) {
      return i === idx ? layer : lyr;
    }),
    layerData: layerData ? state.layerData.map(function (d, i) {
      return i === idx ? layerData : d;
    }) : state.layerData
  });
}

function updateStateOnLayerVisibilityChange(state, layer) {
  var newState = state;

  if (state.splitMaps.length) {
    newState = _objectSpread({}, state, {
      splitMaps: layer.config.isVisible ? (0, _splitMapUtils.addNewLayersToSplitMap)(state.splitMaps, layer) : (0, _splitMapUtils.removeLayerFromSplitMaps)(state.splitMaps, layer)
    });
  }

  if (layer.config.animation.enabled) {
    newState = updateAnimationDomain(state);
  }

  return newState;
}
/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerConfigChangeUpdater}
 * @returns nextState
 */


function layerConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newConfig);
  var newLayer = oldLayer.updateLayerConfig(action.newConfig);
  var layerData; // let newLayer;

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];
    var updateLayerDataResult = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData);
    layerData = updateLayerDataResult.layerData;
    newLayer = updateLayerDataResult.layer;
  }

  var newState = state;

  if ('isVisible' in action.newConfig) {
    newState = updateStateOnLayerVisibilityChange(state, newLayer);
  }

  return updateStateWithLayerAndData(newState, {
    layer: newLayer,
    layerData: layerData,
    idx: idx
  });
}

function addOrRemoveTextLabels(newFields, textLabel) {
  var newTextLabel = textLabel.slice();
  var currentFields = textLabel.map(function (tl) {
    return tl.field && tl.field.name;
  }).filter(function (d) {
    return d;
  });
  var addFields = newFields.filter(function (f) {
    return !currentFields.includes(f.name);
  });
  var deleteFields = currentFields.filter(function (f) {
    return !newFields.find(function (fd) {
      return fd.name === f;
    });
  }); // delete

  newTextLabel = newTextLabel.filter(function (tl) {
    return tl.field && !deleteFields.includes(tl.field.name);
  });
  newTextLabel = !newTextLabel.length ? [_layerFactory.DEFAULT_TEXT_LABEL] : newTextLabel; // add

  newTextLabel = [].concat((0, _toConsumableArray2["default"])(newTextLabel.filter(function (tl) {
    return tl.field;
  })), (0, _toConsumableArray2["default"])(addFields.map(function (af) {
    return _objectSpread({}, _layerFactory.DEFAULT_TEXT_LABEL, {
      field: af
    });
  })));
  return newTextLabel;
}

function updateTextLabelPropAndValue(idx, prop, value, textLabel) {
  if (!textLabel[idx].hasOwnProperty(prop)) {
    return textLabel;
  }

  var newTextLabel = textLabel.slice();

  if (prop && (value || textLabel.length === 1)) {
    newTextLabel = textLabel.map(function (tl, i) {
      return i === idx ? _objectSpread({}, tl, (0, _defineProperty2["default"])({}, prop, value)) : tl;
    });
  } else if (prop === 'field' && value === null && textLabel.length > 1) {
    // remove label when field value is set to null
    newTextLabel.splice(idx, 1);
  }

  return newTextLabel;
}
/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerTextLabelChangeUpdater}
 * @returns nextState
 */


function layerTextLabelChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      idx = action.idx,
      prop = action.prop,
      value = action.value;
  var textLabel = oldLayer.config.textLabel;
  var newTextLabel = textLabel.slice();

  if (!textLabel[idx] && idx === textLabel.length) {
    // if idx is set to length, add empty text label
    newTextLabel = [].concat((0, _toConsumableArray2["default"])(textLabel), [_layerFactory.DEFAULT_TEXT_LABEL]);
  }

  if (idx === 'all' && prop === 'fields') {
    newTextLabel = addOrRemoveTextLabels(value, textLabel);
  } else {
    newTextLabel = updateTextLabelPropAndValue(idx, prop, value, newTextLabel);
  } // update text label prop and value


  return layerConfigChangeUpdater(state, {
    oldLayer: oldLayer,
    newConfig: {
      textLabel: newTextLabel
    }
  });
}
/**
 * Update layer type. Previews layer config will be copied if applicable.
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerTypeChangeUpdater}
 * @public
 */


function layerTypeChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newType = action.newType;

  if (!oldLayer) {
    return state;
  }

  var oldId = oldLayer.id;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldId;
  });

  if (!state.layerClasses[newType]) {
    _window.console.error("".concat(newType, " is not a valid layer type"));

    return state;
  } // get a mint layer, with new id and type
  // because deck.gl uses id to match between new and old layer.
  // If type has changed but id is the same, it will break


  var newLayer = new state.layerClasses[newType]();
  newLayer.assignConfigToLayer(oldLayer.config, oldLayer.visConfigSettings); // if (newLayer.config.dataId) {
  //   const dataset = state.datasets[newLayer.config.dataId];
  //   newLayer.updateLayerDomain(dataset);
  // }

  newLayer.updateLayerDomain(state.datasets);

  var _calculateLayerData = (0, _layerUtils.calculateLayerData)(newLayer, state),
      layerData = _calculateLayerData.layerData,
      layer = _calculateLayerData.layer;

  var newState = updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });

  if (layer.config.animation.enabled || oldLayer.config.animation.enabled) {
    newState = updateAnimationDomain(newState);
  } // update splitMap layer id


  if (state.splitMaps.length) {
    newState = _objectSpread({}, newState, {
      splitMaps: newState.splitMaps.map(function (settings) {
        var _settings$layers = settings.layers,
            oldLayerMap = _settings$layers[oldId],
            otherLayers = (0, _objectWithoutProperties2["default"])(_settings$layers, [oldId].map(_toPropertyKey));
        return oldId in settings.layers ? _objectSpread({}, settings, {
          layers: _objectSpread({}, otherLayers, (0, _defineProperty2["default"])({}, layer.id, oldLayerMap))
        }) : settings;
      })
    });
  }

  return newState;
}
/**
 * Update layer visual channel
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerVisualChannelChangeUpdater}
 * @returns {Object} nextState
 * @public
 */


function layerVisualChannelChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newConfig = action.newConfig,
      channel = action.channel;

  if (!oldLayer.config.dataId) {
    return state;
  }

  var dataset = state.datasets[oldLayer.config.dataId];
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var newLayer = oldLayer.updateLayerConfig(newConfig);
  newLayer.updateLayerVisualChannel(dataset, channel);
  var oldLayerData = state.layerData[idx];

  var _calculateLayerData2 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData),
      layerData = _calculateLayerData2.layerData,
      layer = _calculateLayerData2.layer;

  return updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });
}
/**
 * Update layer `visConfig`
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerVisConfigChangeUpdater}
 * @public
 */


function layerVisConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newVisConfig);

  var newVisConfig = _objectSpread({}, oldLayer.config.visConfig, {}, action.newVisConfig);

  var newLayer = oldLayer.updateLayerConfig({
    visConfig: newVisConfig
  });

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];

    var _calculateLayerData3 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData),
        layerData = _calculateLayerData3.layerData,
        layer = _calculateLayerData3.layer;

    return updateStateWithLayerAndData(state, {
      layerData: layerData,
      layer: layer,
      idx: idx
    });
  }

  return updateStateWithLayerAndData(state, {
    layer: newLayer,
    idx: idx
  });
}
/**
 * Update filter property
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterUpdater}
 * @public
 */


function setFilterUpdater(state, action) {
  var idx = action.idx,
      prop = action.prop,
      value = action.value,
      _action$valueIndex = action.valueIndex,
      valueIndex = _action$valueIndex === void 0 ? 0 : _action$valueIndex;
  var oldFilter = state.filters[idx];
  var newFilter = (0, _utils.set)([prop], value, oldFilter);
  var newState = state;
  var _newFilter = newFilter,
      dataId = _newFilter.dataId; // Ensuring backward compatibility

  var datasetIds = (0, _utils.toArray)(dataId);

  switch (prop) {
    // TODO: Next PR for UI if we update dataId, we need to consider two cases:
    // 1. dataId is empty: create a default filter
    // 2. Add a new dataset id
    case _filterUtils.FILTER_UPDATER_PROPS.dataId:
      // if trying to update filter dataId. create an empty new filter
      newFilter = (0, _filterUtils.updateFilterDataId)(dataId);
      break;

    case _filterUtils.FILTER_UPDATER_PROPS.name:
      // we are supporting the current functionality
      // TODO: Next PR for UI filter name will only update filter name but it won't have side effects
      // we are gonna use pair of datasets and fieldIdx to update the filter
      var datasetId = newFilter.dataId[valueIndex];

      var _applyFilterFieldName = (0, _filterUtils.applyFilterFieldName)(newFilter, state.datasets[datasetId], value, valueIndex, {
        mergeDomain: false
      }),
          updatedFilter = _applyFilterFieldName.filter,
          newDataset = _applyFilterFieldName.dataset;

      if (!updatedFilter) {
        return state;
      }

      newFilter = updatedFilter;

      if (newFilter.gpu) {
        newFilter = (0, _gpuFilterUtils.setFilterGpuMode)(newFilter, state.filters);
        newFilter = (0, _gpuFilterUtils.assignGpuChannel)(newFilter, state.filters);
      }

      newState = (0, _utils.set)(['datasets', datasetId], newDataset, state); // only filter the current dataset

      break;

    case _filterUtils.FILTER_UPDATER_PROPS.layerId:
      // We need to update only datasetId/s if we have added/removed layers
      // - check for layerId changes (XOR works because of string values)
      // if no differences between layerIds, don't do any filtering
      // @ts-ignore
      var layerIdDifference = (0, _lodash4["default"])(newFilter.layerId, oldFilter.layerId);
      var layerDataIds = (0, _lodash2["default"])(layerIdDifference.map(function (lid) {
        return (0, _lodash3["default"])(state.layers.find(function (l) {
          return l.id === lid;
        }), ['config', 'dataId']);
      }).filter(function (d) {
        return d;
      })); // only filter datasetsIds

      datasetIds = layerDataIds; // Update newFilter dataIds

      var newDataIds = (0, _lodash2["default"])(newFilter.layerId.map(function (lid) {
        return (0, _lodash3["default"])(state.layers.find(function (l) {
          return l.id === lid;
        }), ['config', 'dataId']);
      }).filter(function (d) {
        return d;
      }));
      newFilter = _objectSpread({}, newFilter, {
        dataId: newDataIds
      });
      break;

    default:
      break;
  }

  var enlargedFilter = state.filters.find(function (f) {
    return f.enlarged;
  });

  if (enlargedFilter && enlargedFilter.id !== newFilter.id) {
    // there should be only one enlarged filter
    newFilter.enlarged = false;
  } // save new filters to newState


  newState = (0, _utils.set)(['filters', idx], newFilter, newState); // if we are currently setting a prop that only requires to filter the current
  // dataset we will pass only the current dataset to applyFiltersToDatasets and
  // updateAllLayerDomainData otherwise we pass the all list of datasets as defined in dataId

  var datasetIdsToFilter = _filterUtils.LIMITED_FILTER_EFFECT_PROPS[prop] ? [datasetIds[valueIndex]] : datasetIds; // filter data

  var filteredDatasets = (0, _filterUtils.applyFiltersToDatasets)(datasetIdsToFilter, newState.datasets, newState.filters, newState.layers);
  newState = (0, _utils.set)(['datasets'], filteredDatasets, newState); // dataId is an array
  // pass only the dataset we need to update

  newState = updateAllLayerDomainData(newState, datasetIdsToFilter, newFilter);
  return newState;
}
/**
 * Set the property of a filter plot
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterPlotUpdater}
 * @public
 */


var setFilterPlotUpdater = function setFilterPlotUpdater(state, _ref2) {
  var idx = _ref2.idx,
      newProp = _ref2.newProp,
      _ref2$valueIndex = _ref2.valueIndex,
      valueIndex = _ref2$valueIndex === void 0 ? 0 : _ref2$valueIndex;

  var newFilter = _objectSpread({}, state.filters[idx], {}, newProp);

  var prop = Object.keys(newProp)[0];

  if (prop === 'yAxis') {
    var plotType = (0, _filterUtils.getDefaultFilterPlotType)(newFilter); // TODO: plot is not supported in multi dataset filter for now

    if (plotType) {
      newFilter = _objectSpread({}, newFilter, {}, (0, _filterUtils.getFilterPlot)(_objectSpread({}, newFilter, {
        plotType: plotType
      }), state.datasets[newFilter.dataId[valueIndex]].allData), {
        plotType: plotType
      });
    }
  }

  return _objectSpread({}, state, {
    filters: state.filters.map(function (f, i) {
      return i === idx ? newFilter : f;
    })
  });
};
/**
 * Add a new filter
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').addFilterUpdater}
 * @public
 */


exports.setFilterPlotUpdater = setFilterPlotUpdater;

var addFilterUpdater = function addFilterUpdater(state, action) {
  return !action.dataId ? state : _objectSpread({}, state, {
    filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [(0, _filterUtils.getDefaultFilter)(action.dataId)])
  });
};
/**
 * Set layer color palette ui state
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerColorUIChangeUpdater}
 */


exports.addFilterUpdater = addFilterUpdater;

var layerColorUIChangeUpdater = function layerColorUIChangeUpdater(state, _ref3) {
  var oldLayer = _ref3.oldLayer,
      prop = _ref3.prop,
      newConfig = _ref3.newConfig;
  var newLayer = oldLayer.updateLayerColorUI(prop, newConfig);
  return _objectSpread({}, state, {
    layers: state.layers.map(function (l) {
      return l.id === oldLayer.id ? newLayer : l;
    })
  });
};
/**
 * Start and end filter animation
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleFilterAnimationUpdater}
 * @public
 */


exports.layerColorUIChangeUpdater = layerColorUIChangeUpdater;

var toggleFilterAnimationUpdater = function toggleFilterAnimationUpdater(state, action) {
  return _objectSpread({}, state, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread({}, f, {
        isAnimating: !f.isAnimating
      }) : f;
    })
  });
};
/**
 * Change filter animation speed
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateFilterAnimationSpeedUpdater}
 * @public
 */


exports.toggleFilterAnimationUpdater = toggleFilterAnimationUpdater;

var updateFilterAnimationSpeedUpdater = function updateFilterAnimationSpeedUpdater(state, action) {
  return _objectSpread({}, state, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread({}, f, {
        speed: action.speed
      }) : f;
    })
  });
};
/**
 * Reset animation config current time to a specified value
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateAnimationTimeUpdater}
 * @public
 *
 */


exports.updateFilterAnimationSpeedUpdater = updateFilterAnimationSpeedUpdater;

var updateAnimationTimeUpdater = function updateAnimationTimeUpdater(state, _ref4) {
  var value = _ref4.value;
  return _objectSpread({}, state, {
    animationConfig: _objectSpread({}, state.animationConfig, {
      currentTime: value
    })
  });
};
/**
 * Update animation speed with the vertical speed slider
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateLayerAnimationSpeedUpdater}
 * @public
 *
 */


exports.updateAnimationTimeUpdater = updateAnimationTimeUpdater;

var updateLayerAnimationSpeedUpdater = function updateLayerAnimationSpeedUpdater(state, _ref5) {
  var speed = _ref5.speed;
  return _objectSpread({}, state, {
    animationConfig: _objectSpread({}, state.animationConfig, {
      speed: speed
    })
  });
};
/**
 * Show larger time filter at bottom for time playback (apply to time filter only)
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').enlargeFilterUpdater}
 * @public
 */


exports.updateLayerAnimationSpeedUpdater = updateLayerAnimationSpeedUpdater;

var enlargeFilterUpdater = function enlargeFilterUpdater(state, action) {
  var isEnlarged = state.filters[action.idx].enlarged;
  return _objectSpread({}, state, {
    filters: state.filters.map(function (f, i) {
      f.enlarged = !isEnlarged && i === action.idx;
      return f;
    })
  });
};
/**
 * Toggles filter feature visibility
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleFilterFeatureUpdater}
 */


exports.enlargeFilterUpdater = enlargeFilterUpdater;

var toggleFilterFeatureUpdater = function toggleFilterFeatureUpdater(state, action) {
  var filter = state.filters[action.idx];
  var isVisible = (0, _lodash3["default"])(filter, ['value', 'properties', 'isVisible']);

  var newFilter = _objectSpread({}, filter, {
    value: (0, _filterUtils.featureToFilterValue)(filter.value, filter.id, {
      isVisible: !isVisible
    })
  });

  return _objectSpread({}, state, {
    filters: Object.assign((0, _toConsumableArray2["default"])(state.filters), (0, _defineProperty2["default"])({}, action.idx, newFilter))
  });
};
/**
 * Remove a filter
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').removeFilterUpdater}
 * @public
 */


exports.toggleFilterFeatureUpdater = toggleFilterFeatureUpdater;

var removeFilterUpdater = function removeFilterUpdater(state, action) {
  var idx = action.idx;
  var _state$filters$idx = state.filters[idx],
      dataId = _state$filters$idx.dataId,
      id = _state$filters$idx.id;
  var newFilters = [].concat((0, _toConsumableArray2["default"])(state.filters.slice(0, idx)), (0, _toConsumableArray2["default"])(state.filters.slice(idx + 1, state.filters.length)));
  var filteredDatasets = (0, _filterUtils.applyFiltersToDatasets)(dataId, state.datasets, newFilters, state.layers);
  var newEditor = (0, _filterUtils.getFilterIdInFeature)(state.editor.selectedFeature) === id ? _objectSpread({}, state.editor, {
    selectedFeature: null
  }) : state.editor;
  var newState = (0, _utils.set)(['filters'], newFilters, state);
  newState = (0, _utils.set)(['datasets'], filteredDatasets, newState);
  newState = (0, _utils.set)(['editor'], newEditor, newState);
  return updateAllLayerDomainData(newState, dataId, undefined);
};
/**
 * Add a new layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').addLayerUpdater}
 * @public
 */


exports.removeFilterUpdater = removeFilterUpdater;

var addLayerUpdater = function addLayerUpdater(state, action) {
  var defaultDataset = Object.keys(state.datasets)[0];
  var newLayer = new _layers.Layer(_objectSpread({
    isVisible: true,
    isConfigActive: true,
    dataId: defaultDataset
  }, action.props));
  return _objectSpread({}, state, {
    layers: [].concat((0, _toConsumableArray2["default"])(state.layers), [newLayer]),
    layerData: [].concat((0, _toConsumableArray2["default"])(state.layerData), [{}]),
    layerOrder: [].concat((0, _toConsumableArray2["default"])(state.layerOrder), [state.layerOrder.length]),
    splitMaps: (0, _splitMapUtils.addNewLayersToSplitMap)(state.splitMaps, newLayer)
  });
};
/**
 * remove layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').removeLayerUpdater}
 * @public
 */


exports.addLayerUpdater = addLayerUpdater;

var removeLayerUpdater = function removeLayerUpdater(state, _ref6) {
  var idx = _ref6.idx;
  var layers = state.layers,
      layerData = state.layerData,
      clicked = state.clicked,
      hoverInfo = state.hoverInfo;
  var layerToRemove = state.layers[idx];
  var newMaps = (0, _splitMapUtils.removeLayerFromSplitMaps)(state.splitMaps, layerToRemove);

  var newState = _objectSpread({}, state, {
    layers: [].concat((0, _toConsumableArray2["default"])(layers.slice(0, idx)), (0, _toConsumableArray2["default"])(layers.slice(idx + 1, layers.length))),
    layerData: [].concat((0, _toConsumableArray2["default"])(layerData.slice(0, idx)), (0, _toConsumableArray2["default"])(layerData.slice(idx + 1, layerData.length))),
    layerOrder: state.layerOrder.filter(function (i) {
      return i !== idx;
    }).map(function (pid) {
      return pid > idx ? pid - 1 : pid;
    }),
    clicked: layerToRemove.isLayerHovered(clicked) ? undefined : clicked,
    hoverInfo: layerToRemove.isLayerHovered(hoverInfo) ? undefined : hoverInfo,
    splitMaps: newMaps // TODO: update filters, create helper to remove layer form filter (remove layerid and dataid) if mapped

  });

  return updateAnimationDomain(newState);
};
/**
 * Reorder layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').reorderLayerUpdater}
 * @public
 */


exports.removeLayerUpdater = removeLayerUpdater;

var reorderLayerUpdater = function reorderLayerUpdater(state, _ref7) {
  var order = _ref7.order;
  return _objectSpread({}, state, {
    layerOrder: order
  });
};
/**
 * Remove a dataset and all layers, filters, tooltip configs that based on it
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').removeDatasetUpdater}
 * @public
 */


exports.reorderLayerUpdater = reorderLayerUpdater;

var removeDatasetUpdater = function removeDatasetUpdater(state, action) {
  // extract dataset key
  var datasetKey = action.dataId;
  var datasets = state.datasets; // check if dataset is present

  if (!datasets[datasetKey]) {
    return state;
  }
  /* eslint-disable no-unused-vars */


  var layers = state.layers,
      _state$datasets = state.datasets,
      dataset = _state$datasets[datasetKey],
      newDatasets = (0, _objectWithoutProperties2["default"])(_state$datasets, [datasetKey].map(_toPropertyKey));
  /* eslint-enable no-unused-vars */

  var indexes = layers.reduce(function (listOfIndexes, layer, index) {
    if (layer.config.dataId === datasetKey) {
      listOfIndexes.push(index);
    }

    return listOfIndexes;
  }, []); // remove layers and datasets

  var _indexes$reduce = indexes.reduce(function (_ref8, idx) {
    var currentState = _ref8.newState,
        indexCounter = _ref8.indexCounter;
    var currentIndex = idx - indexCounter;
    currentState = removeLayerUpdater(currentState, {
      idx: currentIndex
    });
    indexCounter++;
    return {
      newState: currentState,
      indexCounter: indexCounter
    };
  }, {
    newState: _objectSpread({}, state, {
      datasets: newDatasets
    }),
    indexCounter: 0
  }),
      newState = _indexes$reduce.newState; // remove filters


  var filters = state.filters.filter(function (filter) {
    return !filter.dataId.includes(datasetKey);
  }); // update interactionConfig

  var interactionConfig = state.interactionConfig;
  var _interactionConfig = interactionConfig,
      tooltip = _interactionConfig.tooltip;

  if (tooltip) {
    var config = tooltip.config;
    /* eslint-disable no-unused-vars */

    var _config$fieldsToShow = config.fieldsToShow,
        fields = _config$fieldsToShow[datasetKey],
        fieldsToShow = (0, _objectWithoutProperties2["default"])(_config$fieldsToShow, [datasetKey].map(_toPropertyKey));
    /* eslint-enable no-unused-vars */

    interactionConfig = _objectSpread({}, interactionConfig, {
      tooltip: _objectSpread({}, tooltip, {
        config: _objectSpread({}, config, {
          fieldsToShow: fieldsToShow
        })
      })
    });
  }

  return _objectSpread({}, newState, {
    filters: filters,
    interactionConfig: interactionConfig
  });
};
/**
 * update layer blending mode
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateLayerBlendingUpdater}
 * @public
 */


exports.removeDatasetUpdater = removeDatasetUpdater;

var updateLayerBlendingUpdater = function updateLayerBlendingUpdater(state, action) {
  return _objectSpread({}, state, {
    layerBlending: action.mode
  });
};
/**
 * Display dataset table in a modal
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').showDatasetTableUpdater}
 * @public
 */


exports.updateLayerBlendingUpdater = updateLayerBlendingUpdater;

var showDatasetTableUpdater = function showDatasetTableUpdater(state, action) {
  return _objectSpread({}, state, {
    editingDataset: action.dataId
  });
};
/**
 * reset visState to initial State
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').resetMapConfigUpdater}
 * @public
 */


exports.showDatasetTableUpdater = showDatasetTableUpdater;

var resetMapConfigUpdater = function resetMapConfigUpdater(state) {
  return _objectSpread({}, INITIAL_VIS_STATE, {}, state.initialState, {
    initialState: state.initialState
  });
};
/**
 * Propagate `visState` reducer with a new configuration. Current config will be override.
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').receiveMapConfigUpdater}
 * @public
 */


exports.resetMapConfigUpdater = resetMapConfigUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref9) {
  var _ref9$payload = _ref9.payload,
      _ref9$payload$config = _ref9$payload.config,
      config = _ref9$payload$config === void 0 ? {} : _ref9$payload$config,
      _ref9$payload$options = _ref9$payload.options,
      options = _ref9$payload$options === void 0 ? {} : _ref9$payload$options;

  if (!config.visState) {
    return state;
  }

  var _config$visState = config.visState,
      filters = _config$visState.filters,
      layers = _config$visState.layers,
      interactionConfig = _config$visState.interactionConfig,
      layerBlending = _config$visState.layerBlending,
      splitMaps = _config$visState.splitMaps,
      animationConfig = _config$visState.animationConfig;
  var keepExistingConfig = options.keepExistingConfig; // reset config if keepExistingConfig is falsy

  var mergedState = !keepExistingConfig ? resetMapConfigUpdater(state) : state;
  mergedState = (0, _visStateMerger.mergeLayers)(mergedState, layers);
  mergedState = (0, _visStateMerger.mergeFilters)(mergedState, filters);
  mergedState = (0, _visStateMerger.mergeInteractions)(mergedState, interactionConfig);
  mergedState = (0, _visStateMerger.mergeLayerBlending)(mergedState, layerBlending);
  mergedState = (0, _visStateMerger.mergeSplitMaps)(mergedState, splitMaps);
  mergedState = (0, _visStateMerger.mergeAnimationConfig)(mergedState, animationConfig);
  return mergedState;
};
/**
 * Trigger layer hover event with hovered object
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerHoverUpdater}
 * @public
 */


exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

var layerHoverUpdater = function layerHoverUpdater(state, action) {
  return _objectSpread({}, state, {
    hoverInfo: action.info
  });
};
/* eslint-enable max-statements */

/**
 * Update `interactionConfig`
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').interactionConfigChangeUpdater}
 * @public
 */


exports.layerHoverUpdater = layerHoverUpdater;

function interactionConfigChangeUpdater(state, action) {
  var config = action.config;

  var interactionConfig = _objectSpread({}, state.interactionConfig, {}, (0, _defineProperty2["default"])({}, config.id, config)); // Don't enable tooltip and brush at the same time
  // but coordinates can be shown at all time


  var contradict = ['brush', 'tooltip'];

  if (contradict.includes(config.id) && config.enabled && !state.interactionConfig[config.id].enabled) {
    // only enable one interaction at a time
    contradict.forEach(function (k) {
      if (k !== config.id) {
        interactionConfig[k] = _objectSpread({}, interactionConfig[k], {
          enabled: false
        });
      }
    });
  }

  var newState = _objectSpread({}, state, {
    interactionConfig: interactionConfig
  });

  if (config.id === 'geocoder' && !config.enabled) {
    return removeDatasetUpdater(newState, {
      dataId: 'geocoder_dataset'
    });
  }

  return newState;
}
/**
 * Trigger layer click event with clicked object
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerClickUpdater}
 * @public
 */


var layerClickUpdater = function layerClickUpdater(state, action) {
  return _objectSpread({}, state, {
    mousePos: state.interactionConfig.coordinate.enabled ? _objectSpread({}, state.mousePos, {
      pinned: state.mousePos.pinned ? null : (0, _lodash["default"])(state.mousePos)
    }) : state.mousePos,
    clicked: action.info && action.info.picked ? action.info : null
  });
};
/**
 * Trigger map click event, unselect clicked object
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').mapClickUpdater}
 * @public
 */


exports.layerClickUpdater = layerClickUpdater;

var mapClickUpdater = function mapClickUpdater(state) {
  return _objectSpread({}, state, {
    clicked: null
  });
};
/**
 * Trigger map move event
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').mouseMoveUpdater}
 * @public
 */


exports.mapClickUpdater = mapClickUpdater;

var mouseMoveUpdater = function mouseMoveUpdater(state, _ref10) {
  var evt = _ref10.evt;

  if (Object.values(state.interactionConfig).some(function (config) {
    return config.enabled;
  })) {
    return _objectSpread({}, state, {
      mousePos: _objectSpread({}, state.mousePos, {
        mousePosition: (0, _toConsumableArray2["default"])(evt.point),
        coordinate: (0, _toConsumableArray2["default"])(evt.lngLat)
      })
    });
  }

  return state;
};
/**
 * Toggle visibility of a layer for a split map
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleSplitMapUpdater}
 * @public
 */


exports.mouseMoveUpdater = mouseMoveUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state, action) {
  return state.splitMaps && state.splitMaps.length === 0 ? _objectSpread({}, state, {
    // maybe we should use an array to store state for a single map as well
    // if current maps length is equal to 0 it means that we are about to split the view
    splitMaps: (0, _splitMapUtils.computeSplitMapLayers)(state.layers)
  }) : closeSpecificMapAtIndex(state, action);
};
/**
 * Toggle visibility of a layer in a split map
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleLayerForMapUpdater}
 * @public
 */


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

var toggleLayerForMapUpdater = function toggleLayerForMapUpdater(state, _ref11) {
  var mapIndex = _ref11.mapIndex,
      layerId = _ref11.layerId;
  var splitMaps = state.splitMaps;
  return _objectSpread({}, state, {
    splitMaps: splitMaps.map(function (sm, i) {
      return i === mapIndex ? _objectSpread({}, splitMaps[i], {
        layers: _objectSpread({}, splitMaps[i].layers, (0, _defineProperty2["default"])({}, layerId, !splitMaps[i].layers[layerId]))
      }) : sm;
    })
  });
};
/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateVisDataUpdater}
 * @public
 */

/* eslint-disable max-statements */


exports.toggleLayerForMapUpdater = toggleLayerForMapUpdater;

var updateVisDataUpdater = function updateVisDataUpdater(state, action) {
  // datasets can be a single data entries or an array of multiple data entries
  var config = action.config,
      options = action.options;
  var datasets = (0, _utils.toArray)(action.datasets);
  var newDataEntries = datasets.reduce(function (accu, _ref12) {
    var _ref12$info = _ref12.info,
        info = _ref12$info === void 0 ? {} : _ref12$info,
        data = _ref12.data;
    return _objectSpread({}, accu, {}, (0, _datasetUtils.createNewDataEntry)({
      info: info,
      data: data
    }, state.datasets) || {});
  }, {});

  if (!Object.keys(newDataEntries).length) {
    return state;
  } // apply config if passed from action


  var previousState = config ? receiveMapConfigUpdater(state, {
    payload: {
      config: config,
      options: options
    }
  }) : state;

  var stateWithNewData = _objectSpread({}, previousState, {
    datasets: _objectSpread({}, previousState.datasets, {}, newDataEntries)
  }); // previously saved config before data loaded


  var _stateWithNewData$fil = stateWithNewData.filterToBeMerged,
      filterToBeMerged = _stateWithNewData$fil === void 0 ? [] : _stateWithNewData$fil,
      _stateWithNewData$lay = stateWithNewData.layerToBeMerged,
      layerToBeMerged = _stateWithNewData$lay === void 0 ? [] : _stateWithNewData$lay,
      _stateWithNewData$int = stateWithNewData.interactionToBeMerged,
      interactionToBeMerged = _stateWithNewData$int === void 0 ? {} : _stateWithNewData$int,
      _stateWithNewData$spl = stateWithNewData.splitMapsToBeMerged,
      splitMapsToBeMerged = _stateWithNewData$spl === void 0 ? [] : _stateWithNewData$spl; // We need to merge layers before filters because polygon filters requires layers to be loaded

  var mergedState = (0, _visStateMerger.mergeLayers)(stateWithNewData, layerToBeMerged);
  mergedState = (0, _visStateMerger.mergeFilters)(mergedState, filterToBeMerged); // merge state with saved splitMaps

  mergedState = (0, _visStateMerger.mergeSplitMaps)(mergedState, splitMapsToBeMerged);
  var newLayers = mergedState.layers.filter(function (l) {
    return l.config.dataId in newDataEntries;
  });

  if (!newLayers.length && (options || {}).autoCreateLayers !== false) {
    // no layer merged, find defaults
    var result = addDefaultLayers(mergedState, newDataEntries);
    mergedState = result.state;
    newLayers = result.newLayers;
  }

  if (mergedState.splitMaps.length) {
    // if map is split, add new layers to splitMaps
    newLayers = mergedState.layers.filter(function (l) {
      return l.config.dataId in newDataEntries;
    });
    mergedState = _objectSpread({}, mergedState, {
      splitMaps: (0, _splitMapUtils.addNewLayersToSplitMap)(mergedState.splitMaps, newLayers)
    });
  } // merge state with saved interactions


  mergedState = (0, _visStateMerger.mergeInteractions)(mergedState, interactionToBeMerged); // if no tooltips merged add default tooltips

  Object.keys(newDataEntries).forEach(function (dataId) {
    var tooltipFields = mergedState.interactionConfig.tooltip.config.fieldsToShow[dataId];

    if (!Array.isArray(tooltipFields) || !tooltipFields.length) {
      mergedState = addDefaultTooltips(mergedState, newDataEntries[dataId]);
    }
  });
  var updatedState = updateAllLayerDomainData(mergedState, Object.keys(newDataEntries), undefined); // register layer animation domain,
  // need to be called after layer data is calculated

  updatedState = updateAnimationDomain(updatedState);
  return updatedState;
};
/* eslint-enable max-statements */

/**
 * When a user clicks on the specific map closing icon
 * the application will close the selected map
 * and will merge the remaining one with the global state
 * TODO: i think in the future this action should be called merge map layers with global settings
 * @param {Object} state `visState`
 * @param {Object} action action
 * @returns {Object} nextState
 */


exports.updateVisDataUpdater = updateVisDataUpdater;

function closeSpecificMapAtIndex(state, action) {
  // retrieve layers meta data from the remaining map that we need to keep
  var indexToRetrieve = 1 - action.payload;
  var mapLayers = state.splitMaps[indexToRetrieve].layers;
  var layers = state.layers; // update layer visibility

  var newLayers = layers.map(function (layer) {
    return !mapLayers[layer.id] && layer.config.isVisible ? layer.updateLayerConfig({
      // if layer.id is not in mapLayers, it should be inVisible
      isVisible: false
    }) : layer;
  }); // delete map

  return _objectSpread({}, state, {
    layers: newLayers,
    splitMaps: []
  });
}
/**
 * Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadFilesUpdater}
 * @public
 */


var loadFilesUpdater = function loadFilesUpdater(state, action) {
  var files = action.files,
      _action$onFinish = action.onFinish,
      onFinish = _action$onFinish === void 0 ? _visStateActions.loadFilesSuccess : _action$onFinish;

  if (!files.length) {
    return state;
  }

  var fileLoadingProgress = Array.from(files).reduce(function (accu, f, i) {
    return (0, _composerHelpers.merge_)(initialFileLoadingProgress(f, i))(accu);
  }, {});
  var fileLoading = {
    fileCache: [],
    filesToLoad: files,
    onFinish: onFinish
  };
  var nextState = (0, _composerHelpers.merge_)({
    fileLoadingProgress: fileLoadingProgress,
    fileLoading: fileLoading
  })(state);
  return loadNextFileUpdater(nextState);
};
/**
 * Sucessfully loaded one file, move on to the next one
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadFileStepSuccessUpdater}
 * @public
 */


exports.loadFilesUpdater = loadFilesUpdater;

function loadFileStepSuccessUpdater(state, action) {
  if (!state.fileLoading) {
    return state;
  }

  var fileName = action.fileName,
      fileCache = action.fileCache;
  var _state$fileLoading = state.fileLoading,
      filesToLoad = _state$fileLoading.filesToLoad,
      onFinish = _state$fileLoading.onFinish;
  var stateWithProgress = updateFileLoadingProgressUpdater(state, {
    fileName: fileName,
    progress: {
      percent: 1,
      message: 'Done'
    }
  }); // save processed file to fileCache

  var stateWithCache = (0, _composerHelpers.pick_)('fileLoading')((0, _composerHelpers.merge_)({
    fileCache: fileCache
  }))(stateWithProgress);
  return (0, _tasks.withTask)(stateWithCache, (0, _tasks2.DELAY_TASK)(200).map(filesToLoad.length ? _visStateActions.loadNextFile : function () {
    return onFinish(fileCache);
  }));
} // withTask<T>(state: T, task: any): T

/**
 *
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadNextFileUpdater}
 * @public
 */


function loadNextFileUpdater(state) {
  if (!state.fileLoading) {
    return state;
  }

  var filesToLoad = state.fileLoading.filesToLoad;

  var _filesToLoad = (0, _toArray2["default"])(filesToLoad),
      file = _filesToLoad[0],
      remainingFilesToLoad = _filesToLoad.slice(1); // save filesToLoad to state


  var nextState = (0, _composerHelpers.pick_)('fileLoading')((0, _composerHelpers.merge_)({
    filesToLoad: remainingFilesToLoad
  }))(state);
  var stateWithProgress = updateFileLoadingProgressUpdater(nextState, {
    fileName: file.name,
    progress: {
      percent: 0,
      message: 'loading...'
    }
  });
  var loaders = state.loaders,
      loadOptions = state.loadOptions;
  return (0, _tasks.withTask)(stateWithProgress, makeLoadFileTask(file, nextState.fileLoading.fileCache, loaders, loadOptions));
}

function makeLoadFileTask(file, fileCache) {
  var loaders = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var loadOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return (0, _tasks2.LOAD_FILE_TASK)({
    file: file,
    fileCache: fileCache,
    loaders: loaders,
    loadOptions: loadOptions
  }).bimap( // prettier ignore
  // success
  function (gen) {
    return (0, _visStateActions.nextFileBatch)({
      gen: gen,
      fileName: file.name,
      onFinish: function onFinish(result) {
        return (0, _visStateActions.processFileContent)({
          content: result,
          fileCache: fileCache
        });
      }
    });
  }, // error
  function (err) {
    return (0, _visStateActions.loadFilesErr)(file.name, err);
  });
}
/**
 *
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').processFileContentUpdater}
 * @public
 */


function processFileContentUpdater(state, action) {
  var _action$payload = action.payload,
      content = _action$payload.content,
      fileCache = _action$payload.fileCache;
  var stateWithProgress = updateFileLoadingProgressUpdater(state, {
    fileName: content.fileName,
    progress: {
      percent: 1,
      message: 'processing...'
    }
  });
  return (0, _tasks.withTask)(stateWithProgress, (0, _tasks2.PROCESS_FILE_DATA)({
    content: content,
    fileCache: fileCache
  }).bimap(function (result) {
    return (0, _visStateActions.loadFileStepSuccess)({
      fileName: content.fileName,
      fileCache: result
    });
  }, function (err) {
    return (0, _visStateActions.loadFilesErr)(content.fileName, err);
  }));
}

function parseProgress() {
  var prevProgress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var progress = arguments.length > 1 ? arguments[1] : undefined;

  // This happens when receiving query metadata or other cases we don't
  // have an update for the user.
  if (!progress || !progress.percent) {
    return {};
  }

  return {
    percent: progress.percent
  };
}
/**
 * gets called with payload = AsyncGenerator<???>
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').nextFileBatchUpdater}
 * @public
 */


var nextFileBatchUpdater = function nextFileBatchUpdater(state, _ref13) {
  var _ref13$payload = _ref13.payload,
      gen = _ref13$payload.gen,
      fileName = _ref13$payload.fileName,
      progress = _ref13$payload.progress,
      accumulated = _ref13$payload.accumulated,
      onFinish = _ref13$payload.onFinish;
  var stateWithProgress = updateFileLoadingProgressUpdater(state, {
    fileName: fileName,
    progress: parseProgress(state.fileLoadingProgress[fileName], progress)
  });
  return (0, _tasks.withTask)(stateWithProgress, (0, _tasks2.UNWRAP_TASK)(gen.next()).bimap(function (_ref14) {
    var value = _ref14.value,
        done = _ref14.done;
    return done ? onFinish(accumulated) : (0, _visStateActions.nextFileBatch)({
      gen: gen,
      fileName: fileName,
      progress: value.progress,
      accumulated: value,
      onFinish: onFinish
    });
  }, function (err) {
    return (0, _visStateActions.loadFilesErr)(fileName, err);
  }));
};
/**
 * Trigger loading file error
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadFilesErrUpdater}
 * @public
 */


exports.nextFileBatchUpdater = nextFileBatchUpdater;

var loadFilesErrUpdater = function loadFilesErrUpdater(state, _ref15) {
  var error = _ref15.error,
      fileName = _ref15.fileName;

  // update ui with error message
  _window.console.warn(error);

  if (!state.fileLoading) {
    return state;
  }

  var _state$fileLoading2 = state.fileLoading,
      filesToLoad = _state$fileLoading2.filesToLoad,
      onFinish = _state$fileLoading2.onFinish,
      fileCache = _state$fileLoading2.fileCache;
  var nextState = updateFileLoadingProgressUpdater(state, {
    fileName: fileName,
    progress: {
      error: error
    }
  }); // kick off next file or finish

  return (0, _tasks.withTask)(nextState, (0, _tasks2.DELAY_TASK)(200).map(filesToLoad.length ? _visStateActions.loadNextFile : function () {
    return onFinish(fileCache);
  }));
};
/**
 * When select dataset for export, apply cpu filter to selected dataset
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').applyCPUFilterUpdater}
 * @public
 */


exports.loadFilesErrUpdater = loadFilesErrUpdater;

var applyCPUFilterUpdater = function applyCPUFilterUpdater(state, _ref16) {
  var dataId = _ref16.dataId;
  // apply cpuFilter
  var dataIds = (0, _utils.toArray)(dataId);
  return dataIds.reduce(function (accu, id) {
    return (0, _filterUtils.filterDatasetCPU)(accu, id);
  }, state);
};
/**
 * User input to update the info of the map
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setMapInfoUpdater}
 * @public
 */


exports.applyCPUFilterUpdater = applyCPUFilterUpdater;

var setMapInfoUpdater = function setMapInfoUpdater(state, action) {
  return _objectSpread({}, state, {
    mapInfo: _objectSpread({}, state.mapInfo, {}, action.info)
  });
};
/**
 * Helper function to update All layer domain and layer data of state
 * @type {typeof import('./vis-state-updaters').addDefaultLayers}
 */


exports.setMapInfoUpdater = setMapInfoUpdater;

function addDefaultLayers(state, datasets) {
  /** @type {Layer[]} */
  var empty = [];
  var defaultLayers = Object.values(datasets).reduce(function (accu, dataset) {
    var foundLayers = (0, _layerUtils.findDefaultLayer)(dataset, state.layerClasses);
    return foundLayers && foundLayers.length ? accu.concat(foundLayers) : accu;
  }, empty);
  return {
    state: _objectSpread({}, state, {
      layers: [].concat((0, _toConsumableArray2["default"])(state.layers), (0, _toConsumableArray2["default"])(defaultLayers)),
      layerOrder: [].concat((0, _toConsumableArray2["default"])(defaultLayers.map(function (_, i) {
        return state.layers.length + i;
      })), (0, _toConsumableArray2["default"])(state.layerOrder))
    }),
    newLayers: defaultLayers
  };
}
/**
 * helper function to find default tooltips
 * @param {Object} state
 * @param {Object} dataset
 * @returns {Object} nextState
 */


function addDefaultTooltips(state, dataset) {
  var tooltipFields = (0, _interactionUtils.findFieldsToShow)(dataset);

  var merged = _objectSpread({}, state.interactionConfig.tooltip.config.fieldsToShow, {}, tooltipFields);

  return (0, _utils.set)(['interactionConfig', 'tooltip', 'config', 'fieldsToShow'], merged, state);
}

function initialFileLoadingProgress(file, index) {
  var fileName = file.name || "Untitled File ".concat(index);
  return (0, _defineProperty2["default"])({}, fileName, {
    // percent of current file
    percent: 0,
    message: '',
    fileName: fileName,
    error: null
  });
}

function updateFileLoadingProgressUpdater(state, _ref18) {
  var fileName = _ref18.fileName,
      progress = _ref18.progress;
  return (0, _composerHelpers.pick_)('fileLoadingProgress')((0, _composerHelpers.pick_)(fileName)((0, _composerHelpers.merge_)(progress)))(state);
}
/**
 * Helper function to update layer domains for an array of datasets
 * @type {typeof import('./vis-state-updaters').updateAllLayerDomainData}
 */


function updateAllLayerDomainData(state, dataId, updatedFilter) {
  var dataIds = typeof dataId === 'string' ? [dataId] : dataId;
  var newLayers = [];
  var newLayerData = [];
  state.layers.forEach(function (oldLayer, i) {
    if (oldLayer.config.dataId && dataIds.includes(oldLayer.config.dataId)) {
      // No need to recalculate layer domain if filter has fixed domain
      var newLayer = updatedFilter && updatedFilter.fixedDomain ? oldLayer : oldLayer.updateLayerDomain(state.datasets, updatedFilter);

      var _calculateLayerData4 = (0, _layerUtils.calculateLayerData)(newLayer, state, state.layerData[i]),
          layerData = _calculateLayerData4.layerData,
          layer = _calculateLayerData4.layer;

      newLayers.push(layer);
      newLayerData.push(layerData);
    } else {
      newLayers.push(oldLayer);
      newLayerData.push(state.layerData[i]);
    }
  });

  var newState = _objectSpread({}, state, {
    layers: newLayers,
    layerData: newLayerData
  });

  return newState;
}

function updateAnimationDomain(state) {
  // merge all animatable layer domain and update global config
  var animatableLayers = state.layers.filter(function (l) {
    return l.config.isVisible && l.config.animation && l.config.animation.enabled && Array.isArray(l.animationDomain);
  });

  if (!animatableLayers.length) {
    return _objectSpread({}, state, {
      animationConfig: DEFAULT_ANIMATION_CONFIG
    });
  }

  var mergedDomain = animatableLayers.reduce(function (accu, layer) {
    return [Math.min(accu[0], layer.animationDomain[0]), Math.max(accu[1], layer.animationDomain[1])];
  }, [Number(Infinity), -Infinity]);
  return _objectSpread({}, state, {
    animationConfig: _objectSpread({}, state.animationConfig, {
      currentTime: (0, _filterUtils.isInRange)(state.animationConfig.currentTime, mergedDomain) ? state.animationConfig.currentTime : mergedDomain[0],
      domain: mergedDomain
    })
  });
}
/**
 * Update the status of the editor
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setEditorModeUpdater}
 */


var setEditorModeUpdater = function setEditorModeUpdater(state, _ref19) {
  var mode = _ref19.mode;
  return _objectSpread({}, state, {
    editor: _objectSpread({}, state.editor, {
      mode: mode,
      selectedFeature: null
    })
  });
}; // const featureToFilterValue = (feature) => ({...feature, id: feature.id});

/**
 * Update editor features
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFeaturesUpdater}
 */


exports.setEditorModeUpdater = setEditorModeUpdater;

function setFeaturesUpdater(state, _ref20) {
  var _ref20$features = _ref20.features,
      features = _ref20$features === void 0 ? [] : _ref20$features;
  var lastFeature = features.length && features[features.length - 1];

  var newState = _objectSpread({}, state, {
    editor: _objectSpread({}, state.editor, {
      // only save none filter features to editor
      features: features.filter(function (f) {
        return !(0, _filterUtils.getFilterIdInFeature)(f);
      }),
      mode: lastFeature && lastFeature.properties.isClosed ? _defaultSettings.EDITOR_MODES.EDIT : state.editor.mode
    })
  }); // Retrieve existing feature


  var selectedFeature = state.editor.selectedFeature; // If no feature is selected we can simply return since no operations

  if (!selectedFeature) {
    return newState;
  } // TODO: check if the feature has changed


  var feature = features.find(function (f) {
    return f.id === selectedFeature.id;
  }); // if feature is part of a filter

  var filterId = feature && (0, _filterUtils.getFilterIdInFeature)(feature);

  if (filterId && feature) {
    var featureValue = (0, _filterUtils.featureToFilterValue)(feature, filterId);
    var filterIdx = state.filters.findIndex(function (fil) {
      return fil.id === filterId;
    });
    return setFilterUpdater(newState, {
      idx: filterIdx,
      prop: 'value',
      value: featureValue
    });
  }

  return newState;
}
/**
 * Set the current selected feature
 * @memberof uiStateUpdaters
 * @type {typeof import('./vis-state-updaters').setSelectedFeatureUpdater}
 */


var setSelectedFeatureUpdater = function setSelectedFeatureUpdater(state, _ref21) {
  var feature = _ref21.feature;
  return _objectSpread({}, state, {
    editor: _objectSpread({}, state.editor, {
      selectedFeature: feature
    })
  });
};
/**
 * Delete existing feature from filters
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').deleteFeatureUpdater}
 */


exports.setSelectedFeatureUpdater = setSelectedFeatureUpdater;

function deleteFeatureUpdater(state, _ref22) {
  var feature = _ref22.feature;

  if (!feature) {
    return state;
  }

  var newState = _objectSpread({}, state, {
    editor: _objectSpread({}, state.editor, {
      selectedFeature: null
    })
  });

  if ((0, _filterUtils.getFilterIdInFeature)(feature)) {
    var filterIdx = newState.filters.findIndex(function (f) {
      return f.id === (0, _filterUtils.getFilterIdInFeature)(feature);
    });
    return filterIdx > -1 ? removeFilterUpdater(newState, {
      idx: filterIdx
    }) : newState;
  } // modify editor object


  var newEditor = _objectSpread({}, state.editor, {
    features: state.editor.features.filter(function (f) {
      return f.id !== feature.id;
    }),
    selectedFeature: null
  });

  return _objectSpread({}, state, {
    editor: newEditor
  });
}
/**
 * Toggle feature as layer filter
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setPolygonFilterLayerUpdater}
 */


function setPolygonFilterLayerUpdater(state, payload) {
  var layer = payload.layer,
      feature = payload.feature;
  var filterId = (0, _filterUtils.getFilterIdInFeature)(feature); // let newFilter = null;

  var filterIdx;
  var newLayerId = [layer.id];
  var newState = state; // If polygon filter already exists, we need to find out if the current layer is already included

  if (filterId) {
    filterIdx = state.filters.findIndex(function (f) {
      return f.id === filterId;
    });

    if (!state.filters[filterIdx]) {
      // what if filter doesn't exist?... not possible.
      // because features in the editor is passed in from filters and editors.
      // but we will move this feature back to editor just in case
      var noneFilterFeature = _objectSpread({}, feature, {
        properties: _objectSpread({}, feature.properties, {
          filterId: null
        })
      });

      return _objectSpread({}, state, {
        editor: _objectSpread({}, state.editor, {
          features: [].concat((0, _toConsumableArray2["default"])(state.editor.features), [noneFilterFeature]),
          selectedFeature: noneFilterFeature
        })
      });
    }

    var filter = state.filters[filterIdx];
    var _filter$layerId = filter.layerId,
        layerId = _filter$layerId === void 0 ? [] : _filter$layerId;
    var isLayerIncluded = layerId.includes(layer.id);
    newLayerId = isLayerIncluded ? // if layer is included, remove it
    layerId.filter(function (l) {
      return l !== layer.id;
    }) : [].concat((0, _toConsumableArray2["default"])(layerId), [layer.id]);
  } else {
    // if we haven't create the polygon filter, create it
    var newFilter = (0, _filterUtils.generatePolygonFilter)([], feature);
    filterIdx = state.filters.length; // add feature, remove feature from eidtor

    newState = _objectSpread({}, state, {
      filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [newFilter]),
      editor: _objectSpread({}, state.editor, {
        features: state.editor.features.filter(function (f) {
          return f.id !== feature.id;
        }),
        selectedFeature: newFilter.value
      })
    });
  }

  return setFilterUpdater(newState, {
    idx: filterIdx,
    prop: 'layerId',
    value: newLayerId
  });
}
/**
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').sortTableColumnUpdater}
 * @public
 */


function sortTableColumnUpdater(state, _ref23) {
  var dataId = _ref23.dataId,
      column = _ref23.column,
      mode = _ref23.mode;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  if (!mode) {
    var currentMode = (0, _lodash3["default"])(dataset, ['sortColumn', column]);
    mode = currentMode ? Object.keys(_defaultSettings.SORT_ORDER).find(function (m) {
      return m !== currentMode;
    }) : _defaultSettings.SORT_ORDER.ASCENDING;
  }

  var sorted = (0, _datasetUtils.sortDatasetByColumn)(dataset, column, mode);
  return (0, _utils.set)(['datasets', dataId], sorted, state);
}
/**
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').pinTableColumnUpdater}
 * @public
 */


function pinTableColumnUpdater(state, _ref24) {
  var dataId = _ref24.dataId,
      column = _ref24.column;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var field = dataset.fields.find(function (f) {
    return f.name === column;
  });

  if (!field) {
    return state;
  }

  var pinnedColumns;

  if (Array.isArray(dataset.pinnedColumns) && dataset.pinnedColumns.includes(field.name)) {
    // unpin it
    pinnedColumns = dataset.pinnedColumns.filter(function (co) {
      return co !== field.name;
    });
  } else {
    pinnedColumns = (dataset.pinnedColumns || []).concat(field.name);
  }

  return (0, _utils.set)(['datasets', dataId, 'pinnedColumns'], pinnedColumns, state);
}
/**
 * Copy column content as strings
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').copyTableColumnUpdater}
 * @public
 */


function copyTableColumnUpdater(state, _ref25) {
  var dataId = _ref25.dataId,
      column = _ref25.column;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var fieldIdx = dataset.fields.findIndex(function (f) {
    return f.name === column;
  });

  if (fieldIdx < 0) {
    return state;
  }

  var type = dataset.fields[fieldIdx].type;
  var text = dataset.allData.map(function (d) {
    return (0, _dataUtils.parseFieldValue)(d[fieldIdx], type);
  }).join('\n');
  (0, _copyToClipboard["default"])(text);
  return state;
}
/**
 * Update editor
 * @type {typeof import('./vis-state-updaters').toggleEditorVisibilityUpdater}
 */


function toggleEditorVisibilityUpdater(state) {
  return _objectSpread({}, state, {
    editor: _objectSpread({}, state.editor, {
      visible: !state.editor.visible
    })
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUtdXBkYXRlcnMuanMiXSwibmFtZXMiOlsidmlzU3RhdGVVcGRhdGVycyIsIkRFRkFVTFRfQU5JTUFUSU9OX0NPTkZJRyIsImRvbWFpbiIsImN1cnJlbnRUaW1lIiwic3BlZWQiLCJERUZBVUxUX0VESVRPUiIsIm1vZGUiLCJFRElUT1JfTU9ERVMiLCJEUkFXX1BPTFlHT04iLCJmZWF0dXJlcyIsInNlbGVjdGVkRmVhdHVyZSIsInZpc2libGUiLCJJTklUSUFMX1ZJU19TVEFURSIsIm1hcEluZm8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGF5ZXJzIiwibGF5ZXJEYXRhIiwibGF5ZXJUb0JlTWVyZ2VkIiwibGF5ZXJPcmRlciIsImZpbHRlcnMiLCJmaWx0ZXJUb0JlTWVyZ2VkIiwiZGF0YXNldHMiLCJlZGl0aW5nRGF0YXNldCIsInVuZGVmaW5lZCIsImludGVyYWN0aW9uQ29uZmlnIiwiaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkIiwibGF5ZXJCbGVuZGluZyIsImhvdmVySW5mbyIsImNsaWNrZWQiLCJtb3VzZVBvcyIsInNwbGl0TWFwcyIsImxheWVyQ2xhc3NlcyIsIkxheWVyQ2xhc3NlcyIsImFuaW1hdGlvbkNvbmZpZyIsImVkaXRvciIsImZpbGVMb2FkaW5nIiwiZmlsZUxvYWRpbmdQcm9ncmVzcyIsImxvYWRlcnMiLCJsb2FkT3B0aW9ucyIsInVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YSIsInN0YXRlIiwibGF5ZXIiLCJpZHgiLCJtYXAiLCJseXIiLCJpIiwiZCIsInVwZGF0ZVN0YXRlT25MYXllclZpc2liaWxpdHlDaGFuZ2UiLCJuZXdTdGF0ZSIsImxlbmd0aCIsImNvbmZpZyIsImlzVmlzaWJsZSIsImFuaW1hdGlvbiIsImVuYWJsZWQiLCJ1cGRhdGVBbmltYXRpb25Eb21haW4iLCJsYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIiLCJhY3Rpb24iLCJvbGRMYXllciIsImZpbmRJbmRleCIsImwiLCJpZCIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsIm5ld0NvbmZpZyIsIm5ld0xheWVyIiwidXBkYXRlTGF5ZXJDb25maWciLCJzaG91bGRDYWxjdWxhdGVMYXllckRhdGEiLCJvbGRMYXllckRhdGEiLCJ1cGRhdGVMYXllckRhdGFSZXN1bHQiLCJhZGRPclJlbW92ZVRleHRMYWJlbHMiLCJuZXdGaWVsZHMiLCJ0ZXh0TGFiZWwiLCJuZXdUZXh0TGFiZWwiLCJzbGljZSIsImN1cnJlbnRGaWVsZHMiLCJ0bCIsImZpZWxkIiwibmFtZSIsImZpbHRlciIsImFkZEZpZWxkcyIsImYiLCJpbmNsdWRlcyIsImRlbGV0ZUZpZWxkcyIsImZpbmQiLCJmZCIsIkRFRkFVTFRfVEVYVF9MQUJFTCIsImFmIiwidXBkYXRlVGV4dExhYmVsUHJvcEFuZFZhbHVlIiwicHJvcCIsInZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJzcGxpY2UiLCJsYXllclRleHRMYWJlbENoYW5nZVVwZGF0ZXIiLCJsYXllclR5cGVDaGFuZ2VVcGRhdGVyIiwibmV3VHlwZSIsIm9sZElkIiwiQ29uc29sZSIsImVycm9yIiwiYXNzaWduQ29uZmlnVG9MYXllciIsInZpc0NvbmZpZ1NldHRpbmdzIiwidXBkYXRlTGF5ZXJEb21haW4iLCJzZXR0aW5ncyIsIm9sZExheWVyTWFwIiwib3RoZXJMYXllcnMiLCJsYXllclZpc3VhbENoYW5uZWxDaGFuZ2VVcGRhdGVyIiwiY2hhbm5lbCIsImRhdGFJZCIsImRhdGFzZXQiLCJ1cGRhdGVMYXllclZpc3VhbENoYW5uZWwiLCJsYXllclZpc0NvbmZpZ0NoYW5nZVVwZGF0ZXIiLCJuZXdWaXNDb25maWciLCJ2aXNDb25maWciLCJzZXRGaWx0ZXJVcGRhdGVyIiwidmFsdWVJbmRleCIsIm9sZEZpbHRlciIsIm5ld0ZpbHRlciIsImRhdGFzZXRJZHMiLCJGSUxURVJfVVBEQVRFUl9QUk9QUyIsImRhdGFzZXRJZCIsIm1lcmdlRG9tYWluIiwidXBkYXRlZEZpbHRlciIsIm5ld0RhdGFzZXQiLCJncHUiLCJsYXllcklkIiwibGF5ZXJJZERpZmZlcmVuY2UiLCJsYXllckRhdGFJZHMiLCJsaWQiLCJuZXdEYXRhSWRzIiwiZW5sYXJnZWRGaWx0ZXIiLCJlbmxhcmdlZCIsImRhdGFzZXRJZHNUb0ZpbHRlciIsIkxJTUlURURfRklMVEVSX0VGRkVDVF9QUk9QUyIsImZpbHRlcmVkRGF0YXNldHMiLCJ1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEiLCJzZXRGaWx0ZXJQbG90VXBkYXRlciIsIm5ld1Byb3AiLCJwbG90VHlwZSIsImFsbERhdGEiLCJhZGRGaWx0ZXJVcGRhdGVyIiwibGF5ZXJDb2xvclVJQ2hhbmdlVXBkYXRlciIsInVwZGF0ZUxheWVyQ29sb3JVSSIsInRvZ2dsZUZpbHRlckFuaW1hdGlvblVwZGF0ZXIiLCJpc0FuaW1hdGluZyIsInVwZGF0ZUZpbHRlckFuaW1hdGlvblNwZWVkVXBkYXRlciIsInVwZGF0ZUFuaW1hdGlvblRpbWVVcGRhdGVyIiwidXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXIiLCJlbmxhcmdlRmlsdGVyVXBkYXRlciIsImlzRW5sYXJnZWQiLCJ0b2dnbGVGaWx0ZXJGZWF0dXJlVXBkYXRlciIsImFzc2lnbiIsInJlbW92ZUZpbHRlclVwZGF0ZXIiLCJuZXdGaWx0ZXJzIiwibmV3RWRpdG9yIiwiYWRkTGF5ZXJVcGRhdGVyIiwiZGVmYXVsdERhdGFzZXQiLCJMYXllciIsImlzQ29uZmlnQWN0aXZlIiwicmVtb3ZlTGF5ZXJVcGRhdGVyIiwibGF5ZXJUb1JlbW92ZSIsIm5ld01hcHMiLCJwaWQiLCJpc0xheWVySG92ZXJlZCIsInJlb3JkZXJMYXllclVwZGF0ZXIiLCJvcmRlciIsInJlbW92ZURhdGFzZXRVcGRhdGVyIiwiZGF0YXNldEtleSIsIm5ld0RhdGFzZXRzIiwiaW5kZXhlcyIsInJlZHVjZSIsImxpc3RPZkluZGV4ZXMiLCJpbmRleCIsInB1c2giLCJjdXJyZW50U3RhdGUiLCJpbmRleENvdW50ZXIiLCJjdXJyZW50SW5kZXgiLCJ0b29sdGlwIiwiZmllbGRzVG9TaG93IiwiZmllbGRzIiwidXBkYXRlTGF5ZXJCbGVuZGluZ1VwZGF0ZXIiLCJzaG93RGF0YXNldFRhYmxlVXBkYXRlciIsInJlc2V0TWFwQ29uZmlnVXBkYXRlciIsImluaXRpYWxTdGF0ZSIsInJlY2VpdmVNYXBDb25maWdVcGRhdGVyIiwicGF5bG9hZCIsIm9wdGlvbnMiLCJ2aXNTdGF0ZSIsImtlZXBFeGlzdGluZ0NvbmZpZyIsIm1lcmdlZFN0YXRlIiwibGF5ZXJIb3ZlclVwZGF0ZXIiLCJpbmZvIiwiaW50ZXJhY3Rpb25Db25maWdDaGFuZ2VVcGRhdGVyIiwiY29udHJhZGljdCIsImZvckVhY2giLCJrIiwibGF5ZXJDbGlja1VwZGF0ZXIiLCJjb29yZGluYXRlIiwicGlubmVkIiwicGlja2VkIiwibWFwQ2xpY2tVcGRhdGVyIiwibW91c2VNb3ZlVXBkYXRlciIsImV2dCIsInZhbHVlcyIsInNvbWUiLCJtb3VzZVBvc2l0aW9uIiwicG9pbnQiLCJsbmdMYXQiLCJ0b2dnbGVTcGxpdE1hcFVwZGF0ZXIiLCJjbG9zZVNwZWNpZmljTWFwQXRJbmRleCIsInRvZ2dsZUxheWVyRm9yTWFwVXBkYXRlciIsIm1hcEluZGV4Iiwic20iLCJ1cGRhdGVWaXNEYXRhVXBkYXRlciIsIm5ld0RhdGFFbnRyaWVzIiwiYWNjdSIsImRhdGEiLCJwcmV2aW91c1N0YXRlIiwic3RhdGVXaXRoTmV3RGF0YSIsInNwbGl0TWFwc1RvQmVNZXJnZWQiLCJuZXdMYXllcnMiLCJhdXRvQ3JlYXRlTGF5ZXJzIiwicmVzdWx0IiwiYWRkRGVmYXVsdExheWVycyIsInRvb2x0aXBGaWVsZHMiLCJBcnJheSIsImlzQXJyYXkiLCJhZGREZWZhdWx0VG9vbHRpcHMiLCJ1cGRhdGVkU3RhdGUiLCJpbmRleFRvUmV0cmlldmUiLCJtYXBMYXllcnMiLCJsb2FkRmlsZXNVcGRhdGVyIiwiZmlsZXMiLCJvbkZpbmlzaCIsImxvYWRGaWxlc1N1Y2Nlc3MiLCJmcm9tIiwiaW5pdGlhbEZpbGVMb2FkaW5nUHJvZ3Jlc3MiLCJmaWxlQ2FjaGUiLCJmaWxlc1RvTG9hZCIsIm5leHRTdGF0ZSIsImxvYWROZXh0RmlsZVVwZGF0ZXIiLCJsb2FkRmlsZVN0ZXBTdWNjZXNzVXBkYXRlciIsImZpbGVOYW1lIiwic3RhdGVXaXRoUHJvZ3Jlc3MiLCJ1cGRhdGVGaWxlTG9hZGluZ1Byb2dyZXNzVXBkYXRlciIsInByb2dyZXNzIiwicGVyY2VudCIsIm1lc3NhZ2UiLCJzdGF0ZVdpdGhDYWNoZSIsImxvYWROZXh0RmlsZSIsImZpbGUiLCJyZW1haW5pbmdGaWxlc1RvTG9hZCIsIm1ha2VMb2FkRmlsZVRhc2siLCJiaW1hcCIsImdlbiIsImNvbnRlbnQiLCJlcnIiLCJwcm9jZXNzRmlsZUNvbnRlbnRVcGRhdGVyIiwicGFyc2VQcm9ncmVzcyIsInByZXZQcm9ncmVzcyIsIm5leHRGaWxlQmF0Y2hVcGRhdGVyIiwiYWNjdW11bGF0ZWQiLCJuZXh0IiwiZG9uZSIsImxvYWRGaWxlc0VyclVwZGF0ZXIiLCJ3YXJuIiwiYXBwbHlDUFVGaWx0ZXJVcGRhdGVyIiwiZGF0YUlkcyIsInNldE1hcEluZm9VcGRhdGVyIiwiZW1wdHkiLCJkZWZhdWx0TGF5ZXJzIiwiZm91bmRMYXllcnMiLCJjb25jYXQiLCJfIiwibWVyZ2VkIiwibmV3TGF5ZXJEYXRhIiwiZml4ZWREb21haW4iLCJhbmltYXRhYmxlTGF5ZXJzIiwiYW5pbWF0aW9uRG9tYWluIiwibWVyZ2VkRG9tYWluIiwiTWF0aCIsIm1pbiIsIm1heCIsIk51bWJlciIsIkluZmluaXR5Iiwic2V0RWRpdG9yTW9kZVVwZGF0ZXIiLCJzZXRGZWF0dXJlc1VwZGF0ZXIiLCJsYXN0RmVhdHVyZSIsInByb3BlcnRpZXMiLCJpc0Nsb3NlZCIsIkVESVQiLCJmZWF0dXJlIiwiZmlsdGVySWQiLCJmZWF0dXJlVmFsdWUiLCJmaWx0ZXJJZHgiLCJmaWwiLCJzZXRTZWxlY3RlZEZlYXR1cmVVcGRhdGVyIiwiZGVsZXRlRmVhdHVyZVVwZGF0ZXIiLCJzZXRQb2x5Z29uRmlsdGVyTGF5ZXJVcGRhdGVyIiwibmV3TGF5ZXJJZCIsIm5vbmVGaWx0ZXJGZWF0dXJlIiwiaXNMYXllckluY2x1ZGVkIiwic29ydFRhYmxlQ29sdW1uVXBkYXRlciIsImNvbHVtbiIsImN1cnJlbnRNb2RlIiwiU09SVF9PUkRFUiIsIm0iLCJBU0NFTkRJTkciLCJzb3J0ZWQiLCJwaW5UYWJsZUNvbHVtblVwZGF0ZXIiLCJwaW5uZWRDb2x1bW5zIiwiY28iLCJjb3B5VGFibGVDb2x1bW5VcGRhdGVyIiwiZmllbGRJZHgiLCJ0eXBlIiwidGV4dCIsImpvaW4iLCJ0b2dnbGVFZGl0b3JWaXNpYmlsaXR5VXBkYXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQVFBOztBQUNBOztBQWVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQVNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTtBQUNBOztBQUNBLElBQU1BLGdCQUFnQixHQUFHLElBQXpCO0FBQ0E7O0FBRUE7O0FBQ08sSUFBTUMsd0JBQXdCLEdBQUc7QUFDdENDLEVBQUFBLE1BQU0sRUFBRSxJQUQ4QjtBQUV0Q0MsRUFBQUEsV0FBVyxFQUFFLElBRnlCO0FBR3RDQyxFQUFBQSxLQUFLLEVBQUU7QUFIK0IsQ0FBakM7QUFNUDs7O0FBQ08sSUFBTUMsY0FBYyxHQUFHO0FBQzVCQyxFQUFBQSxJQUFJLEVBQUVDLDhCQUFhQyxZQURTO0FBRTVCQyxFQUFBQSxRQUFRLEVBQUUsRUFGa0I7QUFHNUJDLEVBQUFBLGVBQWUsRUFBRSxJQUhXO0FBSTVCQyxFQUFBQSxPQUFPLEVBQUU7QUFKbUIsQ0FBdkI7QUFPUDs7Ozs7Ozs7O0FBT08sSUFB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QUFpQjtBQUFBLE1BQVRtTSxNQUFTLFVBQVRBLE1BQVM7QUFDOUQsTUFBTWxNLE9BQU8sR0FBR3BFLEtBQUssQ0FBQ25CLFFBQU4sQ0FBZXNGLE1BQWYsQ0FBaEI7O0FBQ0EsTUFBSSxDQUFDQyxPQUFMLEVBQWM7QUFDWixXQUFPcEUsS0FBUDtBQUNEOztBQUNELE1BQU1nUixRQUFRLEdBQUc1TSxPQUFPLENBQUNzRSxNQUFSLENBQWV4SCxTQUFmLENBQXlCLFVBQUF1QixDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDSCxJQUFGLEtBQVdnTyxNQUFmO0FBQUEsR0FBMUIsQ0FBakI7O0FBQ0EsTUFBSVUsUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDaEIsV0FBT2hSLEtBQVA7QUFDRDs7QUFSNkQsTUFTdkRpUixJQVR1RCxHQVMvQzdNLE9BQU8sQ0FBQ3NFLE1BQVIsQ0FBZXNJLFFBQWYsQ0FUK0MsQ0FTdkRDLElBVHVEO0FBVTlELE1BQU1DLElBQUksR0FBRzlNLE9BQU8sQ0FBQzhCLE9BQVIsQ0FBZ0IvRixHQUFoQixDQUFvQixVQUFBRyxDQUFDO0FBQUEsV0FBSSxnQ0FBZ0JBLENBQUMsQ0FBQzBRLFFBQUQsQ0FBakIsRUFBNkJDLElBQTdCLENBQUo7QUFBQSxHQUFyQixFQUE2REUsSUFBN0QsQ0FBa0UsSUFBbEUsQ0FBYjtBQUVBLG1DQUFLRCxJQUFMO0FBRUEsU0FBT2xSLEtBQVA7QUFDRDtBQUVEOzs7Ozs7QUFJTyxTQUFTb1IsNkJBQVQsQ0FBdUNwUixLQUF2QyxFQUE4QztBQUNuRCwyQkFDS0EsS0FETDtBQUVFTixJQUFBQSxNQUFNLG9CQUNETSxLQUFLLENBQUNOLE1BREw7QUFFSnhCLE1BQUFBLE9BQU8sRUFBRSxDQUFDOEIsS0FBSyxDQUFDTixNQUFOLENBQWF4QjtBQUZuQjtBQUZSO0FBT0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQge2Rpc2FibGVTdGFja0NhcHR1cmluZywgd2l0aFRhc2t9IGZyb20gJ3JlYWN0LXBhbG0vdGFza3MnO1xuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2guY2xvbmVkZWVwJztcbmltcG9ydCB1bmlxIGZyb20gJ2xvZGFzaC51bmlxJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XG5pbXBvcnQgeG9yIGZyb20gJ2xvZGFzaC54b3InO1xuaW1wb3J0IGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IHtwYXJzZUZpZWxkVmFsdWV9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuLy8gVGFza3NcbmltcG9ydCB7TE9BRF9GSUxFX1RBU0ssIFVOV1JBUF9UQVNLLCBQUk9DRVNTX0ZJTEVfREFUQSwgREVMQVlfVEFTS30gZnJvbSAndGFza3MvdGFza3MnO1xuLy8gQWN0aW9uc1xuaW1wb3J0IHtcbiAgbG9hZEZpbGVzRXJyLFxuICBsb2FkRmlsZXNTdWNjZXNzLFxuICBsb2FkRmlsZVN0ZXBTdWNjZXNzLFxuICBsb2FkTmV4dEZpbGUsXG4gIG5leHRGaWxlQmF0Y2hcbn0gZnJvbSAnYWN0aW9ucy92aXMtc3RhdGUtYWN0aW9ucyc7XG4vLyBVdGlsc1xuaW1wb3J0IHtmaW5kRmllbGRzVG9TaG93LCBnZXREZWZhdWx0SW50ZXJhY3Rpb259IGZyb20gJ3V0aWxzL2ludGVyYWN0aW9uLXV0aWxzJztcbmltcG9ydCB7XG4gIGFwcGx5RmlsdGVyRmllbGROYW1lLFxuICBhcHBseUZpbHRlcnNUb0RhdGFzZXRzLFxuICBmZWF0dXJlVG9GaWx0ZXJWYWx1ZSxcbiAgRklMVEVSX1VQREFURVJfUFJPUFMsXG4gIGZpbHRlckRhdGFzZXRDUFUsXG4gIGdlbmVyYXRlUG9seWdvbkZpbHRlcixcbiAgZ2V0RGVmYXVsdEZpbHRlcixcbiAgZ2V0RGVmYXVsdEZpbHRlclBsb3RUeXBlLFxuICBnZXRGaWx0ZXJJZEluRmVhdHVyZSxcbiAgZ2V0RmlsdGVyUGxvdCxcbiAgaXNJblJhbmdlLFxuICBMSU1JVEVEX0ZJTFRFUl9FRkZFQ1RfUFJPUFMsXG4gIHVwZGF0ZUZpbHRlckRhdGFJZFxufSBmcm9tICd1dGlscy9maWx0ZXItdXRpbHMnO1xuaW1wb3J0IHthc3NpZ25HcHVDaGFubmVsLCBzZXRGaWx0ZXJHcHVNb2RlfSBmcm9tICd1dGlscy9ncHUtZmlsdGVyLXV0aWxzJztcbmltcG9ydCB7Y3JlYXRlTmV3RGF0YUVudHJ5LCBzb3J0RGF0YXNldEJ5Q29sdW1ufSBmcm9tICd1dGlscy9kYXRhc2V0LXV0aWxzJztcbmltcG9ydCB7c2V0LCB0b0FycmF5fSBmcm9tICd1dGlscy91dGlscyc7XG5cbmltcG9ydCB7Y2FsY3VsYXRlTGF5ZXJEYXRhLCBmaW5kRGVmYXVsdExheWVyfSBmcm9tICd1dGlscy9sYXllci11dGlscyc7XG5cbmltcG9ydCB7XG4gIG1lcmdlQW5pbWF0aW9uQ29uZmlnLFxuICBtZXJnZUZpbHRlcnMsXG4gIG1lcmdlSW50ZXJhY3Rpb25zLFxuICBtZXJnZUxheWVyQmxlbmRpbmcsXG4gIG1lcmdlTGF5ZXJzLFxuICBtZXJnZVNwbGl0TWFwc1xufSBmcm9tICcuL3Zpcy1zdGF0ZS1tZXJnZXInO1xuXG5pbXBvcnQge1xuICBhZGROZXdMYXllcnNUb1NwbGl0TWFwLFxuICBjb21wdXRlU3BsaXRNYXBMYXllcnMsXG4gIHJlbW92ZUxheWVyRnJvbVNwbGl0TWFwc1xufSBmcm9tICd1dGlscy9zcGxpdC1tYXAtdXRpbHMnO1xuXG5pbXBvcnQge0xheWVyLCBMYXllckNsYXNzZXN9IGZyb20gJ2xheWVycyc7XG5pbXBvcnQge0RFRkFVTFRfVEVYVF9MQUJFTH0gZnJvbSAnbGF5ZXJzL2xheWVyLWZhY3RvcnknO1xuaW1wb3J0IHtFRElUT1JfTU9ERVMsIFNPUlRfT1JERVJ9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7cGlja18sIG1lcmdlX30gZnJvbSAnLi9jb21wb3Nlci1oZWxwZXJzJztcbmltcG9ydCB7cHJvY2Vzc0ZpbGVDb250ZW50fSBmcm9tICdhY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zJztcblxuLy8gdHlwZSBpbXBvcnRzXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5GaWVsZH0gRmllbGQgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLkZpbHRlcn0gRmlsdGVyICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5EYXRhc2V0fSBEYXRhc2V0ICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5WaXNTdGF0ZX0gVmlzU3RhdGUgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLkRhdGFzZXRzfSBEYXRhc2V0cyAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuQW5pbWF0aW9uQ29uZmlnfSBBbmltYXRpb25Db25maWcgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLkVkaXRvcn0gRWRpdG9yICovXG5cbi8vIHJlYWN0LXBhbG1cbi8vIGRpc2FibGUgY2FwdHVyZSBleGNlcHRpb24gZm9yIHJlYWN0LXBhbG0gY2FsbCB0byB3aXRoVGFza1xuZGlzYWJsZVN0YWNrQ2FwdHVyaW5nKCk7XG5cbi8qKlxuICogVXBkYXRlcnMgZm9yIGB2aXNTdGF0ZWAgcmVkdWNlci4gQ2FuIGJlIHVzZWQgaW4geW91ciByb290IHJlZHVjZXIgdG8gZGlyZWN0bHkgbW9kaWZ5IGtlcGxlci5nbCdzIHN0YXRlLlxuICogUmVhZCBtb3JlIGFib3V0IFtVc2luZyB1cGRhdGVyc10oLi4vYWR2YW5jZWQtdXNhZ2UvdXNpbmctdXBkYXRlcnMubWQpXG4gKlxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqXG4gKiBpbXBvcnQga2VwbGVyR2xSZWR1Y2VyLCB7dmlzU3RhdGVVcGRhdGVyc30gZnJvbSAna2VwbGVyLmdsL3JlZHVjZXJzJztcbiAqIC8vIFJvb3QgUmVkdWNlclxuICogY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICogIGtlcGxlckdsOiBrZXBsZXJHbFJlZHVjZXIsXG4gKiAgYXBwOiBhcHBSZWR1Y2VyXG4gKiB9KTtcbiAqXG4gKiBjb25zdCBjb21wb3NlZFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICogIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAqICAgIGNhc2UgJ0NMSUNLX0JVVFRPTic6XG4gKiAgICAgIHJldHVybiB7XG4gKiAgICAgICAgLi4uc3RhdGUsXG4gKiAgICAgICAga2VwbGVyR2w6IHtcbiAqICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLFxuICogICAgICAgICAgZm9vOiB7XG4gKiAgICAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbC5mb28sXG4gKiAgICAgICAgICAgICB2aXNTdGF0ZTogdmlzU3RhdGVVcGRhdGVycy5lbmxhcmdlRmlsdGVyVXBkYXRlcihcbiAqICAgICAgICAgICAgICAgc3RhdGUua2VwbGVyR2wuZm9vLnZpc1N0YXRlLFxuICogICAgICAgICAgICAgICB7aWR4OiAwfVxuICogICAgICAgICAgICAgKVxuICogICAgICAgICAgfVxuICogICAgICAgIH1cbiAqICAgICAgfTtcbiAqICB9XG4gKiAgcmV0dXJuIHJlZHVjZXJzKHN0YXRlLCBhY3Rpb24pO1xuICogfTtcbiAqXG4gKiBleHBvcnQgZGVmYXVsdCBjb21wb3NlZFJlZHVjZXI7XG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vLyBAdHMtaWdub3JlXG5jb25zdCB2aXNTdGF0ZVVwZGF0ZXJzID0gbnVsbDtcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqIEB0eXBlIHtBbmltYXRpb25Db25maWd9ICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9BTklNQVRJT05fQ09ORklHID0ge1xuICBkb21haW46IG51bGwsXG4gIGN1cnJlbnRUaW1lOiBudWxsLFxuICBzcGVlZDogMVxufTtcblxuLyoqIEB0eXBlIHtFZGl0b3J9ICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9FRElUT1IgPSB7XG4gIG1vZGU6IEVESVRPUl9NT0RFUy5EUkFXX1BPTFlHT04sXG4gIGZlYXR1cmVzOiBbXSxcbiAgc2VsZWN0ZWRGZWF0dXJlOiBudWxsLFxuICB2aXNpYmxlOiB0cnVlXG59O1xuXG4vKipcbiAqIERlZmF1bHQgaW5pdGlhbCBgdmlzU3RhdGVgXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7VmlzU3RhdGV9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBJTklUSUFMX1ZJU19TVEFURSA9IHtcbiAgLy8gbWFwIGluZm9cbiAgbWFwSW5mbzoge1xuICAgIHRpdGxlOiAnJyxcbiAgICBkZXNjcmlwdGlvbjogJydcbiAgfSxcbiAgLy8gbGF5ZXJzXG4gIGxheWVyczogW10sXG4gIGxheWVyRGF0YTogW10sXG4gIGxheWVyVG9CZU1lcmdlZDogW10sXG4gIGxheWVyT3JkZXI6IFtdLFxuXG4gIC8vIGZpbHRlcnNcbiAgZmlsdGVyczogW10sXG4gIGZpbHRlclRvQmVNZXJnZWQ6IFtdLFxuXG4gIC8vIGEgY29sbGVjdGlvbiBvZiBtdWx0aXBsZSBkYXRhc2V0XG4gIGRhdGFzZXRzOiB7fSxcbiAgZWRpdGluZ0RhdGFzZXQ6IHVuZGVmaW5lZCxcblxuICBpbnRlcmFjdGlvbkNvbmZpZzogZ2V0RGVmYXVsdEludGVyYWN0aW9uKCksXG4gIGludGVyYWN0aW9uVG9CZU1lcmdlZDogdW5kZWZpbmVkLFxuXG4gIGxheWVyQmxlbmRpbmc6ICdub3JtYWwnLFxuICBob3ZlckluZm86IHVuZGVmaW5lZCxcbiAgY2xpY2tlZDogdW5kZWZpbmVkLFxuICBtb3VzZVBvczoge30sXG5cbiAgLy8gdGhpcyBpcyB1c2VkIHdoZW4gdXNlciBzcGxpdCBtYXBzXG4gIHNwbGl0TWFwczogW1xuICAgIC8vIHRoaXMgd2lsbCBjb250YWluIGEgbGlzdCBvZiBvYmplY3RzIHRvXG4gICAgLy8gZGVzY3JpYmUgdGhlIHN0YXRlIG9mIGxheWVyIGF2YWlsYWJpbGl0eSBhbmQgdmlzaWJpbGl0eSBmb3IgZWFjaCBtYXBcbiAgICAvLyBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgICBsYXllcnM6IHtsYXllcl9pZDogdHJ1ZSB8IGZhbHNlfVxuICAgIC8vICAgfVxuICAgIC8vIF1cbiAgXSxcbiAgLy9cbiAgLy8gZGVmYXVsdHMgbGF5ZXIgY2xhc3Nlc1xuICBsYXllckNsYXNzZXM6IExheWVyQ2xhc3NlcyxcblxuICAvLyBkZWZhdWx0IGFuaW1hdGlvblxuICAvLyB0aW1lIGluIHVuaXggdGltZXN0YW1wIChtaWxsaXNlY29uZHMpICh0aGUgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgdGhlIFVuaXggRXBvY2gpXG4gIGFuaW1hdGlvbkNvbmZpZzogREVGQVVMVF9BTklNQVRJT05fQ09ORklHLFxuXG4gIGVkaXRvcjogREVGQVVMVF9FRElUT1IsXG5cbiAgZmlsZUxvYWRpbmc6IGZhbHNlLFxuICBmaWxlTG9hZGluZ1Byb2dyZXNzOiB7fSxcblxuICBsb2FkZXJzOiBbXSxcbiAgbG9hZE9wdGlvbnM6IHt9XG59O1xuXG4vKipcbiAqIFVwZGF0ZSBzdGF0ZSB3aXRoIHVwZGF0ZWQgbGF5ZXIgYW5kIGxheWVyRGF0YVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhfVxuICpcbiAqL1xuZnVuY3Rpb24gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSkge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGxheWVyczogc3RhdGUubGF5ZXJzLm1hcCgobHlyLCBpKSA9PiAoaSA9PT0gaWR4ID8gbGF5ZXIgOiBseXIpKSxcbiAgICBsYXllckRhdGE6IGxheWVyRGF0YVxuICAgICAgPyBzdGF0ZS5sYXllckRhdGEubWFwKChkLCBpKSA9PiAoaSA9PT0gaWR4ID8gbGF5ZXJEYXRhIDogZCkpXG4gICAgICA6IHN0YXRlLmxheWVyRGF0YVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RhdGVPbkxheWVyVmlzaWJpbGl0eUNoYW5nZShzdGF0ZSwgbGF5ZXIpIHtcbiAgbGV0IG5ld1N0YXRlID0gc3RhdGU7XG4gIGlmIChzdGF0ZS5zcGxpdE1hcHMubGVuZ3RoKSB7XG4gICAgbmV3U3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNwbGl0TWFwczogbGF5ZXIuY29uZmlnLmlzVmlzaWJsZVxuICAgICAgICA/IGFkZE5ld0xheWVyc1RvU3BsaXRNYXAoc3RhdGUuc3BsaXRNYXBzLCBsYXllcilcbiAgICAgICAgOiByZW1vdmVMYXllckZyb21TcGxpdE1hcHMoc3RhdGUuc3BsaXRNYXBzLCBsYXllcilcbiAgICB9O1xuICB9XG5cbiAgaWYgKGxheWVyLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlZCkge1xuICAgIG5ld1N0YXRlID0gdXBkYXRlQW5pbWF0aW9uRG9tYWluKHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgYmFzZSBjb25maWc6IGRhdGFJZCwgbGFiZWwsIGNvbHVtbiwgaXNWaXNpYmxlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubGF5ZXJDb25maWdDaGFuZ2VVcGRhdGVyfVxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB7b2xkTGF5ZXJ9ID0gYWN0aW9uO1xuICBjb25zdCBpZHggPSBzdGF0ZS5sYXllcnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gb2xkTGF5ZXIuaWQpO1xuICBjb25zdCBwcm9wcyA9IE9iamVjdC5rZXlzKGFjdGlvbi5uZXdDb25maWcpO1xuICBsZXQgbmV3TGF5ZXIgPSBvbGRMYXllci51cGRhdGVMYXllckNvbmZpZyhhY3Rpb24ubmV3Q29uZmlnKTtcblxuICBsZXQgbGF5ZXJEYXRhO1xuXG4gIC8vIGxldCBuZXdMYXllcjtcbiAgaWYgKG5ld0xheWVyLnNob3VsZENhbGN1bGF0ZUxheWVyRGF0YShwcm9wcykpIHtcbiAgICBjb25zdCBvbGRMYXllckRhdGEgPSBzdGF0ZS5sYXllckRhdGFbaWR4XTtcbiAgICBjb25zdCB1cGRhdGVMYXllckRhdGFSZXN1bHQgPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlLCBvbGRMYXllckRhdGEpO1xuXG4gICAgbGF5ZXJEYXRhID0gdXBkYXRlTGF5ZXJEYXRhUmVzdWx0LmxheWVyRGF0YTtcbiAgICBuZXdMYXllciA9IHVwZGF0ZUxheWVyRGF0YVJlc3VsdC5sYXllcjtcbiAgfVxuXG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xuICBpZiAoJ2lzVmlzaWJsZScgaW4gYWN0aW9uLm5ld0NvbmZpZykge1xuICAgIG5ld1N0YXRlID0gdXBkYXRlU3RhdGVPbkxheWVyVmlzaWJpbGl0eUNoYW5nZShzdGF0ZSwgbmV3TGF5ZXIpO1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShuZXdTdGF0ZSwge1xuICAgIGxheWVyOiBuZXdMYXllcixcbiAgICBsYXllckRhdGEsXG4gICAgaWR4XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRPclJlbW92ZVRleHRMYWJlbHMobmV3RmllbGRzLCB0ZXh0TGFiZWwpIHtcbiAgbGV0IG5ld1RleHRMYWJlbCA9IHRleHRMYWJlbC5zbGljZSgpO1xuXG4gIGNvbnN0IGN1cnJlbnRGaWVsZHMgPSB0ZXh0TGFiZWwubWFwKHRsID0+IHRsLmZpZWxkICYmIHRsLmZpZWxkLm5hbWUpLmZpbHRlcihkID0+IGQpO1xuXG4gIGNvbnN0IGFkZEZpZWxkcyA9IG5ld0ZpZWxkcy5maWx0ZXIoZiA9PiAhY3VycmVudEZpZWxkcy5pbmNsdWRlcyhmLm5hbWUpKTtcbiAgY29uc3QgZGVsZXRlRmllbGRzID0gY3VycmVudEZpZWxkcy5maWx0ZXIoZiA9PiAhbmV3RmllbGRzLmZpbmQoZmQgPT4gZmQubmFtZSA9PT0gZikpO1xuXG4gIC8vIGRlbGV0ZVxuICBuZXdUZXh0TGFiZWwgPSBuZXdUZXh0TGFiZWwuZmlsdGVyKHRsID0+IHRsLmZpZWxkICYmICFkZWxldGVGaWVsZHMuaW5jbHVkZXModGwuZmllbGQubmFtZSkpO1xuICBuZXdUZXh0TGFiZWwgPSAhbmV3VGV4dExhYmVsLmxlbmd0aCA/IFtERUZBVUxUX1RFWFRfTEFCRUxdIDogbmV3VGV4dExhYmVsO1xuXG4gIC8vIGFkZFxuICBuZXdUZXh0TGFiZWwgPSBbXG4gICAgLi4ubmV3VGV4dExhYmVsLmZpbHRlcih0bCA9PiB0bC5maWVsZCksXG4gICAgLi4uYWRkRmllbGRzLm1hcChhZiA9PiAoe1xuICAgICAgLi4uREVGQVVMVF9URVhUX0xBQkVMLFxuICAgICAgZmllbGQ6IGFmXG4gICAgfSkpXG4gIF07XG5cbiAgcmV0dXJuIG5ld1RleHRMYWJlbDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGV4dExhYmVsUHJvcEFuZFZhbHVlKGlkeCwgcHJvcCwgdmFsdWUsIHRleHRMYWJlbCkge1xuICBpZiAoIXRleHRMYWJlbFtpZHhdLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgcmV0dXJuIHRleHRMYWJlbDtcbiAgfVxuXG4gIGxldCBuZXdUZXh0TGFiZWwgPSB0ZXh0TGFiZWwuc2xpY2UoKTtcblxuICBpZiAocHJvcCAmJiAodmFsdWUgfHwgdGV4dExhYmVsLmxlbmd0aCA9PT0gMSkpIHtcbiAgICBuZXdUZXh0TGFiZWwgPSB0ZXh0TGFiZWwubWFwKCh0bCwgaSkgPT4gKGkgPT09IGlkeCA/IHsuLi50bCwgW3Byb3BdOiB2YWx1ZX0gOiB0bCkpO1xuICB9IGVsc2UgaWYgKHByb3AgPT09ICdmaWVsZCcgJiYgdmFsdWUgPT09IG51bGwgJiYgdGV4dExhYmVsLmxlbmd0aCA+IDEpIHtcbiAgICAvLyByZW1vdmUgbGFiZWwgd2hlbiBmaWVsZCB2YWx1ZSBpcyBzZXQgdG8gbnVsbFxuICAgIG5ld1RleHRMYWJlbC5zcGxpY2UoaWR4LCAxKTtcbiAgfVxuXG4gIHJldHVybiBuZXdUZXh0TGFiZWw7XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIGJhc2UgY29uZmlnOiBkYXRhSWQsIGxhYmVsLCBjb2x1bW4sIGlzVmlzaWJsZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxheWVyVGV4dExhYmVsQ2hhbmdlVXBkYXRlcn1cbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJUZXh0TGFiZWxDaGFuZ2VVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge29sZExheWVyLCBpZHgsIHByb3AsIHZhbHVlfSA9IGFjdGlvbjtcbiAgY29uc3Qge3RleHRMYWJlbH0gPSBvbGRMYXllci5jb25maWc7XG5cbiAgbGV0IG5ld1RleHRMYWJlbCA9IHRleHRMYWJlbC5zbGljZSgpO1xuICBpZiAoIXRleHRMYWJlbFtpZHhdICYmIGlkeCA9PT0gdGV4dExhYmVsLmxlbmd0aCkge1xuICAgIC8vIGlmIGlkeCBpcyBzZXQgdG8gbGVuZ3RoLCBhZGQgZW1wdHkgdGV4dCBsYWJlbFxuICAgIG5ld1RleHRMYWJlbCA9IFsuLi50ZXh0TGFiZWwsIERFRkFVTFRfVEVYVF9MQUJFTF07XG4gIH1cblxuICBpZiAoaWR4ID09PSAnYWxsJyAmJiBwcm9wID09PSAnZmllbGRzJykge1xuICAgIG5ld1RleHRMYWJlbCA9IGFkZE9yUmVtb3ZlVGV4dExhYmVscyh2YWx1ZSwgdGV4dExhYmVsKTtcbiAgfSBlbHNlIHtcbiAgICBuZXdUZXh0TGFiZWwgPSB1cGRhdGVUZXh0TGFiZWxQcm9wQW5kVmFsdWUoaWR4LCBwcm9wLCB2YWx1ZSwgbmV3VGV4dExhYmVsKTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSB0ZXh0IGxhYmVsIHByb3AgYW5kIHZhbHVlXG4gIHJldHVybiBsYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIoc3RhdGUsIHtcbiAgICBvbGRMYXllcixcbiAgICBuZXdDb25maWc6IHt0ZXh0TGFiZWw6IG5ld1RleHRMYWJlbH1cbiAgfSk7XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIHR5cGUuIFByZXZpZXdzIGxheWVyIGNvbmZpZyB3aWxsIGJlIGNvcGllZCBpZiBhcHBsaWNhYmxlLlxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxheWVyVHlwZUNoYW5nZVVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclR5cGVDaGFuZ2VVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge29sZExheWVyLCBuZXdUeXBlfSA9IGFjdGlvbjtcbiAgaWYgKCFvbGRMYXllcikge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBjb25zdCBvbGRJZCA9IG9sZExheWVyLmlkO1xuICBjb25zdCBpZHggPSBzdGF0ZS5sYXllcnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gb2xkSWQpO1xuXG4gIGlmICghc3RhdGUubGF5ZXJDbGFzc2VzW25ld1R5cGVdKSB7XG4gICAgQ29uc29sZS5lcnJvcihgJHtuZXdUeXBlfSBpcyBub3QgYSB2YWxpZCBsYXllciB0eXBlYCk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgLy8gZ2V0IGEgbWludCBsYXllciwgd2l0aCBuZXcgaWQgYW5kIHR5cGVcbiAgLy8gYmVjYXVzZSBkZWNrLmdsIHVzZXMgaWQgdG8gbWF0Y2ggYmV0d2VlbiBuZXcgYW5kIG9sZCBsYXllci5cbiAgLy8gSWYgdHlwZSBoYXMgY2hhbmdlZCBidXQgaWQgaXMgdGhlIHNhbWUsIGl0IHdpbGwgYnJlYWtcbiAgY29uc3QgbmV3TGF5ZXIgPSBuZXcgc3RhdGUubGF5ZXJDbGFzc2VzW25ld1R5cGVdKCk7XG5cbiAgbmV3TGF5ZXIuYXNzaWduQ29uZmlnVG9MYXllcihvbGRMYXllci5jb25maWcsIG9sZExheWVyLnZpc0NvbmZpZ1NldHRpbmdzKTtcblxuICAvLyBpZiAobmV3TGF5ZXIuY29uZmlnLmRhdGFJZCkge1xuICAvLyAgIGNvbnN0IGRhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tuZXdMYXllci5jb25maWcuZGF0YUlkXTtcbiAgLy8gICBuZXdMYXllci51cGRhdGVMYXllckRvbWFpbihkYXRhc2V0KTtcbiAgLy8gfVxuICBuZXdMYXllci51cGRhdGVMYXllckRvbWFpbihzdGF0ZS5kYXRhc2V0cyk7XG4gIGNvbnN0IHtsYXllckRhdGEsIGxheWVyfSA9IGNhbGN1bGF0ZUxheWVyRGF0YShuZXdMYXllciwgc3RhdGUpO1xuICBsZXQgbmV3U3RhdGUgPSB1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEoc3RhdGUsIHtsYXllckRhdGEsIGxheWVyLCBpZHh9KTtcblxuICBpZiAobGF5ZXIuY29uZmlnLmFuaW1hdGlvbi5lbmFibGVkIHx8IG9sZExheWVyLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlZCkge1xuICAgIG5ld1N0YXRlID0gdXBkYXRlQW5pbWF0aW9uRG9tYWluKG5ld1N0YXRlKTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSBzcGxpdE1hcCBsYXllciBpZFxuICBpZiAoc3RhdGUuc3BsaXRNYXBzLmxlbmd0aCkge1xuICAgIG5ld1N0YXRlID0ge1xuICAgICAgLi4ubmV3U3RhdGUsXG4gICAgICBzcGxpdE1hcHM6IG5ld1N0YXRlLnNwbGl0TWFwcy5tYXAoc2V0dGluZ3MgPT4ge1xuICAgICAgICBjb25zdCB7W29sZElkXTogb2xkTGF5ZXJNYXAsIC4uLm90aGVyTGF5ZXJzfSA9IHNldHRpbmdzLmxheWVycztcbiAgICAgICAgcmV0dXJuIG9sZElkIGluIHNldHRpbmdzLmxheWVyc1xuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAuLi5zZXR0aW5ncyxcbiAgICAgICAgICAgICAgbGF5ZXJzOiB7XG4gICAgICAgICAgICAgICAgLi4ub3RoZXJMYXllcnMsXG4gICAgICAgICAgICAgICAgW2xheWVyLmlkXTogb2xkTGF5ZXJNYXBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDogc2V0dGluZ3M7XG4gICAgICB9KVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIHZpc3VhbCBjaGFubmVsXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubGF5ZXJWaXN1YWxDaGFubmVsQ2hhbmdlVXBkYXRlcn1cbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJWaXN1YWxDaGFubmVsQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtvbGRMYXllciwgbmV3Q29uZmlnLCBjaGFubmVsfSA9IGFjdGlvbjtcbiAgaWYgKCFvbGRMYXllci5jb25maWcuZGF0YUlkKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IGRhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tvbGRMYXllci5jb25maWcuZGF0YUlkXTtcblxuICBjb25zdCBpZHggPSBzdGF0ZS5sYXllcnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gb2xkTGF5ZXIuaWQpO1xuICBjb25zdCBuZXdMYXllciA9IG9sZExheWVyLnVwZGF0ZUxheWVyQ29uZmlnKG5ld0NvbmZpZyk7XG5cbiAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsKGRhdGFzZXQsIGNoYW5uZWwpO1xuXG4gIGNvbnN0IG9sZExheWVyRGF0YSA9IHN0YXRlLmxheWVyRGF0YVtpZHhdO1xuICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlLCBvbGRMYXllckRhdGEpO1xuXG4gIHJldHVybiB1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEoc3RhdGUsIHtsYXllckRhdGEsIGxheWVyLCBpZHh9KTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgYHZpc0NvbmZpZ2BcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sYXllclZpc0NvbmZpZ0NoYW5nZVVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclZpc0NvbmZpZ0NoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB7b2xkTGF5ZXJ9ID0gYWN0aW9uO1xuICBjb25zdCBpZHggPSBzdGF0ZS5sYXllcnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gb2xkTGF5ZXIuaWQpO1xuICBjb25zdCBwcm9wcyA9IE9iamVjdC5rZXlzKGFjdGlvbi5uZXdWaXNDb25maWcpO1xuICBjb25zdCBuZXdWaXNDb25maWcgPSB7XG4gICAgLi4ub2xkTGF5ZXIuY29uZmlnLnZpc0NvbmZpZyxcbiAgICAuLi5hY3Rpb24ubmV3VmlzQ29uZmlnXG4gIH07XG5cbiAgY29uc3QgbmV3TGF5ZXIgPSBvbGRMYXllci51cGRhdGVMYXllckNvbmZpZyh7dmlzQ29uZmlnOiBuZXdWaXNDb25maWd9KTtcblxuICBpZiAobmV3TGF5ZXIuc2hvdWxkQ2FsY3VsYXRlTGF5ZXJEYXRhKHByb3BzKSkge1xuICAgIGNvbnN0IG9sZExheWVyRGF0YSA9IHN0YXRlLmxheWVyRGF0YVtpZHhdO1xuICAgIGNvbnN0IHtsYXllckRhdGEsIGxheWVyfSA9IGNhbGN1bGF0ZUxheWVyRGF0YShuZXdMYXllciwgc3RhdGUsIG9sZExheWVyRGF0YSk7XG4gICAgcmV0dXJuIHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShzdGF0ZSwge2xheWVyRGF0YSwgbGF5ZXIsIGlkeH0pO1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShzdGF0ZSwge2xheWVyOiBuZXdMYXllciwgaWR4fSk7XG59XG5cbi8qKlxuICogVXBkYXRlIGZpbHRlciBwcm9wZXJ0eVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNldEZpbHRlclVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge2lkeCwgcHJvcCwgdmFsdWUsIHZhbHVlSW5kZXggPSAwfSA9IGFjdGlvbjtcblxuICBjb25zdCBvbGRGaWx0ZXIgPSBzdGF0ZS5maWx0ZXJzW2lkeF07XG4gIGxldCBuZXdGaWx0ZXIgPSBzZXQoW3Byb3BdLCB2YWx1ZSwgb2xkRmlsdGVyKTtcbiAgbGV0IG5ld1N0YXRlID0gc3RhdGU7XG5cbiAgY29uc3Qge2RhdGFJZH0gPSBuZXdGaWx0ZXI7XG5cbiAgLy8gRW5zdXJpbmcgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICBsZXQgZGF0YXNldElkcyA9IHRvQXJyYXkoZGF0YUlkKTtcblxuICBzd2l0Y2ggKHByb3ApIHtcbiAgICAvLyBUT0RPOiBOZXh0IFBSIGZvciBVSSBpZiB3ZSB1cGRhdGUgZGF0YUlkLCB3ZSBuZWVkIHRvIGNvbnNpZGVyIHR3byBjYXNlczpcbiAgICAvLyAxLiBkYXRhSWQgaXMgZW1wdHk6IGNyZWF0ZSBhIGRlZmF1bHQgZmlsdGVyXG4gICAgLy8gMi4gQWRkIGEgbmV3IGRhdGFzZXQgaWRcbiAgICBjYXNlIEZJTFRFUl9VUERBVEVSX1BST1BTLmRhdGFJZDpcbiAgICAgIC8vIGlmIHRyeWluZyB0byB1cGRhdGUgZmlsdGVyIGRhdGFJZC4gY3JlYXRlIGFuIGVtcHR5IG5ldyBmaWx0ZXJcbiAgICAgIG5ld0ZpbHRlciA9IHVwZGF0ZUZpbHRlckRhdGFJZChkYXRhSWQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZJTFRFUl9VUERBVEVSX1BST1BTLm5hbWU6XG4gICAgICAvLyB3ZSBhcmUgc3VwcG9ydGluZyB0aGUgY3VycmVudCBmdW5jdGlvbmFsaXR5XG4gICAgICAvLyBUT0RPOiBOZXh0IFBSIGZvciBVSSBmaWx0ZXIgbmFtZSB3aWxsIG9ubHkgdXBkYXRlIGZpbHRlciBuYW1lIGJ1dCBpdCB3b24ndCBoYXZlIHNpZGUgZWZmZWN0c1xuICAgICAgLy8gd2UgYXJlIGdvbm5hIHVzZSBwYWlyIG9mIGRhdGFzZXRzIGFuZCBmaWVsZElkeCB0byB1cGRhdGUgdGhlIGZpbHRlclxuICAgICAgY29uc3QgZGF0YXNldElkID0gbmV3RmlsdGVyLmRhdGFJZFt2YWx1ZUluZGV4XTtcbiAgICAgIGNvbnN0IHtmaWx0ZXI6IHVwZGF0ZWRGaWx0ZXIsIGRhdGFzZXQ6IG5ld0RhdGFzZXR9ID0gYXBwbHlGaWx0ZXJGaWVsZE5hbWUoXG4gICAgICAgIG5ld0ZpbHRlcixcbiAgICAgICAgc3RhdGUuZGF0YXNldHNbZGF0YXNldElkXSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHZhbHVlSW5kZXgsXG4gICAgICAgIHttZXJnZURvbWFpbjogZmFsc2V9XG4gICAgICApO1xuICAgICAgaWYgKCF1cGRhdGVkRmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgbmV3RmlsdGVyID0gdXBkYXRlZEZpbHRlcjtcblxuICAgICAgaWYgKG5ld0ZpbHRlci5ncHUpIHtcbiAgICAgICAgbmV3RmlsdGVyID0gc2V0RmlsdGVyR3B1TW9kZShuZXdGaWx0ZXIsIHN0YXRlLmZpbHRlcnMpO1xuICAgICAgICBuZXdGaWx0ZXIgPSBhc3NpZ25HcHVDaGFubmVsKG5ld0ZpbHRlciwgc3RhdGUuZmlsdGVycyk7XG4gICAgICB9XG5cbiAgICAgIG5ld1N0YXRlID0gc2V0KFsnZGF0YXNldHMnLCBkYXRhc2V0SWRdLCBuZXdEYXRhc2V0LCBzdGF0ZSk7XG5cbiAgICAgIC8vIG9ubHkgZmlsdGVyIHRoZSBjdXJyZW50IGRhdGFzZXRcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX1VQREFURVJfUFJPUFMubGF5ZXJJZDpcbiAgICAgIC8vIFdlIG5lZWQgdG8gdXBkYXRlIG9ubHkgZGF0YXNldElkL3MgaWYgd2UgaGF2ZSBhZGRlZC9yZW1vdmVkIGxheWVyc1xuICAgICAgLy8gLSBjaGVjayBmb3IgbGF5ZXJJZCBjaGFuZ2VzIChYT1Igd29ya3MgYmVjYXVzZSBvZiBzdHJpbmcgdmFsdWVzKVxuICAgICAgLy8gaWYgbm8gZGlmZmVyZW5jZXMgYmV0d2VlbiBsYXllcklkcywgZG9uJ3QgZG8gYW55IGZpbHRlcmluZ1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgbGF5ZXJJZERpZmZlcmVuY2UgPSB4b3IobmV3RmlsdGVyLmxheWVySWQsIG9sZEZpbHRlci5sYXllcklkKTtcblxuICAgICAgY29uc3QgbGF5ZXJEYXRhSWRzID0gdW5pcShcbiAgICAgICAgbGF5ZXJJZERpZmZlcmVuY2VcbiAgICAgICAgICAubWFwKGxpZCA9PlxuICAgICAgICAgICAgZ2V0KFxuICAgICAgICAgICAgICBzdGF0ZS5sYXllcnMuZmluZChsID0+IGwuaWQgPT09IGxpZCksXG4gICAgICAgICAgICAgIFsnY29uZmlnJywgJ2RhdGFJZCddXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgIC5maWx0ZXIoZCA9PiBkKVxuICAgICAgKTtcblxuICAgICAgLy8gb25seSBmaWx0ZXIgZGF0YXNldHNJZHNcbiAgICAgIGRhdGFzZXRJZHMgPSBsYXllckRhdGFJZHM7XG5cbiAgICAgIC8vIFVwZGF0ZSBuZXdGaWx0ZXIgZGF0YUlkc1xuICAgICAgY29uc3QgbmV3RGF0YUlkcyA9IHVuaXEoXG4gICAgICAgIG5ld0ZpbHRlci5sYXllcklkXG4gICAgICAgICAgLm1hcChsaWQgPT5cbiAgICAgICAgICAgIGdldChcbiAgICAgICAgICAgICAgc3RhdGUubGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSBsaWQpLFxuICAgICAgICAgICAgICBbJ2NvbmZpZycsICdkYXRhSWQnXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAuZmlsdGVyKGQgPT4gZClcbiAgICAgICk7XG5cbiAgICAgIG5ld0ZpbHRlciA9IHtcbiAgICAgICAgLi4ubmV3RmlsdGVyLFxuICAgICAgICBkYXRhSWQ6IG5ld0RhdGFJZHNcbiAgICAgIH07XG5cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGNvbnN0IGVubGFyZ2VkRmlsdGVyID0gc3RhdGUuZmlsdGVycy5maW5kKGYgPT4gZi5lbmxhcmdlZCk7XG5cbiAgaWYgKGVubGFyZ2VkRmlsdGVyICYmIGVubGFyZ2VkRmlsdGVyLmlkICE9PSBuZXdGaWx0ZXIuaWQpIHtcbiAgICAvLyB0aGVyZSBzaG91bGQgYmUgb25seSBvbmUgZW5sYXJnZWQgZmlsdGVyXG4gICAgbmV3RmlsdGVyLmVubGFyZ2VkID0gZmFsc2U7XG4gIH1cblxuICAvLyBzYXZlIG5ldyBmaWx0ZXJzIHRvIG5ld1N0YXRlXG4gIG5ld1N0YXRlID0gc2V0KFsnZmlsdGVycycsIGlkeF0sIG5ld0ZpbHRlciwgbmV3U3RhdGUpO1xuXG4gIC8vIGlmIHdlIGFyZSBjdXJyZW50bHkgc2V0dGluZyBhIHByb3AgdGhhdCBvbmx5IHJlcXVpcmVzIHRvIGZpbHRlciB0aGUgY3VycmVudFxuICAvLyBkYXRhc2V0IHdlIHdpbGwgcGFzcyBvbmx5IHRoZSBjdXJyZW50IGRhdGFzZXQgdG8gYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyBhbmRcbiAgLy8gdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhIG90aGVyd2lzZSB3ZSBwYXNzIHRoZSBhbGwgbGlzdCBvZiBkYXRhc2V0cyBhcyBkZWZpbmVkIGluIGRhdGFJZFxuICBjb25zdCBkYXRhc2V0SWRzVG9GaWx0ZXIgPSBMSU1JVEVEX0ZJTFRFUl9FRkZFQ1RfUFJPUFNbcHJvcF1cbiAgICA/IFtkYXRhc2V0SWRzW3ZhbHVlSW5kZXhdXVxuICAgIDogZGF0YXNldElkcztcblxuICAvLyBmaWx0ZXIgZGF0YVxuICBjb25zdCBmaWx0ZXJlZERhdGFzZXRzID0gYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyhcbiAgICBkYXRhc2V0SWRzVG9GaWx0ZXIsXG4gICAgbmV3U3RhdGUuZGF0YXNldHMsXG4gICAgbmV3U3RhdGUuZmlsdGVycyxcbiAgICBuZXdTdGF0ZS5sYXllcnNcbiAgKTtcblxuICBuZXdTdGF0ZSA9IHNldChbJ2RhdGFzZXRzJ10sIGZpbHRlcmVkRGF0YXNldHMsIG5ld1N0YXRlKTtcbiAgLy8gZGF0YUlkIGlzIGFuIGFycmF5XG4gIC8vIHBhc3Mgb25seSB0aGUgZGF0YXNldCB3ZSBuZWVkIHRvIHVwZGF0ZVxuICBuZXdTdGF0ZSA9IHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShuZXdTdGF0ZSwgZGF0YXNldElkc1RvRmlsdGVyLCBuZXdGaWx0ZXIpO1xuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHByb3BlcnR5IG9mIGEgZmlsdGVyIHBsb3RcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zZXRGaWx0ZXJQbG90VXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEZpbHRlclBsb3RVcGRhdGVyID0gKHN0YXRlLCB7aWR4LCBuZXdQcm9wLCB2YWx1ZUluZGV4ID0gMH0pID0+IHtcbiAgbGV0IG5ld0ZpbHRlciA9IHsuLi5zdGF0ZS5maWx0ZXJzW2lkeF0sIC4uLm5ld1Byb3B9O1xuICBjb25zdCBwcm9wID0gT2JqZWN0LmtleXMobmV3UHJvcClbMF07XG4gIGlmIChwcm9wID09PSAneUF4aXMnKSB7XG4gICAgY29uc3QgcGxvdFR5cGUgPSBnZXREZWZhdWx0RmlsdGVyUGxvdFR5cGUobmV3RmlsdGVyKTtcbiAgICAvLyBUT0RPOiBwbG90IGlzIG5vdCBzdXBwb3J0ZWQgaW4gbXVsdGkgZGF0YXNldCBmaWx0ZXIgZm9yIG5vd1xuICAgIGlmIChwbG90VHlwZSkge1xuICAgICAgbmV3RmlsdGVyID0ge1xuICAgICAgICAuLi5uZXdGaWx0ZXIsXG4gICAgICAgIC4uLmdldEZpbHRlclBsb3QoXG4gICAgICAgICAgey4uLm5ld0ZpbHRlciwgcGxvdFR5cGV9LFxuICAgICAgICAgIHN0YXRlLmRhdGFzZXRzW25ld0ZpbHRlci5kYXRhSWRbdmFsdWVJbmRleF1dLmFsbERhdGFcbiAgICAgICAgKSxcbiAgICAgICAgcGxvdFR5cGVcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBmaWx0ZXJzOiBzdGF0ZS5maWx0ZXJzLm1hcCgoZiwgaSkgPT4gKGkgPT09IGlkeCA/IG5ld0ZpbHRlciA6IGYpKVxuICB9O1xufTtcblxuLyoqXG4gKiBBZGQgYSBuZXcgZmlsdGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuYWRkRmlsdGVyVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGFkZEZpbHRlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT5cbiAgIWFjdGlvbi5kYXRhSWRcbiAgICA/IHN0YXRlXG4gICAgOiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJzOiBbLi4uc3RhdGUuZmlsdGVycywgZ2V0RGVmYXVsdEZpbHRlcihhY3Rpb24uZGF0YUlkKV1cbiAgICAgIH07XG5cbi8qKlxuICogU2V0IGxheWVyIGNvbG9yIHBhbGV0dGUgdWkgc3RhdGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sYXllckNvbG9yVUlDaGFuZ2VVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3QgbGF5ZXJDb2xvclVJQ2hhbmdlVXBkYXRlciA9IChzdGF0ZSwge29sZExheWVyLCBwcm9wLCBuZXdDb25maWd9KSA9PiB7XG4gIGNvbnN0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb2xvclVJKHByb3AsIG5ld0NvbmZpZyk7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBzdGF0ZS5sYXllcnMubWFwKGwgPT4gKGwuaWQgPT09IG9sZExheWVyLmlkID8gbmV3TGF5ZXIgOiBsKSlcbiAgfTtcbn07XG5cbi8qKlxuICogU3RhcnQgYW5kIGVuZCBmaWx0ZXIgYW5pbWF0aW9uXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlRmlsdGVyQW5pbWF0aW9uVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUZpbHRlckFuaW1hdGlvblVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKChmLCBpKSA9PiAoaSA9PT0gYWN0aW9uLmlkeCA/IHsuLi5mLCBpc0FuaW1hdGluZzogIWYuaXNBbmltYXRpbmd9IDogZikpXG59KTtcblxuLyoqXG4gKiBDaGFuZ2UgZmlsdGVyIGFuaW1hdGlvbiBzcGVlZFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnVwZGF0ZUZpbHRlckFuaW1hdGlvblNwZWVkVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUZpbHRlckFuaW1hdGlvblNwZWVkVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoKGYsIGkpID0+IChpID09PSBhY3Rpb24uaWR4ID8gey4uLmYsIHNwZWVkOiBhY3Rpb24uc3BlZWR9IDogZikpXG59KTtcblxuLyoqXG4gKiBSZXNldCBhbmltYXRpb24gY29uZmlnIGN1cnJlbnQgdGltZSB0byBhIHNwZWNpZmllZCB2YWx1ZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnVwZGF0ZUFuaW1hdGlvblRpbWVVcGRhdGVyfVxuICogQHB1YmxpY1xuICpcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUFuaW1hdGlvblRpbWVVcGRhdGVyID0gKHN0YXRlLCB7dmFsdWV9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgYW5pbWF0aW9uQ29uZmlnOiB7XG4gICAgLi4uc3RhdGUuYW5pbWF0aW9uQ29uZmlnLFxuICAgIGN1cnJlbnRUaW1lOiB2YWx1ZVxuICB9XG59KTtcblxuLyoqXG4gKiBVcGRhdGUgYW5pbWF0aW9uIHNwZWVkIHdpdGggdGhlIHZlcnRpY2FsIHNwZWVkIHNsaWRlclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyfVxuICogQHB1YmxpY1xuICpcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyID0gKHN0YXRlLCB7c3BlZWR9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7XG4gICAgICAuLi5zdGF0ZS5hbmltYXRpb25Db25maWcsXG4gICAgICBzcGVlZFxuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogU2hvdyBsYXJnZXIgdGltZSBmaWx0ZXIgYXQgYm90dG9tIGZvciB0aW1lIHBsYXliYWNrIChhcHBseSB0byB0aW1lIGZpbHRlciBvbmx5KVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmVubGFyZ2VGaWx0ZXJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgZW5sYXJnZUZpbHRlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBpc0VubGFyZ2VkID0gc3RhdGUuZmlsdGVyc1thY3Rpb24uaWR4XS5lbmxhcmdlZDtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKChmLCBpKSA9PiB7XG4gICAgICBmLmVubGFyZ2VkID0gIWlzRW5sYXJnZWQgJiYgaSA9PT0gYWN0aW9uLmlkeDtcbiAgICAgIHJldHVybiBmO1xuICAgIH0pXG4gIH07XG59O1xuXG4vKipcbiAqIFRvZ2dsZXMgZmlsdGVyIGZlYXR1cmUgdmlzaWJpbGl0eVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnRvZ2dsZUZpbHRlckZlYXR1cmVVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlRmlsdGVyRmVhdHVyZVVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBmaWx0ZXIgPSBzdGF0ZS5maWx0ZXJzW2FjdGlvbi5pZHhdO1xuICBjb25zdCBpc1Zpc2libGUgPSBnZXQoZmlsdGVyLCBbJ3ZhbHVlJywgJ3Byb3BlcnRpZXMnLCAnaXNWaXNpYmxlJ10pO1xuICBjb25zdCBuZXdGaWx0ZXIgPSB7XG4gICAgLi4uZmlsdGVyLFxuICAgIHZhbHVlOiBmZWF0dXJlVG9GaWx0ZXJWYWx1ZShmaWx0ZXIudmFsdWUsIGZpbHRlci5pZCwge1xuICAgICAgaXNWaXNpYmxlOiAhaXNWaXNpYmxlXG4gICAgfSlcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGZpbHRlcnM6IE9iamVjdC5hc3NpZ24oWy4uLnN0YXRlLmZpbHRlcnNdLCB7W2FjdGlvbi5pZHhdOiBuZXdGaWx0ZXJ9KVxuICB9O1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBmaWx0ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5yZW1vdmVGaWx0ZXJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlRmlsdGVyVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHtpZHh9ID0gYWN0aW9uO1xuICBjb25zdCB7ZGF0YUlkLCBpZH0gPSBzdGF0ZS5maWx0ZXJzW2lkeF07XG5cbiAgY29uc3QgbmV3RmlsdGVycyA9IFtcbiAgICAuLi5zdGF0ZS5maWx0ZXJzLnNsaWNlKDAsIGlkeCksXG4gICAgLi4uc3RhdGUuZmlsdGVycy5zbGljZShpZHggKyAxLCBzdGF0ZS5maWx0ZXJzLmxlbmd0aClcbiAgXTtcblxuICBjb25zdCBmaWx0ZXJlZERhdGFzZXRzID0gYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyhkYXRhSWQsIHN0YXRlLmRhdGFzZXRzLCBuZXdGaWx0ZXJzLCBzdGF0ZS5sYXllcnMpO1xuICBjb25zdCBuZXdFZGl0b3IgPVxuICAgIGdldEZpbHRlcklkSW5GZWF0dXJlKHN0YXRlLmVkaXRvci5zZWxlY3RlZEZlYXR1cmUpID09PSBpZFxuICAgICAgPyB7XG4gICAgICAgICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgICAgICAgIHNlbGVjdGVkRmVhdHVyZTogbnVsbFxuICAgICAgICB9XG4gICAgICA6IHN0YXRlLmVkaXRvcjtcblxuICBsZXQgbmV3U3RhdGUgPSBzZXQoWydmaWx0ZXJzJ10sIG5ld0ZpbHRlcnMsIHN0YXRlKTtcbiAgbmV3U3RhdGUgPSBzZXQoWydkYXRhc2V0cyddLCBmaWx0ZXJlZERhdGFzZXRzLCBuZXdTdGF0ZSk7XG4gIG5ld1N0YXRlID0gc2V0KFsnZWRpdG9yJ10sIG5ld0VkaXRvciwgbmV3U3RhdGUpO1xuXG4gIHJldHVybiB1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEobmV3U3RhdGUsIGRhdGFJZCwgdW5kZWZpbmVkKTtcbn07XG5cbi8qKlxuICogQWRkIGEgbmV3IGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuYWRkTGF5ZXJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgYWRkTGF5ZXJVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgZGVmYXVsdERhdGFzZXQgPSBPYmplY3Qua2V5cyhzdGF0ZS5kYXRhc2V0cylbMF07XG4gIGNvbnN0IG5ld0xheWVyID0gbmV3IExheWVyKHtcbiAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgaXNDb25maWdBY3RpdmU6IHRydWUsXG4gICAgZGF0YUlkOiBkZWZhdWx0RGF0YXNldCxcbiAgICAuLi5hY3Rpb24ucHJvcHNcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IFsuLi5zdGF0ZS5sYXllcnMsIG5ld0xheWVyXSxcbiAgICBsYXllckRhdGE6IFsuLi5zdGF0ZS5sYXllckRhdGEsIHt9XSxcbiAgICBsYXllck9yZGVyOiBbLi4uc3RhdGUubGF5ZXJPcmRlciwgc3RhdGUubGF5ZXJPcmRlci5sZW5ndGhdLFxuICAgIHNwbGl0TWFwczogYWRkTmV3TGF5ZXJzVG9TcGxpdE1hcChzdGF0ZS5zcGxpdE1hcHMsIG5ld0xheWVyKVxuICB9O1xufTtcblxuLyoqXG4gKiByZW1vdmUgbGF5ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5yZW1vdmVMYXllclVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVMYXllclVwZGF0ZXIgPSAoc3RhdGUsIHtpZHh9KSA9PiB7XG4gIGNvbnN0IHtsYXllcnMsIGxheWVyRGF0YSwgY2xpY2tlZCwgaG92ZXJJbmZvfSA9IHN0YXRlO1xuICBjb25zdCBsYXllclRvUmVtb3ZlID0gc3RhdGUubGF5ZXJzW2lkeF07XG4gIGNvbnN0IG5ld01hcHMgPSByZW1vdmVMYXllckZyb21TcGxpdE1hcHMoc3RhdGUuc3BsaXRNYXBzLCBsYXllclRvUmVtb3ZlKTtcblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IFsuLi5sYXllcnMuc2xpY2UoMCwgaWR4KSwgLi4ubGF5ZXJzLnNsaWNlKGlkeCArIDEsIGxheWVycy5sZW5ndGgpXSxcbiAgICBsYXllckRhdGE6IFsuLi5sYXllckRhdGEuc2xpY2UoMCwgaWR4KSwgLi4ubGF5ZXJEYXRhLnNsaWNlKGlkeCArIDEsIGxheWVyRGF0YS5sZW5ndGgpXSxcbiAgICBsYXllck9yZGVyOiBzdGF0ZS5sYXllck9yZGVyLmZpbHRlcihpID0+IGkgIT09IGlkeCkubWFwKHBpZCA9PiAocGlkID4gaWR4ID8gcGlkIC0gMSA6IHBpZCkpLFxuICAgIGNsaWNrZWQ6IGxheWVyVG9SZW1vdmUuaXNMYXllckhvdmVyZWQoY2xpY2tlZCkgPyB1bmRlZmluZWQgOiBjbGlja2VkLFxuICAgIGhvdmVySW5mbzogbGF5ZXJUb1JlbW92ZS5pc0xheWVySG92ZXJlZChob3ZlckluZm8pID8gdW5kZWZpbmVkIDogaG92ZXJJbmZvLFxuICAgIHNwbGl0TWFwczogbmV3TWFwc1xuICAgIC8vIFRPRE86IHVwZGF0ZSBmaWx0ZXJzLCBjcmVhdGUgaGVscGVyIHRvIHJlbW92ZSBsYXllciBmb3JtIGZpbHRlciAocmVtb3ZlIGxheWVyaWQgYW5kIGRhdGFpZCkgaWYgbWFwcGVkXG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZUFuaW1hdGlvbkRvbWFpbihuZXdTdGF0ZSk7XG59O1xuXG4vKipcbiAqIFJlb3JkZXIgbGF5ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5yZW9yZGVyTGF5ZXJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVvcmRlckxheWVyVXBkYXRlciA9IChzdGF0ZSwge29yZGVyfSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGxheWVyT3JkZXI6IG9yZGVyXG59KTtcblxuLyoqXG4gKiBSZW1vdmUgYSBkYXRhc2V0IGFuZCBhbGwgbGF5ZXJzLCBmaWx0ZXJzLCB0b29sdGlwIGNvbmZpZ3MgdGhhdCBiYXNlZCBvbiBpdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnJlbW92ZURhdGFzZXRVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlRGF0YXNldFVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAvLyBleHRyYWN0IGRhdGFzZXQga2V5XG4gIGNvbnN0IHtkYXRhSWQ6IGRhdGFzZXRLZXl9ID0gYWN0aW9uO1xuICBjb25zdCB7ZGF0YXNldHN9ID0gc3RhdGU7XG5cbiAgLy8gY2hlY2sgaWYgZGF0YXNldCBpcyBwcmVzZW50XG4gIGlmICghZGF0YXNldHNbZGF0YXNldEtleV0pIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICBjb25zdCB7XG4gICAgbGF5ZXJzLFxuICAgIGRhdGFzZXRzOiB7W2RhdGFzZXRLZXldOiBkYXRhc2V0LCAuLi5uZXdEYXRhc2V0c31cbiAgfSA9IHN0YXRlO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbiAgY29uc3QgaW5kZXhlcyA9IGxheWVycy5yZWR1Y2UoKGxpc3RPZkluZGV4ZXMsIGxheWVyLCBpbmRleCkgPT4ge1xuICAgIGlmIChsYXllci5jb25maWcuZGF0YUlkID09PSBkYXRhc2V0S2V5KSB7XG4gICAgICBsaXN0T2ZJbmRleGVzLnB1c2goaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdE9mSW5kZXhlcztcbiAgfSwgW10pO1xuXG4gIC8vIHJlbW92ZSBsYXllcnMgYW5kIGRhdGFzZXRzXG4gIGNvbnN0IHtuZXdTdGF0ZX0gPSBpbmRleGVzLnJlZHVjZShcbiAgICAoe25ld1N0YXRlOiBjdXJyZW50U3RhdGUsIGluZGV4Q291bnRlcn0sIGlkeCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gaWR4IC0gaW5kZXhDb3VudGVyO1xuICAgICAgY3VycmVudFN0YXRlID0gcmVtb3ZlTGF5ZXJVcGRhdGVyKGN1cnJlbnRTdGF0ZSwge2lkeDogY3VycmVudEluZGV4fSk7XG4gICAgICBpbmRleENvdW50ZXIrKztcbiAgICAgIHJldHVybiB7bmV3U3RhdGU6IGN1cnJlbnRTdGF0ZSwgaW5kZXhDb3VudGVyfTtcbiAgICB9LFxuICAgIHtuZXdTdGF0ZTogey4uLnN0YXRlLCBkYXRhc2V0czogbmV3RGF0YXNldHN9LCBpbmRleENvdW50ZXI6IDB9XG4gICk7XG5cbiAgLy8gcmVtb3ZlIGZpbHRlcnNcbiAgY29uc3QgZmlsdGVycyA9IHN0YXRlLmZpbHRlcnMuZmlsdGVyKGZpbHRlciA9PiAhZmlsdGVyLmRhdGFJZC5pbmNsdWRlcyhkYXRhc2V0S2V5KSk7XG5cbiAgLy8gdXBkYXRlIGludGVyYWN0aW9uQ29uZmlnXG4gIGxldCB7aW50ZXJhY3Rpb25Db25maWd9ID0gc3RhdGU7XG4gIGNvbnN0IHt0b29sdGlwfSA9IGludGVyYWN0aW9uQ29uZmlnO1xuICBpZiAodG9vbHRpcCkge1xuICAgIGNvbnN0IHtjb25maWd9ID0gdG9vbHRpcDtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGNvbnN0IHtbZGF0YXNldEtleV06IGZpZWxkcywgLi4uZmllbGRzVG9TaG93fSA9IGNvbmZpZy5maWVsZHNUb1Nob3c7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGludGVyYWN0aW9uQ29uZmlnID0ge1xuICAgICAgLi4uaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICB0b29sdGlwOiB7Li4udG9vbHRpcCwgY29uZmlnOiB7Li4uY29uZmlnLCBmaWVsZHNUb1Nob3d9fVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gey4uLm5ld1N0YXRlLCBmaWx0ZXJzLCBpbnRlcmFjdGlvbkNvbmZpZ307XG59O1xuXG4vKipcbiAqIHVwZGF0ZSBsYXllciBibGVuZGluZyBtb2RlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudXBkYXRlTGF5ZXJCbGVuZGluZ1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVMYXllckJsZW5kaW5nVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgbGF5ZXJCbGVuZGluZzogYWN0aW9uLm1vZGVcbn0pO1xuXG4vKipcbiAqIERpc3BsYXkgZGF0YXNldCB0YWJsZSBpbiBhIG1vZGFsXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzaG93RGF0YXNldFRhYmxlVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdGluZ0RhdGFzZXQ6IGFjdGlvbi5kYXRhSWRcbiAgfTtcbn07XG5cbi8qKlxuICogcmVzZXQgdmlzU3RhdGUgdG8gaW5pdGlhbCBTdGF0ZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnJlc2V0TWFwQ29uZmlnVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlc2V0TWFwQ29uZmlnVXBkYXRlciA9IHN0YXRlID0+ICh7XG4gIC4uLklOSVRJQUxfVklTX1NUQVRFLFxuICAuLi5zdGF0ZS5pbml0aWFsU3RhdGUsXG4gIGluaXRpYWxTdGF0ZTogc3RhdGUuaW5pdGlhbFN0YXRlXG59KTtcblxuLyoqXG4gKiBQcm9wYWdhdGUgYHZpc1N0YXRlYCByZWR1Y2VyIHdpdGggYSBuZXcgY29uZmlndXJhdGlvbi4gQ3VycmVudCBjb25maWcgd2lsbCBiZSBvdmVycmlkZS5cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5yZWNlaXZlTWFwQ29uZmlnVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlY2VpdmVNYXBDb25maWdVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDoge2NvbmZpZyA9IHt9LCBvcHRpb25zID0ge319fSkgPT4ge1xuICBpZiAoIWNvbmZpZy52aXNTdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBmaWx0ZXJzLFxuICAgIGxheWVycyxcbiAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICBsYXllckJsZW5kaW5nLFxuICAgIHNwbGl0TWFwcyxcbiAgICBhbmltYXRpb25Db25maWdcbiAgfSA9IGNvbmZpZy52aXNTdGF0ZTtcblxuICBjb25zdCB7a2VlcEV4aXN0aW5nQ29uZmlnfSA9IG9wdGlvbnM7XG5cbiAgLy8gcmVzZXQgY29uZmlnIGlmIGtlZXBFeGlzdGluZ0NvbmZpZyBpcyBmYWxzeVxuICBsZXQgbWVyZ2VkU3RhdGUgPSAha2VlcEV4aXN0aW5nQ29uZmlnID8gcmVzZXRNYXBDb25maWdVcGRhdGVyKHN0YXRlKSA6IHN0YXRlO1xuICBtZXJnZWRTdGF0ZSA9IG1lcmdlTGF5ZXJzKG1lcmdlZFN0YXRlLCBsYXllcnMpO1xuICBtZXJnZWRTdGF0ZSA9IG1lcmdlRmlsdGVycyhtZXJnZWRTdGF0ZSwgZmlsdGVycyk7XG4gIG1lcmdlZFN0YXRlID0gbWVyZ2VJbnRlcmFjdGlvbnMobWVyZ2VkU3RhdGUsIGludGVyYWN0aW9uQ29uZmlnKTtcbiAgbWVyZ2VkU3RhdGUgPSBtZXJnZUxheWVyQmxlbmRpbmcobWVyZ2VkU3RhdGUsIGxheWVyQmxlbmRpbmcpO1xuICBtZXJnZWRTdGF0ZSA9IG1lcmdlU3BsaXRNYXBzKG1lcmdlZFN0YXRlLCBzcGxpdE1hcHMpO1xuICBtZXJnZWRTdGF0ZSA9IG1lcmdlQW5pbWF0aW9uQ29uZmlnKG1lcmdlZFN0YXRlLCBhbmltYXRpb25Db25maWcpO1xuXG4gIHJldHVybiBtZXJnZWRTdGF0ZTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBsYXllciBob3ZlciBldmVudCB3aXRoIGhvdmVyZWQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubGF5ZXJIb3ZlclVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBsYXllckhvdmVyVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgaG92ZXJJbmZvOiBhY3Rpb24uaW5mb1xufSk7XG5cbi8qIGVzbGludC1lbmFibGUgbWF4LXN0YXRlbWVudHMgKi9cblxuLyoqXG4gKiBVcGRhdGUgYGludGVyYWN0aW9uQ29uZmlnYFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtjb25maWd9ID0gYWN0aW9uO1xuXG4gIGNvbnN0IGludGVyYWN0aW9uQ29uZmlnID0ge1xuICAgIC4uLnN0YXRlLmludGVyYWN0aW9uQ29uZmlnLFxuICAgIC4uLntbY29uZmlnLmlkXTogY29uZmlnfVxuICB9O1xuXG4gIC8vIERvbid0IGVuYWJsZSB0b29sdGlwIGFuZCBicnVzaCBhdCB0aGUgc2FtZSB0aW1lXG4gIC8vIGJ1dCBjb29yZGluYXRlcyBjYW4gYmUgc2hvd24gYXQgYWxsIHRpbWVcbiAgY29uc3QgY29udHJhZGljdCA9IFsnYnJ1c2gnLCAndG9vbHRpcCddO1xuXG4gIGlmIChcbiAgICBjb250cmFkaWN0LmluY2x1ZGVzKGNvbmZpZy5pZCkgJiZcbiAgICBjb25maWcuZW5hYmxlZCAmJlxuICAgICFzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZ1tjb25maWcuaWRdLmVuYWJsZWRcbiAgKSB7XG4gICAgLy8gb25seSBlbmFibGUgb25lIGludGVyYWN0aW9uIGF0IGEgdGltZVxuICAgIGNvbnRyYWRpY3QuZm9yRWFjaChrID0+IHtcbiAgICAgIGlmIChrICE9PSBjb25maWcuaWQpIHtcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWdba10gPSB7Li4uaW50ZXJhY3Rpb25Db25maWdba10sIGVuYWJsZWQ6IGZhbHNlfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGludGVyYWN0aW9uQ29uZmlnXG4gIH07XG5cbiAgaWYgKGNvbmZpZy5pZCA9PT0gJ2dlb2NvZGVyJyAmJiAhY29uZmlnLmVuYWJsZWQpIHtcbiAgICByZXR1cm4gcmVtb3ZlRGF0YXNldFVwZGF0ZXIobmV3U3RhdGUsIHtkYXRhSWQ6ICdnZW9jb2Rlcl9kYXRhc2V0J30pO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG4vKipcbiAqIFRyaWdnZXIgbGF5ZXIgY2xpY2sgZXZlbnQgd2l0aCBjbGlja2VkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxheWVyQ2xpY2tVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbGF5ZXJDbGlja1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIG1vdXNlUG9zOiBzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZy5jb29yZGluYXRlLmVuYWJsZWRcbiAgICA/IHtcbiAgICAgICAgLi4uc3RhdGUubW91c2VQb3MsXG4gICAgICAgIHBpbm5lZDogc3RhdGUubW91c2VQb3MucGlubmVkID8gbnVsbCA6IGNsb25lRGVlcChzdGF0ZS5tb3VzZVBvcylcbiAgICAgIH1cbiAgICA6IHN0YXRlLm1vdXNlUG9zLFxuICBjbGlja2VkOiBhY3Rpb24uaW5mbyAmJiBhY3Rpb24uaW5mby5waWNrZWQgPyBhY3Rpb24uaW5mbyA6IG51bGxcbn0pO1xuXG4vKipcbiAqIFRyaWdnZXIgbWFwIGNsaWNrIGV2ZW50LCB1bnNlbGVjdCBjbGlja2VkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLm1hcENsaWNrVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcENsaWNrVXBkYXRlciA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBjbGlja2VkOiBudWxsXG4gIH07XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgbWFwIG1vdmUgZXZlbnRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5tb3VzZU1vdmVVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbW91c2VNb3ZlVXBkYXRlciA9IChzdGF0ZSwge2V2dH0pID0+IHtcbiAgaWYgKE9iamVjdC52YWx1ZXMoc3RhdGUuaW50ZXJhY3Rpb25Db25maWcpLnNvbWUoY29uZmlnID0+IGNvbmZpZy5lbmFibGVkKSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIG1vdXNlUG9zOiB7XG4gICAgICAgIC4uLnN0YXRlLm1vdXNlUG9zLFxuICAgICAgICBtb3VzZVBvc2l0aW9uOiBbLi4uZXZ0LnBvaW50XSxcbiAgICAgICAgY29vcmRpbmF0ZTogWy4uLmV2dC5sbmdMYXRdXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG4vKipcbiAqIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIGEgbGF5ZXIgZm9yIGEgc3BsaXQgbWFwXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlU3BsaXRNYXBVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlU3BsaXRNYXBVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+XG4gIHN0YXRlLnNwbGl0TWFwcyAmJiBzdGF0ZS5zcGxpdE1hcHMubGVuZ3RoID09PSAwXG4gICAgPyB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyBtYXliZSB3ZSBzaG91bGQgdXNlIGFuIGFycmF5IHRvIHN0b3JlIHN0YXRlIGZvciBhIHNpbmdsZSBtYXAgYXMgd2VsbFxuICAgICAgICAvLyBpZiBjdXJyZW50IG1hcHMgbGVuZ3RoIGlzIGVxdWFsIHRvIDAgaXQgbWVhbnMgdGhhdCB3ZSBhcmUgYWJvdXQgdG8gc3BsaXQgdGhlIHZpZXdcbiAgICAgICAgc3BsaXRNYXBzOiBjb21wdXRlU3BsaXRNYXBMYXllcnMoc3RhdGUubGF5ZXJzKVxuICAgICAgfVxuICAgIDogY2xvc2VTcGVjaWZpY01hcEF0SW5kZXgoc3RhdGUsIGFjdGlvbik7XG5cbi8qKlxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgYSBsYXllciBpbiBhIHNwbGl0IG1hcFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnRvZ2dsZUxheWVyRm9yTWFwVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUxheWVyRm9yTWFwVXBkYXRlciA9IChzdGF0ZSwge21hcEluZGV4LCBsYXllcklkfSkgPT4ge1xuICBjb25zdCB7c3BsaXRNYXBzfSA9IHN0YXRlO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgc3BsaXRNYXBzOiBzcGxpdE1hcHMubWFwKChzbSwgaSkgPT5cbiAgICAgIGkgPT09IG1hcEluZGV4XG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4uc3BsaXRNYXBzW2ldLFxuICAgICAgICAgICAgbGF5ZXJzOiB7XG4gICAgICAgICAgICAgIC4uLnNwbGl0TWFwc1tpXS5sYXllcnMsXG4gICAgICAgICAgICAgIC8vIGlmIGxheWVySWQgbm90IGluIGxheWVycywgc2V0IGl0IHRvIHZpc2libGVcbiAgICAgICAgICAgICAgW2xheWVySWRdOiAhc3BsaXRNYXBzW2ldLmxheWVyc1tsYXllcklkXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgOiBzbVxuICAgIClcbiAgfTtcbn07XG5cbi8qKlxuICogQWRkIG5ldyBkYXRhc2V0IHRvIGB2aXNTdGF0ZWAsIHdpdGggb3B0aW9uIHRvIGxvYWQgYSBtYXAgY29uZmlnIGFsb25nIHdpdGggdGhlIGRhdGFzZXRzXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudXBkYXRlVmlzRGF0YVVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1zdGF0ZW1lbnRzICovXG5leHBvcnQgY29uc3QgdXBkYXRlVmlzRGF0YVVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAvLyBkYXRhc2V0cyBjYW4gYmUgYSBzaW5nbGUgZGF0YSBlbnRyaWVzIG9yIGFuIGFycmF5IG9mIG11bHRpcGxlIGRhdGEgZW50cmllc1xuICBjb25zdCB7Y29uZmlnLCBvcHRpb25zfSA9IGFjdGlvbjtcblxuICBjb25zdCBkYXRhc2V0cyA9IHRvQXJyYXkoYWN0aW9uLmRhdGFzZXRzKTtcblxuICBjb25zdCBuZXdEYXRhRW50cmllcyA9IGRhdGFzZXRzLnJlZHVjZShcbiAgICAoYWNjdSwge2luZm8gPSB7fSwgZGF0YX0pID0+ICh7XG4gICAgICAuLi5hY2N1LFxuICAgICAgLi4uKGNyZWF0ZU5ld0RhdGFFbnRyeSh7aW5mbywgZGF0YX0sIHN0YXRlLmRhdGFzZXRzKSB8fCB7fSlcbiAgICB9KSxcbiAgICB7fVxuICApO1xuXG4gIGlmICghT2JqZWN0LmtleXMobmV3RGF0YUVudHJpZXMpLmxlbmd0aCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIC8vIGFwcGx5IGNvbmZpZyBpZiBwYXNzZWQgZnJvbSBhY3Rpb25cbiAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IGNvbmZpZ1xuICAgID8gcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIoc3RhdGUsIHtcbiAgICAgICAgcGF5bG9hZDoge2NvbmZpZywgb3B0aW9uc31cbiAgICAgIH0pXG4gICAgOiBzdGF0ZTtcblxuICBjb25zdCBzdGF0ZVdpdGhOZXdEYXRhID0ge1xuICAgIC4uLnByZXZpb3VzU3RhdGUsXG4gICAgZGF0YXNldHM6IHtcbiAgICAgIC4uLnByZXZpb3VzU3RhdGUuZGF0YXNldHMsXG4gICAgICAuLi5uZXdEYXRhRW50cmllc1xuICAgIH1cbiAgfTtcblxuICAvLyBwcmV2aW91c2x5IHNhdmVkIGNvbmZpZyBiZWZvcmUgZGF0YSBsb2FkZWRcbiAgY29uc3Qge1xuICAgIGZpbHRlclRvQmVNZXJnZWQgPSBbXSxcbiAgICBsYXllclRvQmVNZXJnZWQgPSBbXSxcbiAgICBpbnRlcmFjdGlvblRvQmVNZXJnZWQgPSB7fSxcbiAgICBzcGxpdE1hcHNUb0JlTWVyZ2VkID0gW11cbiAgfSA9IHN0YXRlV2l0aE5ld0RhdGE7XG5cbiAgLy8gV2UgbmVlZCB0byBtZXJnZSBsYXllcnMgYmVmb3JlIGZpbHRlcnMgYmVjYXVzZSBwb2x5Z29uIGZpbHRlcnMgcmVxdWlyZXMgbGF5ZXJzIHRvIGJlIGxvYWRlZFxuICBsZXQgbWVyZ2VkU3RhdGUgPSBtZXJnZUxheWVycyhzdGF0ZVdpdGhOZXdEYXRhLCBsYXllclRvQmVNZXJnZWQpO1xuXG4gIG1lcmdlZFN0YXRlID0gbWVyZ2VGaWx0ZXJzKG1lcmdlZFN0YXRlLCBmaWx0ZXJUb0JlTWVyZ2VkKTtcblxuICAvLyBtZXJnZSBzdGF0ZSB3aXRoIHNhdmVkIHNwbGl0TWFwc1xuICBtZXJnZWRTdGF0ZSA9IG1lcmdlU3BsaXRNYXBzKG1lcmdlZFN0YXRlLCBzcGxpdE1hcHNUb0JlTWVyZ2VkKTtcblxuICBsZXQgbmV3TGF5ZXJzID0gbWVyZ2VkU3RhdGUubGF5ZXJzLmZpbHRlcihsID0+IGwuY29uZmlnLmRhdGFJZCBpbiBuZXdEYXRhRW50cmllcyk7XG5cbiAgaWYgKCFuZXdMYXllcnMubGVuZ3RoICYmIChvcHRpb25zIHx8IHt9KS5hdXRvQ3JlYXRlTGF5ZXJzICE9PSBmYWxzZSkge1xuICAgIC8vIG5vIGxheWVyIG1lcmdlZCwgZmluZCBkZWZhdWx0c1xuICAgIGNvbnN0IHJlc3VsdCA9IGFkZERlZmF1bHRMYXllcnMobWVyZ2VkU3RhdGUsIG5ld0RhdGFFbnRyaWVzKTtcbiAgICBtZXJnZWRTdGF0ZSA9IHJlc3VsdC5zdGF0ZTtcbiAgICBuZXdMYXllcnMgPSByZXN1bHQubmV3TGF5ZXJzO1xuICB9XG5cbiAgaWYgKG1lcmdlZFN0YXRlLnNwbGl0TWFwcy5sZW5ndGgpIHtcbiAgICAvLyBpZiBtYXAgaXMgc3BsaXQsIGFkZCBuZXcgbGF5ZXJzIHRvIHNwbGl0TWFwc1xuICAgIG5ld0xheWVycyA9IG1lcmdlZFN0YXRlLmxheWVycy5maWx0ZXIobCA9PiBsLmNvbmZpZy5kYXRhSWQgaW4gbmV3RGF0YUVudHJpZXMpO1xuICAgIG1lcmdlZFN0YXRlID0ge1xuICAgICAgLi4ubWVyZ2VkU3RhdGUsXG4gICAgICBzcGxpdE1hcHM6IGFkZE5ld0xheWVyc1RvU3BsaXRNYXAobWVyZ2VkU3RhdGUuc3BsaXRNYXBzLCBuZXdMYXllcnMpXG4gICAgfTtcbiAgfVxuXG4gIC8vIG1lcmdlIHN0YXRlIHdpdGggc2F2ZWQgaW50ZXJhY3Rpb25zXG4gIG1lcmdlZFN0YXRlID0gbWVyZ2VJbnRlcmFjdGlvbnMobWVyZ2VkU3RhdGUsIGludGVyYWN0aW9uVG9CZU1lcmdlZCk7XG5cbiAgLy8gaWYgbm8gdG9vbHRpcHMgbWVyZ2VkIGFkZCBkZWZhdWx0IHRvb2x0aXBzXG4gIE9iamVjdC5rZXlzKG5ld0RhdGFFbnRyaWVzKS5mb3JFYWNoKGRhdGFJZCA9PiB7XG4gICAgY29uc3QgdG9vbHRpcEZpZWxkcyA9IG1lcmdlZFN0YXRlLmludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAuY29uZmlnLmZpZWxkc1RvU2hvd1tkYXRhSWRdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0b29sdGlwRmllbGRzKSB8fCAhdG9vbHRpcEZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIG1lcmdlZFN0YXRlID0gYWRkRGVmYXVsdFRvb2x0aXBzKG1lcmdlZFN0YXRlLCBuZXdEYXRhRW50cmllc1tkYXRhSWRdKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxldCB1cGRhdGVkU3RhdGUgPSB1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEobWVyZ2VkU3RhdGUsIE9iamVjdC5rZXlzKG5ld0RhdGFFbnRyaWVzKSwgdW5kZWZpbmVkKTtcblxuICAvLyByZWdpc3RlciBsYXllciBhbmltYXRpb24gZG9tYWluLFxuICAvLyBuZWVkIHRvIGJlIGNhbGxlZCBhZnRlciBsYXllciBkYXRhIGlzIGNhbGN1bGF0ZWRcbiAgdXBkYXRlZFN0YXRlID0gdXBkYXRlQW5pbWF0aW9uRG9tYWluKHVwZGF0ZWRTdGF0ZSk7XG5cbiAgcmV0dXJuIHVwZGF0ZWRTdGF0ZTtcbn07XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzICovXG5cbi8qKlxuICogV2hlbiBhIHVzZXIgY2xpY2tzIG9uIHRoZSBzcGVjaWZpYyBtYXAgY2xvc2luZyBpY29uXG4gKiB0aGUgYXBwbGljYXRpb24gd2lsbCBjbG9zZSB0aGUgc2VsZWN0ZWQgbWFwXG4gKiBhbmQgd2lsbCBtZXJnZSB0aGUgcmVtYWluaW5nIG9uZSB3aXRoIHRoZSBnbG9iYWwgc3RhdGVcbiAqIFRPRE86IGkgdGhpbmsgaW4gdGhlIGZ1dHVyZSB0aGlzIGFjdGlvbiBzaG91bGQgYmUgY2FsbGVkIG1lcmdlIG1hcCBsYXllcnMgd2l0aCBnbG9iYWwgc2V0dGluZ3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKi9cbmZ1bmN0aW9uIGNsb3NlU3BlY2lmaWNNYXBBdEluZGV4KHN0YXRlLCBhY3Rpb24pIHtcbiAgLy8gcmV0cmlldmUgbGF5ZXJzIG1ldGEgZGF0YSBmcm9tIHRoZSByZW1haW5pbmcgbWFwIHRoYXQgd2UgbmVlZCB0byBrZWVwXG4gIGNvbnN0IGluZGV4VG9SZXRyaWV2ZSA9IDEgLSBhY3Rpb24ucGF5bG9hZDtcbiAgY29uc3QgbWFwTGF5ZXJzID0gc3RhdGUuc3BsaXRNYXBzW2luZGV4VG9SZXRyaWV2ZV0ubGF5ZXJzO1xuICBjb25zdCB7bGF5ZXJzfSA9IHN0YXRlO1xuXG4gIC8vIHVwZGF0ZSBsYXllciB2aXNpYmlsaXR5XG4gIGNvbnN0IG5ld0xheWVycyA9IGxheWVycy5tYXAobGF5ZXIgPT5cbiAgICAhbWFwTGF5ZXJzW2xheWVyLmlkXSAmJiBsYXllci5jb25maWcuaXNWaXNpYmxlXG4gICAgICA/IGxheWVyLnVwZGF0ZUxheWVyQ29uZmlnKHtcbiAgICAgICAgICAvLyBpZiBsYXllci5pZCBpcyBub3QgaW4gbWFwTGF5ZXJzLCBpdCBzaG91bGQgYmUgaW5WaXNpYmxlXG4gICAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgOiBsYXllclxuICApO1xuXG4gIC8vIGRlbGV0ZSBtYXBcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IG5ld0xheWVycyxcbiAgICBzcGxpdE1hcHM6IFtdXG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBmaWxlIGxvYWRpbmcgZGlzcGF0Y2ggYGFkZERhdGFUb01hcGAgaWYgc3VjY2VlZCwgb3IgYGxvYWRGaWxlc0VycmAgaWYgZmFpbGVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubG9hZEZpbGVzVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGxvYWRGaWxlc1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7ZmlsZXMsIG9uRmluaXNoID0gbG9hZEZpbGVzU3VjY2Vzc30gPSBhY3Rpb247XG4gIGlmICghZmlsZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgZmlsZUxvYWRpbmdQcm9ncmVzcyA9IEFycmF5LmZyb20oZmlsZXMpLnJlZHVjZShcbiAgICAoYWNjdSwgZiwgaSkgPT4gbWVyZ2VfKGluaXRpYWxGaWxlTG9hZGluZ1Byb2dyZXNzKGYsIGkpKShhY2N1KSxcbiAgICB7fVxuICApO1xuXG4gIGNvbnN0IGZpbGVMb2FkaW5nID0ge1xuICAgIGZpbGVDYWNoZTogW10sXG4gICAgZmlsZXNUb0xvYWQ6IGZpbGVzLFxuICAgIG9uRmluaXNoXG4gIH07XG5cbiAgY29uc3QgbmV4dFN0YXRlID0gbWVyZ2VfKHtmaWxlTG9hZGluZ1Byb2dyZXNzLCBmaWxlTG9hZGluZ30pKHN0YXRlKTtcblxuICByZXR1cm4gbG9hZE5leHRGaWxlVXBkYXRlcihuZXh0U3RhdGUpO1xufTtcblxuLyoqXG4gKiBTdWNlc3NmdWxseSBsb2FkZWQgb25lIGZpbGUsIG1vdmUgb24gdG8gdGhlIG5leHQgb25lXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubG9hZEZpbGVTdGVwU3VjY2Vzc1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZVN0ZXBTdWNjZXNzVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmICghc3RhdGUuZmlsZUxvYWRpbmcpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3Qge2ZpbGVOYW1lLCBmaWxlQ2FjaGV9ID0gYWN0aW9uO1xuICBjb25zdCB7ZmlsZXNUb0xvYWQsIG9uRmluaXNofSA9IHN0YXRlLmZpbGVMb2FkaW5nO1xuICBjb25zdCBzdGF0ZVdpdGhQcm9ncmVzcyA9IHVwZGF0ZUZpbGVMb2FkaW5nUHJvZ3Jlc3NVcGRhdGVyKHN0YXRlLCB7XG4gICAgZmlsZU5hbWUsXG4gICAgcHJvZ3Jlc3M6IHtwZXJjZW50OiAxLCBtZXNzYWdlOiAnRG9uZSd9XG4gIH0pO1xuXG4gIC8vIHNhdmUgcHJvY2Vzc2VkIGZpbGUgdG8gZmlsZUNhY2hlXG4gIGNvbnN0IHN0YXRlV2l0aENhY2hlID0gcGlja18oJ2ZpbGVMb2FkaW5nJykobWVyZ2VfKHtmaWxlQ2FjaGV9KSkoc3RhdGVXaXRoUHJvZ3Jlc3MpO1xuXG4gIHJldHVybiB3aXRoVGFzayhcbiAgICBzdGF0ZVdpdGhDYWNoZSxcbiAgICBERUxBWV9UQVNLKDIwMCkubWFwKGZpbGVzVG9Mb2FkLmxlbmd0aCA/IGxvYWROZXh0RmlsZSA6ICgpID0+IG9uRmluaXNoKGZpbGVDYWNoZSkpXG4gICk7XG59XG5cbi8vIHdpdGhUYXNrPFQ+KHN0YXRlOiBULCB0YXNrOiBhbnkpOiBUXG5cbi8qKlxuICpcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sb2FkTmV4dEZpbGVVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZE5leHRGaWxlVXBkYXRlcihzdGF0ZSkge1xuICBpZiAoIXN0YXRlLmZpbGVMb2FkaW5nKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IHtmaWxlc1RvTG9hZH0gPSBzdGF0ZS5maWxlTG9hZGluZztcbiAgY29uc3QgW2ZpbGUsIC4uLnJlbWFpbmluZ0ZpbGVzVG9Mb2FkXSA9IGZpbGVzVG9Mb2FkO1xuXG4gIC8vIHNhdmUgZmlsZXNUb0xvYWQgdG8gc3RhdGVcbiAgY29uc3QgbmV4dFN0YXRlID0gcGlja18oJ2ZpbGVMb2FkaW5nJykobWVyZ2VfKHtmaWxlc1RvTG9hZDogcmVtYWluaW5nRmlsZXNUb0xvYWR9KSkoc3RhdGUpO1xuXG4gIGNvbnN0IHN0YXRlV2l0aFByb2dyZXNzID0gdXBkYXRlRmlsZUxvYWRpbmdQcm9ncmVzc1VwZGF0ZXIobmV4dFN0YXRlLCB7XG4gICAgZmlsZU5hbWU6IGZpbGUubmFtZSxcbiAgICBwcm9ncmVzczoge3BlcmNlbnQ6IDAsIG1lc3NhZ2U6ICdsb2FkaW5nLi4uJ31cbiAgfSk7XG5cbiAgY29uc3Qge2xvYWRlcnMsIGxvYWRPcHRpb25zfSA9IHN0YXRlO1xuICByZXR1cm4gd2l0aFRhc2soXG4gICAgc3RhdGVXaXRoUHJvZ3Jlc3MsXG4gICAgbWFrZUxvYWRGaWxlVGFzayhmaWxlLCBuZXh0U3RhdGUuZmlsZUxvYWRpbmcuZmlsZUNhY2hlLCBsb2FkZXJzLCBsb2FkT3B0aW9ucylcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VMb2FkRmlsZVRhc2soZmlsZSwgZmlsZUNhY2hlLCBsb2FkZXJzID0gW10sIGxvYWRPcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIExPQURfRklMRV9UQVNLKHtmaWxlLCBmaWxlQ2FjaGUsIGxvYWRlcnMsIGxvYWRPcHRpb25zfSkuYmltYXAoXG4gICAgLy8gcHJldHRpZXIgaWdub3JlXG4gICAgLy8gc3VjY2Vzc1xuICAgIGdlbiA9PlxuICAgICAgbmV4dEZpbGVCYXRjaCh7XG4gICAgICAgIGdlbixcbiAgICAgICAgZmlsZU5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgb25GaW5pc2g6IHJlc3VsdCA9PlxuICAgICAgICAgIHByb2Nlc3NGaWxlQ29udGVudCh7XG4gICAgICAgICAgICBjb250ZW50OiByZXN1bHQsXG4gICAgICAgICAgICBmaWxlQ2FjaGVcbiAgICAgICAgICB9KVxuICAgICAgfSksXG5cbiAgICAvLyBlcnJvclxuICAgIGVyciA9PiBsb2FkRmlsZXNFcnIoZmlsZS5uYW1lLCBlcnIpXG4gICk7XG59XG5cbi8qKlxuICpcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5wcm9jZXNzRmlsZUNvbnRlbnRVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0ZpbGVDb250ZW50VXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtjb250ZW50LCBmaWxlQ2FjaGV9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgY29uc3Qgc3RhdGVXaXRoUHJvZ3Jlc3MgPSB1cGRhdGVGaWxlTG9hZGluZ1Byb2dyZXNzVXBkYXRlcihzdGF0ZSwge1xuICAgIGZpbGVOYW1lOiBjb250ZW50LmZpbGVOYW1lLFxuICAgIHByb2dyZXNzOiB7cGVyY2VudDogMSwgbWVzc2FnZTogJ3Byb2Nlc3NpbmcuLi4nfVxuICB9KTtcblxuICByZXR1cm4gd2l0aFRhc2soXG4gICAgc3RhdGVXaXRoUHJvZ3Jlc3MsXG4gICAgUFJPQ0VTU19GSUxFX0RBVEEoe2NvbnRlbnQsIGZpbGVDYWNoZX0pLmJpbWFwKFxuICAgICAgcmVzdWx0ID0+IGxvYWRGaWxlU3RlcFN1Y2Nlc3Moe2ZpbGVOYW1lOiBjb250ZW50LmZpbGVOYW1lLCBmaWxlQ2FjaGU6IHJlc3VsdH0pLFxuICAgICAgZXJyID0+IGxvYWRGaWxlc0Vycihjb250ZW50LmZpbGVOYW1lLCBlcnIpXG4gICAgKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9ncmVzcyhwcmV2UHJvZ3Jlc3MgPSB7fSwgcHJvZ3Jlc3MpIHtcbiAgLy8gVGhpcyBoYXBwZW5zIHdoZW4gcmVjZWl2aW5nIHF1ZXJ5IG1ldGFkYXRhIG9yIG90aGVyIGNhc2VzIHdlIGRvbid0XG4gIC8vIGhhdmUgYW4gdXBkYXRlIGZvciB0aGUgdXNlci5cbiAgaWYgKCFwcm9ncmVzcyB8fCAhcHJvZ3Jlc3MucGVyY2VudCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGVyY2VudDogcHJvZ3Jlc3MucGVyY2VudFxuICB9O1xufVxuXG4vKipcbiAqIGdldHMgY2FsbGVkIHdpdGggcGF5bG9hZCA9IEFzeW5jR2VuZXJhdG9yPD8/Pz5cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5uZXh0RmlsZUJhdGNoVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IG5leHRGaWxlQmF0Y2hVcGRhdGVyID0gKFxuICBzdGF0ZSxcbiAge3BheWxvYWQ6IHtnZW4sIGZpbGVOYW1lLCBwcm9ncmVzcywgYWNjdW11bGF0ZWQsIG9uRmluaXNofX1cbikgPT4ge1xuICBjb25zdCBzdGF0ZVdpdGhQcm9ncmVzcyA9IHVwZGF0ZUZpbGVMb2FkaW5nUHJvZ3Jlc3NVcGRhdGVyKHN0YXRlLCB7XG4gICAgZmlsZU5hbWUsXG4gICAgcHJvZ3Jlc3M6IHBhcnNlUHJvZ3Jlc3Moc3RhdGUuZmlsZUxvYWRpbmdQcm9ncmVzc1tmaWxlTmFtZV0sIHByb2dyZXNzKVxuICB9KTtcbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIHN0YXRlV2l0aFByb2dyZXNzLFxuICAgIFVOV1JBUF9UQVNLKGdlbi5uZXh0KCkpLmJpbWFwKFxuICAgICAgKHt2YWx1ZSwgZG9uZX0pID0+IHtcbiAgICAgICAgcmV0dXJuIGRvbmVcbiAgICAgICAgICA/IG9uRmluaXNoKGFjY3VtdWxhdGVkKVxuICAgICAgICAgIDogbmV4dEZpbGVCYXRjaCh7XG4gICAgICAgICAgICAgIGdlbixcbiAgICAgICAgICAgICAgZmlsZU5hbWUsXG4gICAgICAgICAgICAgIHByb2dyZXNzOiB2YWx1ZS5wcm9ncmVzcyxcbiAgICAgICAgICAgICAgYWNjdW11bGF0ZWQ6IHZhbHVlLFxuICAgICAgICAgICAgICBvbkZpbmlzaFxuICAgICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZXJyID0+IGxvYWRGaWxlc0VycihmaWxlTmFtZSwgZXJyKVxuICAgIClcbiAgKTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBsb2FkaW5nIGZpbGUgZXJyb3JcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sb2FkRmlsZXNFcnJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzRXJyVXBkYXRlciA9IChzdGF0ZSwge2Vycm9yLCBmaWxlTmFtZX0pID0+IHtcbiAgLy8gdXBkYXRlIHVpIHdpdGggZXJyb3IgbWVzc2FnZVxuICBDb25zb2xlLndhcm4oZXJyb3IpO1xuICBpZiAoIXN0YXRlLmZpbGVMb2FkaW5nKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IHtmaWxlc1RvTG9hZCwgb25GaW5pc2gsIGZpbGVDYWNoZX0gPSBzdGF0ZS5maWxlTG9hZGluZztcblxuICBjb25zdCBuZXh0U3RhdGUgPSB1cGRhdGVGaWxlTG9hZGluZ1Byb2dyZXNzVXBkYXRlcihzdGF0ZSwge1xuICAgIGZpbGVOYW1lLFxuICAgIHByb2dyZXNzOiB7ZXJyb3J9XG4gIH0pO1xuXG4gIC8vIGtpY2sgb2ZmIG5leHQgZmlsZSBvciBmaW5pc2hcbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIG5leHRTdGF0ZSxcbiAgICBERUxBWV9UQVNLKDIwMCkubWFwKGZpbGVzVG9Mb2FkLmxlbmd0aCA/IGxvYWROZXh0RmlsZSA6ICgpID0+IG9uRmluaXNoKGZpbGVDYWNoZSkpXG4gICk7XG59O1xuXG4vKipcbiAqIFdoZW4gc2VsZWN0IGRhdGFzZXQgZm9yIGV4cG9ydCwgYXBwbHkgY3B1IGZpbHRlciB0byBzZWxlY3RlZCBkYXRhc2V0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuYXBwbHlDUFVGaWx0ZXJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgYXBwbHlDUFVGaWx0ZXJVcGRhdGVyID0gKHN0YXRlLCB7ZGF0YUlkfSkgPT4ge1xuICAvLyBhcHBseSBjcHVGaWx0ZXJcbiAgY29uc3QgZGF0YUlkcyA9IHRvQXJyYXkoZGF0YUlkKTtcblxuICByZXR1cm4gZGF0YUlkcy5yZWR1Y2UoKGFjY3UsIGlkKSA9PiBmaWx0ZXJEYXRhc2V0Q1BVKGFjY3UsIGlkKSwgc3RhdGUpO1xufTtcblxuLyoqXG4gKiBVc2VyIGlucHV0IHRvIHVwZGF0ZSB0aGUgaW5mbyBvZiB0aGUgbWFwXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0TWFwSW5mb1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRNYXBJbmZvVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgbWFwSW5mbzoge1xuICAgIC4uLnN0YXRlLm1hcEluZm8sXG4gICAgLi4uYWN0aW9uLmluZm9cbiAgfVxufSk7XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgQWxsIGxheWVyIGRvbWFpbiBhbmQgbGF5ZXIgZGF0YSBvZiBzdGF0ZVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuYWRkRGVmYXVsdExheWVyc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRMYXllcnMoc3RhdGUsIGRhdGFzZXRzKSB7XG4gIC8qKiBAdHlwZSB7TGF5ZXJbXX0gKi9cbiAgY29uc3QgZW1wdHkgPSBbXTtcbiAgY29uc3QgZGVmYXVsdExheWVycyA9IE9iamVjdC52YWx1ZXMoZGF0YXNldHMpLnJlZHVjZSgoYWNjdSwgZGF0YXNldCkgPT4ge1xuICAgIGNvbnN0IGZvdW5kTGF5ZXJzID0gZmluZERlZmF1bHRMYXllcihkYXRhc2V0LCBzdGF0ZS5sYXllckNsYXNzZXMpO1xuICAgIHJldHVybiBmb3VuZExheWVycyAmJiBmb3VuZExheWVycy5sZW5ndGggPyBhY2N1LmNvbmNhdChmb3VuZExheWVycykgOiBhY2N1O1xuICB9LCBlbXB0eSk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZToge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBsYXllcnM6IFsuLi5zdGF0ZS5sYXllcnMsIC4uLmRlZmF1bHRMYXllcnNdLFxuICAgICAgbGF5ZXJPcmRlcjogW1xuICAgICAgICAvLyBwdXQgbmV3IGxheWVycyBvbiB0b3Agb2Ygb2xkIG9uZXNcbiAgICAgICAgLi4uZGVmYXVsdExheWVycy5tYXAoKF8sIGkpID0+IHN0YXRlLmxheWVycy5sZW5ndGggKyBpKSxcbiAgICAgICAgLi4uc3RhdGUubGF5ZXJPcmRlclxuICAgICAgXVxuICAgIH0sXG4gICAgbmV3TGF5ZXJzOiBkZWZhdWx0TGF5ZXJzXG4gIH07XG59XG5cbi8qKlxuICogaGVscGVyIGZ1bmN0aW9uIHRvIGZpbmQgZGVmYXVsdCB0b29sdGlwc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YXNldFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0VG9vbHRpcHMoc3RhdGUsIGRhdGFzZXQpIHtcbiAgY29uc3QgdG9vbHRpcEZpZWxkcyA9IGZpbmRGaWVsZHNUb1Nob3coZGF0YXNldCk7XG4gIGNvbnN0IG1lcmdlZCA9IHtcbiAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmNvbmZpZy5maWVsZHNUb1Nob3csXG4gICAgLi4udG9vbHRpcEZpZWxkc1xuICB9O1xuXG4gIHJldHVybiBzZXQoWydpbnRlcmFjdGlvbkNvbmZpZycsICd0b29sdGlwJywgJ2NvbmZpZycsICdmaWVsZHNUb1Nob3cnXSwgbWVyZ2VkLCBzdGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsRmlsZUxvYWRpbmdQcm9ncmVzcyhmaWxlLCBpbmRleCkge1xuICBjb25zdCBmaWxlTmFtZSA9IGZpbGUubmFtZSB8fCBgVW50aXRsZWQgRmlsZSAke2luZGV4fWA7XG4gIHJldHVybiB7XG4gICAgW2ZpbGVOYW1lXToge1xuICAgICAgLy8gcGVyY2VudCBvZiBjdXJyZW50IGZpbGVcbiAgICAgIHBlcmNlbnQ6IDAsXG4gICAgICBtZXNzYWdlOiAnJyxcbiAgICAgIGZpbGVOYW1lLFxuICAgICAgZXJyb3I6IG51bGxcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGaWxlTG9hZGluZ1Byb2dyZXNzVXBkYXRlcihzdGF0ZSwge2ZpbGVOYW1lLCBwcm9ncmVzc30pIHtcbiAgcmV0dXJuIHBpY2tfKCdmaWxlTG9hZGluZ1Byb2dyZXNzJykocGlja18oZmlsZU5hbWUpKG1lcmdlXyhwcm9ncmVzcykpKShzdGF0ZSk7XG59XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgbGF5ZXIgZG9tYWlucyBmb3IgYW4gYXJyYXkgb2YgZGF0YXNldHNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnVwZGF0ZUFsbExheWVyRG9tYWluRGF0YX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShzdGF0ZSwgZGF0YUlkLCB1cGRhdGVkRmlsdGVyKSB7XG4gIGNvbnN0IGRhdGFJZHMgPSB0eXBlb2YgZGF0YUlkID09PSAnc3RyaW5nJyA/IFtkYXRhSWRdIDogZGF0YUlkO1xuICBjb25zdCBuZXdMYXllcnMgPSBbXTtcbiAgY29uc3QgbmV3TGF5ZXJEYXRhID0gW107XG5cbiAgc3RhdGUubGF5ZXJzLmZvckVhY2goKG9sZExheWVyLCBpKSA9PiB7XG4gICAgaWYgKG9sZExheWVyLmNvbmZpZy5kYXRhSWQgJiYgZGF0YUlkcy5pbmNsdWRlcyhvbGRMYXllci5jb25maWcuZGF0YUlkKSkge1xuICAgICAgLy8gTm8gbmVlZCB0byByZWNhbGN1bGF0ZSBsYXllciBkb21haW4gaWYgZmlsdGVyIGhhcyBmaXhlZCBkb21haW5cbiAgICAgIGNvbnN0IG5ld0xheWVyID1cbiAgICAgICAgdXBkYXRlZEZpbHRlciAmJiB1cGRhdGVkRmlsdGVyLmZpeGVkRG9tYWluXG4gICAgICAgICAgPyBvbGRMYXllclxuICAgICAgICAgIDogb2xkTGF5ZXIudXBkYXRlTGF5ZXJEb21haW4oc3RhdGUuZGF0YXNldHMsIHVwZGF0ZWRGaWx0ZXIpO1xuXG4gICAgICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlLCBzdGF0ZS5sYXllckRhdGFbaV0pO1xuXG4gICAgICBuZXdMYXllcnMucHVzaChsYXllcik7XG4gICAgICBuZXdMYXllckRhdGEucHVzaChsYXllckRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdMYXllcnMucHVzaChvbGRMYXllcik7XG4gICAgICBuZXdMYXllckRhdGEucHVzaChzdGF0ZS5sYXllckRhdGFbaV0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBuZXdMYXllcnMsXG4gICAgbGF5ZXJEYXRhOiBuZXdMYXllckRhdGFcbiAgfTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBbmltYXRpb25Eb21haW4oc3RhdGUpIHtcbiAgLy8gbWVyZ2UgYWxsIGFuaW1hdGFibGUgbGF5ZXIgZG9tYWluIGFuZCB1cGRhdGUgZ2xvYmFsIGNvbmZpZ1xuICBjb25zdCBhbmltYXRhYmxlTGF5ZXJzID0gc3RhdGUubGF5ZXJzLmZpbHRlcihcbiAgICBsID0+XG4gICAgICBsLmNvbmZpZy5pc1Zpc2libGUgJiZcbiAgICAgIGwuY29uZmlnLmFuaW1hdGlvbiAmJlxuICAgICAgbC5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQgJiZcbiAgICAgIEFycmF5LmlzQXJyYXkobC5hbmltYXRpb25Eb21haW4pXG4gICk7XG5cbiAgaWYgKCFhbmltYXRhYmxlTGF5ZXJzLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGFuaW1hdGlvbkNvbmZpZzogREVGQVVMVF9BTklNQVRJT05fQ09ORklHXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IG1lcmdlZERvbWFpbiA9IGFuaW1hdGFibGVMYXllcnMucmVkdWNlKFxuICAgIChhY2N1LCBsYXllcikgPT4gW1xuICAgICAgTWF0aC5taW4oYWNjdVswXSwgbGF5ZXIuYW5pbWF0aW9uRG9tYWluWzBdKSxcbiAgICAgIE1hdGgubWF4KGFjY3VbMV0sIGxheWVyLmFuaW1hdGlvbkRvbWFpblsxXSlcbiAgICBdLFxuICAgIFtOdW1iZXIoSW5maW5pdHkpLCAtSW5maW5pdHldXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBhbmltYXRpb25Db25maWc6IHtcbiAgICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcbiAgICAgIGN1cnJlbnRUaW1lOiBpc0luUmFuZ2Uoc3RhdGUuYW5pbWF0aW9uQ29uZmlnLmN1cnJlbnRUaW1lLCBtZXJnZWREb21haW4pXG4gICAgICAgID8gc3RhdGUuYW5pbWF0aW9uQ29uZmlnLmN1cnJlbnRUaW1lXG4gICAgICAgIDogbWVyZ2VkRG9tYWluWzBdLFxuICAgICAgZG9tYWluOiBtZXJnZWREb21haW5cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBzdGF0dXMgb2YgdGhlIGVkaXRvclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNldEVkaXRvck1vZGVVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3Qgc2V0RWRpdG9yTW9kZVVwZGF0ZXIgPSAoc3RhdGUsIHttb2RlfSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGVkaXRvcjoge1xuICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICBtb2RlLFxuICAgIHNlbGVjdGVkRmVhdHVyZTogbnVsbFxuICB9XG59KTtcblxuLy8gY29uc3QgZmVhdHVyZVRvRmlsdGVyVmFsdWUgPSAoZmVhdHVyZSkgPT4gKHsuLi5mZWF0dXJlLCBpZDogZmVhdHVyZS5pZH0pO1xuLyoqXG4gKiBVcGRhdGUgZWRpdG9yIGZlYXR1cmVzXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0RmVhdHVyZXNVcGRhdGVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RmVhdHVyZXNVcGRhdGVyKHN0YXRlLCB7ZmVhdHVyZXMgPSBbXX0pIHtcbiAgY29uc3QgbGFzdEZlYXR1cmUgPSBmZWF0dXJlcy5sZW5ndGggJiYgZmVhdHVyZXNbZmVhdHVyZXMubGVuZ3RoIC0gMV07XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdG9yOiB7XG4gICAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgICAvLyBvbmx5IHNhdmUgbm9uZSBmaWx0ZXIgZmVhdHVyZXMgdG8gZWRpdG9yXG4gICAgICBmZWF0dXJlczogZmVhdHVyZXMuZmlsdGVyKGYgPT4gIWdldEZpbHRlcklkSW5GZWF0dXJlKGYpKSxcbiAgICAgIG1vZGU6IGxhc3RGZWF0dXJlICYmIGxhc3RGZWF0dXJlLnByb3BlcnRpZXMuaXNDbG9zZWQgPyBFRElUT1JfTU9ERVMuRURJVCA6IHN0YXRlLmVkaXRvci5tb2RlXG4gICAgfVxuICB9O1xuXG4gIC8vIFJldHJpZXZlIGV4aXN0aW5nIGZlYXR1cmVcbiAgY29uc3Qge3NlbGVjdGVkRmVhdHVyZX0gPSBzdGF0ZS5lZGl0b3I7XG5cbiAgLy8gSWYgbm8gZmVhdHVyZSBpcyBzZWxlY3RlZCB3ZSBjYW4gc2ltcGx5IHJldHVybiBzaW5jZSBubyBvcGVyYXRpb25zXG4gIGlmICghc2VsZWN0ZWRGZWF0dXJlKSB7XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9XG5cbiAgLy8gVE9ETzogY2hlY2sgaWYgdGhlIGZlYXR1cmUgaGFzIGNoYW5nZWRcbiAgY29uc3QgZmVhdHVyZSA9IGZlYXR1cmVzLmZpbmQoZiA9PiBmLmlkID09PSBzZWxlY3RlZEZlYXR1cmUuaWQpO1xuXG4gIC8vIGlmIGZlYXR1cmUgaXMgcGFydCBvZiBhIGZpbHRlclxuICBjb25zdCBmaWx0ZXJJZCA9IGZlYXR1cmUgJiYgZ2V0RmlsdGVySWRJbkZlYXR1cmUoZmVhdHVyZSk7XG4gIGlmIChmaWx0ZXJJZCAmJiBmZWF0dXJlKSB7XG4gICAgY29uc3QgZmVhdHVyZVZhbHVlID0gZmVhdHVyZVRvRmlsdGVyVmFsdWUoZmVhdHVyZSwgZmlsdGVySWQpO1xuICAgIGNvbnN0IGZpbHRlcklkeCA9IHN0YXRlLmZpbHRlcnMuZmluZEluZGV4KGZpbCA9PiBmaWwuaWQgPT09IGZpbHRlcklkKTtcbiAgICByZXR1cm4gc2V0RmlsdGVyVXBkYXRlcihuZXdTdGF0ZSwge1xuICAgICAgaWR4OiBmaWx0ZXJJZHgsXG4gICAgICBwcm9wOiAndmFsdWUnLFxuICAgICAgdmFsdWU6IGZlYXR1cmVWYWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY3VycmVudCBzZWxlY3RlZCBmZWF0dXJlXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zZXRTZWxlY3RlZEZlYXR1cmVVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3Qgc2V0U2VsZWN0ZWRGZWF0dXJlVXBkYXRlciA9IChzdGF0ZSwge2ZlYXR1cmV9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZWRpdG9yOiB7XG4gICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgIHNlbGVjdGVkRmVhdHVyZTogZmVhdHVyZVxuICB9XG59KTtcblxuLyoqXG4gKiBEZWxldGUgZXhpc3RpbmcgZmVhdHVyZSBmcm9tIGZpbHRlcnNcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5kZWxldGVGZWF0dXJlVXBkYXRlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZlYXR1cmVVcGRhdGVyKHN0YXRlLCB7ZmVhdHVyZX0pIHtcbiAgaWYgKCFmZWF0dXJlKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdG9yOiB7XG4gICAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgICBzZWxlY3RlZEZlYXR1cmU6IG51bGxcbiAgICB9XG4gIH07XG5cbiAgaWYgKGdldEZpbHRlcklkSW5GZWF0dXJlKGZlYXR1cmUpKSB7XG4gICAgY29uc3QgZmlsdGVySWR4ID0gbmV3U3RhdGUuZmlsdGVycy5maW5kSW5kZXgoZiA9PiBmLmlkID09PSBnZXRGaWx0ZXJJZEluRmVhdHVyZShmZWF0dXJlKSk7XG5cbiAgICByZXR1cm4gZmlsdGVySWR4ID4gLTEgPyByZW1vdmVGaWx0ZXJVcGRhdGVyKG5ld1N0YXRlLCB7aWR4OiBmaWx0ZXJJZHh9KSA6IG5ld1N0YXRlO1xuICB9XG5cbiAgLy8gbW9kaWZ5IGVkaXRvciBvYmplY3RcbiAgY29uc3QgbmV3RWRpdG9yID0ge1xuICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICBmZWF0dXJlczogc3RhdGUuZWRpdG9yLmZlYXR1cmVzLmZpbHRlcihmID0+IGYuaWQgIT09IGZlYXR1cmUuaWQpLFxuICAgIHNlbGVjdGVkRmVhdHVyZTogbnVsbFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdG9yOiBuZXdFZGl0b3JcbiAgfTtcbn1cblxuLyoqXG4gKiBUb2dnbGUgZmVhdHVyZSBhcyBsYXllciBmaWx0ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zZXRQb2x5Z29uRmlsdGVyTGF5ZXJVcGRhdGVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UG9seWdvbkZpbHRlckxheWVyVXBkYXRlcihzdGF0ZSwgcGF5bG9hZCkge1xuICBjb25zdCB7bGF5ZXIsIGZlYXR1cmV9ID0gcGF5bG9hZDtcbiAgY29uc3QgZmlsdGVySWQgPSBnZXRGaWx0ZXJJZEluRmVhdHVyZShmZWF0dXJlKTtcblxuICAvLyBsZXQgbmV3RmlsdGVyID0gbnVsbDtcbiAgbGV0IGZpbHRlcklkeDtcbiAgbGV0IG5ld0xheWVySWQgPSBbbGF5ZXIuaWRdO1xuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZTtcbiAgLy8gSWYgcG9seWdvbiBmaWx0ZXIgYWxyZWFkeSBleGlzdHMsIHdlIG5lZWQgdG8gZmluZCBvdXQgaWYgdGhlIGN1cnJlbnQgbGF5ZXIgaXMgYWxyZWFkeSBpbmNsdWRlZFxuICBpZiAoZmlsdGVySWQpIHtcbiAgICBmaWx0ZXJJZHggPSBzdGF0ZS5maWx0ZXJzLmZpbmRJbmRleChmID0+IGYuaWQgPT09IGZpbHRlcklkKTtcblxuICAgIGlmICghc3RhdGUuZmlsdGVyc1tmaWx0ZXJJZHhdKSB7XG4gICAgICAvLyB3aGF0IGlmIGZpbHRlciBkb2Vzbid0IGV4aXN0Py4uLiBub3QgcG9zc2libGUuXG4gICAgICAvLyBiZWNhdXNlIGZlYXR1cmVzIGluIHRoZSBlZGl0b3IgaXMgcGFzc2VkIGluIGZyb20gZmlsdGVycyBhbmQgZWRpdG9ycy5cbiAgICAgIC8vIGJ1dCB3ZSB3aWxsIG1vdmUgdGhpcyBmZWF0dXJlIGJhY2sgdG8gZWRpdG9yIGp1c3QgaW4gY2FzZVxuICAgICAgY29uc3Qgbm9uZUZpbHRlckZlYXR1cmUgPSB7XG4gICAgICAgIC4uLmZlYXR1cmUsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAuLi5mZWF0dXJlLnByb3BlcnRpZXMsXG4gICAgICAgICAgZmlsdGVySWQ6IG51bGxcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVkaXRvcjoge1xuICAgICAgICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICAgICAgICBmZWF0dXJlczogWy4uLnN0YXRlLmVkaXRvci5mZWF0dXJlcywgbm9uZUZpbHRlckZlYXR1cmVdLFxuICAgICAgICAgIHNlbGVjdGVkRmVhdHVyZTogbm9uZUZpbHRlckZlYXR1cmVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZmlsdGVyID0gc3RhdGUuZmlsdGVyc1tmaWx0ZXJJZHhdO1xuICAgIGNvbnN0IHtsYXllcklkID0gW119ID0gZmlsdGVyO1xuICAgIGNvbnN0IGlzTGF5ZXJJbmNsdWRlZCA9IGxheWVySWQuaW5jbHVkZXMobGF5ZXIuaWQpO1xuXG4gICAgbmV3TGF5ZXJJZCA9IGlzTGF5ZXJJbmNsdWRlZFxuICAgICAgPyAvLyBpZiBsYXllciBpcyBpbmNsdWRlZCwgcmVtb3ZlIGl0XG4gICAgICAgIGxheWVySWQuZmlsdGVyKGwgPT4gbCAhPT0gbGF5ZXIuaWQpXG4gICAgICA6IFsuLi5sYXllcklkLCBsYXllci5pZF07XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgd2UgaGF2ZW4ndCBjcmVhdGUgdGhlIHBvbHlnb24gZmlsdGVyLCBjcmVhdGUgaXRcbiAgICBjb25zdCBuZXdGaWx0ZXIgPSBnZW5lcmF0ZVBvbHlnb25GaWx0ZXIoW10sIGZlYXR1cmUpO1xuICAgIGZpbHRlcklkeCA9IHN0YXRlLmZpbHRlcnMubGVuZ3RoO1xuXG4gICAgLy8gYWRkIGZlYXR1cmUsIHJlbW92ZSBmZWF0dXJlIGZyb20gZWlkdG9yXG4gICAgbmV3U3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGZpbHRlcnM6IFsuLi5zdGF0ZS5maWx0ZXJzLCBuZXdGaWx0ZXJdLFxuICAgICAgZWRpdG9yOiB7XG4gICAgICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICAgICAgZmVhdHVyZXM6IHN0YXRlLmVkaXRvci5mZWF0dXJlcy5maWx0ZXIoZiA9PiBmLmlkICE9PSBmZWF0dXJlLmlkKSxcbiAgICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBuZXdGaWx0ZXIudmFsdWVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHNldEZpbHRlclVwZGF0ZXIobmV3U3RhdGUsIHtcbiAgICBpZHg6IGZpbHRlcklkeCxcbiAgICBwcm9wOiAnbGF5ZXJJZCcsXG4gICAgdmFsdWU6IG5ld0xheWVySWRcbiAgfSk7XG59XG5cbi8qKlxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNvcnRUYWJsZUNvbHVtblVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0VGFibGVDb2x1bW5VcGRhdGVyKHN0YXRlLCB7ZGF0YUlkLCBjb2x1bW4sIG1vZGV9KSB7XG4gIGNvbnN0IGRhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdO1xuICBpZiAoIWRhdGFzZXQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgaWYgKCFtb2RlKSB7XG4gICAgY29uc3QgY3VycmVudE1vZGUgPSBnZXQoZGF0YXNldCwgWydzb3J0Q29sdW1uJywgY29sdW1uXSk7XG4gICAgbW9kZSA9IGN1cnJlbnRNb2RlXG4gICAgICA/IE9iamVjdC5rZXlzKFNPUlRfT1JERVIpLmZpbmQobSA9PiBtICE9PSBjdXJyZW50TW9kZSlcbiAgICAgIDogU09SVF9PUkRFUi5BU0NFTkRJTkc7XG4gIH1cblxuICBjb25zdCBzb3J0ZWQgPSBzb3J0RGF0YXNldEJ5Q29sdW1uKGRhdGFzZXQsIGNvbHVtbiwgbW9kZSk7XG4gIHJldHVybiBzZXQoWydkYXRhc2V0cycsIGRhdGFJZF0sIHNvcnRlZCwgc3RhdGUpO1xufVxuXG4vKipcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5waW5UYWJsZUNvbHVtblVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwaW5UYWJsZUNvbHVtblVwZGF0ZXIoc3RhdGUsIHtkYXRhSWQsIGNvbHVtbn0pIHtcbiAgY29uc3QgZGF0YXNldCA9IHN0YXRlLmRhdGFzZXRzW2RhdGFJZF07XG4gIGlmICghZGF0YXNldCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBjb25zdCBmaWVsZCA9IGRhdGFzZXQuZmllbGRzLmZpbmQoZiA9PiBmLm5hbWUgPT09IGNvbHVtbik7XG4gIGlmICghZmllbGQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBsZXQgcGlubmVkQ29sdW1ucztcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YXNldC5waW5uZWRDb2x1bW5zKSAmJiBkYXRhc2V0LnBpbm5lZENvbHVtbnMuaW5jbHVkZXMoZmllbGQubmFtZSkpIHtcbiAgICAvLyB1bnBpbiBpdFxuICAgIHBpbm5lZENvbHVtbnMgPSBkYXRhc2V0LnBpbm5lZENvbHVtbnMuZmlsdGVyKGNvID0+IGNvICE9PSBmaWVsZC5uYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBwaW5uZWRDb2x1bW5zID0gKGRhdGFzZXQucGlubmVkQ29sdW1ucyB8fCBbXSkuY29uY2F0KGZpZWxkLm5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHNldChbJ2RhdGFzZXRzJywgZGF0YUlkLCAncGlubmVkQ29sdW1ucyddLCBwaW5uZWRDb2x1bW5zLCBzdGF0ZSk7XG59XG5cbi8qKlxuICogQ29weSBjb2x1bW4gY29udGVudCBhcyBzdHJpbmdzXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuY29weVRhYmxlQ29sdW1uVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlUYWJsZUNvbHVtblVwZGF0ZXIoc3RhdGUsIHtkYXRhSWQsIGNvbHVtbn0pIHtcbiAgY29uc3QgZGF0YXNldCA9IHN0YXRlLmRhdGFzZXRzW2RhdGFJZF07XG4gIGlmICghZGF0YXNldCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBjb25zdCBmaWVsZElkeCA9IGRhdGFzZXQuZmllbGRzLmZpbmRJbmRleChmID0+IGYubmFtZSA9PT0gY29sdW1uKTtcbiAgaWYgKGZpZWxkSWR4IDwgMCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBjb25zdCB7dHlwZX0gPSBkYXRhc2V0LmZpZWxkc1tmaWVsZElkeF07XG4gIGNvbnN0IHRleHQgPSBkYXRhc2V0LmFsbERhdGEubWFwKGQgPT4gcGFyc2VGaWVsZFZhbHVlKGRbZmllbGRJZHhdLCB0eXBlKSkuam9pbignXFxuJyk7XG5cbiAgY29weSh0ZXh0KTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogVXBkYXRlIGVkaXRvclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlRWRpdG9yVmlzaWJpbGl0eVVwZGF0ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVFZGl0b3JWaXNpYmlsaXR5VXBkYXRlcihzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGVkaXRvcjoge1xuICAgICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgICAgdmlzaWJsZTogIXN0YXRlLmVkaXRvci52aXNpYmxlXG4gICAgfVxuICB9O1xufVxuIl19