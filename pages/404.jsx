import React from 'react';
import Head from 'next/head'

function ErrorPage(props) {
    return (
        <>
            <Head>
                <title>Error</title>
            </Head>
            <main className="min-h-screen bg-gradient-1 text-white flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-6xl 2xl:text-8xl">Oops!  That page couldn't be found!</h1>
                </div>
            </main>
        </>
    );
}

export default ErrorPage;