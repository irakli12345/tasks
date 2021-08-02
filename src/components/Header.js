import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = (e) => {
        console.log(e)
    }
    return (
        <header className="header">          
        <h2>Task Tracker</h2>
        <Button color="green" text="Add" onClick={onClick}></Button>       
</header>
        
    )
}
Header.defaultProps = {
    title: 'Good Morning America!'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
//const headerStyle = {
//    color: 'blue',
//    backgroundColor: 'yellow'
//}
export default Header
