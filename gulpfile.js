/*
* @Author: inksmallfrog
* @Date:   2017-04-20 22:41:36
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-20 22:43:48
*/

'use strict';
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();
gulp.task('sass', function(){
    return gulp.src('./sass/*.scss')
                .pipe($.sass())
                .pipe(gulp.dest('./css'))
});
gulp.task('default',function() {
    gulp.start('sass');
});