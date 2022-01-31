// Custom components
import Home from './app/pages/home/Home'
import MyAppbar from './app/components/appbar/MyAppbar'
// import Orders from './app/pages/orders/Orders'
// import Login from './app/pages/auth/login/Login'
// import Checkout from './app/pages/checkout/Checkout'

function App() {
  return (
    <div>
      <MyAppbar />

      <main className='main-body'>
        <Home />
        {/* <Login /> */}
        {/* <Checkout /> */}
        {/* <Orders /> */}
      </main>
    </div>
  )
}

export default App
