/**
 * Created by giulianogiannico on 13/05/16.
 */
var application = angular.module('myApp');



    application.controller('firstController', ['$scope', '$http', '$q' ,'CommunicationService' , function($scope, $http, $q, CommunicationService) {
        $scope.getGiocatore = function(){
            var request ={};
            request.playerName = "Lionel";
            CommunicationService.serviceCaller("giocatori/getGiocatore", request).then(function(response){
                $scope.calciatore= response.data;
            })


        };

        $scope.getListaGiocatori = function(value){
            var request ={};
            request.query = value;
            return CommunicationService.serviceCaller("giocatori/getListaGiocatori", request).then(function(response){
                return response.data;
            });


        };


    }]);

    application.factory('CommunicationService', ['$http', '$q', function ($http) {
        return {
            'serviceCaller': function(backEndUrl, request ){
                var url = "http://localhost:9999/" + backEndUrl;
                return $http.post(url, request)
                    .success(function(data) {
                        return data;
                    });
            }
        };
    }]);




