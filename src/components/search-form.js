import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'

const SearchForm = () => {
    const [ focus, setFocus ] = useState(false)
    

    const sfocus = () => {
        setFocus(true)
    }
    const sblur = () => {
        setFocus(false)
    }

    return(
        <InputGroup>
            <Input  
            onFocus={sfocus}
            onBlur= {sblur}
            placeholder='Search your saved Todos' 
            _placeholder={!focus ? { opacity: 1, color: 'gray.500' } : { opacity: 1, color: '#eee' } }
            focusBorderColor='#eee'
            variant='filled'
            />
            <InputRightElement
            style={focus ? styles.focus : styles.blur }
            color='tomato'
            fontSize='2xl'
            children={ <MdSearch /> }
            as="button" />
        </InputGroup>
    )
}

export default SearchForm


const styles = {
    focus: {
       color: 'white' 
    },
    blur: {
        color:'tomato'
    }
}