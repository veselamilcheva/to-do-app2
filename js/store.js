angular
    .module('root')
    .service('store', function () {

        var todos = [];

        return {
            getInfo: getInfo,
            setInfo: setInfo
        };

        // .................

        function getInfo() {
            return todos;
        }

        function setInfo(value) {
            todos.push({
                todoText: value,
                completed: false
            })
      
        }
});
