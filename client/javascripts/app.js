(()=>{
  angular.module('blogApp', [
    'ngRoute',
    'blog.routes',
    'blog.services',
    'blog.filters',
    'blog.component.index',
    'blog.component.show',
    'blog.component.nav',
    'blog.component.sidebar'
  ]);
})();