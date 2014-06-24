var Logr;
(function (Logr) {
    var LoggerConfig = (function () {
        function LoggerConfig(name, level) {
            this._level = Logr.LogLevel.ALL;
            this._enabled = true;
            this._logStackTraceForErrors = false;
            this._name = name;
            this._level = level;
        }
        Object.defineProperty(LoggerConfig.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(LoggerConfig.prototype, "level", {
            get: function () {
                return this._level;
            },
            set: function (value) {
                this._level = value;
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(LoggerConfig.prototype, "enabled", {
            get: function () {
                return this._enabled;
            },
            set: function (value) {
                this._enabled = value;
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(LoggerConfig.prototype, "logStackTraceForErrors", {
            get: function () {
                return this._logStackTraceForErrors;
            },
            set: function (value) {
                this._logStackTraceForErrors = value;
            },
            enumerable: true,
            configurable: true
        });

        return LoggerConfig;
    })();
    Logr.LoggerConfig = LoggerConfig;
})(Logr || (Logr = {}));
