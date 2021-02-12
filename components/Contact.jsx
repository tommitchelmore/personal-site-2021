import React from 'react';
import Link from 'next/link'
import Container from './Container'
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BiMailSend} from 'react-icons/bi'

function Contact() {
    return (
        <section id="contact" className="bg-gradient-1">
            <Container>
                <h1 className="text-white text-5xl mb-10">Let's <span className="text-gradient-1">Talk</span>!</h1>
                <p className="text-white-muted text-xl text-center mb-10">I'm currently looking for an <span className="text-white">internship in software or web development</span> for Summer 2021 - if you're looking for such a candidate, I'd love to organize a virtual meeting.</p>
                <ul className="text-white text-xl social-links">
                    <li><BiMailSend /><Link href="mailto:tommitchelmore@outlook.com"><a>tommitchelmore@outlook.com</a></Link></li>
                    <li><FaLinkedinIn /><Link href="https://linkedin.com/in/tommitchelmore"><a target="_blank" rel="noopener noreferrer">/in/tommitchelmore</a></Link></li>
                    <li><AiFillGithub /><Link href="https://github.com/tommitchelmore"><a target="_blank" rel="noopener noreferrer">/tommitchelmore</a></Link></li>
                </ul>
            </Container>
        </section>
    );
}

export default Contact;