/**
 * Created by giulianogiannico on 14/05/16.
 */
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports ={

//    var bodyParser = require('body-parser');
//
//// create application/json parser
//var jsonParser = bodyParser.json();
//
//app.post('/giocatori', jsonParser, function(request, response) {
//    console.log("I have been hit"); //I Am getting here
//    var giocatore = {
//        nome: "Lionel",
//        cognome: "Messi",
//        fisico: {
//            altezza : "1.68",
//            peso : "64Kg"
//        },
//        ruolo: "attaccante"
//    };
//
//    response.send(giocatore);
//});

    post_index: [jsonParser, function(request, response){
        console.log("I have been hit"); //I Am getting here
        var giocatore = {
            nome: "Lionel",
            cognome: "Messi",
            fisico: {
                altezza : "1.68",
                peso : "64Kg"
            },
            ruolo: "attaccante"
        };

        response.send(giocatore);
    }]

}
