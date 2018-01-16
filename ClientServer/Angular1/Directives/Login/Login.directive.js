/*global techRegistryApp*/
techRegistryApp.directive('loginDirective', ['loginService', function (loginService) {
    return {
        restrict: 'E',
        templateUrl: 'Angular1/Directives/Login/login.html',
        controller: ['$scope', '$state', '$localStorage', '$http', function ($scope, $state, $localStorage, $http) {
            $scope.invalidUser = false;
            $scope.ValidateAndLogin = function () {
                debugger;
                var username = $scope.username;
                var password = $scope.password;
                loginService.ValidateAndLogin(username, password).then(
                    function (response) {
                        debugger;
                        if (response.data.token) {
                            // store username and token in local storage to keep user logged in between page refreshes
                            $localStorage.currentUser = { username: username, token: response.data.token };

                            // add jwt token to auth header for all requests made by the $http service
                            $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
                        }
                        else {
                            $scope.invalidUser = true;
                        }

                    },
                    function (err) {
                        $scope.invalidUser = true;
                    });
            };

        }]
    };
}]);
