(()=>{
  angular.module('blog.component.edit', [])
    .controller('EditController', EditController)

  function EditController({data: post}, BlogServices, $location){
    const vm = this;
    vm.blog = post;

    vm.onPostEdit = function(blog){
      BlogServices.updatePost({blog}).then(res=>{
        console.log(res);
        $location.path(`/blogs/${blog.id}`);
      });
    }
  }

  EditController.$inject = ['post', 'BlogServices', '$location'];
})();