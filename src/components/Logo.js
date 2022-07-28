import React from 'react'
import PropTypes from 'prop-types'

export default function Logo({logo, title}) {
  return (
    <div className='flex items-center'>
        <img src={logo} alt={title} className='container h-10 '/>
        <span className='self-center text-xl font-bold whitespace-nowrap text-white'>{title}</span>
    </div>
  )
}

Logo.propTypes = {
    title: PropTypes.string,
    logo: PropTypes.string
}
Logo.defaultProps = {
    title: 'Corona App',
    logo: 'https://media.istockphoto.com/vectors/coronavirus-covid19-outbreak-virus-image-covid-19-logo-with-virus-vector-id1211614741?k=20&m=1211614741&s=170667a&w=0&h=VF8_9CIp6TTj8KjO8dPvZwue9I4nvYQpOdqNcR0QzuQ='
}
