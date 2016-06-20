(()=>{
  angular.module('blog.filters', [])
    .filter('truncate', truncate)

  function truncate(){
    return function(str, chars){
      // title: 47 per line
      // content: 74 per line
      // if str is not a string, convert to string
      if(typeof str !== 'string') str = str + '';

      if(str.length > chars){
        str = str.substring(0, chars);
        let lastSpace = str.lastIndexOf(' ');
        return `${str.substring(0, lastSpace)}...`;        
      }else{
        return str;
      }
    };
  }
})();