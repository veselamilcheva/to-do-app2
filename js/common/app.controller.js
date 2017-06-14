function AppController (store) {

     var vm = this;

    vm.$onInit = function() {
        vm.todos = store.getTodo();
    }

    vm.deleteTodo = function(event) {
        store.deleteTodo(event.index);
    }

    vm.addTodo = function(event) {

        store.setTodo(event.newTodoItem);
    }

    vm.toggleTodo = function(event) { 
        console.log(event);

        store.toggleTodo(event);
    }

    vm.updateTodo = function(event) {
      
        console.log(event);
       store.updateTodo(event);
        
    }
    

};

angular
    .module('common')
    .controller('AppController', AppController);