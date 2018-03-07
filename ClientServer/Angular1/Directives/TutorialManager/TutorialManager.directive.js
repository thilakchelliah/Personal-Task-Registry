/*global tRDashboardApp,$,bootbox,angular*/
tRDashboardApp.directive('tutorialManagerDirective', ['$localStorage', function($localStorage) {
    return {
        restrict: 'E',
        templateUrl: 'Angular1/Directives/TutorialManager/TutorialManager.html',
        controller: ['$scope', '$http', 'tutorialManagerService', 'sharedService', '$stateParams', '$sce', function($scope, $http, tutorialManagerService, sharedService, $stateParams, $sce) {

            $scope.tagArray = [];
            $scope.UploadSuccess = false;
            $scope.UploadFailed = false;
            $scope.showUpload = false;
            $scope.fileName = "";


            $scope.showLoader = function() {
                sharedService.toggleLoader(true);
            }
            $scope.fileSelected = function(curObj) {

                sharedService.toggleLoader(false);
                $scope.files = curObj.files[0];
                $scope.files.filename = $scope.title.replace(/ /g, '') + ".html";
                $scope.showUpload = true;
                $scope.$apply();

            }
            $scope.uploadFile = function() {

                sharedService.toggleLoader(true);
                var fd = new FormData();
                //Take the first selected file
                fd.append("file", $scope.files);
                tutorialManagerService.UploadTutorialFile(fd).then(
                    function(res) {

                        $scope.fileName = res.data.fileName;
                        $scope.UploadSuccess = true;
                        sharedService.toggleLoader(false);
                    },
                    function(error) {

                        $scope.UploadFailed = true;
                        sharedService.toggleLoader(false);
                    })

            };

            $scope.addOrUpdateTutorial = function() {
                debugger;
                var data = {
                    title: $scope.title,
                    tags: $scope.tagArray.join(','),
                    tutorialLink: $scope.fileName
                }
                tutorialManagerService.AddOrUpdateTutorial(data, true).then(
                    function(res) {
                        alert("success");
                    },
                    function(error) {
                        alert("failure");
                    })


            };

            $scope.$on('sendTagData', function(event, data) {
                $scope.tagArray = data;
            });
        }]
    };
}]);
