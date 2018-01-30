/*global tRDashboardApp*/
/*jshint -W030 */
tRDashboardApp.service('blogManagerService', ['$http', function ($http) {
    var blogManagerService = {};
    var _createUser = function (data) {
        return $http.post('api/User/Create', data);
    };
   
    blogManagerService.CreateUser = _createUser;
    return blogManagerService;
}]);
