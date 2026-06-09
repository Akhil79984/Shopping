

import React from 'react'

const Header = () => {
  return (
    <div className='headerPort'>
        <div className='left'>
            <div>
                <h1>Home</h1>
            </div>
            <div className='Center'>
                <ul>
                    <li>Mens</li>
                    <li>WoMens</li>
                    <li>Childrens</li>
                    <li>Kids</li>
                </ul>
            </div>
            <div className='Search'>
                <input type='text' placeholder='Search'/>
            </div>
            <div className='right'>
                Login/Logout
            </div>
            <div className='Cart'> Cart </div>
        </div>
        <h1></h1>
    </div>
  )
}

export default Header