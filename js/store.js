angular
    .module('root')
    .service('store', function () {

        var todos = [];

        return {
            getTodo: getTodo,
            setTodo: setTodo,
            deleteTodo: deleteTodo
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
            todoList.splice(index, 1);
        };
});
