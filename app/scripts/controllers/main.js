'use strict';

/**
 * @ngdoc function
 * @name tenorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tenorApp
 */

angular.module('tenorApp')
  .controller('MainCtrl', function ($scope, data) {
    $scope.testHolder = true;
    $scope.newsItems = data.news;
  });
