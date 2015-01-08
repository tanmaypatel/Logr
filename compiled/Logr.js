var Logr;
(function (Logr) {
    var Formatters;
    (function (Formatters) {
        ;
        var ErrorFormatter = (function () {
            function ErrorFormatter() {
            }
            ErrorFormatter.prototype.getMessage = function (error) {
                if (error.message) {
                    return error.message;
                }
                else {
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
                }
                else {
                    return '';
                }
            };
            return ErrorFormatter;
        })();
        Formatters.ErrorFormatter = ErrorFormatter;
    })(Formatters = Logr.Formatters || (Logr.Formatters = {}));
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
/// <reference path="../LogEvent.ts"/>
/// <reference path="../LogEvent.ts"/>
/// <reference path="../Representers/Representer.ts"/>
/// <reference path="LogLevel.ts"/>
/// <reference path="Publishers/Publisher.ts"/>
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
/// <reference path="LogLevel.ts"/>
/// <reference path="LoggerConfig.ts"/>
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
    var Utils;
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
    })(Utils = Logr.Utils || (Logr.Utils = {}));
})(Logr || (Logr = {}));
/// <reference path="LogLevel.ts"/>
/// <reference path="LoggerConfig.ts"/>
/// <reference path="LogEvent.ts"/>
/// <reference path="Publishers/Publisher.ts"/>
/// <reference path="Utils/DateTimeUtils.ts"/>
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
        Logger.prototype.isEnabled = function () {
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
        Logger.prototype._performLog = function (level, message, additionalArguments) {
            var logEvent = new Logr.LogEvent(this.loggerConfig.name, level, Logr.Utils.DateTimeUtils.now(), message);
            logEvent.additionalData = additionalArguments;
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
        Object.defineProperty(Logger.prototype, "log", {
            get: function () {
                return this.trace;
            },
            enumerable: true,
            configurable: true
        });
        Logger.prototype.trace = function (message) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this._performLog(10000 /* TRACE */, message, args);
        };
        Logger.prototype.debug = function (message) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this._performLog(20000 /* DEBUG */, message, args);
        };
        Logger.prototype.info = function (message) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this._performLog(30000 /* INFO */, message, args);
        };
        Logger.prototype.warn = function (message) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this._performLog(40000 /* WARN */, message, args);
        };
        Logger.prototype.error = function (message) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this._performLog(50000 /* ERROR */, message, args);
        };
        Logger.prototype.fatal = function (message) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this._performLog(60000 /* FATAL */, message, args);
        };
        return Logger;
    })();
    Logr.Logger = Logger;
})(Logr || (Logr = {}));
/// <reference path="Representer.ts"/>
/// <reference path="../LogLevel.ts"/>
/// <reference path="../LogEvent.ts"/>
/// <reference path="../../components/moment/moment.d.ts"/>8
var Logr;
(function (Logr) {
    var Representers;
    (function (Representers) {
        var DefaultStringRepresenter = (function () {
            function DefaultStringRepresenter() {
            }
            DefaultStringRepresenter.prototype.represent = function (logEvent) {
                var representationTokens = [];
                representationTokens.push(logEvent.loggerName || 'DEFAULT');
                representationTokens.push(moment(logEvent.timestamp).format('MMM Do YY, h:mm:ss a'));
                representationTokens.push(Logr.LogLevel[logEvent.level]);
                representationTokens.push(logEvent.message);
                return representationTokens.join(' // ');
            };
            return DefaultStringRepresenter;
        })();
        Representers.DefaultStringRepresenter = DefaultStringRepresenter;
    })(Representers = Logr.Representers || (Logr.Representers = {}));
})(Logr || (Logr = {}));
/// <reference path="Publisher.ts"/>
/// <reference path="../LogEvent.ts"/>
/// <reference path="../Representers/Representer.ts"/>
/// <reference path="../Representers/DefaultStringRepresenter.ts"/>
var Logr;
(function (Logr) {
    var Publishers;
    (function (Publishers) {
        var BasicConsolePublisher = (function () {
            function BasicConsolePublisher() {
                this._representer = new Logr.Representers.DefaultStringRepresenter();
            }
            Object.defineProperty(BasicConsolePublisher.prototype, "representer", {
                get: function () {
                    return this._representer;
                },
                enumerable: true,
                configurable: true
            });
            BasicConsolePublisher.prototype.publish = function (logEvent) {
                var representation = this.representer.represent(logEvent);
                var logFunction = console.log;
                switch (logEvent.level) {
                    case 10000 /* TRACE */:
                        logFunction = console.log;
                        break;
                    case 20000 /* DEBUG */:
                        logFunction = console.debug;
                        break;
                    case 30000 /* INFO */:
                        logFunction = console.info;
                        break;
                    case 40000 /* WARN */:
                        logFunction = console.warn;
                        break;
                    case 50000 /* ERROR */:
                        logFunction = console.error;
                        break;
                    case 60000 /* FATAL */:
                        logFunction = console.error;
                        break;
                }
                logFunction.call(console, representation);
            };
            return BasicConsolePublisher;
        })();
        Publishers.BasicConsolePublisher = BasicConsolePublisher;
    })(Publishers = Logr.Publishers || (Logr.Publishers = {}));
})(Logr || (Logr = {}));
/// <reference path="Logger.ts"/>
/// <reference path="LogLevel.ts"/>
/// <reference path="LoggerConfig.ts"/>
/// <reference path="Publishers/BasicConsolePublisher.ts"/>
var Logr;
(function (Logr) {
    var Manager = (function () {
        function Manager() {
        }
        Manager.getLogger = function (name) {
            var logger = null;
            var matchedLogger = Manager._findLoggerByName(name);
            if (matchedLogger) {
                logger = matchedLogger;
            }
            else {
                var parentLoggerConfig = Manager._findParentLoggerConfigForName(name);
                var newLoggerConfig = new Logr.LoggerConfig(name, parentLoggerConfig, null);
                var newLogger = new Logr.Logger(newLoggerConfig);
                Manager._loggers.push(newLogger);
                logger = newLogger;
            }
            return logger;
        };
        Manager._findLoggerByName = function (name) {
            var macthedLogger = null;
            if (name) {
                for (var i = 0; i < Manager._loggers.length; i++) {
                    var currentLogger = Manager._loggers[i];
                    if (currentLogger.loggerConfig.name === name) {
                        macthedLogger = currentLogger;
                        break;
                    }
                }
            }
            else {
                macthedLogger = Manager._rootLogger;
            }
            return macthedLogger;
        };
        Manager._findParentLoggerConfigForName = function (name) {
            var matchedLoggerConfig = null;
            if (name) {
                var matchedLogger = null;
                var tokens = name.split(Manager.NAMESPACE_SEPARATOR);
                while (!matchedLogger) {
                    var removedToken = tokens.pop();
                    var remainingNamespace = tokens.join(Manager.NAMESPACE_SEPARATOR);
                    matchedLogger = Manager._findLoggerByName(remainingNamespace);
                }
                matchedLoggerConfig = matchedLogger.loggerConfig;
            }
            else {
                matchedLoggerConfig = Manager.getDefaultConfig();
            }
            return matchedLoggerConfig;
        };
        Manager.getDefaultConfig = function () {
            return Manager._rootLoggerConfig;
        };
        Manager._rootLoggerConfig = new Logr.LoggerConfig('', null, Logr.LogLevel.ALL, [new Logr.Publishers.BasicConsolePublisher()]);
        Manager._rootLogger = new Logr.Logger(Manager._rootLoggerConfig);
        Manager.NAMESPACE_SEPARATOR = '.';
        Manager._loggers = [Manager._rootLogger];
        return Manager;
    })();
    Logr.Manager = Manager;
})(Logr || (Logr = {}));
/// <reference path="Representer.ts"/>
/// <reference path="../LogEvent.ts"/>
/// <reference path="../LogEvent.ts"/>
var Logr;
(function (Logr) {
    var Representers;
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
    })(Representers = Logr.Representers || (Logr.Representers = {}));
})(Logr || (Logr = {}));
/// <reference path="Publisher.ts"/>
/// <reference path="../LogEvent.ts"/>
/// <reference path="../Representers/Representer.ts"/>
/// <reference path="../Representers/DefaultJSONRepresenter.ts"/>
/// <reference path="../../components/moment/moment.d.ts"/>
var Logr;
(function (Logr) {
    var Publishers;
    (function (Publishers) {
        var EnhancedConsolePublisher = (function () {
            function EnhancedConsolePublisher() {
                this._representer = new Logr.Representers.DefaultJSONRepresenter();
            }
            Object.defineProperty(EnhancedConsolePublisher.prototype, "representer", {
                get: function () {
                    return this._representer;
                },
                enumerable: true,
                configurable: true
            });
            EnhancedConsolePublisher.prototype.publish = function (logEvent) {
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
            return EnhancedConsolePublisher;
        })();
        Publishers.EnhancedConsolePublisher = EnhancedConsolePublisher;
    })(Publishers = Logr.Publishers || (Logr.Publishers = {}));
})(Logr || (Logr = {}));
