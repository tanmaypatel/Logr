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
        function LoggerConfig(name, parentLoggerConfig, level, publishers) {
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

            if (publishers) {
                for (var i = 0; i < publishers.length; i++) {
                    this._publishers.push(publishers[i]);
                }
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


        Object.defineProperty(LoggerConfig.prototype, "publishers", {
            get: function () {
                return this._publishers;
            },
            enumerable: true,
            configurable: true
        });

        LoggerConfig.prototype.getParents = function () {
            var parents = [];
            var currentLoggerConfig = this;

            while (currentLoggerConfig.parentLoggerConfig) {
                parents.push(currentLoggerConfig.parentLoggerConfig);
                currentLoggerConfig = currentLoggerConfig.parentLoggerConfig;
            }

            return parents;
        };
        return LoggerConfig;
    })();
    Logr.LoggerConfig = LoggerConfig;
})(Logr || (Logr = {}));
var Logr;
(function (Logr) {
    var LogEvent = (function () {
        function LogEvent(loggerName, level, timestamp, message) {
            this._loggerName = loggerName;
            this._level = level;
            this._timestamp = timestamp;
            this._message = message;
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

        Logger.prototype.isEnable = function () {
            return this.loggerConfig.enabled;
        };

        Logger.prototype.enable = function () {
            this.loggerConfig.enabled = true;
        };

        Logger.prototype.disable = function () {
            this.loggerConfig.enabled = false;
        };

        Logger.prototype.addPublisher = function (publisher) {
            this.loggerConfig.publishers.push(publisher);
        };

        Logger.prototype.removePublisher = function (publisher) {
            var publisherIndex = this.loggerConfig.publishers.indexOf(publisher);
            if (publisherIndex !== -1) {
                this.loggerConfig.publishers.splice(publisherIndex, 1);
            }
        };

        Logger.prototype.log = function (level, message, additionalArguments) {
            var logEvent = new Logr.LogEvent(this.loggerConfig.name, level, Logr.Utils.DateTimeUtils.now(), message);

            var parents = this.loggerConfig.getParents();

            var publishers = [];
            var isLoggingEnabled = true;

            for (var i = 0; i < parents.length; i++) {
                isLoggingEnabled = parents[i].enabled && isLoggingEnabled;

                for (var j = 0; j < parents[i].publishers.length; j++) {
                    if (publishers.indexOf(parents[i].publishers[j]) === -1) {
                        publishers.push(parents[i].publishers[j]);
                    }
                }
            }

            isLoggingEnabled = this.loggerConfig.enabled && isLoggingEnabled;

            for (var j = 0; j < this.loggerConfig.publishers.length; j++) {
                if (publishers.indexOf(this.loggerConfig.publishers[j]) === -1) {
                    publishers.push(this.loggerConfig.publishers[j]);
                }
            }

            if (isLoggingEnabled) {
                for (var i = 0; i < publishers.length; i++) {
                    publishers[i].publish(logEvent);
                }
            }
        };

        Logger.prototype.trace = function (message) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            this.log(10000 /* TRACE */, message, args);
        };

        Logger.prototype.debug = function (message) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            this.log(20000 /* DEBUG */, message, args);
        };

        Logger.prototype.info = function (message) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            this.log(30000 /* INFO */, message, args);
        };

        Logger.prototype.warn = function (message) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            this.log(40000 /* WARN */, message, args);
        };

        Logger.prototype.error = function (message) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            this.log(50000 /* ERROR */, message, args);
        };

        Logger.prototype.fatal = function (message) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            this.log(60000 /* FATAL */, message, args);
        };
        return Logger;
    })();
    Logr.Logger = Logger;
})(Logr || (Logr = {}));
var Logr;
(function (Logr) {
    (function (Representers) {
        var DefaultJSONRepresenter = (function () {
            function DefaultJSONRepresenter() {
            }
            DefaultJSONRepresenter.prototype.represent = function (logEvent) {
                var JSONRepresentation = {};

                JSONRepresentation.logger = logEvent.loggerName ? logEvent.loggerName : 'DEFAULT';
                JSONRepresentation.logLevel = logEvent.level;
                JSONRepresentation.timestamp = logEvent.timestamp;
                JSONRepresentation.message = logEvent.message;
                JSONRepresentation.additionalData = logEvent.additionalData;

                return JSONRepresentation;
            };
            return DefaultJSONRepresenter;
        })();
        Representers.DefaultJSONRepresenter = DefaultJSONRepresenter;
    })(Logr.Representers || (Logr.Representers = {}));
    var Representers = Logr.Representers;
})(Logr || (Logr = {}));
var Logr;
(function (Logr) {
    (function (Publishers) {
        var ConsolePublisher = (function () {
            function ConsolePublisher() {
                this._representer = new Logr.Representers.DefaultJSONRepresenter();
            }
            Object.defineProperty(ConsolePublisher.prototype, "representer", {
                get: function () {
                    return this._representer;
                },
                enumerable: true,
                configurable: true
            });

            ConsolePublisher.prototype.publish = function (logEvent) {
                var representation = this.representer.represent(logEvent);

                var stringPartials = [];

                stringPartials.push('%c' + representation.logger);
                stringPartials.push('%c' + moment(representation.timestamp).format('MMM DD YY, HH:mm:ss.SSS'));
                stringPartials.push('%c' + Logr.LogLevel[representation.logLevel]);
                stringPartials.push('%c' + representation.message);

                var logLevelColor = '';
                var messageColor = 'black';

                switch (representation.logLevel) {
                    case 10000 /* TRACE */:
                        logLevelColor = 'gray';
                        break;

                    case 20000 /* DEBUG */:
                        logLevelColor = 'darkgreen';
                        break;

                    case 30000 /* INFO */:
                        logLevelColor = 'blue';
                        break;

                    case 40000 /* WARN */:
                        logLevelColor = 'orange';
                        break;

                    case 50000 /* ERROR */:
                        messageColor = 'red';
                        logLevelColor = 'red';
                        break;

                    case 60000 /* FATAL */:
                        logLevelColor = 'darkred';
                        messageColor = 'darkred';
                        break;
                }

                console.log(stringPartials.join(' '), 'color: darkgray', 'color: silver', 'color: ' + logLevelColor, 'color: ' + messageColor);
            };
            return ConsolePublisher;
        })();
        Publishers.ConsolePublisher = ConsolePublisher;
    })(Logr.Publishers || (Logr.Publishers = {}));
    var Publishers = Logr.Publishers;
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
                var matchedLogger = _.find(Manager._loggers, function (currentLogger) {
                    return (currentLogger.loggerConfig.name == name);
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

        Manager.getDefaultConfig = function () {
            return Manager._rootLoggerConfig;
        };
        Manager._rootLoggerConfig = new Logr.LoggerConfig('', null, Logr.LogLevel.ALL, [new Logr.Publishers.ConsolePublisher()]);

        Manager._rootLogger = new Logr.Logger(Manager._rootLoggerConfig);

        Manager._loggers = [Manager._rootLogger];
        return Manager;
    })();
    Logr.Manager = Manager;
})(Logr || (Logr = {}));
var Logr;
(function (Logr) {
    (function (Representers) {
        var DefaultStringRepresenter = (function () {
            function DefaultStringRepresenter() {
            }
            DefaultStringRepresenter.prototype.represent = function (logEvent) {
                var representationTokens = [];

                representationTokens.push(logEvent.loggerName || 'DEFAULT');
                representationTokens.push(moment(logEvent.timestamp).format('MMM Do YY, h:mm:ss a'));
                representationTokens.push(logEvent.message);

                return representationTokens.join(' | ');
            };
            return DefaultStringRepresenter;
        })();
        Representers.DefaultStringRepresenter = DefaultStringRepresenter;
    })(Logr.Representers || (Logr.Representers = {}));
    var Representers = Logr.Representers;
})(Logr || (Logr = {}));
