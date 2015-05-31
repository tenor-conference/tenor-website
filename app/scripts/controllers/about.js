'use strict';

/**
 * @ngdoc function
 * @name tenorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tenorApp
 */
angular.module('tenorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
