import logo from './logo.svg';
import './App.css';
import Carousal from './components/Carousal';
import CarousalItem from './components/CarousalItem';
import { cardDetails } from './cardDetails';

function App() {

  return (
    <div className="App">
      <Carousal card={cardDetails}></Carousal>
    </div>
  );
}

export default App;
