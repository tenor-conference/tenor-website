'use strict';

/**
 * @ngdoc function
 * @name tenorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tenorApp
 */

angular.module('tenorApp')
  .controller('ConferencesCtrl', function ($scope, imageURLs) {
    $scope.conferences = [
      {
        year : '2016',
        tag : 'Cambridge',
        img : imageURLs['Cambridge'],
        cwebsite: 'http://tenor2016.tenor-conference.org'
      },
      {
        year : '2015',
        tag : 'Paris',
        img : imageURLs['Paris'],
        cwebsite:'http://tenor2015.tenor-conference.org',
        pwebsite:'http://tenor2015.tenor-conference.org'
      }
    ];
  });
