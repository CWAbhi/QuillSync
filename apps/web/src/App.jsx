import Landing from "./app/Landing.jsx";
import Signin from './auth/Signin/Signin.jsx'
import Singup from './auth/Signup/signup.jsx';
import { Routes,Route } from 'react-router-dom';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    );
  };
