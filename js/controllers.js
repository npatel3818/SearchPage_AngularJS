var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://www.iNorthwind.com/Service1.svc/getAllCustomers')
  .success(function(data) {
    $scope.listOfCustomers = data.GetAllCustomersResult;
  });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('http://www.iNorthwind.com/Service1.svc/getAllCustomers')
  .success(function(data) {
    $scope.listOfCustomers = data.GetAllCustomersResult;
    
  

  });
}]);

