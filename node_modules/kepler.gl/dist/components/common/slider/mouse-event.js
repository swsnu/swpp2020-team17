"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _document = _interopRequireDefault(require("global/document"));

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
function nope() {}

var MouseEventHandler =
/*#__PURE__*/
function () {
  function MouseEventHandler(_ref) {
    var _this = this;

    var _ref$vertical = _ref.vertical,
        vertical = _ref$vertical === void 0 ? false : _ref$vertical,
        _ref$valueListener = _ref.valueListener,
        valueListener = _ref$valueListener === void 0 ? nope : _ref$valueListener,
        _ref$toggleMouseOver = _ref.toggleMouseOver,
        toggleMouseOver = _ref$toggleMouseOver === void 0 ? nope : _ref$toggleMouseOver,
        track = _ref.track,
        _ref$setAnchor = _ref.setAnchor,
        setAnchor = _ref$setAnchor === void 0 ? null : _ref$setAnchor;
    (0, _classCallCheck2["default"])(this, MouseEventHandler);
    (0, _defineProperty2["default"])(this, "handleMouseDown", function (e) {
      _document["default"].addEventListener('mouseup', _this._mouseup);

      _document["default"].addEventListener('mousemove', _this._mousemove);

      if (_this._setAnchor) {
        var pos = _this._getMousePos(e);

        _this._setAnchor(_this._getDistanceToTrack(pos));
      }

      _this._toggleMouseOver();
    });
    (0, _defineProperty2["default"])(this, "_mouseup", function () {
      _document["default"].removeEventListener('mouseup', _this._mouseup);

      _document["default"].removeEventListener('mousemove', _this._mousemove);

      _this._toggleMouseOver();
    });
    (0, _defineProperty2["default"])(this, "_mousemove", function (e) {
      e.preventDefault();

      var pos = _this._getMousePos(e);

      _this._valueListener(_this._getDistanceToTrack(pos));
    });
    (0, _defineProperty2["default"])(this, "handleTouchStart", function (e) {
      // TODO: fix touch event
      _document["default"].addEventListener('touchend', _this._touchend);

      _document["default"].addEventListener('touchmove', _this._touchmove);

      if (_this._setAnchor) {
        var pos = _this._getTouchPosition(e);

        _this._setAnchor(_this._getDistanceToTrack(pos));
      }

      _this._toggleMouseOver();
    });
    (0, _defineProperty2["default"])(this, "_touchmove", function (e) {
      // TODO: touch not tested
      var pos = _this._getTouchPosition(e);

      _this._valueListener(_this._getDistanceToTrack(pos));
    });
    (0, _defineProperty2["default"])(this, "_touchend", function () {
      _document["default"].removeEventListener('touchend', _this._touchend);

      _document["default"].removeEventListener('touchmove', _this._touchmove);

      _this._toggleMouseOver();
    });
    this._vertical = vertical;
    this._valueListener = valueListener;
    this._toggleMouseOver = toggleMouseOver;
    this._track = track;
    this._setAnchor = setAnchor;
  }

  (0, _createClass2["default"])(MouseEventHandler, [{
    key: "_getMousePos",
    value: function _getMousePos(e) {
      return this._vertical ? e.clientY : e.clientX;
    }
  }, {
    key: "_getTouchPosition",
    value: function _getTouchPosition(e) {
      return this._vertical ? e.touches[0].clientY : e.touches[0].clientX;
    }
  }, {
    key: "_getDistanceToTrack",
    value: function _getDistanceToTrack(pos) {
      var trackRect = this._track.current.getBoundingClientRect();

      return pos - (this._vertical ? trackRect.bottom : trackRect.left);
    }
  }]);
  return MouseEventHandler;
}();

