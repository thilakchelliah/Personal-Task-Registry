/*global techRegistryApp*/
  techRegistryApp.controller('blogListController', ['$scope','sharedService','$sce',

      function blogListController($scope,sharedService,$sce) {
          $scope.blogList = [];
          debugger;

          var blogObject = function(title,htmlContent,User) {
              return {
                  title: title,
                  content:$sce.trustAsHtml( htmlContent),
                  user:User
              };
          };
          var init = function() {
            sharedService.FetchAllBlog().then(
                function(response){
                    debugger;
                    $(response.data).each(function(){
                        $scope.blogList.push(blogObject(this.title,this.htmlString,this.user));
                    })
                    debugger;
                },
                function(err){

                });
            
              
          };
          init();
      }
  ]);
