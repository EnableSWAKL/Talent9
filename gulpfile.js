var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connectDist', function () {
    connect.server({
        name: 'Talent9',
        root: './',
        port: 8001,
        livereload: true
    });
});

gulp.task('default', ['connectDist']);