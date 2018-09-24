var gulp = require('gulp'),
    apidoc = require('./index.js');

gulp.task('apidoc', done => {
    apidoc({ src: './example/exam1', dest: './build'}, done);
});

gulp.task('multiple', done => {
    apidoc({ src: ['./example/exam1', './example/exam2'], dest: './build', debug:true }, done)
});


gulp.task('default',
    gulp.parallel('apidoc')
);