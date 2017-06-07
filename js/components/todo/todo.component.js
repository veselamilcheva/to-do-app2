var todo = {
    templateUrl: 'js/components/todo/todo.html',
    controller: 'TodoController',
    bindings: {
        singleTodo: '<'
    }
};

angular
    .module('components')
    .component('todo',todo);
