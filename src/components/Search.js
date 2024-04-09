import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'

const Search = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '30px'}}} mb="49px" textAlign="center">
        Try these Exercises
      </Typography>
        <Box position="relative" mb="72px">
          <TextField height="76px"
                      value=""
                      onChange={(e) => {}}
                      placeholder="Search For Exercises"
                      type="text"
                      sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px'}, width: { lg: '800px', xs: '350px'},backgroundColor: "#fff", borderRadius: '40px'}}
          />
          <Button className="search-btn"
            sx= {{ bgcolor: "#ff2625", color: 'white', textTransform: 'none', width: { lg: '175px', xs: '80px'},
                   fontSize: {
                    lg:'20px', xs:'14px'
                   }, height: '62px', position: 'absolute'
          }}
          >Search</Button>
          </Box>
          <Box>
            <HorizontalScrollbar/>
          </Box>
    </Stack>
  )
}

export default Search