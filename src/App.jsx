import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
<<<<<<< HEAD
import { act } from "react";

function notesReducer (state , action){

  switch(action.type){
    case "add":{

      return [...state , action.payload];

    }

    case "delete":{

      return state.filter((note)=> note.id !== action.payload)

    }

    case "complete":{

      return state.map((note)=> note.id == action.payload ? {...note ,completed: !note.completed} : note )

    }
  }

  throw new Error("unknown Error" + action.type)

}

function App() {

  //lifting up state:
  // const [notes,setNotes]= useState([]);

  const [notes , dispatch] = useReducer(notesReducer,[])

  const [sortBy , setSortBy] = useState("earliest");

 //این یه قانون سر انگشتیه و هرجایی استفاده نمیشه:
 //هرجایی که استیت بود سعی کنید همونجا استیت رو اپدیت کنید
 //برای مثال یک فانکشنی مینویسیم که اپدیت شدن نوت رو همینجا انجام میده
//آرایه ای از نوت های قبلی و همچنین نوت جدید میسازه
//خود نیونوت رو داحل کامپوننت بچه داریم
//برای دسترسی به نیونوت یک پراپس کنار کامپوننت اددمیو نوت تعریف میکنیم که مقدارش هندل ادد نوته

//****************هندلر های مخصوص استیت که اونو اپدیت میکنن */

//1
 const handleAddNote = (newNote)=>{
  // setNotes((prevNotes)=>[...prevNotes,newNote])
  dispatch({type:"add",payload:newNote})
 }
//2
 const handleDeleteNote =(id)=>{

  // const filteredNotes = notes.filter((n)=>n.id != id);

  dispatch({type:"delete",payload:id})
  // setNotes(filteredNotes);
 }
//3
 const handleCompleteNote = (e)=>{

   const noteId = Number(e.target.value);
   dispatch({type:"complete",payload:noteId})

  //  const newNote = notes.map(n=> n.id == noteId ? {...n , completed : !n.completed} : n)
  //  setNotes(newNote);
   //اگر ان آیدی برابر با نوت آیدی بود یعنی کاربر میخواد ابجکتو تغییر بده
   //در غیر این صورت نوت رو برگردون
   //روی نوت ها لوپ میزنیم اگر ان دات آیدی با چیزی که کاربر سلکت کرده(نوت آیدی) برابر بود پس خود اون آبجکت رو برگردون ولی کنارش پراپرتی کامپلیتد رو برعکس کن در غیر این صورت اگه ابجکت مورد نظر نبود خودشو ریترن کن
   
  
 };

 //4
 //برای دسته بندی نوت ها شرط های زیر را مینویسیم
 //نکته : متد سورت باعث میوتیت شدن استیت ما میشه
 //برا حل این مشکل قبلش از متد اسلایس استفاده میکنیم که باعث شلو کپی میشه
 //راه دیگش هم اینه که کلون بکنیم
  let sortedNotes = notes;

  if (sortBy=="earliest")
    sortedNotes = [...notes].sort(
  (a,b) => new Date(a.createdAt) - new Date(b.createdAt)
);

  if (sortBy=="latest")
    sortedNotes = [...notes].sort(
  (a,b) => new Date(b.createdAt) - new Date(a.createdAt)
);

if (sortBy=="completed") sortedNotes = [...notes].sort(
  (a,b)=> Number(b.completed) - Number(a.completed)
)


 //توضیح شرط داخل هندل دلت :
 //از بین نوت های موجود میخوایم فقط اون نوتی که آیدیش انتخاب شده رو حذف کنه و بقیه شون بمونن
 //برای مثال سه تا نوت با آیدی های 1و2و3 داریم و کاربر آیدی 2 رو انتخاب میکنه
 //پس باید 2 حذف و 3و1 فیلتر بشن
 //پس 1و3 با 2 برابر نیس و اونارو فیلتر میکنه
 //نکته: متد فیلتر استیت مارو میوتیت نمیکنه و یک ارایه جدید با رفرنس جدید رو ریترن میکنه
 //نکته: در استیت ها باید از متد هایی استفاده کنیم که استیت مارو میوتیت نکنن

  return(

    
    //نکته مهم: کامپوننت های اددنیونوت و نوت لیست باهم رابطه خواهر برادری دارن و نمیشه بینشون با پراپس ها دیتا پاس داد 
    //برای حل کردن این مشکل از مفهوم لیفتینگ استیت اپ تو پرنت استفاده میکنیم تا دیتا های ما وارد کامپوننت پدر یعنی اپ شده و بتونیم به کامپوننت فرزندش که میشه همون نوت لیست انتقال بدیم
    //ست نونتس رو به عنوان پراپس به این کامپوننت پاس میدیم
    <div className="container">
      <NoteHeader notes={notes} sortBy={sortBy} onSort={e => setSortBy(e.target.value)} />
      <div className="note-app">
        
        <AddNewNote 
        // setNotes={setNotes}
        //برای دسترسی به نیونوت یک پراپس کنار کامپوننت اددمیو نوت تعریف میکنیم که مقدارش هندل ادد نوته
        onAddNote={handleAddNote}
         />
        
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList notes={sortedNotes} 
          onDelete={handleDeleteNote}
          onCompleted={handleCompleteNote}/>
          
        </div>
      </div>
    </div>
    
  )

=======
import { NotesProvider } from "./context/NotesContext";

function App() {
  const [sortBy, setSortBy] = useState("latest");
  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30
}

export default App;
