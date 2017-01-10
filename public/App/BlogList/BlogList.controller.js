  techRegistryApp.controller('blogListController', ['$scope',

      function blogListController($scope) {
          $scope.bloglist = [];

          var blogObject = function() {
              return {
                  title: "test",
                  content: "test"
              };
          };
          var init = function() {
              $scope.bloglist.push(blogObject());
              $scope.bloglist.push(blogObject());
              $scope.bloglist.push(blogObject());
              $scope.bloglist.push(blogObject());
              $scope.bloglist.push(blogObject());
              $scope.bloglist.push(blogObject());
              $scope.bloglist.push(blogObject());
              $scope.bloglist.push(blogObject());
              $scope.bloglist.push(blogObject());
              $scope.bloglist.push(blogObject());
              $scope.bloglist.push(blogObject());
              $scope.bloglist.push(blogObject());
          };
          init();
      }
  ]);
