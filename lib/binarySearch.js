'use strict';

/**
 * @module binarySearch
 */

/**
 * Perform a binary search on a presorted array.
 * @example
 * ```js
 * binarySearch([1,3,7,10], 7);
 * > 2
 * ```
 * @param {array} subject array of Numbers
 * @param {number} value to search for
 * @param {number} startIndex the index to start searching from (optional)
 * @param {number} endIndex the index to end search on (optional)
 * @returns {number|undefined} the index of the value or `undefined` if not found
 */
function binarySearch(subject, value, startIndex, endIndex) {
    var midPoint,
        midValue;

    startIndex = startIndex || 0;
    endIndex = endIndex || subject.length;

    midPoint = startIndex + Math.floor((endIndex - startIndex) / 2);
    midValue = subject[midPoint];

    if (midValue === value) {
        // value was found
        return midPoint;
    }

    if (midPoint === startIndex) {
        // value was not found
        return;
    }

    if (midValue < value) {
        // search upper part of the array
        return binarySearch(subject, value, midPoint, endIndex);
    } else {
        // search lower part of the array
        return binarySearch(subject, value, startIndex, midPoint);
    }
}

module.exports = binarySearch;
