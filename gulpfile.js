var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var cp          = require('child_process');
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
 
/**
 * Wait for jekyll-build, then launch the Server
 */
// gulp.task('browser-sync', ['jekyll-build'], function() {
//     browserSync({
//         server: {
//             baseDir: '_site'
//         },
//         host: "localhost:4000"
//     });
// });

gulp.task('browser-sync',['jekyll-build'], function() {
    browserSync.init({
        proxy: "localhost:4000"
    });
});

gulp.task('watch', function() {
  // Watch .scss files
  // Watch .js files
  // Watch .html files and posts
  gulp.watch(['css/**/*'], ['jekyll-rebuild']);
  gulp.watch(['index.html', '_includes/*.html', '_layouts/*.html', '*.md', '_posts/*'], ['jekyll-rebuild']);
});



gulp.task('default',['browser-sync','watch']);