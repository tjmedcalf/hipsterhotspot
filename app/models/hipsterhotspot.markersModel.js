angular.module('hipsterhotspots.models').factory('MarkerModel', [
	function () {
        var self = {};

		self.markers = [];

		self.init = function(data) {
			_.forEach(data.spots, function(n, key) {
				var tempObj = {
					id: n.id,
					title: n.title,
					latitude: n.lat,
					longitude: n.lon,
					icon: "img/glasses.png", 
				}

				self.markers.push(tempObj);
			});			
		}

        return self;
    }
]);