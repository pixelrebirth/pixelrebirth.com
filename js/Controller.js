angular.module('app', [])
.controller('Controller', RestController);
function RestController ($scope, $http) {
    $scope.loadJson = function () {
	    $http.post('http://web.pixelrebirth.com:8880/api',"module=posh&codeset=dirtree&arg1=c:\\windows\\system32").
	    success(function(data) {
	        $scope.markers = data;
	    }, function(dataError){
	    	$scope.test = dataError
	    });
	}
};