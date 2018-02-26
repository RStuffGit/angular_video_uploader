// Karma configuration
// Generated on Sat May 23 2015 16:11:32 GMT+0200 (CEST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'src/public/app/plugins/jquery.min.js',
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/public/app/plugins/jquery.ui.widget.js',
            'src/public/app/plugins/load-image.all.min.js',
            'src/public/app/plugins/canvas-to-blob.min.js',
            'src/public/app/plugins/bootstrap.min.js',
            'src/public/app/plugins/jquery.blueimp-gallery.min.js',
            'src/public/app/plugins/jquery.iframe-transport.js',
            'src/public/app/plugins/jquery.fileupload.js',
            'src/public/app/plugins/jquery.fileupload-process.js',
            'src/public/app/plugins/jquery.fileupload-image.js',
            'src/public/app/plugins/jquery.fileupload-audio.js',
            'src/public/app/plugins/jquery.fileupload-video.js',
            'src/public/app/plugins/jquery.fileupload-validate.js',
            'src/public/app/plugins/jquery.fileupload-angular.js',
            'src/public/app/app.js',
            'src/public/app/config.js',
            'src/public/app/services/*.js',
            'src/public/app/components/*.js',
            'src/public/app/views/*.html'
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/public/**/*.html': ['ng-html2js'],
            'src/**/!(*.mock|*.spec).js': ['coverage']
        },


        ngHtml2JsPreprocessor: {
            stripPrefix: "src/public",
            // create a single module that contains templates from all the files
            moduleName: 'ngTemplates'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],


        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
