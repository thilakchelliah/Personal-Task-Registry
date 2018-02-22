/*global tRDashboardApp,$,bootbox*/
tRDashboardApp.directive('blogPostFull', ['blogManagerService', '$localStorage', '$state', function(blogManagerService, $localStorage, $state) {
    return {
        restrict: 'E',
        scope: {
            functionType: "@",
            postId: "@"
        },
        templateUrl: 'Angular1/Directives/BlogManager/BlogPostFull.html',

        controller: ['$scope', '$http', 'sharedService', '$rootScope', function($scope, $http, sharedService, $rootScope) {

            $scope.tagArray = [];
            $scope.init = function() {
              
            };


          
            $scope.init();

        }]
    };
}]);
