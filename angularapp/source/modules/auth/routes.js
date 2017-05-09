(function() {
    'use strict';

    angular.module('auth')
        .config(['$stateProvider', stateProvider]);

        function stateProvider($stateProvider) {

            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: '/source/modules/auth/views/login.html',
                    controller: 'loginController'
                })
                .state('registration', {
                    url: '/registration',
                    templateUrl: '/source/modules/auth/views/registration.html',
                    controller: 'regController'
                })
        };

})();