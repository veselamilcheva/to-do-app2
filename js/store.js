angular
    .module('root')
    .service('store', function () {

        var todos = [];

        return {

            getTodo: getTodo,
            setTodo: setTodo,
            deleteTodo: deleteTodo,
            toggleTodo: toggleTodo,
            updateTodo: updateTodo


        };

        // .................

        function getTodo() {
            return todos;
        }

        function setTodo(value) {
            todos.push({
                todoText: value,
                completed: false
            })
      
        }

        function deleteTodo(index) {
            todos.splice(index, 1);
           
        }

        function toggleTodo(event) {

            console.log(event);

            todos[event.index].completed = event.completed;
        };

        function updateTodo(event) {

             todos[event.index].todoText = event.todoText;

             console.log(todos[event.index].todoText);
        };

        
});
