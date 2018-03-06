//
export const getAddedBooksIDs = (wishList) => {
  let addedBooksIDs = []
  wishList.map( wishListItem => {
    addedBooksIDs.push(wishListItem.split('|')[2])
  })
  return addedBooksIDs
}
//
export const generateWishListCode = (WishList) => {
  let code = ''
  wishList.map( wishListItem => {
    code += wishListItem.split('|')[2]
  })
  return code
}
//
export const buildWishListByCode = (books, code) => {
  let wishListByCode = []
  const arrayOfCodeNumbers = code.split('')
  arrayOfCodeNumbers.map( code => )
  books.map( book => {
    if (arrayOfCodeNumbers.includes(String(book.id))) {
      wishListBigString = `${book.title}|${book.amazonProductURL}|${book.id}`
      wishListByCode.push(wishListBigString)
    }
  })
  return wishListByCode
}
