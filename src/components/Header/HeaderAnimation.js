import React from 'react';
import reactLogo from '../../Assets/header_logo/React_Logo.png'
import nodeJSLogo from '../../Assets/header_logo/nodeJS_logo.png'
import cssLogo from '../../Assets/header_logo/CSS3_logo.png'
import figmaLogo from '../../Assets/header_logo/figma_logo.png'
import firebaseLogo from '../../Assets/header_logo/firebase_logo.png'
import htmlLogo from '../../Assets/header_logo/HTML5_logo.png'
import javascriptLogo from '../../Assets/header_logo/JavaScript-logo.png'
import mongoDBLogo from '../../Assets/header_logo/mongoDB_logo.png'
import './HeaderAnimation.css'

const HeaderAnimation = () => {
    return (
        <div className=''>
            <div className="flex items-center w-52 h-14 shadow-xl rounded-xl relative top-[-550px] left-[80%] bg-gradient-to-r from-red-200 via-purple-300 to-yellow-200">
                <figure><img className='w-20 p-0 m-0' src={reactLogo} alt="Album" /></figure>
                <h2 className="font-serif font-bold text-2xl">ReactJS</h2>
            </div>
            <div className="flex items-center w-52 h-14 shadow-xl rounded-xl relative top-[-250px] left-[85%] bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200">
                <figure><img className='w-10 pl-2 m-0' src={cssLogo} alt="Album" /></figure>
                <h2 className="pl-3 font-serif font-bold text-2xl">CSS</h2>
            </div>
            <div className="flex items-center w-52 h-14 shadow-xl rounded-xl relative top-[-300px] left-[40%] bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-100">
                <figure><img className='w-10 pl-2 m-0' src={htmlLogo} alt="Album" /></figure>
                <h2 className="pl-3 font-serif font-bold text-2xl">HTML</h2>
            </div>
            <div className="flex items-center w-52 h-14 shadow-xl rounded-xl relative top-[-800px] left-[60%] bg-gradient-to-r from-indigo-200 via-purple-400 to-green-200">
                <figure><img className='w-14 pl-2 m-0' src={mongoDBLogo} alt="Album" /></figure>
                <h2 className="pl-3 font-serif font-bold text-2xl">MongoDB</h2>
            </div>
            <div className="leftRightAnimation flex items-center w-52 h-14 shadow-xl rounded-xl  bg-gradient-to-r from-pink-200 via-purple-300 to-indigo-200">
                <figure><img className='w-10 pl-2 m-0' src={javascriptLogo} alt="Album" /></figure>
                <h2 className="pl-3 font-serif font-bold text-2xl">JavaScript</h2>
            </div>
            <div className="upDownAnimation flex items-center w-52 h-14 shadow-xl rounded-xl bg-gradient-to-r from-green-200 via-purple-300 to-pink-300">
                <figure><img className='w-16 pl-2 m-0' src={firebaseLogo} alt="Album" /></figure>
                <h2 className="pl-3 font-serif font-bold text-2xl">Firebase</h2>
            </div>
            <div className="flex items-center w-52 h-14 shadow-xl rounded-xl relative top-[-700px] left-[40%] bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-100">
                <figure><img className='w-20 pl-2 m-0' src={nodeJSLogo} alt="Album" /></figure>
                <h2 className="pl-3 font-serif font-bold text-2xl">NodeJS</h2>
            </div>
        </div>
    );
};

export default HeaderAnimation;