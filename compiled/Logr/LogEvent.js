var Logr;
(function (Logr) {
    var LogEvent = (function () {
        function LogEvent(loggerConfig, timestamp, message) {
            this._loggerConfig = loggerConfig;
            this._timestamp = timestamp;
            this._message = message;
        }
        Object.defineProperty(LogEvent.prototype, "loggerConfig", {
            get: function () {
                return this._loggerConfig;
            },
            set: function (value) {
                this._loggerConfig = value;
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(LogEvent.prototype, "level", {
            get: function () {
                return this._level;
            },
            set: function (value) {
                this._level = value;
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(LogEvent.prototype, "timestamp", {
            get: function () {
                return this._timestamp;
            },
            set: function (value) {
                this._timestamp = value;
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(LogEvent.prototype, "message", {
            get: function () {
                return this._message;
            },
            set: function (value) {
                this._message = value;
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(LogEvent.prototype, "additionalData", {
            get: function () {
                return this._additionalData;
            },
            set: function (value) {
                this._additionalData = value;
            },
            enumerable: true,
            configurable: true
        });

        return LogEvent;
    })();
    Logr.LogEvent = LogEvent;
})(Logr || (Logr = {}));
