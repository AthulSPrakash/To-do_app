import { useEffect } from 'react';
import Render from './render'

const Todo = () => {

    let todolist = []
    let delelist = []
    const listLocalStorage = JSON.parse(localStorage.getItem("to-do"))

    if(listLocalStorage){
        todolist = listLocalStorage
    }

    const saveList = (e) => {
        e.preventDefault()
        const list = document.querySelector('#list')
        const toDo = document.querySelector('#to-do')
        if(toDo.value===''){
            return
        }
        todolist.push(toDo.value)
        toDo.value = ''
        list.innerHTML = Render(todolist)
        localStorage.setItem("to-do", JSON.stringify(todolist))
    }
    
    useEffect(() => {
        const list = document.querySelector('#list')
        list.innerHTML = Render(todolist)
    })

    const showInput = () => {
        document.querySelector('.add').classList.toggle('hide')
        document.querySelector('.input-container').classList.toggle('visible')
        const input = document.querySelector('#to-do')
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
        todolist = todolist.filter( item => {
            return !delelist.includes(item)
        })
        localStorage.setItem("to-do", JSON.stringify(todolist))
        const list = document.querySelector('#list')
        list.innerHTML = Render(todolist)
        clearSelection()
    }

    const cancel = () => {
        deleteOption()
        clearSelection()
    }

    return(
        <>
            <div className="section-header-container">
                {/* delete selection  */}
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

            {/*-------------------list container----------------------*/}
            <div className="list-container">
                <ul id="list" aria-label="to-do list">
                {/* list render here */}
                </ul>
            </div>

            {/* add btn */}
            <button onClick={()=>showInput()} className="add" title="add to-do">
                <i className="fas fa-plus"></i>
            </button>

            <div className="input-container">
                <div onClick={()=>showInput()} className="form-close"></div>
                <form>
                    <input type="text" id="to-do" name="list" placeholder="To-do" autoComplete="off"/>
                    <div className="btn-container">
                        <span>
                        </span>
                        <span>
                            <span onClick={()=>showInput()} className="input-close" title="close">Close</span>
                            <input  onClick={(e)=>saveList(e)} type="submit" id="save" title="save text" value="Save"/>
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

export default Todo