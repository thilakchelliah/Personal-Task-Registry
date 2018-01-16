/*global angular*/
/*jshint -W030 */
var techRegistryApp = angular.module("techRegistryApp", ['ui.router','ngStorage']);


techRegistryApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('AuthInterceptor');
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'App/ContentMaster/Content.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('login', {
            url: '/login',
            templateUrl: 'App/User/Login.html',
            controller: 'loginController'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'App/User/Registration.html'
        });

}]);
