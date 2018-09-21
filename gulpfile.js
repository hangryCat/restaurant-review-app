var gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('default', defaultTask);
gulp.task('html', htmlTask);
gulp.task('styles', stylesTask);
gulp.task('js', javaScriptTask);

function defaultTask(done) {
  gulp.watch('./**/*.html', gulp.series('html'));
  gulp.watch('css/**/*.css', gulp.series('styles'));
  gulp.watch('js/**/*.js', gulp.series('js'));

  browserSync.init({
    port: 8000,
    server: './'
  });
  done();
}

function htmlTask(done) {
  gulp.src('./**/*.html')
    .pipe(browserSync.stream());
  done();
}

function stylesTask(done) {
  gulp.src('css/**/*.css')
    browserSync.reload();
  done();
}

function javaScriptTask(done) {
  gulp.src('js/**/*.js')
    .pipe(browserSync.stream());
  done();
}
