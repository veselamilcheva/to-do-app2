var todo = {
    templateUrl: 'js/common/todo',
    controller: TodoController
}

angular
    .module('common.todo')
    .component('TodoController',TodoController);