var myApp = angular.module('weatlhDunkApp',[]);

myApp.controller('CalculationController', ['$scope', function($scope) {
  	var path = 'img/';
  	$scope.amount = 0;
  	$scope.newletter = '';
  	$scope.investors = [
		{
	  		'image': path + 'logo1.png',
	  		'company': 'Nutmeg',
	  		'management_pa': 0.75,
	  		'underlying_pa': 0.19,
	  		'initial_contribution_pa': 0,
	  		'initial_investment': '-',
	  		'slug': 'nutmeg'
	  	},
	  	{
	  		'image': path + 'logo2.png',
	  		'company': 'Moneyfarm',
	  		'management_pa': 0.36,
	  		'underlying_pa': 0.25,
	  		'initial_contribution_pa': 0,
	  		'initial_investment': '-',
	  		'slug': 'moneyfarm'
	  	},
	  	{
	  		'image': path + 'logo3.png',
	  		'company': 'Scalable Capital',
	  		'management_pa': 0.75,
	  		'underlying_pa': 0.25,
	  		'initial_contribution_pa': 0,
	  		'initial_investment': '-',
	  		'slug': 'scalable-capital'
	  	},
	  	{
	  		'image': path + 'logo4.png',
	  		'company': 'Fiver a Day',
	  		'management_pa': 0.34,
	  		'underlying_pa': 0.48,
	  		'initial_contribution_pa': 0,
	  		'initial_investment': 0.25,
	  		'slug': 'fiver-a-day'
	  	},
	  	{
	  		'image': path + 'logo5.png',
	  		'company': 'Wealthify',
	  		'management_pa': 0.60,
	  		'underlying_pa': 0.28,
	  		'initial_contribution_pa': 0,
	  		'initial_investment': '-',
	  		'slug': 'weathlify'
	  	},
	  	{
	  		'image': path + 'logo6.png',
	  		'company': 'Wealth Horizon',
	  		'management_pa': 0.75,
	  		'underlying_pa': 0.18,
	  		'initial_contribution_pa': 0,
	  		'initial_investment': 0.25,
	  		'slug': 'wealth-horizon'
	  	},
  	];
}]);