function TodoListController() {
    
    var vm = this;



     vm.$onChanges = function(changes) {
          console.log(changes);
            if ( changes.list.currentValue ) {
               vm.listNew = angular.copy(changes.list.currentValue);  // rule everytime todo changes you give the current value to do 
        } 
      }



    vm.delete = function (event) {
        vm.deleteList({
           $event: event
        });
    }

    vm.toggle = function (event) {
        vm.toggleList({
           $event: event
        });
    }

     vm.update = function (event) {
        vm.updateList({
           $event: event
        });
    }
     vm.toggleAll = function(event) {
        vm.toogleallList({
            $event: event
        })
     }
     
  //  vm.toggleAll = function(event) {

  //       vm.listNew.forEach(function(el) {
  //          if (vm.isAllSelected === true) {
  //             el.completed = true;
  //            } else {
  //             el.completed = false;
  //            }
  //       })

     
  // }

    
};

angular
    .module('components')
    .controller('TodoListController',TodoListController);