var gulp = require('gulp'),
		compass = require('gulp-compass');

dev_path = {
	html: 'src/*.html',
	images: 'src/img/**',
	js: 'src/js/**',
	sass: 'src/sass/**'
};

build_path = {
	html: 'build/',
	images: 'build/img/',
	js: 'build/js/',
	css: 'build/css/'
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

gulp.task('compass', function() {
	gulp.src('./src/sass/**/*.{sass,scss}')
	.pipe(compass({
		config_file: './config.rb',
		css: 'build/css',
		sass: 'src/sass'
	}))
});

// Отслеживаем изменения в файлах
gulp.task('watch', function() {
	gulp.watch(dev_path.html, ['html']);
	gulp.watch(dev_path.images, ['images']);
	gulp.watch(dev_path.js, ['js']);
	gulp.watch(dev_path.sass, ['compass']);
});

// Действия по умолчанию
gulp.task('default', [ 'watch', 'html', 'images', 'js', 'compass' ]);
