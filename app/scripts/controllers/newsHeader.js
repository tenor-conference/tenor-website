'use strict';

/**
 * @ngdoc function
 * @name tenorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tenorApp
 */

angular.module('tenorApp')
  .controller('NewsHeaderCtrl', function ($scope, $location, data) {
    var splitloc = $location.path().split('/');
    for (var i = 0; i < data.news.length; i++) {
      if (data.news[i].postlink === splitloc[splitloc.length - 1]) {
        $scope.current = data.news[i];
      }
    }
    $scope.testHolder = true;
  });
