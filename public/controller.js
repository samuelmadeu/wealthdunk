var myApp = angular.module('weatlhDunkApp',[]);

myApp.controller('CalculationController', ['$scope', function($scope) {
  	var path = 'img/';
  	$scope.amount = 25000;
  	$scope.newletter = '';
  	$scope.investors = [
		{
	  		'image': path + 'logo1.png',
	  		'company': 'Nutmeg',
	  		'management_pa': 0.75,
	  		'underlying_pa': 0.19,
	  		'initial_contribution_pa': 0,
	  		'initial_investment': '-',
	  		'slug': 'nutmeg',
	  		'website': 'https://www.nutmeg.com',
	  		'additional_info': [
	  			"Manage 10 risk levels, each with a different mix of investment assets. They range from 'cautious' to 'aggressive'",
	  			"Online questionnaire will help you determine which of the 10 risk-based portfolios is best for you",
	  			"Typically rebalance customers portfolios once a month to keep them in line with the original optimal balance. May occasionaly decide on different allocations they believe are more suitable for customers in that particular month"
	  		],
	  		'fixed_fees':[
	  			"> &#163;500 but < &#163;25k: 0.95%",
        		"> &#163;25K but < &#163;100k+: 0.75%",
        		"> &#163;100k but < &#163;500k+: 0.50%",
        		"> &#163;500k: 0.30%",
	  		],
	  		'right_box':[
	  			{
	  				'key': 'General investing',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Online chat',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'ISA',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'App',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'Pension',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Call',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Portfolio customisation',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'In Person',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'FSCS protected?',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Undisclosed',
	  				'value': '&#10003;'
	  			},
	  		],
	  		'fantastic':[
	  			"&#10003; Nutmeg website is fully optimised for mobile use",
	  			"&#10003; Responsive and helpful customer service",
	  			"&#10003; Great articles available from their investment team"
	  		],
	  		'watchout':[
	  			"&#10006; No mobile app"
	  		],
	  		'countries':[
	  			"United Kingdom",
	  			"Available to certain non-UK residents who hold a UK based bank account"
	  		],
	  		'mmi': "The minimum monthly investment is the amount of money you have to invest each month. Some Robo-Advisors have a minimum required amount you have to invest each month.",
	  		'topup_fees': "Some Robo-Advisors charge fees when making monthly contributions or topping-up. This fee is one-off and charged for each contribtion made.",
	  		'wd_fees': "No fees for withdrawing money",
	  	},
	  	{
	  		'image': path + 'logo2.png',
	  		'company': 'Moneyfarm',
	  		'management_pa': 0.36,
	  		'underlying_pa': 0.25,
	  		'initial_contribution_pa': 0,
	  		'initial_investment': '-',
	  		'slug': 'moneyfarm',
	  		'website': 'https://www.moneyfarm.com/uk',
	  		'additional_info': [
	  			"Manage 6 portfolios, each with a different mix of investment assets. They range from 'conservative' to 'bold'",
	  			"Online questionnaire will help you determine which of the 10 risk-based portfolios is best for you",
	  			"You can change your settings whenever you need to and you can also add or withdraw money at any time"
	  		],
	  		'fixed_fees':[
	  			"< &#163;10,000: 0.00%",
				"&#163;10,000-&#163;100,000: 0.60%",
				"&#163;100,000+: 0.40%",
				">&#163;1,000,000: 0%",
	  		],
	  		'right_box':[
	  			{
	  				'key': 'General investing',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Online chat',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'ISA',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'App',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Pension',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'Call',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Portfolio customisation',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'In Person',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'FSCS protected?',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Undisclosed',
	  				'value': '&#10003;'
	  			},
	  		],
	  		'fantastic':[
	  			"&#10003; Your first £10,000 will always be managed free of charge",
	  			"&#10003; Managing your investments through an app",
	  		],
	  		'watchout':[
	  			"&#10006; App only available on iPhone",
	  			"&#10006; Need to provide proof of address / identification to setup an account",
	  			"&#10006; Unable to customise your portfolio",
	  		],
	  		'countries':[
	  			"United Kingdom",
	  			"Italy"
	  		],
	  		'mmi': "The minimum monthly investment is the amount of money you have to invest each month. Some Robo-Advisors have a minimum required amount you have to invest each month.",
	  		'topup_fees': "Some Robo-Advisors charge fees when making monthly contributions or topping-up. This fee is one-off and charged for each contribtion made.",
	  		'wd_fees': "No fees for withdrawing money"
	  	},
	  	{
	  		'image': path + 'logo3.png',
	  		'company': 'Scalable Capital',
	  		'management_pa': 0.75,
	  		'underlying_pa': 0.25,
	  		'initial_contribution_pa': 0,
	  		'initial_investment': '-',
	  		'slug': 'scalable-capital',
	  		'website': 'https://uk.scalable.capital',
	  		'additional_info': [
	  			"Make no portfolio decisions based on subjective (human) opinions",
				"Emphasis is on risk management and adjustments to portfolios are made based on your chosen Variance at Risk (a measure of risk) - greater risk has the potential for greater returns but also potential for greater loses. Your Variance at Risk is determined through a online questionnaire.",
	  		],
	  		'fixed_fees':[
	  			"All-in fee: 0.75%"
	  		],
	  		'right_box':[
	  			{
	  				'key': 'General investing',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Online chat',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'ISA',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'App',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Pension',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'Call',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Portfolio customisation',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'In Person',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'FSCS protected?',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Undisclosed',
	  				'value': '&#10003;'
	  			},
	  		],
	  		'fantastic':[
	  			"&#10003; Managing your investments through an app",
	  			"&#10003; App available on both iPhone and Android",
	  		],
	  		'watchout':[
	  			"&#10006; Minimum initial investment of &#163;10,000"
	  		],
	  		'countries':[
	  			"United Kingdom",
	  			"Germany"
	  		],
	  		'mmi': "The minimum monthly investment is the amount of money you have to invest each month. Some Robo-Advisors have a minimum required amount you have to invest each month.",
	  		'topup_fees': "Some Robo-Advisors charge fees when making monthly contributions or topping-up. This fee is one-off and charged for each contribtion made.",
	  		'wd_fees': "No fees for withdrawing money"
	  	},
	  	{
	  		'image': path + 'logo4.png',
	  		'company': 'Fiver a Day',
	  		'management_pa': 0.34,
	  		'underlying_pa': 0.48,
	  		'initial_contribution_pa': 0,
	  		'initial_investment': 0.25,
	  		'slug': 'fiver-a-day',
	  		'website': 'http://www.fiveraday.co.uk/',
	  		'additional_info': [
	  			"Manage 10 risk levels, each with a different mix of investment assets. They range from 'very risk averse' to 'prepared to take ver high levels of risk'"
	  		],
	  		'fixed_fees':[
	  			"All-in fee: 0.35%"
	  		],
	  		'right_box':[
	  			{
	  				'key': 'General investing',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Online chat',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'ISA',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'App',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'Pension',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'Call',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Portfolio customisation',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'In Person',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'FSCS protected?',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Undisclosed',
	  				'value': '&#10003;'
	  			},
	  		],
	  		'fantastic':[
	  			"&#10003; Comprehensive questionnaire to assess your risk apetite and suitability to certain investments",
	  		],
	  		'watchout':[
	  			"&#10006; No app available",
	  			"&#10006; Only able to make contact through an online contact form"
	  		],
	  		'countries':[
	  			"United Kingdom",
	  		],
	  		'mmi': "The minimum monthly investment is the amount of money you have to invest each month. Some Robo-Advisors have a minimum required amount you have to invest each month.",
	  		'topup_fees': "Some Robo-Advisors charge fees when making monthly contributions or topping-up. This fee is one-off and charged for each contribtion made.",
	  		'wd_fees': "No fees for withdrawing money"
	  	},
	  	{
	  		'image': path + 'logo5.png',
	  		'company': 'Wealthify',
	  		'management_pa': 0.60,
	  		'underlying_pa': 0.28,
	  		'initial_contribution_pa': 0,
	  		'initial_investment': '-',
	  		'slug': 'weathlify',
	  		'website': 'http://www.wealthify.com/',
	  		'additional_info': [
	  			"Offers five different investment styles, from 'Cautious' through to 'Confident; and 'Adventurous'",
				"Investment lgorithms programmed based on a proven investment theory, known as the Sharpe Ratio, which was developed by Nobel Prize-Winning William Sharpe"
	  		],
	  		'fixed_fees':[
	  			"< &#163;15,000: 0.70%",
				"> &#163;15,000, <  &#163;100,000: 0.60%",
				"&#163;100,000+: 0.50%",
	  		],
	  		'right_box':[
	  			{
	  				'key': 'General investing',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Online chat',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'ISA',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'App',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Pension',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'Call',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Portfolio customisation',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'In Person',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'FSCS protected?',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Undisclosed',
	  				'value': '&#10003;'
	  			},
	  		],
	  		'fantastic':[
	  			"&#10003; Money is invested the next working day",
	  			"&#10003; Portfolio is automatically re-balanced to keep it on track",
	  			"&#10003; Invite friends to join your 'Circle' and get discounted fees"
	  		],
	  		'watchout':[
	  			"&#10006; App only available on Android"
	  		],
	  		'countries':[
	  			"United Kingdom",
	  		],
	  		'mmi': "The minimum monthly investment is the amount of money you have to invest each month. Some Robo-Advisors have a minimum required amount you have to invest each month.",
	  		'topup_fees': "Some Robo-Advisors charge fees when making monthly contributions or topping-up. This fee is one-off and charged for each contribtion made.",
	  		'wd_fees': "No fees for withdrawing money"
	  	},
	  	{
	  		'image': path + 'logo6.png',
	  		'company': 'Wealth Horizon',
	  		'management_pa': 0.75,
	  		'underlying_pa': 0.18,
	  		'initial_contribution_pa': 0,
	  		'initial_investment': 0.25,
	  		'slug': 'wealth-horizon',
	  		'website': 'http://www.wealthhorizon.com/',
	  		'additional_info': [
	  			"Manage 10 risk levels, each with a different mix of investment assets. They range from 'very risk averse' to 'prepared to take ver high levels of risk'",
	  			"Approach based on Nobel prize winning theories on portfolio investment by Harry Markowitz - who demonstrated that combining assets in different proportions enables investors to manage risk in their portfolio and potentially maximise return on investment",
	  		],
	  		'fixed_fees':[
	  			"All-in fee: 0.75%"
	  		],
	  		'right_box':[
	  			{
	  				'key': 'General investing',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Online chat',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'ISA',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'App',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Pension',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'Call',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Portfolio customisation',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'In Person',
	  				'value': '&#10006;'
	  			},
	  			{
	  				'key': 'FSCS protected?',
	  				'value': '&#10003;'
	  			},
	  			{
	  				'key': 'Undisclosed',
	  				'value': '&#10003;'
	  			},
	  		],
	  		'fantastic':[
	  			"&#10003; Able to download a free investment proposal",
	  		],
	  		'watchout':[
	  			"&#10006; No app available"
	  		],
	  		'countries':[
	  			"United Kingdom",
	  		],
	  		'mmi': "The minimum monthly investment is the amount of money you have to invest each month. Some Robo-Advisors have a minimum required amount you have to invest each month.",
	  		'topup_fees': "Some Robo-Advisors charge fees when making monthly contributions or topping-up. This fee is one-off and charged for each contribtion made.",
	  		'wd_fees': "No fees for withdrawing money"
	  	},
  	];
}]);