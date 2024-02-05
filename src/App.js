import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
        <BrowserRouter>
            <NavBar/>
        
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/licores' element={<ItemListContainer/>} />
                <Route path='/licores/:categoria' element={<ItemListContainer/>} />
                <Route path='/item/:codigo' element={<ItemDetailContainer/>} />
            </Routes>

        </BrowserRouter>
  );
}

export default App;
