function AppController (store) {

     var vm = this;

    vm.$onInit = function() {
        vm.todos = store.getTodo();
    }

    vm.deleteTodo = function(event){
        store.deleteTodo(event);
    }
    

};

angular
    .module('common')
    .controller('AppController', AppController);