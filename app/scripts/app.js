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

        $urlRouterProvider.otherwise('/main');

        $stateProvider
          .state('main', {
            url: '/main',
            controller: 'MainCtrl',
            templateUrl: 'views/main.html'
          });
      }
    ]);
})();
