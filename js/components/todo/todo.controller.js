function TodoController(store) {
    
    var vm = this;

    vm.$onInit = function() {
        vm.todos = store.getInfo();

    }

};

angular
    .module('components')
    .controller('TodoController',TodoController);