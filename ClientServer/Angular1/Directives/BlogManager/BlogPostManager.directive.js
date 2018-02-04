/*global tRDashboardApp,$*/
tRDashboardApp.directive('blogPostManagerDirective', ['blogManagerService', '$localStorage', '$state', function(blogManagerService, $localStorage, $state) {
    return {
        restrict: 'E',
        scope: {
            functionType: "@",
            postId: "@"
        },
        templateUrl: 'Angular1/Directives/BlogManager/BlogPostManager.html',

        controller: ['$scope', '$http', 'sharedService', '$rootScope', function($scope, $http, sharedService, $rootScope) {
            debugger;
            $scope.init = function() {
                $scope.buttonText = $scope.functionType === "add" ? "Add New " : "Update ";
                $(document).ready(function() {
                    $('#summernote').summernote({
                        dialogsInBody: true,
                        height: 300,
                    });
                });
            }


            //function to add or update post
            $scope.addOrUpdatePost = function() {
                debugger;
                var content = $("#summernote").summernote('code');
                var data = {
                    title: $scope.title,
                    htmlContent: content,
                    userId: $rootScope.UserId

                };
                blogManagerService.CreateUser(data);
            }
            $scope.init();

        }]
    };
}]);
