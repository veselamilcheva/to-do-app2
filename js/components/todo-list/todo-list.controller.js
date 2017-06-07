function TodoListController() {
    
    var vm = this;


    vm.delete = function (event) {
        vm.deleteParent({
           $event: {
                index: event.index
              }  
        });
    }
};

angular
    .module('components')
    .controller('TodoListController',TodoListController);