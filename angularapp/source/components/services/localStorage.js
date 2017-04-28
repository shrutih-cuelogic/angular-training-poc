(function() {
    angular.module('localStorage.service', [])
    .service('serverLocalStorageService', ['localStorageService', serverLocalStorageService]);

    function serverLocalStorageService(localStorageService) {

    var service = {};

    function set(keyName, keyValue) {
        return localStorageService.set(keyName, keyValue);
    }

    function get(getKey) {
        return localStorageService.get(getKey);
    }

    function isSupported() {
        return localStorageService.isSupported;
    }

    function clearAll() {
        return localStorageService.clearAll();
    }

    function remove(removeKey) {
        return localStorageService.remove(removeKey);
    }

    service.set = set;
    service.get = get;
    service.clearAll = clearAll;
    service.remove = remove;
    service.isSupported = isSupported;

    return service;

    };

})();