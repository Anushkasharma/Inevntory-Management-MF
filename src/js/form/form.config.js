function FormConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.form' , {
            url: '/form',
            controller: 'FormCntrl',
            controllerAs: '$formcntrl',
            templateUrl: 'form/form.html',
            title: 'Form'

        });
};

export default FormConfig;