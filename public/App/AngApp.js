/*global angular*/
/*jshint -W030 */
var techRegistryApp = angular.module("techRegistryApp", ["ui.router"]);

techRegistryApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state("home", {
        url: "/TechRegistry",
        templateUrl: "public/App/TechView.html"
    });
    // .state('about', {
    //     // we'll get to this in a bit       
    // });

});
