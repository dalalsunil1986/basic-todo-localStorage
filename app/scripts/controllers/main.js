(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name tskmngrApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the tskmngrApp
   */
  angular.module('tskmngrApp')
    .controller('MainCtrl', [
      'growl',
      '$scope',
      function (growl, $scope) {

        // get day of the $scope.week
        $scope.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // get the # in the array for today
        var d = new Date().getDay();

        $scope.dayOfWeek = $scope.daysOfWeek[d];

        $scope.week = JSON.parse(localStorage.getItem('localStorageWeek')) || [];    
        $scope.today = $scope.week[d] || [];

        console.log('today:', $scope.today);

        $scope.newTask = { completed: false, title: '' };
        console.log('week:', $scope.week);


        function saveToLocalStorage() {
          localStorage.setItem('localStorageWeek', angular.toJson($scope.week));
        }
        
        $scope.toggle = function () {
          $scope.toggleIt = !$scope.toggleIt;
        };

        $scope.updateStatus = function (id) {
          $scope.today[id].completed = !$scope.today[id].completed;

          $scope.week[d] = $scope.today;
          console.log('today: ', $scope.week[d]);

          if($scope.today[id].completed){
            growl.addSuccessMessage('Task Completed', {ttl: 3000});
            
          }else{
            growl.addWarnMessage('Task Uncomplete', {ttl: 3000});
          }
          
          saveToLocalStorage();
        };

        $scope.submitTodo = function (id) {

          if(id || id === 0) {
            growl.addInfoMessage('Task Edited', {ttl: 3000});
          } else {
            if($scope.newTask.title) {
              $scope.today.push({title: $scope.newTask.title.trim(), completed: false});
              $scope.newTask.title = '';
              growl.addInfoMessage('New Task added', {ttl: 3000});
            }
          }

          $scope.week[d] = $scope.today;
          saveToLocalStorage();
        };

        $scope.remove = function (id) {
          $scope.today.splice(id,1);
          $scope.week[d] = $scope.today;

          saveToLocalStorage();
          growl.addErrorMessage('The tasks has been removed', {ttl: 3000});
        };
      }]);
})();
