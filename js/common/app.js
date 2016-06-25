/**
 * Created by Reana on 2/5/2016.
 */

angular.module('sample', ["sample.routes", "ui.bootstrap"])

    .controller('AccordionDemoCtrl', function ($scope) {
        $scope.oneAtATime = true;

        $scope.groups = [
            {
                title: "Dynamic Group Header - 1",
                content: "Dynamic Group Body - 1"
            },
            {
                title: "Dynamic Group Header - 2",
                content: "Dynamic Group Body - 2"
            }
        ];

        $scope.items = ["Item 1", "Item 2", "Item 3"];

        $scope.addItem = function () {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push("Item " + newItemNo);
        };

        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };
    })

    .controller("AlertDemoCtrl", function ($scope) {
        $scope.alerts = [
            {type: 'danger',
                msg: "Oh snap! Change a few things up and try submitting again."},
            {type: "success",
                msg: "Well done! You successfully read this important alert message."}
        ];

        $scope.addAlert = function () {
            $scope.alerts.push({msg: "Another alert!"});
        };

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };
    })

    .controller("ButtonsCtrl", function ($scope) {
        $scope.singleModel = 1;

        $scope.radioModel = "Middle";

        $scope.checkModel = {
            left: false,
            middle: true,
            right: false
        };

        $scope.checkResults = [];

        $scope.$watchCollection('checkModel', function () {
            $scope.checkResults = [];
            angular.forEach($scope.checkModel, function (value, key) {
                if (value) {
                    $scope.checkResults.push(key);
                }
            });
        });
    })

    .controller("CarouselDemoCtrl", function ($scope) {
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function () {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: 'http://lorempixel.com/' + newWidth + '/300',
                text: ["Nice image", "Awesome photograph", "That is so cool", "I love that"][slides.length % 4],
                id: currIndex++
            });
        };

        $scope.randomize = function () {
            var indexes = generateIndexesArray();
            assignnewIndexesToSlides(indexes);
        };

        for (var i = 0; i < 4; i++) {
            $scope.addSlide();
        }

        function assignNewIndexesToSlides(indexes) {
            for (var i = 0, l = slides.length; i < l; i++) {
                slides[i].id = indexes.pop();
            }
        }

        function generateIndexesArray() {
            var indexes = [];
            for (var i = 0; i < currIndex; i++) {
                indexes[i] = i;
            }
            return shuffle(indexes);
        }

        function shuffle(array) {
            var tmp, current, top = array.length;

            if (top) {
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array [top];
                    array[top] = tmp;
                }
            }
            return array;
        }
    })

    .controller("CollapseDemoCtrl", function ($scope) {
        $scope.isCollapsed = false;
    })

    .controller("DateParserCtrl", function ($scope, uibDateParser) {
        $scope.format = 'yyyy/MM/dd';
        $scope.date = new Date();
    })

    .controller("DatePickerCtrl", function ($scope) {
        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        $scope.options = {
            minDate: new Date(),
            showWeeks: true
        };

        //disable weekend
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.toggleMin = function () {
            $scope.options.minDate = $scope.options.minDate ? null : new Date();
        };

        $scope.toggleMin();

        $scope.setDate = function (year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date(tomorrow);
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $scope.events = [
            {
                date: tomorrow,
                status: "full"
            },
            {
                date: afterTomorrow,
                status: "partially"
            }
        ];

    })

    .controller("DatepickerPopupDemoCtrl", function ($scope) {
        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        }

        //Disable weekend

        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === "day" && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.toggleMin = function () {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
        };

        $scope.toggleMin();

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };

        $scope.setDate = function (year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats [0];
        $scope.altInputFormats = ['M!/d!/yyyy'];

        $scope.popup1 = {
            opened: false
        };

        $scope.popup2 = {
            opened: false
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $scope.events = [
            {
                date: tomorrow,
                status: "full"
            },
            {
                date: afterTomorrow,
                status: "partially"
            }
        ];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === "day") {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }
            return '';
        }
    })

    .controller("DropDownCtrl", function ($scope, $log) {
        $scope.items = [
            "The first choice.",
            "And another choice",
            "But wait, a third."
        ];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function (open) {
            $log.log("Dropdown is now: ", open);
        };

        $scope.toggleDropdown = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };

        $scope.appendToEl = angular.element(document.querySelector("#dropdown-long-content"));
    })

    .controller("ModalDemoCtrl", function ($scope, $uibModal, $log) {
        $scope.items = ['item1', 'item2', 'item3'];

        $scope.animationsEnabled = true;

        $scope.open = function (size) {
            $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: "myModalContent.html",
                controller: "ModalInstanceCtrl",
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            }).result.then(function (selectedItem) {
                    $scope.selected = selectedItem;
                },
                function () {
                    $log.info("modal dismissed at: " + new Date());
                });

            $scope.toggleAnimation = function () {
                $scope.animationsEnabled = $scope.animationsEnabled;
            };
        }
    })

    .controller("ModalInstanceCtrl", function ($scope, $uibModalInstance, items) {
        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $uibModalInstance.close($scope.selected.item);
        };
        $scope.cancel = function () {
            $uibModalInstance.dismiss("cancel");
        };
    })

.controller("TabsDemoCtrl", function ($scope, $window){
        $scope.tabs = [
            {title: "Dynamic Title 1", content: "Dynamic content 1"},
            {title: "Dynamic Title 2", content: "Dynamic content 2", disabled: true}
        ];

        $scope.alertMe = function() {
            setTimeout (function() {
                $window.alert("You\'ve selected the alert tab!");
            });
        };

        $scope.model = {name: 'Tabs'};
    })

.controller("TimepickerDemoCtrl", function($scope,$log){
        $scope.mytime = new Date();

        $scope.hstep = 1;
        $scope.mstep = 15;

        $scope.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        };

        $scope.ismeridian = true;
        $scope.toggleMode = function() {
            $scope.ismeridian = !$scope.ismeridian;
        };

        $scope.update = function(){
            var d = new Date();
            d.setHours (14);
            d.setMinutes(0);
            $scope.mytime = d;
        };

        $scope.changed = function () {
            $log.log("Time changed to: " + $scope.mytime);
        };

        $scope.clear = function(){
            $scope.mytime = null;
        };
    })

;