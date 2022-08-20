import { Box } from '@chakra-ui/react'
import React from 'react'
import { Navbar, Footer } from './components/Layouts'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'


export default function App() {
  return (
    <>
      <Navbar />  
        <Box as="main" bg='#ddd'  p="30px" style={style.main}>
          <TodoForm />
          <TodoList />
        </Box>
      <Footer />
    </>
    )
}

const style = {
  main: {
    minHeight:'calc(100vh - 100px)'
  }
}