'use strict';

// sass compile
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var connect = require('gulp-connect');

//*** Localhost server tast
gulp.task('localhost', function() {
  connect.server();
});

gulp.task('localhost-live', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('sass', function () {

	gulp.src('./sass/bootstrap.scss')
	.pipe(sass())
	.pipe(gulp.dest('./plugins/bootstrap'));

});

//*** SASS watch(realtime) compiler task
//gulp.task('sass:watch', function () {
//	gulp.watch('./sass/**/*.scss', ['sass']);
//});

//*** CSS & JS minify task
gulp.task('minify', function () {
    // css minify 
    gulp.src(['./plugins/bootstrap/*.css','!./plugins/bootstrap/*.min.css'])
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./plugins/bootstrap/'));
    
    gulp.src(['./css/*.css','!./css/*.min.css'])
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css/'));
    
    gulp.src(['./css/ace/*.css','!./css/ace/*.min.css'])
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css/ace/'));
    
    //js minify
    gulp.src(['./js/*.js','!./js/*.min.js'])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./js'));
    
     gulp.src(['./js/ace/*.js','!./js/ace/*.min.js'])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./js/ace'));

});

//*** default
gulp.task('default',['sass','minify'], function() {
  // 将你的默认的任务代码放在这
});