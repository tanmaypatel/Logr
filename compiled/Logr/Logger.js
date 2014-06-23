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
        return Logger;
    })();
    Logr.Logger = Logger;
})(Logr || (Logr = {}));
