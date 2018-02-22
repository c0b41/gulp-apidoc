var gulp = require('gulp'),
    apidoc = require('./index.js');

gulp.task('apidoc', done => {
    apidoc({ src: './example', dest: './build'}, done);
});


gulp.task('default',
    gulp.parallel('apidoc')
);