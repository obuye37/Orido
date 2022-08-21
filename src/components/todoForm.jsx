import { AddIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputRightElement, Stack, StackDivider } from "@chakra-ui/react"
import { useState } from "react"
import TodoList from "./todoList"


const TodoForm = () => {
    const todoObj = {   
        id: 0,
        todo:"",
        desc: '',
        date: '',
        time: ''
    }

    const [ errorStatus, setErrorStatus ] = useState(false)
    
    const [placeholder, setPlaceholder ] = useState('Enter your todo here')
    const [ todoList, setTodoList ] = useState([])
    const [ inputValue, setInputValue ] = useState('')
    const [ timeValue, setTimeValue ] = useState()
    const [ dateValue, setDateValue ] = useState()

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleEnterKey = (e) => {
        if( e.code === "Enter" ){
            e.preventDefault()
            addTodo()
        }
    }

    const handleDateChange = (e) => {
        setDateValue(e.target.value)
    }

    const handleTimeChange = (e) => {
            const time = e.target.value
            let timeArr = time.split(":")
            const timePeriod = timeArr[0] >= 12 ? "PM" : "AM"
           
            if(timeArr[0] >= 12 ) {
                let pm; 
                switch(timeArr[0]) {
                case '13': 
                     pm = 1;
                    break;
                case '14': 
                    pm = 2;
                    break;
                case '15': 
                    pm = 3;
                    break;
                case '16': 
                    pm = 4;
                    break;
                case '17': 
                pm = 5;
                    break;
                case '18': 
                    pm = 6;
                    break;
                case '19': 
                    pm = 7;
                    break;
                case '20': 
                    pm = 8;
                    break;
                case '21':
                    pm = 9;
                    break;
                case 22:
                    pm = 10;
                    break;
                case '23': 
                    pm = 11;
                    break;
                case '24':
                    pm = 12;
                    break;
                default:
                    return null;
            }
            setTimeValue(`${pm}:${timeArr[1]}${timePeriod}`)
            } else if(timeArr[0] === '00') {
                let time = 12 
                setTimeValue(`${time}:${timeArr[1]}${timePeriod}`)
            }else{
                let am = timeArr[0]
                setTimeValue(`${am}:${timeArr[1]}${timePeriod}`)
            }
            
              
        }

   const handleClick = (e) => {
        e.preventDefault()
        addTodo()
    }

    const addTodo = () => {
        if(inputValue) {
            setTodoList([
            `Todo: ${inputValue} on ${dateValue} by ${timeValue}`,
            ...todoList
        ])
        } else {
            setErrorStatus(true)
            setPlaceholder("You must begin by entering a todo")
        }
        setInputValue('')
    }

    const onFocus = () => {
        setErrorStatus(false)
        setPlaceholder('')
    }

    const onBlur = () => {
        setPlaceholder('Enter your todo here')
    }

    return (
        <Stack divider={<StackDivider borderColor='tomato' />} spacing={4} >
                <InputGroup>
                    <Input 
                        isInvalid = {errorStatus}
                        variant='filled'
                        onFocus={onFocus}
                        onBlur = {onBlur}
                        placeholder = {placeholder}
                        onChange={handleChange}
                        size="lg"
                        value={inputValue}
                        onKeyPress={handleEnterKey}
                        m="5px"
                        width='48%'
                        errorBorderColor="red.300"
                    />
                    
                        <InputRightElement 
                        as='button'
                        onClick={handleClick}
                        children={ <span><AddIcon /> Add Todo</span>}
                        size='lg'
                        pt='6px'
                        mr="10px"
                        width='6rem' />
        
                    <Input m='5px' width='20%' size='lg' type='date' value={dateValue} onChange={handleDateChange}/>
                    <Input m='5px' width='20%' size='lg' type='time' onChange={handleTimeChange} />
                </InputGroup>
            <TodoList todos={todoList}/>
        </Stack>
        
    )     
}



export default TodoForm