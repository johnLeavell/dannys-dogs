import React from 'react'
import { FaDog } from 'react-icons/fa';
import { IconContext } from 'react-icons';


const Footer = () => {
    return (
        <IconContext.Provider value={{color: 'blue', size: '3em', className: 'dog-icon' }}>
            <div>
                <FaDog />
            </div>
        </IconContext.Provider>
        
    )
}

export default Footer
