var something4Nothing = angular.module("something4Nothing",['ui.router']);

something4Nothing.config(function($stateProvider, $urlRouterProvider){
  //for any unmatched URL reroute to home
  $urlRouterProvider.otherwise("/home");

  //state setup
  $stateProvider
          .state("home", {
            url: "/home",
            templateUrl: "/MenuTemplateHeader.html"
          })
          .state("aboutus", {
          url: "/aboutus",
          templateUrl: "Views/AboutUs.html"
        })
        .state("advertisers", {
          url: "/advertisers",
          trmplateUrl: "Views/Advertisers.html"
        })
        .state("contactus", {
          url: "/contactus",
          trmplateUrl: "Views/ContactUs.html"
        })
        .state("createnewaccount", {
          url: "/createnewaccount",
          trmplateUrl: "Views/CreateNewAccount.html"
        })
        .state("faq", {
          url: "/faq",
          trmplateUrl: "Views/Faq.html"
        })
        .state("winners", {
          url: "/winners",
          trmplateUrl: "Views/Winners.html"
        });
});
