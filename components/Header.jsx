import React from 'react';
import Container from './Container';

function Header() {
    return (
        <section id="home" className="bg-gradient-1">
            <Container className="text-center">
                <h1 className="text-white text-6xl">Thomas Mitchelmore</h1>
                <h2 className="text-white text-6xl mb-10">Student & <span className="text-gradient-1">Developer</span></h2>
                <p className="text-white-muted text-xl">
                    Hi! 👋 I’m a passionate <span className="text-white">full stack developer</span> from the UK, currently completing my Bachelors degree in <span className="text-white">Computer Science</span> at the University of Southampton.
                </p>
            </Container>
        </section>
    );
}

export default Header;