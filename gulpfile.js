var gulp = require('gulp');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var Server = require('karma').Server;

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
