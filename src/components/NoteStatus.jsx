import { useNotes } from "../context/NotesContext";
import Message from "./Message";

function NoteStatus ({notes}){
//dervied state :
    const allNotes = notes.length;
    const completedNotes = notes.filter((n)=>n.completed).length;
    const unCompletedNotes = allNotes - completedNotes ;
    
    //*******************children props */
    //نکته: بین کامپوننت ها میتویم محتوایی رو قرار بدیم که بهشون میگن چیلدرن پراپس
    // جاهایی نیازه که بخوایم کامپوننت رو داینامیک کنیم یا مقداری رو بینش قرار بدیم

    if(!allNotes) return <Message icon="bad" text="NO note has already been added">this is children props</Message>

    return (
        <ul className="note-status">
            <li>All <span>{allNotes}</span></li>
            <li>completed <span>{completedNotes}</span></li>
            <li>open <span>{unCompletedNotes}</span></li>

        </ul>
    )
}
export default NoteStatus;