var gulp = require('gulp');
var babel = require('gulp-babel');
//var concat = require('gulp-concat');
var sweetjs = require('gulp-sweetjs');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

gulp.task('sweeten', function () {
    function sweeten () {
        return gulp.src('test/playground.sjs')
            .pipe(sourcemaps.init())
            .pipe(sweetjs({
                modules: ['./']
            }))
            .pipe(rename('playground.es6'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('test'));
    }
    return sweeten();
});
gulp.task('transpile', ['sweeten'], function () {
    function transpile () {
        return gulp.src('test/playground.es6')
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(babel())
            .pipe(rename('playground.js'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('test'));
    }
    return transpile();
});
gulp.task('default', ['transpile']);
