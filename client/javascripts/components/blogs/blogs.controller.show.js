(()=>{
  angular.module('blog.component.show', [])
    .controller('ShowController', ShowController)
  
  function ShowController({data:post}){
    const vm = this;
    vm.post = post;
  }

  ShowController.$inject = ['post'];
})();