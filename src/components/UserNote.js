import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/note-card.css';

export default function UserNote({ notes }) {
    const location = useLocation();
    const myIndex = location.state.myIndex;
    const myName = location.state.myName;
    return (
        <div>
            <Link to="/">
                <h4>Home</h4>
            </Link>
            <Link to="/AddNotes">
                <h4>Add Notes</h4>
            </Link>
            <h3>{myName}</h3>
            {notes.map((note, index) => {
                if(index === myIndex){
                    return(
                        <div>
                            <div id="note-card">
                                <h3>Note: </h3>
                                <h4 color="white">{note.note}</h4>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}
