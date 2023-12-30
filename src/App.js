import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
      </div>
      
      <div className='Bienvenida'>
        <ItemListContainer greeting={'Bienvenidos a mi tienda de bebidas🍺'}/>
      </div>
    </div>
  );
}

export default App;
