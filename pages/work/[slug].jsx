import {GraphQLClient} from 'graphql-request'
import Container from '../../components/Container'
import Head from 'next/head'
import {useRouter} from 'next/router'

const client = new GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckl2auy3am8d201xsgh770i0h/master")

export default function WorkPage({previousWork}) {
    const router = useRouter()

    return (
        <>
        {previousWork && <>
            <Head>
                <title>{previousWork.title} - Thomas Mitchelmore</title>
                <meta name="description" content={previousWork.exerpt} />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#08081d" />
                <meta name="msapplication-TileColor" content="#08081d" />
                <meta name="theme-color" content="#08081d" />

                <meta property="og:type" content="article" />
                <meta property="og:title" content={previousWork.title} />
                <meta property="og:site_name" content="Thomas Mitchelmore - Student & Developer" />
                <meta property="og:url" content={"https://tommitchelmore.com" + router.asPath} />
                <meta property="og:image" content={previousWork.thumbnail.url} />
                <meta property="article:published_time" content={previousWork.publishedAt} />
                <meta property="article:author" content="https://tommitchelmore.com/profile" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={"https://tommitchelmore.com" + router.asPath} />
                <meta property="twitter:title" content={previousWork.title} />
                <meta property="twitter:description" content={previousWork.exerpt} />
                <meta property="twitter:image" content={previousWork.thumbnail.url} />
            </Head>
            <article>
                <div
                    id="header"
                    className="h-64"
                    style={{
                        backgroundImage: `url(${previousWork.thumbnail.url})`,
                        backgroundPosition: 'top',
                        backgroundSize: 'cover',
                        paddingTop: '40%'
                    }}
                >
                </div>
                <Container>
                    <h1 className="text-black text-6xl 2xl:text-8xl mb-5">{previousWork.title}</h1>
                    <ul className="text-black-muted text-xl 2xl:text-2xl 2xl:w-4/5 mb-10 flex items-center justify-center">
                        {previousWork.tags.map((t, i) => <li className="mx-2" key={i}>{t}</li>)}
                    </ul>
                    <div className="" dangerouslySetInnerHTML={{__html: previousWork.body.html}} />
                </Container>
            </article>
        </>}
        <noscript>Error</noscript>
        </>
    )
}

export async function getStaticProps({ params }) {
    const { previousWork } = await client.request(
        `
            query getPreviousWork($slug: String!) {
                previousWork(where: {slug: $slug}) {
                    title
                    thumbnail {
                        url
                    }
                    exerpt
                    tags
                    time
                    body {
                        html
                    }
                    publishedAt
                }
            }
        `,
        {
            slug: params.slug
        }
    )

    return {
        notFound: !previousWork,
        props: {
            previousWork,
        },
    }
  }
  
  export async function getStaticPaths() {
    const { previousWorks } = await client.request(
        `{
            previousWorks {
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
      paths: previousWorks.map(({ slug }) => ({
        params: { slug },
      })),
      fallback: true,
    }
  }