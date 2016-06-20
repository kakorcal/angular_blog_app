(()=>{
  angular.module('blog.component.show', [])
    .controller('ShowController', ShowController)
  
  function ShowController({data:post}, BlogServices, $location){
    const vm = this;
    vm.post = post;

    vm.onPostDelete = function(id){
      // TODO: Add interception to confirm post deletion
      BlogServices.deletePost(id).then(res=>{
        console.log(res);
        $location.path('/blogs');
      });
    }
  }

  ShowController.$inject = ['post', 'BlogServices', '$location'];
})();