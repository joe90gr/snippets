var gulp = require('gulp');
var sass = require('gulp-sass');
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

gulp.task('default', [ 'test', 'sass' ]);
gulp.task('build', [ 'sass' ]);
