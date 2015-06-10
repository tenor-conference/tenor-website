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
    'angular-preload-image',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider, news) {
    $stateProvider
      .state('main', {
        url:'/',
        views: {
          header: {
            resolve : {
              headerInfo : function () {
                return {
                  big : 'TENOR',
                  small : 'International Conference on Technologies for Music Notation and Representation'
                };
              }
            },
            templateUrl: 'views/headers/site-heading.html',
            controller:'NormalHeaderCtrl'
          },
          content: {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('about', {
        url:'/about',
        views: {
          header: {
            resolve : {
              headerInfo : function () {
                return {
                  big : 'About TENOR'
                };
              }
            },
            templateUrl: 'views/headers/site-heading.html',
            controller:'NormalHeaderCtrl'
          },
          content: {
            templateUrl: 'views/about.html'
          }
        }
      })
      .state('conferences', {
        url:'/conferences',
        views: {
          header: {
            resolve : {
              headerInfo : function () {
                return {
                  big : 'Conferences'
                };
              }
            },
            templateUrl: 'views/headers/site-heading.html',
            controller:'NormalHeaderCtrl'
          },
          content: {
            templateUrl: 'views/conferences.html',
            controller: 'ConferencesCtrl'
          }
        }
      })
      .state('hosting', {
        url:'/hosting',
        views: {
          header: {
            resolve : {
              headerInfo : function () {
                return {
                  big : 'Hosting TENOR'
                };
              }
            },
            templateUrl: 'views/headers/site-heading.html',
            controller:'NormalHeaderCtrl'
          },
          content: {
            templateUrl: 'views/hosting.html'
          }
        }
      })
      .state('steering', {
        url:'/steering',
        views: {
          header: {
            resolve : {
              headerInfo : function () {
                return {
                  big : 'Steering Committee'
                };
              }
            },
            templateUrl: 'views/headers/site-heading.html',
            controller:'NormalHeaderCtrl'
          },
          content: {
            templateUrl: 'views/steering.html',
            controller: 'SteeringCtrl'
          }
        }
      })
      .state('mailing', {
        url:'/mailing',
        views: {
          header: {
            resolve : {
              headerInfo : function () {
                return {
                  big : 'Mailing List'
                };
              }
            },
            templateUrl: 'views/headers/site-heading.html',
            controller:'NormalHeaderCtrl'
          },
          content: {
            templateUrl: 'views/mailing.html',
            controller: 'SteeringCtrl'
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
    for (var i = 0; i < news.length; i++) {
      var item = news[i];
      $stateProvider.state('newsitem.'+item.postlink, {
        url:'/newsitems/'+item.postlink,
        templateUrl: 'views/newsitems/'+item.postlink+'.html',
        controller: item.controller // will be null if not neede
      });
    }
  });
