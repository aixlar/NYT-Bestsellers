import {
  /*SEARCH*/
  SEARCH_REQUEST,
  /*WISH LIST*/
  WISH_LIST_ADD,
  WISH_LIST_REMOVE,
  WISH_LIST_CLEAR,
  /*FILTER*/
  GENRE_SELECT,
  STARS_RAITING_SELECT,
  STARS_RAITING_RESET,
  PAGE_AMOUNT_RANGE_SELECT,
  PAGE_AMOUNT_RANGE_RESET
} from "./types"

//              SEARCH
export const searchRequest = (searchString) => ({
    type: SEARCH_REQUEST,
    searchString
})
//              WISH LIST
export const addToWishList = (title, amazonProductURL, id) => ({
    type: WISH_LIST_ADD,
    title,
    amazonProductURL,
    id
})
export const deleteFromWishList = (wishListItem) => ({
    type: WISH_LIST_REMOVE,
    wishListItem
})
export const clearWishList = () => ({
    type: WISH_LIST_CLEAR
})
//              FILTER
//GENRE
export const selectGenre = (genre) => ({
    type: GENRE_SELECT,
    genre
})
//PAGE AMOUNT
export const selectPageAmountRange = (pageAmountRange) => ({
    type: PAGE_AMOUNT_RANGE_SELECT,
    pageAmountRange
})
export const resetPageAmountRange = () => ({
    type: PAGE_AMOUNT_RANGE_RESET
})
//RAITING
export const selectRaiting = (selectedRaiting) => ({
    type: STARS_RAITING_SELECT,
    selectedRaiting
})
export const resetRaiting = () => ({
    type: STARS_RAITING_RESET
})
