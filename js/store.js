angular
    .module('root')
    .service('store', function () {

        var todos = [];

        return {

            getTodo: getTodo,
            setTodo: setTodo,
            deleteTodo: deleteTodo,
            toggleTodo: toggleTodo


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

        function toggleTodo(index) {

            todos[index].completed = !todos[index].completed;

            console.log(todos[index].completed );
        };
});
