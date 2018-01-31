/*global tRDashboardApp,$*/
var globalColData = {
    userGrid: [{ 'title': 'User Name', 'data': 'username' }, { 'title': 'Email', 'data': 'email' }],
    blogGrid: [{ 'title': 'Post Title', 'data': 'title' },
        {
            'title': 'Preview',
            'data': '_id',
            "render": function(data, type, row, meta) {
                return '<button ng-click="OpenPreviewWindow(data)">Preview</Button>';
            }
        }
    ]
}

tRDashboardApp.directive('gridDirective', ['$localStorage', 'sharedService', '$state', function($localStorage, sharedService, $state) {
    return {
        restrict: 'E',
        templateUrl: 'Angular1/Directives/shared/Grid/Grid.html',
        scope: {
            gdId: '@',
            gridData: '=',
            gdType: '=',
            coloumnData: "@"
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
                            columns: globalColData[$scope.coloumnData]
                        });
                        sharedService.toggleLoader(false);
                    },
                    function(error) {});
            }
        }]
    };
}]);
