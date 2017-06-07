function AppController (store) {

     var vm = this;

    vm.$onInit = function() {
        vm.todos = store.getTodo();
    }

    vm.deleteTodo = function(index){
        store.deleteTodo(index);
    }
    

};

angular
    .module('common')
    .controller('AppController', AppController);