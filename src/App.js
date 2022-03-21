import Navbar from './components/Navbar';
import SearchPage from './components/SearchPage';
import Store from './components/Store';


function App() {
  return (
    <div className="App">
      <Store>
        <Navbar/>
        <SearchPage/>
      </Store>
      
    </div>
  );
}

export default App;
