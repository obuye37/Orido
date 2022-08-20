import { Input, InputGroup, InputRightElement, Button, Stack, Center, StackDivider, Container } from "@chakra-ui/react"
import { useState } from "react"
import TodoList from "./todoList"


const TodoForm = () => {
    const [placeholder, setPlaceholder ] = useState('Enter your todo here')
    const [todoList, setTodoList] = useState([])
    const [ inputValue, setInputValue ] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleEnterKey = (e) => {
        if( e.code === "Enter" ){
            e.preventDefault()
            addTodo()
        }
    }

   const handleClick = (e) => {
        e.preventDefault()
        addTodo()
    }

    const addTodo = () => {
        if(inputValue) {
            setTodoList([
            inputValue,
            ...todoList
        ])
        }
        setInputValue('')
    }

    const onFocus = () => {
        setPlaceholder('')
    }

    const onBlur = () => {
        setPlaceholder('Enter your todo here')
    }

    return (
        <Stack divider={<StackDivider borderColor='tomato' />} spacing={4} >
                <InputGroup>
                    <Input 
                        variant='filled'
                        onFocus={onFocus}
                        onBlur = {onBlur}
                        placeholder = {placeholder}
                        onChange={handleChange}
                        size="lg"
                        value={inputValue}
                        onKeyPress={handleEnterKey}
                    />
                    <InputRightElement 
                    as='button'
                    onClick={handleClick}
                    children='Add to Todo'
                    pt='6px'
                    mr="10px"
                    width='6rem' />
                       
                </InputGroup>
            <TodoList todos={todoList}/>
        </Stack>
        
    )     
}



export default TodoForm