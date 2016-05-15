var gulp = require('gulp'),
    apidoc = require('./index.js');

gulp.task('default',function(done){
    apidoc({
      src:'./example',
      dest:'./build',
      debug:true,
    },done);
});
