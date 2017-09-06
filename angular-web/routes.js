movieApp.config(function($routeProvider){

  $routeProvider

  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeController'
  })

  .when('/register', {
    templateUrl: 'pages/register.html',
    controller: 'registerController'
  })

  .when('/signin', {
    templateUrl: 'pages/signin.html',
    controller: 'signinConrtoller'
  })

  .when('/movies', {
    templateUrl: 'pages/movies.html',
    controller: 'moviesController'
  })
});