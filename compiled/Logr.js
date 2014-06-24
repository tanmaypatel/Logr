var Logr;
(function (Logr) {
    (function (Formatters) {
        ;

        var ErrorFormatter = (function () {
            function ErrorFormatter() {
            }
            ErrorFormatter.prototype.getMessage = function (error) {
                if (error.message) {
                    return error.message;
                } else {
                    return error.toString ? error.toString() : String(error);
                }
            };

            ErrorFormatter.prototype.format = function (error, showStacktrace) {
                if (error) {
                    var errorString = error.name ? error.name + ': ' : 'Error: ';
                    errorString += this.getMessage(error);
                    errorString += '\r\n';
                    errorString += error.fileName ? ' in file ' + error.fileName : '';
                    errorString += error.lineNumber ? ' @ line ' + error.lineNumber : '';

                    if (showStacktrace && error.stack) {
                        errorString += '\r\n';
                        errorString += error.stack;
                    }

                    return errorString;
                } else {
                    return '';
                }
            };
            return ErrorFormatter;
        })();
        Formatters.ErrorFormatter = ErrorFormatter;
    })(Logr.Formatters || (Logr.Formatters = {}));
    var Formatters = Logr.Formatters;
})(Logr || (Logr = {}));
var Logr;
(function (Logr) {
    (function (LogLevel) {
        LogLevel[LogLevel["ALL"] = Number.MIN_VALUE] = "ALL";
        LogLevel[LogLevel["TRACE"] = 10000] = "TRACE";
        LogLevel[LogLevel["DEBUG"] = 20000] = "DEBUG";
        LogLevel[LogLevel["INFO"] = 30000] = "INFO";
        LogLevel[LogLevel["WARN"] = 40000] = "WARN";
        LogLevel[LogLevel["ERROR"] = 50000] = "ERROR";
        LogLevel[LogLevel["FATAL"] = 60000] = "FATAL";
        LogLevel[LogLevel["OFF"] = Number.MAX_VALUE] = "OFF";
    })(Logr.LogLevel || (Logr.LogLevel = {}));
    var LogLevel = Logr.LogLevel;
})(Logr || (Logr = {}));
var Logr;
(function (Logr) {
    var LoggerConfig = (function () {
        function LoggerConfig(name, parentLoggerConfig, level) {
            this._name = '';
            this._level = Logr.LogLevel.ALL;
            this._enabled = true;
            this._logStackTraceForErrors = true;
            this._publishers = [];
            this._name = name;
            this._parentLoggerConfig = parentLoggerConfig;

            if (level) {
                this._level = level;
            }
        }
        Object.defineProperty(LoggerConfig.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(LoggerConfig.prototype, "parentLoggerConfig", {
            get: function () {
                return this._parentLoggerConfig;
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


        LoggerConfig.prototype.addPublisher = function (publisher) {
            this._publishers.push(publisher);
        };

        LoggerConfig.prototype.removePublisher = function (publisher) {
            this._publishers.push(publisher);
        };
        return LoggerConfig;
    })();
    Logr.LoggerConfig = LoggerConfig;
})(Logr || (Logr = {}));
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
var Logr;
(function (Logr) {
    var Logger = (function () {
        function Logger(loggerConfig) {
            this._loggerConfig = loggerConfig;
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
            var logEvent = new Logr.LogEvent(this.loggerConfig, Logr.Utils.DateTimeUtils.now(), message);
        };
        return Logger;
    })();
    Logr.Logger = Logger;
})(Logr || (Logr = {}));
var Logr;
(function (Logr) {
    var Manager = (function () {
        function Manager() {
        }
        Manager.getLogger = function (name) {
            var logger = null;

            if (!name) {
                logger = Manager._rootLogger;
            } else {
                var matchedLogger = _.find(Manager._loggers, function () {
                    return (matchedLogger.loggerConfig.name == name);
                });

                if (matchedLogger) {
                    logger = matchedLogger;
                } else {
                    var newLoggerConfig = new Logr.LoggerConfig(name, Manager._rootLoggerConfig, null);
                    var newLogger = new Logr.Logger(newLoggerConfig);
                    Manager._loggers.push(newLogger);

                    logger = newLogger;
                }
            }

            return logger;
        };
        Manager._rootLoggerConfig = new Logr.LoggerConfig('', null, Logr.LogLevel.ALL);

        Manager._rootLogger = new Logr.Logger(Manager._rootLoggerConfig);
        return Manager;
    })();
    Logr.Manager = Manager;
})(Logr || (Logr = {}));
