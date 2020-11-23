"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _defaultSettings = require("../../constants/default-settings");

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
 * A wrapper component in modals contain a image preview of the map with cloud providers
 * It sets export image size based on provider thumbnail size
 * @component
 */
var ImageModalContainer =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ImageModalContainer, _Component);

  function ImageModalContainer() {
    (0, _classCallCheck2["default"])(this, ImageModalContainer);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ImageModalContainer).apply(this, arguments));
  }

  (0, _createClass2["default"])(ImageModalContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._updateThumbSize(true);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // set thumbnail size if provider changes
      if (this.props.currentProvider !== prevProps.currentProvider && this.props.currentProvider) {
        this._updateThumbSize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.onUpdateImageSetting({
        exporting: false
      });
    }
  }, {
    key: "_updateThumbSize",
    value: function _updateThumbSize(initialMount) {
      var _this = this;

      if (this.props.currentProvider && this.props.cloudProviders.length) {
        var provider = this.props.cloudProviders.find(function (p) {
          return p.name === _this.props.currentProvider;
        });

        if (provider && provider.thumbnail) {
          this.props.onUpdateImageSetting({
            mapW: (0, _lodash["default"])(provider, ['thumbnail', 'width']) || _defaultSettings.MAP_THUMBNAIL_DIMENSION.width,
            mapH: (0, _lodash["default"])(provider, ['thumbnail', 'height']) || _defaultSettings.MAP_THUMBNAIL_DIMENSION.height,
            ratio: _defaultSettings.EXPORT_IMG_RATIOS.CUSTOM,
            legend: false
          });
        }
      } else if (initialMount) {
        this.props.onUpdateImageSetting({
          mapW: _defaultSettings.MAP_THUMBNAIL_DIMENSION.width,
          mapH: _defaultSettings.MAP_THUMBNAIL_DIMENSION.height,
          ratio: _defaultSettings.EXPORT_IMG_RATIOS.CUSTOM
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react["default"].Fragment, null, this.props.children);
    }
  }]);
  return ImageModalContainer;
}(_react.Component);

