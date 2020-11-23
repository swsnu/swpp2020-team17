"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerFactory = ContainerFactory;
exports.injectComponents = injectComponents;
exports["default"] = exports.appInjector = exports.ERROR_MSG = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _lodash = _interopRequireDefault(require("lodash.memoize"));

var _window = require("global/window");

var _injector = require("./injector");

var _keplerGl = _interopRequireDefault(require("./kepler-gl"));

var _actionWrapper = require("../actions/action-wrapper");

var _identityActions = require("../actions/identity-actions");

var _dataUtils = require("../utils/data-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ERROR_MSG = {
  noState: "kepler.gl state does not exist. " + "You might forget to mount keplerGlReducer in your root reducer." + "If it is not mounted as state.keplerGl by default, you need to provide getState as a prop"
};
exports.ERROR_MSG = ERROR_MSG;
ContainerFactory.deps = [_keplerGl["default"]];

function ContainerFactory(KeplerGl) {
  /** @lends KeplerGl */

  /**
    * Main Kepler.gl Component
    * @param {Object} props
    *
    * @param {string} props.id - _required_
    *
    * - Default: `map`
    * The id of this KeplerGl instance. `id` is required if you have multiple
    * KeplerGl instances in your app. It defines the prop name of the KeplerGl state that is
    * stored in the KeplerGl reducer. For example, the state of the KeplerGl component with id `foo` is
    * stored in `state.keplerGl.foo`.
    *
    * In case you create multiple kepler.gl instances using the same id, the kepler.gl state defined by the entry will be
    * overridden by the latest instance and reset to a blank state.
    * @param {string} props.mapboxApiAccessToken - _required_
    * @param {string} props.mapboxApiUrl - _optional_
    * @param {Boolean} props.mapStylesReplaceDefault - _optional_
    * @param {object} props.initialUiState - _optional_
     * You can create a free account at [www.mapbox.com](www.mapbox.com) and create a token at
    * [www.mapbox.com/account/access-tokens](www.mapbox.com/account/access-tokens)
    *
    *
    * @param {Number} props.width - _required_ Width of the KeplerGl UI.
    * @public
   */
  var Container =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(Container, _Component);

    // default id and address if not provided
    function Container(props, ctx) {
      var _this;

      (0, _classCallCheck2["default"])(this, Container);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Container).call(this, props, ctx));
      _this.getSelector = (0, _lodash["default"])(function (id, getState) {
        return function (state) {
          if (!getState(state)) {
            // log error
            _window.console.error(ERROR_MSG.noState);

            return null;
          }

          return getState(state)[id];
        };
      });
      _this.getDispatch = (0, _lodash["default"])(function (id, dispatch) {
        return (0, _actionWrapper.forwardTo)(id, dispatch);
      });
      return _this;
    }

    (0, _createClass2["default"])(Container, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props = this.props,
            id = _this$props.id,
            mint = _this$props.mint,
            mapboxApiAccessToken = _this$props.mapboxApiAccessToken,
            mapboxApiUrl = _this$props.mapboxApiUrl,
            mapStylesReplaceDefault = _this$props.mapStylesReplaceDefault,
            initialUiState = _this$props.initialUiState; // add a new entry to reducer

        this.props.dispatch((0, _identityActions.registerEntry)({
          id: id,
          mint: mint,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          mapStylesReplaceDefault: mapStylesReplaceDefault,
          initialUiState: initialUiState
        }));
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        // check if id has changed, if true, copy state over
        if ((0, _dataUtils.notNullorUndefined)(prevProps.id) && (0, _dataUtils.notNullorUndefined)(this.props.id) && prevProps.id !== this.props.id) {
          this.props.dispatch((0, _identityActions.renameEntry)(prevProps.id, this.props.id));
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.props.mint !== false) {
          // delete entry in reducer
          this.props.dispatch((0, _identityActions.deleteEntry)(this.props.id));
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            id = _this$props2.id,
            getState = _this$props2.getState,
            dispatch = _this$props2.dispatch,
            state = _this$props2.state;
        var selector = this.getSelector(id, getState);

        if (!selector || !selector(state)) {
          // instance state hasn't been mounted yet
          return _react["default"].createElement("div", null);
        }

        return _react["default"].createElement(KeplerGl, (0, _extends2["default"])({}, this.props, {
          id: id,
          selector: selector,
          dispatch: this.getDispatch(id, dispatch)
        }));
      }
    }]);
    return Container;
  }(_react.Component);

  (0, _defineProperty2["default"])(Container, "defaultProps", {
    id: 'map',
    getState: function getState(state) {
      return state.keplerGl;
    },
    mint: true
  });

  var mapStateToProps = function mapStateToProps(state, props) {
    return _objectSpread({
      state: state
    }, props);
  };

  var dispatchToProps = function dispatchToProps(dispatch) {
    return {
      dispatch: dispatch
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps, dispatchToProps)(Container);
} // entryPoint


