'use strict';

var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    istanbul = require('gulp-istanbul'),
    jshint = require('gulp-jshint');

// Default task ================================================================

gulp.task('default', ['jshint', 'test']);

// Unit test task ==============================================================

gulp.task('test', function (cb) {
    gulp.src(['./lib/**/*.js'])
        .pipe(istanbul())
        .on('finish', function () {
            gulp.src(['test/specs/**/*.js'])
                .pipe(mocha())
                .pipe(istanbul.writeReports())
                .on('end', cb);
        });
});

// JSHint task =================================================================

gulp.task('jshint', function () {
    return gulp.src(['gulpfile.js', 'main.js', './lib/**/*.js', './test/specs/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});
