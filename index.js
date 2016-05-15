'use strict';

var gutil = require('gulp-util');
var objectAssign = require('object-assign');
var apidoc = require('apidoc');
var pname = require('./package.json').name;

module.exports = function(opt,done) {

	var _opt = objectAssign({
		dest: opt.dest || opt.o || 'doc/',
		config: opt.config || opt.c || opt.src,
		src: opt.src || opt.i
		},
		opt);

	if(_opt.template || _opt.t){
		_opt.template =  _opt.template || _opt.t;
	}


	if(_opt.src){

		var chunk = apidoc.createDoc(_opt);

		if(typeof chunk === 'object') {
	    	gutil.log(pname, gutil.colors.green('Apidoc created...   [  '+ gutil.colors.cyan(JSON.parse(chunk.project).name) +'  ] '));
			done();
		} else if(chunk === true){
				gutil.log(pname, gutil.colors.green('Apidoc created... '));
				done();
		}else{
				done(new gutil.PluginError(pname, 'Execution terminated (set \" debug: true \" in gulpfile.js for details. '))
		}

	}else{
			done(new gutil.PluginError(pname, 'Folder specified'));
	}

}
