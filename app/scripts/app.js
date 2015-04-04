(function(){
  'use strict';

  /**
   * @ngdoc overview
   * @name tskmngrApp
   * @description
   * # tskmngrApp
   *
   * Main module of the application.
   */
  angular
    .module('tskmngrApp', [
      'ngResource',
      'ngAnimate',
      'ui.router',
      'angular-growl'
    ])
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      '$httpProvider',
      function ($stateProvider, $urlRouterProvider, $httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        $httpProvider.defaults.withCredentials = true;

        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('layout', {
            url: '/',
            views: {
              '@' : {
                templateUrl: 'views/layout.tpl.html',
                controller: 'MainCtrl'
              },
              'week@layout' : { templateUrl: 'views/week.tpl.html'},
              'tasks@layout' : { templateUrl: 'views/tasks.tpl.html'}
            },
          })
        }
    ]);
})();
