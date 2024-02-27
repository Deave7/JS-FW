import './About.css'
import AboutCard from './AboutCard';

// eslint-disable-next-line react/prop-types
const About = ({list}) => {
    const data = list;

    return (
        <div className='about-container'>
        <h2>{data.construction_company.name}</h2>
        <h3>{data.construction_company.home_town}</h3>
        <p>{data.backstory}</p>
        <h2>Past Projects</h2>
        <div className='past-projects-container'>
        {data.past_projects.map((project, index) => {
            return <AboutCard key={index} name={project.name} description={project.description} />
        })}
        </div>
        </div>
    )
}

export default About