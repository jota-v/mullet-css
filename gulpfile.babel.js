'use babel'

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const $ = gulpLoadPlugins();

gulp.task('styles', () => {
  return gulp.src('src/sass/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer({browsers: ['> 1%']})
    ]))
    .pipe($.sourcemaps.write())
    .pipe($.size({title: 'css'}))
    .pipe(gulp.dest('dist'))
});

gulp.task('minify',['styles'], () => {
  return gulp.src('dist/*.css')
    .pipe($.plumber())
    .pipe($.postcss([
      cssnano()
    ]))
    .pipe($.rename({
      suffix: ".min"
    }))
    .pipe($.size({title: 'css.min'}))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['styles'], () => {
  gulp.watch('src/styles/**/*.scss', ['styles']);
});

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('default', ['clean'], () => {
  gulp.start('minify');
});
