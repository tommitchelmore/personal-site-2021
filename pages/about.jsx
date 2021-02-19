import Container from '../components/Container'
import Head from 'next/head'
import Image from 'next/image'

export default function WorkPage() {
    return (
        <>
            <Head>
                <title>Profile - Thomas Mitchelmore</title>
                <meta name="description" content="Hi! 👋 I’m a passionate full stack developer from the UK, currently completing my Bachelors degree in Computer Science at the University of Southampton." />

                <meta property="og:type" content="profile" />
                <meta property="og:title" content="Thomas Mitchelmore" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL + "/profile"} />
                <meta property="og:image" content="/me.jpg" />
            </Head>
            <article>
                <div id="header" className="bg-gradient-1 min-h-screen">
                    <Container className="text-center flex items-center justify-center flex-col">
                        <Image src="/me.jpg" className="rounded-full" width={200} height={200} ></Image>
                        <h1 className="text-white text-6xl 2xl:text-8xl mt-10">Thomas Mitchelmore</h1>
                    </Container>
                </div>
            </article>
        </>
    )
}