/**
 * Author: Yaw Asabere
 *
 * 
 */

angular.module('bootstrapSelectDirective', [])
  .controller('Controller', ['$scope', '$interpolate', function($scope, $interpolate) {
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
      templateUrl: 'selectbootstrap.html',
      compile: function compile(tElement, tAttrs, transclude) {
     
        return {
          post: function postLink(scope, iElement, iAttrs, controller) {
            
            var dropdown = $(iElement[0].childNodes[0]);
            
            dropdown.selectpicker({
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
              options: scope.ngOptions,
            });
            
            //console.log(element[0].childNodes[0]);
            
            scope.$watch(scope.ngOptions, function(value) {
              dropdown.selectpicker('refresh');
              dropdown.selectpicker('render');
            });
            
            //alert('test');
            
          }
        };
        
      },
    };
  });
