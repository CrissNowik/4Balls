// task       //nazwa  // wywołanie funkcji
// gulp.task('sayHello', function() {  // tak wygląda task w gulpie
// console.log("hello world"); // co funkcja ma robić
// });

//variables
var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var directory = "./"; // place work folder here

//browserSync
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
    baseDir: directory
    },
  })
})

// sass
gulp.task("sass", function() {
  return gulp.src(directory + "sass/**/*.scss")
  .pipe(sourcemaps.init())
  .pipe(sass({errLogToConsole: true,
              outputStyle: 'expanded',
              sourceComments: 'map'}))
  .pipe(plumber())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(directory + 'css'))
  .pipe(browserSync.reload({
  stream: true
  }))
});

//watcher
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch(directory + 'sass/**/*.scss', ['sass']);
  gulp.watch(directory + '*.html', browserSync.reload);
  gulp.watch(directory + 'js/**/*.js', browserSync.reload);
});
