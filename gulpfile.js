var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    bable = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    es6Path = 'es6/*.js',
    compilePath = 'es5';

gulp.task('babel', function () {
    return gulp.src([es6Path])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(bable())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(compilePath));
});

gulp.task('watch', function() {

    gulp.watch([es6Path], ['babel']);

});