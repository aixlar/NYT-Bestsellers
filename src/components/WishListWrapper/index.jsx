//REACT
import React, { Component } from 'react'
//Material UI
import Drawer from 'material-ui/Drawer'
import Button from 'material-ui/Button'
//###
import WishList from '../../containers/WishList'


import {
  styleWishListWrapperDiv
} from './styles'

class WishListWrapper extends Component {
  state = {
    right: false
  }
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }
  render() {
    return (
      <div style={styleWishListWrapperDiv}>
        <Button
          onClick={this.toggleDrawer('right', true)}
          variant = "raised"
          color = "primary"
        >
          WISHLIST
        </Button>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <WishList />
        </Drawer>
      </div>
    )
  }
}

export default WishListWrapper
