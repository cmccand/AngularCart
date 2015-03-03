(function () {
  "use strict";

  angular.module('BookApp', [
  'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/admin', {
      templateUrl: 'views/main.html',
      controller: 'MainController as mainCtrl'
    })

    .when('/admin/new', {
      templateUrl: 'views/newBook.html',
      controller: 'MainController as mainCtrl'
    })

    .when('/admin/edit/:productId', {
      templateUrl: 'views/edit.html',
      controller: 'MainController as mainCtrl'
    })

    .when('/admin/detail/:productId', {
      templateUrl: 'views/details.html',
      controller: 'MainController as mainCtrl'
    })

    .when('/', {
      templateUrl: 'views/login.html',
      controller: 'MainController as mainCtrl'
    })

    .when('/store', {
      templateUrl: 'views/store.html',
      controller: 'MainController as mainCtrl'
    })

    .when('/cart', {
      templateUrl: 'views/cart.html',
      controller: 'CartController as cartCtrl'
    })


  });



})();
