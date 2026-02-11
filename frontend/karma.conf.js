// Karma configuration file, see link for more information
// https://karma-runner.github.io/6.4/config/configuration-file.html

const { default: devServer } = require('@angular-devkit/build-angular/src/dev-server/index.js');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      devServer
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        booters: ['fail'],
        random: false
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/to-do'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'], // or 'ChromeHeadless' for headless mode
    singleRun: false, // set to true for CI environments
    restartOnFileChange: true,
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    files: [
      'src/test.ts'
    ],
    proxies: {
      '/graphql': { target: 'http://localhost:4200' }
    }
  });
};