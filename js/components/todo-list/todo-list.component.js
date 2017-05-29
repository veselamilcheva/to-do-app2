var todoList = {
    templateUrl: 'js/components/todo-list/todo-list.html',
    controller: 'TodoController'
};

angular
    .module('components')
    .component('todoList',todoList);