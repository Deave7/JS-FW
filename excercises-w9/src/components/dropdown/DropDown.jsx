import './DropDown.css'
import list from '../../bob_simple_10.json'
import Card from '../Card/Card.jsx';

const DropDown = () => {
    const data = list;

    <div className="drop-down-container">
        {data.map((data) => {
            <Card firstName={data.firstName} lastName={data.lastName} pantColor={data.pantColor} favoriteFood={data.favoriteFood} favoriteTool={data.favoriteTool} pet={data.pet} hobby={data.hobby}></Card>
        })}
    </div>

    
}

export default DropDown