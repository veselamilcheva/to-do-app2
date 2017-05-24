var todoList = {
    templateUrl: 'js/common/todo-list.html',
    controller: TodoController,
}

angular
    .module('common.todo')
    .component('todoList',todoList);