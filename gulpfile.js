import gulp from 'gulp';
import concat from 'gulp-concat';
import cssnano from 'gulp-cssnano';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import fileinclude from 'gulp-file-include';
import imagemin from 'gulp-imagemin';

const CSS_SOURCES = ['routes/*.css', 'widgets/*.css', 'utility/*.css']
const JS_SOURCES = ['widgets/*.js']
const HTML_ROUTES = ['routes/*.html']
const HTML_SOURCES = [...HTML_ROUTES, 'widgets/*.html']
const IMAGES = ['images/*.png', 'images/icons/*.png', 'images/photos/*.png', 'images/portfolio/*.png']

function cssTask() {
    return gulp.src(CSS_SOURCES)
        .pipe(concat('style.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));
}

function jsTask() {
    return gulp.src(JS_SOURCES)
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
}

function htmlTask() {
    return gulp.src(HTML_ROUTES)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@root'
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
}

function imageTask() {
    return gulp.src(IMAGES, { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest('dist'));
}

function watchTask() {
    gulp.watch(CSS_SOURCES, cssTask);
    gulp.watch(JS_SOURCES, jsTask);
    gulp.watch(HTML_SOURCES, htmlTask);
    gulp.watch(IMAGES, imageTask); // Watch for changes in images
}

export default gulp.parallel(cssTask, jsTask, htmlTask, imageTask);
export function watch() { watchTask(); }
