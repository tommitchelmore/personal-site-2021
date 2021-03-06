import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

function NavBar() {

    const el = useRef(null)
    const router = useRouter()

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

        router.events.on('routeChangeComplete', () => {
            el.current.style.top = "0px"
            console.log("fired")
        })
    }, [])

    return (
        <nav ref={el} className="navbar navbar_top">
            <div className="w-5/6 lg:w-2/3 mx-auto py-6 flex items-center h-full">
                <div className="logo text-white text-4xl">TM</div>
                <ul className="ml-auto flex">
                    <NavLink to="/#home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/work">Work</NavLink>
                    <NavLink to="/#contact">Contact</NavLink>
                </ul>
            </div>
        </nav>
    );
}

function NavLink({to, children}) {
    const router = useRouter()
    return <li><Link href={to}><a className={`${router.asPath === to ? 'text-white' : 'text-white-muted'} px-4 py-2 mx-2 text-xl hover:text-white`}>{children}</a></Link></li>
}

export default NavBar;