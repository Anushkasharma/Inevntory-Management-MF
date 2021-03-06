class AppHeaderCtrl {
  constructor(AppConstants, User, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.currentUser = User.current;

    $scope.$watch('User.current', (newUser) => {
      this.currentUser = newUser;
    })
  }
    addForm(){
        window.location.reload(true);
    };
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