function flattenDeps(allDeps, factory) {
  var addToDeps = allDeps.concat([factory]);
  return Array.isArray(factory.deps) && factory.deps.length ? factory.deps.reduce(function (accu, dep) {
    return flattenDeps(accu, dep);
  }, addToDeps) : addToDeps;
}

var allDependencies = flattenDeps([], ContainerFactory); // provide all dependencies to appInjector

var appInjector = allDependencies.reduce(function (inj, factory) {
  return inj.provide(factory, factory);
}, (0, _injector.injector)()); // Helper to inject custom components and return kepler.gl container

exports.appInjector = appInjector;

function injectComponents() {
  var recipes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return recipes.reduce(function (inj, recipe) {
    var _inj;

    if (!(0, _injector.typeCheckRecipe)(recipe)) {
      return inj;
    } // collect dependencies of custom factories, if there is any.
    // Add them to the injector


    var customDependencies = flattenDeps([], recipe[1]);
    inj = customDependencies.reduce(function (ij, factory) {
      return ij.provide(factory, factory);
    }, inj);
    return (_inj = inj).provide.apply(_inj, (0, _toConsumableArray2["default"])(recipe));
  }, appInjector).get(ContainerFactory);
}

var InjectedContainer = appInjector.get(ContainerFactory);
var _default = InjectedContainer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJFUlJPUl9NU0ciLCJub1N0YXRlIiwiQ29udGFpbmVyRmFjdG9yeSIsImRlcHMiLCJLZXBsZXJHbEZhY3RvcnkiLCJLZXBsZXJHbCIsIkNvbnRhaW5lciIsInByb3BzIiwiY3R4IiwiZ2V0U2VsZWN0b3IiLCJpZCIsImdldFN0YXRlIiwic3RhdGUiLCJDb25zb2xlIiwiZXJyb3IiLCJnZXREaXNwYXRjaCIsImRpc3BhdGNoIiwibWludCIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwibWFwYm94QXBpVXJsIiwibWFwU3R5bGVzUmVwbGFjZURlZmF1bHQiLCJpbml0aWFsVWlTdGF0ZSIsInByZXZQcm9wcyIsInNlbGVjdG9yIiwiQ29tcG9uZW50Iiwia2VwbGVyR2wiLCJtYXBTdGF0ZVRvUHJvcHMiLCJkaXNwYXRjaFRvUHJvcHMiLCJmbGF0dGVuRGVwcyIsImFsbERlcHMiLCJmYWN0b3J5IiwiYWRkVG9EZXBzIiwiY29uY2F0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwicmVkdWNlIiwiYWNjdSIsImRlcCIsImFsbERlcGVuZGVuY2llcyIsImFwcEluamVjdG9yIiwiaW5qIiwicHJvdmlkZSIsImluamVjdENvbXBvbmVudHMiLCJyZWNpcGVzIiwicmVjaXBlIiwiY3VzdG9tRGVwZW5kZW5jaWVzIiwiaWoiLCJnZXQiLCJJbmplY3RlZENvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLFNBQVMsR0FBRztBQUN2QkMsRUFBQUEsT0FBTyxFQUNMO0FBRnFCLENBQWxCOztBQU9QQyxnQkFBZ0IsQ0FBQ0MsSUFBakIsR0FBd0IsQ0FBQ0Msb0JBQUQsQ0FBeEI7O0FBRU8sU0FBU0YsZ0JBQVQsQ0FBMEJHLFFB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QWdCOUMsZ0JBQWhCLENBQTFCO2VBRWUrQyxpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdsb2Rhc2gubWVtb2l6ZSc7XG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQge2luamVjdG9yLCB0eXBlQ2hlY2tSZWNpcGV9IGZyb20gJy4vaW5qZWN0b3InO1xuaW1wb3J0IEtlcGxlckdsRmFjdG9yeSBmcm9tICcuL2tlcGxlci1nbCc7XG5pbXBvcnQge2ZvcndhcmRUb30gZnJvbSAnYWN0aW9ucy9hY3Rpb24td3JhcHBlcic7XG5cbmltcG9ydCB7cmVnaXN0ZXJFbnRyeSwgZGVsZXRlRW50cnksIHJlbmFtZUVudHJ5fSBmcm9tICdhY3Rpb25zL2lkZW50aXR5LWFjdGlvbnMnO1xuaW1wb3J0IHtub3ROdWxsb3JVbmRlZmluZWR9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgRVJST1JfTVNHID0ge1xuICBub1N0YXRlOlxuICAgIGBrZXBsZXIuZ2wgc3RhdGUgZG9lcyBub3QgZXhpc3QuIGAgK1xuICAgIGBZb3UgbWlnaHQgZm9yZ2V0IHRvIG1vdW50IGtlcGxlckdsUmVkdWNlciBpbiB5b3VyIHJvb3QgcmVkdWNlci5gICtcbiAgICBgSWYgaXQgaXMgbm90IG1vdW50ZWQgYXMgc3RhdGUua2VwbGVyR2wgYnkgZGVmYXVsdCwgeW91IG5lZWQgdG8gcHJvdmlkZSBnZXRTdGF0ZSBhcyBhIHByb3BgXG59O1xuXG5Db250YWluZXJGYWN0b3J5LmRlcHMgPSBbS2VwbGVyR2xGYWN0b3J5XTtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lckZhY3RvcnkoS2VwbGVyR2wpIHtcbiAgLyoqIEBsZW5kcyBLZXBsZXJHbCAqL1xuICAvKipcbiAgICAqIE1haW4gS2VwbGVyLmdsIENvbXBvbmVudFxuICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmlkIC0gX3JlcXVpcmVkX1xuICAgICpcbiAgICAqIC0gRGVmYXVsdDogYG1hcGBcbiAgICAqIFRoZSBpZCBvZiB0aGlzIEtlcGxlckdsIGluc3RhbmNlLiBgaWRgIGlzIHJlcXVpcmVkIGlmIHlvdSBoYXZlIG11bHRpcGxlXG4gICAgKiBLZXBsZXJHbCBpbnN0YW5jZXMgaW4geW91ciBhcHAuIEl0IGRlZmluZXMgdGhlIHByb3AgbmFtZSBvZiB0aGUgS2VwbGVyR2wgc3RhdGUgdGhhdCBpc1xuICAgICogc3RvcmVkIGluIHRoZSBLZXBsZXJHbCByZWR1Y2VyLiBGb3IgZXhhbXBsZSwgdGhlIHN0YXRlIG9mIHRoZSBLZXBsZXJHbCBjb21wb25lbnQgd2l0aCBpZCBgZm9vYCBpc1xuICAgICogc3RvcmVkIGluIGBzdGF0ZS5rZXBsZXJHbC5mb29gLlxuICAgICpcbiAgICAqIEluIGNhc2UgeW91IGNyZWF0ZSBtdWx0aXBsZSBrZXBsZXIuZ2wgaW5zdGFuY2VzIHVzaW5nIHRoZSBzYW1lIGlkLCB0aGUga2VwbGVyLmdsIHN0YXRlIGRlZmluZWQgYnkgdGhlIGVudHJ5IHdpbGwgYmVcbiAgICAqIG92ZXJyaWRkZW4gYnkgdGhlIGxhdGVzdCBpbnN0YW5jZSBhbmQgcmVzZXQgdG8gYSBibGFuayBzdGF0ZS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5tYXBib3hBcGlBY2Nlc3NUb2tlbiAtIF9yZXF1aXJlZF9cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5tYXBib3hBcGlVcmwgLSBfb3B0aW9uYWxfXG4gICAgKiBAcGFyYW0ge0Jvb2xlYW59IHByb3BzLm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IC0gX29wdGlvbmFsX1xuICAgICogQHBhcmFtIHtvYmplY3R9IHByb3BzLmluaXRpYWxVaVN0YXRlIC0gX29wdGlvbmFsX1xuXG4gICAgKiBZb3UgY2FuIGNyZWF0ZSBhIGZyZWUgYWNjb3VudCBhdCBbd3d3Lm1hcGJveC5jb21dKHd3dy5tYXBib3guY29tKSBhbmQgY3JlYXRlIGEgdG9rZW4gYXRcbiAgICAqIFt3d3cubWFwYm94LmNvbS9hY2NvdW50L2FjY2Vzcy10b2tlbnNdKHd3dy5tYXBib3guY29tL2FjY291bnQvYWNjZXNzLXRva2VucylcbiAgICAqXG4gICAgKlxuICAgICogQHBhcmFtIHtOdW1iZXJ9IHByb3BzLndpZHRoIC0gX3JlcXVpcmVkXyBXaWR0aCBvZiB0aGUgS2VwbGVyR2wgVUkuXG4gICAgKiBAcHVibGljXG4gICAqL1xuICBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8vIGRlZmF1bHQgaWQgYW5kIGFkZHJlc3MgaWYgbm90IHByb3ZpZGVkXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGlkOiAnbWFwJyxcbiAgICAgIGdldFN0YXRlOiBzdGF0ZSA9PiBzdGF0ZS5rZXBsZXJHbCxcbiAgICAgIG1pbnQ6IHRydWVcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGN0eCkge1xuICAgICAgc3VwZXIocHJvcHMsIGN0eCk7XG5cbiAgICAgIHRoaXMuZ2V0U2VsZWN0b3IgPSBtZW1vaXplKChpZCwgZ2V0U3RhdGUpID0+IHN0YXRlID0+IHtcbiAgICAgICAgaWYgKCFnZXRTdGF0ZShzdGF0ZSkpIHtcbiAgICAgICAgICAvLyBsb2cgZXJyb3JcbiAgICAgICAgICBDb25zb2xlLmVycm9yKEVSUk9SX01TRy5ub1N0YXRlKTtcblxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRTdGF0ZShzdGF0ZSlbaWRdO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmdldERpc3BhdGNoID0gbWVtb2l6ZSgoaWQsIGRpc3BhdGNoKSA9PiBmb3J3YXJkVG8oaWQsIGRpc3BhdGNoKSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlkLFxuICAgICAgICBtaW50LFxuICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcbiAgICAgICAgbWFwYm94QXBpVXJsLFxuICAgICAgICBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdCxcbiAgICAgICAgaW5pdGlhbFVpU3RhdGVcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAvLyBhZGQgYSBuZXcgZW50cnkgdG8gcmVkdWNlclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgICAgcmVnaXN0ZXJFbnRyeSh7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgbWludCxcbiAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcbiAgICAgICAgICBtYXBib3hBcGlVcmwsXG4gICAgICAgICAgbWFwU3R5bGVzUmVwbGFjZURlZmF1bHQsXG4gICAgICAgICAgaW5pdGlhbFVpU3RhdGVcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgLy8gY2hlY2sgaWYgaWQgaGFzIGNoYW5nZWQsIGlmIHRydWUsIGNvcHkgc3RhdGUgb3ZlclxuICAgICAgaWYgKFxuICAgICAgICBub3ROdWxsb3JVbmRlZmluZWQocHJldlByb3BzLmlkKSAmJlxuICAgICAgICBub3ROdWxsb3JVbmRlZmluZWQodGhpcy5wcm9wcy5pZCkgJiZcbiAgICAgICAgcHJldlByb3BzLmlkICE9PSB0aGlzLnByb3BzLmlkXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZW5hbWVFbnRyeShwcmV2UHJvcHMuaWQsIHRoaXMucHJvcHMuaWQpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm1pbnQgIT09IGZhbHNlKSB7XG4gICAgICAgIC8vIGRlbGV0ZSBlbnRyeSBpbiByZWR1Y2VyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZGVsZXRlRW50cnkodGhpcy5wcm9wcy5pZCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtpZCwgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdGF0ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmdldFNlbGVjdG9yKGlkLCBnZXRTdGF0ZSk7XG5cbiAgICAgIGlmICghc2VsZWN0b3IgfHwgIXNlbGVjdG9yKHN0YXRlKSkge1xuICAgICAgICAvLyBpbnN0YW5jZSBzdGF0ZSBoYXNuJ3QgYmVlbiBtb3VudGVkIHlldFxuICAgICAgICByZXR1cm4gPGRpdiAvPjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEtlcGxlckdsXG4gICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHNlbGVjdG9yPXtzZWxlY3Rvcn1cbiAgICAgICAgICBkaXNwYXRjaD17dGhpcy5nZXREaXNwYXRjaChpZCwgZGlzcGF0Y2gpfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe3N0YXRlLCAuLi5wcm9wc30pO1xuICBjb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe2Rpc3BhdGNofSk7XG4gIHJldHVybiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShDb250YWluZXIpO1xufVxuXG4vLyBlbnRyeVBvaW50XG5mdW5jdGlvbiBmbGF0dGVuRGVwcyhhbGxEZXBzLCBmYWN0b3J5KSB7XG4gIGNvbnN0IGFkZFRvRGVwcyA9IGFsbERlcHMuY29uY2F0KFtmYWN0b3J5XSk7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGZhY3RvcnkuZGVwcykgJiYgZmFjdG9yeS5kZXBzLmxlbmd0aFxuICAgID8gZmFjdG9yeS5kZXBzLnJlZHVjZSgoYWNjdSwgZGVwKSA9PiBmbGF0dGVuRGVwcyhhY2N1LCBkZXApLCBhZGRUb0RlcHMpXG4gICAgOiBhZGRUb0RlcHM7XG59XG5cbmNvbnN0IGFsbERlcGVuZGVuY2llcyA9IGZsYXR0ZW5EZXBzKFtdLCBDb250YWluZXJGYWN0b3J5KTtcblxuLy8gcHJvdmlkZSBhbGwgZGVwZW5kZW5jaWVzIHRvIGFwcEluamVjdG9yXG5leHBvcnQgY29uc3QgYXBwSW5qZWN0b3IgPSBhbGxEZXBlbmRlbmNpZXMucmVkdWNlKFxuICAoaW5qLCBmYWN0b3J5KSA9PiBpbmoucHJvdmlkZShmYWN0b3J5LCBmYWN0b3J5KSxcbiAgaW5qZWN0b3IoKVxuKTtcblxuLy8gSGVscGVyIHRvIGluamVjdCBjdXN0b20gY29tcG9uZW50cyBhbmQgcmV0dXJuIGtlcGxlci5nbCBjb250YWluZXJcbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RDb21wb25lbnRzKHJlY2lwZXMgPSBbXSkge1xuICByZXR1cm4gcmVjaXBlc1xuICAgIC5yZWR1Y2UoKGluaiwgcmVjaXBlKSA9PiB7XG4gICAgICBpZiAoIXR5cGVDaGVja1JlY2lwZShyZWNpcGUpKSB7XG4gICAgICAgIHJldHVybiBpbmo7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbGxlY3QgZGVwZW5kZW5jaWVzIG9mIGN1c3RvbSBmYWN0b3JpZXMsIGlmIHRoZXJlIGlzIGFueS5cbiAgICAgIC8vIEFkZCB0aGVtIHRvIHRoZSBpbmplY3RvclxuICAgICAgY29uc3QgY3VzdG9tRGVwZW5kZW5jaWVzID0gZmxhdHRlbkRlcHMoW10sIHJlY2lwZVsxXSk7XG4gICAgICBpbmogPSBjdXN0b21EZXBlbmRlbmNpZXMucmVkdWNlKChpaiwgZmFjdG9yeSkgPT4gaWoucHJvdmlkZShmYWN0b3J5LCBmYWN0b3J5KSwgaW5qKTtcblxuICAgICAgcmV0dXJuIGluai5wcm92aWRlKC4uLnJlY2lwZSk7XG4gICAgfSwgYXBwSW5qZWN0b3IpXG4gICAgLmdldChDb250YWluZXJGYWN0b3J5KTtcbn1cblxuY29uc3QgSW5qZWN0ZWRDb250YWluZXIgPSBhcHBJbmplY3Rvci5nZXQoQ29udGFpbmVyRmFjdG9yeSk7XG5cbmV4cG9ydCBkZWZhdWx0IEluamVjdGVkQ29udGFpbmVyO1xuIl19