'use babel'

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const $ = gulpLoadPlugins();

gulp.task('sass', () => {
  return gulp.src('src/sass/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer({browsers: ['last 5 versions']})
    ]))
    .pipe($.sourcemaps.write())
    .pipe($.size({title: 'css'}))
    .pipe(gulp.dest('.tmp'))
});

gulp.task('optimize', () => {
  return gulp.src('.tmp/*.css')
    .pipe($.plumber())
    .pipe($.postcss([
      cssnano()
    ]))
    .pipe($.size({title: 'css.min'}))
    .pipe(gulp.dest('dist'))
});

gulp.task('clean', del.bind(null, ['.tmp','dist']));

gulp.task('watch', ['sass'], () => {
  gulp.watch('src/styles/**/*.scss', ['sass']);
});

gulp.task('build', ['sass'], () => {
  gulp.start('optimize');
});

gulp.task('default', ['build'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('dist', ['clean'], () => {
  gulp.start('default');
});
