/**
 * Created by giulianogiannico on 14/05/16.
 */
// var bodyParser = require('body-parser');
// var GiocatoriDAO = require("../dao/GiocatoriDAO.js");
// var $q = require('q');
//

//
// var jsonParser = bodyParser.json();
//
// module.exports = {
//
//     // Servizio getGiocatore
//     post_getgiocatore: [jsonParser, function (request, response) {
//         console.log("getGiocatore service");
//         GiocatoriDAO.getGiocatore(request.body).then(function (data) {
//                 var giocatore = JSON.parse(JSON.stringify(data));
//                 setFirstRuolo(giocatore);
//                 response.send(giocatore);
//             },
//             function (error) {
//                 console.log(error);
//             });
//     }]
//
// };
//
// function setFirstRuolo  (giocatore) {
//     if ( typeof giocatore.ruoli != 'undefined' ){
//         switch (giocatore.ruoli[0].id_ruolo) {
//             case  ROLE.ATT:
//                 giocatore.ruolo = "Attaccante";
//                 break;
//             case  ROLE.CEN:
//                 giocatore.ruolo = "Centrocampista";
//                 break;
//             case  ROLE.DIF:
//                 giocatore.ruolo = "Difensore";
//                 break;
//             case  ROLE.POR:
//                 giocatore.ruolo = "Portiere";
//                 break;
//         }
//     }
// }


var express = require('express');
var router = express.Router();

var _ = require('underscore');
_.str = require('underscore.string');

var GiocatoriDAO = require("../dao/GiocatoriDAO");


var ROLE = {
    ATT: "ATT",
    CEN: "CEN",
    DIF: "DIF",
    POR: "POR"
};

// SERVIZIO getGiocatoreByNome
router.post('/getGiocatoreByName', function (req, res) {
    console.log("getGiocatore service");
    GiocatoriDAO.getPlayerByName(req.body).then(function (data) {
            var giocatore = JSON.parse(JSON.stringify(data));
            setFirstRuolo(giocatore);
            res.send(giocatore);
        },
        function (error) {
            console.log(error);
        });
});

router.post('/getListaGiocatori', function (req, res) {
    console.log("getGiocatore service");
    GiocatoriDAO.getAllPlayers().then(function (data) {
            var giocatori = JSON.parse(JSON.stringify(data));
            giocatori = _.filter(giocatori, function (giocatore) {
                var checkNome = _.str.startsWith(giocatore.nome.toUpperCase(), req.body.query.toUpperCase());
                var checkCognome = _.str.startsWith(giocatore.cognome.toUpperCase(), req.body.query.toUpperCase());
                return checkNome || checkCognome;
            });
            res.send(giocatori);
        },
        function (error) {
            console.log(error);
        });
});

function setFirstRuolo(giocatore) {
    if (typeof giocatore.ruoli != 'undefined') {
        switch (giocatore.ruoli[0].id_ruolo) {
            case  ROLE.ATT:
                giocatore.ruolo = "Attaccante";
                break;
            case  ROLE.CEN:
                giocatore.ruolo = "Centrocampista";
                break;
            case  ROLE.DIF:
                giocatore.ruolo = "Difensore";
                break;
            case  ROLE.POR:
                giocatore.ruolo = "Portiere";
                break;
        }
    }
}

module.exports = router;



