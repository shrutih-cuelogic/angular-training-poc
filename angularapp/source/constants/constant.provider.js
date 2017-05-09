(function() {
    angular.module('constant.provider', [])
        .provider('constantProvider', [ConstantProvider]);

    function ConstantProvider() {
        var pattern = {
            chkemailFormat: /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,}$/,
            chkimageFormat: /^https?:\/\/(?:[a-z0-9_x\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)$/i
        }

        this.$get = function() {
            return pattern;
        }
    };

})();
