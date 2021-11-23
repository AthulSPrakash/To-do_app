import React from "react"

const Settings = ({name}) => {

    const root = document.querySelector(':root')
    const [darkMode, setDarkMode] = React.useState(JSON.parse(localStorage.getItem("darkmode")) || false)
    localStorage.setItem("darkmode", JSON.stringify(darkMode))

    const settings = () => {
        document.querySelector('.settings-container').classList.toggle('open')
    }

    function darkModeToggleOff(){
        root.style.setProperty('--bg', 'rgb(250, 250, 250)')
        root.style.setProperty('--text', 'grey')
        root.style.setProperty('--shadow', 'lightgray')
    }
    function darkModeToggle(){
        root.style.setProperty('--bg', '#282A35')
        root.style.setProperty('--text', 'rgb(250, 250, 250)')
        root.style.setProperty('--shadow', 'rgb(32, 32, 32)')
    }

    React.useEffect(() => {
        darkMode? darkModeToggle() : darkModeToggleOff()
        const btn = document.querySelector('.inner-switch')
        darkMode ? btn.classList.add('switch') : btn.classList.remove('switch')
    },[darkMode])

    const toggleDark = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return(
        <div className="settings-container">
            <div className="menu-container">
                <div className="settings-header">
                    <h3>{name}</h3>
                    <button onClick={settings} title="close menu">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="dark-mode">
                    <h3>Dark Mode</h3>
                    <button onClick={toggleDark}>
                        <div className="outer-switch">
                            <div className="inner-switch"></div>
                        </div>
                    </button>
                </div>
            </div>
            <div onClick={()=>settings()} className="menu-close"></div>
        </div>
    )
}
export default Settings