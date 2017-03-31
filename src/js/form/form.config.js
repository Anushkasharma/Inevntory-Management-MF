function FormConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.form' , {
            url: '/form',
            controller: 'FormCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'form/form.html',
            title: 'Form'
            // $inject: 'ngMaterial'
        });
};

export default FormConfig;