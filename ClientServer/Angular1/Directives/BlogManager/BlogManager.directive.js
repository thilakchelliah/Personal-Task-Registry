/*global tRDashboardApp*/
tRDashboardApp.directive('blogManagerDirective', ['blogManagerService', '$localStorage', '$state', function(blogManagerService, $localStorage, $state) {
    return {
        restrict: 'E',
        templateUrl: 'Angular1/Directives/BlogManager/BlogManager.html',

        controller: ['$scope', '$http', 'sharedService', function($scope, $http, sharedService) {
            debugger;
         

        }]
    };
}]);
