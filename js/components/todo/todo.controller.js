function TodoController() {
    var vm = this;


     vm.$onInit = function() {
      vm.checked = false;
    }

    vm.deleteTodo = function(index) {
      // Call parent
      vm.onDelete({
        $event: {
          index: index
        }
      });
  };

  vm.toggleTodo = function(index, checked) {

      console.log(checked);
      // Call parent
      vm.onToggle({
        $event: {
          index: index,
          completed: !checked
        }
      });
  };

   vm.updateTodo = function updateTodo(index,description) {
    vm.showtodo = false;
    // Call parent
    vm.onUpdate({
      $event: {
        index: index,
        description: description
      }
    });

  };

};

angular
    .module('components')
    .controller('TodoController',TodoController);