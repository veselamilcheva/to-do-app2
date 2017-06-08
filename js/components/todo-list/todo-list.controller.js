function TodoListController() {
    
    var vm = this;


    vm.delete = function (event) {
        vm.deleteList({
           $event: event
        });
    }
};

angular
    .module('components')
    .controller('TodoListController',TodoListController);