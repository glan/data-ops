'use strict';

var assert = require('chai').assert,
    stringReverse = require('../../lib/stringReverse');

describe('string reverse', function () {

    describe('_codePointAt', function () {
        it('blank', function (done) {
            assert.equal(stringReverse._codePointAt('', 0), undefined);
            done();
        });
        it('a[0]', function (done) {
            assert.equal(stringReverse._codePointAt('a', 0), 0x0061);
            done();
        });
        it('xa[1]', function (done) {
            assert.equal(stringReverse._codePointAt('xa', 1), 0x0061);
            done();
        });
        it('🀩[0]', function (done) {
            assert.equal(stringReverse._codePointAt('🀩', 0), 0xF0FC);
            done();
        });
        it('🀩[1]', function (done) {
            assert.equal(stringReverse._codePointAt('🀩', 1), 0x1F029);
            done();
        });
        it('😬', function (done) {
            assert.equal(stringReverse._codePointAt('😬', 0), 0x1F62C);
            done();
        });
        it('ퟸ', function (done) {
            assert.equal(stringReverse._codePointAt('ퟸ', 0), 0xD7F8);
            done();
        });
        it('ዴ', function (done) {
            assert.equal(stringReverse._codePointAt('ዧ', 0), 0x12E7);
            done();
        });
        it('bad surrogate', function (done) {
            assert.equal(stringReverse._codePointAt(String.fromCharCode(
                0xD801, 0xD000), 0), 0xD801);
            done();
        });
    });

    it('reverses \'abc\'', function (done) {
        assert.equal(stringReverse('abc'), 'cba');
        done();
    });

    it('reverses \'123\'', function (done) {
        assert.equal(stringReverse('123'), '321');
        done();
    });

    it('reverses \'Glânffrwd\'', function (done) {
        assert.equal(stringReverse('Glânffrwd'),
            'dwrffnâlG');
        done();
    });

    it('reverses \'mañana\'', function (done) {
        assert.equal(stringReverse('mañana'),
            'anañam');
        done();
    });

    it('reverses \'ዴድኘᎪ\'', function (done) {
        assert.equal(stringReverse('ዴድኘᎪ'),
            'Ꭺኘድዴ');
        done();
    });

    it('reverses \'foo 𝌆 bar ♼💩 mañana ✪ mañana\'', function (done) {
        assert.equal(stringReverse('foo 𝌆 bar ♼💩 mañana ✪ mañana'),
            'anañam ✪ anañam 💩♼ rab 𝌆 oof');
        done();
    });
});
