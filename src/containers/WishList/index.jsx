//REACT
import React from 'react'
import PropTypes from 'prop-types'
//REDUX
import { connect } from 'react-redux'
//Material UI
import Grid from 'material-ui/Grid'
import ButtonBase from 'material-ui/ButtonBase'
import Typography from 'material-ui/Typography'
import Input from 'material-ui/Input'
//STYLES
import {
  styleGridWishListItem,
  styleBtnAmazon,
  styleBtnDelete,
  styleBtnDeleteAll,
  styleCodeInput
} from './styles'
//LOGIC
import { deleteFromWishList, clearWishList } from '../../actions.js'

const WishList = ({WishList, AddedBooksIDs, onClickDeleteFromWishList, onClickClearWishList, closeDrawer}) => (
  <Grid container direction='column'>
      <Grid item>
        <Typography align="center" variant="title">
          {(WishList.length === 0)? ('FILL ME!') : ('YOUR WISH LIST:')}
        </Typography>
      </Grid>
      {WishList.map( (WishListItem) =>
        <Grid item key={WishListItem.split('|')[0]} direction='column' style={styleGridWishListItem}>
          <Typography align="center" variant="title">
            {WishListItem.split('|')[0]}
          </Typography>
          <ButtonBase
            href = {WishListItem.split('|')[1]}
            style = {styleBtnAmazon}
          >
            AMAZON LINK
          </ButtonBase>
          <ButtonBase
            onClick = {() => onClickDeleteFromWishList(WishListItem)}
            style = {styleBtnDelete}
          >
            DELETE
          </ButtonBase>
        </Grid>
      )} }
    {(WishList.length > 1) && (
      <Grid item>
        <ButtonBase
          onClick = {() => onClickClearWishList()}
          style = {styleBtnDeleteAll}
        >
          DELETE ALL
        </ButtonBase>
      </Grid>
    )}
  </Grid>
)
//PROPTYPES
WishList.propTypes = {
  WishList: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    WishList: state.WishList/*,
    AddedBooksIDs: getAddedBooksIDs(state.WishList)*/
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClickDeleteFromWishList: (wishListItem) => {
      dispatch(deleteFromWishList(wishListItem))
    },
    onClickClearWishList: () => {
      dispatch(clearWishList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WishList)
