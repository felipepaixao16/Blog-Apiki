import './index.css'

import ApikiLogo from "../../../../assets/apiki-logo.gif"

const index = () => {
  return (
    <div className="header__bar__container">
      <div className="header__bar__wrapper" >
        <header className="header__bar">
          <div className="header__bar__logo">
            <img src={ApikiLogo} alt="Apiki Logo" className="header__bar__logo__img" />
            <hr />
            <span>DEVWORLD</span>
          </div>
          <div className="header__bar__search">
            <input type="text" name="searchPost" id="searchPost" placeholder="Pesquisar..." />
            <label htmlFor="searchPost">
            </label>
          </div>
        </header>
      </div>
    </div>
  )
}

export default index;