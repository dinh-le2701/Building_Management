import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './pages/Form/Signin';
import Signup from './pages/Form/Signup';
import ResetForm from './pages/Form/ResetForm';
import ResetPassword from './pages/Form/ResetPassword';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin/> }/>
          <Route path='/signup' element={<Signup/> }/>
          <Route path='/reset' element={<ResetForm /> }/>
          <Route path='/reset-password' element={<ResetPassword /> }/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
