
var CacheManager = {};
//var NodeCache = require( "node-cache" );
var MultiCache = require('multi-level-cache');

var redisOption = {
    host: '127.0.0.1',
    port: 6379
};
var cache = new MultiCache( 'node-cache', 'redis', {remoteOptions : redisOption, useLocalCache : false} );
//var cache = new NodeCache( { stdTTL: 100, checkperiod: 120 } );
var CacheMap = require("./CacheMap");






var global =undefined;

CacheManager.set = function (cacheKey, obj, name) {
    //var ttl = getTTLByCacheName(name);
    var ttl = 15;
    cache.set( cacheKey, obj, ttl, function(err, success ){
        if( !err && success ){
            console.log( success );
        }
    });

};



CacheManager.get = function (cacheKey, callback) {
    cache.get( cacheKey, function(err, value ){
        if(err || typeof value == 'undefined' || value == null){
            return callback(null);
        }

        //var ttl = (cache.getTtl( cacheKey ) - Date.now()) / 1000;
        //console.log("1 - seconds of ttl: " + ttl);
        //var nTtl = getTTLByCacheName(cacheKey);
        //cache.ttl( cacheKey, nTtl, function( err, changed ){
        //    if( !err ){
        //        console.log( changed );
        //    }
        //});
        //ttl = (cache.getTtl( cacheKey ) - Date.now()) / 1000;
        //console.log("2 - seconds of ttl: " + ttl);
        //CacheManager.delete(cacheKey);
        //CacheManager.set(cacheKey, value, cacheKey);
        return callback(value);

    });

};



CacheManager.delete = function (cacheKey) {
    cache.del( cacheKey, function(err, count ){
        if( !err ){
            console.log( count );
        }
    });
};

CacheManager.flushAll = function (callback) {
    console.log("flush all")
    cache.flushAll(function(err){
        if( !err ){
            console.log("flushed" );
        }
        callback();
    });
}

getTTLByCacheName = function (mapName) {
    return CacheMap.getTimeToLive(mapName);
};

module.exports = CacheManager;