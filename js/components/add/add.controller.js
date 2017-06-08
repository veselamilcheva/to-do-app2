function AddController(store) {

    var vm = this;

    vm.$onInit = function() {
        vm.newTodoItem = '';

    };

    vm.addTodo = function(newTodoItem) {
      store.setTodo(newTodoItem);
      vm.newTodoItem = '';
    }

}
angular
    .module('components')
    .controller('AddController',AddController);