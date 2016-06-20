(()=>{
  angular.module('blog.routes', []).config(config);

  function config($routeProvider, $locationProvider){
    $routeProvider
      .when('/blogs', {
        templateUrl: 'views/blogs/index.html',
        controller: 'IndexController',
        controllerAs: 'vm',
        resolve: {
          posts: getAllPosts
        }
      })
      .when('/blogs/new', {
        templateUrl: 'views/blogs/new.html'
      })
      .when('/blogs/:id', {
        templateUrl: 'views/blogs/show.html',
        controller: 'ShowController',
        controllerAs: 'vm',
        resolve: {
          post: getPostById
        }
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

  function getPostById(BlogServices, $route){
    return BlogServices.getSinglePost($route.current.params.id);
  }

  config.$inject = ['$routeProvider', '$locationProvider'];
  getAllPosts.$inject = ['BlogServices'];
  getPostById.$inject = ['BlogServices', '$route']
})();