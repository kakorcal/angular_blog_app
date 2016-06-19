(()=>{
  angular.module('blog.component.posts', [])
    .controller('PostsController', PostsController);

  function PostsController({data:posts}){
    this.posts = posts;
  }

  PostsController.$inject = ['posts'];
})();