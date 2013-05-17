(function () {
    self.console = {
        log: function () {}
    };
    self.prompt = function () {
        return 'Input not supported in demo';
    };
    
    importScripts('python.js');

    var output_and_error = function(chr) {
        if (chr !== null) 
            postMessage(String.fromCharCode(chr));
    };

    Python.initialize(null, output_and_error, output_and_error);

    var msgHandler = function (e) {
        if (Python.isFinished(e.data)) {
            var result = Python.eval(e.data);
            if (result !== null && result !== undefined) {
                postMessage('\n--------------------------\nResult: ' + result);
            }
        } else {
            postMessage('\nCommand not finished.\n');
        }
    };  

    addEventListener('message', msgHandler, false);

    postMessage('Loaded');
})();
