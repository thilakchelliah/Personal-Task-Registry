/*global tRDashboardApp*/
/*jshint -W030 */
tRDashboardApp.service('sharedService', ['$http', function ($http) {
    var sharedService = {};
    var _callGetUrlTofetch = function (url) {
        return $http.get(url);
    };
  
    sharedService.callGetUrlTofetch = _callGetUrlTofetch;
    return sharedService;
}]);
