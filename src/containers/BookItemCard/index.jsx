//REACT
import React from 'react'
//REDUX
import { connect } from 'react-redux'
//Material UI
import Typography from 'material-ui/Typography'
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card'
import ButtonBase from 'material-ui/ButtonBase'
//STYLES
import {
  styleCard,
  styleImage,
  styleTitle,
  styleAuthor,
  styleCardButtons,
  styleBtnToWishList,
  styleBtnToAmazon
} from './styles'
//LOGIC
import {addToWishList} from '../../actions.js'

const BookItemCard = ({isbn, title, author, averageRating, thumbnail, amazonProductURL, id, onClickAddToWishList, openModal}) => (
    <Card style = {styleCard}>
        <CardMedia
          component = 'img'
          src = {thumbnail}
          style={styleImage}
          title = "click on me for detailed information"
          onClick = {openModal}
        />
      <CardContent>
        <Typography align="center" style = {styleTitle} >
          {title.toUpperCase()}
        </Typography>
        <Typography align="center" style = {styleAuthor} >
          {author}
        </Typography>
      </CardContent>
      <CardActions style = {styleCardButtons}>
          <ButtonBase
            onClick = {() => onClickAddToWishList(title, amazonProductURL, id)}
            style = {styleBtnToWishList}
          >
            WISH LIST
          </ButtonBase>
          <ButtonBase
            href = {amazonProductURL}
            style = {styleBtnToAmazon}
          >
            BUY
        </ButtonBase>
      </CardActions>
    </Card>
)

const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => ({
  onClickAddToWishList: (title, amazonProductURL, id) => {
    dispatch(addToWishList(title, amazonProductURL, id))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(BookItemCard)
