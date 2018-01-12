/*global techRegistryApp*/
  techRegistryApp.controller('blogListController', ['$scope',

      function blogListController($scope) {
          $scope.blogList = [];

          var blogObject = function() {
              return {
                  title: "Dosis Best Google Web Fonts",
                  content: "test",
                  user:"Thilak"
              };
          };
          var init = function() {
              $scope.blogList.push(blogObject());
              $scope.blogList.push(blogObject());
              $scope.blogList.push(blogObject());
              $scope.blogList.push(blogObject());
              $scope.blogList.push(blogObject());
              $scope.blogList.push(blogObject());
              $scope.blogList.push(blogObject());
              $scope.blogList.push(blogObject());
              $scope.blogList.push(blogObject());
              $scope.blogList.push(blogObject());
              $scope.blogList.push(blogObject());
              $scope.blogList.push(blogObject());
          };
          init();
      }
  ]);
