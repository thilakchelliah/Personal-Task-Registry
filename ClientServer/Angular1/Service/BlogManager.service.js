/*global tRDashboardApp*/
/*jshint -W030 */
tRDashboardApp.service('blogManagerService', ['$http', function ($http) {
    var blogManagerService = {};
    var _createUser = function (data) {
        return $http.post('apiS/Blog/Create', data);
    };
    var _deleteBlogRow = function (id) {
        return $http.post('/apiS/Blog/Delete', id);

    };

    blogManagerService.DeleteBlogRow = _deleteBlogRow;

    blogManagerService.CreateUser = _createUser;

    return blogManagerService;
}]);
