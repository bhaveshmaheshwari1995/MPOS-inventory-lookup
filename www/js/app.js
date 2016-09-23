// Ionic Starter App
angular.module('mpos', ['ionic',
  'mpos.login',
  'mpos.inventoryInquiry',
  'mpos.itemList',
  'mpos.inventoryResult',
  'mpos.minQtyScreen',
  'mpos.buddyStore'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: '/templates/login.html',
    controller: 'loginCtrl'
  })
  .state('inventoryInquiry', {
    url: '/inventoryInquiry',
    templateUrl: '/templates/inventoryInquiry.html',
    controller: 'inventoryInquiryCtrl'
  })
  .state('itemList', {
    url: '/itemList',
    templateUrl: '/templates/itemList.html',
    controller: 'itemListCtrl'
  })
  .state('inventoryResult', {
    url: '/inventoryResult',
    templateUrl: '/templates/inventoryResult.html',
    controller: 'inventoryResultCtrl'
  })
  .state('minQtyScreen', {
    url: '/minQtyScreen',
    templateUrl: '/templates/minQtyScreen.html',
    controller: 'minQtyScreenCtrl'
  })
  .state('buddyStore', {
    url: '/buddyStore',
    templateUrl: '/templates/buddyStore.html',
    controller: 'buddyStoreCtrl'
  })
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
