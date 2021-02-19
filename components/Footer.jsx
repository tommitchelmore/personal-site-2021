import React from 'react';
import Container from './Container';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

function Footer() {

    const router = useRouter();

    return (router.asPath !== "/" &&
        <footer className="bg-black">
            <Container noVertical wide>
                <div className="py-10 px-20 grid grid-cols-1 lg:grid-cols-3 gap-20 w-full mt-5">
                    <div className="flex flex-col lg:col-span-2">
                        <h1 className="text-3xl lg:text-4xl text-white mb-5">Thomas Mitchelmore</h1>
                        <p className="text-xl text-white-muted mb-5">I’m a passionate <span className="text-white">full stack developer</span> from the UK, currently completing my Bachelors degree in <span className="text-white">Computer Science</span> at the University of Southampton.</p>
                        <ul className="text-white flex text-3xl">
                            <li className="mr-5"><Link href="mailto:tommitchelmore@outlook.com"><a><BiMailSend /></a></Link></li>
                            <li className="mr-5"><Link href="https://linkedin.com/in/tommitchelmore"><a target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></Link></li>
                            <li className="mr-5"><Link href="https://github.com/tommitchelmore"><a target="_blank" rel="noopener noreferrer"><AiFillGithub /></a></Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-white">
                        <h1 className="text-3xl lg:text-4xl mb-5">Quick Links</h1>
                        <ul className="text-xl">
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="/about"><a>About</a></Link></li>
                            <li><Link href="/work"><a>Previous Work</a></Link></li>
                            <li><Link href="/contact"><a>Contact</a></Link></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;