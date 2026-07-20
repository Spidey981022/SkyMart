import { Zap } from 'lucide-react';

function About() {
    return (
        <div className="w-full h-[300px] mt-5 flex justify-center">
            <div className="container w-[40%] h-full flex flex-col p-5 justify-evenly items-center">
                <div className="logo h-[65px] w-[65px] rounded-3xl flex items-center justify-center bg-[#C8F400]">
                    <Zap className="text-black size-8 "/>
                </div>
                <div className="title">
                    <h1 className='text-5xl font-bold'>About <span className='text-[#C8F400]'>SkyMart</span></h1>
                </div>
                <div className="description">
                    <p className='text-center text-gray-500 text-lg'>SkyMart is a next-generation E-commerce platform built to make online shopping fast, fair, and enjoyable - for everyone.</p>
                </div>
            </div>
        </div>
    );
}

export default About;