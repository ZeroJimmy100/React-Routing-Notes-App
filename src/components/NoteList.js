import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function NoteList({notes, setNotes}) {

    return (
        <div>
            {console.log(notes)}
            <div>
                <Link to="/">
                    <h4>Home</h4>
                </Link>
                <Link to="/AddNotes" notes={notes} setNotes={setNotes}>
                    <h4>Add Notes</h4>
                </Link>

            </div>
            <div>
                <p>
                    {notes.map((note, index) => {
                        return (
                            <p>
                                <Link to={{pathname: `/my-notes/${note.name}/${index}`, state: { myIndex: index, myName: note.name }}}>{note.name}</Link>
                            </p>
                        )
                    })}
                </p>
            </div>
        </div>
    )
}
