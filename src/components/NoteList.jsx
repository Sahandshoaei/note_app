

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
    
}

export default NoteList;

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

        </div>
    )
    
}


//خلاصه کامپوننت :
// در نهایت میخوایم کامپوننت نوت لیست استیت نوتس در اپ رو تغییر بده
//پس یک فانکشن به اسم هندل دیلیت تعریف میکنیم
// هندل دیلیت نوت رو به خود نوت لیست به عنوان پراپس پاس میدیم
//در داخل نوت لیست این پراپس رو داریم و این پراپس رو با همین اسم مجددا به نوت آیتم پاس میدیم
// و در داخل نوت آیتم دیستراکچر میکنیم و بهش دسترسی خواهیم داشت