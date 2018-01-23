/*global tRDashboardApp*/
tRDashboardApp.directive('loginDirective', ['loginService', '$localStorage', '$state', function(loginService, $localStorage, $state) {
    return {
        restrict: 'E',
        templateUrl: 'Angular1/Directives/Login/Login.html',
        
        controller: ['$scope', '$http', function($scope, $http) {
            $scope.invalidUser = false;
            $scope.ValidateAndLogin = function() {
                var username = $scope.username;
                var password = $scope.password;
                loginService.ValidateAndLogin(username, password).then(
                    function(response) {
                        debugger;
                        if (response.data.token) {
                            // store username and token in local storage to keep user logged in between page refreshes
                            $localStorage.currentUser = { username: username, token: response.data.token };

                            // add jwt token to auth header for all requests made by the $http service
                            $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
                            $state.go('home');
                        }
                        else {
                            $scope.invalidUser = true;
                        }

                    },
                    function(err) {
                        $scope.invalidUser = true;
                    });
            };


        }]
    };
}]);
