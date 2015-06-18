require
module.exports = function(config){
  'use strict';
  config.set({

    basePath : './',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'templates/**/*.html',
      'specs/**/*.js'
    ],

    preprocessors : {
      'templates/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      cacheIdFromPath: function(filepath) {
        return filepath;
      },
      // setting this option will create only a single module that contains templates
      // from all the files, so you can load them all with module('foo')
      moduleName: 'templates'
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : [
    'PhantomJS'
    ],

    plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
            ],

  });
};
