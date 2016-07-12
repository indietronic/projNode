/**
 * Created by g.giannico on 11/07/2016.
 */
var exports = module.exports = {};
var mongoose = require('mongoose');
var $q = require('q');

mongoose.Promise = require('q').Promise;
mongoose.connect('mongodb://localhost:27017/MIODB');



// initialize player schema
var Schema = mongoose.Schema;
var GiocatoriSchema = new Schema({
    _id: Schema.ObjectId
    , nome: String
    , cognome: String
    , fisico: {altezza: String, peso: String}
    , ruoli: [{id_ruolo: String}]
    , attivita: Boolean
});
exports.Player = mongoose.model("Player", GiocatoriSchema);


exports.getPlayerByName = function (request) {
    var query = exports.Player.findOne({'nome': request.playerName});
    var promise = query.exec();
    return promise.then(function (response) {
        var deferred = $q.defer();
        deferred.resolve(response);
        return deferred.promise;
    }, function (error) {
        deferred.reject(error);
        return deferred.promise;
    });
};

exports.getAllPlayers = function () {
    var query = exports.Player.find({});
    var promise = query.exec();
    return promise.then(function (response) {
        var deferred = $q.defer();
        deferred.resolve(response);
        return deferred.promise;
    }, function (error) {
        deferred.reject(error);
        return deferred.promise;
    });
};