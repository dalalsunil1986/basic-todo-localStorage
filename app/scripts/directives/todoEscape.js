(function(){
  'use strict';
  /*global angular */

  /**
   * Directive that executes an expression when the element it is applied to gets
   * an `escape` keydown event.
   */
  angular.module('tskmngrApp')
    .directive('todoEscape', function () {
      var ESCAPE_KEY = 13;

      return function (scope, elem, attrs) {
        elem.bind('keydown', function (event) {
          if (event.keyCode === ESCAPE_KEY) {
            scope.$apply(attrs.todoEscape);
          }
        });
      };
    })
    .directive('applyFunc', function(){
      
      return function(scope, elem, attrs){
        elem.bind('click', function(){
          scope.$apply(attrs.applyFunc);
        });
      };
    });

})();
