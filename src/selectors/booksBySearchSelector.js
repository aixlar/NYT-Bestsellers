export const getBooksBySearch = (books, selectedSearchString) => {
  if (selectedSearchString === "") return books
  let booksBySearch = []
  const regExp = new RegExp(selectedSearchString, 'i')
  books.map( (book) => {
    const InTitle = Boolean(book.title.search(regExp) +1)
    const InAuthor = Boolean(book.author.search(regExp) +1)
    const isSuccessful = InTitle||InAuthor
    if (isSuccessful) booksBySearch.push(book)
  })
  return booksBySearch
}
