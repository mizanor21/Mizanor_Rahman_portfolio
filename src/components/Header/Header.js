import React from 'react';
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

const Header = () => {
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
                    <button className="btn btn-outline btn-secondary mr-5">Resume</button>
                    <button className="btn btn-outline btn-success">Contact</button>
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