import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import { SearchBar } from './index'
const Navbar = () => {
    return (
        <Stack
            direction='row'
            alignItems='center'
            p={2}
            sx={{ position: "sticky", background: 'black', top: 0, justifyContent: 'space-between' }}>
            <Link to="/" style={{ display: "flex", alignItems: 'center' }}>
                <img src={logo} alt="logo" 
                height={45} />
                <h1 style={{marginLeft:"5px",fontWeight:"bold",color:"white"}}>JBtube</h1>
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar