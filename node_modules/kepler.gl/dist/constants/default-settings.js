"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATASET_FORMATS = exports.LOADING_METHODS = exports.MAP_INFO_CHARACTER = exports.MAP_THUMBNAIL_DIMENSION = exports.MAX_GPU_FILTERS = exports.EDITOR_AVAILABLE_LAYERS = exports.EDITOR_MODES = exports.GEOCODER_ICON_SIZE = exports.GEOCODER_ICON_COLOR = exports.GEOCODER_GEO_OFFSET = exports.GEOCODER_LAYER_ID = exports.GEOCODER_DATASET_NAME = exports.SPEED_CONTROL_STEP = exports.SPEED_CONTROL_RANGE = exports.DEFAULT_TIME_FORMAT = exports.ANIMATION_TYPE = exports.FPS = exports.BASE_SPEED = exports.DEFAULT_NOTIFICATION_TOPICS = exports.DEFAULT_NOTIFICATION_TYPES = exports.DEFAULT_NOTIFICATION_MESSAGE = exports.DEFAULT_UUID_COUNT = exports.EXPORT_HTML_MAP_MODE_OPTIONS = exports.EXPORT_MAP_FORMAT_OPTIONS = exports.EXPORT_HTML_MAP_MODES = exports.EXPORT_MAP_FORMATS = exports.EXPORT_DATA_TYPE_OPTIONS = exports.EXPORT_DATA_TYPE = exports.EXPORT_IMG_RESOLUTION_OPTIONS = exports.EXPORT_IMG_RATIO_OPTIONS = exports.EXPORT_IMG_RATIOS = exports.RESOLUTIONS = exports.MAX_DEFAULT_TOOLTIPS = exports.LAYER_BLENDINGS = exports.NO_VALUE_COLOR = exports.DEFAULT_TOOLTIP_FIELDS = exports.DEFAULT_LAYER_COLOR = exports.LAYER_TYPES = exports.CHANNEL_SCALE_SUPPORTED_FIELDS = exports.FIELD_OPTS = exports.DEFAULT_AGGREGATION = exports.notSupportAggrOpts = exports.notSupportedScaleOpts = exports.ordinalFieldAggrScaleFunctions = exports.ordinalFieldScaleFunctions = exports.linearFieldAggrScaleFunctions = exports.linearFieldScaleFunctions = exports.AGGREGATION_TYPES = exports.CHANNEL_SCALES = exports.FILED_TYPE_DISPLAY = exports.FIELD_COLORS = exports.HIGHLIGH_COLOR_3D = exports.TABLE_OPTION_LIST = exports.TABLE_OPTION = exports.SORT_ORDER = exports.ALL_FIELD_TYPES = exports.SCALE_FUNC = exports.SCALE_TYPES = exports.FILTER_TYPES = exports.TRIP_ARC_FIELDS = exports.TRIP_POINT_FIELDS = exports.ICON_FIELDS = exports.GEOJSON_FIELDS = exports.DEFAULT_MAP_STYLES = exports.DEFAULT_LAYER_GROUPS = exports.PANELS = exports.SIDEBAR_PANELS = exports.THEME = exports.DIMENSIONS = exports.KEPLER_GL_WEBSITE = exports.KEPLER_GL_VERSION = exports.KEPLER_GL_NAME = exports.SHARE_MAP_ID = exports.OVERWRITE_MAP_ID = exports.SAVE_MAP_ID = exports.EXPORT_MAP_ID = exports.ADD_MAP_STYLE_ID = exports.EXPORT_DATA_ID = exports.EXPORT_IMAGE_ID = exports.ADD_DATA_ID = exports.DELETE_DATA_ID = exports.DATA_TABLE_ID = exports.DEFAULT_MAPBOX_API_URL = exports.ICON_PREFIX = exports.CLOUDFRONT = exports.ACTION_PREFIX = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _keymirror = _interopRequireDefault(require("keymirror"));

var _reactMapGlDraw = require("react-map-gl-draw");

var _d3Scale = require("d3-scale");

var _icons = require("../components/common/icons");

var _utils = require("../utils/utils");

var _tooltip = require("./tooltip");

var _SCALE_FUNC, _FILED_TYPE_DISPLAY, _linearFieldScaleFunc, _CHANNEL_SCALES$color, _CHANNEL_SCALES$sizeA, _linearFieldAggrScale, _ordinalFieldScaleFun, _CHANNEL_SCALES$color2, _ordinalFieldAggrScal, _notSupportedScaleOpt, _notSupportAggrOpts, _DEFAULT_AGGREGATION;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ACTION_PREFIX = '@@kepler.gl/';
exports.ACTION_PREFIX = ACTION_PREFIX;
var CLOUDFRONT = 'https://d1a3f4spazzrp4.cloudfront.net/kepler.gl';
exports.CLOUDFRONT = CLOUDFRONT;
var ICON_PREFIX = "".concat(CLOUDFRONT, "/geodude");
exports.ICON_PREFIX = ICON_PREFIX;
var DEFAULT_MAPBOX_API_URL = 'https://api.mapbox.com'; // Modal Ids

/**
 * Modal id: data table
 * @constant
 * @type {string}
 * @public
 */

exports.DEFAULT_MAPBOX_API_URL = DEFAULT_MAPBOX_API_URL;
var DATA_TABLE_ID = 'dataTable';
/**
 * Modal id: delete dataset confirm dialog
 * @constant
 * @type {string}
 * @public
 */

exports.DATA_TABLE_ID = DATA_TABLE_ID;
var DELETE_DATA_ID = 'deleteData';
/**
 * Modal id: add data modal
 * @constant
 * @type {string}
 * @public
 */

exports.DELETE_DATA_ID = DELETE_DATA_ID;
var ADD_DATA_ID = 'addData';
/**
 * Modal id: export image modal
 * @constant
 * @type {string}
 * @public
 */

exports.ADD_DATA_ID = ADD_DATA_ID;
var EXPORT_IMAGE_ID = 'exportImage';
/**
 * Modal id: export data modal
 * @constant
 * @type {string}
 * @public
 */

exports.EXPORT_IMAGE_ID = EXPORT_IMAGE_ID;
var EXPORT_DATA_ID = 'exportData';
/**
 * Modal id: add custom map style modal
 * @constant
 * @type {string}
 * @public
 */

exports.EXPORT_DATA_ID = EXPORT_DATA_ID;
var ADD_MAP_STYLE_ID = 'addMapStyle';
/**
 * Modal id: export map modal
 * @constant
 * @type {string}
 * @public
 */

exports.ADD_MAP_STYLE_ID = ADD_MAP_STYLE_ID;
var EXPORT_MAP_ID = 'exportMap';
/**
 * Modal id: save map modal
 * @constant
 * @type {string}
 * @public
 */

exports.EXPORT_MAP_ID = EXPORT_MAP_ID;
var SAVE_MAP_ID = 'saveMap';
/**
 * Modal id: confirm to overwrite saved map
 * @constant
 * @type {string}
 * @public
 */

exports.SAVE_MAP_ID = SAVE_MAP_ID;
var OVERWRITE_MAP_ID = 'overwriteMap';
/**
 * Modal id: share map url modal
 * @constant
 * @type {string}
 * @public
 */

exports.OVERWRITE_MAP_ID = OVERWRITE_MAP_ID;
var SHARE_MAP_ID = 'shareMap';
exports.SHARE_MAP_ID = SHARE_MAP_ID;
var KEPLER_GL_NAME = 'kepler.gl'; // __PACKAGE_VERSION__ is automatically injected by Babel/Webpack during the building process
// Since we are injecting this during the build process with babel
// while developing VERSION is not defined, we capture the exception and return
// an empty string which will allow us to retrieve the latest umd version

exports.KEPLER_GL_NAME = KEPLER_GL_NAME;
var KEPLER_GL_VERSION = "2.3.2";
exports.KEPLER_GL_VERSION = KEPLER_GL_VERSION;
var KEPLER_GL_WEBSITE = 'http://kepler.gl/';
exports.KEPLER_GL_WEBSITE = KEPLER_GL_WEBSITE;
var DIMENSIONS = {
  sidePanel: {
    width: 300,
    margin: {
      top: 20,
      left: 20,
      bottom: 30,
      right: 20
    },
    headerHeight: 96
  },
  mapControl: {
    width: 204,
    padding: 12
  }
};
/**
 * Theme name that can be passed to `KeplerGl` `prop.theme`.
 * Available themes are `Theme.light` and `Theme.dark`. Default theme is `Theme.dark`
 * @constant
 * @type {string}
 * @public
 * @example
 * ```js
 * const Map = () => <KeplerGl theme={THEME.light} id="map"/>
 * ```
 */

exports.DIMENSIONS = DIMENSIONS;
var THEME = (0, _keymirror["default"])({
  light: null,
  dark: null,
  base: null
});
exports.THEME = THEME;
var SIDEBAR_PANELS = [{
  id: 'layer',
  label: 'sidebar.panels.layer',
  iconComponent: _icons.Layers
}, {
  id: 'filter',
  label: 'sidebar.panels.filter',
  iconComponent: _icons.FilterFunnel
}, {
  id: 'interaction',
  label: 'sidebar.panels.interaction',
  iconComponent: _icons.CursorClick
}, {
  id: 'map',
  label: 'sidebar.panels.basemap',
  iconComponent: _icons.Settings
}]; // backward compatibility

exports.SIDEBAR_PANELS = SIDEBAR_PANELS;
var PANELS = SIDEBAR_PANELS; // MAP STYLES

exports.PANELS = PANELS;
var DEFAULT_LAYER_GROUPS = [{
  slug: 'label',
  filter: function filter(_ref) {
    var id = _ref.id;
    return id.match(/(?=(label|place-|poi-))/);
  },
  defaultVisibility: true
}, {
  slug: 'road',
  filter: function filter(_ref2) {
    var id = _ref2.id;
    return id.match(/(?=(road|railway|tunnel|street|bridge))(?!.*label)/);
  },
  defaultVisibility: true
}, {
  slug: 'border',
  filter: function filter(_ref3) {
    var id = _ref3.id;
    return id.match(/border|boundaries/);
  },
  defaultVisibility: false
}, {
  slug: 'building',
  filter: function filter(_ref4) {
    var id = _ref4.id;
    return id.match(/building/);
  },
  defaultVisibility: true
}, {
  slug: 'water',
  filter: function filter(_ref5) {
    var id = _ref5.id;
    return id.match(/(?=(water|stream|ferry))/);
  },
  defaultVisibility: true
}, {
  slug: 'land',
  filter: function filter(_ref6) {
    var id = _ref6.id;
    return id.match(/(?=(parks|landcover|industrial|sand|hillshade))/);
  },
  defaultVisibility: true
}, {
  slug: '3d building',
  filter: function filter() {
    return false;
  },
  defaultVisibility: false
}];
exports.DEFAULT_LAYER_GROUPS = DEFAULT_LAYER_GROUPS;
var DEFAULT_MAP_STYLES = [{
  id: 'dark',
  label: 'Dark',
  url: 'mapbox://styles/uberdata/cjoqbbf6l9k302sl96tyvka09',
  icon: "".concat(ICON_PREFIX, "/UBER_DARK_V2.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'light',
  label: 'Light',
  url: 'mapbox://styles/uberdata/cjoqb9j339k1f2sl9t5ic5bn4',
  icon: "".concat(ICON_PREFIX, "/UBER_LIGHT_V2.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'muted',
  label: 'Muted Light',
  url: 'mapbox://styles/uberdata/cjfyl03kp1tul2smf5v2tbdd4',
  icon: "".concat(ICON_PREFIX, "/UBER_MUTED_LIGHT.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'muted_night',
  label: 'Muted Night',
  url: 'mapbox://styles/uberdata/cjfxhlikmaj1b2soyzevnywgs',
  icon: "".concat(ICON_PREFIX, "/UBER_MUTED_NIGHT.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'satellite',
  label: 'Satellite',
  url: "mapbox://styles/mapbox/satellite-v9",
  icon: "".concat(ICON_PREFIX, "/UBER_SATELLITE.png")
}];
exports.DEFAULT_MAP_STYLES = DEFAULT_MAP_STYLES;
var GEOJSON_FIELDS = {
  geojson: ['_geojson', 'all_points', 'geojson']
};
exports.GEOJSON_FIELDS = GEOJSON_FIELDS;
var ICON_FIELDS = {
  icon: ['icon']
};
exports.ICON_FIELDS = ICON_FIELDS;
var TRIP_POINT_FIELDS = [['lat', 'lng'], ['lat', 'lon'], ['latitude', 'longitude']];
exports.TRIP_POINT_FIELDS = TRIP_POINT_FIELDS;
var TRIP_ARC_FIELDS = {
  lat0: 'begintrip',
  lng0: 'begintrip',
  lat1: 'dropoff',
  lng1: 'dropoff'
};
exports.TRIP_ARC_FIELDS = TRIP_ARC_FIELDS;
var FILTER_TYPES = (0, _keymirror["default"])({
  range: null,
  select: null,
  timeRange: null,
  multiSelect: null,
  polygon: null
});
exports.FILTER_TYPES = FILTER_TYPES;
var SCALE_TYPES = (0, _keymirror["default"])({
  ordinal: null,
  quantile: null,
  quantize: null,
  linear: null,
  sqrt: null,
  log: null,
  // ordinal domain to linear range
  point: null
});
exports.SCALE_TYPES = SCALE_TYPES;
var SCALE_FUNC = (_SCALE_FUNC = {}, (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.linear, _d3Scale.scaleLinear), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.quantize, _d3Scale.scaleQuantize), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.quantile, _d3Scale.scaleQuantile), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.ordinal, _d3Scale.scaleOrdinal), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.sqrt, _d3Scale.scaleSqrt), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.log, _d3Scale.scaleLog), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.point, _d3Scale.scalePoint), _SCALE_FUNC);
exports.SCALE_FUNC = SCALE_FUNC;
var ALL_FIELD_TYPES = (0, _keymirror["default"])({
  "boolean": null,
  date: null,
  geojson: null,
  integer: null,
  real: null,
  string: null,
  timestamp: null,
  point: null
}); // Data Table

