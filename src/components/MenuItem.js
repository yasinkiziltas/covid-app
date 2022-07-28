import React from 'react'
import PropTypes from 'prop-types'

export default function MenuItem({ title, active, onClick }) {
    return (
        <div>
            <li>
                <a onClick={() => {
                    onClick(title)
                }} className={`block no-underline cursor-pointer border-0 py-2 pr-4 pl-3 ${active ? 'text-blue-400' : 'text-gray-400'} hover:text-blue-50`}>
                    {title}
                </a>
            </li>
        </div>
    )
}

MenuItem.propTypes = {
    title: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
}
MenuItem.defaultProps = {
    title: 'Corona App',
    active: false,
    onClick: () => { }
}
