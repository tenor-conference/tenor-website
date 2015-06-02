'use strict';

/**
 * @ngdoc function
 * @name tenorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tenorApp
 */

angular.module('tenorApp')
  .controller('NormalHeaderCtrl', function ($scope, $location, headerInfo) {
    $scope.testHolder = true;
    $scope.current = headerInfo;
  });
