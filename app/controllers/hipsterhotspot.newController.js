angular.module('hipsterhotspots.controllers').controller('NewController', ['$scope', '$routeParams', 
    function ($scope, $routeParams) {
        //$scope.markers = MarkerModel.markers;
        $scope.$parent.showReview = true;
    }
]);