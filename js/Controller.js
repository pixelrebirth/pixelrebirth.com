angular.module('app', [])
.controller('Controller', RestController);
function RestController ($scope, $http) {
    $scope.loadJson = function () {
	    // $http.post('http://web.pixelrebirth.com:8880/api',"module=posh&codeset=dirtree&arg1=c:\\sherri").
	    $http.post('/sample.json').
	    success(function(data) {
	        $scope.markers.colorarray = data;
	    }, function(dataError){
	    	$scope.test = dataError
	    });
	}
};