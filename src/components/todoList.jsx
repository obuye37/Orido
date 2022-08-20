
import { StackDivider, Box, Stack } from '@chakra-ui/react'

const TodoList = (props) => {
if(props.todos === undefined) {
    return console.log("undefined array")
}
else if(props.todos) {
    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:"center"}}>
            {!props.todos.length >= 1 ? <div style={{alignSelf:'start'}}>Enter a Todo to Begin</div> : 
            props.todos.map((todo, index) => {
                return (                
                    <Box key={index} mt='10px' bg='tomato' width='90%' p={4} color='white'>{todo}</Box>
            )
            } 
            )}
        </div>
        
    )
}    
}

export default TodoList