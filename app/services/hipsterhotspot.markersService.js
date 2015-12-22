angular.module('hipsterhotspots.services').service('MarkerService', ['$resource',
    function ($resource) {
        return $resource('code/api/getspots', {}, {});
    }
]);