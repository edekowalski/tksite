'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins');
const rimraf = require('rimraf');

const $ = plugins();
const PRODUCTION = false;

var PATHS = {
	assets: 'assets/**/*',
	js: [
		'node_modules/jquery/dist/jquery.min.js',
		"node_modules/foundation-sites/dist/js/foundation.min.js",
		"node_modules/jquery-colorbox/jquery.colorbox-min.js",
		"node_modules/jquery-touchswipe/jquery.touchswipe.min.js",
		"node_modules/prismjs/prism.js",
		"js/components/**/*.js",
		"js/*.js"
	],
	dist: '../Resources/Public/'
};

gulp.task('build',
	gulp.series(
		clean,
		gulp.parallel(sass, javascript, svg),
		copy
	)
);

gulp.task('default',
	gulp.series('build', watch)
);

function clean(done) {
	rimraf(PATHS.dist + '*', done);
}

function copy() {
	return gulp.src(PATHS.assets)
		.pipe(gulp.dest(PATHS.dist));
}

function sass() {
	return gulp.src('scss/*.scss')
		.pipe($.sourcemaps.init())
		.pipe($.sass({
			includePaths: PATHS.sass
		})
			.on('error', $.sass.logError))
		.pipe($.autoprefixer({
			browsers: [
				'last 2 versions',
				'ie >= 11',
				'ios >= 9'
			]
		}))
		.pipe($.if(!PRODUCTION, $.sourcemaps.write()))
		.pipe(gulp.dest(PATHS.dist + 'Styles'));
}

function javascript() {
	return gulp.src(PATHS.js)
		.pipe($.sourcemaps.init())
		.pipe($.if(!PRODUCTION, $.uglify()))
		.pipe($.if(!PRODUCTION, $.sourcemaps.write()))
		.pipe($.concat('app.js'))
		.pipe(gulp.dest(PATHS.dist + 'JavaScript'));
}

function svg() {
  return gulp.src('svg/**/*.svg')
    .pipe($.svgmin())
    .pipe(gulp.dest(PATHS.dist + 'Icons'));
}

function watch() {
  gulp.watch('assets/**/*', copy);
  gulp.watch('scss/**/*.scss', sass);
  gulp.watch('js/**/*.js', javascript);
  gulp.watch('svg/**/*.svg', svg);
}
