var gulp = require('gulp');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var sass = require('gulp-sass');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var Server = require('karma').Server;

gulp.task('sass', function () {
	gulp.src('./public/styles/scss/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/styles'));
});

gulp.task('test', function (done) {
	new Server({
		configFile: __dirname + '/karma.conf.js'
	}, done).start();
});

gulp.task('browserify', function () {
	return browserify([ './public/js/app.js' ], { debug: true, extensions: [ '.jsx' ] })
		.transform(babelify, { presets: [ 'es2015', 'react' ], sourceMaps: false })
		.bundle()
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./public/js'));
});

gulp.task('default', [ 'test', 'sass', 'browserify' ]);
gulp.task('build', [ 'sass', 'browserify' ]);
