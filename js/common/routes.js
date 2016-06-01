
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
            .when("/buttons", {
                controller: "ButtonsCtrl",
                templateUrl: "/template/buttons.html"
            })
            .otherwise({
                redirectTo: "/hi"
            });

    })

;