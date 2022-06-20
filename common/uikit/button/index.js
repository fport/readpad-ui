import PropTypes from 'prop-types'

function Button({ size, colorType }) {
    const createClassName = () => {
        let classNames = ['btn']

        if (colorType) classNames.push(`btn-${colorType}`)
        if (size) classNames.push(`btn-${size}`)
        if (className) Array.prototype.push.apply(classNames, className.split(' '))

        return [...new Set(classNames)].join(' ')
    }

    return <button className={createClassName()}>Button</button>
}

Button.prototype = {
    size: PropTypes.string,
    colorType: PropTypes.string
}

export default Button
