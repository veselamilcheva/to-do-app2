var filter = {
    templateUrl: 'js/components/filter/filter.html'
    //controller: 'FilterController'
};
    

angular
    .module('components.filter', [])
    .component('filter', filter);