(()=>{
  angular.module('blogApp', [
    'ngRoute',
    'blog.routes',
    'blog.component.nav',
    'blog.component.sidebar'
  ]);
})();