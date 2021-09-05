import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Index from './components/Index';
import AddNotes from './components/AddNotes';
import NoteList from './components/NoteList';
import UserNote from './components/UserNote';

const App = () => {
  const [notes, setNotes] = useState([]);
  function updateNotes(note){
    setNotes(prevNotes => {
        return [...prevNotes, {name: localStorage.getItem('user'), note: note}]
    });
  }
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/AddNotes">
          <AddNotes notes={notes} setNotes={setNotes} updateNotes={updateNotes}/>
        </Route>
        <Route path="/Notes">
          <NoteList notes={notes} setNotes={setNotes}/>
        </Route>
        <Route path="/my-notes/:name/:index">
          <UserNote notes={notes}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
