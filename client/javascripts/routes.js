(()=>{
  angular.module('blog.routes', []).config(config);

  function config($routeProvider, $locationProvider){
    $routeProvider
      .when('/blogs', {
        templateUrl: 'views/blogs/index.html',
        controller: 'PostsController',
        controllerAs: 'vm',
        resolve: {
          posts: getAllPosts
        }
      })
      .when('/blogs/new', {
        templateUrl: 'views/blogs/new.html'
      })
      .when('/blogs/:id', {
        templateUrl: 'views/blogs/show.html'
      })
      .when('/blogs/:id/edit', {
        templateUrl: 'views/blogs/edit.html'
      })
      .otherwise({
        redirectTo: '/blogs'
      })
    $locationProvider.html5Mode(true);
  } 

  function getAllPosts(BlogServices){
    return BlogServices.getPosts();
  }

  config.$inject = ['$routeProvider', '$locationProvider'];
  getAllPosts.$inject = ['BlogServices'];
})();