
/*global sharedModule,$localStorage*/
/*jshint -W030 */
sharedModule.factory('AuthInterceptor',['$rootScope', '$q', '$localStorage', '$location', function ($rootScope, $q, $localStorage, $location) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($localStorage.currentUser.token) {
                config.headers.Authorization = 'Token ' + $localStorage.currentUser.token;
            }
            return config;
        },

        responseError: function (response) {
            if (response.status === 401) {
                $localStorage.removeItem('token');
                $location.path('/');
                return;
            }
            return $q.reject(response);
        }
    };
}]);