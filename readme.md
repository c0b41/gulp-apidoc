# [gulp](https://github.com/gulpjs/gulp)-apidoc 


![npm-version](https://img.shields.io/npm/v/gulp-apidoc.svg)
![download-count](https://img.shields.io/npm/dm/gulp-apidoc.svg)
![dev-deps](https://david-dm.org/c0b41/gulp-apidoc.svg)


Generates a RESTful web API Documentationusing the [apidoc](https://github.com/apidoc/apidoc) library.

## How It Works
`/path/api/stuff.js`:
```js
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
```


## Install

Install with [npm](https://npmjs.org/package/gulp-apidoc)

```
npm install --save-dev gulp-apidoc
```


## Usage

```js
var gulp = require('gulp'),
    apidoc = require('gulp-apidoc');

gulp.task('apidoc', function(done){
          apidoc({
            src: "example/",
            dest: "build/"
          },done);
});
```

With options:

```js
var gulp = require('gulp'),
    apidoc = require('gulp-apidoc');

gulp.task('apidoc',function(done){
              apidoc({
	              src: "example/",
                  dest: "build/",
                  template: "template/",
                  debug: true,
                  includeFilters: [ ".*\\.js$" ]
              },done);
});
```

Other options [checkout](https://github.com/apidoc/apidoc/blob/master/lib/index.js#L14-L21).


## Options


#### options.src

The folder to scan for apidoc documentation.

Type: `String`


#### options.dest

The folder where to output the generated files.

Type: `String`
Default: `doc/`

#### options.template

Custom template to use for the output files.

Type: `String`

#### options.config

Type: `String`
Default: `options.src`

#### options.debug

Type: `Boolean`
Default: `false`

#### options.silent

Type: `Boolean`
Default: `false`

#### options.verbose

Type: `Boolean`
Default: `false`

#### options.simulate

Type: `Boolean`
Default: `false`

#### options.includeFilters

Type: `Array`
Default: `[]`
