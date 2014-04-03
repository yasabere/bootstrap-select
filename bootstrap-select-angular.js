/**
 * Author: Yaw Asabere
 *
 * 
 */

angular.module('bootstrapSelectDirective', [])
  .controller('Controller', ['$scope', '$interpolate', function($scope, $interpolate) {
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };
    
    $scope.test = function(){
      console.log('test');
    }
    
  }])
  .directive('bootstrapSelect', function() {
    return {
      restrict: 'AE',
      scope: {
        ngModel: '=ngModel',
        ngOptions: '=ngOptions',
        ngdataType:'=ngDataType' ,
        ngSelect:'=ngSelect' ,
        ngLabel:'=ngLabel',
        ngGroupBy:'=ngGroupBy',
        
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
            var val;
            
            scope.update = function(val){
                val = dropdown.selectpicker('val');
                scope.ngModel = val;
                //alert(scope.ngModel);
                //scope.ngModel = iElement[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].data;
                //scope.$apply();
              }
            
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
              onSelect: scope.update
            });
            
            var refresh = function(){
              dropdown.selectpicker('refresh');
              dropdown.selectpicker('render');
            
              dropdown.siblings('div').eq(0).children('div').children('ul').children('li').each(function() {
                var $this = $(this);
                
                console.log('this, ',$this);
                
                $this.click(function() {
                  dropdown.selectpicker('val', 'black');
                });
                  
              });
              
              scope.$apply();
            
            };
            
            scope.$watch(scope.ngOptions, function(value) {
              refresh();
            });
            
            
            
          }
        };
        
      },
    };
  });
