/**
 * Created by g.giannico on 14/07/2016.
 */
var CacheManager = require('./CacheManager');
var CacheUtenti = {};

CacheUtenti.getAllPlayers = function (mapName, callback){
    CacheManager.get(mapName, callback);
};

CacheUtenti.setAllPlayers = function (mapName, obj){
    CacheManager.set(mapName, obj,mapName);
};

module.exports = CacheUtenti;
