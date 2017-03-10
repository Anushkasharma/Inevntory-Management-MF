import angular from 'angular';

// Create the module where our functionality can attach to
let formModule = angular.module('app.form', []);

// Include our UI-Router config settings
import FormConfig from './form.config';
formModule.config(FormConfig);


// Controllers
import FormCtrl from './form.controller';
formModule.controller('FormCtrl', FormCtrl);


export default formModule;
