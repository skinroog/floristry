let source_folder = 'source';
let build_folder = 'build';

let path = {
    source: {
        html: source_folder + '/*.html',
        sass: source_folder + '/sass/style.scss',
        js: source_folder + '/js/script.js',
        img: source_folder + '/img/**/*.{jpg,png,svg,ico}',
        fonts: source_folder + '/fonts/*'
    },
    build: {
        html: build_folder + '/',
        css: build_folder + '/css/',
        js: build_folder + '/js/',
        img: build_folder + '/img/',
        fonts: build_folder + '/fonts/'
    },
    watch: {
        html: source_folder + '/*.html',
        css: source_folder + '/sass/**/*.scss',
        js: source_folder + '/js/*.js',
        img: source_folder + '/img/'
      },
    clean: './' + build_folder + '/'
};

let gulp = require('gulp');
let {src, dest} = require('gulp');
let browsersync = require('browser-sync').create();
let del = require('del');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let clean_css = require('gulp-clean-css');
let rename = require('gulp-rename');
let fileinclude = require('gulp-file-include');
let uglify = require('gulp-uglify-es').default;
let imagemin = require('gulp-imagemin');
let webp = require('gulp-webp');
let sprite = require('gulp-svg-sprite');

function browserSync(args) {
    browsersync.init({
      server: {
        baseDir: './' + build_folder + '/'
      },
      port: 3000,
      notify: false
    });
}

function html() {
    return src(path.source.html)
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function css() {
    return src(path.source.sass)
    .pipe(
        sass({
            outputStyle: 'expanded'
        })
    )
    .pipe(
        autoprefixer({
            overrideBrowserslist: ['last 5 versions'],
            cascade: true
        })
    )
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(
        rename({
            extname: '.min.css'
        })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

function js() {
    return src(path.source.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(
        rename({
            extname: '.min.js'
        })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

function img() {
    return src(path.source.img)
    .pipe(
        webp({
          quality: 70
        })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.source.img))
    .pipe(
        imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          interlaced: true,
          optimizationLevel: 3
        })
      )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream());
}

function fonts() {
    return src(path.source.fonts)
    .pipe(dest(path.build.fonts))
    .pipe(browsersync.stream());
}

gulp.task('svgSprite', function () {
    return gulp.src([source_folder + '/img/svgsprite/*.svg'])
    .pipe(sprite({
      mode: {
        stack: {
          sprite: '../sprite.svg',
          example: true
        }
      }
    }))
    .pipe(dest(path.build.img))
});

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
}

function clean() {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(html, css, js, img, fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.watch = watch;
exports.default = watch;

exports.css = css;



