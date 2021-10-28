const Header = ({dataFromParent}) => {

    const settings = () => {
        document.querySelector('.settings-container').classList.toggle('show')
    }

    return(
        <div className="header-container">
        <div className="name_container">
            <button onClick={()=>settings()}  className="settings" title="settings">
              <i className="fas fa-bars"></i>
            </button>
            <h2 aria-label="App Name">{dataFromParent}</h2>
        </div>
      </div>
    )
}
export default Header