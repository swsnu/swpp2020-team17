"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImmutableFeatureCollection = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ImmutableFeatureCollection =
/*#__PURE__*/
function () {
  function ImmutableFeatureCollection(featureCollection) {
    _classCallCheck(this, ImmutableFeatureCollection);

    _defineProperty(this, "featureCollection", void 0);

    this.featureCollection = featureCollection;
  }

  _createClass(ImmutableFeatureCollection, [{
    key: "getObject",
    value: function getObject() {
      return this.featureCollection;
    }
    /**
     * Replaces the position deeply nested withing the given feature's geometry.
     * Works with Point, MultiPoint, LineString, MultiLineString, Polygon, and MultiPolygon.
     *
     * @param featureIndex The index of the feature to update
     * @param positionIndexes An array containing the indexes of the position to replace
     * @param updatedPosition The updated position to place in the result (i.e. [lng, lat])
     *
     * @returns A new `ImmutableFeatureCollection` with the given position replaced. Does not modify this `ImmutableFeatureCollection`.
     */

  }, {
    key: "replacePosition",
    value: function replacePosition(featureIndex, positionIndexes, updatedPosition) {
      var geometry = this.featureCollection.features[featureIndex].geometry;
      var isPolygonal = geometry.type === 'Polygon' || geometry.type === 'MultiPolygon';

      var updatedGeometry = _objectSpread({}, geometry, {
        coordinates: immutablyReplacePosition(geometry.coordinates, positionIndexes, updatedPosition, isPolygonal)
      });

      return this.replaceGeometry(featureIndex, updatedGeometry);
    }
    /**
     * Removes a position deeply nested in a GeoJSON geometry coordinates array.
     * Works with MultiPoint, LineString, MultiLineString, Polygon, and MultiPolygon.
     *
     * @param featureIndex The index of the feature to update
     * @param positionIndexes An array containing the indexes of the postion to remove
     *
     * @returns A new `ImmutableFeatureCollection` with the given coordinate removed. Does not modify this `ImmutableFeatureCollection`.
     */

  }, {
    key: "removePosition",
    value: function removePosition(featureIndex, positionIndexes) {
      var geometry = this.featureCollection.features[featureIndex].geometry;

      if (geometry.type === 'Point') {
        throw Error("Can't remove a position from a Point or there'd be nothing left");
      }

      if (geometry.type === 'MultiPoint' && // only 1 point left
      geometry.coordinates.length < 2) {
        throw Error("Can't remove the last point of a MultiPoint or there'd be nothing left");
      }

      if (geometry.type === 'LineString' && // only 2 positions
      geometry.coordinates.length < 3) {
        throw Error("Can't remove position. LineString must have at least two positions");
      }

      if (geometry.type === 'Polygon' && // outer ring is a triangle
      geometry.coordinates[0].length < 5 && // trying to remove from outer ring
      positionIndexes[0] === 0) {
        throw Error("Can't remove position. Polygon's outer ring must have at least four positions");
      }

      if (geometry.type === 'MultiLineString' && // only 1 LineString left
      geometry.coordinates.length === 1 && // only 2 positions
      geometry.coordinates[0].length < 3) {
        throw Error("Can't remove position. MultiLineString must have at least two positions");
      }

      if (geometry.type === 'MultiPolygon' && // only 1 polygon left
      geometry.coordinates.length === 1 && // outer ring is a triangle
      geometry.coordinates[0][0].length < 5 && // trying to remove from first polygon
      positionIndexes[0] === 0 && // trying to remove from outer ring
      positionIndexes[1] === 0) {
        throw Error("Can't remove position. MultiPolygon's outer ring must have at least four positions");
      }

      var isPolygonal = geometry.type === 'Polygon' || geometry.type === 'MultiPolygon';

      var updatedGeometry = _objectSpread({}, geometry, {
        coordinates: immutablyRemovePosition(geometry.coordinates, positionIndexes, isPolygonal)
      }); // Handle cases where incomplete geometries need pruned (e.g. holes that were triangles)


      pruneGeometryIfNecessary(updatedGeometry);
      return this.replaceGeometry(featureIndex, updatedGeometry);
    }
    /**
     * Adds a position deeply nested in a GeoJSON geometry coordinates array.
     * Works with MultiPoint, LineString, MultiLineString, Polygon, and MultiPolygon.
     *
     * @param featureIndex The index of the feature to update
     * @param positionIndexes An array containing the indexes of the postion that will preceed the new position
     * @param positionToAdd The new position to place in the result (i.e. [lng, lat])
     *
     * @returns A new `ImmutableFeatureCollection` with the given coordinate removed. Does not modify this `ImmutableFeatureCollection`.
     */

  }, {
    key: "addPosition",
    value: function addPosition(featureIndex, positionIndexes, positionToAdd) {
      var geometry = this.featureCollection.features[featureIndex].geometry;

      if (geometry.type === 'Point') {
        throw new Error('Unable to add a position to a Point feature');
      }

      var isPolygonal = geometry.type === 'Polygon' || geometry.type === 'MultiPolygon';

      var updatedGeometry = _objectSpread({}, geometry, {
        coordinates: immutablyAddPosition(geometry.coordinates, positionIndexes, positionToAdd, isPolygonal)
      });

      return this.replaceGeometry(featureIndex, updatedGeometry);
    }
  }, {
    key: "replaceGeometry",
    value: function replaceGeometry(featureIndex, geometry) {
      var updatedFeature = _objectSpread({}, this.featureCollection.features[featureIndex], {
        geometry: geometry
      });

      var updatedFeatureCollection = _objectSpread({}, this.featureCollection, {
        features: _toConsumableArray(this.featureCollection.features.slice(0, featureIndex)).concat([updatedFeature], _toConsumableArray(this.featureCollection.features.slice(featureIndex + 1)))
      });

      return new ImmutableFeatureCollection(updatedFeatureCollection);
    }
  }, {
    key: "addFeature",
    value: function addFeature(feature) {
      var updatedFeatureCollection = _objectSpread({}, this.featureCollection, {
        features: _toConsumableArray(this.featureCollection.features).concat([feature])
      });

      return new ImmutableFeatureCollection(updatedFeatureCollection);
    }
  }]);

  return ImmutableFeatureCollection;
}();

exports.ImmutableFeatureCollection = ImmutableFeatureCollection;

