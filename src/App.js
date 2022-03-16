
import './App.css';
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar';



function App() {
  return (
    <div className="App">
       <div className="Nav_tester">
       <NavBar/>
       </div>
      <header className="App-header">
        <Banner/>
      </header>
    </div>
  );
}

export default App;
