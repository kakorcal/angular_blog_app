(()=>{
  angular.module('blog.component.new', [])
    .controller('NewBlogController', NewBlogController);

  function NewBlogController(BlogServices, $location){
    var vm = this;
    vm.blog = {};

    vm.onPostSubmit = function(blog){
      blog.votes = 0;
      blog.date = new Date();
      BlogServices.createPost({blog}).then(res=>{
        $location.path('/blogs');
      });
    };
  }

  NewBlogController.$inject = ['BlogServices', '$location'];
})();