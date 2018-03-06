export const getBooksByPageAmount = (books, selectedPageAmountRange) => {
  if (selectedPageAmountRange === null) return books
  const [minPageAmount, maxPageAmount] = selectedPageAmountRange
  let booksByPageAmount = []
  books.map( (book) => {
    if ((book.pageAmount >= minPageAmount)&&(book.pageAmount <= maxPageAmount)) {
      booksByPageAmount.push(book)
    }
  })
  return booksByPageAmount
}
