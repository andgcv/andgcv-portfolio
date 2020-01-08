import React from 'react'

const Header = ({ title, subtitle, children }) => {
    return (
        <header>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div>{children}</div>
        </header>
    )
}

export default Header