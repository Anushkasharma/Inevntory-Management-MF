class HomeCtrl {
  constructor(User, Tags, AppConstants, $scope , $http) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;

    // Get list of all tags
    Tags
      .getAll()
      .then(
        (tags) => {
          this.tagsLoaded = true;
          this.tags = tags
        }
      );

    // Tags
    //     .getTags()
    //     .then((tags) => {
    //       this.tagsLoaded = true;
    //       this.tags = tags;
    //     }
    //     );

    // $http.get('./mockdata/tags.json').then(function (data) {
    //           console.log('in tags.json call 1');
    //           this.tagsLoaded = true;
    //           $scope.tags = data.tags;
    //       });

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
