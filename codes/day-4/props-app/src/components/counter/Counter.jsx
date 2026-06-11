import './Counter.css'
import PropTypes from 'prop-types'

//args:{ countValue: count }
const Counter = (props) => {
    //props.countValue = 100
    return (
        <div>
            Counter: &nbsp; {props.countValue}
        </div>
    )
}

Counter.propTypes = {
    countValue: PropTypes.number.isRequired
}
export default Counter