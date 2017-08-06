var todoList = {
    templateUrl: 'js/components/todo-list/todo-list.html',
    controller: 'TodoListController',
    bindings: {
        list: '<',
        deleteList: '&',
        toggleList: '&',
        updateList: '&',
        toogleallList: '&',
        deleteAll: '&',
        deleteTodos: '&'

    }
};

angular
    .module('components')
    .component('todoList',todoList);