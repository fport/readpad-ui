import PropTypes from "prop-types"

function Textfield({ size: size }) {
    console.log('size', size);
    return (
        <div>index</div>
    )
}

Textfield.prototype = {
    size: PropTypes.string
}

export default Textfield
