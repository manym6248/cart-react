import React, { useContext } from 'react';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import  styles  from "./Header.module.scss";

//context
import { cartContext } from '../context/CartContextProvider';
import { Link } from 'react-router-dom';
 const Header = () =>{

  const   { state } = useContext(cartContext)
  return (
    <div className={styles.header}>
         <Box sx={{ flexGrow: 1  }} >
      <AppBar position="static">
        <Toolbar sx={{justifyContent: 'space-between'}}>

          <Link to='/Store' color="inherit">store</Link>
        <Link to='/shope'>

           <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Badge color="secondary" badgeContent={state.itemsCounter}>

            <ShoppingCartOutlinedIcon />
            </Badge>
            
          </IconButton>
        </Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header;
