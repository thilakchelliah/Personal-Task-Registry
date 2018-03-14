/*global techRegistryApp,$,bootbox,angular*/
techRegistryApp.directive('tutorialListDirective', ['$localStorage', function ($localStorage) {
    return {
        restrict: 'E',
        templateUrl: 'Angular1/Directives/TutorialManager/TutorialList.html',
        controller: ['$scope', '$http', 'tutorialManagerService', 'sharedService', '$stateParams', '$sce', function ($scope, $http, tutorialManagerService, sharedService, $stateParams, $sce) {
            
           

            
        }]
    };
}]);
