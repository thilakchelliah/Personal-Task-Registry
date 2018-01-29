/*global sharedModule,$*/
/*jshint -W030 */
sharedModule.service('sharedService', ['$http', function($http) {
    var sharedService = {};
    var _callGetUrlTofetch = function(url) {
        return $http.get(url);
    };


    //method to handle loader
    var _toggleLoader = function(showOrHide) {
        if (showOrHide == true)
            $(".loading").show();
        else
            $(".loading").hide();
    }
    sharedService.callGetUrlTofetch = _callGetUrlTofetch;
    sharedService.toggleLoader = _toggleLoader;
    return sharedService;
}]);
