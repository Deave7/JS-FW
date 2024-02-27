import './App.css'
import Header from './components/header/Header.jsx'
import DropDown from './components/dropdown/DropDown.jsx'
import list from './bob_advanced_10.json'
import About from './components/about/About.jsx'

function App() {
 

  return (
    <>
    <Header ></Header>
    <About list={list}></About>
    <DropDown list={list}></DropDown>
    </>
  )
}

export default App
