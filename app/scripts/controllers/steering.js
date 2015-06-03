'use strict';

/**
 * @ngdoc function
 * @name tenorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tenorApp
 */

angular.module('tenorApp')
  .controller('SteeringCtrl', function ($scope, people, imageURLs) {
    $scope.people = [];
    for (var person in people) {
      if (people[person].steering) {
        var entry = JSON.parse( JSON.stringify( people[person] ) );
        entry.img = imageURLs[person];
        $scope.people.push(entry);
      }
    }
  });
