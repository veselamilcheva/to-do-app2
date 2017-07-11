function AppController (store) {

   
     var vm = this;

    vm.$onInit = function() {

         store.getTodo().then(function(response){ 
             console.log(response);
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
         console.log(event);
         store.toggleAllTodo(event);
    }
    

};

angular
    .module('common')
    .controller('AppController', AppController);