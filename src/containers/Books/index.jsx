//REACT
import React from 'react'
import PropTypes from 'prop-types'
//REDUX
import { connect } from 'react-redux'
//Material UI
import Grid from 'material-ui/Grid'
//STYLES
import {
  styleBooksGridContainer
} from './styles'
//### COMPONENTS
import BookItem from '../../components/BookItem/'
//LOGIC
import { addToWishList } from '../../actions.js'
import { getBooksByFilters } from '../../selectors/'

const BooksWrapper = ( {books, onClickToWishList} ) => (
  <Grid container style={styleBooksGridContainer}>
      {books.map( (book) =>
        <Grid item key = {"keyForBookGridItem = " + book.title}>
          <BookItem
            isbn = {book.isbn}
            genre = {book.genre}
            publishedDate = {book.publishedDate}
            title = {book.title}
            description = {book.description}
            contributor = {book.contributor}
            author = {book.author}
            averageRating = {book.averageRating}
            pageCount = {book.pageCount}
            thumbnail = {book.thumbnail}
            googleBooksLink = {book.googleBooksLink}
            amazonProductURL = {book.amazonProductURL}
          />
        </Grid>
      )}
  </Grid>
)
//PROPTYPES
BooksWrapper.propTypes = {
  books: PropTypes.array.isRequired,
}
const mapStateToProps = (state) => ({
  books: getBooksByFilters(state.Books, state.SelectedGenre, state.SelectedPageAmountRange, state.SearchString, state.SelectedRaiting)
})
const mapDispatchToProps = (dispatch) => ({
  onClickToWishList: isbn => dispatch(addToWishList(isbn))
})
export default connect(mapStateToProps, mapDispatchToProps)(BooksWrapper)
