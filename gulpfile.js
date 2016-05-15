var gulp = require('gulp'),
    apidoc = require('./index.js');

gulp.task('default',function(done){
    apidoc([
        {
          src:'./example',
          dest:'./build',
          silent:true
        },
        {
          src:'./example2',
          dest:'./build2',
          silent:true
        }
    ],done);
});
