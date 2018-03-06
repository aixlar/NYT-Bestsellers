//REDUX
import { combineReducers } from "redux"
//TYPES IMPORT
import {
  WISH_LIST_ADD,
  WISH_LIST_REMOVE,
  WISH_LIST_CLEAR,
  GENRE_SELECT,
  PAGE_AMOUNT_RANGE_SELECT,
  PAGE_AMOUNT_RANGE_RESET,
  SEARCH_REQUEST,
  STARS_RAITING_SELECT,
  STARS_RAITING_RESET
} from "./types"

//BOOKS
const reducerBooks = ( books = [], action ) => (books)

//WISH LIST
const reducerWishList = ( wishList = [], action ) => {

    switch( action.type ) {
        case WISH_LIST_ADD:
          const wishListBigString = `${action.title}|${action.amazonProductURL}|${action.id}`
          if (!wishList.includes(wishListBigString)) {
            return [...wishList, wishListBigString]
          } else {
            return wishList
          }
        case WISH_LIST_REMOVE:
          if (wishList.includes(action.wishListItem)) {
            let removeIndex = wishList.indexOf(action.wishListItem)
            wishList.splice(removeIndex, 1)
            return [...wishList]
          } else {
            return wishList
          }
        case WISH_LIST_CLEAR:
          return []
        default:
          return wishList
    }
}
//GENRES
const reducerSelectedGenre = ( selectedGenre = 'All', action ) => {
  switch( action.type ) {
    case GENRE_SELECT:
      return action.genre
    default:
      return selectedGenre
  }
}
//PAGE AMOUNT RANGE
const reducerSelectedPageAmountRange = ( selectedPageAmountRange = null, action ) => {
  switch( action.type ) {
    case PAGE_AMOUNT_RANGE_SELECT:
      return action.pageAmountRange
    case PAGE_AMOUNT_RANGE_RESET:
      return null
    default:
      return selectedPageAmountRange
  }
}
//RAITING
const reducerSelectedRaiting = ( selectedRaiting = 0, action ) => {
  switch( action.type ) {
    case STARS_RAITING_SELECT:
      return action.selectedRaiting
    case STARS_RAITING_RESET:
      return 0
    default:
      return selectedRaiting
  }
}
//SEARCH
const reducerSearchString = ( searchString = '', action ) => {
  switch( action.type ) {
    case SEARCH_REQUEST:
      return action.searchString
    default:
      return searchString
  }
}

//combining reducers in root reducer
const rootReducer = combineReducers({
    Books: reducerBooks,
    WishList: reducerWishList,
    SelectedGenre: reducerSelectedGenre,
    SelectedPageAmountRange: reducerSelectedPageAmountRange,
    SelectedRaiting: reducerSelectedRaiting,
    SearchString: reducerSearchString
})
export default rootReducer
