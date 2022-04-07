import {createContext} from 'react';
import './App.css';
import ClickMe from './components/ClickMe';

const moods = {
  happy : '🤣',
    sad : '🥲'
}
export const MoodContext =  createContext(moods);

function App() {
  
  return (
    <MoodContext.Provider value={moods.happy}>
    <div className="App">
      <h1>Hello Hooks</h1>
       <ClickMe/>
    </div>
    </MoodContext.Provider>
  );
}



export default App;
