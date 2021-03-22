import React from 'react';
import Container from './Container';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {AiFillGithub as Github} from 'react-icons/ai'
import {FaLinkedinIn as Linkedin, FaGraduationCap as UniEmail} from 'react-icons/fa'
import {IoIosMail as Email} from 'react-icons/io'

function Footer() {
    return (
        <footer className="bg-black">
            <Container noVertical wide>
                <div className="py-10 px-20 grid grid-cols-1 lg:grid-cols-3 gap-20 w-full mt-5">
                    <div className="flex flex-col lg:col-span-2">
                        <h1 className="text-3xl lg:text-4xl text-white mb-5">Thomas Mitchelmore</h1>
                        <p className="text-xl text-white-muted mb-5">I’m a passionate <span className="text-white">full stack developer</span> from the UK, currently completing my Bachelors degree in <span className="text-white">Computer Science</span> at the University of Southampton.</p>
                        <ul className="flex text-3xl">
                            <FooterLink to="mailto:tommitchelmore@outlook.com"><Email /></FooterLink>
                            <FooterLink to="mailto:tm7g20@southampton.ac.uk"><UniEmail /></FooterLink>
                            <FooterLink to="https://linkedin.com/in/tommitchelmore"><Linkedin /></FooterLink>
                            <FooterLink to="https://github.com/tommitchelmore"><Github /></FooterLink>
                        </ul>
                    </div>
                    <div className="flex flex-col text-white">
                        <h1 className="text-3xl lg:text-4xl mb-5">Quick Links</h1>
                        <ul className="text-xl">
                            <FooterLink conditional to="/#home">Home</FooterLink>
                            <FooterLink conditional to="/about">About</FooterLink>
                            <FooterLink conditional to="/work">Previous Work</FooterLink>
                            <FooterLink conditional to="/#contact">Contact</FooterLink>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

function FooterLink({to, children, conditional}) {
    const router = useRouter()
    return <li className="mr-5"><Link href={to}><a rel="noopener" className={`${router.asPath === to || !conditional ? 'text-white' : 'text-white-muted'} hover:text-white`}>{children}</a></Link></li>
}

export default Footer;