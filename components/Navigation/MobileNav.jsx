import React, { useEffect, useRef, useState } from 'react';
import { FiMenu as MenuIcon, FiX as CloseIcon, FiGithub as Github, FiGitlab as Gitlab, FiLinkedin as Linkedin } from 'react-icons/fi';
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

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
        <div className={`${navState ? 'fixed' : 'hidden pointer-events-none'} flex flex-col justify-around items-center w-screen h-screen`} onClick={toggleNav} style={{zIndex: 999, animation: 'opacityIn 1s'}}>
            <div className="flex flex-col items-center">
                <div className='mb-8'>
                    <Image width="128" height="128" src="/logo.png" alt="Logo" />
                </div>
                <h1 className="text-white text-4xl">Thomas Mitchelmore</h1>
                <p className="text-white-muted text-xl mb-8">Student & Fullstack Developer</p>
                <div className="flex flex-col items-center">
                    <ul className="list-none flex flex-col items-center">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/work">Work</NavLink>
                        <NavLink to="/#contact">Contact</NavLink>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center mb-4">
                    <a className="text-white-muted hover:text-white" href="mailto:tommitchelmore@outlook.com">tommitchelmore@outlook.com</a>
                    <a className="text-white-muted hover:text-white" href="mailto:tm7g20@southampton.ac.uk">tm7g20@southampton.ac.uk</a>
                </div>
                <div className="grid grid-cols-3 gap-8 text-2xl">
                    <a href="https://github.com/tommitchelmore" target="_blank" rel="noopener"><Github className="text-white-muted hover:text-white" /></a>
                    <a href="https://gitlab.com/tommitchelmore" target="_blank" rel="noopener"><Gitlab className="text-white-muted hover:text-white" /></a>
                    <a href="https://www.linkedin.com/in/tommitchelmore/" target="_blank" rel="noopener"><Linkedin className="text-white-muted hover:text-white" /></a>
                </div>
            </div>
        </div>
        <div 
            className="mobile-nav-page lg:hidden fixed w-screen h-screen pointer-events-none"
            style={{zIndex: 998}}
        >
            {Array(6).fill().map((n, i) => (
                <div className={`${navState ? '' : 'pointer-events-none'} h-1/6`} style={{top: (1/6) * i + 'vh'}} key={i}>
                    <div className={navState ? 'h-full' : 'h-0'} />
                </div>
            ))}
        </div>
        </>
    );
}

function NavLink({to, children}) {
    const router = useRouter()
    return <li className="mb-2"><Link href={to}><a className={`${router.asPath === to ? 'text-white' : 'text-white-muted'} px-4 py-2 mx-2 text-2xl hover:text-white`}>{children}</a></Link></li>
}

export default MobileNav;