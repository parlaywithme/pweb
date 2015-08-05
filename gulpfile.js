var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var cp          = require('child_process');
var concat    = require('gulp-concat');
var autoprefixer    = require('gulp-autoprefixer');
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
  return gulp.src([
    './bower_components/owl-carousel2/dist/owl.carousel.min.js',
    './bower_components/ua-parser-js/dist/ua-parser.min.js',
    './_includes/**/*.js',
    './main.js'
  ])
    .pipe(concat('global.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('component-styles', function(){
  return gulp.src([
    './bower_components/owl-carousel2/dist/assets/owl.carousel.min.css',
    './bower_components/owl-carousel2/dist/assets/owl.theme.default.min.css',
    './_includes/**/*.scss'
  ])
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('components.scss'))
    .pipe(gulp.dest('./css'));
})

gulp.task('browser-sync',['jekyll-build'], function() {
    browserSync.init({
        server: {
            baseDir: '_site'
        },
        host: "localhost"
    });
});

gulp.task('watch', function() {
  gulp.watch(['./_includes/**/*.js', './main.js'], ['scripts','jekyll-rebuild']);
  gulp.watch(['css/**/*.scss', '_includes/**/*.scss'], ['component-styles','jekyll-rebuild']);
  gulp.watch(['index.html', '_includes/*.html','_includes/**/*.html', '_layouts/*.html', '*.md', '_posts/*'], ['jekyll-rebuild']);
});



gulp.task('default',['scripts', 'component-styles', 'jekyll-build', 'browser-sync','watch']);
