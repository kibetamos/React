import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"

// Import nanoid for generating unique IDs
import {nanoid} from "nanoid"

import ReactMde from 'react-mde';
import './style.css';

/**
 * Challenge: Spend 10-20+ minutes reading through the code
 * and trying to understand how it's currently working. Spend
 * as much time as you need to feel confident that you 
 * understand the existing code (although you don't need
 * to fully understand everything to move on)
 */


    /**
     * Challenge:
     * 1. Every time the `notes` array changes, save it 
     *    in localStorage. You'll need to use JSON.stringify()
     *    to turn the array into a string to save in localStorage.
     * 2. When the app first loads, initialize the notes state
     *    with the notes saved in localStorage. You'll need to
     *    use JSON.parse() to turn the stringified array back
     *    into a real JS array.
     */

    // localStorage.setItem("myCat", "Tom");

export default function App() {

       /**
     * Challenge: When the user edits a note, reposition
     * it in the list of notes to the top of the list
     */



   // Define state for notes and currentNoteId
    // const [notes, setNotes] = React.useState([])
    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    )

      /**
     * Challenge:
     * Lazily initialize our `notes` state so it doesn't
     * reach into localStorage on every single re-render
     * of the App component
     */
    const [currentNoteId, setCurrentNoteId] = React.useState( 
        (notes[0] && notes[0].id) || ""
    )
    
    // localStorage.setNotes(notes);
    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    
    // Define the function to create a new note
    function createNewNote() {

      // Create a new note object with a unique ID and default body
        const newNote = {
            id: nanoid(), // Generate a unique ID using nanoid
            body: "# Type your markdown note's title here"  
        }

            // Update the 'notes' state to include the new note at the beginning of the array
        setNotes(prevNotes => [newNote, ...prevNotes])

            // Set the 'currentNoteId' state to the ID of the newly created note
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        // put the most recently-modified
        // not to be at the top
        setNotes(oldNotes => {
            const newArray = []
            for(let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if(oldNote.id === currentNoteId) {
                    newArray.unshift({ ...oldNote, body: text })
                } else {
                    newArray.push(oldNote)
                }
            }
            // Loop over the original array
                // if the id matches
                    // put the updated note at the 
                    // beginning of the new array
                // else
                    // push the old note to the end
                    // of the new array
            return newArray
        })


        // This does not rearrange the notes

        // setNotes(oldNotes => oldNotes.map(oldNote => {
        //     return oldNote.id === currentNoteId
        //         ? { ...oldNote, body: text }
        //         : oldNote
        // }))
    }
    

       /**
     * Challenge: complete and implement the deleteNote function
     * 
     * Hints: 
     * 1. What array method can be used to return a new
     *    array that has filtered out an item based 
     *    on a condition?
     * 2. Notice the parameters being based to the function
     *    and think about how both of those parameters
     *    can be passed in during the onClick event handler
     */
    
       function deleteNote(event, noteId) {

        // Prevent the event from bubbling up to parent elements

        event.stopPropagation()
        // Your code here
        // console.log("deleted note", noteId)

    // Update the state to remove the note with the specified noteId
    // `setNotes` is a state updater function from a useState hook that takes the current state (oldNotes)
    // and returns a new state (a filtered list excluding the note with the specified noteId)
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
    }



    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
