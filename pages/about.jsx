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
                <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL + "/about"} />
                <meta property="og:image" content="/me.jpg" />
            </Head>
            <article>
                <div id="header" className="bg-gradient-1 pt-10">
                    <Container className="text-center flex items-center justify-center flex-col">
                        <h1 className="text-white text-6xl 2xl:text-8xl mb-10">About <span className="text-gradient-1">Me</span></h1>
                    </Container>
                </div>
                <Container>
                    <div className="post-body">
                        <h1>Hey there 👋</h1>
                        <div className="flex">
                            <p>
                                I'm Tom, a student of Computer Science at the <a href="https://southampton.ac.uk">University of Southampton</a> in the UK.  Outside of my education, I enjoy all things Web Development and Systems Administration, with a strong interest in Cyber Security - I also enjoy volunteering and spending quality time with my good friends.
                            </p>
                            {/*<Image src="/me.jpg" className="rounded-full" width={200} height={200} ></Image>*/}
                        </div>
                        <h1>Education & Background</h1>
                        <p>
                            In 2020 I completed my A-levels (level 3) in Maths, Further Maths and Computer Science, being awarded an A in each.  For the duration of these courses, I also developed key personal skills such as organisation, teamwork and resilience.
                        </p>
                        <p>
                            Throughout, I worked part time as a Team Member at a popular food retail chain, which provided me with experience working under pressure as part of a team while still providing a strong, positive customer experience.  This was, unfortunately, interrupted by the Covid-19 pandemic and meant that I was placed on "furlough" - with little else to do, I decided to really dive head first into web and systems development: I taught myself Javascript, C# (.NET) and a number of key popular technologies/packages including React, Discord.JS, MySQL, MongoDB and Web Assembly.
                        </p>
                    </div>
                </Container>
            </article>
        </>
    )
}