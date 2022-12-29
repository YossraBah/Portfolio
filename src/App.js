import Layout from './Layout';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Button from './Components/Button';

function App() {
  return (
    <div className="w-full h-screen bg-darkColor font-sans">
        <BrowserRouter> 
          <Routes>
            <Route path="/Portfolio" element={<Layout/>} />
          </Routes>
        </BrowserRouter>
        <div  className='fixed bottom-7 right-5'>
        <Button><a href='#navbar'><ion-icon name="chevron-up-outline"></ion-icon></a></Button>
        </div>
    </div>
  );
}

export default App;
