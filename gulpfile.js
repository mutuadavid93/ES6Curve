const GULP = require('gulp');
const BABEL = require('gulp-babel');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    babelify = require('babelify'),
    browserify = require("browserify");

GULP.task('transpile', () => {
    let jsSrc = 'src/*.js';
    return GULP.src(jsSrc)
        .pipe(BABEL())
        .pipe(GULP.dest('dist'));
        //.pipe(connect.reload());
});

GULP.task('modulify', () => {
    browserify({
        entries: 'src/main_module.js',
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('main_module.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(GULP.dest('./dist'));
//    .pipe(connect.reload());
});

GULP.task('connect', () => {
    connect.server({
        root: '.',
        livereload: false
    });
});

GULP.task('watch',  () => {
    let jsSrc = 'src/*.js';
    GULP.watch(jsSrc, ['transpile']);
    GULP.watch('src/*_module.js', ['modulify']);
});

GULP.task('default', ['transpile', 'modulify','watch']);