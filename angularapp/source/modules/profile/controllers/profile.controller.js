(function() {
	angular.module('profile')
		.controller('profileController',['$scope', '$state', '$stateParams', 'serverLocalStorageService', 'profileService', ProfileCntrl]);


	function ProfileCntrl($scope, $state, $stateParams, serverLocalStorageService, profileService) {
		console.log(profileService);
		$scope.all_user_details= profileService.getUserAllDetails();

	    if($stateParams.id){
	       $scope.user_details = profileService.getSingleUserInfo($stateParams.id);
	    }

		$scope.logout = function () {
			alert("here111");
			serverLocalStorageService.clearAll();
	        $state.go('login');
	        serverLocalStorageService.get('keyid');
		}
	};
	
})();