function TodoController() {
    var vm = this;

    vm.deleteTodo = function(event) {
    // Call parent
    vm.delete({
      $event: {
        index: vm.index
      }
    });
    console.log(event);
  };

};

angular
    .module('components')
    .controller('TodoController',TodoController);