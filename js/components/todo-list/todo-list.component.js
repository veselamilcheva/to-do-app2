var todoList = {
    templateUrl: 'js/components/todo-list/todo-list.html',
    controller: 'TodoController',
    bindings: {
        list: '<',
        deleteParent: '&'
    }
};

angular
    .module('components')
    .component('todoList',todoList);