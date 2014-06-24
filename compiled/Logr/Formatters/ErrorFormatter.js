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
