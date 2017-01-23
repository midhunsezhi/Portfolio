var gulp = require('gulp'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css');

gulp.task('styles', function() {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('dest/'));
});

gulp.task('watch', function() {
    gulp.watch('css/*.css', ['styles']);
});

gulp.task('default', ['styles']);