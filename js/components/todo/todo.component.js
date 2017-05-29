var todo = {
    templateUrl: 'js/components/todo/todo.html',
    controller: 'TodoController'
}

angular
    .module('components')
    .component('todo',todo);
