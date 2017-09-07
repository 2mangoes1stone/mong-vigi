movieApp.controller('moviesController', ['$scope', '$location', 'moviesService',
function($scope, $location, moviesService) {

  $scope.name = moviesService.name;
  
  
  $scope.$watch('name', function() {
  moviesService.name = $scope.name; 
  });

  $scope.moviesResult = moviesService.getMovies();

}]);