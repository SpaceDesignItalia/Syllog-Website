import React from 'react'
import {Button} from '@nextui-org/react'

export default function Content() {
    return (
        <>
            <section>
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:flex lg:flex-row lg:justify-between lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 w-1/2">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="mt-8 w-1/2">
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://machow2.com/wp-content/uploads/2022/01/squared-on-mac-cover-650x400.jpg" alt="office content 2" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
            </section>  

            <section>
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:flex lg:flex-row lg:justify-between lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 w-1/2">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">We didn't reinvent the wheel2</h2>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Button color = "primary">CONTATTACI!</Button>
                    </div>
                    <div className="mt-8 w-1/2">
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://machow2.com/wp-content/uploads/2022/01/squared-on-mac-cover-650x400.jpg" alt="office content 2" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
            </section> 
        </>
    )
}
