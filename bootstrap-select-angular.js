/**
 * Author: Yaw Asabere
 *
 * 
 */

angular.module('docsIsolateScopeDirective', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };
  }])
  .directive('myCustomer', function() {
    return {
      restrict: 'E',
      scope: {
        ngModel: '=ngModel',
        ngOptions: '=ngOptions'
      },
      template: 'my-customer-iso.html',
      link: function(scope, element, attrs, tabsCtrl) {
        $('.selectpicker').selectpicker({
          'selectedText': 'cat'
        });
      },
    };
  });