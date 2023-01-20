import './App.css';
import LandingPage from './components/LandingPage/landingPage';
import Goals, { goalLoader } from './components/Goals/Goals.jsx';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';


//Layouts
import RootLayout from './components/layouts/RootLayout';
import HelpLayout from './components/layouts/HelpLayout';
import GoalsLayout from './components/layouts/GoalsLayout';

//pages
import Faq from './components/Help/Faq';
import Contact from './components/Help/Contact';
import GoalTasks, { goalTasksLoader } from './components/Goals/GoalTasks';


const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element = {<RootLayout />}>
          <Route index element= {<LandingPage />} />
          
          {/* Nested Route */}
          <Route path='Help' element = {<HelpLayout />}>
            <Route path='faq' element={<Faq />}/>
            <Route path='contact' element={<Contact />}/>
          </Route>

          <Route path='Goals' element ={<GoalsLayout />} >
            <Route index element ={<Goals />} loader={goalLoader}/>
            <Route path=':id' element={<GoalTasks />} loader={goalTasksLoader} />
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
//         <NavLink to="/Goals"> Goals</NavLink>
//         </span>
//       </nav>
      
//     </header>

//     <main>
//       <Routes>
//           <Route index element= {<LandingPage />} />
//           <Route path='/Goals' element ={<Goals />} />
//       </Routes>
    

//     </main>
//     </BrowserRouter>
//   );
// }

// export default App;