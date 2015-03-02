(function () {
  "use strict";
  angular.module('BookApp')
  .controller('MainController', function (BooksService,$location) {
    var mainCtrl = this;

    mainCtrl.newBook = {};

    mainCtrl.books = BooksService.getBooks();

    mainCtrl.login = function(username) {
      if(username === 'Chris'){
      $location.path('/admin');
      mainCtrl.username = username
    } else {
      $location.path('/store')
      mainCtrl.username = username
      }
    };

    mainCtrl.alertMe = function () {
      alert("Hi from mainCtrl");
    }

    mainCtrl.addMyBook = function (newBook) {
      BooksService.addBook(newBook);
      mainCtrl.newBook = {};
    };

  });

  angular.module('BookApp')
  .controller('CartController', function(CartService,$location) {
    var cartCtrl = this;

    cartCtrl.newChoice = {};

    cartCtrl.choices = CartService.getChoices();

    cartCtrl.addMyChoice = function (newChoice) {
      CartService.addChoice(newChoice);
      cartCtrl.newChoice = {};
      $location.path('/cart');
    };

  });
})();
