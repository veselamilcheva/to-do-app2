function TodoController() {
    var vm = this;

    vm.deleteTodo = function(index) {
    // Call parent
    vm.onDelete({
      $event: {
        index: index
      }
    });
  };

};

angular
    .module('components')
    .controller('TodoController',TodoController);