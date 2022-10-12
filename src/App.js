import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';
import data from './data';
function App() {
  return (
    <div className="App">
    <h2>Employye List</h2>
    <div>
      {data.map((item)=>{
       return <Card {...item} key={item.id} />
      })}
    </div>



    </div>
  );
}

export default App;
