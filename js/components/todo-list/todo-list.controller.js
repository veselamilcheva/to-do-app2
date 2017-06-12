function TodoListController() {
    
    var vm = this;


    vm.delete = function (event) {
        vm.deleteList({
           $event: event
        });
    }

    vm.toggle = function (event) {
        vm.toggleList({
           $event: event
        });
    }

     vm.update = function (event) {
        vm.updateList({
           $event: event
        });
    }

    
};

angular
    .module('components')
    .controller('TodoListController',TodoListController);