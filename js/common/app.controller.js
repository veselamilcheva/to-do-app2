function AppController (store) {

   
     var vm = this;

    vm.$onInit = function() {

         store.getTodo().then(function(response){ 
            vm.state = response; 
            });

    }

    vm.deleteTodo = function(event) {
        store.deleteTodo(event.index);
    }

    vm.addTodo = function(event) {
        store.setTodo(event.newTodoItem);
    }

    vm.toggleTodo = function(event) {     
        store.toggleTodo(event);
    }

    vm.updateTodo = function(event) {
       store.updateTodo(event);
        
    }
    vm.toggleallTodo = function(event) {
        store.toggleAllTodo(event);
    }

    vm.deleteAllTodo = function() {
        store.deleteAll();
    }
    vm.deleteAllTodosNow = function() {
        console.log('Alert');
        store.deleteAllTodos();
    }

};

angular
    .module('common')
    .controller('AppController', AppController);