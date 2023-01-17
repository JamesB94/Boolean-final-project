import './App.css';
import LandingPage from './components/LandingPage/landingPage';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';


//Layouts
import RootLayout from './components/layouts/RootLayout';
import HelpLayout from './components/layouts/HelpLayout';

//pages
import Faq from './components/Help/Faq';
import Contact from './components/Help/Contact';


const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element = {<RootLayout />}>
          <Route index element= {<LandingPage />} />
          <Route path='DashBoard' element ={<DashBoard />} />
          {/* Nested Route */}
          <Route path='Help' element = {<HelpLayout />}>
            <Route path='faq' element={<Faq />}/>
            <Route path='contact' element={<Contact />}/>

          </Route>

    </Route>
  )
)


function App() {

  return (
    <RouterProvider router = {router} />
  );
}

export default App;



























// function App() {

//   return (
//     <BrowserRouter>
//     <header> 
      
//       <nav>
//       <span>
//         <NavLink to="/">HOME</NavLink>
//         <NavLink to="/DashBoard"> DashBoard</NavLink>
//         </span>
//       </nav>
      
//     </header>

//     <main>
//       <Routes>
//           <Route index element= {<LandingPage />} />
//           <Route path='/DashBoard' element ={<DashBoard />} />
//       </Routes>
    

//     </main>
//     </BrowserRouter>
//   );
// }

// export default App;