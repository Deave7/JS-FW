import './App.css'
import Header from './components/Header/Header'
import RepeatText from './components/RepeatText/RepeatText'
import List from './components/List/List'
import Counter from './components/Counter/Counter'
import Check from './components/Check/Check'
import Radio from './components/Radio/Radio'
import DropDown from './components/DropDown/DropDown'
import ToDo from './components/ToDo/ToDo'


function App() {
  const animalArray = ['Horse', 'Cat', 'Dog', 'Elephant', 'Zebra', 'Bear', 'Moose', 'Bobcat']
  const vehicleArray = ['Car', 'Motorcycle', 'Bicyle', 'Airplane', 'Helicopter']

  return (
    <>
    <Header headerText={'Hello'} ></Header>
    <RepeatText string="Hello darkness my old friend" count="5"></RepeatText>
    <List animalArray={animalArray}></List>
    <Counter></Counter>
    <Check></Check>
    <Radio></Radio>
    <DropDown vehicleArray={vehicleArray}></DropDown>
    <ToDo></ToDo>
    </>
  )
}

export default App
