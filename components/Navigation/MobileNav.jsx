import React, { useEffect, useRef, useState } from 'react';
import { FiMenu as MenuIcon, FiX as CloseIcon } from 'react-icons/fi'

function MobileNav(props) {

    const [navState, setNavState] = useState(false)
    const btnEl = useRef(null)

    const toggleNav = () => {
        setNavState(!navState)
        if (btnEl.current) btnEl.current.firstChild.style.transform = navState ? 'rotate(-180deg)' : 'rotate(180deg)'
    }

    useEffect(() => {
        document.addEventListener('scroll', () => { if (navState) toggleNav() })
    }, [])

    return (
        <>
        <div
            className="flex lg:hidden fixed top-10 right-10 p-2 text-6xl bg-gradient-1 text-white cursor-pointer shadow-lg hover:shadow-2xl"
            style={{zIndex: 1000, backgroundSize: '500% 500%', backgroundPosition: 'center'}}
            onClick={toggleNav}
            ref={btnEl}
        >
            <div className="pointer-events-none" style={{transition: 'all 0.3s'}}>
                {navState ? <CloseIcon /> : <MenuIcon />}
            </div>
        </div>
        <div 
            className="mobile-nav-page fixed w-screen h-screen"
            style={{zIndex: 999}}
        >
            {Array(6).fill().map((n, i) => (
                <div className='h-1/6' style={{top: (1/6) * i + 'vh'}} key={i}>
                    <div className={navState ? 'h-full' : 'h-0'} />
                </div>
            ))}
        </div>
        </>
    );
}

export default MobileNav;