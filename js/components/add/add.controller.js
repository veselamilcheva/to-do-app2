function AddController(store) {

    var vm = this;

    vm.$onInit = function() {

    };

    vm.addTodo = function(newTodoItem) {
      store.setInfo(newTodoItem);
      console.log(store.getInfo());
    }

}
angular
    .module('components')
    .controller('AddController',AddController);