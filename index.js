'use strict';

var gutil = require('gulp-util');
var apidoc = require('apidoc');

module.exports ={
	exec:function(opt) {
		var options = opt || {};

		options.src = opt.src || opt.i ;
		options.dest = options.dest || options.o || "doc/";

		if(options.src){

		var countFiles = apidoc(options);	

			if(typeof countFiles === "number"){
				gutil.log('gulp-apidoc:', gutil.colors.green(countFiles) + gutil.colors.gray(' file by reading the file was created '));
				
			}else{
				throw new gutil.PluginError('gulp-apidoc', 'Execution terminated (set \" debug: true \" in gulpfile.js for details. ')
			}

		
		}else{

			 throw new gutil.PluginError('gulp-apidoc', 'folder specified');

		}

		

	}
};