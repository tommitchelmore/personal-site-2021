import Link from 'next/link';
import React from 'react';
import ButtonLink from '../ButtonLink';
import Container from '../Container';
import Work from './Work'

function PreviousWorks({previousWorks, onHomePage}) {
    return (
        <section>
            <Container noVertical>
                {onHomePage && <>
                    <h1 className="text-6xl 2xl:text-8xl pt-10 mt-10 text-center">Featured Work</h1>
                    <p className="mt-4 text-xl text-center">You can view all of my work <Link href="/work"><a className="text-secondary">here</a></Link>.</p>
                </>}
                <div>{previousWorks.map((w, i) => (<Work {...w} key={i} />))}</div>
                {onHomePage && <Link href="/work"><a className="mb-20 btn-secondary">View All</a></Link>}
            </Container>
        </section>
    )
}

export default PreviousWorks