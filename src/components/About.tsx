import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/solid";
import {motion} from "framer-motion";
import {Parallax} from "react-scroll-parallax";
import {TypeAnimation} from "react-type-animation";
import {useEffect, useRef, useState} from "react";

export const About = () => {
    const aboutRef = useRef(null);
    const [aboutElement, setAboutElement] = useState();

    useEffect(() => {
        if (aboutRef.current)
            setAboutElement(aboutRef.current);
    }, []);

    return (
        <div className="relative w-full h-screen" id="about" ref={aboutRef}>
            <div className="absolute flex flex-row w-full h-full bg-white pb-20">
                <div
                    className="md:basis-3/5 md:relative flex grid justify-start content-start tracking-widest font-thin">
                    <div className="absolute z-0 p-10 md:p-20 rotate-90">
                        <svg width="156" height="201" viewBox="0 0 390 503" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.2842 404.104L58.8769 423.697" stroke="#010101" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M-27.9849 336.801L8.02874 372.848" stroke="#010101" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M33.0728 341.163L168.735 476.825" stroke="#010101" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M130.574 381.967L249.947 501.34" stroke="#FAA916" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M-49.5601 201.866L77.7431 329.136" stroke="#FAA916" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M50.2539 244.95L260.95 455.646" stroke="#010101" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M-36.8726 157.824L7.73144 202.428" stroke="#010101" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M224.209 362.209L274.86 412.859" stroke="#010101" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M-87.3579 50.6421L170.949 308.949" stroke="#010101" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M119.836 201.139L372.162 453.466" stroke="#FAA916" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.35889 89.6621L67.0049 148.308" stroke="#FAA916" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M168.801 193.408L331.821 356.394" stroke="#010101" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.37891 26.9854L122.843 147.449" stroke="#010101" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M303.241 271.151L388.385 356.295" stroke="#FAA916" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M75.9917 43.9019L241.39 209.3" stroke="#FAA916" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M220.773 131.986L335.785 246.999" stroke="#010101" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M89.6372 0.850586L175.673 86.8537" stroke="#010101" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M322.999 177.516L367.735 222.252" stroke="#FAA916" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M158.459 12.9766L271.886 126.37" stroke="#FAA916" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M299.739 97.5586L327.228 125.048" stroke="#010101" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M251.467 49.2871L270.432 68.252" stroke="#010101" strokeWidth="1.65"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="absolute z-10 pt-32 md:pt-40 p-10 md:p-20 md:pr-10">
                        <TypeAnimation
                            sequence={[
                                "Hello! I am\nIan",
                                2000,
                                "Hello! I am\na Student",
                                1000,
                                "Hello! I am\na Programmer",
                                1000,
                            ]}
                            wrapper={"div"}
                            speed={40}
                            repeat={Infinity}
                            className="text-5xl md:text-7xl lg:text-8xl pb-3 whitespace-pre-line"
                        />
                        <motion.p
                            initial={{opacity: 0, x: -50}}
                            animate={{x: 0, opacity: 1}}
                            transition={{ease: "easeOut", duration: 0.5, delay: 0.5}}
                            className="text-base pb-8 pr-20">I am a electrical engineering student with 3 years of
                            experience in building and developing software
                        </motion.p>
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            animate={{x: 0, opacity: 1}}
                            transition={{ease: "easeOut", duration: 0.5, delay: 0.5}}
                            className="flex pb-8">
                            <button
                                className="bg-orange hover:bg-orange-700 text-white font-bold py-3 px-8 mr-2 rounded">
                                Hire Me
                            </button>
                            <button
                                className="hover:bg-orange-300 text-gray-800 font-bold py-3 px-8 rounded inline-flex items-center">
                                <span>CV</span>
                                <ArrowTopRightOnSquareIcon className="fill-current w-4 h-4 ml-2"/>
                            </button>
                        </motion.div>
                    </div>
                </div>
                <div className="basis-2/5 hidden md:grid flex justify-start content-center">
                    <div className="relative inline-block grid image">
                        <motion.img className="block w-auto h-96 lg:h-[28rem] self-center z-0 m-10"
                                    initial={{opacity: 0, scale: 0.5}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{ease: "easeOut", duration: 0.5}}
                                    src="https://ik.imagekit.io/6fnl649yp/portfolio/prof-pic2.png?updatedAt=1679797839236"
                                    alt="Ian"/>
                        <Parallax
                            speed={-10}
                            rotate={[0, 360]}
                            className="absolute z-20 top-0 right-0">
                            <motion.div
                                initial={{opacity: 0, scale: 0.5, rotate: 90}}
                                animate={{opacity: 1, scale: 1, rotate: 0}}
                                transition={{ease: "easeOut", duration: 0.5, delay: 0.5}}>
                                <svg width="89" height="104" viewBox="0 0 222 260" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M175.131 46.4463L115.56 106.017L55.9891 46.4463L9.27051 93.1648L68.8416 152.736L9.27051 212.307L55.9891 259.026L115.56 199.455L175.131 259.026L221.85 212.307L162.279 152.736L221.85 93.1648L175.131 46.4463Z"
                                        fill="#010101"/>
                                    <path
                                        d="M167.433 1.28076L107.862 60.8519L48.2907 1.28076L1.53906 47.9993L61.1102 107.57L1.53906 167.142L48.2907 213.893L107.862 154.322L167.433 213.893L214.151 167.142L154.58 107.57L214.151 47.9993L167.433 1.28076Z"
                                        stroke="#FAA916" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </motion.div>
                        </Parallax>
                        <Parallax
                            speed={10}
                            rotate={[0, 360]}
                            className="absolute z-20 bottom-0 left-0">
                            <motion.div
                                initial={{opacity: 0, scale: 0.5, rotate: -90}}
                                animate={{opacity: 1, scale: 1, rotate: 0}}
                                transition={{ease: "easeOut", duration: 0.5, delay: 1}}>
                                <svg width="63" height="74" viewBox="0 0 222 260" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M175.131 46.4463L115.56 106.017L55.9891 46.4463L9.27051 93.1648L68.8416 152.736L9.27051 212.307L55.9891 259.026L115.56 199.455L175.131 259.026L221.85 212.307L162.279 152.736L221.85 93.1648L175.131 46.4463Z"
                                        fill="#010101"/>
                                    <path
                                        d="M167.433 1.28076L107.862 60.8519L48.2907 1.28076L1.53906 47.9993L61.1102 107.57L1.53906 167.142L48.2907 213.893L107.862 154.322L167.433 213.893L214.151 167.142L154.58 107.57L214.151 47.9993L167.433 1.28076Z"
                                        stroke="#FAA916" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </motion.div>
                        </Parallax>
                    </div>
                </div>
            </div>
            <Parallax
                translateY={[200, 0]}
                className="absolute z-40 bg-orange w-full h-screen"
                targetElement={aboutElement}>
                <div className=""/>
            </Parallax>
        </div>
    );
};