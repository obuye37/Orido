import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import SearchForm from './search-form'



export const Navbar = () => {
    return(
        <Box as='header' bg='tomato' pb='50px' color='white' >
            <Text fontFamily='sans-serif' fontSize='6xl' align='center'>Orido</Text>
            <Container>
              <SearchForm />
            </Container>
        </Box>
    )
    
}

export const Footer = () => {
    return(
      <Box bg="tomato" as='footer' display='flex' mt='2' justifyContent='center' alignItems='center' color='white' style={style.footer} >
        <span>Made with Chakra-ui &amp; Create-React-App</span>
      </Box>
    )
}

const style = {
  footer : {
    minHeight:'100px'
  }
}
