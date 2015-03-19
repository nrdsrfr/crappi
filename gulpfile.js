var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var lab = require('gulp-lab');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('default', function () {
    nodemon({ script: 'index.js', ext: 'js json' });
});

gulp.task('lab-test', function () {
  return gulp.src('./test/**/*.js')
      .pipe(lab({
          args: '-v -C',
          opts: {
              emitLabError: true
          }
      }));
});

gulp.task('jshint-test', function () {
    return gulp.src(['./lib/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jscs-test', function () {
  return gulp.src(['./lib/**/*.js'], ['./test/**/*.js'])
    .pipe(jscs());
});

gulp.task('coverage', function () {
  return gulp.src('./test/**/*.js')
      .pipe(lab({
          args: '-c',
          opts: {
              emitLabError: true
          }
      }));
});

gulp.task('dev-cov', function () {
  return gulp.src('./test/**/*.js')
      .pipe(lab({
          args: '-v -C --reporter html -o tests.html',
          opts: {
              emitLabError: true
          }
      }));
});

gulp.task('test', ['lab-test', 'jscs-test', 'jshint-test']);