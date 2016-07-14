var CacheManager = {};
var NodeCache = require( "node-cache" );
var cache = new NodeCache( { stdTTL: 100, checkperiod: 120 } );
var CacheMap = require("./CacheMap");

var global =undefined;

CacheManager.set = function (cacheKey, obj, name) {
    var ttl = getTTLByCacheName(name);
    cache.set( cacheKey, obj, ttl, function(err, success ){
        if( !err && success ){
            console.log( success );
        }
    });

};



CacheManager.get = function (cacheKey) {
    var value = cache.get( cacheKey );
    if ( typeof value == 'undefined' || value == null){
        return null;
    }
    var ttl = (cache.getTtl( cacheKey ) - Date.now()) / 1000;
    console.log("1 - seconds of ttl: " + ttl);
    var nTtl = getTTLByCacheName(cacheKey);
    cache.ttl( cacheKey, nTtl, function( err, changed ){
        if( !err ){
            console.log( changed );
        }
    });
    ttl = (cache.getTtl( cacheKey ) - Date.now()) / 1000;
    console.log("2 - seconds of ttl: " + ttl);
    return value;
};

CacheManager.delete = function (cacheKey) {
    cache.del( cacheKey, function(err, count ){
        if( !err ){
            console.log( count );
        }
    });
};

CacheManager.setGlobal = function(){
  global = "instanced";
};

CacheManager.getGlobal = function(){
    return global;
};


getTTLByCacheName = function (mapName) {
    return CacheMap.getTimeToLive(mapName);
};

module.exports = CacheManager;