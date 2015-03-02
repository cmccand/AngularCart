(function () {
  "use strict";
  angular.module('BookApp')
  .factory('BooksService', function () {
    var books = [
  {
    name: "The Sun Also Rises",
    author: "Ernest Hemingway"
},
  {
    name: "Tender is the Night",
    author: 'F. Scott Fitzgerald'
},
  {
    name: "Lord Jim",
    author: "Joseph Conrad"
},
  {
    name: "Franny and Zooey",
    author: "J.D. Salinger"
  }
];

var getMyBooks = function () {
  return books;
}
var addMyBook = function (book) {
  books.push(book);
}

return {
  getBooks: getMyBooks,
  addBook: addMyBook

}
})

  angular.module('BookApp')
  .factory('CartService', function () {
    var choices = [];
    

    var getMyChoices = function () {
      return choices;
    };
    var addMyChoice = function (book) {
      choices.push(book);
    }

    return {
      getChoices: getMyChoices,
      addChoice: addMyChoice
  };
  });



})();
