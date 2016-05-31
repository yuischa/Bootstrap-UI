
angular.module('sample.routes', ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/hi", {
                //controller: "",
                templateUrl: "/template/hi.html"
            })
            .when("/accordion", {
                controller: "AccordionDemoCtrl",
                templateUrl: "/template/accordion.html"
            })
            .when("/alerts", {
                controller: "AlertDemoCtrl",
                templateUrl: "/template/alert.html"
            })
            .otherwise({
                redirectTo: "/hi"
            });

    })

;