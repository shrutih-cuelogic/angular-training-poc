(function() {
	angular.module('auth')
		.controller('loginController',['$scope', '$state', 'serverLocalStorageService', 'loginService', LoginCntrl]);


	function LoginCntrl($scope, $state, serverLocalStorageService, loginService) {
		$scope.error = "";
		$scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,}$/;
		$scope.login = function(){
			loginService.validateLogin($scope.email, $scope.password)
				.then(function(response) {
	                if (serverLocalStorageService.isSupported) {
	                    serverLocalStorageService.set('keyid', $scope.email);
	                    $state.go('profile');
	                } else {
	                    $scope.error = "Local storage not supported.";
	                }
	            }, function(rejected) {
	                $scope.error = "Your email id or password is not correct";
	            })
		};
	};
	
})();