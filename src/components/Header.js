import PropTypes from 'prop-types'
import Button from './Button'

/* const date = Date();
<h4>Date/Time:{date}</h4> */

const Header = ({title}) => {
    //passing this function in as a property to the button component
    const onClick = () => {
        console.log('Click')
    }
    
    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add+' onClick={onClick} />
        </header>
                
    )
}

//setting prop defaults and rules
Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//Styling options: traditional inline styles; create a Style Object on page; or use CSS files
/*  const headingStyle = {
        color: 'red',
        backgroundColor: 'black',
} */

export default Header