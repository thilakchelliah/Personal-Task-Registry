/*global angular*/
/*jshint -W030 */


var sharedModule = angular.module("shared", []);
var techRegistryApp = angular.module("trApp.Main", ['ui.router', 'ngStorage', 'shared']);

var tRDashboardApp = angular.module("trApp.Dashboard", ['ui.router', 'ngStorage', 'ui.router.state.events', 'shared']);


techRegistryApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('AuthInterceptor');
    $urlRouterProvider.otherwise('/main');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('main', {
            url: '/main',
            templateUrl: 'App/ContentMaster/Content.html'
        });
}]);

tRDashboardApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {

        $httpProvider.interceptors.push('AuthInterceptor');
        $urlRouterProvider.otherwise('/');

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/admin/home',
                templateUrl: 'App/ContentMaster/DashboardContent.html'
            })

            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('login', {
                url: '/',
                templateUrl: 'App/User/Login.html'
            })
            .state('signup', {
                url: '/admin/signup',
                templateUrl: 'App/User/Registration.html'
            });



    }])
    .run(['$rootScope', '$state', '$localStorage', function($rootScope, $state, $localStorage) {
        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams, options) {
            if (toState.name == 'login' && $localStorage.currentUser.token) {
                event.preventDefault();
                $state.go('home');
            }
        });
    }]);
