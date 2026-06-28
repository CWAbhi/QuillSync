import Singup from './auth/Signup/signup.jsx';
import { Routes,Route } from 'react-router-dom';

export default function App() {
  return (<>
    <h1 className="text-3xl font-bold underline bg-amber-300">
      Hello world
    </h1>
  
      <Routes>
        <Route path="/signup" element={<Singup />} />
      </Routes>
    
  </>);
}