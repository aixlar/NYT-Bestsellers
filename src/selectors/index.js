import { getBooksByGenre } from './booksByGenreSelector'
import { getBooksBySearch } from './booksBySearchSelector'
import { getBooksByPageAmount } from './booksByPageAmountSelector'
import { getBooksByRating } from './booksByRatingSelector'

export const getBooksByFilters = (books, selectedGenre, selectedPageAmountRange, selectedSearchString, selectedRaiting) => {
  let filteredBooks = []
  filteredBooks = getBooksByGenre(books, selectedGenre)
  filteredBooks = getBooksByPageAmount(filteredBooks, selectedPageAmountRange)
  filteredBooks = getBooksBySearch(filteredBooks, selectedSearchString)
  filteredBooks = getBooksByRating(filteredBooks, selectedRaiting)
  return filteredBooks
}
