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
        };

})();