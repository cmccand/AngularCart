(function () {
  "use strict";
  angular.module('demoApp')
  .controller('MainController', function (BooksService) {
    var mainCtrl = this;

    mainCtrl.newBook = {};

    mainCtrl.books = BooksService.getBooks();

    mainCtrl.alertMe = function () {
      alert("Hi from mainCtrl");
    };

    mainCtrl.addMyBook = function (newBook) {
      BooksService.addBook(newBook);
      mainCtrl.newBook = {};
    };

  });

})();
