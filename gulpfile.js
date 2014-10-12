var gulp = require('gulp'),
		compass = require('gulp-compass'),
		autoprefixer = require('gulp-autoprefixer');

dev_path = {
	html: 'src/*.html',
	images: 'src/img/**',
	js: 'src/js/**',
	sass: 'src/sass/*.sass'
};

build_path = {
	html: 'build/',
	images: 'build/img/',
	js: 'build/js/',
	css: 'build/css'
};

gulp.task('html', function() {
	return gulp.src(dev_path.html)
		.pipe(gulp.dest(build_path.html));
});

gulp.task('images', function() {
	return gulp.src(dev_path.images)
		.pipe(gulp.dest(build_path.images));
});

gulp.task('js', function() {
	return gulp.src(dev_path.js)
		.pipe(gulp.dest(build_path.js));
});

// Compile sass
gulp.task('compass', function() {
	gulp.src(dev_path.sass)
	// Process with compass
	.pipe(compass({
		config_file: './config.rb',
		css: 'build/css',
		sass: 'src/sass'
	}))
	// Run autoprefixer over the resulting css
	.pipe(autoprefixer())
	// Write to .css file
	.pipe(gulp.dest(build_path.css))
});

// Watch files for changes
gulp.task('watch', function() {
	gulp.watch(dev_path.html, ['html']);
	gulp.watch(dev_path.images, ['images']);
	gulp.watch(dev_path.js, ['js']);
	gulp.watch(dev_path.sass, ['compass']);
});

// Default task
gulp.task('default', [ 'watch', 'html', 'images', 'js', 'compass' ]);
