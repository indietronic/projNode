/**
 * Created by g.giannico on 14/07/2016.
 */
var CacheManager = require('./CacheManager');
var CacheInterface = {};

CacheInterface.getAllPlayers = function (mapName, callback){
    CacheManager.get(mapName, callback);

};

CacheInterface.setAllPlayers = function (mapName, obj){
    CacheManager.set(mapName, obj,mapName);
};

module.exports = CacheInterface;
