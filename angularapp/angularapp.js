(function() {
	
	angular.module('angularapp', [
		'ui.router',
	    'auth',
	    'profile',
	]).config(['$urlRouterProvider', function($urlRouterProvider) {
	    	$urlRouterProvider.otherwise('/login');
	}]);

})();