(function() {
    angular.module('profile.service', [])
    .service('profileService', [ProfileService]);

    function ProfileService() {

        var service = {};
        var user_details = [{
            'id': 1,
            'email': 'deepalibavi@gmail.com',
            'password': 'deepali',
            'firstname': 'Deepali',
            'lastname': 'Bavi',
            'gender': 'female',
            'address': 'KP road,Pune',
            'userimg': "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
        }, {
            'id': 2,
            'email': 'shruti.hiremath@cuelogic.co.in',
            'password': 'shruti0409',
            'firstname': 'Shruti',
            'lastname': 'Hiremath',
            'gender': 'female',
            'address': 'Sinhgad road,Pune',
            'userimg': "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
        }, {
            'id': 3,
            'email': 'shwetahiremath12@gmail.com',
            'password': 'shweta49',
            'firstname': 'Shweta',
            'lastname': 'Hiremath',
            'gender': 'female',
            'address': 'Aundh road,Pune',
            'userimg': "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
        }, {
            'id': 4,
            'email': 'tushar.mate@cuelogic.co.in',
            'password': 'tushar@123',
            'firstname': 'Tushar',
            'lastname': 'Mate',
            'gender': 'male',
            'address': 'Paud road,Pune',
            'userimg': "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
        }, ]

        function getUserAllDetails() {
            return user_details;
        }

        function getSingleUserInfo(user_id){
            var user_details = getUserAllDetails();
            for(var i = 0; i < user_details.length; i++) {
                if(user_details[i].id == user_id){
                    user_details = user_details[i];
                }
            }
            return user_details;
        }

        service.getUserAllDetails = getUserAllDetails;
        service.getSingleUserInfo = getSingleUserInfo;
        return service;
    };

})();