exports.ALL_FIELD_TYPES = ALL_FIELD_TYPES;
var SORT_ORDER = (0, _keymirror["default"])({
  ASCENDING: null,
  DESCENDING: null,
  UNSORT: null
});
exports.SORT_ORDER = SORT_ORDER;
var TABLE_OPTION = (0, _keymirror["default"])({
  SORT_ASC: null,
  SORT_DES: null,
  UNSORT: null,
  PIN: null,
  UNPIN: null,
  COPY: null
});
exports.TABLE_OPTION = TABLE_OPTION;
var TABLE_OPTION_LIST = [{
  value: TABLE_OPTION.SORT_ASC,
  display: 'Sort Ascending',
  icon: _icons.ArrowUp,
  condition: function condition(props) {
    return props.sortMode !== SORT_ORDER.ASCENDING;
  }
}, {
  value: TABLE_OPTION.SORT_DES,
  display: 'Sort Descending',
  icon: _icons.ArrowDown,
  condition: function condition(props) {
    return props.sortMode !== SORT_ORDER.DESCENDING;
  }
}, {
  value: TABLE_OPTION.UNSORT,
  display: 'Unsort Column',
  icon: _icons.Cancel,
  condition: function condition(props) {
    return props.isSorted;
  }
}, {
  value: TABLE_OPTION.PIN,
  display: 'Pin Column',
  icon: _icons.Pin,
  condition: function condition(props) {
    return !props.isPinned;
  }
}, {
  value: TABLE_OPTION.UNPIN,
  display: 'Unpin Column',
  icon: _icons.Cancel,
  condition: function condition(props) {
    return props.isPinned;
  }
}, {
  value: TABLE_OPTION.COPY,
  display: 'Copy Column',
  icon: _icons.Clipboard
}];
exports.TABLE_OPTION_LIST = TABLE_OPTION_LIST;
var ORANGE = '248, 194, 28';
var PINK = '231, 189, 194';
var PURPLE = '160, 106, 206';
var BLUE = '140, 210, 205';
var BLUE2 = '106, 160, 206';
var BLUE3 = '0, 172, 237';
var GREEN = '106, 160, 56';
var RED = '237, 88, 106';
var HIGHLIGH_COLOR_3D = [255, 255, 255, 60];
exports.HIGHLIGH_COLOR_3D = HIGHLIGH_COLOR_3D;
var FIELD_COLORS = {
  "default": RED
};
exports.FIELD_COLORS = FIELD_COLORS;
var FILED_TYPE_DISPLAY = (_FILED_TYPE_DISPLAY = {}, (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES["boolean"], {
  label: 'bool',
  color: PINK
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.date, {
  label: 'date',
  color: PURPLE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.geojson, {
  label: 'geo',
  color: BLUE2
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.integer, {
  label: 'int',
  color: ORANGE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.real, {
  label: 'float',
  color: ORANGE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.string, {
  label: 'string',
  color: BLUE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.timestamp, {
  label: 'time',
  color: GREEN
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.point, {
  label: 'point',
  color: BLUE3
}), _FILED_TYPE_DISPLAY);
exports.FILED_TYPE_DISPLAY = FILED_TYPE_DISPLAY;
var CHANNEL_SCALES = (0, _keymirror["default"])({
  color: null,
  radius: null,
  size: null,
  colorAggr: null,
  sizeAggr: null
});
exports.CHANNEL_SCALES = CHANNEL_SCALES;
var AGGREGATION_TYPES = {
  // default
  count: 'count',
  // linear
  average: 'average',
  maximum: 'maximum',
  minimum: 'minimum',
  median: 'median',
  stdev: 'stdev',
  sum: 'sum',
  variance: 'variance',
  // ordinal
  mode: 'mode',
  countUnique: 'count unique'
};
exports.AGGREGATION_TYPES = AGGREGATION_TYPES;
var linearFieldScaleFunctions = (_linearFieldScaleFunc = {}, (0, _defineProperty2["default"])(_linearFieldScaleFunc, CHANNEL_SCALES.color, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_linearFieldScaleFunc, CHANNEL_SCALES.radius, [SCALE_TYPES.sqrt]), (0, _defineProperty2["default"])(_linearFieldScaleFunc, CHANNEL_SCALES.size, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), _linearFieldScaleFunc);
exports.linearFieldScaleFunctions = linearFieldScaleFunctions;
var linearFieldAggrScaleFunctions = (_linearFieldAggrScale = {}, (0, _defineProperty2["default"])(_linearFieldAggrScale, CHANNEL_SCALES.colorAggr, (_CHANNEL_SCALES$color = {}, (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.average, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.maximum, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.minimum, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.median, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.stdev, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.sum, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.variance, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), _CHANNEL_SCALES$color)), (0, _defineProperty2["default"])(_linearFieldAggrScale, CHANNEL_SCALES.sizeAggr, (_CHANNEL_SCALES$sizeA = {}, (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.average, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.maximum, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.minimum, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.median, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.stdev, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.sum, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.variance, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), _CHANNEL_SCALES$sizeA)), _linearFieldAggrScale);
exports.linearFieldAggrScaleFunctions = linearFieldAggrScaleFunctions;
var ordinalFieldScaleFunctions = (_ordinalFieldScaleFun = {}, (0, _defineProperty2["default"])(_ordinalFieldScaleFun, CHANNEL_SCALES.color, [SCALE_TYPES.ordinal]), (0, _defineProperty2["default"])(_ordinalFieldScaleFun, CHANNEL_SCALES.radius, [SCALE_TYPES.point]), (0, _defineProperty2["default"])(_ordinalFieldScaleFun, CHANNEL_SCALES.size, [SCALE_TYPES.point]), _ordinalFieldScaleFun);
exports.ordinalFieldScaleFunctions = ordinalFieldScaleFunctions;
var ordinalFieldAggrScaleFunctions = (_ordinalFieldAggrScal = {}, (0, _defineProperty2["default"])(_ordinalFieldAggrScal, CHANNEL_SCALES.colorAggr, (_CHANNEL_SCALES$color2 = {}, (0, _defineProperty2["default"])(_CHANNEL_SCALES$color2, AGGREGATION_TYPES.mode, [SCALE_TYPES.ordinal]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color2, AGGREGATION_TYPES.countUnique, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), _CHANNEL_SCALES$color2)), (0, _defineProperty2["default"])(_ordinalFieldAggrScal, CHANNEL_SCALES.sizeAggr, {}), _ordinalFieldAggrScal);
exports.ordinalFieldAggrScaleFunctions = ordinalFieldAggrScaleFunctions;
var notSupportedScaleOpts = (_notSupportedScaleOpt = {}, (0, _defineProperty2["default"])(_notSupportedScaleOpt, CHANNEL_SCALES.color, []), (0, _defineProperty2["default"])(_notSupportedScaleOpt, CHANNEL_SCALES.radius, []), (0, _defineProperty2["default"])(_notSupportedScaleOpt, CHANNEL_SCALES.size, []), _notSupportedScaleOpt);
exports.notSupportedScaleOpts = notSupportedScaleOpts;
var notSupportAggrOpts = (_notSupportAggrOpts = {}, (0, _defineProperty2["default"])(_notSupportAggrOpts, CHANNEL_SCALES.colorAggr, {}), (0, _defineProperty2["default"])(_notSupportAggrOpts, CHANNEL_SCALES.sizeAggr, {}), _notSupportAggrOpts);
/**
 * Default aggregation are based on ocunt
 */

exports.notSupportAggrOpts = notSupportAggrOpts;
var DEFAULT_AGGREGATION = (_DEFAULT_AGGREGATION = {}, (0, _defineProperty2["default"])(_DEFAULT_AGGREGATION, CHANNEL_SCALES.colorAggr, (0, _defineProperty2["default"])({}, AGGREGATION_TYPES.count, [SCALE_TYPES.quantize, SCALE_TYPES.quantile])), (0, _defineProperty2["default"])(_DEFAULT_AGGREGATION, CHANNEL_SCALES.sizeAggr, (0, _defineProperty2["default"])({}, AGGREGATION_TYPES.count, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log])), _DEFAULT_AGGREGATION);
/**
 * Define what type of scale operation is allowed on each type of fields
 */

exports.DEFAULT_AGGREGATION = DEFAULT_AGGREGATION;
var FIELD_OPTS = {
  string: {
    type: 'categorical',
    scale: _objectSpread({}, ordinalFieldScaleFunctions, {}, ordinalFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: []
    }
  },
  real: {
    type: 'numerical',
    scale: _objectSpread({}, linearFieldScaleFunctions, {}, linearFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: [_tooltip.TOOLTIP_FORMAT_TYPES.NONE, _tooltip.TOOLTIP_FORMAT_TYPES.DECIMAL, _tooltip.TOOLTIP_FORMAT_TYPES.PERCENTAGE]
    }
  },
  timestamp: {
    type: 'time',
    scale: _objectSpread({}, linearFieldScaleFunctions, {}, notSupportAggrOpts),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: [_tooltip.TOOLTIP_FORMAT_TYPES.NONE, _tooltip.TOOLTIP_FORMAT_TYPES.DATE, _tooltip.TOOLTIP_FORMAT_TYPES.DATE_TIME]
    }
  },
  integer: {
    type: 'numerical',
    scale: _objectSpread({}, linearFieldScaleFunctions, {}, linearFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: [_tooltip.TOOLTIP_FORMAT_TYPES.NONE, _tooltip.TOOLTIP_FORMAT_TYPES.DECIMAL, _tooltip.TOOLTIP_FORMAT_TYPES.PERCENTAGE]
    }
  },
  "boolean": {
    type: 'boolean',
    scale: _objectSpread({}, ordinalFieldScaleFunctions, {}, ordinalFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: [_tooltip.TOOLTIP_FORMAT_TYPES.NONE, _tooltip.TOOLTIP_FORMAT_TYPES.BOOLEAN]
    }
  },
  date: {
    scale: _objectSpread({}, ordinalFieldScaleFunctions, {}, ordinalFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: [_tooltip.TOOLTIP_FORMAT_TYPES.NONE, _tooltip.TOOLTIP_FORMAT_TYPES.DATE]
    }
  },
  geojson: {
    type: 'geometry',
    scale: _objectSpread({}, notSupportedScaleOpts, {}, notSupportAggrOpts),
    format: {
      legend: function legend(d) {
        return '...';
      },
      tooltip: []
    }
  }
};
exports.FIELD_OPTS = FIELD_OPTS;
var CHANNEL_SCALE_SUPPORTED_FIELDS = Object.keys(CHANNEL_SCALES).reduce(function (accu, key) {
  return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, key, Object.keys(FIELD_OPTS).filter(function (ft) {
    return Object.keys(FIELD_OPTS[ft].scale[key]).length;
  })));
}, {}); // TODO: shan delete use of LAYER_TYPES

exports.CHANNEL_SCALE_SUPPORTED_FIELDS = CHANNEL_SCALE_SUPPORTED_FIELDS;
var LAYER_TYPES = (0, _keymirror["default"])({
  point: null,
  arc: null,
  cluster: null,
  line: null,
  grid: null,
  geojson: null,
  icon: null,
  heatmap: null,
  hexagon: null
});
exports.LAYER_TYPES = LAYER_TYPES;
var DEFAULT_LAYER_COLOR = {
  tripArc: '#9226C6',
  begintrip_lat: '#1E96BE',
  dropoff_lat: '#FF991F',
  request_lat: '#52A353'
}; // let user pass in default tooltip fields

exports.DEFAULT_LAYER_COLOR = DEFAULT_LAYER_COLOR;
var DEFAULT_TOOLTIP_FIELDS = [];
exports.DEFAULT_TOOLTIP_FIELDS = DEFAULT_TOOLTIP_FIELDS;
var NO_VALUE_COLOR = [0, 0, 0, 0];
exports.NO_VALUE_COLOR = NO_VALUE_COLOR;
var LAYER_BLENDINGS = {
  additive: {
    label: 'layerBlending.additive',
    blendFunc: ['SRC_ALPHA', 'DST_ALPHA'],
    blendEquation: 'FUNC_ADD'
  },
  normal: {
    // reference to
    // https://limnu.com/webgl-blending-youre-probably-wrong/
    label: 'layerBlending.normal',
    blendFunc: ['SRC_ALPHA', 'ONE_MINUS_SRC_ALPHA', 'ONE', 'ONE_MINUS_SRC_ALPHA'],
    blendEquation: ['FUNC_ADD', 'FUNC_ADD']
  },
  subtractive: {
    label: 'layerBlending.subtractive',
    blendFunc: ['ONE', 'ONE_MINUS_DST_COLOR', 'SRC_ALPHA', 'DST_ALPHA'],
    blendEquation: ['FUNC_SUBTRACT', 'FUNC_ADD']
  }
};
exports.LAYER_BLENDINGS = LAYER_BLENDINGS;
var MAX_DEFAULT_TOOLTIPS = 5;
exports.MAX_DEFAULT_TOOLTIPS = MAX_DEFAULT_TOOLTIPS;
var RESOLUTIONS = (0, _keymirror["default"])({
  ONE_X: null,
  TWO_X: null
});
exports.RESOLUTIONS = RESOLUTIONS;
var EXPORT_IMG_RATIOS = (0, _keymirror["default"])({
  SCREEN: null,
  FOUR_BY_THREE: null,
  SIXTEEN_BY_NINE: null,
  CUSTOM: null
});
exports.EXPORT_IMG_RATIOS = EXPORT_IMG_RATIOS;
var EXPORT_IMG_RATIO_OPTIONS = [{
  id: EXPORT_IMG_RATIOS.SCREEN,
  label: 'modal.exportImage.ratioOriginalScreen',
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: screenH
    };
  }
}, {
  id: EXPORT_IMG_RATIOS.CUSTOM,
  hidden: true,
  label: 'modal.exportImage.ratioCustom',
  getSize: function getSize(mapW, mapH) {
    return {
      width: mapW,
      height: mapH
    };
  }
}, {
  id: EXPORT_IMG_RATIOS.FOUR_BY_THREE,
  label: 'modal.exportImage.ratio4_3',
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: Math.round(screenW * 0.75)
    };
  }
}, {
  id: EXPORT_IMG_RATIOS.SIXTEEN_BY_NINE,
  label: 'modal.exportImage.ratio16_9',
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: Math.round(screenW * 0.5625)
    };
  }
}];
exports.EXPORT_IMG_RATIO_OPTIONS = EXPORT_IMG_RATIO_OPTIONS;
var EXPORT_IMG_RESOLUTION_OPTIONS = [{
  id: RESOLUTIONS.ONE_X,
  label: '1x',
  available: true,
  scale: 1,
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: screenH
    };
  }
}, {
  id: RESOLUTIONS.TWO_X,
  label: '2x',
  available: true,
  scale: 2,
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW * 2,
      height: screenH * 2
    };
  }
}];
exports.EXPORT_IMG_RESOLUTION_OPTIONS = EXPORT_IMG_RESOLUTION_OPTIONS;
var EXPORT_DATA_TYPE = (0, _keymirror["default"])({
  CSV: null // SHAPEFILE: null,
  // JSON: null,
  // GEOJSON: null,
  // TOPOJSON: null

});
exports.EXPORT_DATA_TYPE = EXPORT_DATA_TYPE;
var EXPORT_DATA_TYPE_OPTIONS = [{
  id: EXPORT_DATA_TYPE.CSV,
  label: EXPORT_DATA_TYPE.CSV.toLowerCase(),
  available: true
} // {
//   id: EXPORT_DATA_TYPE.SHAPEFILE,
//   label: 'shapefile',
//   available: false
// },
// {
//   id: EXPORT_DATA_TYPE.JSON,
//   label: 'json',
//   available: false
// },
// {
//   id: EXPORT_DATA_TYPE.GEOJSON,
//   label: 'geojson',
//   available: false
// },
// {
//   id: EXPORT_DATA_TYPE.TOPOJSON,
//   label: 'topojson',
//   available: false
// }
]; // Export map types

