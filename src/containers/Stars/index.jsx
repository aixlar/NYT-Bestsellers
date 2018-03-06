//REACT
import React from 'react'
import PropTypes from 'prop-types'
//REDUX
import { connect } from 'react-redux'
//Material UI
import Typography from 'material-ui/Typography'
import ButtonBase from 'material-ui/ButtonBase'
import Grid from 'material-ui/Grid'
//REACT-STARS
import StarRatings from 'react-star-ratings'
//LOGIC
import { selectRaiting, resetRaiting } from '../../actions.js'
//
import {
  styleGridStars,
  styleButtonReset,
  styleTypographyTitle,
  styleGridTitle,
  styleGridBtnResetWrapper,
  styleButtonTypography,
  styleReactStarsWrapper
} from './styles.js'

import styles from './styles.css'

const RaitingFilter = ({onClickSelectRaiting, onClickResetRaiting, SelectedRaiting}) => (
  <Grid container>
    <Grid item style={styleGridTitle}>
      <Typography style={styleTypographyTitle}>
        RAITING:
      </Typography>
    </Grid>
    <Grid item style={styleGridStars}>
      <div style={styleReactStarsWrapper} align="center">
        <StarRatings
            rating={SelectedRaiting}
            starRatedColor="blue"
            changeRating={event => onClickSelectRaiting(event)}
            starDimension = {'25px'}
            starSpacing = {'0'}
            numberOfStars={5}
            starRatedColor={'#ed532a'}
        />
      </div>
    </Grid>
    <Grid item style={styleGridBtnResetWrapper}>
      <div align='center'>
        <ButtonBase
          style={styleButtonReset}
          onClick = {() => onClickResetRaiting()}
        >
          <Typography style={styleButtonTypography}>
            RESET
          </Typography>
        </ButtonBase>
      </div>
    </Grid>
  </Grid>
)

RaitingFilter.propTypes = {
  onClickSelectRaiting: PropTypes.func.isRequired,
  onClickResetRaiting: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  SelectedRaiting: state.SelectedRaiting
})

const mapDispatchToProps = (dispatch) => {
  return {
    onClickSelectRaiting: (selectedRaiting) => {
      dispatch( selectRaiting(selectedRaiting) )
    },
    onClickResetRaiting: () => {
      dispatch( resetRaiting() )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RaitingFilter)
