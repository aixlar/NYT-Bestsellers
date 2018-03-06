//REACT
import React from 'react'
//Material UI
import Typography from 'material-ui/Typography'
//component styles
import {
  styleHeader,
  styleHeadline
} from './styles'

const Header = (styleProps) => (
  <div style={styleHeader}>
    <Typography style={styleHeadline}>
        NY TIMES BESTSELLER LIST
    </Typography>
  </div>
)

export default Header