function getUpdatedPosition(updatedPosition, previousPosition) {
  // This function checks if the updatedPosition is missing elevation
  // and copies it from previousPosition
  if (updatedPosition.length === 2 && previousPosition.length === 3) {
    var elevation = previousPosition[2];
    return [updatedPosition[0], updatedPosition[1], elevation];
  }

  return updatedPosition;
}

function immutablyReplacePosition(coordinates, positionIndexes, updatedPosition, isPolygonal) {
  if (!positionIndexes) {
    return coordinates;
  }

  if (positionIndexes.length === 0) {
    return getUpdatedPosition(updatedPosition, coordinates);
  }

  if (positionIndexes.length === 1) {
    var updated = _toConsumableArray(coordinates.slice(0, positionIndexes[0])).concat([getUpdatedPosition(updatedPosition, coordinates[positionIndexes[0]])], _toConsumableArray(coordinates.slice(positionIndexes[0] + 1)));

    if (isPolygonal && (positionIndexes[0] === 0 || positionIndexes[0] === coordinates.length - 1)) {
      // for polygons, the first point is repeated at the end of the array
      // so, update it on both ends of the array
      updated[0] = getUpdatedPosition(updatedPosition, coordinates[0]);
      updated[coordinates.length - 1] = getUpdatedPosition(updatedPosition, coordinates[0]);
    }

    return updated;
  } // recursively update inner array


  return _toConsumableArray(coordinates.slice(0, positionIndexes[0])).concat([immutablyReplacePosition(coordinates[positionIndexes[0]], positionIndexes.slice(1, positionIndexes.length), updatedPosition, isPolygonal)], _toConsumableArray(coordinates.slice(positionIndexes[0] + 1)));
}

function immutablyRemovePosition(coordinates, positionIndexes, isPolygonal) {
  if (!positionIndexes) {
    return coordinates;
  }

  if (positionIndexes.length === 0) {
    throw Error('Must specify the index of the position to remove');
  }

  if (positionIndexes.length === 1) {
    var updated = _toConsumableArray(coordinates.slice(0, positionIndexes[0])).concat(_toConsumableArray(coordinates.slice(positionIndexes[0] + 1)));

    if (isPolygonal && (positionIndexes[0] === 0 || positionIndexes[0] === coordinates.length - 1)) {
      // for polygons, the first point is repeated at the end of the array
      // so, if the first/last coordinate is to be removed, coordinates[1] will be the new first/last coordinate
      if (positionIndexes[0] === 0) {
        // change the last to be the same as the first
        updated[updated.length - 1] = updated[0];
      } else if (positionIndexes[0] === coordinates.length - 1) {
        // change the first to be the same as the last
        updated[0] = updated[updated.length - 1];
      }
    }

    return updated;
  } // recursively update inner array


  return _toConsumableArray(coordinates.slice(0, positionIndexes[0])).concat([immutablyRemovePosition(coordinates[positionIndexes[0]], positionIndexes.slice(1, positionIndexes.length), isPolygonal)], _toConsumableArray(coordinates.slice(positionIndexes[0] + 1)));
}

function immutablyAddPosition(coordinates, positionIndexes, positionToAdd, isPolygonal) {
  if (!positionIndexes) {
    return coordinates;
  }

  if (positionIndexes.length === 0) {
    throw Error('Must specify the index of the position to remove');
  }

  if (positionIndexes.length === 1) {
    var updated = _toConsumableArray(coordinates.slice(0, positionIndexes[0])).concat([positionToAdd], _toConsumableArray(coordinates.slice(positionIndexes[0])));

    return updated;
  } // recursively update inner array


  return _toConsumableArray(coordinates.slice(0, positionIndexes[0])).concat([immutablyAddPosition(coordinates[positionIndexes[0]], positionIndexes.slice(1, positionIndexes.length), positionToAdd, isPolygonal)], _toConsumableArray(coordinates.slice(positionIndexes[0] + 1)));
}

function pruneGeometryIfNecessary(geometry) {
  switch (geometry.type) {
    case 'Polygon':
      prunePolygonIfNecessary(geometry);
      break;

    case 'MultiLineString':
      pruneMultiLineStringIfNecessary(geometry);
      break;

    case 'MultiPolygon':
      pruneMultiPolygonIfNecessary(geometry);
      break;

    default:
      // Not downgradable
      break;
  }
}

function prunePolygonIfNecessary(geometry) {
  var polygon = geometry.coordinates; // If any hole is no longer a polygon, remove the hole entirely

  for (var holeIndex = 1; holeIndex < polygon.length; holeIndex++) {
    if (removeHoleIfNecessary(polygon, holeIndex)) {
      // It was removed, so keep the index the same
      holeIndex--;
    }
  }
}

function pruneMultiLineStringIfNecessary(geometry) {
  for (var lineStringIndex = 0; lineStringIndex < geometry.coordinates.length; lineStringIndex++) {
    var lineString = geometry.coordinates[lineStringIndex];

    if (lineString.length === 1) {
      // Only a single position left on this LineString, so remove it (can't have Point in MultiLineString)
      geometry.coordinates.splice(lineStringIndex, 1); // Keep the index the same

      lineStringIndex--;
    }
  }
}

function pruneMultiPolygonIfNecessary(geometry) {
  for (var polygonIndex = 0; polygonIndex < geometry.coordinates.length; polygonIndex++) {
    var polygon = geometry.coordinates[polygonIndex];
    var outerRing = polygon[0]; // If the outer ring is no longer a polygon, remove the whole polygon

    if (outerRing.length <= 3) {
      geometry.coordinates.splice(polygonIndex, 1); // It was removed, so keep the index the same

      polygonIndex--;
    }

    for (var holeIndex = 1; holeIndex < polygon.length; holeIndex++) {
      if (removeHoleIfNecessary(polygon, holeIndex)) {
        // It was removed, so keep the index the same
        holeIndex--;
      }
    }
  }
}

