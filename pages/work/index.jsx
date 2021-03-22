import Head from 'next/head'
import PreviousWorks from '../../components/PreviousWork'
import Container from '../../components/Container'
import gql from '../../util/GraphQL'
import Link from 'next/link'

export default function Home({ previousWorks }) {
    return (
        <>
            <Head>
                <title>Thomas Mitchelmore - Work</title>
                <meta name="description" content="Hi! 👋 I’m a passionate full stack developer from the UK, currently completing my Bachelors degree in Computer Science at the University of Southampton." />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#08081d" />
                <meta name="msapplication-TileColor" content="#08081d" />
                <meta name="theme-color" content="#08081d" />

                <meta property="og:title" content="Thomas Mitchelmore - Student & Developer" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
                <meta property="og:description" content="Hi! 👋 I’m a passionate full stack developer from the UK, currently completing my Bachelors degree in Computer Science at the University of Southampton." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://i.imgur.com/Q0y2DNl.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
                <meta property="twitter:title" content="Thomas Mitchelmore - Student & Developer" />
                <meta property="twitter:description" content="Hi! 👋 I’m a passionate full stack developer from the UK, currently completing my Bachelors degree in Computer Science at the University of Southampton." />
                <meta property="twitter:image" content="https://i.imgur.com/Q0y2DNl.png" />
            </Head>
            <main>
                <div id="header" className="bg-gradient-1 pt-10">
                    <Container>
                        <h1 className="text-white text-6xl 2xl:text-8xl mb-10 text-center">Previous <span className="text-gradient-1">Work</span></h1>
                        <p className="text-white-muted text-xl 2xl:text-2xl 2xl:w-4/5 text-center">You can find my open source projects <Link href="/open-source"><a className="text-white underline">here</a></Link></p>
                    </Container>
                </div>
                <PreviousWorks previousWorks={previousWorks} />
            </main>
        </>
    )
}

export async function getStaticProps() {

    const { previousWorks } = await gql.request(
        `{
          previousWorks(orderBy: createdAt_DESC) {
              title
              thumbnail {
                  url
              }
              tags
              time
              slug
              body {
                  html
              }
          }
      }`
    )

    return {
        props: {
            previousWorks,
        },
    }
}