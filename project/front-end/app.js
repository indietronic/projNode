/**
 * Created by giulianogiannico on 13/05/16.
 */
'use strict';

angular.module('myApp', [
    'ui.router'
]).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('app', {
        url: '/',
        templateUrl: 'app/firstPage.html',
        templateStyle: 'app/firstPage.css'

    });

});

angular.module('myApp').factory('MainConnector', ['$http', '$q', '$resource', function($http, $q, $resource ) {
    return {
        mainConnection: function( ){
            $http.get("http://localhost:9999/courses")
                .success(function(data) {
                    console.log("this is coming from wherever:" + data);
                });
        }
    }

}]);
;