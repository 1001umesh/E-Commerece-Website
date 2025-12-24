// import {Routes,Route} from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Collection from './pages/Collection'
// import Product from './pages/Product'
// import Orders from './pages/Orders'
// import PlaceOrders from './pages/PlaceOrders'
// import Login from './pages/Login'
// import Contact from './pages/Contact'
// import Cart from './pages/Cart'
// import NavBar from './components/NavBar'
// import Footer from './components/Footer'
// const App = () => {
//   return (
//     <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9pw]'>
//       <NavBar/>
//       <Routes>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='/about' element={<About/>}></Route>
//         <Route path='/collection' element={<Collection/>}></Route>
//         <Route path='/product' element={<Product/>}></Route>
//         <Route path='/orders' element={<Orders/>}></Route>
//         <Route path='/placeorders' element={<PlaceOrders/>}></Route>
//         <Route path='/login' element={<Login/>}></Route>
//         <Route path='/contact' element={<Contact/>}></Route>
//         <Route path='/cart' element={<Cart/>}></Route>
//       </Routes>
//       <Footer/>
//     </div>
//   )
// }

// export default App

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrders from './pages/PlaceOrders';
import Product from './pages/Product';
import NotFound from './pages/not-found/NotFound';


const App = () => {
  const router=createBrowserRouter([
    {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
      index:true,
      element:<Home/>,
    },
    {
      path:"/about",
      element:<About/>
    },
  
    {
      path:"/contact",
      element:<Contact/>
    },
  
    {
      path:"/collection",
      element:<Collection/>
    },
    {
      path:"/product/:productId",
      element:<Product/>
    },
    {
      path:"/orders",
      element:<Orders/>
    },
  
    {
      path:"/placeorders",
      element:<PlaceOrders/>
    },
  
    {
      path:"/cart",
      element:<Cart/>
    },
  
    {
      path:"/login",
      element:<Login/>
    }
  
  ]
},
{
path:"*",
element:<NotFound/>
}

]);
return <RouterProvider router={router}/>
 

}

export default App
