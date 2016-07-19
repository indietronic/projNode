// Object to capture process exits and call app specific cleanup function

var CacheManager = require('./cache/CacheManager');


function noOp() {};

exports.Cleanup = function Cleanup(callback) {

    // attach user callback to the process event emitter
    // if no callback, it will still exit gracefully on Ctrl-C
    callback = callback || noOp;
    process.on('cleanup', callback);

    // do app specific cleaning before exiting
    process.on('exit', function () {
        process.emit('cleanup');
        CacheManager.flushAll(function () {
            process.emit('cleanup');
        });
    });

    // catch ctrl+c event and exit normally
    process.on('SIGINT', function () {
        console.log('Ctrl-C...');
        CacheManager.flushAll(function () {
            process.exit(2);
        });

    });

    //catch uncaught exceptions, trace, then exit normally
    process.on('uncaughtException', function (e) {
        console.log('Uncaught Exception...');
        console.log(e.stack);
        CacheManager.flushAll(function () {
            process.exit(99);
        });
    });

}