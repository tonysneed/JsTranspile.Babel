# Transpiling JavaScript ES6 to ES5 using Babel and Gulp

## Prerequisites

1. Install Node from [nodejs.org](http://nodejs.org).

	- Also verify that **Git** is installed.
	
2. Install **Definitely Typed**.

	```shell
	npm install tsd -g
	```

3. Install **gulp**.

	```shell
	npm install gulp -g
	```

4. Download `.gitignore` file.

	```shell
	curl https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore -o .gitignore
	```

5. Add a `license.md` file.

	- Paste license text: `http://choosealicense.com/licenses/mit`

## Setup

1. Install packages.

	```shell
	npm install --save-dev babel-core babel-preset-es2015 gulp gulp-babel gulp-plumber gulp-sourcemaps
	```

2. Add a `.babelrc` file.

	```json
	{
	"presets": ["es2015"]
	}
	```
	
3. Add `gulpfile.js` to the project with the following content:

	```js
	var gulp = require('gulp'),
		plumber = require('gulp-plumber'),
		bable = require('gulp-babel'),
		sourcemaps = require('gulp-sourcemaps'),
		es6Path = 'es6/*.js',
		compilePath = 'es5';
	
	gulp.task('babel', function () {
		return gulp.src([es6Path])
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(bable())
			.pipe(sourcemaps.write('../maps'))
			.pipe(gulp.dest(compilePath));
	});
	
	gulp.task('watch', function() {
	
		gulp.watch([es6Path], ['babel']);
	
	});
	```
	
4. Add a `jsconfig.json` file to the `es6` folder.
	- This will remove compile errors for the ES6 files.

	```json
	{
		"compilerOptions": {
			"target": "ES6"
		}
	}
	```
	
5. Configure the Task Runner.
	- This will run the `babel` task when pressing Cmd+Shift+B

	```json
	{
		"version": "0.1.0",
		"command": "gulp",
		"isShellCommand": true,
		"args": [
			"--no-color"
		],
		"tasks": [
			{
				"taskName": "babel",
				"isBuildCommand": true
			}
		]
	}
	```
		
## Write ES6 Code

1. Add js files to ef6 folder
	- Use ES6 syntax
	
2. Press Cmd+Shift+B to transpile ES6 to ES6.

3. Run the `watch` task to run the `babel` task when changing an ES6 file.

