function TodoController() {
    var vm = this;


    vm.$onInit = function() {
    
    }

    vm.$onChanges = function(changes) {
        if ( changes.todo.currentValue ) {
           vm.todoNew = angular.copy(changes.todo.currentValue);  
    } 
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

      vm.onToggle({
        $event: {
          index: index,
          completed: !checked
        }
      });
  };

   vm.updateTodo = function updateTodo(index, description, completed) {
    vm.showtodo = false;
  
    vm.onUpdate({
      $event: {
        index: index,
        todoText: description,
        completed: vm.todoNew.completed
      }
    });

  };
};

angular
    .module('components')
    .controller('TodoController',TodoController);