var todoList = {
    templateUrl: 'js/components/todo-list/todo-list.html',
    controller: 'TodoController',
    bindings: {
        todosList: '<'
    }
};

angular
    .module('components')
    .component('todoList',todoList);