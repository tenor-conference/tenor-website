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
    $scope.showing = [];
    for (var i=0; i < papers2015.length; i++) {
      $scope.showing.push('NOTHING');
    }
    $scope.toAbstract = function(idx) {
      if ($scope.showing[idx] === 'ABSTRACT') {
        $scope.showing[idx] = 'NOTHING';
      } else {
        $scope.showing[idx] = 'ABSTRACT';
      }
    };
    $scope.toBibtex = function(idx) {
      if ($scope.showing[idx] === 'BIBTEX') {
        $scope.showing[idx] = 'NOTHING';
      } else {
        $scope.showing[idx] = 'BIBTEX';
      }
    };
  });
