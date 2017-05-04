(function() {
    angular.module('profile')
        .controller('profileController', ['$scope', '$state', '$stateParams', 'serverLocalStorageService', 'profileService', ProfileCntrl]);


    function ProfileCntrl($scope, $state, $stateParams, serverLocalStorageService, profileService) {

        if ($stateParams.id) {
            $scope.user_details = angular.copy(profileService.getSingleUserInfoById($stateParams.id));
        }

        $scope.updateUserRecord = function(user) {
            if (user) {
                $scope.user_details = profileService.updateUserInfo(user);
            }
            $state.go('profile', { "id": user.id });
        }

        $scope.cancel = function(userID) {
            $state.go('profile', { "id": userID });
        }

        $scope.logout = function() {
            serverLocalStorageService.clearAll();
            $state.go('login');
            serverLocalStorageService.get('keyid');
        }
    };

})();
