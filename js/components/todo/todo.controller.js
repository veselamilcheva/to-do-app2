function TodoController() {
    var vm = this;


    vm.$onInit = function() {
    
    }

    vm.$onChanges = function() {
      vm.todoNew = angular.copy(vm.todo);
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

      // Call parent
      vm.onToggle({
        $event: {
          index: index,
          completed: !checked
        }
      });
  };

   vm.updateTodo = function updateTodo(index, description) {
    vm.showtodo = false;
    // Call parent
    vm.onUpdate({
      $event: {
        index: index,
        todoText: description
      }
    });

  };

};

angular
    .module('components')
    .controller('TodoController',TodoController);