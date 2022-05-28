import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import LastLaunch from './Pages/LastLaunch';
import NextLauch from './Pages/NextLauch';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className='App'>
          <h1 className='Header'>SpaceX launches 🚀</h1>

          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/LastLaunch/:id' element={<LastLaunch />} />
            <Route path='/NextLaunch/:id' element={<NextLauch />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
