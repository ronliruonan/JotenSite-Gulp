const gulp = require('gulp')
const fileinclude = require('gulp-file-include')
const broswer = require('browser-sync').create()

gulp.task('default', ['copy_js', 'copy_content', 'fileinclude','serve'], function () {
    console.log('ron')
})
// gulp.task('watch', ['fileinclude'], function () {
//     gulp.watch(['src/**.html', 'src/template/**.html'], 'fileinclude')
// })
gulp.task('serve', function () {
    broswer.init({
        server: {
            baseDir: 'dist'
        },
        port: 8000
    });
    gulp.watch('src/**.html', ['fileinclude']).on('change', broswer.reload)
})

gulp.task('fileinclude', function () {
    gulp.src(['src/**.html', 'src/template/**.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('copy_content', function () {
    return gulp.src('src/content/**/*')
        .pipe(gulp.dest('dist/content/'))
})
gulp.task('copy_js', function () {
    return gulp.src('src/js/**/*')
        .pipe(gulp.dest('dist/js/'))
})
