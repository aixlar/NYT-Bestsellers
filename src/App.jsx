//REACT
import React from 'react'
//Material UI
import Grid from 'material-ui/Grid'
//
import Books from './containers/Books'
import Filter from './components/Filter'
import WishListWrapper from './components/WishListWrapper/'
//
import Header from './components/Header/'
import SearchBar from './containers/SearchBar/'

const styleGridContainer = {
  maxWidth: '1800px'
}

const App = () => (
  <div>
    <Header />
    <SearchBar />
    <Grid container direction={'row'} alignContent = 'center' style={styleGridContainer} >
      <Grid item xs={2}>
        <Filter />
      </Grid>
      <Grid item xs={9}>
        <Books />
      </Grid>
      <Grid item xs={1}>
        <WishListWrapper />
      </Grid>
    </Grid>
  </div>
)

export default App
