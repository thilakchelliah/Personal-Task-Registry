/*global techRegistryApp*/
techRegistryApp.directive('signUpDirective', ['loginService', function(loginService) {
    return {
        restrict: 'E',
        templateUrl: 'Angular1/Directives/SignUp/signup.html',
        controller: ['$scope', function($scope) {

            $scope.CreateUser = function() {
                debugger;
                var userCurrent = {
                    email: $scope.email,
                    username: $scope.UserName,
                    password: $scope.password
                };
                debugger;
                loginService.CreateUser(userCurrent).then(function(res){
                    debugger;
                },function(error) {
                    debugger;
                });
            };
        }],

        link: ['$scope', function($scope) {

        }]
    };
}]);
