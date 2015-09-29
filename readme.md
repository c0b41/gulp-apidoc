# [gulp](https://github.com/gulpjs/gulp)-apidoc [![Build Status](https://img.shields.io/david/ayhankuru/gulp-apidoc.svg?style=flat-square)](https://david-dm.org/ayhankuru/gulp-apidoc)


> Generates a RESTful web API Documentation.
  Documentation at [apidocjs.com](http://apidocjs.com/)

Uses the [apidoc](https://github.com/apidoc/apidoc) library.

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

gulp.task('apidoc',function(){
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


## API

### apidoc(options)


#### options.src

Type: `String`


#### options.dest

Type: `String`
Default: `doc/`

#### options.template

Type: `String`

#### options.config

Type: `String`
Default: `options.src`

#### options.debug

Type: `Boolean`
Default: `false`

#### options.silent

Type: `Boolean`
Default: `true`

#### options.includeFilters

Type: `Array`
Default: `[]`
