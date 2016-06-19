(()=>{
  angular.module('blog.services', [])
    .service('BlogServices', BlogServices);

  function BlogServices($http){
    const BASE_URL = '/api/blogs';
  
    this.getPosts = function(){
      return $http.get(BASE_URL);
    }
  }

  BlogServices.$inject = ['$http'];
})();