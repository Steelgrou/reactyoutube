import './Header.css'
import logo from '/burger.webp'
import youtube from '/youtube.svg'
import search from '/search.svg'



function Header() {

  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />

        <div className="header-youtube">
          <img src={youtube} alt="youtube" />
          <p>YouTube</p>
        </div>
        <form >
          <input  className='header-input' type="text" placeholder='Search' />
          <img className='header-search' src={search} alt="search" />
        </form>

      </div>
    </>
  )
}

export default Header
