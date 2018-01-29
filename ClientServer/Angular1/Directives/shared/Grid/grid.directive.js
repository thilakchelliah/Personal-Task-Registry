/*global tRDashboardApp,$*/
tRDashboardApp.directive('gridDirective', ['$localStorage', 'sharedService', '$state', function($localStorage, sharedService, $state) {
    return {
        restrict: 'E',
        templateUrl: 'Angular1/Directives/shared/Grid/Grid.html',
        scope: {
            gdId: '@',
            gridData: '=',
            gdType: '='
        },
        compile: function(element, attributes) {
            debugger;
            sharedService.toggleLoader(true);
            element.find('table').attr('id', attributes.gdId);
        },
        controller: ['$scope', 'sharedService', '$http', function($scope, sharedService, $http) {
            debugger;
            if ($scope.gdType == "URL") {
                sharedService.callGetUrlTofetch($scope.gridData).then(function(resp) {
                        debugger;
                        $("#" + $scope.gdId).DataTable({
                            data: resp.data,
                            columns: [
                                { title: "User Name", data: "username" },
                                { title: "Email", data: "email" }
                            ]
                        });
                        sharedService.toggleLoader(false);
                    },
                    function(error) {});
            }
        }]
    };
}]);
