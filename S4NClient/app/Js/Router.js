var something4Nothing = angular.module("something4Nothing",['ui.router']);

something4Nothing.config(function($stateProvider, $urlRouterProvider){
  //for any unmatched URL reroute to home
  $urlRouterProvider.otherwise("/home");

  //state setup
  $stateProvider
          .state("Main", {//serves as a parent to it’s child states to offer shared functionality.
            url: "/home",
            //templateUrl: "Views/Home.html"
          })

         .state("aboutus", {
          url:"/aboutus",
          templateUrl: "Views/AboutUs.html"
        })

        .state("advertisers", {
          url: "/advertisers",
          templateUrl: "Views/Advertisers.html"
        })

        .state("contactus", {
          url: "/contactus",
          templateUrl: "Views/ContactUs.html"
        })

        .state("createnewaccount", {
          url: "/createnewaccount",
          templateUrl: "Views/CreateNewAccount.html"
        })

        .state("faq", {
          url:"/faq",
          templateUrl: "Views/Faq.html"
        })

        .state("winners", {
          url: "/winners",
           templateUrl: "Views/Winners.html"
        });
});
