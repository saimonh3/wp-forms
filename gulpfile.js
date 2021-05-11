'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const { parallel } = require('gulp');
sass.compiler = require('node-sass');

const css = () => {
	return gulp.src('./assets/scss/style.scss')
		.pipe(sass())
		.pipe(cleanCss())
		.pipe(gulp.dest('./assets/dist/css'));
};

const js = () => {
	return gulp.src(['./assets/js/jquery.min.js', './assets/js/index.js'])
		.pipe(concat({ path: 'main.js', stat: { mode: 0o666 }}))
		.pipe(gulp.dest('./assets/dist/js'));
}

const watchCSS = () => gulp.watch('./assets/scss/*.scss', css);
const watchJS = () => gulp.watch('./assets/js/*.js', js);

exports.dev = parallel(watchCSS, watchJS);
exports.build = parallel(css, js);
