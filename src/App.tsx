import {Route, Routes, createBrowserRouter, RouterProvider} from 'react-router-dom'; 
import './App.css'
import Home from '../src/pages/Home'; 
import Courses from '../src/pages/Courses'; 
import Experiences from '../src/pages/Experiences'; 
import Education from '../src/pages/Education'; 
import Projects from '../src/pages/Projects'; 
import Hobbies from '../src/pages/Hobbies'; 


import Nav from '../src/components/Nav'; 
import Header from '../src/components/Header'; 
import Footer from '../src/components/Footer'; 

function Root(){
  return(
    <>
    <div className = 'page-wrapper'>
    <Header/>
    <div id = "container">
      <Nav/>
      <div>
    <Routes>
      <Route path = "/" element = {<Home/>}></Route>
      <Route path = "/Courses" element = {<Courses/>}></Route>
      <Route path = "/Experiences" element = {<Experiences/>}></Route>
      <Route path = "/Education" element = {<Education/>}></Route>
      <Route path = "/Projects" element = {<Projects/>}></Route>
      <Route path = "/Hobbies" element = {<Hobbies/>}></Route>
    </Routes>
      </div>
    </div>
    <Footer/>
    </div>
    </>

  )
}

const router = createBrowserRouter([{path : '*', Component : Root}]); 
function App() {
  return (
      <RouterProvider router = {router}/>
  )
}

export default App;
