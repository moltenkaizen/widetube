const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const sourcemaps = require('gulp-sourcemaps')
const plumber = require('gulp-plumber')
const babel = require('gulp-babel')
const gulpStylelint = require('gulp-stylelint')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const paths = {
  source: {
    scripts: [
      'src/js/main.js'
    ],
    styles: [
      'src/scss/style.scss'
    ],
    markup: [
      'src/index.html'
    ]
  },
  target: {
    scripts: 'build/js',
    styles: 'build/css',
    sourcemaps: './maps',
  }
}

gulp.task('serve', ['styles', 'markup', 'scripts'], ()  => {

  browserSync.init({
    server: {
      baseDir: 'build',
      index: 'index.html'
    },
    notify: false
  })

  gulp.watch(paths.source.styles, ['styles'])
  gulp.watch(paths.source.scripts, ['scripts'])
  gulp.watch(paths.source.markup, ['markup'])
    .on('change', reload)
})

gulp.task('markup', () => {
  gulp.src(paths.source.markup)
    .pipe(plumber())
    .pipe(gulp.dest('./build'))
    .pipe(reload({stream: true}))
})

gulp.task('styles', () => {
  gulp.src(paths.source.styles)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(autoprefixer({browsers: ['last 2 versions', '> 1%', 'Firefox ESR']}))
    .pipe(cssnano())
    .pipe(sourcemaps.write(paths.target.sourcemaps))
    .pipe(gulp.dest(paths.target.styles))
    .pipe(reload({stream: true}))
})

gulp.task('scripts', () => {
  gulp.src(paths.source.scripts)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write(paths.target.sourcemaps))
    .pipe(gulp.dest(paths.target.scripts))
    .pipe(reload({stream: true}))
})

gulp.task('lint-css', ()  => {
  gulp.src(paths.source.styles)
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }))
})

gulp.task('default', ['markup', 'scripts', 'styles'])
