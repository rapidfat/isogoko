
angular.element(document).ready(function(){
  var $app = $('<div id="isogoko-app" ng-app="isogoko"></div>');
  $app.append('<board></board>');
  
  $('body').append($app);

  angular.bootstrap($app[0], ['isogoko']);
});

angular.module('isogoko', ['cards'], function(){
})

.directive('board', [function(){
  
  var dir = {
    templateUrl: window.chrome && window.chrome.extension && window.chrome.extension.getURL('board.html') || 'board.html',
    replace:true,
    restrict:'E',
    controller:BoardCtrl
  };

  dir.link = function boardLink(scope, element, attrs){
    console.log('linking isogoko directive');
  };

  return dir;

}])

.controller('BoardCtrl', ['$scope', function($scope){

  $scope.cards = {
    kingdomCards : {},
    defaultCards: {}
  };




}]);
