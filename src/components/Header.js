import React, { useState } from 'react'
import Logo from './Logo'
import MenuItem from './MenuItem'
import PropTypes from 'prop-types'

export default function Header({ activeTitle, onMenuChange }) {
    const [_activeTitle, setActiveTitle] = useState(activeTitle)
    const [menuItems, setMenuItems] = useState([
        {
            id: 1,
            title: 'Ülkelere Göre Covid Değerleri',
        },
        {
            id: 2,
            title: 'Kayda Geçmiş Tüm Corona Değerleri',
        },
        {
            id: 3,
            title: 'Kıtalara Göre Covid Değerleri',
        }
    ])

    return (
        <nav className='bg-gray-800 border-gray-200 px-2 py-2.5'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <Logo />

                <div>
                    <ul className='flex flex-row mt-3 font-semibold text-base space-x-10'>
                        {menuItems.map(item => {
                            return (
                                <MenuItem
                                    key={item.id}
                                    title={item.title}
                                    active={item.title === _activeTitle} 
                                    onClick={() => {
                                        setActiveTitle(item.title)
                                        onMenuChange(item.id)
                                    }} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
Header.propTypes = {
    activeTitle: PropTypes.string,
    onMenuChange: PropTypes.func
}
Header.defaultProps = {
    activeTitle: 'Ülkelere Göre Covid Değerleri',
    onMenuChange: () => { }
}
