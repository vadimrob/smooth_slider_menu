var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync'),
  	reload = browserSync.reload,
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
  	rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin');


////
// Scripts Tasks
////

gulp.task('scripts', function() {
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js', './src/js/*.js'])
      .pipe(concat('app.js'))
      .pipe(uglify())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('./dist/js/'))
      .pipe(reload({stream:true}));
});


////
// HTML Tasks
////

gulp.task('html', function() {
  return gulp.src('*.html')
  .pipe(reload({stream:true}));
});


////
// Styles Tasks
////

gulp.task('styles', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
           browsers: ['last 3 versions'],
           cascade: false
       }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(reload({stream:true}));
});


////
// Image Tasks
////

gulp.task('imagemin', () =>
    gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
);

////
// Browser-sync Tasks
////

gulp.task('browser-sync', function() {
     browserSync({
        server: {
            baseDir: "."
        }
    });
});


////
// Watch Task
////

gulp.task('watch', function(){
	   gulp.watch('./src/scss/*.scss', ['styles']);
     gulp.watch('./src/js/*.js', ['scripts']);
     gulp.watch('index.html', ['html']);
     gulp.watch('./src/image/*', ['imagemin']);
});


////
// Default Task
////

gulp.task('default', ['scripts', 'styles', 'html', 'browser-sync', 'imagemin', 'watch']);
