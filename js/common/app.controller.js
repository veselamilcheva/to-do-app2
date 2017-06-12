function AppController (store) {

     var vm = this;

    vm.$onInit = function() {
        vm.todos = store.getTodo();
    }

    vm.deleteTodo = function(event) {
        store.deleteTodo(event);
    }

    vm.addTodo = function(event) {

        store.setTodo(event.newTodoItem);
    }

     vm.toggleTodo = function(event) {     
        //store.setTodo(event);
    }

    vm.updateTodo = function(event) {

        //this.todos[position].todoText = todoText;
        console.log(event);
    }
    

};

angular
    .module('common')
    .controller('AppController', AppController);