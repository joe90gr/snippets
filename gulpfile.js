var gulp = require('gulp');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('browserify', function() {
	return browserify(['./dev/public/javascripts/app/app.js'], {debug: true})
		.transform(babelify)
		.bundle()
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dev/public/javascripts'));
});

gulp.task('watch', function() {
	watch('./dev/public/javascripts/examples.js', function() {
		gulp.start('browserify');
	});
});


gulp.task('default', ['browserify', 'watch']);
