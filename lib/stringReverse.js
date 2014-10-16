'use strict';

/**
 * @module stringReverse
 */

/**
 * @name _codePointAt
 * @description Gets the Unicode char at a given point with in a string,
 * taking into account surrogate pairs.
 * @example ```js
 * var code = stringReverse._codePointAt('abc', 0);
 * ```
 * > 0x0061
 * @param {String} str the string
 * @param {Number} index the point to access
 * @return {Number} the char code
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
 * @name stringReverse
 * @description Unicode safe string reversal.
 * @example ```js
 * var reversedString = stringReverse('abc');
 * ```
 * > cba
 * @param {String} str The string to reverse
 * @return {String} reversed string
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
