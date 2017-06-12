var add = {
    templateUrl: 'js/components/add/add.html',
    controller: 'AddController',
    bindings: {
        onAdd: '&'
    }
};
    

angular
    .module('components')
    .component('add', add);