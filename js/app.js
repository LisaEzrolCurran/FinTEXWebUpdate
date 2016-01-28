'use strict';

(function () {

	var app = angular.module('fintex', ['ui.router']);

	app.run(function($state, $rootScope) {
		$rootScope.$state = $state;
	});

	app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/home");
		
		$stateProvider
		//HOME
		.state("home", {
			url: "/home",
			templateUrl: "./js/templates/homeTmpl.html"
			// controller: "homeCtrl"
		})
		//MEMBERSHIP
		.state("membership", {
			url: "/membership",
			templateUrl: "./js/templates/membershipTmpl.html"
			// controller: "membershipCtrl"
		})
		//MEMBERSHIP
		.state("member-application", {
			url: "/member-application",
			templateUrl: "./js/templates/membershipApplicationTmpl.html"
			// controller: "applicationCtrl"
		})
		//FINTECH CHICAGO
		.state("fintech-chicago", {
			url: "/fintech-chicago",
			templateUrl: "./js/templates/fintechChicagoTmpl.html"
			// controller: "fintechChicagoCtrl"
		})
		//EVENTS
		.state("events", {
			url: "/events",
			templateUrl: "./js/templates/eventsTmpl.html"
			// controller: "eventsCtrl"
		})
		//ABOUT
		.state("about", {
			url: "/about",
			templateUrl: "./js/templates/aboutTmpl.html"
			// controller: "aboutCtrl"
		})
		//CONTACT
		.state("contact", {
			url: "/contact",
			templateUrl: "./js/templates/contactTmpl.html",
			controller: "contactCtrl"
		})
		//APPLICATION
		.state("application", {
			url: "/application",
			templateUrl: "./js/templates/applicationTmpl.html"
			// controller: "applicationCtrl"
		});
	});

}());