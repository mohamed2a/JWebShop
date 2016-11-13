(function() {
    'use strict';

    angular
        .module('jWebShopApp')
        .controller('OrderObjectDetailController', OrderObjectDetailController);

    OrderObjectDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'OrderObject', 'OrderLine'];

    function OrderObjectDetailController($scope, $rootScope, $stateParams, previousState, entity, OrderObject, OrderLine) {
        var vm = this;

        vm.orderObject = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jWebShopApp:orderObjectUpdate', function(event, result) {
            vm.orderObject = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
