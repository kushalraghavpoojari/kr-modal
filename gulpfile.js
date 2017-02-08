var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var minifyHtml = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var del = require('del');

gulp.task('clean-styles', function(){
  del('dist/styles/*.css');
});
gulp.task('clean', function(){
  del('dist');
});

gulp.task('minify-css',['clean-styles'], function() {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('kr-modal-styles.min.css'))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('templatecache', function() {
  var tempCacheOptions = {
    file: 'template.js',
    options: {
      module:'kr-modal',
      standAlone: false
    }
  };
  return gulp
        .src('modal/modal-dialog.directive.html')
        .pipe(minifyHtml({empty: true}))
        .pipe(templateCache(tempCacheOptions.file,
                  tempCacheOptions.options))
        .pipe(gulp.dest('dist/temp'));
});

gulp.task('uglify', function() {
  return gulp
          .src('js/modal-dialog.directive.js')
          .pipe(uglify())
          .pipe(rename('modal.js'))
          .pipe(gulp.dest('dist/temp'));
});

gulp.task('concat',['templatecache','uglify'],function() {
  return gulp
          .src('dist/temp/*.js')
          .pipe(concat('kr-modal.min.js'))
          .pipe(gulp.dest('dist/js'));
});
