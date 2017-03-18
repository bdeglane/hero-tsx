const gulp = require('gulp');
const webserver = require('gulp-webserver');

// simple webserver
gulp.task('server', function () {
    gulp.src('./src/static/')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: 'http://localhost:8081/',
            port: 8081,
            fallback: 'index.html'
        }));
});