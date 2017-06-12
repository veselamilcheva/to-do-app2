var todo = {
    templateUrl: 'js/components/todo/todo.html',
    controller: 'TodoController',
    bindings: {
        todo: '<',
        onDelete: '&',
        index: '<',
        onToggle: '&',
        onUpdate: '&'
    }
};

angular
    .module('components')
    .component('todo',todo);
