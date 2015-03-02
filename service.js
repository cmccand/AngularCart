(function () {
  "use strict";
  angular.module('demoApp')
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
};
var addMyBook = function (book) {
  books.push(book);
}

return {
  getBooks: getMyBooks,
  addBook: addMyBook
//  getHeros: getSuperHeros,
//  addHero: addSuperHero
};
});

})();
