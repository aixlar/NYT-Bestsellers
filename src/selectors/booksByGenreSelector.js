export const getBooksByGenre = (books, selectedGenre) => {
  if (selectedGenre === "All") return books
  let booksByGenre = []
  books.map( (book) => {
    if ( book.genre.includes(selectedGenre) ) {   //
      booksByGenre.push(book)
    }
  })
  return booksByGenre
}
