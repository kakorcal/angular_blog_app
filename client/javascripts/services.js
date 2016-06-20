(()=>{
  angular.module('blog.services', [])
    .service('BlogServices', BlogServices);

  function BlogServices($http){
    const BASE_URL = '/api/blogs';
  
    this.getPosts = function(){
      return $http.get(BASE_URL);
    };

    this.getSinglePost = function(id){
      return $http.get(`${BASE_URL}/${id}`);
    };

    this.createPost = function(data){
      return $http.post(BASE_URL, data);
    }

    this.updatePost = function(data){
      return $http.put(`${BASE_URL}/${data.blog.id}`, data);
    };

    this.deletePost = function(id){
      return $http.delete(`${BASE_URL}/${id}`);
    }
  }

  BlogServices.$inject = ['$http'];
})();