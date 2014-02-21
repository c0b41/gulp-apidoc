var gulp = require('gulp'),
    apidoc = require('./index.js');

gulp.task('default', apidoc.exec({
		src: "example/",
        dest: "build/",
}));