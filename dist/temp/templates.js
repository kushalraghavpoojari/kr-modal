angular.module('templates').run(['$templateCache', function($templateCache) {$templateCache.put('modal-dialog.directive.html','<div class=ng-modal ng-if=modalDialogVm.show><div class=ng-modal-overlay></div><div class=ng-modal-dialog><div class=modal-head><span class=modal-head-padding>{{modalDialogVm.title}}</span></div><div class="ng-modal-dialog-content typography-b2"><div>{{modalDialogVm.content}}</div></div><div class=ng-modal-footer><button class="btn btn-md btn-primary" ng-click=modalDialogVm.hideModal()>Ok</button></div></div></div>');}]);