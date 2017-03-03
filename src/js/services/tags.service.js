export default class Tags {
  constructor(JWT, AppConstants, $http, $q , $httpBackend) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;

  }
//Since singleton class can only create 1 instance of this class.
  getAll() {
      return this._$http.get('./mockdata/tags.json');
  }
}
