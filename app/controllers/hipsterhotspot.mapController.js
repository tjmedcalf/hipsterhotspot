angular.module('hipsterhotspots.controllers').controller('MapController', ['$scope', 'uiGmapGoogleMapApi', 'MarkerModel', 'MarkerService', '$location',
    function ($scope, uiGmapGoogleMapApi, MarkerModel, MarkerService, $location) {
        $scope.markers = MarkerModel.markers;
        $scope.showReview = false;

        $scope.closeReview = function() {
            $scope.showReview = false;
            $location.path('/');
        }

        var request = MarkerService.get( function(data) {
            MarkerModel.init(data);
        });

        
        $scope.map = {
            center: {
                latitude: -41.289916, 
                longitude: 174.780121
            },
            zoom: 15,
            styles: [{"elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#0F0919"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#E4F7F7"}]},{"elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#002FA7"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"color":"#E60003"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#FBFCF4"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"color":"#FFED00"}]},{"featureType":"poi.government","elementType":"geometry.fill","stylers":[{"color":"#D41C1D"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#BF0000"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"saturation":-100}]}],
        }

        $scope.mapOptions =  {
            disableDefaultUI: true,
        }
       
        uiGmapGoogleMapApi.then(function(maps) {
            console.log('map ready.. I guess..');
        });

        $scope.markerClick = function(marker) {
            $scope.showReview = true;
            $location.path('/review/' + marker.key);
        }
    }
]);