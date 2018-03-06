
//REACT
import React from 'react'
import PropTypes from 'prop-types'
//REDUX
import { connect } from 'react-redux'
//material-ui-search-bar
import SearchBar from 'material-ui-search-bar'
//STYLES
import { styleSearchBar } from './styles'
//lOGIC
import { searchRequest } from '../../actions.js'

const SearchBarComponent = ( {currentSearchString, onClickSearchRequest} ) => (
  <SearchBar
    value = {currentSearchString}
    onChange = {(string) => onClickSearchRequest(string)}
    onRequestSearch = {(string) => onClickSearchRequest(string)}
    style = {styleSearchBar}
  />
)

SearchBarComponent.propTypes = {
  onClickSearchRequest: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  currentSearchString: state.SearchString
})
const mapDispatchToProps = (dispatch) => ({
  onClickSearchRequest: (searchString) => {
    dispatch(searchRequest(searchString))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent)
