const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

const paths = {
  js: {
    src: ['src/**/*.js', '!src/**/*.test.js', '!src/**/__snapshots__'],
    dest: 'dist'
  },
  tsd: {
    src: 'src/**/*.d.ts',
    dest: 'dist'
  },
  misc: {
    src: ['package.json', 'LICENSE', 'README.md'],
    dest: 'dist'
  }
};
const clean = () => {
  return del(['dist']);
};
const js = () => {
  return gulp
    .src(paths.js.src)
    .pipe(babel())
    .pipe(gulp.dest(paths.js.dest));
};
const misc = () => {
  return gulp.src(paths.misc.src).pipe(gulp.dest(paths.misc.dest));
};
const tsd = () => {
  return gulp.src(paths.tsd.src).pipe(gulp.dest(paths.tsd.dest));
};
const build = gulp.series(clean, gulp.parallel(gulp.parallel(js, tsd), misc));

exports.build = build;
