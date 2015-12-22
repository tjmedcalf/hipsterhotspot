angular.module('hipsterhotspots', [
    'ngRoute',
    'ngResource',
    'uiGmapgoogle-maps',
    //'angular-loading-bar',
    'hipsterhotspots.controllers',
    'hipsterhotspots.models',
    'hipsterhotspots.services',
    //'nvhostingApp.services',
    //'ngClipboard',
    //'angularFileUpload'
])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/review/:spotId', {
			controller: 'ReviewController',
			templateUrl: '/app/views/review.html'
		}).
        otherwise({
            controller: 'MapController',
        });
}])
.config(['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
    GoogleMapApiProviders.configure({
        key: 'AIzaSyD0o6u22ctUDNGu6sBKbdLEkeIqQY53Dgo',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
}])

angular.module('hipsterhotspots.controllers', []);
angular.module('hipsterhotspots.models', []);
angular.module('hipsterhotspots.services', []);