import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import AddNotes from './AddNotes';
import NoteList from './NoteList';
import { useLocation } from 'react-router-dom';

export default function Index() {
    // const location = useLocation();
    // const [notes, setNotes] = useState([...location.state.notes]);
    // console.log("inside index");
    // console.log(notes);

    // setNotes({name: "Mia", note:"GoodBye"})

    // function updateNotes(note){
    //     setNotes(prevNotes => {
    //         return [...prevNotes, {name: localStorage.getItem('user'), note: note}]
    //     });
    // }

    return (
        <div>
            <div>
                {/* <Link to={{
                    pathname: "/AddNotes",
                    state: { 
                        notes: notes
                    },
                    data: {
                        updateNotes: updateNotes
                    }
                }}>
                    <h4>Add Notes</h4>
                </Link> */}
                <Link to="/AddNotes">
                    <h4>Add Notes</h4>
                </Link>
                <Link to="/Notes">
                    <h4>View Notes</h4>
                </Link>
            </div>
        </div>
    )
}
