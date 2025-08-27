import { useState } from "react";
<<<<<<< HEAD
//ست نوتس اینجا همون ست نوتس پدرشه
function AddNewNote({onAddNote}){
//1-برای ساختن یک کنترل المنت باید استیت مخصوص به اون رو بسازیم
    const [title,setTitle]=useState("");
//مقدار یوزاستیت حتما باید یک استرینگ باشه و نال و ... نمیتونه باشه
    const [description,setDescription]=useState("");

    
=======
import { useNotesDispatch } from "../context/NotesContext";

function AddNewNote() {
  const dispatch = useNotesDispatch();
  const [title, setTtile] = useState("");
  const [description, setDescription] = useState("");
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30

    const handleSubmit = (e)=>{
     //مشخصات ایونت رو داخل فانکشن هندل سابمیت میفرسته
        e.preventDefault();
        //اینو میذاریم تا ریلود نشه
        if (!title || !description) return null;
        //یه آبجکت از اطلاعات درست میکنیم
        const newNote = {
            title,
            description,
            id:Date.now(),
            completed:false,
            createdAt:new Date().toISOString(),

        }
        setTitle("");
        setDescription("");
        onAddNote(newNote);
        //از روش کال بک فانکشن استفاده میکنیم که ریترنش یک آرایه است
        //یه ابجکت جدید به ارایه اضافه میکنه
        // setNotes((prevNotes)=>[...prevNotes,newNote])
        

    };
<<<<<<< HEAD
=======
    dispatch({ type: "add", payload: newNote });
    setTtile("");
    setDescription("");
  };
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30

    const handleChange = (e)=>{
        // console.log(e.target.value)
        setTitle(e.target.value);

    }
    const handleDesc = (e)=>{
        // console.log(e.target.value)
        setDescription(e.target.value);
    }

    return(
        <div className="add-new-note">
            <h1>Add new note</h1>
            
            <form className="note-form" onSubmit={handleSubmit}>
                <input value={title}
                 onChange={handleChange} 
                //  onChange={(e)=>setTitle(e.target.value)}
                //به صورت خلاصه وار و تک خطی هم میشه نوشت
                 type="text" 
                 className="text-field"
                  placeholder="note-title" />
                
                
                <input
                 value={description}
                 onChange={handleDesc}
                 type="text"
                 className="text-field"
                  placeholder="note description" />

                <button type="submit" className="btn btn--primary">Add new note</button>
            </form>
            
        </div>
        //2-اتریبیوت ولیو رو به اینپوت میدیم و مقدارشو برابر با استیت قرار میدیم
        //3- اتریبیوت آنچنج رو میدیم بهش تا اطلاعات وارد شده توسط کاربر تو استیت ما ذخیره بشه
        //موقعی که کاربر اطلاعات رو داخل اینپوت ها وارد میکنه باید داخل کامپوننت ذخیره بشه تا بتونیم بهش دسترسی داشته باشیم
        //پس باید استیتی بسازیم تا دیتاهارو درونش ذخیره کینم

        //control component or control element
        //المنت هایی هستن که مقادیر اونا توسط استیت ها کنترل میشه
    )
};

export default AddNewNote;



//************************* */
//مرور خلاصه وار:
//وقتی روی دکمه ادد نیونوت کلیک میکنیم:
//فانکشن(ایونت) هندل سابمیت اجرا میشه
//این ایونت با مقدار آن ادد نوت اجرا میشه
//خود فانکشن آن ادد نوت برابر است با هندل ادد نوت
//خود هندل ادد نوت مقدارش نیو نوته که ابجکت داخل بچه رو انیجا بهش دسترسی داریم
// و اینطوری میتونیم نوت ها خودمون رو اپدیت کنیم
//click AddNewNote => handleSubmit(onAddNOte) => onAddNote(handleAddNote) => handleAddNote(newNote)