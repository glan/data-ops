'use strict';

/**
 @example
```js
var dataOps = require('data-ops');

dataOps.binarySearch([2,6,21,42,67,93], 42);
> 3
dataOps.stringReverse('🐎 redrum');
> murder 🐎
```
 */

module.exports = {
    binarySearch: require('./lib/binarySearch'),
    stringReverse: require('./lib/stringReverse')
};