exports.EXPORT_DATA_TYPE_OPTIONS = EXPORT_DATA_TYPE_OPTIONS;
var EXPORT_MAP_FORMATS = (0, _keymirror["default"])({
  HTML: null,
  JSON: null
});
exports.EXPORT_MAP_FORMATS = EXPORT_MAP_FORMATS;
var EXPORT_HTML_MAP_MODES = (0, _keymirror["default"])({
  READ: null,
  EDIT: null
}); // Export map options

exports.EXPORT_HTML_MAP_MODES = EXPORT_HTML_MAP_MODES;
var EXPORT_MAP_FORMAT_OPTIONS = Object.entries(EXPORT_MAP_FORMATS).map(function (entry) {
  return {
    id: entry[0],
    label: entry[1].toLowerCase(),
    available: true
  };
});
exports.EXPORT_MAP_FORMAT_OPTIONS = EXPORT_MAP_FORMAT_OPTIONS;
var EXPORT_HTML_MAP_MODE_OPTIONS = Object.entries(EXPORT_HTML_MAP_MODES).map(function (entry) {
  return {
    id: entry[0],
    label: "modal.exportMap.html.".concat(entry[1].toLowerCase()),
    available: true,
    url: (0, _utils.getHTMLMapModeTileUrl)(entry[1])
  };
});
exports.EXPORT_HTML_MAP_MODE_OPTIONS = EXPORT_HTML_MAP_MODE_OPTIONS;
var DEFAULT_UUID_COUNT = 6;
exports.DEFAULT_UUID_COUNT = DEFAULT_UUID_COUNT;
var DEFAULT_NOTIFICATION_MESSAGE = 'MESSAGE_NOT_PROVIDED';
exports.DEFAULT_NOTIFICATION_MESSAGE = DEFAULT_NOTIFICATION_MESSAGE;
var DEFAULT_NOTIFICATION_TYPES = (0, _keymirror["default"])({
  info: null,
  error: null,
  warning: null,
  success: null
});
exports.DEFAULT_NOTIFICATION_TYPES = DEFAULT_NOTIFICATION_TYPES;
var DEFAULT_NOTIFICATION_TOPICS = (0, _keymirror["default"])({
  global: null,
  file: null
}); // Animation

exports.DEFAULT_NOTIFICATION_TOPICS = DEFAULT_NOTIFICATION_TOPICS;
var BASE_SPEED = 600;
exports.BASE_SPEED = BASE_SPEED;
var FPS = 60;
exports.FPS = FPS;
var ANIMATION_TYPE = (0, _keymirror["default"])({
  interval: null,
  continuous: null
});
exports.ANIMATION_TYPE = ANIMATION_TYPE;
var DEFAULT_TIME_FORMAT = 'MM/DD/YY HH:mm:ssa';
exports.DEFAULT_TIME_FORMAT = DEFAULT_TIME_FORMAT;
var SPEED_CONTROL_RANGE = [0, 10];
exports.SPEED_CONTROL_RANGE = SPEED_CONTROL_RANGE;
var SPEED_CONTROL_STEP = 0.001; // Geocoder

exports.SPEED_CONTROL_STEP = SPEED_CONTROL_STEP;
var GEOCODER_DATASET_NAME = 'geocoder_dataset';
exports.GEOCODER_DATASET_NAME = GEOCODER_DATASET_NAME;
var GEOCODER_LAYER_ID = 'geocoder_layer';
exports.GEOCODER_LAYER_ID = GEOCODER_LAYER_ID;
var GEOCODER_GEO_OFFSET = 0.05;
exports.GEOCODER_GEO_OFFSET = GEOCODER_GEO_OFFSET;
var GEOCODER_ICON_COLOR = [255, 0, 0];
exports.GEOCODER_ICON_COLOR = GEOCODER_ICON_COLOR;
var GEOCODER_ICON_SIZE = 80; // We could use directly react-map-gl-draw EditorMode but this would
// create a direct dependency with react-map-gl-draw
// Created this map to be independent from react-map-gl-draw

exports.GEOCODER_ICON_SIZE = GEOCODER_ICON_SIZE;
var EDITOR_MODES = {
  READ_ONLY: _reactMapGlDraw.EditorModes.READ_ONLY,
  DRAW_POLYGON: _reactMapGlDraw.EditorModes.DRAW_POLYGON,
  DRAW_RECTANGLE: _reactMapGlDraw.EditorModes.DRAW_RECTANGLE,
  EDIT: _reactMapGlDraw.EditorModes.EDIT_VERTEX
};
exports.EDITOR_MODES = EDITOR_MODES;
var EDITOR_AVAILABLE_LAYERS = [LAYER_TYPES.point, LAYER_TYPES.hexagon, LAYER_TYPES.arc, LAYER_TYPES.line]; // GPU Filtering

/**
 * Max number of filter value buffers that deck.gl provides
 */

exports.EDITOR_AVAILABLE_LAYERS = EDITOR_AVAILABLE_LAYERS;
var MAX_GPU_FILTERS = 4;
exports.MAX_GPU_FILTERS = MAX_GPU_FILTERS;
var MAP_THUMBNAIL_DIMENSION = {
  width: 300,
  height: 200
};
exports.MAP_THUMBNAIL_DIMENSION = MAP_THUMBNAIL_DIMENSION;
var MAP_INFO_CHARACTER = {
  title: 100,
  description: 100
}; // Load data

