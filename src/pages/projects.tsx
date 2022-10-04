import { NextPage } from "next"
import DescriptiveCard from "../components/DescriptiveCard"
import Header from "../components/Header"
import Layout from "../components/Layout"

export interface ProjPropsFull {
    projName: string
    projLang: string
    link: string
    logo: string
    projectDetails: string
    projImg: string
}

const Test: NextPage = () => {

    const projs: ProjPropsFull[] = [
        {
            projName: 'Bukalapak-Scraper',
            projLang: 'Python',
            link: 'https://github.com/azka1415/Bukalapak-Scraper',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
            projectDetails: 'Web Scraper made with Python for the e-commerce site Bukalapak',
            projImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsYQqgSiCpOpsY83Juj2kUSoi25392L2vgA&usqp=CAU',
        },
        {
            projName: 'fastapi-mongo',
            projLang: 'Python',
            link: 'https://github.com/azka1415/fastapi-mongo',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
            projectDetails: 'API made with FastAPI and MongoDB',
            projImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsYQqgSiCpOpsY83Juj2kUSoi25392L2vgA&usqp=CAU',
        },
        {
            projName: 'quiz-app-react',
            projLang: 'TypeScript',
            link: 'https://github.com/azka1415/quiz-app-react',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
            projectDetails: 'Fun quiz app made with React and TypeScript',
            projImg: 'https://i.imgur.com/EbbuDmR.png',
        },
        {
            projName: 'netflix-clone',
            projLang: 'TypeScript',
            link: 'https://github.com/azka1415/netflix-clone',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
            projectDetails: 'Netflix Clone made with NextJS and TypeScript',
            projImg: 'https://cdn.dribbble.com/users/5056181/screenshots/14801201/netflix_home_page.png',
        },
        {
            projName: 'rest-ts',
            projLang: 'TypeScript',
            link: 'https://github.com/azka1415/rest-ts',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
            projectDetails: 'RestAPI made with Express and TypeScript',
            projImg: 'https://miro.medium.com/max/720/1*1reV249DP4NRz3QzRyFIHQ.png',
        },
        {
            projName: 'fast-api',
            projLang: 'Python',
            link: 'https://github.com/azka1415/fast-api',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
            projectDetails: 'RestAPI made with FastAPI and MySQL',
            projImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsYQqgSiCpOpsY83Juj2kUSoi25392L2vgA&usqp=CAU',
        }
    ]

    return (
        <>
            <Header titleName="Projects" />
            <Layout>

                <div className="flex flex-col space-y-2 max-h-96 w-max overflow-auto p-4 bg-slate-200 rounded-lg text-center transition-all lg:flex-row lg:h-auto lg:w-auto mx-14 lg:space-x-2 shadow-2xl
                lg:bg-inherit">
                    <p className="lg:hidden">My Projects</p>
                    {
                        projs.map(v => (
                            <DescriptiveCard key={v.link} link={v.link} logo={v.logo} projLang={v.projLang} projName={v.projName} projectDetails={v.projectDetails} projImg={v.projImg} />
                        ))
                    }
                </div>
            </Layout>
        </>
    )
}

export default Test