exports["default"] = ImageModalContainer;
(0, _defineProperty2["default"])(ImageModalContainer, "propTypes", {
  onUpdateImageSetting: _propTypes["default"].func.isRequired,
  cloudProviders: _propTypes["default"].arrayOf(_propTypes["default"].object),
  currentProvider: _propTypes["default"].string
});
(0, _defineProperty2["default"])(ImageModalContainer, "defaultProps", {
  cloudProviders: [],
  currentProvider: null
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9pbWFnZS1tb2RhbC1jb250YWluZXIuanMiXSwibmFtZXMiOlsiSW1hZ2VNb2RhbENvbnRhaW5lciIsIl91cGRhdGVUaHVtYlNpemUiLCJwcmV2UHJvcHMiLCJwcm9wcyIsImN1cnJlbnRQcm92aWRlciIsIm9uVXBkYXRlSW1hZ2VTZXR0aW5nIiwiZXhwb3J0aW5nIiwiaW5pdGlhbE1vdW50IiwiY2xvdWRQcm92aWRlcnMiLCJsZW5ndGgiLCJwcm92aWRlciIsImZpbmQiLCJwIiwibmFtZSIsInRodW1ibmFpbCIsIm1hcFciLCJNQVBfVEhVTUJOQUlMX0RJTUVOU0lPTiIsIndpZHRoIiwibWFwSCIsImhlaWdodCIsInJhdGlvIiwiRVhQT1JUX0lNR19SQVRJT1MiLCJDVVNUT00iLCJsZWdlbmQiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm9iamVjdCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFBOzs7OztJQUtxQkEsbUI7Ozs7Ozs7Ozs7Ozt3Q0FZQztBQUNsQixXQUFLQyxnQkFBTCxDQUFzQixJQUF0QjtBQUNEOzs7dUNBRWtCQyxTLEVBQVc7QUFDNUI7QUFDQSxVQUFJLEtBQUtDLEtBQUwsQ0FBV0MsZUFBWCxLQUErQkYsU0FBUyxDQUFDRSxlQUF6QyxJQUE0RCxLQUFLRCxLQUFMLENBQVdDLGVBQTNFLEVBQTRGO0FBQzFGLGFBQUtILGdCQUFMO0FBQ0Q7QUFDRjs7OzJDQUVzQjtBQUNyQixXQUFLRSxLQUFMLENBQVdFLG9CQUFYLENBQWdDO0FBQUNDLFFBQUFBLFNBQVMsRUFBRTtBQUFaLE9BQWhDO0FBQ0Q7OztxQ0FFZ0JDLFksRUFBYztBQUFBOztBQUM3QixVQUFJLEtBQUtKLEtBQUwsQ0FBV0MsZUFBWCxJQUE4QixLQUFLRCxLQUFMLENBQVdLLGNBQVgsQ0FBMEJDLE1BQTVELEVBQW9FO0FBQ2xFLFlBQU1DLFFBQVEsR0FBRyxLQUFLUCxLQUFMLENBQVdLLGNBQVgsQ0FBMEJHLElBQTFCLENBQStCLFVBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxDQUFDQyxJQUFGLEtBQVcsS0FBSSxDQUFDVixLQUFMLENBQVdDLGVBQTFCO0FBQUEsU0FBaEMsQ0FBakI7O0FBRUEsWUFBSU0sUUFBUSxJQUFJQSxRQUFRLENBQUNJLFNBQXpCLEVBQW9DO0FBQ2xDLGVBQUtYLEtBQUwsQ0FBV0Usb0JBQVgsQ0FBZ0M7QUFDOUJVLFlBQUFBLElBQUksRUFBRSx3QkFBSUwsUUFBSixFQUFjLENBQUMsV0FBRCxFQUFjLE9BQWQsQ0FBZCxLQUF5Q00seUNBQXdCQyxLQUR6QztBQUU5QkMsWUFBQUEsSUFBSSxFQUFFLHdCQUFJUixRQUFKLEVBQWMsQ0FBQyxXQUFELEVBQWMsUUFBZCxDQUFkLEtBQTBDTSx5Q0FBd0JHLE1BRjFDO0FBRzlCQyxZQUFBQSxLQUFLLEVBQUVDLG1DQUFrQkMsTUFISztBQUk5QkMsWUFBQUEsTUFBTSxFQUFFO0FBSnNCLFdBQWhDO0FBTUQ7QUFDRixPQVhELE1BV08sSUFBSWhCLFlBQUosRUFBa0I7QUFDdkIsYUFBS0osS0FBTCxDQUFXRSxvQkFBWCxDQUFnQztBQUM5QlUsVUFBQUEsSUFBSSxFQUFFQyx5Q0FBd0JDLEtBREE7QUFFOUJDLFVBQUFBLElBQUksRUFBRUYseUNBQXdCRyxNQUZBO0FBRzlCQyxVQUFBQSxLQUFLLEVBQUVDLG1DQUFrQkM7QUFISyxTQUFoQztBQUtEO0FBQ0Y7Ozs2QkFFUTtBQUNQLGFBQU8sa0VBQUcsS0FBS25CLEtBQUwsQ0FBV3FCLFFBQWQsQ0FBUDtBQUNEOzs7RUFsRDhDQyxnQjs7O2lDQUE1QnpCLG1CLGVBQ0E7QUFDakJLLEVBQUFBLG9CQUFvQixFQUFFcUIsc0JBQVVDLElBQVYsQ0FBZUMsVUFEcEI7QUFFakJwQixFQUFBQSxjQUFjLEVBQUVrQixzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVJLE1BQTVCLENBRkM7QUFHakIxQixFQUFBQSxlQUFlLEVBQUVzQixzQkFBVUs7QUFIVixDO2lDQURBL0IsbUIsa0JBT0c7QUFDcEJRLEVBQUFBLGNBQWMsRUFBRSxFQURJO0FBRXBCSixFQUFBQSxlQUFlLEVBQUU7QUFGRyxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcblxuaW1wb3J0IHtNQVBfVEhVTUJOQUlMX0RJTUVOU0lPTiwgRVhQT1JUX0lNR19SQVRJT1N9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuLyoqXG4gKiBBIHdyYXBwZXIgY29tcG9uZW50IGluIG1vZGFscyBjb250YWluIGEgaW1hZ2UgcHJldmlldyBvZiB0aGUgbWFwIHdpdGggY2xvdWQgcHJvdmlkZXJzXG4gKiBJdCBzZXRzIGV4cG9ydCBpbWFnZSBzaXplIGJhc2VkIG9uIHByb3ZpZGVyIHRodW1ibmFpbCBzaXplXG4gKiBAY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTW9kYWxDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNsb3VkUHJvdmlkZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICBjdXJyZW50UHJvdmlkZXI6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNsb3VkUHJvdmlkZXJzOiBbXSxcbiAgICBjdXJyZW50UHJvdmlkZXI6IG51bGxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl91cGRhdGVUaHVtYlNpemUodHJ1ZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgLy8gc2V0IHRodW1ibmFpbCBzaXplIGlmIHByb3ZpZGVyIGNoYW5nZXNcbiAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50UHJvdmlkZXIgIT09IHByZXZQcm9wcy5jdXJyZW50UHJvdmlkZXIgJiYgdGhpcy5wcm9wcy5jdXJyZW50UHJvdmlkZXIpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVRodW1iU2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25VcGRhdGVJbWFnZVNldHRpbmcoe2V4cG9ydGluZzogZmFsc2V9KTtcbiAgfVxuXG4gIF91cGRhdGVUaHVtYlNpemUoaW5pdGlhbE1vdW50KSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY3VycmVudFByb3ZpZGVyICYmIHRoaXMucHJvcHMuY2xvdWRQcm92aWRlcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IHRoaXMucHJvcHMuY2xvdWRQcm92aWRlcnMuZmluZChwID0+IHAubmFtZSA9PT0gdGhpcy5wcm9wcy5jdXJyZW50UHJvdmlkZXIpO1xuXG4gICAgICBpZiAocHJvdmlkZXIgJiYgcHJvdmlkZXIudGh1bWJuYWlsKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25VcGRhdGVJbWFnZVNldHRpbmcoe1xuICAgICAgICAgIG1hcFc6IGdldChwcm92aWRlciwgWyd0aHVtYm5haWwnLCAnd2lkdGgnXSkgfHwgTUFQX1RIVU1CTkFJTF9ESU1FTlNJT04ud2lkdGgsXG4gICAgICAgICAgbWFwSDogZ2V0KHByb3ZpZGVyLCBbJ3RodW1ibmFpbCcsICdoZWlnaHQnXSkgfHwgTUFQX1RIVU1CTkFJTF9ESU1FTlNJT04uaGVpZ2h0LFxuICAgICAgICAgIHJhdGlvOiBFWFBPUlRfSU1HX1JBVElPUy5DVVNUT00sXG4gICAgICAgICAgbGVnZW5kOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGluaXRpYWxNb3VudCkge1xuICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZUltYWdlU2V0dGluZyh7XG4gICAgICAgIG1hcFc6IE1BUF9USFVNQk5BSUxfRElNRU5TSU9OLndpZHRoLFxuICAgICAgICBtYXBIOiBNQVBfVEhVTUJOQUlMX0RJTUVOU0lPTi5oZWlnaHQsXG4gICAgICAgIHJhdGlvOiBFWFBPUlRfSU1HX1JBVElPUy5DVVNUT01cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPD57dGhpcy5wcm9wcy5jaGlsZHJlbn08Lz47XG4gIH1cbn1cbiJdfQ==