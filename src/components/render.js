const Render = (todo) => {
    let list = ''
    for(let i=0; i<todo.length; i++){
        list += `
        <li>
            ${todo[i]}
            <span class="checkbox">
                <input type="checkbox" value=${todo[i]} id="select-delete">
                <span class="checkmark"></span>
            </span>
        </li>` 
    }
    return list
}

export default Render;