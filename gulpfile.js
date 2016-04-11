// var gulp        = require('gulp');
// var browserSync = require('browser-sync').create();
// var sass = require('gulp-ruby-sass');

// gulp.task('default', function() {
//     gulp.watch(['*.html'], browserSync.reload);
//     gulp.watch(['css/**/*.css'], browserSync.reload);
// });

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function 
  () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
});