/*global tRDashboardApp*/
/*jshint -W030 */
tRDashboardApp.service('blogManagerService', ['$http', function ($http) {
    var blogManagerService = {};
    var _createUser = function (data) {
        debugger;
        return $http.post('apiS/Blog/Create', data);
    };
   
    blogManagerService.CreateUser = _createUser;
    return blogManagerService;
}]);
