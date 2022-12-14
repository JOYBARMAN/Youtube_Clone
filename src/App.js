import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components'
const App = () => {
  return (
    <BrowserRouter>
      <Box sx= {{backgroundColor : " black"}}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/chanel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
          <Route path='/*' element={<Feed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App