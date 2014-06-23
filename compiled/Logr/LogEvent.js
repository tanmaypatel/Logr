var Logr;
(function (Logr) {
    var LogEvent = (function () {
        function LogEvent() {
        }
        Object.defineProperty(LogEvent.prototype, "loggerName", {
            get: function () {
                return this._loggerName;
            },
            set: function (value) {
                this._loggerName = value;
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
