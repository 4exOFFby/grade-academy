import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';
import squoosh from 'gulp-libsquoosh';
import svgo from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import del from 'del';
import browser from 'browser-sync';

// Styles

export const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// LeafletStyle

const minLeafletStyle = () => {
  return gulp.src('source/css/leaflet.css')
    .pipe(postcss([
      csso()
    ]))
    .pipe(rename('leaflet.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
}

// HTML

const html = () => {
  return gulp.src('source/*.html')
    .pipe(htmlmin({collapseWhiteSpace: true}))
    .pipe(gulp.dest('build'));
}

// Js

const js = () => {
  return gulp.src('source/js/*.js')
  .pipe(terser())
  .pipe(gulp.dest('build/js'));
}

// Images

const optimizeImages = () => {
  return gulp.src('source/images/**/*.{jpg,png}')
  .pipe(squoosh())
  .pipe(gulp.dest('build/images'));
}

const copyImages = () => {
  return gulp.src('source/images/**/*.{jpg,png}')
  .pipe(gulp.dest('build/images'));
}

// WebP

const converseWebP = () => {
  return gulp.src('source/images/**/*.{jpg,png}')
  .pipe(squoosh({
    webp: {}
  }))
  .pipe(gulp.dest('build/images'));
}

// svg

const svg = () => {
  return gulp.src('source/images/**/*.svg')
  .pipe(svgo())
  .pipe(gulp.dest('build/images'));
}

// sprite

const sprite = () => {
  return gulp.src('source/images/**/*.svg')
  .pipe(svgstore({
    inlinesvg: true
  }))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('build/images/svg'));
}

// copy

const copy = (done) => {
  gulp.src([
    'source/fonts/*.{woff2,woff}',
    'source/*.ico',
    'source/*.html'
  ], {
      base: 'source'
    })

    .pipe(gulp.dest('build'))
    done();
}

// Clean

const clean = () => {
  return del('build');
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Reload

const reload = (done) => {
  browser.reload();
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/js/*.js', gulp.series(js));
  gulp.watch('source/*.html', gulp.series(html, reload));
}

// Build

export const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    js,
    svg,
    sprite,
    converseWebP,
    minLeafletStyle
  ),
);

// Default

export default gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    js,
    svg,
    sprite,
    converseWebP,
    minLeafletStyle
  ),
  gulp.series (
    server,
    watcher
));





















































































// import gulp from 'gulp';
// import plumber from 'gulp-plumber';
// import less from 'gulp-less';
// import postcss from 'gulp-postcss';
// import autoprefixer from 'autoprefixer';
// import browser from 'browser-sync';

// // Styles

// export const styles = () => {
//   return gulp.src('source/less/style.less', { sourcemaps: true })
//     .pipe(plumber())
//     .pipe(less())
//     .pipe(postcss([
//       autoprefixer()
//     ]))
//     .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
//     .pipe(browser.stream());
// }

// // Server

// const server = (done) => {
//   browser.init({
//     server: {
//       baseDir: 'source'
//     },
//     cors: true,
//     notify: false,
//     ui: false,
//   });
//   done();
// }

// // Watcher

// const watcher = () => {
//   gulp.watch('source/less/**/*.less', gulp.series('styles'));
//   gulp.watch('source/*.html').on('change', browser.reload);
// }


// export default gulp.series(
//   styles, server, watcher
// );
