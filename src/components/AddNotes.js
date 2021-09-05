import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom';
// import { useLocation } from "react-router-dom";
import '../App.css';

function AddNotes({notes, setNotes, updateNotes}) { 
    // const location = useLocation();
    // const notess = location.state.notes;
    const nameRef = useRef([]);
    // const noteRef = useRef([]);
    // const [newNote, setNewNote] = useState();
    const noteRef = useRef([]);
    const [haveName, setHaveName] = useState(false);
    const [canAddNotes, setCanAddNotes] = useState(false);

    const submitHandler = (e) => {
        localStorage.clear();
        let getName = nameRef.current.value;
        console.log(`this is the name: ${getName}`)
        localStorage.setItem('user', getName);
        setHaveName(true);
        setCanAddNotes(true);
    }

    // const handleInputChange = (e) => {
    //     e.preventDefault();
    //     setNewNote(e.target.value);
    // }

    const submitNotesHandler = () => {
        console.log("Little friend: ");
        console.log(localStorage.getItem('user'));

        console.log("something here");
        let getNote = noteRef.current.value;
        updateNotes(getNote);
        // console.log(location.state.notes);
        // this.props.updateNotes(this.state.newNote);
        // this.setState({
        //     haveName: false, 
        //     canAddNotes: false
        // });
        setHaveName(false);
        setCanAddNotes(false);
    }

    return (
        <div>
            <div>
                {/* <Link to={{
                    pathname: "/",
                    state: {
                        notes: location.state.notes
                    }
                }} >
                    <h4>Home</h4>
                </Link> */}
                <Link to="/">
                    <h4>Home</h4>
                </Link>
                <Link to="/Notes">
                    <h4>View Notes</h4>
                </Link>
            </div>

            <h1>Posting Notes? 😄</h1>
            { haveName ? 
                <h2>
                    Great so your name is {localStorage.getItem('user')}? What do you want to post?
                </h2> : 
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Please enter your name" ref={nameRef}/>
                    <button type="submit">submit</button>
                </form>
            }
            { canAddNotes ? 
                    <div>
                    <textarea required rows="15" cols="80" name="note" ref={noteRef}>
                    </textarea>
                    <br/>
                    <button type="button" onClick={() => submitNotesHandler()}>submit</button>
                    </div>
                    : null
            }  
        </div>
    )
}


export default AddNotes;
