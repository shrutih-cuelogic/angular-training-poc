(function() {

    angular.module('angularapp', [
        'ui.router',
        'LocalStorageModule',
        'auth',
        'profile',
        'services',
        'constants',
    ]).config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
    }])
})();
