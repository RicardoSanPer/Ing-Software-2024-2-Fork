import logo from './logo.svg';
import './App.css';


import Navigation from "./components/common/Navigation"
import Main from "./components/common/Main"

function App() {
  return (
    <div className="App">
      <h1>Clone Buster</h1>
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
