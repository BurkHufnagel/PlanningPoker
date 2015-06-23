angular.module('starter.controllers', [])

.controller('PlanCtrl', function($scope, Decks) {
  $scope.decks = Decks.all();
  $scope.index = Decks.selected();
})

.controller('ConfigCtrl', function($scope, Decks) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.decks = Decks.all();
})

.controller('AboutCtrl', function($scope) {
});
