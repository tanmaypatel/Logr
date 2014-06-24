var Logr;
(function (Logr) {
    var Logger = (function () {
        function Logger(name, level) {
            this._loggerConfig = new Logr.LoggerConfig(name, level);
        }
        Object.defineProperty(Logger.prototype, "loggerConfig", {
            get: function () {
                return this._loggerConfig;
            },
            enumerable: true,
            configurable: true
        });

        Logger.prototype.log = function (level, message) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 2); _i++) {
                args[_i] = arguments[_i + 2];
            }
            var timestampForNow = Date.now ? Date.now() : new Date().getTime();
            var logEvent = new Logr.LogEvent(this.loggerConfig, timestampForNow, message);
        };
        return Logger;
    })();
    Logr.Logger = Logger;
})(Logr || (Logr = {}));