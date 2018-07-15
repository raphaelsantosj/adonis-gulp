/*
 * Variables
 */
// Gulp require
var gulp = require('gulp');

// Gulp Sass require
var sass = require('gulp-sass');

// Gulp rename require
var rename = require('gulp-rename');

// Scss Files
var scss = 'public/assets/scss/**/*.scss';

// CSS destination
var dest = 'public/assets/css';

// Options for development
var sassDevOptions = {
  output: 'expanded'
}

// Options for production
var sassProdOptions = {
  output: 'compressed'
}

/*
 * Tasks
 */
// Task 'sassdev' - Run with command 'gulp sassdev'
gulp.task('sassdev', function() {
  return gulp.src(scss)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(dest));
});

// Task 'sassprod' - Run with command 'gulp sassprod'
gulp.task('sassprod', function() {
  return gulp.src(scss)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(dest));
});

// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function() {
  gulp.watch(scss, ['sassdev', 'sassprod']);
});

// Default task - Run with command 'gulp'
gulp.task('default', ['sassdev', 'sassprod', 'watch']);