exports["default"] = MouseEventHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvbW91c2UtZXZlbnQuanMiXSwibmFtZXMiOlsibm9wZSIsIk1vdXNlRXZlbnRIYW5kbGVyIiwidmVydGljYWwiLCJ2YWx1ZUxpc3RlbmVyIiwidG9nZ2xlTW91c2VPdmVyIiwidHJhY2siLCJzZXRBbmNob3IiLCJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX21vdXNldXAiLCJfbW91c2Vtb3ZlIiwiX3NldEFuY2hvciIsInBvcyIsIl9nZXRNb3VzZVBvcyIsIl9nZXREaXN0YW5jZVRvVHJhY2siLCJfdG9nZ2xlTW91c2VPdmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwiX3ZhbHVlTGlzdGVuZXIiLCJfdG91Y2hlbmQiLCJfdG91Y2htb3ZlIiwiX2dldFRvdWNoUG9zaXRpb24iLCJfdmVydGljYWwiLCJfdHJhY2siLCJjbGllbnRZIiwiY2xpZW50WCIsInRvdWNoZXMiLCJ0cmFja1JlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tIiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQXBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLFNBQVNBLElBQVQsR0FBdUIsQ0FBRTs7SUFFSkMsaUI7OztBQUNuQixtQ0FNRztBQUFBOztBQUFBLDZCQUxEQyxRQUtDO0FBQUEsUUFMREEsUUFLQyw4QkFMVSxLQUtWO0FBQUEsa0NBSkRDLGFBSUM7QUFBQSxRQUpEQSxhQUlDLG1DQUplSCxJQUlmO0FBQUEsb0NBSERJLGVBR0M7QUFBQSxRQUhEQSxlQUdDLHFDQUhpQkosSUFHakI7QUFBQSxRQUZESyxLQUVDLFFBRkRBLEtBRUM7QUFBQSw4QkFEREMsU0FDQztB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Ozs7d0NBUW1CYixHLEVBQUs7QUFDdkIsVUFBTWUsU0FBUyxHQUFHLEtBQUtKLE1BQUwsQ0FBWUssT0FBWixDQUFvQkMscUJBQXBCLEVBQWxCOztBQUNBLGFBQU9qQixHQUFHLElBQUksS0FBS1UsU0FBTCxHQUFpQkssU0FBUyxDQUFDRyxNQUEzQixHQUFvQ0gsU0FBUyxDQUFDSSxJQUFsRCxDQUFWO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgZG9jdW1lbnQgZnJvbSAnZ2xvYmFsL2RvY3VtZW50JztcblxuZnVuY3Rpb24gbm9wZSguLi5hcmdzKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZUV2ZW50SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICB2ZXJ0aWNhbCA9IGZhbHNlLFxuICAgIHZhbHVlTGlzdGVuZXIgPSBub3BlLFxuICAgIHRvZ2dsZU1vdXNlT3ZlciA9IG5vcGUsXG4gICAgdHJhY2ssXG4gICAgc2V0QW5jaG9yID0gbnVsbFxuICB9KSB7XG4gICAgdGhpcy5fdmVydGljYWwgPSB2ZXJ0aWNhbDtcbiAgICB0aGlzLl92YWx1ZUxpc3RlbmVyID0gdmFsdWVMaXN0ZW5lcjtcbiAgICB0aGlzLl90b2dnbGVNb3VzZU92ZXIgPSB0b2dnbGVNb3VzZU92ZXI7XG4gICAgdGhpcy5fdHJhY2sgPSB0cmFjaztcbiAgICB0aGlzLl9zZXRBbmNob3IgPSBzZXRBbmNob3I7XG4gIH1cblxuICBoYW5kbGVNb3VzZURvd24gPSBlID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fbW91c2V1cCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fbW91c2Vtb3ZlKTtcbiAgICBpZiAodGhpcy5fc2V0QW5jaG9yKSB7XG4gICAgICBjb25zdCBwb3MgPSB0aGlzLl9nZXRNb3VzZVBvcyhlKTtcbiAgICAgIHRoaXMuX3NldEFuY2hvcih0aGlzLl9nZXREaXN0YW5jZVRvVHJhY2socG9zKSk7XG4gICAgfVxuICAgIHRoaXMuX3RvZ2dsZU1vdXNlT3ZlcigpO1xuICB9O1xuXG4gIF9nZXRNb3VzZVBvcyhlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsID8gZS5jbGllbnRZIDogZS5jbGllbnRYO1xuICB9XG5cbiAgX2dldFRvdWNoUG9zaXRpb24oZSkge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbCA/IGUudG91Y2hlc1swXS5jbGllbnRZIDogZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gIH1cblxuICBfbW91c2V1cCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fbW91c2V1cCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fbW91c2Vtb3ZlKTtcbiAgICB0aGlzLl90b2dnbGVNb3VzZU92ZXIoKTtcbiAgfTtcblxuICBfZ2V0RGlzdGFuY2VUb1RyYWNrKHBvcykge1xuICAgIGNvbnN0IHRyYWNrUmVjdCA9IHRoaXMuX3RyYWNrLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHBvcyAtICh0aGlzLl92ZXJ0aWNhbCA/IHRyYWNrUmVjdC5ib3R0b20gOiB0cmFja1JlY3QubGVmdCk7XG4gIH1cblxuICBfbW91c2Vtb3ZlID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuX2dldE1vdXNlUG9zKGUpO1xuICAgIHRoaXMuX3ZhbHVlTGlzdGVuZXIodGhpcy5fZ2V0RGlzdGFuY2VUb1RyYWNrKHBvcykpO1xuICB9O1xuXG4gIGhhbmRsZVRvdWNoU3RhcnQgPSBlID0+IHtcbiAgICAvLyBUT0RPOiBmaXggdG91Y2ggZXZlbnRcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX3RvdWNoZW5kKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl90b3VjaG1vdmUpO1xuICAgIGlmICh0aGlzLl9zZXRBbmNob3IpIHtcbiAgICAgIGNvbnN0IHBvcyA9IHRoaXMuX2dldFRvdWNoUG9zaXRpb24oZSk7XG4gICAgICB0aGlzLl9zZXRBbmNob3IodGhpcy5fZ2V0RGlzdGFuY2VUb1RyYWNrKHBvcykpO1xuICAgIH1cbiAgICB0aGlzLl90b2dnbGVNb3VzZU92ZXIoKTtcbiAgfTtcblxuICBfdG91Y2htb3ZlID0gZSA9PiB7XG4gICAgLy8gVE9ETzogdG91Y2ggbm90IHRlc3RlZFxuICAgIGNvbnN0IHBvcyA9IHRoaXMuX2dldFRvdWNoUG9zaXRpb24oZSk7XG4gICAgdGhpcy5fdmFsdWVMaXN0ZW5lcih0aGlzLl9nZXREaXN0YW5jZVRvVHJhY2socG9zKSk7XG4gIH07XG5cbiAgX3RvdWNoZW5kID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5fdG91Y2hlbmQpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX3RvdWNobW92ZSk7XG4gICAgdGhpcy5fdG9nZ2xlTW91c2VPdmVyKCk7XG4gIH07XG59XG4iXX0=