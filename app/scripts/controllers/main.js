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
    $scope.newsItemsFiltered = $scope.newsItems.slice(0,3);
    $scope.moreOrLess = 'More news &rarr;';
    $scope.showingLess = true;
    $scope.actOnNews = function() {
      if ($scope.showingLess) {
        $scope.newsItemsFiltered = $scope.newsItems.slice();
        $scope.moreOrLess = '&larr; Less news';
        $scope.showingLess = false;
      } else {
        $scope.newsItemsFiltered = $scope.newsItems.slice(0,3);
        $scope.moreOrLess = 'More news &rarr;';
        $scope.showingLess = true;
      }
      $('body').focus();
    };
  });
