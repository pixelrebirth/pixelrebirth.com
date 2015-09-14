angular.module('app', [])
.controller('Controller', RestController);
function RestController ($scope, $http) {


	$scope.clearAllData = function () {
		$scope.objects = "Cannot Authenticate, please login again...";
		$scope.showContent = false;
		$scope.tokenKey = null;
		$scope.generalMessage = "Cannot Authenticate, please login again..."
	};

    $scope.getToken = function () {
    	$scope.clearAllData();
    	var inputBody = 'username=' + $scope.username + '&password=' + $scope.password;
	    $http.post('http://web.pixelrebirth.com:8880/auth', inputBody)
	    .success(function(data) {
			var dateOffset = (60*1000) * 1; //1 minute
			var dateNew = new Date();
			dateNew.setTime(dateNew.getTime() + dateOffset);

	        $scope.tokenKey = data;
			$scope.tokenExpire = dateNew;
			if ($scope.tokenKey != "Cannot Authenticate"){
				$scope.generalMessage = "Successfully Authenticated, please LoadContent."
			} else {$scope.generalMessage = "Failed Authentication, try another username/password!"};
			$scope.username = null;
			$scope.password = null;			
	    });
	};

	$scope.checkToken = function () {
		var dateCheck = new Date();
		if (($scope.tokenExpire - dateCheck) >= 0){
			$scope.showContent = true;
			return true;
		};
		$scope.clearAllData();
		return false;
	};

    $scope.loadJson = function () {
    	$scope.checkToken();
    	if (($scope.tokenKey) != "Cannot Authenticate" && ($scope.tokenKey) != null) {
		    $http.post('http://web.pixelrebirth.com:8880/api',"module=posh&codeset=dirtree&arg1=c:\\windows\\system32")
		    .success(function(data) {
		        $scope.objects = data;
		    });
		} else {
			$scope.clearAllData();
		};
	};

};
