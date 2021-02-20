import Container from '../../components/Container'
import Head from 'next/head'
import {useRouter} from 'next/router'
import gql from '../../util/GraphQL'
import {FiExternalLink as Icon} from 'react-icons/fi'

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
                <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL + router.asPath} />
                <meta property="og:image" content={previousWork.thumbnail.url} />
                <meta property="article:published_time" content={previousWork.publishedAt} />
                <meta property="article:author" content={process.env.base_url + "/about"} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={process.env.NEXT_PUBLIC_BASE_URL + router.asPath} />
                <meta property="twitter:title" content={previousWork.title} />
                <meta property="twitter:description" content={previousWork.exerpt} />
                <meta property="twitter:image" content={previousWork.thumbnail.url} />
            </Head>
            <article>
                <div
                    id="header"
                    style={{
                        backgroundImage: `linear-gradient(to bottom right, rgba(8,8,29,1), rgba(8,8,29,0.8)), url(${previousWork.thumbnail.url})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                >
                    <Container>
                        <h1 className="text-white text-6xl 2xl:text-8xl mb-10">{previousWork.title}</h1>
                        <ul className="text-white 2xl:text-md 2xl:w-4/5 mb-10 flex items-center justify-center">
                            {previousWork.tags.map((t, i) => <li className="mx-2 px-3 py-1 rounded-full bg-secondary" key={i}>{t}</li>)}
                        </ul>
                        <blockquote className="text-2xl text-white mb-10">{previousWork.exerpt}</blockquote>
                        <div className="flex">
                            {previousWork.demo && <HeaderLink href={previousWork.demo} rel="noopener" target="_blank">Live Version</HeaderLink>}
                            {previousWork.sourceCode && <HeaderLink href={previousWork.sourceCode} rel="noopener" target="_blank">Source Code</HeaderLink>}
                        </div>
                    </Container>
                </div>
                <Container>
                    <div className="post-body" dangerouslySetInnerHTML={{__html: previousWork.body.html}} />
                </Container>
            </article>
        </>}
        <noscript>Error</noscript>
        </>
    )
}

function HeaderLink(props) {
    return <a className="mx-2 rounded-xl underline text-white text-xl flex items-center" {...props}>{props.children} <Icon className="w-6 h-6 ml-2" /></a>
}

export async function getStaticProps({ params }) {
    const { previousWork } = await gql.request(
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
                    demo
                    sourceCode
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
    const { previousWorks } = await gql.request(
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