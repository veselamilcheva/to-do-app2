angular
    .module('root')
    .factory('store', function (todoService) {
        var vm = this;
       
        

         var state={todos:[]};

        return {

            getTodo: getTodo,
            setTodo: setTodo,
            deleteTodo: deleteTodo,
            toggleTodo: toggleTodo,
            updateTodo: updateTodo,
            toggleAllTodo: toggleAllTodo


        };
        // .................

        function getTodo() {
            return todoService.getTodo().then(function(response){ 
            state.todos = response.data.todos; 
            return state;  

            });
            
        }

        function setTodo(val) {
        
            return todoService.setTodo(val).then(function(response){ 
            state.todos = [].concat(state.todos, [response.data]);
            });
            
        }

        function deleteTodo(index) {
           return todoService.deleteTodo(index).then(function(response) { 
            var res = response.data.todo._id;
             state.todos = state.todos.filter(function(el) {

                    return res !== el._id;
            });

            return state;  

            });
           
        }

        function toggleTodo(event) {

            state.todos = state.todos.map(function(item, index) {

                    if (event.index === index) {

                        item.completed = event.completed;
                    }

                  return item;

            })
        };

        function updateTodo(event) {
            
         return todoService.updateTodo(state.todos[event.index]._id , event.todoText, event.completed).then(function(response) { 
            
             state.todos = state.todos.map(function(item, index) {
                  
                    if (response.data.todo._id === index) {

                        item.text = event.text;
                    }

                  return item; 

            })
            
            return state;  

            });
            
        };

        function toggleAllTodo (event) {

            var todosnew = [];
           state.todos.forEach(function(el) {

               if (event === true) {
                  el.completed = true;
                 } else {
                  el.completed = false;
                 }
                 return todosnew.push(el);
                
            })
           state.todos = todosnew
           
        }

});
