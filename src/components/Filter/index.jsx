//REACT
import React from 'react'
//Material UI
import Grid from 'material-ui/Grid'
//
import Genres from '../../containers/Genres/'
import PageAmount from '../../containers/PageAmount/'
import RaitingFilter from '../../containers/Stars/'
//
import {
  styleFilterGridContainer
} from './styles'

const Filter = () => (
  <Grid container direction = "column" style={styleFilterGridContainer}>
    <Grid item xs>
      <Genres />
    </Grid>
    <Grid item xs>
      <PageAmount />
    </Grid>
    <Grid item xs>
      <RaitingFilter />
    </Grid>
  </Grid>
)


export default Filter
