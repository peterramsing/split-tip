var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var webpack     = require ('webpack-stream')

gulp.task('js', function() {
    return gulp.src('src/app.module.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('build/'));
});



// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
