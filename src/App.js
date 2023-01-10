import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-container'>
      <Sidebar/>
      <MainContent/>
      </div>
    </div>
  );
}

export default App;
