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
	
	// Modal functions
	$scope.toggleTech = function() {
		$scope.myData.techShown = !$scope.myData.techShown;
	};
	$scope.toggleArtist = function() {
		$scope.myData.artistShown = !$scope.myData.artistShown;
	};
	$scope.toggleGamer = function() {
		$scope.myData.gamerShown = !$scope.myData.gamerShown;
	};
	$scope.toggleWriter = function() {
		$scope.myData.writerShown = !$scope.myData.writerShown;
	};	
	$scope.toggleAuto = function() {
		$scope.myData.autoShown = !$scope.myData.autoShown;
	};
	$scope.toggleResponsive = function() {
		$scope.myData.responsiveShown = !$scope.myData.responsiveShown;
	};
	$scope.toggleOps = function() {
		$scope.myData.opsShown = !$scope.myData.opsShown;
	};
	$scope.toggleStill = function() {
		$scope.myData.stillShown = !$scope.myData.stillShown;
	};
	$scope.togglePosters = function() {
		$scope.myData.postersShown = !$scope.myData.postersShown;
	};
	$scope.toggleBooks = function() {
		$scope.myData.booksShown = !$scope.myData.booksShown;
	};

	$scope.myData = {modalShown: false}
      
};