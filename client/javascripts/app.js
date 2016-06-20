(()=>{
  angular.module('blogApp', [
    'ngRoute',
    'blog.routes',
    'blog.services',
    'blog.filters',
    'blog.component.posts',
    'blog.component.nav',
    'blog.component.sidebar'
  ]);
})();