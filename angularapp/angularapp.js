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
})();
