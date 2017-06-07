function AddController(store) {

    var vm = this;

    vm.$onInit = function() {

    };

    vm.addTodo = function(newTodoItem) {
      store.setTodo(newTodoItem);
    }

}
angular
    .module('components')
    .controller('AddController',AddController);