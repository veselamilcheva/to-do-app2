var todo = {
    templateUrl: 'js/components/todo/todo.html',
    controller: 'TodoController',
    bindings: {
        todo: '<',
        delete: '&',
        index: '<'
    }
};

angular
    .module('components')
    .component('todo',todo);
