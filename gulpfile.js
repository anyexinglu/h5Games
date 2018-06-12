/**
 * @file main.js
 * @author yxy
 */

const gulp = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');

gulp.task('compileLess', () => {
    gulp.src('css/*.less')  //编译src目录下的所有less文件
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});
gulp.task('babelJs', () => {
    gulp.src('js/*.js')
        .pipe(babel({
            // presets: ['@babel/env'],
            // plugins: ["@babel/plugin-transform-modules-amd"]
        }))
        .pipe(gulp.dest('dist/js'));
});
gulp.task('watch', () => {
    gulp.watch('js/*.js', ['babelJs']);
    gulp.watch('css/*.less', ['compileLess']);
});

gulp.task('default', ['watch', 'babelJs', 'compileLess']);
