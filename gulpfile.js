var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var cp          = require('child_process');
var concat    = require('gulp-concat');
// Static server
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });
/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify('Building Jekyll');
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});
 
/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});
 
gulp.task('scripts', function() {
  return gulp.src(['./_includes/**/*.js', './main.js'])
    .pipe(concat('global.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('browser-sync',['jekyll-build'], function() {
    browserSync.init({
        proxy: "localhost:4000"
    });
});

gulp.task('watch', function() {
  // Watch .scss files
  // Watch .js files
  gulp.watch(['./_includes/**/*.js', './main.js'], ['scripts','jekyll-rebuild']);
  // Watch .html files and posts
  gulp.watch(['css/**/*'], ['jekyll-rebuild']);
  gulp.watch(['index.html', '_includes/*.html','_includes/**/*.html', '_layouts/*.html', '*.md', '_posts/*'], ['jekyll-rebuild']);
});



gulp.task('default',['scripts','browser-sync','watch']);
