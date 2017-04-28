(function(){
	angular.module('login.service', [])
	.service('loginService', ['$q', 'serverLocalStorageService', 'profileService', LoginService]);

	function LoginService($q, serverLocalStorageService, profileService) {

		var service = {};

	    function validateLogin(email, password) {
	        return $q(function(resolve, reject) {
	            valid = false;
	            var user_records = profileService.getUserAllDetails();
	            console.log(user_records);
	            for (var i = 0; i < user_records.length; i++) {
	                if (user_records[i]['email'] == email && user_records[i]['password'] == password) {
	                    valid = true;
	                    break;
	                }
	            }
	            if (valid) {
	                resolve(user_records[i]);
	            } else {
	                reject(false);
	            }
	        });
	    }
	    service.validateLogin = validateLogin;
	    return service;
		};
})();