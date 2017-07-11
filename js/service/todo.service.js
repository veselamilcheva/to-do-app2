(function(){

angular
    .module('root')
    .factory('todoService', ['$http', todoService]);

      function todoService($http) {
        return {
          getTodo: function() {
            
           return $http({
              method: 'GET',
              url: 'https://vast-shore-36257.herokuapp.com/todos'
            }).then(function(response) {
                return response;
                // this callback will be called asynchronously
                // when the response is available
              }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });

                }
        }
      }

})();

