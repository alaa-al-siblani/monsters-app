import './App.css';

import { useState, useEffect } from 'react';
import MonstersList from './components/monsters-list/monsters-list.component';

const App = () => {
  
  const [searchField, setSearchField]= useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  },[]);

  useEffect(()=>{
    const filteredMonsters = monsters.filter( (monster) => { return monster.name.toLowerCase().includes(searchField)});
    setFilteredMonsters(filteredMonsters);
  },[monsters, searchField]);
 
  const onFieldChanged = (event)=> {
      const searchField = event.target.value.toLowerCase().trim();
      setSearchField(searchField);
    };

  return (
      <div className="App">
      <h1> Monsters App</h1>
      <input 
        className='search-box' 
        placeholder='Search Monsters'
        type='search' 
        onChange={onFieldChanged}
      />

      {<MonstersList monsters = {filteredMonsters} />}

      </div>
    );
}

export default App;
