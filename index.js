var PluginError = require('plugin-error');
var log = require('fancy-log');
var colors = require('ansi-colors');
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
	    	log(pname+' '+ colors.green('Apidoc created...   [  '+ colors.cyan(JSON.parse(chunk.project).name) +'  ] '));
			done();
		} else if(chunk === true){
			log(pname+' '+colors.green('Apidoc created... '));
			done();
		}else{
			done(new PluginError(pname, 'Execution terminated (set \" debug: true \" in gulpfile.js for details. '))
		}

	}else{
		done(new PluginError(pname, 'Folder specified'));
	}
}
