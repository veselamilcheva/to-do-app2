function TodoController() {
    var vm = this;


     vm.$onInit = function() {
  
    }

    vm.deleteTodo = function(index) {
      // Call parent
      vm.onDelete({
        $event: {
          index: index
        }
      });
  };

  vm.toggleTodo = function(index, event) {
      // Call parent
      vm.onToggle({
        $event: {
          index: index,
          completed: event
        }
      });
  };

   vm.updateTodo = function updateTodo(index,description) {
    // Call parent
    vm.onUpdate({
      $event: {
        index: index,
        description: description
      }
    });

    vm.editing = false;
  };

};

angular
    .module('components')
    .controller('TodoController',TodoController);