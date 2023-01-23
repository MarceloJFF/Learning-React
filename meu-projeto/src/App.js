import logo from './logo.svg';
import './App.css';
import HelloWorld  from './Components/HelloWorld';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';
import Frase from './Components/Frase';
import List from './Components/List';


function soma(a,b){
  return a+b;
}
function App() {
  const name="Marcelo";
  const name2 = "Carina"
  const url="https://via.placeholder.com/150";
  return (
  
  <div className="App">
    <h1>Testando CSS</h1>
    <Frase></Frase>
    <HelloWorld/>
    <SayMyName nome =  "Marcelo"/>
    <SayMyName nome =  "Maria"/>
    <SayMyName nome = {name2}/>
    <Pessoa nome="Marcelo Jhones" idade = "24" profissao= "Dev Full Circle" foto = "https://via.placeholder.com/150"></Pessoa>
    
      <List></List>
   
    </div>
    
  );
}

export default App;
