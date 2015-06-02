'use strict';

/**
 * @ngdoc function
 * @name tenorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tenorApp
 */

angular.module('tenorApp')
  .controller('NewsHeaderCtrl', function ($scope, $location, news) {
    var splitloc = $location.path().split('/');
    for (var i = 0; i < news.length; i++) {
      if (news[i].postlink === splitloc[splitloc.length - 1]) {
        $scope.current = news[i];
      }
    }
    $scope.testHolder = true;
  });
