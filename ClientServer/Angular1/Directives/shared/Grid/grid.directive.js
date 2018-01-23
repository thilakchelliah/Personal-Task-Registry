/*global tRDashboardApp,$*/
tRDashboardApp.directive('gridDirective', ['$localStorage', '$state', function($localStorage, $state) {
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
            element.find('table').attr('id', attributes.gdId);
        },
        controller: ['$scope', 'sharedService', '$http', function($scope, sharedService, $http) {
            debugger;
            if ($scope.gdType == "URL") {
                sharedService.callGetUrlTofetch($scope.gridData).then(function(resp) {
                        debugger;
                        $("#" + $scope.gdId).DataTable({
                            data: resp.data.result,
                            columns: [
                                { title: "Name" },
                                { title: "Position" },
                                { title: "Office" },
                                { title: "Extn." },
                                { title: "Start date" },
                                { title: "Salary" }
                            ]
                        });
                    },
                    function(error) {});
            }
        }]
    };
}]);
