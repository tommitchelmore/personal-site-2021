import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function WarningBanner(props) {

    const handleAccept = () => {
        window.localStorage.setItem('beta-warning', true)
        setAccepted(true)
    }

    const [accepted, setAccepted] = useState(null)

    useEffect(() => {
        setAccepted(window.localStorage.getItem('beta-warning'))
    })

    return (
        !accepted &&
        <div 
            className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center z-50"
            style={{background: 'rgba(0,0,0,0.8)'}}
        >
            <div className="bg-primary text-white w-3/4 lg:w-1/2 xl:w-1/3 p-10 rounded-xl">
                <h1 className="text-2xl mb-5">Hey there!</h1>
                <p className="mb-5">You're currently viewing the beta version of my new website - please be aware that lots of things will be broken, experimental or even completely missing!</p>
                <div className="flex mb-5">
                    <Link href="https://tommitchelmore.com"><a rel="noopener noreferrer" className="bg-white text-black p-2 mr-5 rounded-sm">
                        Main site
                    </a></Link>
                    <button className="bg-warning text-white p-2 rounded-sm" onClick={handleAccept}>
                        I understand - let me continue!
                    </button>
                </div>
                <p className="text-xs text-white-muted">If you dismiss this warning you won't be shown it again.</p>
            </div>
        </div>
    );
}

export default WarningBanner;