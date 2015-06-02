'use strict';

/**
 * @ngdoc function
 * @name tenorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tenorApp
 */

angular.module('tenorApp')
  .controller('MainCtrl', function ($scope, news, people) {
    $scope.testHolder = true;
    $scope.newsItems = JSON.parse( JSON.stringify( news ) );
    for (var i = 0; i < $scope.newsItems.length; i++) {
      var person = $scope.newsItems[i].person;
      $scope.newsItems[i].person = JSON.parse( JSON.stringify( people[person] ) );
      $scope.newsItems[i].person.name = person;
    }
  });
