import { Outlet } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import Header from './components/Header'

function App() {


  return (
    <>
      <div className=' m-0 p-0 box-border h-[100vh] w-[100%] '>
        <UserContextProvider>
          <Header />
          <Outlet />
        </UserContextProvider>
      </div>

    </>
  )
}

export default App
