'use strict';

/**
 * @module stringReverse
 */

/**
 * @description Gets the Unicode char at a given point with in a string,
 * taking into account surrogate pairs.
 * @example
 * ```js
 * > stringReverse._codePointAt('abc', 0);
 * 0x0061
 * ```
 * @param {string} str the string
 * @param {number} index the point to access
 * @return {number} the char code
 */
function codePointAt(str, index) {
    var first, second;
    if (index < 0 || index >= str.length) {
        return undefined;
    }
    first = str.charCodeAt(index);
    if (first >= 0xD800 && first <= 0xDBFF && str.length > index + 1) {
        second = str.charCodeAt(index + 1);
        if (second >= 0xDC00 && second <= 0xDFFF) {
            return ((first - 0xD800) << 10) + (second - 0xDC00) + 0x10000;
        }
    }
    return first;
}

/**
 * @description Unicode safe string reversal.
 * @example
 * ```js
 * > stringReverse('abc');
 * cba
 * ```
 * @param {string} str The string to reverse
 * @return {string} reversed string
 */
function stringReverse(str) {
    var i, codePoint, newString = '';
    for (i = 0; i < str.length; i++) {
        codePoint = codePointAt(str, i);
        newString = str[i] + ((codePoint > 0xFFFF) ? str[++i] : '') + newString;
    }
    return newString;
}

stringReverse._codePointAt = codePointAt;

module.exports = stringReverse;
