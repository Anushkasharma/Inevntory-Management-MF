export default class Tags {
  constructor(JWT, AppConstants, $http, $q , $httpBackend) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;

  }

  getAll() {

    return this._$http({
      url: this._AppConstants.api + '/tags',
      method: 'GET',
    }).then((res) => res.data.tags);

  }

  // getTags() {
  //     // httpBackend.whenGET('rs/orderGroup/100/cloneableComponents').respond(cloneableComponents);
  //     $httpBackend.whenGET(this._AppConstants.api + '/tags').respond('tags.json')
  //   return this._$http.get('tags.json').then(
  //       (res) => tags);
  // }

}
