/*global techRegistryApp,$,bootbox,angular*/
techRegistryApp.directive('tutorialListDirective', ['$localStorage', function ($localStorage) {
    return {
        restrict: 'E',
        templateUrl: 'Angular1/Directives/TutorialManager/TutorialList.html',
        controller: ['$scope', '$http', 'tutorialManagerService', 'sharedService', '$stateParams', '$sce', function ($scope, $http, tutorialManagerService, sharedService, $stateParams, $sce) {
            var init = function () {
                sharedService.FetchAllTutorial().then(
                    function (response) {

                        $(response.data).each(function () {
                            $scope.blogList.push({
                                title: this.title,
                                shortDesc: this.shortDesc,
                                cardImageURL: this.cardImageURL,
                                createdDate: this.createdDate
                            });
                        });

                    },
                    function (err) {

                    });
            }
            init();


        }]
    };
}]);
