import './CheckAge.css'

const age = 10

const CheckAge = () => {
    return <><p>{age >= 18 ? 'Välkommen in i baren' : 'Du behöver växa till dig lite innan du får komma in!'}</p></>
}

export default CheckAge;