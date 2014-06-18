/*!
 * Bootstrap's Gruntfile
 * http://getbootstrap.com
 * Copyright 2013-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

	less: {
	  development: {
	    files: {
	      "src/assets/compiled.css": "src/less/main.less"
	    }
	  }
	},
	watch: {
	  less: {
	    files: ['src/less/*.less'],
	    tasks: ['less'],
	    options: { livereload: true }
	  },
	  others: {
		  files: ['src/*.html', 'src/assets/**/*'],
		  options: { livereload: true }
	  }
	}
  });
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
}