
angular.module('sample.routes', ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/hi", {
                //controller: "",
                templateUrl: "/template/hi.html"
            })
            .otherwise({
                redirectTo: "/hi"
            });

    })

;