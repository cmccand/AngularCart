(function () {
  "use strict";
  angular.module('BookApp')
  .factory('BooksService', function () {
    var books = [
  {
    name: "The Sun Also Rises",
    author: "Ernest Hemingway",
    picture: 'http://ecx.images-amazon.com/images/I/51YECFM808L.jpg',
    summary: 'A man gets drunk a lot on wine in Europe.'
  },
  {
    name: "Tender is the Night",
    author: 'F. Scott Fitzgerald',
    picture: 'http://d.gr-assets.com/books/1406695304l/46164.jpg',
    summary: 'A man chases his psychotic wife around Europe.'
  },
  {
    name: "Lord Jim",
    author: "Joseph Conrad",
    picture: 'http://ecx.images-amazon.com/images/I/81RbnrGsRJL._SL1500_.jpg',
    summary: 'An idealistic first mate abandons his sinking ship in a time of need and must deal with his guilt.',
  },
  {
    name: "Franny and Zooey",
    author: "J.D. Salinger",
    picture: 'http://upload.wikimedia.org/wikipedia/en/7/72/Frannyzoey.jpg',
    summary: 'Two genius children try to live in a dumb world.'
  }
];

var getMyBooks = function () {
  return books;

}
/*
var getProducts = function ()
var getSingleProduct = function(id) {
return $http.get(url + '/' + id);
}

var deleteProduct = function(id) {
$http.delete(url + '/' + id);
}

var updateProduct = function (product,id) {
$http.put(url + '/' + id);
}

var createProduct = function (product) {
$http.post(url,product);
$rootScope.$broadcast.
}

(under var main = this;)
ProductService.getProducts().success(function(data) {
main.products = data;
})


*/
var addMyBook = function (book) {
  books.push(book);
}

// var getSingleProduct = function (id) {
//   return book;
// }

return {
  getBooks: getMyBooks,
  addBook: addMyBook,
  // getSingleProduct: getSingleProduct
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
