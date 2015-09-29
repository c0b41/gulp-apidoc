'use strict';

var gutil = require('gulp-util');
var _  = require('lodash');
var apidoc = require('apidoc');
var pname = require('./package.json').name;

module.exports = function(opt,done) {

	var _opt = _.extend({dest: 'doc/',o:'doc/',silent:true},opt);

	_opt.src = _opt.src || _opt.i;
	_opt.dest = _opt.dest || _opt.o ;
  _opt.config = _opt.config || _opt.c || _opt.src;
	_opt.template =  _opt.template || _opt.t;

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
			done(new gutil.PluginError(pname, 'folder specified'));
	}

}
