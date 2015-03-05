(function () {
  "use strict";
  angular.module('BookApp')
  .factory('BooksService', function ($http, $rootScope) {
    var url = 'http://tiy-fee-rest.herokuapp.com/collections/chrism';


    var getMyBooks = function () {
      return $http.get(url);
    }

    var getSingleBook = function(id) {
      return $http.get(url + '/' + id);
    }

    var addMyBook = function (book) {
      $http.post(url, book);
      $rootScope.$broadcast('book:created');
    }

    var updateBook = function (book, id) {
      $http.put(url + '/' + id, book);
      $rootScope.$broadcast('book:updated');
    };

    var deleteBook= function (id) {
      $http.delete(url + '/' + id);
      $rootScope.$broadcast('book:deleted');
    };

    return {
      getBooks: getMyBooks,
      addBook: addMyBook,
      getSingleBook: getSingleBook,
      updateBook:updateBook,
      deleteBook:deleteBook
    }

  })

  angular.module('BookApp')
  .factory('CartService', function ($http,$rootScope) {
    // var choices = [];
    var url = 'http://tiy-fee-rest.herokuapp.com/collections/chriscart'
    var cart = [];

    var getMyChoices = function () {
      return $http.get(url);
    }

    var updateQty = function(){
      var qty = 0;
      for( var i = 0; i < cart.length; i++) {
        updateQty += cart[i].quantity;
      }
      return updateQty;
    };

    var addMyChoice = function (choice) {
      // choices.push(choice);
      delete choice._id
      $http.post(url, choice);
      $rootScope.$broadcast('book:created');
    }

    var deleteChoice= function (id) {
      $http.delete(url + '/' + id);
      $rootScope.$broadcast('book:deleted');
    }

    var updateTotal = function() {
      var total = 0;
      angular.forEach(cartCtrl, function(choice) {
        total += choice.quantity * choice.price;
      })
      return total;
    }

    return {
      getChoices: getMyChoices,
      addChoice: addMyChoice,
      deleteChoice: deleteChoice,
      updateQty: updateQty,
      updateTotal:updateTotal
    };
  });



})();
