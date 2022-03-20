import './App.css';
import Appbar from './components/Appbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Experience from './components/Experiences'
import OwnExperience from './components/ownExperience'

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route exact path='/' element={<Experience />} />
          <Route exact path='/own-exp' element={<OwnExperience />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
