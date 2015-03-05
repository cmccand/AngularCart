(function () {
  "use strict";
  angular.module('BookApp')
  .controller('MainController', function (BooksService,$location,$routeParams,$rootScope) {
    var mainCtrl = this;

    mainCtrl.newBook = {};

    BooksService.getBooks().success(function(data) {
      mainCtrl.books = data;
    });

    BooksService.getSingleBook($routeParams.bookId).success(function(data) {
      mainCtrl.singleBook = data;
    });

    mainCtrl.login = function(username) {
      if(username === 'Chris'){
        $location.path('/admin');
        mainCtrl.username = username
      } else {
        $location.path('/store')
        mainCtrl.username = username
      }
    };

    mainCtrl.addMyBook = function(newBook) {
      BooksService.addBook(newBook);
      mainCtrl.newBook = {};
      $location.path('/admin');
    };

    mainCtrl.updateBook = function(book) {
      BooksService.updateBook(book, $routeParams.bookId);
      $location.path('/admin');
    };

    mainCtrl.deleteBook = function (id) {
      BooksService.deleteBook(id);
    };

    mainCtrl.currentIndex = $routeParams.bookId;

    /*$scope.$on('product:deleted',function() {
    ProductService.getProducts().sucess(function(data) {
    admin.products = data;
  });
})
*/

});

angular.module('BookApp')
.controller('CartController', function(CartService, $routeParams, $location) {
  var cartCtrl = this;

  cartCtrl.total = 0;

  CartService.getChoices().success(function(data) {
    cartCtrl.choices = data;
  });

  cartCtrl.updateQty = CartService.updateQty();

  cartCtrl.addMyChoice = function(newChoice) {
    console.log(newChoice);
    CartService.addChoice(newChoice);
    //cartCtrl.newChoice = {};
    $location.path('/cart');
  };

  cartCtrl.deleteChoice = function (id) {
    CartService.deleteChoice(id);
  };

  cartCtrl.updateTotal = function () {
    cartCtrl.total = CartService.calculateTotal();
    return cartCtrl.total;
  };

  cartCtrl.currentIndex = $routeParams.choiceId;

});
})();
