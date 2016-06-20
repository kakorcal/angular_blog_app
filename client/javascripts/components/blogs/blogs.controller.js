(()=>{
  angular.module('blog.component.posts', [])
    .controller('PostsController', PostsController);

  function PostsController({data:posts}, BlogServices,$location){
    const vm = this;
    vm.posts = posts;
    vm.toggleFilters = false;
    vm.authors = posts.reduce((acc, cur)=>{
      if(!acc[1][cur.author]){
        acc[1][cur.author] = cur.author;
        acc[0].push(cur.author);
      }
      return acc;
    }, [[], {}])[0];
    
    vm.onVoteChange = function(blog, inc){
      if(inc){
        blog.votes++;
      }else{
        blog.votes--;
      }
      BlogServices.updatePost({blog}).then(res=>{
        console.log(res);
      });
    };
  }

  PostsController.$inject = ['posts', 'BlogServices','$location'];
})();