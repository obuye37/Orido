import React, { useState } from 'react'

import { Box, IconButton } from '@chakra-ui/react'
import { DeleteIcon, EditIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'

const TodoList = (props) => {
    const [ editStatus, setEditStatus ] = useState(false)

    const handleEditCancle = () => {
        setEditStatus(!editStatus) 
    }

    const editTodo = () => {
        
    }

    if(props.todos === undefined) {
        return console.log("TodoList not Set")
    }
    else if(props.todos) {
        return(
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:"center"}}>
                {!props.todos.length >= 1 ? <div style={{alignSelf:'start'}}>Enter a Todo to Begin</div> : 
                props.todos.map((todo, index) => {
                    return (  
                                    
                            <Box 
                                display='flex' 
                                alignItems='center' 
                                key={index} 
                                mt='5px' 
                                bg='tomato' 
                                width='90%' 
                                pl={4} 
                                color='white' 
                                borderRadius='10px'
                                >
                                <span style={{ flex: 1, wordBreak:'break-word' }}>{todo}</span>
                                <IconButton 
                                    color='whiteAlpha.500' 
                                    bg='transparent' 
                                    onClick={handleEditCancle} 
                                    _hover={{ opacity: 1, background:"transparent", color: 'white' }} 
                                    alignSelf="end" 
                                    icon={editStatus ? <AddIcon /> : <EditIcon />} 
                                />  
                                <IconButton 
                                    color='whiteAlpha.500' 
                                    bg='transparent' 
                                    _hover={{ opacity: 1, background:"transparent", color: 'white' }}  
                                    alignSelf="end" 
                                    icon={<DeleteIcon />} 
                                /> 
                                <IconButton
                                    display={editStatus ? 'block' : 'hidden'}
                                    color='whiteAlpha.500'
                                    bg='transparent'
                                    _hover={{ opacity: 1, background:"transparent", color: 'white' }}  
                                    alignSelf="end" 
                                    icon={<CloseIcon />} 
                                />
                            </Box>
                )
                } 
                )}
            </div>
            
        )
    }    
    }

    export default TodoList



    /***
     * 
     * 
     * 

    if(props.todos) {
        return(
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:"center"}}>
                {!props.todos.length >= 1 ? <div style={{alignSelf:'start'}}>Enter a Todo to Begin</div> : 
                props.todos.map((todo, index) => {
                    return (  
                        <div>
                            <IconButton icon={<EditIcon />} />              
                            <Box key={index} mt='10px' bg='tomato' width='90%' p={4} color='white'>{todo}</Box>
                        </div>
                )
                } 
                )}
            </div>
        )
    } 

    */