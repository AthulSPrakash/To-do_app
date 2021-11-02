const Settings = ({name}) => {

    const root = document.querySelector(':root')
    const darkmode = localStorage.getItem("darkmode")

    const settings = () => {
        document.querySelector('.settings-container').classList.toggle('show')
    }

    document.addEventListener('DOMContentLoaded',() => {
        const btn = document.querySelector('.fa-toggle-on')
        if(darkmode==="true"){
            btn.classList.add('visible')
            root.style.setProperty('--bg', '#282A35')
            root.style.setProperty('--text', 'rgb(250, 250, 250)')
        }
    })

    const toggleDark = () => {
        const btn = document.querySelector('.fa-toggle-on')

        if(btn.classList.contains('visible')){
            btn.classList.remove('visible')
            root.style.setProperty('--bg', 'rgb(250, 250, 250)')
            root.style.setProperty('--text', 'grey')
            localStorage.setItem("darkmode", "false")
        }else{
            btn.classList.add('visible')
            root.style.setProperty('--bg', '#282A35')
            root.style.setProperty('--text', 'rgb(250, 250, 250)')
            localStorage.setItem("darkmode", "true")
        }
    }

    return(
        <div className="settings-container">
            <div className="menu-container">
                <div className="settings-header">
                    <h3>{name}</h3>
                    <button onClick={()=>settings()} title="close menu">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="dark-mode">
                    <h3>Dark Mode</h3>
                    <button onClick={()=>toggleDark()}>
                        <i className="fas fa-toggle-off"></i>
                        <i className="fas fa-toggle-on"></i>
                    </button>
                </div>
            </div>
            <div onClick={()=>settings()} className="menu-close"></div>
        </div>
    )
}
export default Settings