function removeHoleIfNecessary(polygon, holeIndex) {
  var hole = polygon[holeIndex];

  if (hole.length <= 3) {
    polygon.splice(holeIndex, 1);
    return true;
  }

  return false;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvaW1tdXRhYmxlLWZlYXR1cmUtY29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJJbW11dGFibGVGZWF0dXJlQ29sbGVjdGlvbiIsImZlYXR1cmVDb2xsZWN0aW9uIiwiZmVhdHVyZUluZGV4IiwicG9zaXRpb25JbmRleGVzIiwidXBkYXRlZFBvc2l0aW9uIiwiZ2VvbWV0cnkiLCJmZWF0dXJlcyIsImlzUG9seWdvbmFsIiwidHlwZSIsInVwZGF0ZWRHZW9tZXRyeSIsImNvb3JkaW5hdGVzIiwiaW1tdXRhYmx5UmVwbGFjZVBvc2l0aW9uIiwicmVwbGFjZUdlb21ldHJ5IiwiRXJyb3IiLCJsZW5ndGgiLCJpbW11dGFibHlSZW1vdmVQb3NpdGlvbiIsInBydW5lR2VvbWV0cnlJZk5lY2Vzc2FyeSIsInBvc2l0aW9uVG9BZGQiLCJpbW11dGFibHlBZGRQb3NpdGlvbiIsInVwZGF0ZWRGZWF0dXJlIiwidXBkYXRlZEZlYXR1cmVDb2xsZWN0aW9uIiwic2xpY2UiLCJmZWF0dXJlIiwiZ2V0VXBkYXRlZFBvc2l0aW9uIiwicHJldmlvdXNQb3NpdGlvbiIsImVsZXZhdGlvbiIsInVwZGF0ZWQiLCJwcnVuZVBvbHlnb25JZk5lY2Vzc2FyeSIsInBydW5lTXVsdGlMaW5lU3RyaW5nSWZOZWNlc3NhcnkiLCJwcnVuZU11bHRpUG9seWdvbklmTmVjZXNzYXJ5IiwicG9seWdvbiIsImhvbGVJbmRleCIsInJlbW92ZUhvbGVJZk5lY2Vzc2FyeSIsImxpbmVTdHJpbmdJbmRleCIsImxpbmVTdHJpbmciLCJzcGxpY2UiLCJwb2x5Z29uSW5kZXgiLCJvdXRlclJpbmciLCJob2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBYWFBLDBCOzs7QUFHWCxzQ0FBWUMsaUJBQVosRUFBa0Q7QUFBQTs7QUFBQTs7QUFDaEQsU0FBS0EsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxpQkFBWjtB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MEIsQ0FBMUI7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCB0eXBlIHtcbiAgRmVhdHVyZSxcbiAgRmVhdHVyZUNvbGxlY3Rpb24sXG4gIEdlb21ldHJ5LFxuICBQb2x5Z29uLFxuICBNdWx0aUxpbmVTdHJpbmcsXG4gIE11bHRpUG9seWdvbixcbiAgUG9zaXRpb24sXG4gIFBvbHlnb25Db29yZGluYXRlc1xufSBmcm9tICcuLi9nZW9qc29uLXR5cGVzLmpzJztcblxuZXhwb3J0IGNsYXNzIEltbXV0YWJsZUZlYXR1cmVDb2xsZWN0aW9uIHtcbiAgZmVhdHVyZUNvbGxlY3Rpb246IEZlYXR1cmVDb2xsZWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKGZlYXR1cmVDb2xsZWN0aW9uOiBGZWF0dXJlQ29sbGVjdGlvbikge1xuICAgIHRoaXMuZmVhdHVyZUNvbGxlY3Rpb24gPSBmZWF0dXJlQ29sbGVjdGlvbjtcbiAgfVxuXG4gIGdldE9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5mZWF0dXJlQ29sbGVjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcG9zaXRpb24gZGVlcGx5IG5lc3RlZCB3aXRoaW5nIHRoZSBnaXZlbiBmZWF0dXJlJ3MgZ2VvbWV0cnkuXG4gICAqIFdvcmtzIHdpdGggUG9pbnQsIE11bHRpUG9pbnQsIExpbmVTdHJpbmcsIE11bHRpTGluZVN0cmluZywgUG9seWdvbiwgYW5kIE11bHRpUG9seWdvbi5cbiAgICpcbiAgICogQHBhcmFtIGZlYXR1cmVJbmRleCBUaGUgaW5kZXggb2YgdGhlIGZlYXR1cmUgdG8gdXBkYXRlXG4gICAqIEBwYXJhbSBwb3NpdGlvbkluZGV4ZXMgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgaW5kZXhlcyBvZiB0aGUgcG9zaXRpb24gdG8gcmVwbGFjZVxuICAgKiBAcGFyYW0gdXBkYXRlZFBvc2l0aW9uIFRoZSB1cGRhdGVkIHBvc2l0aW9uIHRvIHBsYWNlIGluIHRoZSByZXN1bHQgKGkuZS4gW2xuZywgbGF0XSlcbiAgICpcbiAgICogQHJldHVybnMgQSBuZXcgYEltbXV0YWJsZUZlYXR1cmVDb2xsZWN0aW9uYCB3aXRoIHRoZSBnaXZlbiBwb3NpdGlvbiByZXBsYWNlZC4gRG9lcyBub3QgbW9kaWZ5IHRoaXMgYEltbXV0YWJsZUZlYXR1cmVDb2xsZWN0aW9uYC5cbiAgICovXG4gIHJlcGxhY2VQb3NpdGlvbihcbiAgICBmZWF0dXJlSW5kZXg6IG51bWJlcixcbiAgICBwb3NpdGlvbkluZGV4ZXM6IG51bWJlcltdLFxuICAgIHVwZGF0ZWRQb3NpdGlvbjogUG9zaXRpb25cbiAgKTogSW1tdXRhYmxlRmVhdHVyZUNvbGxlY3Rpb24ge1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gdGhpcy5mZWF0dXJlQ29sbGVjdGlvbi5mZWF0dXJlc1tmZWF0dXJlSW5kZXhdLmdlb21ldHJ5O1xuXG4gICAgY29uc3QgaXNQb2x5Z29uYWwgPSBnZW9tZXRyeS50eXBlID09PSAnUG9seWdvbicgfHwgZ2VvbWV0cnkudHlwZSA9PT0gJ011bHRpUG9seWdvbic7XG4gICAgY29uc3QgdXBkYXRlZEdlb21ldHJ5OiBhbnkgPSB7XG4gICAgICAuLi5nZW9tZXRyeSxcbiAgICAgIGNvb3JkaW5hdGVzOiBpbW11dGFibHlSZXBsYWNlUG9zaXRpb24oXG4gICAgICAgIGdlb21ldHJ5LmNvb3JkaW5hdGVzLFxuICAgICAgICBwb3NpdGlvbkluZGV4ZXMsXG4gICAgICAgIHVwZGF0ZWRQb3NpdGlvbixcbiAgICAgICAgaXNQb2x5Z29uYWxcbiAgICAgIClcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZUdlb21ldHJ5KGZlYXR1cmVJbmRleCwgdXBkYXRlZEdlb21ldHJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgcG9zaXRpb24gZGVlcGx5IG5lc3RlZCBpbiBhIEdlb0pTT04gZ2VvbWV0cnkgY29vcmRpbmF0ZXMgYXJyYXkuXG4gICAqIFdvcmtzIHdpdGggTXVsdGlQb2ludCwgTGluZVN0cmluZywgTXVsdGlMaW5lU3RyaW5nLCBQb2x5Z29uLCBhbmQgTXVsdGlQb2x5Z29uLlxuICAgKlxuICAgKiBAcGFyYW0gZmVhdHVyZUluZGV4IFRoZSBpbmRleCBvZiB0aGUgZmVhdHVyZSB0byB1cGRhdGVcbiAgICogQHBhcmFtIHBvc2l0aW9uSW5kZXhlcyBBbiBhcnJheSBjb250YWluaW5nIHRoZSBpbmRleGVzIG9mIHRoZSBwb3N0aW9uIHRvIHJlbW92ZVxuICAgKlxuICAgKiBAcmV0dXJucyBBIG5ldyBgSW1tdXRhYmxlRmVhdHVyZUNvbGxlY3Rpb25gIHdpdGggdGhlIGdpdmVuIGNvb3JkaW5hdGUgcmVtb3ZlZC4gRG9lcyBub3QgbW9kaWZ5IHRoaXMgYEltbXV0YWJsZUZlYXR1cmVDb2xsZWN0aW9uYC5cbiAgICovXG4gIHJlbW92ZVBvc2l0aW9uKGZlYXR1cmVJbmRleDogbnVtYmVyLCBwb3NpdGlvbkluZGV4ZXM6IG51bWJlcltdKTogSW1tdXRhYmxlRmVhdHVyZUNvbGxlY3Rpb24ge1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gdGhpcy5mZWF0dXJlQ29sbGVjdGlvbi5mZWF0dXJlc1tmZWF0dXJlSW5kZXhdLmdlb21ldHJ5O1xuXG4gICAgaWYgKGdlb21ldHJ5LnR5cGUgPT09ICdQb2ludCcpIHtcbiAgICAgIHRocm93IEVycm9yKGBDYW4ndCByZW1vdmUgYSBwb3NpdGlvbiBmcm9tIGEgUG9pbnQgb3IgdGhlcmUnZCBiZSBub3RoaW5nIGxlZnRgKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZ2VvbWV0cnkudHlwZSA9PT0gJ011bHRpUG9pbnQnICYmXG4gICAgICAvLyBvbmx5IDEgcG9pbnQgbGVmdFxuICAgICAgZ2VvbWV0cnkuY29vcmRpbmF0ZXMubGVuZ3RoIDwgMlxuICAgICkge1xuICAgICAgdGhyb3cgRXJyb3IoYENhbid0IHJlbW92ZSB0aGUgbGFzdCBwb2ludCBvZiBhIE11bHRpUG9pbnQgb3IgdGhlcmUnZCBiZSBub3RoaW5nIGxlZnRgKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZ2VvbWV0cnkudHlwZSA9PT0gJ0xpbmVTdHJpbmcnICYmXG4gICAgICAvLyBvbmx5IDIgcG9zaXRpb25zXG4gICAgICBnZW9tZXRyeS5jb29yZGluYXRlcy5sZW5ndGggPCAzXG4gICAgKSB7XG4gICAgICB0aHJvdyBFcnJvcihgQ2FuJ3QgcmVtb3ZlIHBvc2l0aW9uLiBMaW5lU3RyaW5nIG11c3QgaGF2ZSBhdCBsZWFzdCB0d28gcG9zaXRpb25zYCk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGdlb21ldHJ5LnR5cGUgPT09ICdQb2x5Z29uJyAmJlxuICAgICAgLy8gb3V0ZXIgcmluZyBpcyBhIHRyaWFuZ2xlXG4gICAgICBnZW9tZXRyeS5jb29yZGluYXRlc1swXS5sZW5ndGggPCA1ICYmXG4gICAgICAvLyB0cnlpbmcgdG8gcmVtb3ZlIGZyb20gb3V0ZXIgcmluZ1xuICAgICAgcG9zaXRpb25JbmRleGVzWzBdID09PSAwXG4gICAgKSB7XG4gICAgICB0aHJvdyBFcnJvcihgQ2FuJ3QgcmVtb3ZlIHBvc2l0aW9uLiBQb2x5Z29uJ3Mgb3V0ZXIgcmluZyBtdXN0IGhhdmUgYXQgbGVhc3QgZm91ciBwb3NpdGlvbnNgKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZ2VvbWV0cnkudHlwZSA9PT0gJ011bHRpTGluZVN0cmluZycgJiZcbiAgICAgIC8vIG9ubHkgMSBMaW5lU3RyaW5nIGxlZnRcbiAgICAgIGdlb21ldHJ5LmNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgLy8gb25seSAyIHBvc2l0aW9uc1xuICAgICAgZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF0ubGVuZ3RoIDwgM1xuICAgICkge1xuICAgICAgdGhyb3cgRXJyb3IoYENhbid0IHJlbW92ZSBwb3NpdGlvbi4gTXVsdGlMaW5lU3RyaW5nIG11c3QgaGF2ZSBhdCBsZWFzdCB0d28gcG9zaXRpb25zYCk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGdlb21ldHJ5LnR5cGUgPT09ICdNdWx0aVBvbHlnb24nICYmXG4gICAgICAvLyBvbmx5IDEgcG9seWdvbiBsZWZ0XG4gICAgICBnZW9tZXRyeS5jb29yZGluYXRlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgIC8vIG91dGVyIHJpbmcgaXMgYSB0cmlhbmdsZVxuICAgICAgZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF1bMF0ubGVuZ3RoIDwgNSAmJlxuICAgICAgLy8gdHJ5aW5nIHRvIHJlbW92ZSBmcm9tIGZpcnN0IHBvbHlnb25cbiAgICAgIHBvc2l0aW9uSW5kZXhlc1swXSA9PT0gMCAmJlxuICAgICAgLy8gdHJ5aW5nIHRvIHJlbW92ZSBmcm9tIG91dGVyIHJpbmdcbiAgICAgIHBvc2l0aW9uSW5kZXhlc1sxXSA9PT0gMFxuICAgICkge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIGBDYW4ndCByZW1vdmUgcG9zaXRpb24uIE11bHRpUG9seWdvbidzIG91dGVyIHJpbmcgbXVzdCBoYXZlIGF0IGxlYXN0IGZvdXIgcG9zaXRpb25zYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc1BvbHlnb25hbCA9IGdlb21ldHJ5LnR5cGUgPT09ICdQb2x5Z29uJyB8fCBnZW9tZXRyeS50eXBlID09PSAnTXVsdGlQb2x5Z29uJztcbiAgICBjb25zdCB1cGRhdGVkR2VvbWV0cnk6IGFueSA9IHtcbiAgICAgIC4uLmdlb21ldHJ5LFxuICAgICAgY29vcmRpbmF0ZXM6IGltbXV0YWJseVJlbW92ZVBvc2l0aW9uKGdlb21ldHJ5LmNvb3JkaW5hdGVzLCBwb3NpdGlvbkluZGV4ZXMsIGlzUG9seWdvbmFsKVxuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgY2FzZXMgd2hlcmUgaW5jb21wbGV0ZSBnZW9tZXRyaWVzIG5lZWQgcHJ1bmVkIChlLmcuIGhvbGVzIHRoYXQgd2VyZSB0cmlhbmdsZXMpXG4gICAgcHJ1bmVHZW9tZXRyeUlmTmVjZXNzYXJ5KHVwZGF0ZWRHZW9tZXRyeSk7XG5cbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlR2VvbWV0cnkoZmVhdHVyZUluZGV4LCB1cGRhdGVkR2VvbWV0cnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBwb3NpdGlvbiBkZWVwbHkgbmVzdGVkIGluIGEgR2VvSlNPTiBnZW9tZXRyeSBjb29yZGluYXRlcyBhcnJheS5cbiAgICogV29ya3Mgd2l0aCBNdWx0aVBvaW50LCBMaW5lU3RyaW5nLCBNdWx0aUxpbmVTdHJpbmcsIFBvbHlnb24sIGFuZCBNdWx0aVBvbHlnb24uXG4gICAqXG4gICAqIEBwYXJhbSBmZWF0dXJlSW5kZXggVGhlIGluZGV4IG9mIHRoZSBmZWF0dXJlIHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0gcG9zaXRpb25JbmRleGVzIEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGluZGV4ZXMgb2YgdGhlIHBvc3Rpb24gdGhhdCB3aWxsIHByZWNlZWQgdGhlIG5ldyBwb3NpdGlvblxuICAgKiBAcGFyYW0gcG9zaXRpb25Ub0FkZCBUaGUgbmV3IHBvc2l0aW9uIHRvIHBsYWNlIGluIHRoZSByZXN1bHQgKGkuZS4gW2xuZywgbGF0XSlcbiAgICpcbiAgICogQHJldHVybnMgQSBuZXcgYEltbXV0YWJsZUZlYXR1cmVDb2xsZWN0aW9uYCB3aXRoIHRoZSBnaXZlbiBjb29yZGluYXRlIHJlbW92ZWQuIERvZXMgbm90IG1vZGlmeSB0aGlzIGBJbW11dGFibGVGZWF0dXJlQ29sbGVjdGlvbmAuXG4gICAqL1xuICBhZGRQb3NpdGlvbihcbiAgICBmZWF0dXJlSW5kZXg6IG51bWJlcixcbiAgICBwb3NpdGlvbkluZGV4ZXM6IG51bWJlcltdLFxuICAgIHBvc2l0aW9uVG9BZGQ6IFBvc2l0aW9uXG4gICk6IEltbXV0YWJsZUZlYXR1cmVDb2xsZWN0aW9uIHtcbiAgICBjb25zdCBnZW9tZXRyeSA9IHRoaXMuZmVhdHVyZUNvbGxlY3Rpb24uZmVhdHVyZXNbZmVhdHVyZUluZGV4XS5nZW9tZXRyeTtcblxuICAgIGlmIChnZW9tZXRyeS50eXBlID09PSAnUG9pbnQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBhZGQgYSBwb3NpdGlvbiB0byBhIFBvaW50IGZlYXR1cmUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc1BvbHlnb25hbCA9IGdlb21ldHJ5LnR5cGUgPT09ICdQb2x5Z29uJyB8fCBnZW9tZXRyeS50eXBlID09PSAnTXVsdGlQb2x5Z29uJztcbiAgICBjb25zdCB1cGRhdGVkR2VvbWV0cnk6IGFueSA9IHtcbiAgICAgIC4uLmdlb21ldHJ5LFxuICAgICAgY29vcmRpbmF0ZXM6IGltbXV0YWJseUFkZFBvc2l0aW9uKFxuICAgICAgICBnZW9tZXRyeS5jb29yZGluYXRlcyxcbiAgICAgICAgcG9zaXRpb25JbmRleGVzLFxuICAgICAgICBwb3NpdGlvblRvQWRkLFxuICAgICAgICBpc1BvbHlnb25hbFxuICAgICAgKVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlR2VvbWV0cnkoZmVhdHVyZUluZGV4LCB1cGRhdGVkR2VvbWV0cnkpO1xuICB9XG5cbiAgcmVwbGFjZUdlb21ldHJ5KGZlYXR1cmVJbmRleDogbnVtYmVyLCBnZW9tZXRyeTogR2VvbWV0cnkpOiBJbW11dGFibGVGZWF0dXJlQ29sbGVjdGlvbiB7XG4gICAgY29uc3QgdXBkYXRlZEZlYXR1cmU6IGFueSA9IHtcbiAgICAgIC4uLnRoaXMuZmVhdHVyZUNvbGxlY3Rpb24uZmVhdHVyZXNbZmVhdHVyZUluZGV4XSxcbiAgICAgIGdlb21ldHJ5XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZWRGZWF0dXJlQ29sbGVjdGlvbiA9IHtcbiAgICAgIC4uLnRoaXMuZmVhdHVyZUNvbGxlY3Rpb24sXG4gICAgICBmZWF0dXJlczogW1xuICAgICAgICAuLi50aGlzLmZlYXR1cmVDb2xsZWN0aW9uLmZlYXR1cmVzLnNsaWNlKDAsIGZlYXR1cmVJbmRleCksXG4gICAgICAgIHVwZGF0ZWRGZWF0dXJlLFxuICAgICAgICAuLi50aGlzLmZlYXR1cmVDb2xsZWN0aW9uLmZlYXR1cmVzLnNsaWNlKGZlYXR1cmVJbmRleCArIDEpXG4gICAgICBdXG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgSW1tdXRhYmxlRmVhdHVyZUNvbGxlY3Rpb24odXBkYXRlZEZlYXR1cmVDb2xsZWN0aW9uKTtcbiAgfVxuXG4gIGFkZEZlYXR1cmUoZmVhdHVyZTogRmVhdHVyZSk6IEltbXV0YWJsZUZlYXR1cmVDb2xsZWN0aW9uIHtcbiAgICBjb25zdCB1cGRhdGVkRmVhdHVyZUNvbGxlY3Rpb24gPSB7XG4gICAgICAuLi50aGlzLmZlYXR1cmVDb2xsZWN0aW9uLFxuICAgICAgZmVhdHVyZXM6IFsuLi50aGlzLmZlYXR1cmVDb2xsZWN0aW9uLmZlYXR1cmVzLCBmZWF0dXJlXVxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3IEltbXV0YWJsZUZlYXR1cmVDb2xsZWN0aW9uKHVwZGF0ZWRGZWF0dXJlQ29sbGVjdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VXBkYXRlZFBvc2l0aW9uKHVwZGF0ZWRQb3NpdGlvbjogUG9zaXRpb24sIHByZXZpb3VzUG9zaXRpb246IFBvc2l0aW9uKTogUG9zaXRpb24ge1xuICAvLyBUaGlzIGZ1bmN0aW9uIGNoZWNrcyBpZiB0aGUgdXBkYXRlZFBvc2l0aW9uIGlzIG1pc3NpbmcgZWxldmF0aW9uXG4gIC8vIGFuZCBjb3BpZXMgaXQgZnJvbSBwcmV2aW91c1Bvc2l0aW9uXG4gIGlmICh1cGRhdGVkUG9zaXRpb24ubGVuZ3RoID09PSAyICYmIHByZXZpb3VzUG9zaXRpb24ubGVuZ3RoID09PSAzKSB7XG4gICAgY29uc3QgZWxldmF0aW9uID0gKHByZXZpb3VzUG9zaXRpb246IGFueSlbMl07XG4gICAgcmV0dXJuIFt1cGRhdGVkUG9zaXRpb25bMF0sIHVwZGF0ZWRQb3NpdGlvblsxXSwgZWxldmF0aW9uXTtcbiAgfVxuXG4gIHJldHVybiB1cGRhdGVkUG9zaXRpb247XG59XG5cbmZ1bmN0aW9uIGltbXV0YWJseVJlcGxhY2VQb3NpdGlvbihcbiAgY29vcmRpbmF0ZXM6IGFueSxcbiAgcG9zaXRpb25JbmRleGVzOiBudW1iZXJbXSxcbiAgdXBkYXRlZFBvc2l0aW9uOiBQb3NpdGlvbixcbiAgaXNQb2x5Z29uYWw6IGJvb2xlYW5cbik6IGFueSB7XG4gIGlmICghcG9zaXRpb25JbmRleGVzKSB7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9XG4gIGlmIChwb3NpdGlvbkluZGV4ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGdldFVwZGF0ZWRQb3NpdGlvbih1cGRhdGVkUG9zaXRpb24sIGNvb3JkaW5hdGVzKTtcbiAgfVxuICBpZiAocG9zaXRpb25JbmRleGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IHVwZGF0ZWQgPSBbXG4gICAgICAuLi5jb29yZGluYXRlcy5zbGljZSgwLCBwb3NpdGlvbkluZGV4ZXNbMF0pLFxuICAgICAgZ2V0VXBkYXRlZFBvc2l0aW9uKHVwZGF0ZWRQb3NpdGlvbiwgY29vcmRpbmF0ZXNbcG9zaXRpb25JbmRleGVzWzBdXSksXG4gICAgICAuLi5jb29yZGluYXRlcy5zbGljZShwb3NpdGlvbkluZGV4ZXNbMF0gKyAxKVxuICAgIF07XG5cbiAgICBpZiAoXG4gICAgICBpc1BvbHlnb25hbCAmJlxuICAgICAgKHBvc2l0aW9uSW5kZXhlc1swXSA9PT0gMCB8fCBwb3NpdGlvbkluZGV4ZXNbMF0gPT09IGNvb3JkaW5hdGVzLmxlbmd0aCAtIDEpXG4gICAgKSB7XG4gICAgICAvLyBmb3IgcG9seWdvbnMsIHRoZSBmaXJzdCBwb2ludCBpcyByZXBlYXRlZCBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheVxuICAgICAgLy8gc28sIHVwZGF0ZSBpdCBvbiBib3RoIGVuZHMgb2YgdGhlIGFycmF5XG4gICAgICB1cGRhdGVkWzBdID0gZ2V0VXBkYXRlZFBvc2l0aW9uKHVwZGF0ZWRQb3NpdGlvbiwgY29vcmRpbmF0ZXNbMF0pO1xuICAgICAgdXBkYXRlZFtjb29yZGluYXRlcy5sZW5ndGggLSAxXSA9IGdldFVwZGF0ZWRQb3NpdGlvbih1cGRhdGVkUG9zaXRpb24sIGNvb3JkaW5hdGVzWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHVwZGF0ZWQ7XG4gIH1cblxuICAvLyByZWN1cnNpdmVseSB1cGRhdGUgaW5uZXIgYXJyYXlcbiAgcmV0dXJuIFtcbiAgICAuLi5jb29yZGluYXRlcy5zbGljZSgwLCBwb3NpdGlvbkluZGV4ZXNbMF0pLFxuICAgIGltbXV0YWJseVJlcGxhY2VQb3NpdGlvbihcbiAgICAgIGNvb3JkaW5hdGVzW3Bvc2l0aW9uSW5kZXhlc1swXV0sXG4gICAgICBwb3NpdGlvbkluZGV4ZXMuc2xpY2UoMSwgcG9zaXRpb25JbmRleGVzLmxlbmd0aCksXG4gICAgICB1cGRhdGVkUG9zaXRpb24sXG4gICAgICBpc1BvbHlnb25hbFxuICAgICksXG4gICAgLi4uY29vcmRpbmF0ZXMuc2xpY2UocG9zaXRpb25JbmRleGVzWzBdICsgMSlcbiAgXTtcbn1cblxuZnVuY3Rpb24gaW1tdXRhYmx5UmVtb3ZlUG9zaXRpb24oXG4gIGNvb3JkaW5hdGVzOiBhbnksXG4gIHBvc2l0aW9uSW5kZXhlczogbnVtYmVyW10sXG4gIGlzUG9seWdvbmFsOiBib29sZWFuXG4pOiBhbnkge1xuICBpZiAoIXBvc2l0aW9uSW5kZXhlcykge1xuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfVxuICBpZiAocG9zaXRpb25JbmRleGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IEVycm9yKCdNdXN0IHNwZWNpZnkgdGhlIGluZGV4IG9mIHRoZSBwb3NpdGlvbiB0byByZW1vdmUnKTtcbiAgfVxuICBpZiAocG9zaXRpb25JbmRleGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IHVwZGF0ZWQgPSBbXG4gICAgICAuLi5jb29yZGluYXRlcy5zbGljZSgwLCBwb3NpdGlvbkluZGV4ZXNbMF0pLFxuICAgICAgLi4uY29vcmRpbmF0ZXMuc2xpY2UocG9zaXRpb25JbmRleGVzWzBdICsgMSlcbiAgICBdO1xuXG4gICAgaWYgKFxuICAgICAgaXNQb2x5Z29uYWwgJiZcbiAgICAgIChwb3NpdGlvbkluZGV4ZXNbMF0gPT09IDAgfHwgcG9zaXRpb25JbmRleGVzWzBdID09PSBjb29yZGluYXRlcy5sZW5ndGggLSAxKVxuICAgICkge1xuICAgICAgLy8gZm9yIHBvbHlnb25zLCB0aGUgZmlyc3QgcG9pbnQgaXMgcmVwZWF0ZWQgYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXlcbiAgICAgIC8vIHNvLCBpZiB0aGUgZmlyc3QvbGFzdCBjb29yZGluYXRlIGlzIHRvIGJlIHJlbW92ZWQsIGNvb3JkaW5hdGVzWzFdIHdpbGwgYmUgdGhlIG5ldyBmaXJzdC9sYXN0IGNvb3JkaW5hdGVcbiAgICAgIGlmIChwb3NpdGlvbkluZGV4ZXNbMF0gPT09IDApIHtcbiAgICAgICAgLy8gY2hhbmdlIHRoZSBsYXN0IHRvIGJlIHRoZSBzYW1lIGFzIHRoZSBmaXJzdFxuICAgICAgICB1cGRhdGVkW3VwZGF0ZWQubGVuZ3RoIC0gMV0gPSB1cGRhdGVkWzBdO1xuICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbkluZGV4ZXNbMF0gPT09IGNvb3JkaW5hdGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgLy8gY2hhbmdlIHRoZSBmaXJzdCB0byBiZSB0aGUgc2FtZSBhcyB0aGUgbGFzdFxuICAgICAgICB1cGRhdGVkWzBdID0gdXBkYXRlZFt1cGRhdGVkLmxlbmd0aCAtIDFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXBkYXRlZDtcbiAgfVxuXG4gIC8vIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBpbm5lciBhcnJheVxuICByZXR1cm4gW1xuICAgIC4uLmNvb3JkaW5hdGVzLnNsaWNlKDAsIHBvc2l0aW9uSW5kZXhlc1swXSksXG4gICAgaW1tdXRhYmx5UmVtb3ZlUG9zaXRpb24oXG4gICAgICBjb29yZGluYXRlc1twb3NpdGlvbkluZGV4ZXNbMF1dLFxuICAgICAgcG9zaXRpb25JbmRleGVzLnNsaWNlKDEsIHBvc2l0aW9uSW5kZXhlcy5sZW5ndGgpLFxuICAgICAgaXNQb2x5Z29uYWxcbiAgICApLFxuICAgIC4uLmNvb3JkaW5hdGVzLnNsaWNlKHBvc2l0aW9uSW5kZXhlc1swXSArIDEpXG4gIF07XG59XG5cbmZ1bmN0aW9uIGltbXV0YWJseUFkZFBvc2l0aW9uKFxuICBjb29yZGluYXRlczogYW55LFxuICBwb3NpdGlvbkluZGV4ZXM6IG51bWJlcltdLFxuICBwb3NpdGlvblRvQWRkOiBQb3NpdGlvbixcbiAgaXNQb2x5Z29uYWw6IGJvb2xlYW5cbik6IGFueSB7XG4gIGlmICghcG9zaXRpb25JbmRleGVzKSB7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9XG4gIGlmIChwb3NpdGlvbkluZGV4ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgRXJyb3IoJ011c3Qgc3BlY2lmeSB0aGUgaW5kZXggb2YgdGhlIHBvc2l0aW9uIHRvIHJlbW92ZScpO1xuICB9XG4gIGlmIChwb3NpdGlvbkluZGV4ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgdXBkYXRlZCA9IFtcbiAgICAgIC4uLmNvb3JkaW5hdGVzLnNsaWNlKDAsIHBvc2l0aW9uSW5kZXhlc1swXSksXG4gICAgICBwb3NpdGlvblRvQWRkLFxuICAgICAgLi4uY29vcmRpbmF0ZXMuc2xpY2UocG9zaXRpb25JbmRleGVzWzBdKVxuICAgIF07XG4gICAgcmV0dXJuIHVwZGF0ZWQ7XG4gIH1cblxuICAvLyByZWN1cnNpdmVseSB1cGRhdGUgaW5uZXIgYXJyYXlcbiAgcmV0dXJuIFtcbiAgICAuLi5jb29yZGluYXRlcy5zbGljZSgwLCBwb3NpdGlvbkluZGV4ZXNbMF0pLFxuICAgIGltbXV0YWJseUFkZFBvc2l0aW9uKFxuICAgICAgY29vcmRpbmF0ZXNbcG9zaXRpb25JbmRleGVzWzBdXSxcbiAgICAgIHBvc2l0aW9uSW5kZXhlcy5zbGljZSgxLCBwb3NpdGlvbkluZGV4ZXMubGVuZ3RoKSxcbiAgICAgIHBvc2l0aW9uVG9BZGQsXG4gICAgICBpc1BvbHlnb25hbFxuICAgICksXG4gICAgLi4uY29vcmRpbmF0ZXMuc2xpY2UocG9zaXRpb25JbmRleGVzWzBdICsgMSlcbiAgXTtcbn1cblxuZnVuY3Rpb24gcHJ1bmVHZW9tZXRyeUlmTmVjZXNzYXJ5KGdlb21ldHJ5OiBHZW9tZXRyeSkge1xuICBzd2l0Y2ggKGdlb21ldHJ5LnR5cGUpIHtcbiAgICBjYXNlICdQb2x5Z29uJzpcbiAgICAgIHBydW5lUG9seWdvbklmTmVjZXNzYXJ5KGdlb21ldHJ5KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ011bHRpTGluZVN0cmluZyc6XG4gICAgICBwcnVuZU11bHRpTGluZVN0cmluZ0lmTmVjZXNzYXJ5KGdlb21ldHJ5KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ011bHRpUG9seWdvbic6XG4gICAgICBwcnVuZU11bHRpUG9seWdvbklmTmVjZXNzYXJ5KGdlb21ldHJ5KTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBOb3QgZG93bmdyYWRhYmxlXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBwcnVuZVBvbHlnb25JZk5lY2Vzc2FyeShnZW9tZXRyeTogUG9seWdvbikge1xuICBjb25zdCBwb2x5Z29uID0gZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XG5cbiAgLy8gSWYgYW55IGhvbGUgaXMgbm8gbG9uZ2VyIGEgcG9seWdvbiwgcmVtb3ZlIHRoZSBob2xlIGVudGlyZWx5XG4gIGZvciAobGV0IGhvbGVJbmRleCA9IDE7IGhvbGVJbmRleCA8IHBvbHlnb24ubGVuZ3RoOyBob2xlSW5kZXgrKykge1xuICAgIGlmIChyZW1vdmVIb2xlSWZOZWNlc3NhcnkocG9seWdvbiwgaG9sZUluZGV4KSkge1xuICAgICAgLy8gSXQgd2FzIHJlbW92ZWQsIHNvIGtlZXAgdGhlIGluZGV4IHRoZSBzYW1lXG4gICAgICBob2xlSW5kZXgtLTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJ1bmVNdWx0aUxpbmVTdHJpbmdJZk5lY2Vzc2FyeShnZW9tZXRyeTogTXVsdGlMaW5lU3RyaW5nKSB7XG4gIGZvciAobGV0IGxpbmVTdHJpbmdJbmRleCA9IDA7IGxpbmVTdHJpbmdJbmRleCA8IGdlb21ldHJ5LmNvb3JkaW5hdGVzLmxlbmd0aDsgbGluZVN0cmluZ0luZGV4KyspIHtcbiAgICBjb25zdCBsaW5lU3RyaW5nID0gZ2VvbWV0cnkuY29vcmRpbmF0ZXNbbGluZVN0cmluZ0luZGV4XTtcbiAgICBpZiAobGluZVN0cmluZy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIE9ubHkgYSBzaW5nbGUgcG9zaXRpb24gbGVmdCBvbiB0aGlzIExpbmVTdHJpbmcsIHNvIHJlbW92ZSBpdCAoY2FuJ3QgaGF2ZSBQb2ludCBpbiBNdWx0aUxpbmVTdHJpbmcpXG4gICAgICBnZW9tZXRyeS5jb29yZGluYXRlcy5zcGxpY2UobGluZVN0cmluZ0luZGV4LCAxKTtcbiAgICAgIC8vIEtlZXAgdGhlIGluZGV4IHRoZSBzYW1lXG4gICAgICBsaW5lU3RyaW5nSW5kZXgtLTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJ1bmVNdWx0aVBvbHlnb25JZk5lY2Vzc2FyeShnZW9tZXRyeTogTXVsdGlQb2x5Z29uKSB7XG4gIGZvciAobGV0IHBvbHlnb25JbmRleCA9IDA7IHBvbHlnb25JbmRleCA8IGdlb21ldHJ5LmNvb3JkaW5hdGVzLmxlbmd0aDsgcG9seWdvbkluZGV4KyspIHtcbiAgICBjb25zdCBwb2x5Z29uID0gZ2VvbWV0cnkuY29vcmRpbmF0ZXNbcG9seWdvbkluZGV4XTtcbiAgICBjb25zdCBvdXRlclJpbmcgPSBwb2x5Z29uWzBdO1xuXG4gICAgLy8gSWYgdGhlIG91dGVyIHJpbmcgaXMgbm8gbG9uZ2VyIGEgcG9seWdvbiwgcmVtb3ZlIHRoZSB3aG9sZSBwb2x5Z29uXG4gICAgaWYgKG91dGVyUmluZy5sZW5ndGggPD0gMykge1xuICAgICAgZ2VvbWV0cnkuY29vcmRpbmF0ZXMuc3BsaWNlKHBvbHlnb25JbmRleCwgMSk7XG4gICAgICAvLyBJdCB3YXMgcmVtb3ZlZCwgc28ga2VlcCB0aGUgaW5kZXggdGhlIHNhbWVcbiAgICAgIHBvbHlnb25JbmRleC0tO1xuICAgIH1cblxuICAgIGZvciAobGV0IGhvbGVJbmRleCA9IDE7IGhvbGVJbmRleCA8IHBvbHlnb24ubGVuZ3RoOyBob2xlSW5kZXgrKykge1xuICAgICAgaWYgKHJlbW92ZUhvbGVJZk5lY2Vzc2FyeShwb2x5Z29uLCBob2xlSW5kZXgpKSB7XG4gICAgICAgIC8vIEl0IHdhcyByZW1vdmVkLCBzbyBrZWVwIHRoZSBpbmRleCB0aGUgc2FtZVxuICAgICAgICBob2xlSW5kZXgtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlSG9sZUlmTmVjZXNzYXJ5KHBvbHlnb246IFBvbHlnb25Db29yZGluYXRlcywgaG9sZUluZGV4OiBudW1iZXIpIHtcbiAgY29uc3QgaG9sZSA9IHBvbHlnb25baG9sZUluZGV4XTtcbiAgaWYgKGhvbGUubGVuZ3RoIDw9IDMpIHtcbiAgICBwb2x5Z29uLnNwbGljZShob2xlSW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiJdfQ==