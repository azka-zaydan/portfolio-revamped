import Image from 'next/image'
import React from 'react'
import { ContactProps } from '../pages/contact'

const ContactCard = ({ href, name, imgSource, alt }: ContactProps) => {
    return (

        <a href={href} key={name}>
            <div className='text-white rounded-lg px-2 py-2 transition-all ease-in-out hover:bg-slate-200 border hover:border-slate-600 hover:shadow-lg md:p-5 lg:p-10 relative hover:bottom-2' key={name}>
                <Image src={imgSource} width={80} height={50} alt={alt} objectFit='contain' />
            </div>
        </a>
    )
}

export default ContactCard