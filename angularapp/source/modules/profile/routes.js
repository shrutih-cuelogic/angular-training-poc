(function() {
    'use strict';

    angular.module('profile')
        .config(['$stateProvider', stateProvider])

    function stateProvider ($stateProvider) {

        $stateProvider
            .state('profile', {
                url: '/profile/:id',
                templateUrl: '/source/modules/profile/views/profile.html',
                controller: 'profileController'
            })
            .state('editprofile', {
                url: '/editprofile/:id',
                templateUrl: '/source/modules/profile/views/editprofile.html',
                controller: 'profileController'
            })
    };

})();