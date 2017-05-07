var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var site = 'app-site';
var Server = require('karma').Server;

gulp.task('sass', function () {
	gulp.src('./src/' + site + '/styles/scss/style.scss')
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
