(function() {

    angular.module('angularapp', [
        'ui.router',
        'LocalStorageModule',
        'auth',
        'profile',
        'services'
    ]).config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
    }])
    // .run(['$rootScope', '$state', '$location', 'serverLocalStorageService', 
    // 	function($rootScope, $state,  $location, serverLocalStorageService) {
	   //  	$rootScope.$on('$stateChangeStart', function(event, next, current){
	   //  		// console.log(serverLocalStorageService.get('keyid'));
	   //  		// if (serverLocalStorageService.get('tokenid') === null || serverLocalStorageService.get('tokenid') === undefined) {
	   //  		// 	// event.preventDefault();
	   //  		// 	$state.go('login');
	   //  		// } 
	   //  		// else {
	   //  		// 	$state.go('profile');
	   //  		// }
    //             if (serverLocalStorageService.get('tokenid') == null || serverLocalStorageService.get('tokenid') == undefined) {
    //                 $state.go('login');
    //             } else if (next.originalPath == "/login" && serverLocalStorageService.get('tokenid') != null && serverLocalStorageService.get('tokenid') != undefined) {
    //                 $state.go('profile');
    //             }
	   //  	});
	   //  }]);
})();
