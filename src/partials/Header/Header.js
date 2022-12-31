import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { 
  AppBar, 
  Button, 
  IconButton,  
  Toolbar, 
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import GroupIcon from '@material-ui/icons/Group'

import useStyles from './Header.style'

const Header = () => {
  const classes = useStyles() 
  const history = useHistory()

  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = route => {
    history.push(route)
    handleToggleMenu()
  }

  return(
    <>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu' onClick={() => handleToggleMenu()}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            My App
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
       
      <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
        <List>

          <ListItem button onClick={() => handleMenuClick('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>

          <ListItem button onClick={() => handleMenuClick('/customers')}>
            <ListItemIcon>
              <GroupIcon />  
            </ListItemIcon>
            <ListItemText>Lista de Clientes</ListItemText>
          </ListItem>

        </List>
      </Drawer>
    </>
  )
}

export default Header