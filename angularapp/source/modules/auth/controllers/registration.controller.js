(function() {

	angular.module('auth')
	.controller('regController',['$scope', '$state', 'profileService', 'constantProvider',  RegisterCntrl])

	function RegisterCntrl($scope, $state, profileService, constantProvider) {
		
		$scope.users = {};
    	user_details = profileService.getUserAllDetails();
    	$scope.chkvalidemail = constantProvider.chkemailFormat;;
    	$scope.chkvalidimage = constantProvider.chkimageFormat;

	    $scope.matchPassword = function() {
	        $scope.registerForm.confirm_password.$error.dontMatch = $scope.password !== $scope.confirm_password;
	    };

	    $scope.registration = function() {
	        flag = 0;
	        for (var i = 0; i < user_details.length; i++) {
	            if (user_details[i].id == $scope.id) {
	                flag = 1;
	                break;
	            }
	        }
	        if (flag == 0) {
	            $scope.users = {
	                id: parseInt($scope.id),
	                firstname: $scope.firstname,
	                lastname: $scope.lastname,
	                email: $scope.email,
	                password: $scope.password,
	                confirm_password: $scope.confirm_password,
	                gender: $scope.gender,
	                address: $scope.address,
	                userimg: $scope.userimg
	            }
	            profileService.getUserAllDetails().push($scope.users);
	            $state.go('login');
	            alert('You are successfully registered');
	        } else {
	            alert("This id already exists..!!!");
	        }
		};
	}

})();