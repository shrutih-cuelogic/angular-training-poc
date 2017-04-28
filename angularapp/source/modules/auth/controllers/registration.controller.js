(function() {

	angular.module('auth')
	.controller('regController',['$scope', RegisterCntrl])

	function RegisterCntrl($scope) {
		
		$scope.registration = function(){
			alert("in registration")
		};
	};

})();