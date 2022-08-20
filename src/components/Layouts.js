import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import SearchForm from './search-form'



export const Navbar = () => {
    return(
        <Box as='Header' bg='tomato' pb='50px' color='white' >
            <Text fontFamily='sans-serif' fontSize='6xl' align='center'>Orido</Text>
            <Container>
              <SearchForm />
            </Container>
            
        </Box>
    )
    
}

export const Footer = () => {
    return(
      <Box bg="tomato" as='footer' display='flex' mt='2' justifyContent='center' alignItems='center' style={style.footer} >
        <span>made with chakra-ui &amp; create-react-app</span>
      </Box>
    )
}

const style = {
  footer : {
    minHeight:'100px'
  }
}
