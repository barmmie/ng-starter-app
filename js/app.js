angular.module('starter-app', ['ui.router', 'starter-app.services', 'starter-app.directives', 'starter-app.filters', 'starter-app.controllers'])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/_home.html",
      controller: 'HomeController'
    })
    
    .state('about', {
      url: "/about",
      templateUrl: "partials/_about.html",
      controller: 'AboutController'
    })
    
});