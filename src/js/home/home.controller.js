class HomeCtrl {
    constructor(User, Tags, AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;

    // Get list of all tags
    Tags
      .getAll()
      .then(
        (results) => {
          this.tagsLoaded = true;
          this.tags = results.data.tags;
        }
      );


    // Set current list to either feed or all, depending on auth status.
    this.listConfig = {
      type: User.current ? 'feed' : 'all'
    };
  }


  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }


}

export default HomeCtrl;
