const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const browserSync = require('browser-sync')
const server = browserSync.create()

gulp.task('html', () => {
    return gulp
        .src('./src/pages/*.html')
        .pipe(gulp.dest('./public/pages'))
})

gulp.task('sass', () => {
    return gulp
        .src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
})

gulp.task('default', () => {
    gulp.watch('./src/pages/*.html', gulp.series('html')).on('change', server.reload)
    gulp.watch('./src/scss/*.scss', gulp.series('sass')).on('change', server.reload)
})