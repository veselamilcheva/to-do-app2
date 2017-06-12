function AddController() {

    var vm = this;

    vm.$onInit = function() {
       vm.newTodoItem = '';
    }

    vm.addTodo = function(newTodoItem) {
        // Call parent
        vm.onAdd({
          $event: {
            newTodoItem: newTodoItem
          }
        });
         vm.newTodoItem = '';
    }
   
};
angular
    .module('components')
    .controller('AddController',AddController);