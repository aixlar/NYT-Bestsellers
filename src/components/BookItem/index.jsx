//Google font Roboto
import 'typeface-roboto'
//REACT
import React, {Component} from 'react'
import PropTypes from 'prop-types'
//Material UI
import Typography from 'material-ui/Typography'
import ButtonBase from 'material-ui/ButtonBase'
import Paper from 'material-ui/Paper'
import Modal from 'material-ui/Modal'

import {
  stylePaper,
  styleModal,
  styleBtnGooglePlay,
  styleTitle,
  styleAuthor,
  styleDescription
} from './styles'

import BookItemCard from '../../containers/BookItemCard/'

class BookItem extends Component {
  state = {
    open: false,
  }
  handleOpen = () => {
    this.setState({ open: true })
  }
  handleClose = () => {
    this.setState({ open: false })
  }
  render() {
    const {
      isbn,
      genre,
      publishedDate,
      title,
      description,
      averageRating,
      contributor,
      author,
      thumbnail,
      googleBooksLink,
      amazonProductURL
    } = this.props

    return (
      <div>
        <BookItemCard
          isbn = {isbn}
          title = {title}
          author = {author}
          thumbnail = {thumbnail}
          amazonProductURL = {amazonProductURL}
          openModal={this.handleOpen}
        />
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div style={styleModal}>
            <Paper style={stylePaper}>
              <Typography style={styleTitle} align="center">
                {title}
              </Typography>
              <Typography style={styleDescription} gutterBottom align="center">
                {contributor}
              </Typography>
              <Typography variant="button" gutterBottom align="center">
                {'Genre: ' + genre}
              </Typography>
              <Typography variant="body1" align="center">
                {'Published: ' + publishedDate}
              </Typography>
              <Typography variant="body1" align="center">
                {'ISBN: ' + isbn}
              </Typography>
              <Typography variant="body1" align="center">
                {(averageRating === null)? '' : ('Average Rating: ' + averageRating)}
              </Typography>
              <Typography style={styleDescription} align="center">
                {description}
              </Typography>
              <ButtonBase
                style={styleBtnGooglePlay}
                href={googleBooksLink}
              >
                GOOGLE BOOKS LINK
              </ButtonBase>
            </Paper>
          </div>
        </Modal>
      </div>
    )
  }
}

BookItem.propTypes = {
  isbn: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contributor: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  googleBooksLink: PropTypes.string.isRequired,
  amazonProductURL: PropTypes.string.isRequired
}
export default BookItem
