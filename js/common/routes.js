
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
            .when("/carousel", {
                controller: "CarouselDemoCtrl",
                templateUrl: "/template/carousel.html"
            })
            .when("/collapse", {
                controller: "CollapseDemoCtrl",
                templateUrl: "/template/collapse.html"
            })
            .when("/dates-parse", {
                controller: "DateParserCtrl",
                templateUrl: "/template/dates-parse.html"
            })
            .when("/date-picker", {
                controller: "DatePickerCtrl",
                templateUrl: "/template/date-picker.html"
            })
            .when("/date-popup", {
                controller: "DatepickerPopupDemoCtrl",
                templateUrl: "/template/date-picker-popup.html"
            })
            .when("/dropdown", {
                controller: "DropDownCtrl",
                templateUrl: "/template/dropdown.html"
            })
            .when("/modal", {
                controller: "ModalDemoCtrl",
                templateUrl: "/template/modal.html"
            })
            .when("/tabs", {
                controller: "TabsDemoCtrl",
                templateUrl: "/template/tabs.html"
            })
            .when("/timepicker", {
                controller: "TimepickerDemoCtrl",
                templateUrl: "/template/timepicker.html"
            })
            .otherwise({
                redirectTo: "/hi"
            });

    })

;