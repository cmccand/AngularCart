(function () {
  "use strict";
  angular.module('BookApp')
  .controller('MainController', function (BooksService,$location,$routeParams,$rootScope) {
    var mainCtrl = this;

    mainCtrl.newBook = {};

    BooksService.getBooks().success(function(data) {
      mainCtrl.books = data;
    });

    BooksService.getSingleProduct($routeParams.bookId).success(function(data) {
    mainCtrl.singleProduct = data;
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

    mainCtrl.currentIndex = $routeParams.bookId;

    /*$scope.$on('product:deleted',function() {
    ProductService.getProducts().sucess(function(data) {
    admin.products = data;
  });
})
*/

  });

  angular.module('BookApp')
  .controller('CartController', function(CartService,$location) {
    var cartCtrl = this;

    // cartCtrl.newChoice = {};

    cartCtrl.choices = CartService.getChoices();

    cartCtrl.addMyChoice = function(newChoice) {
      console.log(newChoice);
      CartService.addChoice(newChoice);
      // cartCtrl.newChoice = {};
      $location.path('/cart');
    };

  });
})();
