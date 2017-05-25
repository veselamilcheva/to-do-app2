var todo = {
    templateUrl: 'js/common/todo.html',
    controller: 'TodoController'
}

angular
    .module('app',[])
    .component('TodoController',TodoController);