'use strict';

/**
 * @module stringReverse
 */

/**
 * @description Gets the Unicode character at a given point with in a string,
 * taking into account surrogate pairs. See: http://en.wikipedia.org/wiki/UTF-16 and
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
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
    // If the first character is within the lead surrogate range check proceeding character
    if (first >= 0xD800 && first <= 0xDBFF && str.length > index + 1) {
        second = str.charCodeAt(index + 1);
        // If the second character is within the tail surrogate range shift first code and combine
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
        // if code point is greater than 16 bits combine current character with the next and skip ahead
        newString = str[i] + ((codePoint > 0xFFFF) ? str[++i] : '') + newString;
    }
    return newString;
}

stringReverse._codePointAt = codePointAt;

module.exports = stringReverse;
