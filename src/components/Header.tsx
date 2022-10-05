import Head from 'next/head'
import React from 'react'

interface Props {
    titleName: string
}

function Header({ titleName }: Props) {
    return (
        <Head>
            <title>{titleName}</title>
            <meta name="description" content="Portfolio of Azka Rafif Zaydan" key="desc" />
            <meta property="og:title" content="Azka Portfolio Site" />
            <meta
                property="og:description"
                content="The Portfolio Site of Azka Rafif Zaydan"
            />
            <meta
                property="og:image"
                content="/favicon2.ico"
            />
            <meta name="keywords" content="HTML, CSS, JavaScript, Next js, Python, Back-End, Full-Stack" />
            <meta name="author" content="Azka Rafif Zaydan" />

            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon2.ico" />
        </Head>
    )
}

export default Header