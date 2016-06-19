(()=>{
  angular.module('blogApp', [
    'ngRoute',
    'blog.routes',
    'blog.services',
    'blog.component.posts',
    'blog.component.nav',
    'blog.component.sidebar'
  ]);
})();