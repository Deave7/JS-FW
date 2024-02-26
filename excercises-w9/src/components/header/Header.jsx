import './Header.css'
function Header() {

    const handleClick = () => {
        
    }

  return (
    <>
        <div className='header'>
            <ul className='header-button-list'>
                <li>Home</li>
                <li>About</li>
                <li onClick={handleClick}>Dropdown</li>
            </ul>
        </div>
    </>
  )
}

export default Header
