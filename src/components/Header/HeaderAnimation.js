import React from 'react';
import reactLogo from '../../Assets/header_logo/React_Logo.png'
import nodeJSLogo from '../../Assets/header_logo/nodeJS_logo.png'
import cssLogo from '../../Assets/header_logo/CSS3_logo.png'
import bootstrap from '../../Assets/header_logo/bootstrap.png'
import firebaseLogo from '../../Assets/header_logo/firebase_logo.png'
import htmlLogo from '../../Assets/header_logo/HTML5_logo.png'
import javascriptLogo from '../../Assets/header_logo/JavaScript-logo.png'
import mongoDBLogo from '../../Assets/header_logo/mongoDB_logo.png'
import tailwindCSSLogo from '../../Assets/header_logo/tailwind.png'
import './HeaderAnimation.css'

const HeaderAnimation = () => {
    return (
        <div className='hidden lg:flex '>
            <div className="upDownAnimationReact flex items-center w-52 h-14 shadow-xl rounded-xl relative ">
                <figure><img className='w-20 p-0 m-0' src={reactLogo} alt="Album" /></figure>
                <h2 className="font-serif font-bold text-lg">ReactJS</h2>
            </div>

            <div className="upDownAnimationMongoDB flex items-center w-52 h-14 shadow-xl rounded-xl relative">
                <figure><img className='w-14 pl-2 m-0' src={mongoDBLogo} alt="Album" /></figure>
                <h2 className=" font-serif font-bold text-lg">MongoDB</h2>
            </div>

            <div className="flex items-center w-52 h-14 shadow-xl rounded-xl relative left-60">
                <figure><img className='w-10 pl-2 m-0' src={htmlLogo} alt="Album" /></figure>
                <h2 className="pl-3 font-serif font-bold text-lg">HTML</h2>
            </div>

            <div className="leftRightAnimation flex items-center w-52 h-14 shadow-xl rounded-xl">
                <figure><img className='w-10 pl-2 m-0' src={javascriptLogo} alt="Album" /></figure>
                <h2 className="pl-3 font-serif font-bold text-lg">JavaScript</h2>
            </div>

            <div className="upDownAnimation flex items-center w-52 h-14 shadow-xl rounded-xl ">
                <figure><img className='w-16 pl-2 m-0' src={firebaseLogo} alt="Album" /></figure>
                <h2 className=" font-serif font-bold text-lg">Firebase</h2>
            </div>

            <div className="leftRightAnimationNode flex items-center w-52 h-14 shadow-xl rounded-xl relative">
                <figure><img className='w-20 pl-2 m-0' src={nodeJSLogo} alt="Album" /></figure>
                <h2 className="pl-3 font-serif font-bold text-lg">NodeJS</h2>
            </div>

            <div className="leftRightAnimationCSS flex items-center w-52 h-14 shadow-xl rounded-xl relative">
                <figure><img className='w-10 pl-2 m-0' src={cssLogo} alt="Album" /></figure>
                <h2 className="pl-3 font-serif font-bold text-lg">CSS</h2>
            </div>

            <div className="leftRightAnimationBootstrap flex items-center w-52 h-14 shadow-xl rounded-xl relative right-48">
                <figure><img className='w-10 pl-2 m-0' src={bootstrap} alt="Album" /></figure>
                <h2 className="pl-3 font-serif font-bold text-lg">Bootstrap</h2>
            </div>
            <div className="flex items-center w-52 h-14 shadow-xl rounded-xl relative">
                <figure><img className='w-10 pl-2 m-0' src={tailwindCSSLogo} alt="Album" /></figure>
                <h2 className="pl-3 font-serif font-bold text-lg">Tailwind</h2>
            </div>

        </div>
    );
};

export default HeaderAnimation;