var cssFilesToInject = [
  'bower/bootstrap/dist/css/bootstrap.min.css',
  'bower/font-awesome/css/font-awesome.min.css',
  'bower/wow/css/libs/animate.css',
  'styles/**/*.css'
];

var jsFilesToInject = [
  'js/dependencies/sails.io.js',
  'bower/jquery/dist/jquery.min.js',
  'bower/bootstrap/dist/js/bootstrap.min.js',
  'bower/angular/angular.js',
  'bower/ngmap/build/scripts/ng-map.js',
  'bower/wow/dist/wow.min.js',
  'app/app.js',
  'app/employeeController.js',
  'app/wow.js'
];

var templateFilesToInject = [
  'templates/**/*.html'
];

var tmpPath = '.tmp/public/';

module.exports.cssFilesToInject = cssFilesToInject.map(function(cssPath) {
  if (cssPath[0] === '!') {
    return require('path').join('!.tmp/public/', cssPath.substr(1));
  }
  return require('path').join('.tmp/public/', cssPath);
});

module.exports.jsFilesToInject = jsFilesToInject.map(function(jsPath) {
  if (jsPath[0] === '!') {
    return require('path').join('!.tmp/public/', jsPath.substr(1));
  }
  return require('path').join('.tmp/public/', jsPath);
});

module.exports.templateFilesToInject = templateFilesToInject.map(function(tplPath) {
  if (tplPath[0] === '!') {
    return require('path').join('!assets/', tplPath.substr(1));
  }
  return require('path').join('assets/',tplPath);
});


