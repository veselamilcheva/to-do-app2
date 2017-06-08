var todoList = {
    templateUrl: 'js/components/todo-list/todo-list.html',
    controller: 'TodoListController',
    bindings: {
        list: '<',
        deleteList: '&'
    }
};

angular
    .module('components')
    .component('todoList',todoList);