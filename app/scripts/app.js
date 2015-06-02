'use strict';

/**
 * @ngdoc overview
 * @name tenorApp
 * @description
 * # tenorApp
 *
 * Main module of the application.
 */
angular
  .module('tenorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider, dataProvider) {
    $stateProvider
      .state('main', {
        url:'/',
        views: {
          header: {
            templateUrl: 'views/headers/site-heading.html'
          },
          content: {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('newsitem',{
        views: {
          header: {
            templateUrl: 'views/headers/post-heading.html',
            controller: 'NewsHeaderCtrl'
          },
          content: {
            abstract:true,
            templateUrl: 'views/newsitems/newsitem.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/');

    // automatically creates URIs for blog posts
    for (var i = 0; i < dataProvider.data.news.length; i++) {
      var item = dataProvider.data.news[i];
      $stateProvider.state('newsitem.'+item.postlink, {
        url:'/newsitems/'+item.postlink,
        templateUrl: 'views/newsitems/'+item.postlink+'.html',
        controller: item.controller // will be null if not neede
      });
    }
  });
