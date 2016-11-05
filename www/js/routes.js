angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('logMasuk', {
    url: '/login',
    templateUrl: 'templates/logMasuk.html',
    controller: 'logMasukCtrl'
  })

  .state('hasilkanAkaunBaru', {
    url: '/signup',
    templateUrl: 'templates/hasilkanAkaunBaru.html',
    controller: 'hasilkanAkaunBaruCtrl'
  })

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('listAll', {
    url: '/page7',
    templateUrl: 'templates/listAll.html',
    controller: 'listAllCtrl'
  })

  .state('user', {
    url: '/user',
    templateUrl: 'templates/user.html',
    controller: 'userCtrl'
  })

  .state('rawatanAkupunktur', {
    url: '/page9',
    templateUrl: 'templates/rawatanAkupunktur.html',
    controller: 'rawatanAkupunkturCtrl'
  })

  .state('rawatanBekam', {
        url: '/bekam',
        templateUrl: 'templates/rawatanBekam.html',
        controller: 'rawatanBekamCtrl'
  })

  .state('jingming', {
    url: '/page10',
    templateUrl: 'templates/jingming.html',
    controller: 'jingmingCtrl'
  })

  .state('komen', {
    url: '/page11',
    templateUrl: 'templates/komen.html',
    controller: 'komenCtrl'
  })

  .state('sejarah', {
    url: '/page12',
    templateUrl: 'templates/sejarah.html',
    controller: 'sejarahCtrl'
  })

  .state('sejarahBesar', {
    url: '/page13',
    templateUrl: 'templates/sejarahBesar.html',
    controller: 'sejarahBesarCtrl'
  })

  .state('tambahPesakit', {
    url: '/page14',
    templateUrl: 'templates/tambahPesakit.html',
    controller: 'tambahPesakitCtrl'
  })

  .state('kemaskinipesakit', {
    url: '/page15',
    templateUrl: 'templates/kemaskinipesakit.html',
    controller: 'kemaskinipesakitCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});