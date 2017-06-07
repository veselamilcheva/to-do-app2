function AppController (store) {

     var vm = this;

    vm.$onInit = function() {
        vm.todos = store.getInfo();
    }

};

angular
    .module('common')
    .controller('AppController', AppController);