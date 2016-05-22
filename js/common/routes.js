
angular.module('sample.routes', ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/hi", {
                //controller: "",
                templateUrl: "/template/hi.html"
            })
            .when("/accordion", {
                //controller: "",
                templateUrl: "/template/accordion.html"
            })
            .otherwise({
                redirectTo: "/hi"
            });

    })

;