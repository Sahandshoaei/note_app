<<<<<<< HEAD
=======
import { useNotes, useNotesDispatch } from "../context/NotesContext";

function NoteList({ sortBy }) {
  const notes = useNotes();

  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    ); // a -b  => a > b ? 1 : -1
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30


<<<<<<< HEAD
function NoteList({notes , onDelete , onCompleted}){
    return(
        <div className="note-list">
            {notes.map((note)=>(
                <NoteItem
                 key={note.id} 
                 note={note}
                onDelete={onDelete}
                onCompleted={onCompleted} />
            ))}
        </div>
    )
    
=======
  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30
}

export default NoteList;

<<<<<<< HEAD
function NoteItem({note , onDelete , onCompleted}){

    const options = {
        year:"numeric",
        month:"long",
        day:"numeric",
    }

    return (
        //در حالت دیفالت کلاس نوت ایتم رو داشته باش و اگر نوت آیتم ترو شد کلاس کامپلیتد رو بهش بده
        //در غیر این صورت استرینگ خالی
        //این برا حالتیه که روی آیتم انجام شده کلیک کردیم و میخواهیم استایل های مخصوص بدیم بهش (روی اسم انجام شده ها خط میخوره)
        <div className ={`note-item ${note.completed ? "completed" : ""}` } >
            <div className="note-item__header">
                <div>
                    <p className="title">{note.title}</p>
                    <p className="desc">{note.description}</p>
                </div>
                <div className="actions">

                    <button onClick={()=>onDelete(note.id)}>&times;</button>
                    {/* به صورت اتوماتیک کلیک میشه پس به صورت کال بک فانکشن مینویسیم */}
                    <input type="checkbox" 
                    name={note.id}
                    id={note.id}
                    value={note.id}
                    onChange={onCompleted}
                     />
                </div>
            </div>

            <div className="note-item__footer">
                {new Date(note.createdAt).toLocaleDateString("en-US",options)}
            </div>
=======
function NoteItem({ note }) {
  const dispatch = useNotesDispatch();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30

        </div>
<<<<<<< HEAD
    )
    
=======
        <div className="actions">
          <button
            onClick={() => dispatch({ type: "delete", payload: note.id })}
          >
            ❌
          </button>
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            checked={note.completed}
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "complete", payload: noteId });
            }}
          />
        </div>
      </div>
      <p className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </p>
    </div>
  );
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30
}


//خلاصه کامپوننت :
// در نهایت میخوایم کامپوننت نوت لیست استیت نوتس در اپ رو تغییر بده
//پس یک فانکشن به اسم هندل دیلیت تعریف میکنیم
// هندل دیلیت نوت رو به خود نوت لیست به عنوان پراپس پاس میدیم
//در داخل نوت لیست این پراپس رو داریم و این پراپس رو با همین اسم مجددا به نوت آیتم پاس میدیم
// و در داخل نوت آیتم دیستراکچر میکنیم و بهش دسترسی خواهیم داشت