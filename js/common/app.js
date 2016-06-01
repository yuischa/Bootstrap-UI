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


;