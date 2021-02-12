import React from 'react';
import Container from '../Container';
import Work from './Work'

function PreviousWorks({previousWorks}) {
    return (
        <section>
            <Container>
                <h1 className="text-6xl">Some of my work</h1>
                {previousWorks.map((w, i) => (<Work {...w} key={i} />))}
            </Container>
        </section>
    )
}

export default PreviousWorks