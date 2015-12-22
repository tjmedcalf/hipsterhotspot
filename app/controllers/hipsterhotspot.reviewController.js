angular.module('hipsterhotspots.controllers').controller('ReviewController', ['$scope', 'ReviewService', '$routeParams', 
    function ($scope, ReviewService, $routeParams) {
        //$scope.markers = MarkerModel.markers;

        $scope.review = ReviewService.get({ spotId: $routeParams.spotId }, function(data) {
            console.log(data);

            $scope.$parent.showReview = true;
        });

        $scope.title = 'Test Title';
    }
]);