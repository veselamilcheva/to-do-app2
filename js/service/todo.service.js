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

                },
           setTodo: function(val) {
            console.log(val);
           return $http({
              method: 'POST',
              url: 'https://vast-shore-36257.herokuapp.com/todos',
              data: {
                text:val
              }
            }).then(function(response) {
                return response;
              });

            },
           deleteTodo: function(id) {
             return $http({
                method: 'DELETE',
                url: 'https://vast-shore-36257.herokuapp.com/todos/' + id,
                data: {
                  id:id
                }
              }).then(function(response) {
                return response;
              
              });

            },
            updateTodo: function(id, todo, completed) {
             return $http({
                method: 'PATCH',
                url: 'https://vast-shore-36257.herokuapp.com/todos/' + id,
                data: {
                  id:id,
                  todo: {
                    "text": todo,
                    "completed": completed
                  }
                }
              }).then(function(response) {
                return response;
              
              });

            },

        }
      }

})();

