import classNames from 'classnames'
import React from 'react'
import './button.scss'
const Button = ({
    onClick,
    type,
    children,
    size = 's'
}) => {
    const btnClass = classNames({
        'btn':true,
        'btn-secondary': type === 'secondary',
        'btn-primary': type === 'primary',
        'btn-medium': size === 'm',
        'btn-small': size === 's'
    })
  return (
    
    <button className={btnClass} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button