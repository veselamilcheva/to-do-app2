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

        //vm.todos.completed = !vm.todos.completed;
    }

    vm.updateTodo = function(event) {

       vm.todos[event.index].description = event.description;
        
    }
    

};

angular
    .module('common')
    .controller('AppController', AppController);