exports.MAP_INFO_CHARACTER = MAP_INFO_CHARACTER;
var LOADING_METHODS = (0, _keymirror["default"])({
  upload: null,
  storage: null
});
exports.LOADING_METHODS = LOADING_METHODS;
var DATASET_FORMATS = (0, _keymirror["default"])({
  row: null,
  geojson: null,
  csv: null,
  keplergl: null
});
exports.DATASET_FORMATS = DATASET_FORMATS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05fUFJFRklYIiwiQ0xPVURGUk9OVCIsIklDT05fUFJFRklYIiwiREVGQVVMVF9NQVBCT1hfQVBJX1VSTCIsIkRBVEFfVEFCTEVfSUQiLCJERUxFVEVfREFUQV9JRCIsIkFERF9EQVRBX0lEIiwiRVhQT1JUX0lNQUdFX0lEIiwiRVhQT1JUX0RBVEFfSUQiLCJBRERfTUFQX1NUWUxFX0lEIiwiRVhQT1JUX01BUF9JRCIsIlNBVkVfTUFQX0lEIiwiT1ZFUldSSVRFX01BUF9JRCIsIlNIQVJFX01BUF9JRCIsIktFUExFUl9HTF9OQU1FIiwiS0VQTEVSX0dMX1ZFUlNJT04iLCJLRVBMRVJfR0xfV0VCU0lURSIsIkRJTUVOU0lPTlMiLCJzaWRlUGFuZWwiLCJ3aWR0aCIsIm1hcmdpbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImhlYWRlckhlaWdodCIsIm1hcENvbnRyb2wiLCJwYWRkaW5nIiwiVEhFTUUiLCJsaWdodCIsImRhcmsiLCJiYXNlIiwiU0lERUJBUl9QQU5FTFMiLCJpZCIsImxhYmVsIiwiaWNvbkNvbXBvbmVudCIsIkxheWVycyIsIkZpbHRlckZ1bm5lbCIsIkN1cnNvckNsaWNrIiwiU2V0dGluZ3MiLCJQQU5FTFMiLCJERUZBVUxUX0xBWUVSX0dST1VQUyIsInNsdWciLCJmaWx0ZXIiLCJtYXRjaCIsImRlZmF1bHRWaXNpYmlsaXR5IiwiREVGQVVMVF9NQVBfU1RZTEVTIiwidXJsIiwiaWNvbiIsImxheWVyR3JvdXBzIiwiR0VPSlNPTl9GSUVMRFMiLCJnZW9qc29uIiwiSUNPTl9GSUVMRFMiLCJUUklQX1BPSU5UX0ZJRUxEUyIsIlRSSVBfQVJDX0ZJRUxEUyIsImxhdDAiLCJsbmcwIiwibGF0MSIsImxuZzEiLCJGSUxURVJfVFlQRVMiLCJyYW5nZSIsInNlbGVjdCIsInRpbWVSYW5nZSIsIm11bHRpU2VsZWN0IiwicG9seWdvbiIsIlNDQUxFX1RZUEVTIiwib3JkaW5hbCIsInF1YW50aWxlIiwicXVhbnRpemUiLCJsaW5lYXIiLCJzcXJ0IiwibG9nIiwicG9pbnQiLCJTQ0FMRV9GVU5DIiwic2NhbGVMaW5lYXIiLCJzY2FsZVF1YW50aXplIiwic2NhbGVRdWFudGlsZSIsInNjYWxlT3JkaW5hbCIsInNjYWxlU3FydCIsInNjYWxlTG9nIiwic2NhbGVQb2ludCIsIkFMTF9GSUVMRF9UWVBFUyIsImRhdGUiLCJpbnRlZ2VyIiwicmVhbCIsInN0cmluZyIsInRpbWVzdGFtcCIsIlNPUlRfT1JERVIiLCJBU0NFTkRJTkciLCJERVNDRU5ESU5HIiwiVU5TT1JUIiwiVEFCTEVfT1BUSU9OIiwiU09SVF9BU0MiLCJTT1JUX0RFUyIsIlBJTiIsIlVOUElOIiwiQ09QWSIsIlRBQkxFX09QVElPTl9MSVNUIiwidmFsdWUiLCJkaXNwbGF5IiwiQXJyb3dVcCIsImNvbmRpdGlvbiIsInByb3BzIiwic29ydE1vZGUiLCJBcnJvd0Rvd24iLCJDYW5jZWwiLCJpc1NvcnRlZCIsIlBpbiIsImlzUGlubmVkIiwiQ2xpcGJvYXJkIiwiT1JBTkdFIiwiUElOSyIsIlBVUlBMRSIsIkJMVUUiLCJCTFVFMiIsIkJMVUUzIiwiR1JFRU4iLCJSRUQiLCJISUdITElHSF9DT0xPUl8zRCIsIkZJRUxEX0NPTE9SUyIsIkZJTEVEX1RZUEVfRElTUExBWSIsImNvbG9yIiwiQ0hBTk5FTF9TQ0FMRVMiLCJyYWRpdXMiLCJzaXplIiwiY29sb3JBZ2dyIiwic2l6ZUFnZ3IiLCJBR0dSRUdBVElPTl9UWVBFUyIsImNvdW50IiwiYXZlcmFnZSIsIm1heGltdW0iLCJtaW5pbXVtIiwibWVkaWFuIiwic3RkZXYiLCJzdW0iLCJ2YXJpYW5jZSIsIm1vZGUiLCJjb3VudFVuaXF1ZSIsImxpbmVhckZpZWxkU2NhbGVGdW5jdGlvbnMiLCJsaW5lYXJGaWVsZEFnZ3JTY2FsZUZ1bmN0aW9ucyIsIm9yZGluYWxGaWVsZFNjYWxlRnVuY3Rpb25zIiwib3JkaW5hbEZpZWxkQWdnclNjYWxlRnVuY3Rpb25zIiwibm90U3VwcG9ydGVkU2NhbGVPcHRzIiwibm90U3VwcG9ydEFnZ3JPcHRzIiwiREVGQVVMVF9BR0dSRUdBVElPTiIsIkZJRUxEX09QVFMiLCJ0eXBlIiwic2NhbGUiLCJmb3JtYXQiLCJsZWdlbmQiLCJkIiwidG9vbHRpcCIsIlRPT0xUSVBfRk9STUFUX1RZUEVTIiwiTk9ORSIsIkRFQ0lNQUwiLCJQRVJDRU5UQUdFIiwiREFURSIsIkRBVEVfVElNRSIsIkJPT0xFQU4iLCJDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjdSIsImtleSIsImZ0IiwibGVuZ3RoIiwiTEFZRVJfVFlQRVMiLCJhcmMiLCJjbHVzdGVyIiwibGluZSIsImdyaWQiLCJoZWF0bWFwIiwiaGV4YWdvbiIsIkRFRkFVTFRfTEFZRVJfQ09MT1IiLCJ0cmlwQXJjIiwiYmVnaW50cmlwX2xhdCIsImRyb3BvZmZfbGF0IiwicmVxdWVzdF9sYXQiLCJERUZBVUxUX1RPT0xUSVBfRklFTERTIiwiTk9fVkFMVUVfQ09MT1IiLCJMQVlFUl9CTEVORElOR1MiLCJhZGRpdGl2ZSIsImJsZW5kRnVuYyIsImJsZW5kRXF1YXRpb24iLCJub3JtYWwiLCJzdWJ0cmFjdGl2ZSIsIk1BWF9ERUZBVUxUX1RPT0xUSVBTIiwiUkVTT0xVVElPTlMiLCJPTkVfWCIsIlRXT19YIiwiRVhQT1JUX0lNR19SQVRJT1MiLCJTQ1JFRU4iLCJGT1VSX0JZX1RIUkVFIiwiU0lYVEVFTl9CWV9OSU5FIiwiQ1VTVE9NIiwiRVhQT1JUX0lNR19SQVRJT19PUFRJT05TIiwiZ2V0U2l6ZSIsInNjcmVlblciLCJzY3JlZW5IIiwiaGVpZ2h0IiwiaGlkZGVuIiwibWFwVyIsIm1hcEgiLCJNYXRoIiwicm91bmQiLCJFWFBPUlRfSU1HX1JFU09MVVRJT05fT1BUSU9OUyIsImF2YWlsYWJsZSIsIkVYUE9SVF9EQVRBX1RZUEUiLCJDU1YiLCJFWFBPUlRfREFUQV9UWVBFX09QVElPTlMiLCJ0b0xvd2VyQ2FzZSIsIkVYUE9SVF9NQVBfRk9STUFUUyIsIkhUTUwiLCJKU09OIiwiRVhQT1JUX0hUTUxfTUFQX01PREVTIiwiUkVBRCIsIkVESVQiLCJFWFBPUlRfTUFQX0ZPUk1BVF9PUFRJT05TIiwiZW50cmllcyIsIm1hcCIsImVudHJ5IiwiRVhQT1JUX0hUTUxfTUFQX01PREVfT1BUSU9OUyIsIkRFRkFVTFRfVVVJRF9DT1VOVCIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OX01FU1NBR0UiLCJERUZBVUxUX05PVElGSUNBVElPTl9UWVBFUyIsImluZm8iLCJlcnJvciIsIndhcm5pbmciLCJzdWNjZXNzIiwiREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTIiwiZ2xvYmFsIiwiZmlsZSIsIkJBU0VfU1BFRUQiLCJGUFMiLCJBTklNQVRJT05fVFlQRSIsImludGVydmFsIiwiY29udGludW91cyIsIkRFRkFVTFRfVElNRV9GT1JNQVQiLCJTUEVFRF9DT05UUk9MX1JBTkdFIiwiU1BFRURfQ09OVFJPTF9TVEVQIiwiR0VPQ09ERVJfREFUQVNFVF9OQU1FIiwiR0VPQ09ERVJfTEFZRVJfSUQiLCJHRU9DT0RFUl9HRU9fT0ZGU0VUIiwiR0VPQ09ERVJfSUNPTl9DT0xPUiIsIkdFT0NPREVSX0lDT05fU0laRSIsIkVESVRPUl9NT0RFUyIsIlJFQURfT05MWSIsIkVkaXRvck1vZGVzIiwiRFJBV19QT0xZR09OIiwiRFJBV19SRUNUQU5HTEUiLCJFRElUX1ZFUlRFWCIsIkVESVRPUl9BVkFJTEFCTEVfTEFZRVJTIiwiTUFYX0dQVV9GSUxURVJTIiwiTUFQX1RIVU1CTkFJTF9ESU1FTlNJT04iLCJNQVBfSU5GT19DSEFSQUNURVIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiTE9BRElOR19NRVRIT0RTIiwidXBsb2FkIiwic3RvcmFnZSIsIkRBVEFTRVRfRk9STUFUUyIsInJvdyIsImNzdiIsImtlcGxlcmdsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFTQTs7QUFXQTs7QUFDQTs7Ozs7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QVcsQ0FBQy9GLEtBRHlCLEVBRXJDK0YsV0FBVyxDQUFDTSxPQUZ5QixFQUdyQ04sV0FBVyxDQUFDQyxHQUh5QixFQUlyQ0QsV0FBVyxDQUFDRyxJQUp5QixDQUFoQyxDLENBTVA7O0FBQ0E7Ozs7O0FBR08sSUFBTW1GLGVBQWUsR0FBRyxDQUF4Qjs7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRztBQUNyQzNPLEVBQUFBLEtBQUssRUFBRSxHQUQ4QjtBQUVyQ3FMLEVBQUFBLE1BQU0sRUFBRTtBQUY2QixDQUFoQzs7QUFLQSxJQUFNdUQsa0JBQWtCLEdBQUc7QUFDaENDLEVBQUFBLEtBQUssRUFBRSxHQUR5QjtBQUVoQ0MsRUFBQUEsV0FBVyxFQUFFO0FBRm1CLENBQTNCLEMsQ0FLUDs7O0FBQ08sSUFBTUMsZUFBZSxHQUFHLDJCQUFVO0FBQ3ZDQyxFQUFBQSxNQUFNLEVBQUUsSUFEK0I7QUFFdkNDLEVBQUFBLE9BQU8sRUFBRTtBQUY4QixDQUFWLENBQXhCOztBQUtBLElBQU1DLGVBQWUsR0FBRywyQkFBVTtBQUN2Q0MsRUFBQUEsR0FBRyxFQUFFLElBRGtDO0FBRXZDbk4sRUFBQUEsT0FBTyxFQUFFLElBRjhCO0FBR3ZDb04sRUFBQUEsR0FBRyxFQUFFLElBSGtDO0FBSXZDQyxFQUFBQSxRQUFRLEVBQUU7QUFKNkIsQ0FBVixDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBrZXlNaXJyb3IgZnJvbSAna2V5bWlycm9yJztcbmltcG9ydCB7RWRpdG9yTW9kZXN9IGZyb20gJ3JlYWN0LW1hcC1nbC1kcmF3JztcblxuaW1wb3J0IHtcbiAgc2NhbGVMaW5lYXIsXG4gIHNjYWxlUXVhbnRpemUsXG4gIHNjYWxlUXVhbnRpbGUsXG4gIHNjYWxlT3JkaW5hbCxcbiAgc2NhbGVTcXJ0LFxuICBzY2FsZUxvZyxcbiAgc2NhbGVQb2ludFxufSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQge1xuICBMYXllcnMsXG4gIEZpbHRlckZ1bm5lbCxcbiAgU2V0dGluZ3MsXG4gIEN1cnNvckNsaWNrLFxuICBQaW4sXG4gIEFycm93RG93bixcbiAgQXJyb3dVcCxcbiAgQ2xpcGJvYXJkLFxuICBDYW5jZWxcbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtnZXRIVE1MTWFwTW9kZVRpbGVVcmx9IGZyb20gJ3V0aWxzL3V0aWxzJztcbmltcG9ydCB7VE9PTFRJUF9GT1JNQVRfVFlQRVN9IGZyb20gJy4vdG9vbHRpcCc7XG5cbmV4cG9ydCBjb25zdCBBQ1RJT05fUFJFRklYID0gJ0BAa2VwbGVyLmdsLyc7XG5leHBvcnQgY29uc3QgQ0xPVURGUk9OVCA9ICdodHRwczovL2QxYTNmNHNwYXp6cnA0LmNsb3VkZnJvbnQubmV0L2tlcGxlci5nbCc7XG5leHBvcnQgY29uc3QgSUNPTl9QUkVGSVggPSBgJHtDTE9VREZST05UfS9nZW9kdWRlYDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX01BUEJPWF9BUElfVVJMID0gJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20nO1xuXG4vLyBNb2RhbCBJZHNcbi8qKlxuICogTW9kYWwgaWQ6IGRhdGEgdGFibGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IERBVEFfVEFCTEVfSUQgPSAnZGF0YVRhYmxlJztcbi8qKlxuICogTW9kYWwgaWQ6IGRlbGV0ZSBkYXRhc2V0IGNvbmZpcm0gZGlhbG9nXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBERUxFVEVfREFUQV9JRCA9ICdkZWxldGVEYXRhJztcbi8qKlxuICogTW9kYWwgaWQ6IGFkZCBkYXRhIG1vZGFsXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBBRERfREFUQV9JRCA9ICdhZGREYXRhJztcbi8qKlxuICogTW9kYWwgaWQ6IGV4cG9ydCBpbWFnZSBtb2RhbFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgRVhQT1JUX0lNQUdFX0lEID0gJ2V4cG9ydEltYWdlJztcbi8qKlxuICogTW9kYWwgaWQ6IGV4cG9ydCBkYXRhIG1vZGFsXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBFWFBPUlRfREFUQV9JRCA9ICdleHBvcnREYXRhJztcbi8qKlxuICogTW9kYWwgaWQ6IGFkZCBjdXN0b20gbWFwIHN0eWxlIG1vZGFsXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBBRERfTUFQX1NUWUxFX0lEID0gJ2FkZE1hcFN0eWxlJztcbi8qKlxuICogTW9kYWwgaWQ6IGV4cG9ydCBtYXAgbW9kYWxcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IEVYUE9SVF9NQVBfSUQgPSAnZXhwb3J0TWFwJztcbi8qKlxuICogTW9kYWwgaWQ6IHNhdmUgbWFwIG1vZGFsXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBTQVZFX01BUF9JRCA9ICdzYXZlTWFwJztcbi8qKlxuICogTW9kYWwgaWQ6IGNvbmZpcm0gdG8gb3ZlcndyaXRlIHNhdmVkIG1hcFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgT1ZFUldSSVRFX01BUF9JRCA9ICdvdmVyd3JpdGVNYXAnO1xuLyoqXG4gKiBNb2RhbCBpZDogc2hhcmUgbWFwIHVybCBtb2RhbFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgU0hBUkVfTUFQX0lEID0gJ3NoYXJlTWFwJztcblxuZXhwb3J0IGNvbnN0IEtFUExFUl9HTF9OQU1FID0gJ2tlcGxlci5nbCc7XG5cbi8vIF9fUEFDS0FHRV9WRVJTSU9OX18gaXMgYXV0b21hdGljYWxseSBpbmplY3RlZCBieSBCYWJlbC9XZWJwYWNrIGR1cmluZyB0aGUgYnVpbGRpbmcgcHJvY2Vzc1xuLy8gU2luY2Ugd2UgYXJlIGluamVjdGluZyB0aGlzIGR1cmluZyB0aGUgYnVpbGQgcHJvY2VzcyB3aXRoIGJhYmVsXG4vLyB3aGlsZSBkZXZlbG9waW5nIFZFUlNJT04gaXMgbm90IGRlZmluZWQsIHdlIGNhcHR1cmUgdGhlIGV4Y2VwdGlvbiBhbmQgcmV0dXJuXG4vLyBhbiBlbXB0eSBzdHJpbmcgd2hpY2ggd2lsbCBhbGxvdyB1cyB0byByZXRyaWV2ZSB0aGUgbGF0ZXN0IHVtZCB2ZXJzaW9uXG5leHBvcnQgY29uc3QgS0VQTEVSX0dMX1ZFUlNJT04gPSAnX19QQUNLQUdFX1ZFUlNJT05fXyc7XG5leHBvcnQgY29uc3QgS0VQTEVSX0dMX1dFQlNJVEUgPSAnaHR0cDovL2tlcGxlci5nbC8nO1xuXG5leHBvcnQgY29uc3QgRElNRU5TSU9OUyA9IHtcbiAgc2lkZVBhbmVsOiB7XG4gICAgd2lkdGg6IDMwMCxcbiAgICBtYXJnaW46IHt0b3A6IDIwLCBsZWZ0OiAyMCwgYm90dG9tOiAzMCwgcmlnaHQ6IDIwfSxcbiAgICBoZWFkZXJIZWlnaHQ6IDk2XG4gIH0sXG4gIG1hcENvbnRyb2w6IHtcbiAgICB3aWR0aDogMjA0LFxuICAgIHBhZGRpbmc6IDEyXG4gIH1cbn07XG5cbi8qKlxuICogVGhlbWUgbmFtZSB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYEtlcGxlckdsYCBgcHJvcC50aGVtZWAuXG4gKiBBdmFpbGFibGUgdGhlbWVzIGFyZSBgVGhlbWUubGlnaHRgIGFuZCBgVGhlbWUuZGFya2AuIERlZmF1bHQgdGhlbWUgaXMgYFRoZW1lLmRhcmtgXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIGNvbnN0IE1hcCA9ICgpID0+IDxLZXBsZXJHbCB0aGVtZT17VEhFTUUubGlnaHR9IGlkPVwibWFwXCIvPlxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBUSEVNRSA9IGtleU1pcnJvcih7XG4gIGxpZ2h0OiBudWxsLFxuICBkYXJrOiBudWxsLFxuICBiYXNlOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IFNJREVCQVJfUEFORUxTID0gW1xuICB7XG4gICAgaWQ6ICdsYXllcicsXG4gICAgbGFiZWw6ICdzaWRlYmFyLnBhbmVscy5sYXllcicsXG4gICAgaWNvbkNvbXBvbmVudDogTGF5ZXJzXG4gIH0sXG4gIHtcbiAgICBpZDogJ2ZpbHRlcicsXG4gICAgbGFiZWw6ICdzaWRlYmFyLnBhbmVscy5maWx0ZXInLFxuICAgIGljb25Db21wb25lbnQ6IEZpbHRlckZ1bm5lbFxuICB9LFxuICB7XG4gICAgaWQ6ICdpbnRlcmFjdGlvbicsXG4gICAgbGFiZWw6ICdzaWRlYmFyLnBhbmVscy5pbnRlcmFjdGlvbicsXG4gICAgaWNvbkNvbXBvbmVudDogQ3Vyc29yQ2xpY2tcbiAgfSxcbiAge1xuICAgIGlkOiAnbWFwJyxcbiAgICBsYWJlbDogJ3NpZGViYXIucGFuZWxzLmJhc2VtYXAnLFxuICAgIGljb25Db21wb25lbnQ6IFNldHRpbmdzXG4gIH1cbl07XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbmV4cG9ydCBjb25zdCBQQU5FTFMgPSBTSURFQkFSX1BBTkVMUztcblxuLy8gTUFQIFNUWUxFU1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9MQVlFUl9HUk9VUFMgPSBbXG4gIHtcbiAgICBzbHVnOiAnbGFiZWwnLFxuICAgIGZpbHRlcjogKHtpZH0pID0+IGlkLm1hdGNoKC8oPz0obGFiZWx8cGxhY2UtfHBvaS0pKS8pLFxuICAgIGRlZmF1bHRWaXNpYmlsaXR5OiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzbHVnOiAncm9hZCcsXG4gICAgZmlsdGVyOiAoe2lkfSkgPT4gaWQubWF0Y2goLyg/PShyb2FkfHJhaWx3YXl8dHVubmVsfHN0cmVldHxicmlkZ2UpKSg/IS4qbGFiZWwpLyksXG4gICAgZGVmYXVsdFZpc2liaWxpdHk6IHRydWVcbiAgfSxcbiAge1xuICAgIHNsdWc6ICdib3JkZXInLFxuICAgIGZpbHRlcjogKHtpZH0pID0+IGlkLm1hdGNoKC9ib3JkZXJ8Ym91bmRhcmllcy8pLFxuICAgIGRlZmF1bHRWaXNpYmlsaXR5OiBmYWxzZVxuICB9LFxuICB7XG4gICAgc2x1ZzogJ2J1aWxkaW5nJyxcbiAgICBmaWx0ZXI6ICh7aWR9KSA9PiBpZC5tYXRjaCgvYnVpbGRpbmcvKSxcbiAgICBkZWZhdWx0VmlzaWJpbGl0eTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2x1ZzogJ3dhdGVyJyxcbiAgICBmaWx0ZXI6ICh7aWR9KSA9PiBpZC5tYXRjaCgvKD89KHdhdGVyfHN0cmVhbXxmZXJyeSkpLyksXG4gICAgZGVmYXVsdFZpc2liaWxpdHk6IHRydWVcbiAgfSxcbiAge1xuICAgIHNsdWc6ICdsYW5kJyxcbiAgICBmaWx0ZXI6ICh7aWR9KSA9PiBpZC5tYXRjaCgvKD89KHBhcmtzfGxhbmRjb3ZlcnxpbmR1c3RyaWFsfHNhbmR8aGlsbHNoYWRlKSkvKSxcbiAgICBkZWZhdWx0VmlzaWJpbGl0eTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2x1ZzogJzNkIGJ1aWxkaW5nJyxcbiAgICBmaWx0ZXI6ICgpID0+IGZhbHNlLFxuICAgIGRlZmF1bHRWaXNpYmlsaXR5OiBmYWxzZVxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9NQVBfU1RZTEVTID0gW1xuICB7XG4gICAgaWQ6ICdkYXJrJyxcbiAgICBsYWJlbDogJ0RhcmsnLFxuICAgIHVybDogJ21hcGJveDovL3N0eWxlcy91YmVyZGF0YS9jam9xYmJmNmw5azMwMnNsOTZ0eXZrYTA5JyxcbiAgICBpY29uOiBgJHtJQ09OX1BSRUZJWH0vVUJFUl9EQVJLX1YyLnBuZ2AsXG4gICAgbGF5ZXJHcm91cHM6IERFRkFVTFRfTEFZRVJfR1JPVVBTXG4gIH0sXG4gIHtcbiAgICBpZDogJ2xpZ2h0JyxcbiAgICBsYWJlbDogJ0xpZ2h0JyxcbiAgICB1cmw6ICdtYXBib3g6Ly9zdHlsZXMvdWJlcmRhdGEvY2pvcWI5ajMzOWsxZjJzbDl0NWljNWJuNCcsXG4gICAgaWNvbjogYCR7SUNPTl9QUkVGSVh9L1VCRVJfTElHSFRfVjIucG5nYCxcbiAgICBsYXllckdyb3VwczogREVGQVVMVF9MQVlFUl9HUk9VUFNcbiAgfSxcbiAge1xuICAgIGlkOiAnbXV0ZWQnLFxuICAgIGxhYmVsOiAnTXV0ZWQgTGlnaHQnLFxuICAgIHVybDogJ21hcGJveDovL3N0eWxlcy91YmVyZGF0YS9jamZ5bDAza3AxdHVsMnNtZjV2MnRiZGQ0JyxcbiAgICBpY29uOiBgJHtJQ09OX1BSRUZJWH0vVUJFUl9NVVRFRF9MSUdIVC5wbmdgLFxuICAgIGxheWVyR3JvdXBzOiBERUZBVUxUX0xBWUVSX0dST1VQU1xuICB9LFxuICB7XG4gICAgaWQ6ICdtdXRlZF9uaWdodCcsXG4gICAgbGFiZWw6ICdNdXRlZCBOaWdodCcsXG4gICAgdXJsOiAnbWFwYm94Oi8vc3R5bGVzL3ViZXJkYXRhL2NqZnhobGlrbWFqMWIyc295emV2bnl3Z3MnLFxuICAgIGljb246IGAke0lDT05fUFJFRklYfS9VQkVSX01VVEVEX05JR0hULnBuZ2AsXG4gICAgbGF5ZXJHcm91cHM6IERFRkFVTFRfTEFZRVJfR1JPVVBTXG4gIH0sXG4gIHtcbiAgICBpZDogJ3NhdGVsbGl0ZScsXG4gICAgbGFiZWw6ICdTYXRlbGxpdGUnLFxuICAgIHVybDogYG1hcGJveDovL3N0eWxlcy9tYXBib3gvc2F0ZWxsaXRlLXY5YCxcbiAgICBpY29uOiBgJHtJQ09OX1BSRUZJWH0vVUJFUl9TQVRFTExJVEUucG5nYFxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgR0VPSlNPTl9GSUVMRFMgPSB7XG4gIGdlb2pzb246IFsnX2dlb2pzb24nLCAnYWxsX3BvaW50cycsICdnZW9qc29uJ11cbn07XG5cbmV4cG9ydCBjb25zdCBJQ09OX0ZJRUxEUyA9IHtcbiAgaWNvbjogWydpY29uJ11cbn07XG5cbmV4cG9ydCBjb25zdCBUUklQX1BPSU5UX0ZJRUxEUyA9IFtcbiAgWydsYXQnLCAnbG5nJ10sXG4gIFsnbGF0JywgJ2xvbiddLFxuICBbJ2xhdGl0dWRlJywgJ2xvbmdpdHVkZSddXG5dO1xuXG5leHBvcnQgY29uc3QgVFJJUF9BUkNfRklFTERTID0ge1xuICBsYXQwOiAnYmVnaW50cmlwJyxcbiAgbG5nMDogJ2JlZ2ludHJpcCcsXG4gIGxhdDE6ICdkcm9wb2ZmJyxcbiAgbG5nMTogJ2Ryb3BvZmYnXG59O1xuXG5leHBvcnQgY29uc3QgRklMVEVSX1RZUEVTID0ga2V5TWlycm9yKHtcbiAgcmFuZ2U6IG51bGwsXG4gIHNlbGVjdDogbnVsbCxcbiAgdGltZVJhbmdlOiBudWxsLFxuICBtdWx0aVNlbGVjdDogbnVsbCxcbiAgcG9seWdvbjogbnVsbFxufSk7XG5cbmV4cG9ydCBjb25zdCBTQ0FMRV9UWVBFUyA9IGtleU1pcnJvcih7XG4gIG9yZGluYWw6IG51bGwsXG4gIHF1YW50aWxlOiBudWxsLFxuICBxdWFudGl6ZTogbnVsbCxcbiAgbGluZWFyOiBudWxsLFxuICBzcXJ0OiBudWxsLFxuICBsb2c6IG51bGwsXG5cbiAgLy8gb3JkaW5hbCBkb21haW4gdG8gbGluZWFyIHJhbmdlXG4gIHBvaW50OiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IFNDQUxFX0ZVTkMgPSB7XG4gIFtTQ0FMRV9UWVBFUy5saW5lYXJdOiBzY2FsZUxpbmVhcixcbiAgW1NDQUxFX1RZUEVTLnF1YW50aXplXTogc2NhbGVRdWFudGl6ZSxcbiAgW1NDQUxFX1RZUEVTLnF1YW50aWxlXTogc2NhbGVRdWFudGlsZSxcbiAgW1NDQUxFX1RZUEVTLm9yZGluYWxdOiBzY2FsZU9yZGluYWwsXG4gIFtTQ0FMRV9UWVBFUy5zcXJ0XTogc2NhbGVTcXJ0LFxuICBbU0NBTEVfVFlQRVMubG9nXTogc2NhbGVMb2csXG4gIFtTQ0FMRV9UWVBFUy5wb2ludF06IHNjYWxlUG9pbnRcbn07XG5cbmV4cG9ydCBjb25zdCBBTExfRklFTERfVFlQRVMgPSBrZXlNaXJyb3Ioe1xuICBib29sZWFuOiBudWxsLFxuICBkYXRlOiBudWxsLFxuICBnZW9qc29uOiBudWxsLFxuICBpbnRlZ2VyOiBudWxsLFxuICByZWFsOiBudWxsLFxuICBzdHJpbmc6IG51bGwsXG4gIHRpbWVzdGFtcDogbnVsbCxcbiAgcG9pbnQ6IG51bGxcbn0pO1xuXG4vLyBEYXRhIFRhYmxlXG5leHBvcnQgY29uc3QgU09SVF9PUkRFUiA9IGtleU1pcnJvcih7XG4gIEFTQ0VORElORzogbnVsbCxcbiAgREVTQ0VORElORzogbnVsbCxcbiAgVU5TT1JUOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IFRBQkxFX09QVElPTiA9IGtleU1pcnJvcih7XG4gIFNPUlRfQVNDOiBudWxsLFxuICBTT1JUX0RFUzogbnVsbCxcbiAgVU5TT1JUOiBudWxsLFxuICBQSU46IG51bGwsXG4gIFVOUElOOiBudWxsLFxuICBDT1BZOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IFRBQkxFX09QVElPTl9MSVNUID0gW1xuICB7XG4gICAgdmFsdWU6IFRBQkxFX09QVElPTi5TT1JUX0FTQyxcbiAgICBkaXNwbGF5OiAnU29ydCBBc2NlbmRpbmcnLFxuICAgIGljb246IEFycm93VXAsXG4gICAgY29uZGl0aW9uOiBwcm9wcyA9PiBwcm9wcy5zb3J0TW9kZSAhPT0gU09SVF9PUkRFUi5BU0NFTkRJTkdcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBUQUJMRV9PUFRJT04uU09SVF9ERVMsXG4gICAgZGlzcGxheTogJ1NvcnQgRGVzY2VuZGluZycsXG4gICAgaWNvbjogQXJyb3dEb3duLFxuICAgIGNvbmRpdGlvbjogcHJvcHMgPT4gcHJvcHMuc29ydE1vZGUgIT09IFNPUlRfT1JERVIuREVTQ0VORElOR1xuICB9LFxuICB7XG4gICAgdmFsdWU6IFRBQkxFX09QVElPTi5VTlNPUlQsXG4gICAgZGlzcGxheTogJ1Vuc29ydCBDb2x1bW4nLFxuICAgIGljb246IENhbmNlbCxcbiAgICBjb25kaXRpb246IHByb3BzID0+IHByb3BzLmlzU29ydGVkXG4gIH0sXG4gIHt2YWx1ZTogVEFCTEVfT1BUSU9OLlBJTiwgZGlzcGxheTogJ1BpbiBDb2x1bW4nLCBpY29uOiBQaW4sIGNvbmRpdGlvbjogcHJvcHMgPT4gIXByb3BzLmlzUGlubmVkfSxcbiAge1xuICAgIHZhbHVlOiBUQUJMRV9PUFRJT04uVU5QSU4sXG4gICAgZGlzcGxheTogJ1VucGluIENvbHVtbicsXG4gICAgaWNvbjogQ2FuY2VsLFxuICAgIGNvbmRpdGlvbjogcHJvcHMgPT4gcHJvcHMuaXNQaW5uZWRcbiAgfSxcbiAge3ZhbHVlOiBUQUJMRV9PUFRJT04uQ09QWSwgZGlzcGxheTogJ0NvcHkgQ29sdW1uJywgaWNvbjogQ2xpcGJvYXJkfVxuXTtcblxuY29uc3QgT1JBTkdFID0gJzI0OCwgMTk0LCAyOCc7XG5jb25zdCBQSU5LID0gJzIzMSwgMTg5LCAxOTQnO1xuY29uc3QgUFVSUExFID0gJzE2MCwgMTA2LCAyMDYnO1xuY29uc3QgQkxVRSA9ICcxNDAsIDIxMCwgMjA1JztcbmNvbnN0IEJMVUUyID0gJzEwNiwgMTYwLCAyMDYnO1xuY29uc3QgQkxVRTMgPSAnMCwgMTcyLCAyMzcnO1xuY29uc3QgR1JFRU4gPSAnMTA2LCAxNjAsIDU2JztcbmNvbnN0IFJFRCA9ICcyMzcsIDg4LCAxMDYnO1xuXG5leHBvcnQgY29uc3QgSElHSExJR0hfQ09MT1JfM0QgPSBbMjU1LCAyNTUsIDI1NSwgNjBdO1xuXG5leHBvcnQgY29uc3QgRklFTERfQ09MT1JTID0ge1xuICBkZWZhdWx0OiBSRURcbn07XG5cbmV4cG9ydCBjb25zdCBGSUxFRF9UWVBFX0RJU1BMQVkgPSB7XG4gIFtBTExfRklFTERfVFlQRVMuYm9vbGVhbl06IHtcbiAgICBsYWJlbDogJ2Jvb2wnLFxuICAgIGNvbG9yOiBQSU5LXG4gIH0sXG4gIFtBTExfRklFTERfVFlQRVMuZGF0ZV06IHtcbiAgICBsYWJlbDogJ2RhdGUnLFxuICAgIGNvbG9yOiBQVVJQTEVcbiAgfSxcbiAgW0FMTF9GSUVMRF9UWVBFUy5nZW9qc29uXToge1xuICAgIGxhYmVsOiAnZ2VvJyxcbiAgICBjb2xvcjogQkxVRTJcbiAgfSxcbiAgW0FMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyXToge1xuICAgIGxhYmVsOiAnaW50JyxcbiAgICBjb2xvcjogT1JBTkdFXG4gIH0sXG4gIFtBTExfRklFTERfVFlQRVMucmVhbF06IHtcbiAgICBsYWJlbDogJ2Zsb2F0JyxcbiAgICBjb2xvcjogT1JBTkdFXG4gIH0sXG4gIFtBTExfRklFTERfVFlQRVMuc3RyaW5nXToge1xuICAgIGxhYmVsOiAnc3RyaW5nJyxcbiAgICBjb2xvcjogQkxVRVxuICB9LFxuICBbQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcF06IHtcbiAgICBsYWJlbDogJ3RpbWUnLFxuICAgIGNvbG9yOiBHUkVFTlxuICB9LFxuICAvLyBmaWVsZCBwYWlyc1xuICBbQUxMX0ZJRUxEX1RZUEVTLnBvaW50XToge1xuICAgIGxhYmVsOiAncG9pbnQnLFxuICAgIGNvbG9yOiBCTFVFM1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgQ0hBTk5FTF9TQ0FMRVMgPSBrZXlNaXJyb3Ioe1xuICBjb2xvcjogbnVsbCxcbiAgcmFkaXVzOiBudWxsLFxuICBzaXplOiBudWxsLFxuICBjb2xvckFnZ3I6IG51bGwsXG4gIHNpemVBZ2dyOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IEFHR1JFR0FUSU9OX1RZUEVTID0ge1xuICAvLyBkZWZhdWx0XG4gIGNvdW50OiAnY291bnQnLFxuICAvLyBsaW5lYXJcbiAgYXZlcmFnZTogJ2F2ZXJhZ2UnLFxuICBtYXhpbXVtOiAnbWF4aW11bScsXG4gIG1pbmltdW06ICdtaW5pbXVtJyxcbiAgbWVkaWFuOiAnbWVkaWFuJyxcbiAgc3RkZXY6ICdzdGRldicsXG4gIHN1bTogJ3N1bScsXG4gIHZhcmlhbmNlOiAndmFyaWFuY2UnLFxuICAvLyBvcmRpbmFsXG4gIG1vZGU6ICdtb2RlJyxcbiAgY291bnRVbmlxdWU6ICdjb3VudCB1bmlxdWUnXG59O1xuXG5leHBvcnQgY29uc3QgbGluZWFyRmllbGRTY2FsZUZ1bmN0aW9ucyA9IHtcbiAgW0NIQU5ORUxfU0NBTEVTLmNvbG9yXTogW1NDQUxFX1RZUEVTLnF1YW50aXplLCBTQ0FMRV9UWVBFUy5xdWFudGlsZV0sXG4gIFtDSEFOTkVMX1NDQUxFUy5yYWRpdXNdOiBbU0NBTEVfVFlQRVMuc3FydF0sXG4gIFtDSEFOTkVMX1NDQUxFUy5zaXplXTogW1NDQUxFX1RZUEVTLmxpbmVhciwgU0NBTEVfVFlQRVMuc3FydCwgU0NBTEVfVFlQRVMubG9nXVxufTtcblxuZXhwb3J0IGNvbnN0IGxpbmVhckZpZWxkQWdnclNjYWxlRnVuY3Rpb25zID0ge1xuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JBZ2dyXToge1xuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5hdmVyYWdlXTogW1NDQUxFX1RZUEVTLnF1YW50aXplLCBTQ0FMRV9UWVBFUy5xdWFudGlsZV0sXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLm1heGltdW1dOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMubWluaW11bV06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdLFxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5tZWRpYW5dOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuc3RkZXZdOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuc3VtXTogW1NDQUxFX1RZUEVTLnF1YW50aXplLCBTQ0FMRV9UWVBFUy5xdWFudGlsZV0sXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLnZhcmlhbmNlXTogW1NDQUxFX1RZUEVTLnF1YW50aXplLCBTQ0FMRV9UWVBFUy5xdWFudGlsZV1cbiAgfSxcblxuICBbQ0hBTk5FTF9TQ0FMRVMuc2l6ZUFnZ3JdOiB7XG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLmF2ZXJhZ2VdOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddLFxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5tYXhpbXVtXTogW1NDQUxFX1RZUEVTLmxpbmVhciwgU0NBTEVfVFlQRVMuc3FydCwgU0NBTEVfVFlQRVMubG9nXSxcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMubWluaW11bV06IFtTQ0FMRV9UWVBFUy5saW5lYXIsIFNDQUxFX1RZUEVTLnNxcnQsIFNDQUxFX1RZUEVTLmxvZ10sXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLm1lZGlhbl06IFtTQ0FMRV9UWVBFUy5saW5lYXIsIFNDQUxFX1RZUEVTLnNxcnQsIFNDQUxFX1RZUEVTLmxvZ10sXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLnN0ZGV2XTogW1NDQUxFX1RZUEVTLmxpbmVhciwgU0NBTEVfVFlQRVMuc3FydCwgU0NBTEVfVFlQRVMubG9nXSxcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuc3VtXTogW1NDQUxFX1RZUEVTLmxpbmVhciwgU0NBTEVfVFlQRVMuc3FydCwgU0NBTEVfVFlQRVMubG9nXSxcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMudmFyaWFuY2VdOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBvcmRpbmFsRmllbGRTY2FsZUZ1bmN0aW9ucyA9IHtcbiAgW0NIQU5ORUxfU0NBTEVTLmNvbG9yXTogW1NDQUxFX1RZUEVTLm9yZGluYWxdLFxuICBbQ0hBTk5FTF9TQ0FMRVMucmFkaXVzXTogW1NDQUxFX1RZUEVTLnBvaW50XSxcbiAgW0NIQU5ORUxfU0NBTEVTLnNpemVdOiBbU0NBTEVfVFlQRVMucG9pbnRdXG59O1xuXG5leHBvcnQgY29uc3Qgb3JkaW5hbEZpZWxkQWdnclNjYWxlRnVuY3Rpb25zID0ge1xuICAvLyBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JBZ2dyXTogW1NDQUxFX1RZUEVTLm9yZGluYWwsIFNDQUxFX1RZUEVTLmxpbmVhcl0sXG4gIFtDSEFOTkVMX1NDQUxFUy5jb2xvckFnZ3JdOiB7XG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLm1vZGVdOiBbU0NBTEVfVFlQRVMub3JkaW5hbF0sXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLmNvdW50VW5pcXVlXTogW1NDQUxFX1RZUEVTLnF1YW50aXplLCBTQ0FMRV9UWVBFUy5xdWFudGlsZV1cbiAgfSxcblxuICAvLyBDdXJyZW50bHkgZG9lc24ndCBzdXBwb3J0IHlldFxuICBbQ0hBTk5FTF9TQ0FMRVMuc2l6ZUFnZ3JdOiB7fVxufTtcblxuZXhwb3J0IGNvbnN0IG5vdFN1cHBvcnRlZFNjYWxlT3B0cyA9IHtcbiAgW0NIQU5ORUxfU0NBTEVTLmNvbG9yXTogW10sXG4gIFtDSEFOTkVMX1NDQUxFUy5yYWRpdXNdOiBbXSxcbiAgW0NIQU5ORUxfU0NBTEVTLnNpemVdOiBbXVxufTtcblxuZXhwb3J0IGNvbnN0IG5vdFN1cHBvcnRBZ2dyT3B0cyA9IHtcbiAgW0NIQU5ORUxfU0NBTEVTLmNvbG9yQWdncl06IHt9LFxuICBbQ0hBTk5FTF9TQ0FMRVMuc2l6ZUFnZ3JdOiB7fVxufTtcblxuLyoqXG4gKiBEZWZhdWx0IGFnZ3JlZ2F0aW9uIGFyZSBiYXNlZCBvbiBvY3VudFxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9BR0dSRUdBVElPTiA9IHtcbiAgW0NIQU5ORUxfU0NBTEVTLmNvbG9yQWdncl06IHtcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuY291bnRdOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXVxuICB9LFxuICBbQ0hBTk5FTF9TQ0FMRVMuc2l6ZUFnZ3JdOiB7XG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLmNvdW50XTogW1NDQUxFX1RZUEVTLmxpbmVhciwgU0NBTEVfVFlQRVMuc3FydCwgU0NBTEVfVFlQRVMubG9nXVxuICB9XG59O1xuXG4vKipcbiAqIERlZmluZSB3aGF0IHR5cGUgb2Ygc2NhbGUgb3BlcmF0aW9uIGlzIGFsbG93ZWQgb24gZWFjaCB0eXBlIG9mIGZpZWxkc1xuICovXG5leHBvcnQgY29uc3QgRklFTERfT1BUUyA9IHtcbiAgc3RyaW5nOiB7XG4gICAgdHlwZTogJ2NhdGVnb3JpY2FsJyxcbiAgICBzY2FsZToge1xuICAgICAgLi4ub3JkaW5hbEZpZWxkU2NhbGVGdW5jdGlvbnMsXG4gICAgICAuLi5vcmRpbmFsRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnNcbiAgICB9LFxuICAgIGZvcm1hdDoge1xuICAgICAgbGVnZW5kOiBkID0+IGQsXG4gICAgICB0b29sdGlwOiBbXVxuICAgIH1cbiAgfSxcbiAgcmVhbDoge1xuICAgIHR5cGU6ICdudW1lcmljYWwnLFxuICAgIHNjYWxlOiB7XG4gICAgICAuLi5saW5lYXJGaWVsZFNjYWxlRnVuY3Rpb25zLFxuICAgICAgLi4ubGluZWFyRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnNcbiAgICB9LFxuICAgIGZvcm1hdDoge1xuICAgICAgbGVnZW5kOiBkID0+IGQsXG4gICAgICB0b29sdGlwOiBbXG4gICAgICAgIFRPT0xUSVBfRk9STUFUX1RZUEVTLk5PTkUsXG4gICAgICAgIFRPT0xUSVBfRk9STUFUX1RZUEVTLkRFQ0lNQUwsXG4gICAgICAgIFRPT0xUSVBfRk9STUFUX1RZUEVTLlBFUkNFTlRBR0VcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHRpbWVzdGFtcDoge1xuICAgIHR5cGU6ICd0aW1lJyxcbiAgICBzY2FsZToge1xuICAgICAgLi4ubGluZWFyRmllbGRTY2FsZUZ1bmN0aW9ucyxcbiAgICAgIC4uLm5vdFN1cHBvcnRBZ2dyT3B0c1xuICAgIH0sXG4gICAgZm9ybWF0OiB7XG4gICAgICBsZWdlbmQ6IGQgPT4gZCxcbiAgICAgIHRvb2x0aXA6IFtcbiAgICAgICAgVE9PTFRJUF9GT1JNQVRfVFlQRVMuTk9ORSxcbiAgICAgICAgVE9PTFRJUF9GT1JNQVRfVFlQRVMuREFURSxcbiAgICAgICAgVE9PTFRJUF9GT1JNQVRfVFlQRVMuREFURV9USU1FXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBpbnRlZ2VyOiB7XG4gICAgdHlwZTogJ251bWVyaWNhbCcsXG4gICAgc2NhbGU6IHtcbiAgICAgIC4uLmxpbmVhckZpZWxkU2NhbGVGdW5jdGlvbnMsXG4gICAgICAuLi5saW5lYXJGaWVsZEFnZ3JTY2FsZUZ1bmN0aW9uc1xuICAgIH0sXG4gICAgZm9ybWF0OiB7XG4gICAgICBsZWdlbmQ6IGQgPT4gZCxcbiAgICAgIHRvb2x0aXA6IFtcbiAgICAgICAgVE9PTFRJUF9GT1JNQVRfVFlQRVMuTk9ORSxcbiAgICAgICAgVE9PTFRJUF9GT1JNQVRfVFlQRVMuREVDSU1BTCxcbiAgICAgICAgVE9PTFRJUF9GT1JNQVRfVFlQRVMuUEVSQ0VOVEFHRVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgYm9vbGVhbjoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBzY2FsZToge1xuICAgICAgLi4ub3JkaW5hbEZpZWxkU2NhbGVGdW5jdGlvbnMsXG4gICAgICAuLi5vcmRpbmFsRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnNcbiAgICB9LFxuICAgIGZvcm1hdDoge1xuICAgICAgbGVnZW5kOiBkID0+IGQsXG4gICAgICB0b29sdGlwOiBbVE9PTFRJUF9GT1JNQVRfVFlQRVMuTk9ORSwgVE9PTFRJUF9GT1JNQVRfVFlQRVMuQk9PTEVBTl1cbiAgICB9XG4gIH0sXG4gIGRhdGU6IHtcbiAgICBzY2FsZToge1xuICAgICAgLi4ub3JkaW5hbEZpZWxkU2NhbGVGdW5jdGlvbnMsXG4gICAgICAuLi5vcmRpbmFsRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnNcbiAgICB9LFxuICAgIGZvcm1hdDoge1xuICAgICAgbGVnZW5kOiBkID0+IGQsXG4gICAgICB0b29sdGlwOiBbVE9PTFRJUF9GT1JNQVRfVFlQRVMuTk9ORSwgVE9PTFRJUF9GT1JNQVRfVFlQRVMuREFURV1cbiAgICB9XG4gIH0sXG4gIGdlb2pzb246IHtcbiAgICB0eXBlOiAnZ2VvbWV0cnknLFxuICAgIHNjYWxlOiB7XG4gICAgICAuLi5ub3RTdXBwb3J0ZWRTY2FsZU9wdHMsXG4gICAgICAuLi5ub3RTdXBwb3J0QWdnck9wdHNcbiAgICB9LFxuICAgIGZvcm1hdDoge1xuICAgICAgbGVnZW5kOiBkID0+ICcuLi4nLFxuICAgICAgdG9vbHRpcDogW11cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFMgPSBPYmplY3Qua2V5cyhDSEFOTkVMX1NDQUxFUykucmVkdWNlKFxuICAoYWNjdSwga2V5KSA9PiAoe1xuICAgIC4uLmFjY3UsXG4gICAgW2tleV06IE9iamVjdC5rZXlzKEZJRUxEX09QVFMpLmZpbHRlcihmdCA9PiBPYmplY3Qua2V5cyhGSUVMRF9PUFRTW2Z0XS5zY2FsZVtrZXldKS5sZW5ndGgpXG4gIH0pLFxuICB7fVxuKTtcblxuLy8gVE9ETzogc2hhbiBkZWxldGUgdXNlIG9mIExBWUVSX1RZUEVTXG5leHBvcnQgY29uc3QgTEFZRVJfVFlQRVMgPSBrZXlNaXJyb3Ioe1xuICBwb2ludDogbnVsbCxcbiAgYXJjOiBudWxsLFxuICBjbHVzdGVyOiBudWxsLFxuICBsaW5lOiBudWxsLFxuICBncmlkOiBudWxsLFxuICBnZW9qc29uOiBudWxsLFxuICBpY29uOiBudWxsLFxuICBoZWF0bWFwOiBudWxsLFxuICBoZXhhZ29uOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTEFZRVJfQ09MT1IgPSB7XG4gIHRyaXBBcmM6ICcjOTIyNkM2JyxcbiAgYmVnaW50cmlwX2xhdDogJyMxRTk2QkUnLFxuICBkcm9wb2ZmX2xhdDogJyNGRjk5MUYnLFxuICByZXF1ZXN0X2xhdDogJyM1MkEzNTMnXG59O1xuXG4vLyBsZXQgdXNlciBwYXNzIGluIGRlZmF1bHQgdG9vbHRpcCBmaWVsZHNcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RPT0xUSVBfRklFTERTID0gW107XG5cbmV4cG9ydCBjb25zdCBOT19WQUxVRV9DT0xPUiA9IFswLCAwLCAwLCAwXTtcblxuZXhwb3J0IGNvbnN0IExBWUVSX0JMRU5ESU5HUyA9IHtcbiAgYWRkaXRpdmU6IHtcbiAgICBsYWJlbDogJ2xheWVyQmxlbmRpbmcuYWRkaXRpdmUnLFxuICAgIGJsZW5kRnVuYzogWydTUkNfQUxQSEEnLCAnRFNUX0FMUEhBJ10sXG4gICAgYmxlbmRFcXVhdGlvbjogJ0ZVTkNfQUREJ1xuICB9LFxuICBub3JtYWw6IHtcbiAgICAvLyByZWZlcmVuY2UgdG9cbiAgICAvLyBodHRwczovL2xpbW51LmNvbS93ZWJnbC1ibGVuZGluZy15b3VyZS1wcm9iYWJseS13cm9uZy9cbiAgICBsYWJlbDogJ2xheWVyQmxlbmRpbmcubm9ybWFsJyxcbiAgICBibGVuZEZ1bmM6IFsnU1JDX0FMUEhBJywgJ09ORV9NSU5VU19TUkNfQUxQSEEnLCAnT05FJywgJ09ORV9NSU5VU19TUkNfQUxQSEEnXSxcbiAgICBibGVuZEVxdWF0aW9uOiBbJ0ZVTkNfQUREJywgJ0ZVTkNfQUREJ11cbiAgfSxcbiAgc3VidHJhY3RpdmU6IHtcbiAgICBsYWJlbDogJ2xheWVyQmxlbmRpbmcuc3VidHJhY3RpdmUnLFxuICAgIGJsZW5kRnVuYzogWydPTkUnLCAnT05FX01JTlVTX0RTVF9DT0xPUicsICdTUkNfQUxQSEEnLCAnRFNUX0FMUEhBJ10sXG4gICAgYmxlbmRFcXVhdGlvbjogWydGVU5DX1NVQlRSQUNUJywgJ0ZVTkNfQUREJ11cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IE1BWF9ERUZBVUxUX1RPT0xUSVBTID0gNTtcblxuZXhwb3J0IGNvbnN0IFJFU09MVVRJT05TID0ga2V5TWlycm9yKHtcbiAgT05FX1g6IG51bGwsXG4gIFRXT19YOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IEVYUE9SVF9JTUdfUkFUSU9TID0ga2V5TWlycm9yKHtcbiAgU0NSRUVOOiBudWxsLFxuICBGT1VSX0JZX1RIUkVFOiBudWxsLFxuICBTSVhURUVOX0JZX05JTkU6IG51bGwsXG4gIENVU1RPTTogbnVsbFxufSk7XG5cbmV4cG9ydCBjb25zdCBFWFBPUlRfSU1HX1JBVElPX09QVElPTlMgPSBbXG4gIHtcbiAgICBpZDogRVhQT1JUX0lNR19SQVRJT1MuU0NSRUVOLFxuICAgIGxhYmVsOiAnbW9kYWwuZXhwb3J0SW1hZ2UucmF0aW9PcmlnaW5hbFNjcmVlbicsXG4gICAgZ2V0U2l6ZTogKHNjcmVlblcsIHNjcmVlbkgpID0+ICh7d2lkdGg6IHNjcmVlblcsIGhlaWdodDogc2NyZWVuSH0pXG4gIH0sXG4gIHtcbiAgICBpZDogRVhQT1JUX0lNR19SQVRJT1MuQ1VTVE9NLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgICBsYWJlbDogJ21vZGFsLmV4cG9ydEltYWdlLnJhdGlvQ3VzdG9tJyxcbiAgICBnZXRTaXplOiAobWFwVywgbWFwSCkgPT4gKHt3aWR0aDogbWFwVywgaGVpZ2h0OiBtYXBIfSlcbiAgfSxcbiAge1xuICAgIGlkOiBFWFBPUlRfSU1HX1JBVElPUy5GT1VSX0JZX1RIUkVFLFxuICAgIGxhYmVsOiAnbW9kYWwuZXhwb3J0SW1hZ2UucmF0aW80XzMnLFxuICAgIGdldFNpemU6IChzY3JlZW5XLCBzY3JlZW5IKSA9PiAoe1xuICAgICAgd2lkdGg6IHNjcmVlblcsXG4gICAgICBoZWlnaHQ6IE1hdGgucm91bmQoc2NyZWVuVyAqIDAuNzUpXG4gICAgfSlcbiAgfSxcbiAge1xuICAgIGlkOiBFWFBPUlRfSU1HX1JBVElPUy5TSVhURUVOX0JZX05JTkUsXG4gICAgbGFiZWw6ICdtb2RhbC5leHBvcnRJbWFnZS5yYXRpbzE2XzknLFxuICAgIGdldFNpemU6IChzY3JlZW5XLCBzY3JlZW5IKSA9PiAoe1xuICAgICAgd2lkdGg6IHNjcmVlblcsXG4gICAgICBoZWlnaHQ6IE1hdGgucm91bmQoc2NyZWVuVyAqIDAuNTYyNSlcbiAgICB9KVxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgRVhQT1JUX0lNR19SRVNPTFVUSU9OX09QVElPTlMgPSBbXG4gIHtcbiAgICBpZDogUkVTT0xVVElPTlMuT05FX1gsXG4gICAgbGFiZWw6ICcxeCcsXG4gICAgYXZhaWxhYmxlOiB0cnVlLFxuICAgIHNjYWxlOiAxLFxuICAgIGdldFNpemU6IChzY3JlZW5XLCBzY3JlZW5IKSA9PiAoe1xuICAgICAgd2lkdGg6IHNjcmVlblcsXG4gICAgICBoZWlnaHQ6IHNjcmVlbkhcbiAgICB9KVxuICB9LFxuICB7XG4gICAgaWQ6IFJFU09MVVRJT05TLlRXT19YLFxuICAgIGxhYmVsOiAnMngnLFxuICAgIGF2YWlsYWJsZTogdHJ1ZSxcbiAgICBzY2FsZTogMixcbiAgICBnZXRTaXplOiAoc2NyZWVuVywgc2NyZWVuSCkgPT4gKHtcbiAgICAgIHdpZHRoOiBzY3JlZW5XICogMixcbiAgICAgIGhlaWdodDogc2NyZWVuSCAqIDJcbiAgICB9KVxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgRVhQT1JUX0RBVEFfVFlQRSA9IGtleU1pcnJvcih7XG4gIENTVjogbnVsbFxuICAvLyBTSEFQRUZJTEU6IG51bGwsXG4gIC8vIEpTT046IG51bGwsXG4gIC8vIEdFT0pTT046IG51bGwsXG4gIC8vIFRPUE9KU09OOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IEVYUE9SVF9EQVRBX1RZUEVfT1BUSU9OUyA9IFtcbiAge1xuICAgIGlkOiBFWFBPUlRfREFUQV9UWVBFLkNTVixcbiAgICBsYWJlbDogRVhQT1JUX0RBVEFfVFlQRS5DU1YudG9Mb3dlckNhc2UoKSxcbiAgICBhdmFpbGFibGU6IHRydWVcbiAgfVxuICAvLyB7XG4gIC8vICAgaWQ6IEVYUE9SVF9EQVRBX1RZUEUuU0hBUEVGSUxFLFxuICAvLyAgIGxhYmVsOiAnc2hhcGVmaWxlJyxcbiAgLy8gICBhdmFpbGFibGU6IGZhbHNlXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBpZDogRVhQT1JUX0RBVEFfVFlQRS5KU09OLFxuICAvLyAgIGxhYmVsOiAnanNvbicsXG4gIC8vICAgYXZhaWxhYmxlOiBmYWxzZVxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgaWQ6IEVYUE9SVF9EQVRBX1RZUEUuR0VPSlNPTixcbiAgLy8gICBsYWJlbDogJ2dlb2pzb24nLFxuICAvLyAgIGF2YWlsYWJsZTogZmFsc2VcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIGlkOiBFWFBPUlRfREFUQV9UWVBFLlRPUE9KU09OLFxuICAvLyAgIGxhYmVsOiAndG9wb2pzb24nLFxuICAvLyAgIGF2YWlsYWJsZTogZmFsc2VcbiAgLy8gfVxuXTtcblxuLy8gRXhwb3J0IG1hcCB0eXBlc1xuZXhwb3J0IGNvbnN0IEVYUE9SVF9NQVBfRk9STUFUUyA9IGtleU1pcnJvcih7XG4gIEhUTUw6IG51bGwsXG4gIEpTT046IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgRVhQT1JUX0hUTUxfTUFQX01PREVTID0ga2V5TWlycm9yKHtcbiAgUkVBRDogbnVsbCxcbiAgRURJVDogbnVsbFxufSk7XG5cbi8vIEV4cG9ydCBtYXAgb3B0aW9uc1xuZXhwb3J0IGNvbnN0IEVYUE9SVF9NQVBfRk9STUFUX09QVElPTlMgPSBPYmplY3QuZW50cmllcyhFWFBPUlRfTUFQX0ZPUk1BVFMpLm1hcChlbnRyeSA9PiAoe1xuICBpZDogZW50cnlbMF0sXG4gIGxhYmVsOiBlbnRyeVsxXS50b0xvd2VyQ2FzZSgpLFxuICBhdmFpbGFibGU6IHRydWVcbn0pKTtcblxuZXhwb3J0IGNvbnN0IEVYUE9SVF9IVE1MX01BUF9NT0RFX09QVElPTlMgPSBPYmplY3QuZW50cmllcyhFWFBPUlRfSFRNTF9NQVBfTU9ERVMpLm1hcChlbnRyeSA9PiAoe1xuICBpZDogZW50cnlbMF0sXG4gIGxhYmVsOiBgbW9kYWwuZXhwb3J0TWFwLmh0bWwuJHtlbnRyeVsxXS50b0xvd2VyQ2FzZSgpfWAsXG4gIGF2YWlsYWJsZTogdHJ1ZSxcbiAgdXJsOiBnZXRIVE1MTWFwTW9kZVRpbGVVcmwoZW50cnlbMV0pXG59KSk7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1VVSURfQ09VTlQgPSA2O1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9OT1RJRklDQVRJT05fTUVTU0FHRSA9ICdNRVNTQUdFX05PVF9QUk9WSURFRCc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX05PVElGSUNBVElPTl9UWVBFUyA9IGtleU1pcnJvcih7XG4gIGluZm86IG51bGwsXG4gIGVycm9yOiBudWxsLFxuICB3YXJuaW5nOiBudWxsLFxuICBzdWNjZXNzOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyA9IGtleU1pcnJvcih7XG4gIGdsb2JhbDogbnVsbCxcbiAgZmlsZTogbnVsbFxufSk7XG5cbi8vIEFuaW1hdGlvblxuZXhwb3J0IGNvbnN0IEJBU0VfU1BFRUQgPSA2MDA7XG5leHBvcnQgY29uc3QgRlBTID0gNjA7XG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX1RZUEUgPSBrZXlNaXJyb3Ioe1xuICBpbnRlcnZhbDogbnVsbCxcbiAgY29udGludW91czogbnVsbFxufSk7XG5leHBvcnQgY29uc3QgREVGQVVMVF9USU1FX0ZPUk1BVCA9ICdNTS9ERC9ZWSBISDptbTpzc2EnO1xuZXhwb3J0IGNvbnN0IFNQRUVEX0NPTlRST0xfUkFOR0UgPSBbMCwgMTBdO1xuZXhwb3J0IGNvbnN0IFNQRUVEX0NPTlRST0xfU1RFUCA9IDAuMDAxO1xuXG4vLyBHZW9jb2RlclxuZXhwb3J0IGNvbnN0IEdFT0NPREVSX0RBVEFTRVRfTkFNRSA9ICdnZW9jb2Rlcl9kYXRhc2V0JztcbmV4cG9ydCBjb25zdCBHRU9DT0RFUl9MQVlFUl9JRCA9ICdnZW9jb2Rlcl9sYXllcic7XG5leHBvcnQgY29uc3QgR0VPQ09ERVJfR0VPX09GRlNFVCA9IDAuMDU7XG5leHBvcnQgY29uc3QgR0VPQ09ERVJfSUNPTl9DT0xPUiA9IFsyNTUsIDAsIDBdO1xuZXhwb3J0IGNvbnN0IEdFT0NPREVSX0lDT05fU0laRSA9IDgwO1xuXG4vLyBXZSBjb3VsZCB1c2UgZGlyZWN0bHkgcmVhY3QtbWFwLWdsLWRyYXcgRWRpdG9yTW9kZSBidXQgdGhpcyB3b3VsZFxuLy8gY3JlYXRlIGEgZGlyZWN0IGRlcGVuZGVuY3kgd2l0aCByZWFjdC1tYXAtZ2wtZHJhd1xuLy8gQ3JlYXRlZCB0aGlzIG1hcCB0byBiZSBpbmRlcGVuZGVudCBmcm9tIHJlYWN0LW1hcC1nbC1kcmF3XG5leHBvcnQgY29uc3QgRURJVE9SX01PREVTID0ge1xuICBSRUFEX09OTFk6IEVkaXRvck1vZGVzLlJFQURfT05MWSxcbiAgRFJBV19QT0xZR09OOiBFZGl0b3JNb2Rlcy5EUkFXX1BPTFlHT04sXG4gIERSQVdfUkVDVEFOR0xFOiBFZGl0b3JNb2Rlcy5EUkFXX1JFQ1RBTkdMRSxcbiAgRURJVDogRWRpdG9yTW9kZXMuRURJVF9WRVJURVhcbn07XG5cbmV4cG9ydCBjb25zdCBFRElUT1JfQVZBSUxBQkxFX0xBWUVSUyA9IFtcbiAgTEFZRVJfVFlQRVMucG9pbnQsXG4gIExBWUVSX1RZUEVTLmhleGFnb24sXG4gIExBWUVSX1RZUEVTLmFyYyxcbiAgTEFZRVJfVFlQRVMubGluZVxuXTtcbi8vIEdQVSBGaWx0ZXJpbmdcbi8qKlxuICogTWF4IG51bWJlciBvZiBmaWx0ZXIgdmFsdWUgYnVmZmVycyB0aGF0IGRlY2suZ2wgcHJvdmlkZXNcbiAqL1xuZXhwb3J0IGNvbnN0IE1BWF9HUFVfRklMVEVSUyA9IDQ7XG5leHBvcnQgY29uc3QgTUFQX1RIVU1CTkFJTF9ESU1FTlNJT04gPSB7XG4gIHdpZHRoOiAzMDAsXG4gIGhlaWdodDogMjAwXG59O1xuXG5leHBvcnQgY29uc3QgTUFQX0lORk9fQ0hBUkFDVEVSID0ge1xuICB0aXRsZTogMTAwLFxuICBkZXNjcmlwdGlvbjogMTAwXG59O1xuXG4vLyBMb2FkIGRhdGFcbmV4cG9ydCBjb25zdCBMT0FESU5HX01FVEhPRFMgPSBrZXlNaXJyb3Ioe1xuICB1cGxvYWQ6IG51bGwsXG4gIHN0b3JhZ2U6IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgREFUQVNFVF9GT1JNQVRTID0ga2V5TWlycm9yKHtcbiAgcm93OiBudWxsLFxuICBnZW9qc29uOiBudWxsLFxuICBjc3Y6IG51bGwsXG4gIGtlcGxlcmdsOiBudWxsXG59KTtcbiJdfQ==