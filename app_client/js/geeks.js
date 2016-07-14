(function(){
  angular
    .module('christianGeeks', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', config]);

  function config ($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.view.html'
      })
      .when('/about', {
        templateUrl: '/templates/about.view.html'
      })
      .when('/members', {
        templateUrl: '/templates/members.view.html',
        controllerAs: 'vm',
        controller: 'memberCtrl'
      })
      .when('/sites', {
        templateUrl: '/templates/sites.view.html',
        controllerAs: 'vm',
        controller: 'sitesCtrl'
      })
      .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
})();
