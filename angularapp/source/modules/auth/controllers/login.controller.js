(function() {
	angular.module('auth')
		.controller('loginController',['$scope', '$state', 'serverLocalStorageService', 'loginService', 'profileService', LoginCntrl]);


	function LoginCntrl($scope, $state, serverLocalStorageService, loginService, profileService) {
		$scope.error = "";
		$scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,}$/;
		$scope.login = function(){
			loginService.validateLogin($scope.email, $scope.password)
				.then(function(response) {
	                if (serverLocalStorageService.isSupported) {
	                	var userInfo = profileService.getSingleUserInfoByEmail($scope.email);
	                    serverLocalStorageService.set('keyid', userInfo.id);
	                    $state.go('profile' , { "id": userInfo.id});
	                } else {
	                    $scope.error = "Local storage not supported.";
	                }
	            }, function(rejected) {
	                $scope.error = "Your email id or password is not correct";
	            })
		};
	};
	
})();