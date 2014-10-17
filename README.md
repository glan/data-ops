# data-ops

A JavaScript implementation of a binary search and Unicode safe string reversal function.

## Installation

```bash
npm install https://github.com/glan/data-ops.git
```

## Usage

```js
var dataOps = require('data-ops');

dataOps.binarySearch([2,6,21,42,67,93], 42);
> 3

dataOps.stringReverse('🐎 redrum');
> murder 🐎
```

## API

### dataOps.stringReverse(str) => `string`
Unicode safe string reversal.

**Params**

- str `string` - string to reverse

**Returns**: `string` - reversed string

**Example**

```js
stringReverse('abc');
> cba
```

### dataOps.stringReverse._codePointAt(string, index) => `number`
Gets the Unicode char at a given point with in a string, taking into account surrogate pairs.

**Params**

- str `string` - the string
- index `number` - the point to access

**Returns**: `number` - the unicode character code

**Example**

```js
stringReverse._codePointAt('abc', 0);
> 0x0061
```

### dataOps.binarySearch(subject, value, [startIndex], [endIndex])
Perform a binary search on a presorted array.

**Params**

- subject `array` - array of `numbers`
- value `number` - value to search for
- startIndex `number` - the index to start searching from (optional)
- endIndex `number` - the index to end search on (optional)

**Returns**: `number|undefined` - the index of the value or `undefined` if not found

**Example**

```js
binarySearch([1,3,7,10], 7);
> 2
```

## Development

### Environment Setup

Development requires a global install of the [gulp](http://gulpjs.com) CLI tool. This can be done as follows:

```bash
npm install -g gulp
```

### Install Development Dependencies

Development dependencies can be installed as follows:

```bash
npm install
```

### Running Tests

Running the test suite is done using `gulp`

```bash
gulp
```

By default gulp runs the following tasks:

- Unit tests (with code coverage reporting)
- JShint

Code coverage reports can be found in the [coverage directory](./coverage/lcov-report/index.html).
