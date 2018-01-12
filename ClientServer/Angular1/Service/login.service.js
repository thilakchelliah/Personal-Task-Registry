/*global techRegistryApp*/
/*jshint -W030 */
techRegistryApp.service('loginService', ['$http', function($http) {
    var loginService = {};
    var _createUser = function(data) {
        return $http.post('api/User/Create',data);
    }
    loginService.CreateUser = _createUser;
    return loginService;
}]);
