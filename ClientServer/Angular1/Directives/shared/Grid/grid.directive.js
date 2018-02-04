/*global tRDashboardApp,$*/
var globalColData = {
    userGrid: [{ 'title': 'User Name', 'data': 'username' }, { 'title': 'Email', 'data': 'email' }],
    blogGrid: [{ 'title': 'Post Title', 'data': 'title' },
    {
        'title': 'Preview',
        'data': '_id',
        "render": function (data, type, row, meta) {
            return '<button ng-click="buttonEvent(&quot;blogRowPreview&quot;,data)">Preview</Button>';
        }
    },
    {
        'title': 'Delete',
        'data': '_id',
        "render": function (data, type, row, meta) {
            return '<button ng-click="buttonEvent(&quot;blogRowDelete&quot;,&quot;' + data + '&quot;)">Preview</Button>';
        }
    }
    ]
}

tRDashboardApp.directive('gridDirective', ['$localStorage', 'sharedService', '$state', function ($localStorage, sharedService, $state) {
    return {
        restrict: 'E',
        templateUrl: 'Angular1/Directives/shared/Grid/Grid.html',
        scope: {
            gdId: '@',
            gridData: '=',
            gdType: '=',
            coloumnData: "@"
        },
        compile: function (element, attributes) {
            debugger;
            sharedService.toggleLoader(true);
            element.find('table').attr('id', attributes.gdId);
        },
        controller: ['$scope', 'sharedService', '$http', '$compile', 'blogManagerService',
            function ($scope, sharedService, $http, $compile, blogManagerService) {
                debugger;
                var datatable;
                if ($scope.gdType == "URL") {
                    sharedService.callGetUrlTofetch($scope.gridData).then(function (resp) {
                        debugger;
                        datatable = $("#" + $scope.gdId).DataTable({
                            data: resp.data,
                            columns: globalColData[$scope.coloumnData],
                            createdRow: function (row, data, dataIndex) {
                                $compile(angular.element(row).contents())($scope);
                            }
                        });
                        sharedService.toggleLoader(false);
                    },
                        function (error) { });
                }

                $scope.buttonEvent = function (eventFor, data) {
                    debugger;
                    switch (eventFor) {
                        case "blogGridPreview":

                            break;
                        case "blogRowDelete":
                            blogManagerService.DeleteBlogRow({ id: data }).then(
                                function (resp) {
                                    debugger;
                                    sharedService.callGetUrlTofetch($scope.gridData).then(function (resp) {
                                        datatable.clear();
                                        datatable.rows.add(resp.data);
                                        datatable.draw();
                                    });
                                },
                                function (err) {
                                    debugger;
                                });
                            break;
                    }
                }
            }]
    };
}]);
