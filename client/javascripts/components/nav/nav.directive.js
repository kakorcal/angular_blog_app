(()=>{
  angular.module('blog.component.nav', [])
    .directive('blogNav', navDirective);

  function navDirective(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'views/partials/_nav.html'
    };
  }
})();