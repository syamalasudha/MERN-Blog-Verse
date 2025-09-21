 import NavBar from "./NavBar"
 import SignUp from "./SignUp"
 import SignIn from "./SignIn"
 import HomePage from "./HomePage"
 import {Routes,Route} from "react-router-dom"
function App() {
  
  return (
    
      <Routes>
        
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/" element={<HomePage/>}/>
       {/* <NavBar/>
       <SignUp/>  
       <SignIn/> 
      <HomePage/>*/}
    </Routes>    
    
  )
}

export default App
