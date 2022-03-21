
import './App.css';
import Banner from './components/Banner/Banner';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
 
  
  
  return (
    
    <div className="App">
      <Banner/>
       <div className="Nav_tester">
      
       <NavBar/>
       </div>
      
      <header className="App-header">
      <ItemListContainer/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
