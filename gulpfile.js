const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


function styles() {
    return gulp.src('./portfolio/src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./portfolio/dist/css'));
}

function images() {
    return gulp.src('./portfolio/src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./portfolio/dist/images'));
}


exports.default = gulp.parallel(styles, images);
exports.watch = function(){
    gulp.watch('./portfolio/src/styles/*.scss', gulp.parallel(styles))
}