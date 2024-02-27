import './AboutCard.css'

// eslint-disable-next-line react/prop-types
const AboutCard = ({name, description}) => {
    
    return (
        <div className="about-card">
        <ul>
            <li>Name: {name}</li>
            <li>Description: {description}</li>
        </ul>
        </div>

    )
}
    
export default AboutCard