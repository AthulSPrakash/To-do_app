import { useEffect } from 'react';
import Render from './render'

const Note = () => {

    let notelist = []
    let delelist = []
    const listLocalStorage = JSON.parse(localStorage.getItem("note"))

    if(listLocalStorage){
        notelist = listLocalStorage
    }

    const saveList = (e) => {
        e.preventDefault()
        const list = document.querySelector('#list')
        const note = document.querySelector('#note')
        if(note.value===''){
            return
        }
        notelist.push(note.value)
        note.value = ''
        list.innerHTML = Render(notelist)
        localStorage.setItem("note", JSON.stringify(notelist))
    }

    useEffect(() => {
        const list = document.querySelector('#list')
        list.innerHTML = Render(notelist)
    })

    const showInput = () => {
        document.querySelector('.add').classList.toggle('hide')
        document.querySelector('.input-container').classList.toggle('visible')
        const input = document.querySelector('#note')
        input.focus()
    }

    const createDeleteArray = () => {
        const allCheckBox = document.querySelectorAll('#select-delete')
        const allSpan = document.querySelectorAll('.rendered-list')
        for(let i=0; i<allSpan.length; i++){
            allCheckBox[i].addEventListener('click',()=>{
                if(delelist.includes(allSpan[i].textContent)){
                    return
                }
                delelist.push(allSpan[i].textContent)
            })
            if(allCheckBox[i].checked === true){
                if(!delelist.includes(allSpan[i].textContent)){
                    delelist.push(allSpan[i].textContent)
                }
            }
        }
    }

    const deleteOption = () => {
        document.querySelector('.delete-btn').style.visibility = "hidden"
        document.querySelector('.clear-all').classList.add('visible')
        document.querySelector('.add').classList.add('hide')
        document.querySelector('.select-all').classList.add('visible')
        document.querySelector('.delete-container').classList.add('show')

        const checkBox = document.querySelectorAll('.checkbox')
        for(let i=0; i<checkBox.length; i++){
            checkBox[i].classList.add('visible')
        }
        createDeleteArray()
    }

    const clearSelection = () => {
        document.querySelector('.delete-btn').style.visibility = "visible"
        document.querySelector('.clear-all').classList.remove('visible')
        document.querySelector('.add').classList.remove('hide')
        document.querySelector('.select-all').classList.remove('visible')
        document.querySelector('.delete-container').classList.remove('show')

        const checkBox = document.querySelectorAll('.checkbox')
        for(let i=0; i<checkBox.length; i++){
            checkBox[i].classList.remove('visible')
        }

        const allCheckBox = document.querySelectorAll('#select-delete')
        for(let i=0; i<allCheckBox.length; i++){
            allCheckBox[i].checked = false
        }
        delelist = []
    }

    const selectAll = () => {
        const allCheckBox = document.querySelectorAll('#select-delete')
        for(let i=0; i<allCheckBox.length; i++){
            allCheckBox[i].checked = true
        }
        createDeleteArray()
    }

    const deleteList = () => {
        notelist = notelist.filter( item => {
            if(!delelist.includes(item))
            return item
        })
        localStorage.setItem("note", JSON.stringify(notelist))
        const list = document.querySelector('#list')
        list.innerHTML = Render(notelist)
        clearSelection()
    }

    const cancel = () => {
        deleteOption()
        clearSelection()
    }

    return(
        <>
            <div className="section-header-container">
                <div className="select-container">
                    <button onClick={()=>selectAll()} className="select-all" title="select all">
                        <i className="fas fa-check-double"></i>
                    </button>
                    <div className="delete-btn-container">
                        <button onClick={()=>clearSelection()} className="clear-all" title="clear selection">
                                <i className="fas fa-times"></i>
                        </button>
                        <button onClick={()=>deleteOption()} title="delete item" className="delete-btn">
                            <i className="far fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="list-container">
                <ul className="note-list" id="list" aria-label="notes">
                {/* list render here */}
                </ul>
            </div>

             {/* add btn */}
             <button onClick={()=>showInput()} className="add" title="add notes">
                <i className="fas fa-plus"></i>
            </button>

            <div className="input-container">
                <div onClick={()=>showInput()} className="form-close"></div>
                <form>
                    <input type="text" id="note" name="list" placeholder="Note" autoComplete="off"/>
                    <div className="btn-container">
                        <span title="mark as important">
                            <i className="fas fa-exclamation"></i>
                        </span>
                        <span>
                            <span onClick={()=>showInput()} className="input-close" title="close">Close</span>
                            <input onClick={(e)=>saveList(e)} type="submit" id="save" title="save text" value="Save"/>
                        </span>
                    </div>
                </form>
            </div>

            {/* delete pop up */}
            <div className="delete-container">
                <button onClick={()=>cancel()} className="cancel">Close</button>
                <button onClick={()=>deleteList()} className="delete">Delete</button>
            </div>
        </>
        
    )
}

export default Note