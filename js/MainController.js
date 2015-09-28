angular.module('app',['ngModal'])
.config(function(ngModalDefaultsProvider) {
  return ngModalDefaultsProvider.set({
    closeButtonHtml: "<i class='fa fa-times'></i>"
  });
})
.controller('MainController', Main);
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
	};
	$scope.logClose = function() {
		console.log('close!');
	};
	$scope.toggleModal = function() {
		$scope.myData.modalShown = !$scope.myData.modalShown;
	};
	$scope.setFoo = function () {
		$scope.myData.foo = $scope.myData.hello
	};
	$scope.myData = {
            link: "http://google.com",
            modalShown: false,
            hello: 'world',
            foo: 'bar'
	};
};