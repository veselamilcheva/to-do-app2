var todo = {
    templateUrl: 'js/components/todo/todo.html',
    controller: 'TodoController',
    bindings: {
        todo: '<',
        onDelete: '&',
        index: '<'
    }
};

angular
    .module('components')
    .component('todo',todo);
