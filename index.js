'use strict';

var gutil = require('gulp-util');
var apidoc = require('apidoc');

module.exports = {
	exec: function(opt) {
		var options = opt || {};

		options.src = opt.src || opt.i;
		options.dest = options.dest || options.o || 'doc/';
		options.template = opt.template || opt.t;

		if(options.src) {
			var chunk = apidoc.createDoc(options);

			if(typeof chunk === 'object') {
				gutil.log('gulp-apidoc:', gutil.colors.green('Apidoc created...   [  '+ JSON.parse(chunk.project).name ) +'  ] ');
			} else {
				throw new gutil.PluginError('gulp-apidoc', 'Execution terminated (set \" debug: true \" in gulpfile.js for details. ')
			}

		} else {
			throw new gutil.PluginError('gulp-apidoc', 'folder specified');
		}
	}
};
