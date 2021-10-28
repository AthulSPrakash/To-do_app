const Settings = ({name}) => {

    const settings = () => {
        document.querySelector('.settings-container').classList.toggle('show')
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
            </div>
            <div onClick={()=>settings()} className="menu-close"></div>
        </div>
    )
}
export default Settings