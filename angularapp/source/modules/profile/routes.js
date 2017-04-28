(function() {
    'use strict';

    angular.module('profile')
        .config(['$stateProvider', stateProvider])

    function stateProvider ($stateProvider) {

        $stateProvider
            .state('profile', {
                url: '/profile',
                templateUrl: '/source/modules/profile/views/profile.html',
                controller: 'profileController'
            })
    };

})();