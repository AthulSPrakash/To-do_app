const NavBar = ({navSelection}) => {

    let nav = ''

    window.onload = () => {
        document.querySelector('.todo').classList.add('highlight')
    }

    const note = () => {
        document.querySelector('.todo').classList.remove('highlight')
        document.querySelector('.note').classList.add('highlight-alt')
        nav = 'Note'
        navSelection(nav)
    }

    const todo = () => {
        document.querySelector('.note').classList.remove('highlight-alt')
        document.querySelector('.todo').classList.add('highlight')
        nav = 'To Dos'
        navSelection(nav)
    }

    return(
        <nav className="main-nav">
            <button onClick={() => note()} className="nav-item note" title="notes">
                <i className="fas fa-sticky-note"></i>
            </button>
            <button onClick={() => todo()} className="nav-item todo" title="To-dos">
                <i className="fas fa-list-alt"></i>
            </button>
        </nav>
    ) 
}

export default NavBar