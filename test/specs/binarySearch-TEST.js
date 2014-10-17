'use strict';

var assert = require('chai').assert,
    binarySearch = require('../../lib/binarySearch'),
    // list of array sizes to test
    testSizes = [-1, 0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 15, 50, 99, 101, 1000000],
    // number of random attemps to make on each
    attempts = 10;

// Create a sorted randomly filled array of a given length
function makeSortedRandomArray(length) {
    var i,
        arr = [];
    for (i = 0; i < length; i++) {
        // fix size of floats so equality testing is always possible.
        arr.push(Math.random().toFixed(20));
    }
    return arr.sort();
}

// Attempts to find a randomly selected item using the binarySearch function.
function findRandomItem(arr) {
    var randPos = Math.floor(Math.random() * arr.length);
    it('found ' + arr[randPos] + ' at ' + randPos, function (
        done) {
        var pos = binarySearch(arr, arr[randPos]);
        assert.equal(pos, randPos);
        done();
    });
}

describe('binary search', function () {
    // For each array size
    testSizes.forEach(function (size) {
        describe('with ' + size + ' items', function () {
            // create array
            var ii, arr = makeSortedRandomArray(size);

            // check the array is the correct size
            it('array correct size', function (done) {
                assert.equal(arr.length, (size < 0) ? 0 : size);
                done();
            });

            // check that we can find the first item
            it('found first item', function (done) {
                assert.equal(binarySearch(arr, arr[0]),
                    0);
                done();
            });

            // check that we can find the last item
            it('found last item', function (done) {
                if (size > 0) {
                    assert.equal(binarySearch(arr, arr[size - 1]),
                        size - 1);
                }
                done();
            });

            // check what we don't find an item which is not in the array
            it('not found', function (done) {
                assert.equal(binarySearch(arr, Math.random() + 1),
                    undefined);
                done();
            });

            // check that we find n randomly selected items
            for (ii = 0; ii < attempts; ii++) {
                findRandomItem(arr);
            }
        });
    });
});
