class FormCtrl {
    constructor($state, $mdDialog , $scope) {
        'ngInject';

        this.$State = $state;
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
        this.inputText = "Hello";
        this.showConfirm = this.showConfirm.bind(this);
    }

    showConfirm(ev) {
        console.log('hey');
        // var confirm = this.$mdDialog.confirm("Test")
        //     .title('Would you like to delete your debt?')
        //     .textContent('All of the banks have agreed to forgive you your debts.')
        //     .ariaLabel('Lucky day')
        //     .targetEvent(ev)
        //     .ok('Please do it!')
        //     .cancel('Sounds like a scam');
        //
        // this.$mdDialog.show(confirm).then(function() {
        //     this.$scope.status = 'You decided to get rid of your debt.';
        // }, function() {
        //     this.$scope.status = 'You decided to keep your debt.';
        // });
        this.$mdDialog.show({
            template: '<h2>DIALOG</h2>',
            bindToController: true,
            controllerAs: 'vm',
            controller: FormCtrl,
            clickOutsideToClose: true,
            preserveScope: true,
        });
    };

};

// app.controller('FormCtrl' , ['$state' , '$mdDialog',
//     function($state , $mdDialog){
//     this.addP = addP;
//
// function addP(){
//     console.log('inside add !!!');
//     // var alert;
//     // alert = $mdDialog.alert({
//     //     title: 'Attention',
//     //     textContent: 'Are you sure you want to submit ?',
//     //     ok: 'Close',
//     //     controllerAs: 'ctrl',
//     //     controller: 'FormCtrl'
//     // });
//     // $mdDialog
//     //     .show(alert)
//     //     .finally(function() {
//     //         alert = undefined;
//     //     });
// };
//
// }]);

angular
    .module("app", ["ngMaterial"])
    .component('test', {
        bindings: {
            text: '<'
        }
    })
.controller('FormCtrl',FormCtrl);
export default FormCtrl;

