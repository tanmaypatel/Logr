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
