(function() {
	angular.module('profile')
		.controller('profileController',['$scope', '$state', 'serverLocalStorageService', ProfileCntrl]);


	function ProfileCntrl($scope, $state, serverLocalStorageService) {
		$scope.logout = function () {
			alert("here111");
			serverLocalStorageService.clearAll();
	        $state.go('login');
	        serverLocalStorageService.get('keyid');
		}
	};
	
})();