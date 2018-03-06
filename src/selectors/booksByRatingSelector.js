//Фильтр поиска

export const getBooksByRating = (books, selectedRaiting) => {
  if (selectedRaiting === 0) return books
  let booksByRaiting= []
  books.map( (book) => {
    if (book.averageRating >= selectedRaiting) {
      booksByRaiting.push(book)
    }
  })
  return booksByRaiting
}
