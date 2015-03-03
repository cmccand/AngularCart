(function () {
  "use strict";
  angular.module('BookApp')
  .factory('BooksService', function ($http, $rootScope) {
    var url = 'http://tiy-fee-rest.herokuapp.com/collections/chrism';


var getMyBooks = function () {
  return $http.get(url);
}

var getSingleProduct = function(id) {
  return $http.get(url + '/' + id);
}

var addMyBook = function (book) {
  $http.post(url, book);
  $rootScope.$broadcast('book:created');
}

return {
  getBooks: getMyBooks,
  addBook: addMyBook,
  getSingleProduct: getSingleProduct
}

})

angular.module('BookApp')
.factory('CartService', function () {
  var choices = [];


  var getMyChoices = function () {
    return choices;
  }
  var addMyChoice = function (choice) {
    choices.push(choice);
  }

  return {
    getChoices: getMyChoices,
    addChoice: addMyChoice
  };
});



})();
