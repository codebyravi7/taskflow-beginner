import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import'./app.css'
import TaskForm from './components/TaskForm'
function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <h1>Capstone project for beginner</h1>
        <TaskForm/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
