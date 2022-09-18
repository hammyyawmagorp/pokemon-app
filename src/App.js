import './App.css';
import Header from './components/Header';
import TeamSection from './components/TeamSection';
import Pokedex from './components/Pokedex';
import {useState} from 'react';
import axios from 'axios';
import TeamCard from './components/TeamCard';



function App() {

  const [team, setTeam] = useState([])

  function addToTeam (url){
    if(team.length <6 ){
    axios
      .get(url)
      .then((res)=> {
      setTeam([...team, res.data]);
      })
    } else if(team.length === 6){
      alert('Only Six Pokemon Allowed on Team');
    }
  }


  return (
    <div className="App">
      <Header />
      <TeamSection team={team}/>
      <Pokedex addToTeam={addToTeam}/>
    </div>
  );
}

export default App;
