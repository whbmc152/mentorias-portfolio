import '../css/navbar.css'

import Logo from './logo'
import ThemeToggleButton from './themetogglebutton.js'
import { useState } from 'react'

const Navbar = (handleChangeTheme) => {

    const [path, setPath] = useState(window.location.pathname);

    const navItems = [
        {
            id: 1,
            path: '/',
            title: 'Home'
        },
        {
            id: 2,
            path: '/exp',
            title: 'Experience'
        },
        {
            id: 3,
            path: '/something',
            title: 'Something'
        },
    ]

    const handleClick = (id) => {
        navItems.map((item) => {
            document.getElementById(item.id).classList.remove('active');
        })
        document.getElementById(id).classList.add('active');
        console.log('clicked')
    }

    return (
        <div id='navbarContainer' className='
            flex
            flex-row
            fixed
            top-0
            w-screen
            h-16
            z-1'>
            <Logo />
            <div className='
                    flex
                    flex-row
                    justify-end
                    items-center
                    w-full
                    h-full
                    right-0
                    pr-16
                '>
                {navItems.map((item) => {
                    return (
                        <div key={item.id} >
                        <a id={item.id} href={item.path} className={item.path == path ? 'active' : ''}>
                            <span onClick={() => handleClick(item.id)}>{item.title}</span>
                        </a>
                        </div>
                    )
                })}
                
                <ThemeToggleButton/>
            </div>
        </div>
    )
}

export default Navbar