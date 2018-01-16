'use strict';

/*global techRegistryApp*/
/*jshint -W030 */
techRegistryApp.factory('AuthInterceptor', function ($rootScope, $q, $window, $location) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.localStorage.token) {
                config.headers.Authorization = 'Token ' + $window.localStorage.token;
            }
            return config;
        },

        responseError: function (response) {
            if (response.status === 401) {
                $window.localStorage.removeItem('token');
                $location.path('/');
                return;
            }
            return $q.reject(response);
        }
    };
});