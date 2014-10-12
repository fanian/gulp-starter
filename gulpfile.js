var gulp = require('gulp'),
		compass = require('gulp-compass'),
		path = require('path');

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

gulp.task('compass', function() {
	gulp.src('src/sass/**/*.{sass,scss}')
		.pipe(compass({
			project: path.join(__dirname, '/'),
			css: 'build/css',
			sass: 'src/sass',
			image: 'src/img',
			style: 'compact', //The output style for the compiled css. Nested, expanded, compact, or compressed.
			comments: false,
			relative: false,
		}))
		// .pipe(livereload(server))
		// .pipe(notify({message: 'Compass task complete'}));
});

// Отслеживаем изменения в файлах
gulp.task('watch', function() {
	gulp.watch(dev_path.html, ['html']);
	gulp.watch(dev_path.images, ['images']);
	gulp.watch(dev_path.sass, ['compass']);
});

// Действия по умолчанию
gulp.task('default', [ 'watch', 'compass' ]);
