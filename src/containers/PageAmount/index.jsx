//REACT
import React, {Component} from 'react'
import PropTypes from 'prop-types'
//REDUX
import { connect } from 'react-redux'
//Material UI
import Input from 'material-ui/Input'
import ButtonBase from 'material-ui/ButtonBase'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
//STYLES
import {
  styleTypographyTitle,
  stylePageAmountInnerDiv,
  styleInput,
  styleButtonBaseShow,
  styleButtonBaseReset,
  styleButtonTypography
 } from './styles'
//LOGIC
import {
  selectPageAmountRange,
  resetPageAmountRange
} from '../../actions.js'

class PageAmount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minPageAmount: '',
      maxPageAmount: ''
    }
  }
  handleChangeMinPageAmount = event => {
    this.setState({ minPageAmount: Number(event.target.value) })
  }
  handleChangeMaxPageAmount = event => {
    this.setState({ maxPageAmount: Number(event.target.value) })
  }
  handleShowBooksInPageAmountRange = () => {
    let pageAmountRange = [this.state.minPageAmount, this.state.maxPageAmount]
    if (pageAmountRange[0] === '') pageAmountRange[0] = 0
    if (pageAmountRange[1] === '') pageAmountRange[1] = 10000
    this.props.onClickSelectPageAmountRange(pageAmountRange)
  }
  handleResetPageAmountRange = event => {
    this.setState({
        minPageAmount: '',
        maxPageAmount: ''
      })
    this.props.onClickResetPageAmountRange()
  }
  render() {
    return (
    <div>
      <Typography style={styleTypographyTitle}>
        PAGE AMOUNT:
      </Typography>
        <Grid style={stylePageAmountInnerDiv} container direction="column">
          <Grid item xs>
              <Input
                value={this.state.minPageAmount}
                onChange = {this.handleChangeMinPageAmount}
                placeholder="Min"
                style={styleInput}
              />
              <Input
                value={this.state.maxPageAmount}
                onChange = {this.handleChangeMaxPageAmount}
                placeholder="Max"
                style={styleInput}
              />
          </Grid>
          <Grid item xs>
            <ButtonBase
              onClick={this.handleShowBooksInPageAmountRange}
              style={styleButtonBaseShow}
            >
              <Typography style={styleButtonTypography}>
                SHOW
              </Typography>
            </ButtonBase>
            <ButtonBase
              onClick={this.handleResetPageAmountRange}
              style={styleButtonBaseReset}
            >
              <Typography style={styleButtonTypography}>
                RESET
              </Typography>
            </ButtonBase>
          </Grid>
        </Grid>
    </div>
    )
  }
}

PageAmount.propTypes = {
  onClickSelectPageAmountRange: PropTypes.func.isRequired,
  onClickResetPageAmountRange: PropTypes.func.isRequired
}


const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
  onClickSelectPageAmountRange: (pageAmountRange) => {
    dispatch(selectPageAmountRange(pageAmountRange))
  },
  onClickResetPageAmountRange: () => {
    dispatch(resetPageAmountRange())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(PageAmount)
