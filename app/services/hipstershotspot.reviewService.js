angular.module('hipsterhotspots.services').service('ReviewService', ['$resource',
    function ($resource) {
        return $resource('code/api/getreview/:reviewId', {reviewId: ''}, {});
    }
]);