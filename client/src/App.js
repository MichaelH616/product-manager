import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';

function App() {
  
  return (
    <div>
        <Routes>
          <Route path='/' default element={<Main/>} />
          <Route path='/products/:id' element={<ProductDetail/>}/>
        </Routes>
    </div>
  );
}

export default App;
