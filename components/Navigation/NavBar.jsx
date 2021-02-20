import React, { useEffect, useRef } from 'react';
import Link from 'next/link'

function NavBar() {

    const el = useRef(null)

    useEffect(() => {
        let delta = 0
        let firstScroll = true

        document.addEventListener('scroll', () => {

            const pos = window.pageYOffset || document.documentElement.scrollTop

            if (!el.current) return;

            if (pos < 40) {
                el.current.classList.add("navbar_top")
            } else {
                el.current.classList.remove("navbar_top")
            }

            if (firstScroll) return firstScroll = false

            if (pos > delta && pos > 300) {
                el.current.style.top = -el.current.clientHeight + "px"
            } else if (pos > 300) {
                el.current.style.top = "0px"
            }

            delta = pos <= 0 ? 0 : pos

        }, false)
    }, [])

    return (
        <nav ref={el} className="navbar navbar_top">
            <div className="w-5/6 lg:w-2/3 mx-auto py-6 flex items-center h-full">
                <div className="logo text-white text-4xl">TM</div>
                <ul className="ml-auto flex">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/work">Work</NavLink>
                    <NavLink to="/#contact">Contact</NavLink>
                </ul>
            </div>
        </nav>
    );
}

function NavLink({to, children}) {
    return <Link href={to}><a className="px-4 py-2 mx-2 text-xl text-white-muted hover:text-white">{children}</a></Link>
}

export default NavBar;