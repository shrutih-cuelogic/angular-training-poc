(function() {
	angular.module('auth')
		.controller('loginController',['$scope', '$state', 'serverLocalStorageService', 'loginService', 'profileService', 'constantProvider', LoginCntrl]);


	function LoginCntrl($scope, $state, serverLocalStorageService, loginService, profileService, constantProvider) {
		$scope.error = "";
		$scope.chkvalidemail = constantProvider.chkemailFormat;
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