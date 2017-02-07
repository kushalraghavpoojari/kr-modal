(function() {
    'use strict';
    angular.module('kr-modal', []);
    angular
        .module('kr-modal')
        .directive('modalDialog', modalDialog);

    // modalDialog.$inject = [''];

    /* @ngInject */
    function modalDialog() {
        var directive = {
            bindToController: true,
            controller: ModalDialogController,
            controllerAs: 'modalDialogVm',
            link: link,
            restrict: 'E',
            templateUrl: './modal/modal-dialog.directive.html',
            scope: {
                content: '@',
                title: '@',
                show: '='
            }
        };

        function link(scope, element, attrs) {
        }

        return directive;
    }

    // ModalDialogController.$inject = [''];

    /* @ngInject */
    function ModalDialogController() {
        var vm = this;
        vm.hideModal = hideModal;

        function hideModal() {
            vm.show = false;
        }
    }
})();
