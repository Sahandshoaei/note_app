<<<<<<< HEAD
//در سلکت ها و اینپوت های رادیو و چک باکس از ایونت های آن چنج استفاده میکنیم
//یاد آوری :
//برای ذخیره کردن اطلاعات اینپوت ها از کنترل کامپوننت ها استفاده میکردیم که سه مرحله داشت
//1- ساختن استیت جدید
//2- تعیین کردن ولیو توسط استیت
import { useState } from "react";
//نکته کامپوننت های نوت هدر و نوت لیست رابطه سیبلینگ دارن
//پس برای انتقال دیتا بینشون باید استیت رو داخل کامپوننت پدر یعنی اپ بنویسیم تا این امکان فراهم بشه
function NoteHeader({notes , sortBy , onSort}){

    // const [sortBy , setSortBy] = useState("earliest");
    //مقدار دیفالتش لیتست است

    return(
        <div className="note-header">
            <h2>My Notes ({notes.length})</h2>

            <select value={sortBy} onChange={onSort}>

                <option value="latest">Sort based on latest notes</option>
                <option value="earliest">Sort based on earliest notes</option>
                <option value="completed">Sort based on completed notes</option>

            </select>
        </div>

    )
=======
import { useNotes } from "../context/NotesContext";

function NoteHeader({sortBy, onSort }) {
const notes= useNotes()
  return (
    <div className="note-header">
      <h1>My Notes ({notes.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">Sort based on latest notes</option>
        <option value="earliest">Sort based on earliest notes</option>
        <option value="completed">Sort based on completed notes</option>
      </select>
    </div>
  );
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30
}

export default NoteHeader;