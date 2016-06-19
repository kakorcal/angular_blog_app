(()=>{
  angular.module('blog.component.sidebar', [])
    .directive('blogSidebar', sidebarDirective);

  function sidebarDirective(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'views/partials/_sidebar.html'
    }
  }
})();