import React, { useState } from 'react'
import {AppBar,Toolbar,Typography,Tabs,Tab} from '@mui/material'
import AddHomeIcon from '@mui/icons-material/AddHome';
import {NavLink} from 'react-router-dom'
const Header = () => {
  const [value,setValue] = useState()
  return (
    <div>
    <AppBar sx={{backgroundColor: '#232F3D'}} position='sticky'>
    <Toolbar>
    
    <Typography variant='h5'>Online blogging System</Typography>
    <Tabs sx={{ml: 'auto'}} textColor='inherit' indicatorColor='primary'value={value} onChange={(e,val)=>setValue(val)}>
    <Tab LinkComponent={NavLink} to='/signup' label='SignUp'/>
    <Tab LinkComponent={NavLink} to='/signin' label='SignIn'/>
    <Tab LinkComponent={NavLink} to='/counsellor' label='Add Post'/>
    <Tab LinkComponent={NavLink} to='/appointment' label='Profile'/>
    <Tab LinkComponent={NavLink} to='/visitor' label='Edit post'/>
    <Tab LinkComponent={NavLink} to='/Contact' label='Contact'/>
  
    </Tabs></Toolbar></AppBar>
    </div>
  )}

export default Header