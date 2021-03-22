import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { ImSpinner2 as Spinner } from 'react-icons/im';
import Container from '../components/Container';
import RepoCard from '../components/RepoCard';

function OpenSource() {

    const [repos, setRepos] = useState(null)

    useEffect(() => {
        fetch("https://api.github.com/users/tommitchelmore/repos?sort=updated")
            .then (res => res.json())
            .then(data => {
                setTimeout(() => setRepos({data}), 1000)
                //setRepos({data})
            })
    }, [])

    return (
        <>
        <Head>
            <title>Thomas Mitchelmore - Open Source</title>
            <meta name="description" content="Hi! 👋 I’m a passionate full stack developer from the UK, currently completing my Bachelors degree in Computer Science at the University of Southampton." />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#08081d" />
            <meta name="msapplication-TileColor" content="#08081d" />
            <meta name="theme-color" content="#08081d" />

            <meta property="og:title" content="Thomas Mitchelmore - Open Source" />
            <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
            <meta property="og:description" content="Hi! 👋 I’m a passionate full stack developer from the UK, currently completing my Bachelors degree in Computer Science at the University of Southampton." />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://i.imgur.com/Q0y2DNl.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
            <meta property="twitter:title" content="Thomas Mitchelmore - Open Source" />
            <meta property="twitter:description" content="Hi! 👋 I’m a passionate full stack developer from the UK, currently completing my Bachelors degree in Computer Science at the University of Southampton." />
            <meta property="twitter:image" content="https://i.imgur.com/Q0y2DNl.png" />
        </Head>
        <main>
            <div id="header" className="bg-gradient-1 pt-10">
                <Container>
                    <h1 className="text-white text-6xl 2xl:text-8xl mb-10">Open Source <span className="text-gradient-1">Work</span></h1>
                    <p className="text-white-muted text-xl 2xl:text-2xl 2xl:w-4/5 text-center">All of my open source work can be found on <a className="underline text-white" href="https://github.com/tommitchelmore" target="_blank" rel="noopener">Github</a></p>
                </Container>
            </div>
            <div>
                {repos ? 
                <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {repos.data.map((repo, i) => (
                        <RepoCard {...repo} key={i} />
                    ))}
                </Container> 
                : 
                <Container className="flex justify-center animate-spin text-4xl text-primary mb-96">
                    <Spinner />
                </Container>
                }
            </div>
        </main>
        </>
    );
}

export default OpenSource;