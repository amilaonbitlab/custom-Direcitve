app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /home
    // $urlRouterProvider.otherwise("home");
    //
    // Now set up the states
    $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get("$state");
        $state.go('home');
    });

  $stateProvider
      .state('home', {
          url: "/home",
          template: '<home/>',
          controller: "homeCtrl"
      })
      .state('grandParent', {
          url: "/grandParent",
          template: '<grand-parent/>',
          controller: "grandParentCtrl"
      })
      .state('parent', {
          url: "/parent",
          template: '<parent/>',
          controller: "parentCtrl"
      })
      .state('child', {
          url: "/child",
          template: '<child/>',
          controller: "childCtrl"
      })
      .state('testBroadcast', {
          url: "/test_Broadcast",
          templateUrl: 'app/testBroadcast/testBroadcastView.html',
          controller: "grandParentCtrl"
      })
      .state('testHome', {
          url: "/test_Home",
          templateUrl: 'app/testHome/testHomeView.html',
          controller: "testHomeCtrl"
      })
      .state('dirCommunication', {
          url: "/dirCommunication",
          templateUrl: 'app/dirCommunication/dirCommunicationView.html',
          controller: "dirCommunicationCtrl"
      });
});