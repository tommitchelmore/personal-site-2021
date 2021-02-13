import React from 'react';
import Container from '../Container';
import Work from './Work'

function PreviousWorks({previousWorks}) {
    return (
        <section>
            <Container>
                <h1 className="text-6xl 2xl:text-8xl">Some of my work</h1>
                <div>
                {previousWorks.map((w, i) => (<Work {...w} key={i} />))}
                </div>
            </Container>
        </section>
    )
}

export default PreviousWorks