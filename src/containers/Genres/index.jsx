//REACT импорты
import React from 'react'
import PropTypes from 'prop-types'

//REDUX импорты
import { connect } from 'react-redux'

//Material UI импорты
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
//ГЕНЕРАТОРЫ ДЕЙСТВИЙ
import { selectGenre } from '../../actions.js'

import {
  styleGenreListDiv,
  styleTypographyTitle,
  styleGenreBorder,
  styleGenreButton,
  styleTypographyGenre
 } from './styles'


const Genres = ({genres, onClickSelectGenre}) => (
  <div style={styleGenreBorder}>
    <Typography style={styleTypographyTitle}>
      GENRES:
    </Typography>
    <div style={styleGenreListDiv}>
      {genres.map( (genre) =>
          <Button
            key = {"keyForGenreButtn = " + genre}
            onClick = {() => onClickSelectGenre(genre)}
            style={styleGenreButton}
          >
            <Typography align='center' style={styleTypographyGenre} >
              {genre.toUpperCase().replace(new RegExp('_', 'g'), ' ')}
            </Typography>
        </Button>
      )}
    </div>
  </div>
)

Genres.propTypes = {
  genres: PropTypes.array.isRequired,
  onClickSelectGenre: PropTypes.func.isRequired
}

const mapStateToProps = () => {
  const genres = [
    'All',
    'Science',
    'Sports',
    'Advice, How-To and Miscellaneous',
    'Business',
    'Young Adult Hardcover'
  ]
  return {
    genres
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickSelectGenre: (genre) => {
      dispatch(selectGenre(genre))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genres)
