angular
    .module('root')
    .factory('store', function () {

        var state = {

            todos: []
        }

        

        return {

            getTodo: getTodo,
            setTodo: setTodo,
            deleteTodo: deleteTodo,
            toggleTodo: toggleTodo,
            updateTodo: updateTodo


        };

        // .................

        function getTodo() {
            return state;
        }

        function setTodo(value) {

            state.todos = [].concat(state.todos, [{
                todoText: value,
                completed: false
            }]);
      
        }

        function deleteTodo(index) {
            state.todos.splice(index, 1);
           
        }

        function toggleTodo(event) {

            // console.log(event);

            // state.todos[event.index].completed = event.completed;
            // 
            // 
            state.todos = state.todos.map(function(item, index) {
                  

            console.log(event.index , index ); //item is every single object yes  index is index of the to do object 

                    if (event.index === index) {

                        item.completed = event.completed;
                    }

                  return item;  //returns arr of objects               //what your new object should look like for each item you pass rule: never access state.todos inside map

            })
        };

        function updateTodo(event) {

             state.todos[event.index].todoText = event.todoText;

             console.log(todos[event.index].todoText);
        };

        
});
