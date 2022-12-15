import React from 'react';
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

const Header = () => {
    const onButtonClick = () => {
        fetch('MizanorRahmanResume.pdf')
            .then(response => {
                response.blob().then(blob => {
                    // Creating new object of PDF file
                    const fileURL = window.URL.createObjectURL(blob);
                    // Setting various property values
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'MizanorRahmanResume.pdf';
                    alink.click();
                })
            })
    }
    return (
        <div className="container mx-auto ">
            <div className='flex justify-center items-center py-10'>
                <div className="w-1/2">
                    <div className="text-5xl font-serif">
                        <h3>Hello there,</h3>
                    </div>
                    <div className="flex  text-5xl">
                        <h3 className='font-serif'>I am </h3>&nbsp;
                        <AutoTyping className='font-serif font-bold'
                            active // <boolean>
                            textRef='Mizanor Rahman' // <string>
                            writeSpeed={100} // <number>
                            deleteSpeed={100} // <number>
                            delayToWrite={1000} // <number>
                            delayToDelete={2000} // <number>
                        />
                        <BlinkCursor
                            active // <boolean>
                            blinkSpeed={500} // <number>
                        />
                    </div>
                    <h3 className='font-serif text-2xl py-5'>A Front-End Developer, React Developer <br /> & <span title='MongoDB'>M</span><span title='ExpressJS'>E</span><span title='ReactJS'>R</span><span title='NodeJS'>N</span> Stack Developer</h3>


                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Contact
                        </span>
                    </button>
                    <button onClick={onButtonClick} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Download Resume
                        </span>
                    </button>

                </div>
                <div className="w-1/2">
                    <div class="main">
                        <div class="circle"></div>
                    </div>
                    <video autoPlay loop muted className='w-[600px]' src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/web-development-4179004-3479083.mp4"></video>
                </div>
            </div>
        </div>
    );
};

export default Header;