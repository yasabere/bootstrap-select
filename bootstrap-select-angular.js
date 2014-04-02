/**
 * Author: Yaw Asabere
 *
 * 
 */

angular.module('bootstrapSelectDirective', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };
  }])
  .directive('bootstrapSelect', function() {
    return {
      restrict: 'AE',
      scope: {
        ngModel: '=ngModel',
        ngOptions: '=ngOptions',
        countSelectedText:'=countSelectedText',
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
          countSelectedText: scope.countSelectedText,
          dropupAuto: scope.dropupAuto,
          header: scope.header,
          hideDisabled: scope.hideDisabled,
          selectedTextFormat: scope.selectedTextFormat,
          size: scope.size,
          showSubtext: scope.showSubtext,
          showIcon: scope.showIcon,
          showContent: scope.showContent,
          title: scope.title,
          width: scope.width,        
        });
        
        console.log('test');

        scope.$watch(attrs.myCurrentTime, function(value) {
          format = value;
          updateTime();
        });

      },
    };
  });