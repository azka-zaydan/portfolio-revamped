import React from 'react'
import { trpc } from '../utils/trpc';

function Test() {
    const hello = trpc.useQuery(['hello', { text: 'client' }]);
    if (!hello.data) {
        return (
            <div className='h-screen flex p-2 mx-auto'>
                <div className='relative m-auto bg-red-700'>Loading...</div>
            </div>
        );
    }

    const awesome = trpc.useQuery(['awesome', { text: 'ayam' }])
    if (!awesome.data) {
        return (
            <div className='h-screen flex p-2 mx-auto'>
                <div className='relative m-auto'>Loading...</div>
            </div>
        );
    }

    return (
        <div className='h-screen flex p-2 mx-auto'>

            <div className='relative my-auto mx-auto w-max'>{hello.data.greeting}</div>
            <div className='relative m-auto'>wassup {awesome.data.something}</div>

        </div>
    )
}

export default Test