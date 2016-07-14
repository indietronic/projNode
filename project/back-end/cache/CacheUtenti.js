/**
 * Created by g.giannico on 14/07/2016.
 */
var CacheManager = require('./CacheManager');
var CacheUtenti = {};

CacheUtenti.getAllPlayers = function (mapName){
    return CacheManager.get(mapName);

};

CacheUtenti.setAllPlayers = function (mapName, obj){
    CacheManager.set(mapName, obj,mapName);
};

module.exports = CacheUtenti;
