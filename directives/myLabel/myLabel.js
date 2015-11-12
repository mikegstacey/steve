angular.module('app').directive('myLabel', function () {
    return {
        restrict: 'A',
        templateUrl: 'directives/myLabel/myLabel.html',
        link: function ($scope) {
            $scope.myLabelName = 'unclicked';
            $scope.myClick = function () {
                $scope.myLabelName = 'clicked';
            };
        }
    };
});
