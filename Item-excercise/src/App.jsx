import './App.css'
import DogContainer from './components/DogContainer'
import List from './components/List'
import DinoInfoBox from './components/DinoInfoBox'
import List2 from './components/List2'

const animals2 = [
  {name: "Horse", legs: 4},
  {name: "Dog", legs: 4},
  {name: "Cat", legs: 4},
  {name: "Snake", legs: 0},
  
]

function App() {


  return (
    <>
    
      <DogContainer></DogContainer>
      <List animals={["Dog", "Cow", "Donkey", "Horse"]} listType=''></List>
      <List animals={["Dog", "Cow", "Donkey", "Horse"]} listType='ol'></List>
      <DinoInfoBox name="Diplodocus" discoveryYear="1878" period="Jurassic" length="25 meters" weight="13 tons" image="https://upload.wikimedia.org/wikipedia/commons/f/f7/Misty_Diplodocus.jpg" flexDir="row"></DinoInfoBox>
      <DinoInfoBox name="Diplodocus" discoveryYear="1878" period="Jurassic" length="25 meters" weight="13 tons" image="https://upload.wikimedia.org/wikipedia/commons/f/f7/Misty_Diplodocus.jpg" flexDir="row-revese"></DinoInfoBox>
      <List2 animals={animals2} listType='ol'></List2>
      <List2 animals={animals2} listType=''></List2>
    </>
  )
}

export default App
