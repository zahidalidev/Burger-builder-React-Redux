// Custom components
// import Home from './app/pages/home/Home'
import MyAppbar from './app/components/appbar/MyAppbar'
import Modal from './app/components/modal/Modal'
import Login from './app/pages/auth/login/Login'

function App() {
  return (
    <div>
      <MyAppbar />

      <main className='main-body'>
        {/* <Home /> */}
        <Login />
        <Modal />
      </main>
    </div>
  )
}

export default App
