'use strict';

var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    istanbul = require('gulp-istanbul'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    jsdoc2md = require('gulp-jsdoc-to-markdown');


// Default task ================================================================

gulp.task('default', ['docs', 'jshint', 'test']);

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

// JSDocs task =================================================================

gulp.task('docs', function () {
    return gulp.src(['./lib/**/*.js'])
        .pipe(jsdoc2md())
        .pipe(rename(function (path) {
            path.extname = '.md';
        }))
        .pipe(gulp.dest('api'));
});
