var todoList = {
    templateUrl: 'js/components/todo-list/todo-list.html',
    controller: 'TodoListController',
    bindings: {
        list: '<',
        deleteList: '&',
        toggleList: '&',
        updateList: '&',
        toogleallList: '&',
        deleteAll: '&'

    }
};

angular
    .module('components')
    .component('todoList',todoList);