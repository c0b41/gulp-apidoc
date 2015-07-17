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

gulp.task('apidoc', function(){
          apidoc.exec({
            src: "example/",
            dest: "build/"
          });
});
```

With options:

```js
var gulp = require('gulp'),
    apidoc = require('gulp-apidoc');

gulp.task('apidoc',function(){
              apidoc.exec({
	              src: "example/",
                  dest: "build/",
                  template: "template/",
                  debug: true,
                  includeFilters: [ ".*\\.js$" ]
              });
});
```

Other options [checkout](https://github.com/apidoc/apidoc/blob/master/lib/apidoc.js#L15).


## API

### apidoc(options)


#### options.src

Type: `String`


#### options.dest

Type: `String`
Default: `doc/`

#### options.template

Type: `String`

#### options.debug

Type: `Boolean`
Default: `false`

#### options.log

Type: `Boolean`
Default: `true`

#### options.includeFilters

Type: `Array`
Default: `[]`
