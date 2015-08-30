angular.module('app',[])
.controller('MenuController', Main);
function Main ($scope) {
	$scope.SetShowToFalse = function () {
		$scope.argaliMenu = false
		$scope.argaliDemoMenu = false
		$scope.photoMenu = false
		$scope.bryceMenu = false
		$scope.powershellMenu = false
		$scope.minecraftMenu = false
		$scope.writerMenu = false
		$scope.contactMenu = false
	}
	$scope.SetMenuItemShow = function ($menuItem) {
		$scope.$menuItem = true
	}
};
