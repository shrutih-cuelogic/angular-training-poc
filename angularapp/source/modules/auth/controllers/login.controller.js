(function() {
	angular.module('auth')
		.controller('loginController',['$scope', '$state', LoginCntrl])


	function LoginCntrl($scope, $state) {
		$scope.error = "";
		$scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,}$/;
		$scope.login = function(){
			var email = 'shrutihiremath49@gmail.com'
			var password = '12345'
			if($scope.email == email && $scope.password == password){
				alert("Login succesfully..!!!");
				$state.go('profile');
			}
			else{
				$scope.error = "Invalid Credentials..!!!"
			}
			
		};
		
	};
})();