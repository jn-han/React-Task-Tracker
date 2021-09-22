import PropTypes from 'prop-types'


const Button = ( {text, color, onClick} ) => {
    return <button 
        onClick={onClick} 
        style={{backgroundColor: color}}
        className='btn'>
        {text}
        </button>
}

Button.defaultProps = {
    color: 'steelblue',
    title: 'add',
}

Button.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
}


export default Button