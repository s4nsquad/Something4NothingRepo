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
          .state("home.aboutus", {
          url: "/aboutus",
          templateUrl: "Views/AboutUs.html"
        })
        .state("home.advertisers", {
          url: "/advertisers",
          trmplateUrl: "Views/Advertisers.html"
        })
        .state("home.contactus", {
          url: "/contactus",
          trmplateUrl: "Views/ContactUs.html"
        })
        .state("home.createnewaccount", {
          url: "/createnewaccount",
          trmplateUrl: "Views/CreateNewAccount.html"
        })
        .state("home.faq", {
          url: "/faq",
          trmplateUrl: "Views/Faq.html"
        })
        .state("home.winners", {
          url: "/winners",
          trmplateUrl: "Views/Winners.html"
        });
});
