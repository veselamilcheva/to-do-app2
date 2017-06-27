function AppController (store, todoService) {

    todoService.getTodo();

     var vm = this;

    vm.$onInit = function() {
        vm.state = store.getTodo();
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
         console.log(event);
         store.toggleAllTodo(event);
    }
    

};

angular
    .module('common')
    .controller('AppController', AppController);