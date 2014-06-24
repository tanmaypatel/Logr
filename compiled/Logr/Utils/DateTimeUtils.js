var Logr;
(function (Logr) {
    (function (Utils) {
        var DateTimeUtils = (function () {
            function DateTimeUtils() {
            }
            DateTimeUtils.now = function () {
                var timestampForNow = Date.now ? Date.now() : new Date().getTime();
                return timestampForNow;
            };
            return DateTimeUtils;
        })();
        Utils.DateTimeUtils = DateTimeUtils;
    })(Logr.Utils || (Logr.Utils = {}));
    var Utils = Logr.Utils;
})(Logr || (Logr = {}));
