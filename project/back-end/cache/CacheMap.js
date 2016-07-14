var CacheMap = {};


CacheMap.getTimeToLive = function (mapName) {
    var ttl = null;
    switch (mapName) {
        case 'giocatoriMap' :
            ttl = 180;
            break;
        case '' :
            break;
        default :
            ttl = 120;
    }
    return ttl;
};

module.exports = CacheMap;