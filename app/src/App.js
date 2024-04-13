import logo from './logo.svg';
import './App.css';


import Navigation from "./components/common/Navigation"
import Main from "./components/common/Main"

function App() {
  return (
    <div className="App">
      <div className='title'><h1>CLONE BUSTER</h1></div>
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
