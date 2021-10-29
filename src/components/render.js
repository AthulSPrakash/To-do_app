const Render = (items) => {
    let list = ''
    for(let i=0; i<items.length; i++){
        list += `
        <li>
            <span class="rendered-list">${items[i]}</span>
            <span class="checkbox">
                <input type="checkbox" value=${items[i]} id="select-delete">
                <span class="checkmark"></span>
            </span>
        </li>` 
    }
    return list
}

export default Render;