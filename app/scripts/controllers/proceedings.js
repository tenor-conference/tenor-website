'use strict';

/**
 * @ngdoc function
 * @name tenorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tenorApp
 */

angular.module('tenorApp')
  .controller('ProceedingsCtrl', function ($scope, papers2015) {
    $scope.papers2015 = papers2015;
  });
