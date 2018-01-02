
const GULP = require('gulp');
const BABEL = require('gulp-babel');

GULP.task('transpile', () => {
    let jsSrc = 'src/*.js';
    return GULP.src(jsSrc)
            .pipe(BABEL())
            .pipe(GULP.dest('dist'));
});

GULP.task('watch',  () => {
    let jsSrc = 'src/*.js';
    GULP.watch(jsSrc, ['transpile']);
});

GULP.task('default', ['transpile', 'watch']);