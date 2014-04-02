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
        ngOptions: '=ngOptions',
<<<<<<< HEAD
=======
        container: '=container',
>>>>>>> 253be9aae9db437d38506c8dabd1d98166049fc3
        countSelectedText,'=countSelectedText',
        dropupAuto: '=dropupAuto',
        header: '=header',
        hideDisabled: '=hideDisabled',
        selectedTextFormat: '=selectedTextFormat',
        size: '=size',
        showSubtext: '=showSubtext',
        showIcon: '=showIcon',
        showContent: '=showContent',
        title: '=title',
        width: '=width',
      },
      template: 'my-customer-iso.html',
      link: function(scope, element, attrs, tabsCtrl) {
        $(element).selectpicker({
          countSelectedText,countSelectedText,
          dropupAuto: dropupAuto,
          header: header,
          hideDisabled: hideDisabled,
          selectedTextFormat: selectedTextFormat,
          size: size,
          showSubtext: showSubtext,
          showIcon: showIcon,
          showContent: showContent,
          title: title,
          width: width,        
        });

        scope.$watch(attrs.myCurrentTime,
